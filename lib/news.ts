// lib/news.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Parses frontmatter from markdown

// Define the expected structure for news article data
export interface NewsArticleData {
    slug: string;       // Unique identifier derived from filename
    title: string;      // Article title from frontmatter
    date: string;       // Publication date from frontmatter
    excerpt: string;    // Short summary from frontmatter
    image?: string;     // Optional image path from frontmatter
    markdownContent?: string; // Raw Markdown content of the article body
    [key: string]: unknown; // Allow other custom frontmatter fields
}

// Define the directory where news markdown files are stored
const newsDirectory = path.join(process.cwd(), 'content/news');

/**
 * Reads all markdown files in the news directory, parses their frontmatter,
 * and returns an array of article data sorted by date (newest first).
 * Does not include the full markdown content.
 */
export function getSortedNewsData(): NewsArticleData[] {
    // Get file names under /content/news
    let fileNames: string[];
    try {
        fileNames = fs.readdirSync(newsDirectory);
    } catch (error) {
        console.error(`Error reading news directory (${newsDirectory}):`, error);
        return []; // Return empty array if directory doesn't exist or can't be read
    }


    const allNewsData = fileNames
        .filter((fileName) => /\.(md|mdx)$/.test(fileName)) // Process .md or .mdx files
        .map((fileName): NewsArticleData | null => {
            try {
                // Remove ".md" or ".mdx" from file name to get slug
                const slug = fileName.replace(/\.(md|mdx)$/, '');

                // Read markdown file as string
                const fullPath = path.join(newsDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');

                // Use gray-matter to parse the post metadata section
                const matterResult = matter(fileContents);

                // Basic validation
                if (!matterResult.data.title || !matterResult.data.date || !matterResult.data.excerpt) {
                    console.warn(`Skipping ${fileName}: missing title, date, or excerpt frontmatter.`);
                    return null;
                }

                // Combine the data with the slug
                return {
                    slug,
                    title: matterResult.data.title,
                    date: matterResult.data.date,
                    excerpt: matterResult.data.excerpt,
                    image: matterResult.data.image || undefined, // Use undefined if not present
                    // Note: Raw markdownContent is not included here for list performance
                    ...matterResult.data, // Include any other frontmatter fields
                };
            } catch (error) {
                console.error(`Error processing news file ${fileName}:`, error);
                return null; // Skip file if error occurs during processing
            }

        })
        .filter((item): item is NewsArticleData => item !== null); // Filter out any null results from errors


    // Sort news by date (descending - newest first)
    return allNewsData.sort((a, b) => {
        // Simple date string comparison (descending)
        // Consider using date objects for more robust sorting if formats vary
        if (a.date < b.date) {
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
 * Example: [ { params: { slug: 'first-news-article' } }, ... ]
 */
export function getAllNewsSlugs(): { params: { slug: string } }[] {
    let fileNames: string[];
    try {
        fileNames = fs.readdirSync(newsDirectory);
    } catch (error) {
        console.error(`Error reading news directory for slugs (${newsDirectory}):`, error);
        return [];
    }

    return fileNames
        .filter((fileName) => /\.(md|mdx)$/.test(fileName)) // Ensure we only process markdown files
        .map((fileName) => {
            return {
                params: {
                    slug: fileName.replace(/\.(md|mdx)$/, ''),
                },
            };
        });
}

/**
 * Reads a specific news article's markdown file by slug,
 * parses frontmatter, and returns the full article data including
 * the raw markdown content.
 * @param slug The slug of the news article (filename without extension).
 * @returns A Promise resolving to the NewsArticleData.
 * @throws If the file is not found or cannot be parsed.
 */
export async function getNewsData(slug: string): Promise<NewsArticleData> {
    const potentialFiles = [`${slug}.md`, `${slug}.mdx`];
    let fullPath = '';
    let fileFound = false;

    for (const file of potentialFiles) {
        const testPath = path.join(newsDirectory, file);
        if (fs.existsSync(testPath)) {
            fullPath = testPath;
            fileFound = true;
            break;
        }
    }

    if (!fileFound) {
        throw new Error(`News article not found for slug: ${slug}`);
    }

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section and content
        const matterResult = matter(fileContents);

        // Basic validation
        if (!matterResult.data.title || !matterResult.data.date || !matterResult.data.excerpt) {
            console.warn(`File ${slug} has missing title, date, or excerpt frontmatter.`);
            // Decide if you want to throw an error or return partial data
            // throw new Error(`Missing required frontmatter in ${slug}`);
        }

        // Combine the data with the slug and RAW markdown content
        return {
            slug,
            markdownContent: matterResult.content, // Provide raw content for MarkdownRenderer
            title: matterResult.data.title || `Article: ${slug}`, // Provide fallback title
            date: matterResult.data.date || new Date().toISOString().split('T')[0], // Provide fallback date
            excerpt: matterResult.data.excerpt || 'No excerpt available.', // Provide fallback excerpt
            image: matterResult.data.image || undefined, // Use undefined if not present
            ...matterResult.data, // Include any other frontmatter fields
        };
    } catch (error) {
        console.error(`Error reading or parsing news file ${fullPath}:`, error);
        // Re-throw the error or a more specific one
        throw new Error(`Failed to get data for news article: ${slug}`);
    }

}