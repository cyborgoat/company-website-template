// lib/blogs.ts
// eslint-disable @typescript-eslint/no-explicit-any
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Parses frontmatter from markdown

// Define the expected structure for blog post data
// Match this with the interface used in app/blogs/[slug]/page.tsx
export interface BlogPostData {
    slug: string;       // Unique identifier derived from filename
    title: string;      // Blog post title from frontmatter
    date?: string;      // Optional publication date from frontmatter
    excerpt?: string;   // Optional short summary from frontmatter
    image?: string;     // Optional image path from frontmatter
    markdownContent?: string; // Raw Markdown content of the blog post body
    [key: string]: unknown; // Allow other custom frontmatter fields
}

// Define the directory where blog markdown files are stored
// *** ADJUST THIS if your blog posts are in a different folder ***
const blogsDirectory = path.join(process.cwd(), 'content/blogs');

/**
 * Reads all markdown files in the blogs directory, parses their frontmatter,
 * and returns an array of blog post data sorted by date (newest first).
 * Does not include the full markdown content. Assumes 'date' frontmatter for sorting.
 */
export function getSortedBlogData(): BlogPostData[] {
    let fileNames: string[];
    try {
        fileNames = fs.readdirSync(blogsDirectory);
    } catch (error) {
        console.error(`Error reading blogs directory (${blogsDirectory}):`, error);
        return []; // Return empty array if directory doesn't exist or can't be read
    }

    const allBlogData = fileNames
        .filter((fileName) => /\.(md|mdx)$/.test(fileName)) // Process .md or .mdx files
        .map((fileName): BlogPostData | null => {
            try {
                const slug = fileName.replace(/\.(md|mdx)$/, '');
                const fullPath = path.join(blogsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const matterResult = matter(fileContents);

                // Basic validation (title is required, date/excerpt are good for lists)
                if (!matterResult.data.title) {
                    console.warn(`Skipping blog post ${fileName}: missing title frontmatter.`);
                    return null;
                }
                if (!matterResult.data.date) {
                    console.warn(`Blog post ${fileName} is missing 'date' frontmatter, sorting may be affected.`);
                }
                if (!matterResult.data.excerpt) {
                    console.warn(`Blog post ${fileName} is missing 'excerpt' frontmatter.`);
                }


                return {
                    slug,
                    title: matterResult.data.title,
                    // Add fallbacks or handle missing optional fields gracefully
                    date: matterResult.data.date || 'N/A',
                    excerpt: matterResult.data.excerpt || 'No excerpt available.',
                    image: matterResult.data.image || undefined,
                    ...matterResult.data,
                };
            } catch (error) {
                console.error(`Error processing blog post file ${fileName}:`, error);
                return null;
            }
        })
        .filter((item): item is BlogPostData => item !== null);

    // Sort blog posts by date (descending - newest first)
    // Ensure your date frontmatter is in a consistent, sortable format (e.g., YYYY-MM-DD)
    return allBlogData.sort((a, b) => {
        if (!a.date || !b.date || a.date < b.date) {
            return 1;
        } else if (a.date > b.date) {
            return -1;
        } else {
            return 0;
        }
    });
}

/**
 * Returns an array of slug objects suitable for Next.js's generateStaticParams.
 * Example: [ { params: { slug: 'my-first-post' } }, ... ]
 */
export function getAllBlogSlugs(): { params: { slug: string } }[] {
    let fileNames: string[];
    try {
        fileNames = fs.readdirSync(blogsDirectory);
    } catch (error) {
        console.error(`Error reading blogs directory for slugs (${blogsDirectory}):`, error);
        return [];
    }

    return fileNames
        .filter((fileName) => /\.(md|mdx)$/.test(fileName))
        .map((fileName) => {
            return {
                params: {
                    slug: fileName.replace(/\.(md|mdx)$/, ''),
                },
            };
        });
}

/**
 * Reads a specific blog post's markdown file by slug,
 * parses frontmatter, and returns the full post data including
 * the raw markdown content.
 * @param slug The slug of the blog post (filename without extension).
 * @returns A Promise resolving to the BlogPostData.
 * @throws If the file is not found or cannot be parsed.
 */
export async function getBlogData(slug: string): Promise<BlogPostData> {
    const potentialFiles = [`${slug}.md`, `${slug}.mdx`];
    let fullPath = '';
    let fileFound = false;

    for (const file of potentialFiles) {
        const testPath = path.join(blogsDirectory, file);
        if (fs.existsSync(testPath)) {
            fullPath = testPath;
            fileFound = true;
            break;
        }
    }

    if (!fileFound) {
        throw new Error(`Blog post not found for slug: ${slug}`);
    }

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        // Validation (Title is usually essential for a blog post page)
        if (!matterResult.data.title) {
            console.warn(`Blog post file ${slug} has missing title frontmatter.`);
            // Depending on requirements, you might throw or provide a fallback
            // throw new Error(`Missing title frontmatter in blog post: ${slug}`);
        }

        return {
            slug,
            markdownContent: matterResult.content, // Provide raw content
            title: matterResult.data.title || `Blog Post: ${slug}`, // Fallback title
            date: matterResult.data.date || undefined, // Optional field
            excerpt: matterResult.data.excerpt || undefined, // Optional field
            image: matterResult.data.image || undefined, // Optional field
            ...matterResult.data,
        };
    } catch (error) {
        console.error(`Error reading or parsing blog post file ${fullPath}:`, error);
        throw new Error(`Failed to get data for blog post: ${slug}`);
    }
}