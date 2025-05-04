// lib/demos.ts

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Parses frontmatter from markdown

// Define the expected structure for demo data
export interface DemoData {
    slug: string;            // Unique identifier derived from filename
    title: string;           // Demo title from frontmatter
    excerpt?: string;        // Optional short summary from frontmatter
    thumbnail?: string;      // Optional path to a thumbnail image
    videoUrl?: string;       // Optional URL for an embedded video (e.g., YouTube embed URL)
    markdownContent?: string;// Raw Markdown content of the demo description/details
    order?: number;          // Optional field to control display order on the listing page
    [key: string]: any;      // Allow other custom frontmatter fields
}

// Define the directory where demo markdown files are stored
const demosDirectory = path.join(process.cwd(), 'content/demos');

/**
 * Reads all markdown files in the demos directory, parses their frontmatter,
 * and returns an array of demo data sorted by the 'order' field (ascending),
 * then by title.
 * Does not include the full markdown content.
 */
export function getSortedDemoData(): DemoData[] {
    let fileNames: string[];
    try {
        fileNames = fs.readdirSync(demosDirectory);
    } catch (error) {
        console.error(`Error reading demos directory (${demosDirectory}):`, error);
        return []; // Return empty array if directory doesn't exist or can't be read
    }

    const allDemoData = fileNames
        .filter((fileName) => /\.(md|mdx)$/.test(fileName)) // Process .md or .mdx files
        .map((fileName): DemoData | null => {
            try {
                const slug = fileName.replace(/\.(md|mdx)$/, '');
                const fullPath = path.join(demosDirectory, fileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const matterResult = matter(fileContents);

                // Basic validation (title is required for a demo listing)
                if (!matterResult.data.title) {
                    console.warn(`Skipping demo ${fileName}: missing title frontmatter.`);
                    return null;
                }

                return {
                    slug,
                    title: matterResult.data.title,
                    // Add fallbacks or handle missing optional fields gracefully
                    excerpt: matterResult.data.excerpt || undefined,
                    thumbnail: matterResult.data.thumbnail || undefined,
                    videoUrl: matterResult.data.videoUrl || undefined,
                    order: matterResult.data.order, // Keep as undefined if not present
                    ...matterResult.data,
                };
            } catch (error) {
                console.error(`Error processing demo file ${fileName}:`, error);
                return null;
            }
        })
        .filter((item): item is DemoData => item !== null);

    // Sort demos: primarily by 'order' (ascending), secondarily by 'title' (ascending)
    return allDemoData.sort((a, b) => {
        const orderA = typeof a.order === 'number' ? a.order : Infinity;
        const orderB = typeof b.order === 'number' ? b.order : Infinity;

        if (orderA !== orderB) {
            return orderA - orderB;
        }
        // If order is the same or undefined for both, sort alphabetically by title
        return a.title.localeCompare(b.title);
    });
}

/**
 * Returns an array of slug objects suitable for Next.js's generateStaticParams.
 * Example: [ { params: { slug: 'my-first-demo' } }, ... ]
 */
export function getAllDemoSlugs(): { params: { slug: string } }[] {
    let fileNames: string[];
    try {
        fileNames = fs.readdirSync(demosDirectory);
    } catch (error) {
        console.error(`Error reading demos directory for slugs (${demosDirectory}):`, error);
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
 * Reads a specific demo's markdown file by slug,
 * parses frontmatter, and returns the full demo data including
 * the raw markdown content and video URL.
 * @param slug The slug of the demo (filename without extension).
 * @returns A Promise resolving to the DemoData.
 * @throws If the file is not found or cannot be parsed.
 */
export async function getDemoData(slug: string): Promise<DemoData> {
    const potentialFiles = [`${slug}.md`, `${slug}.mdx`];
    let fullPath = '';
    let fileFound = false;

    for (const file of potentialFiles) {
        const testPath = path.join(demosDirectory, file);
        if (fs.existsSync(testPath)) {
            fullPath = testPath;
            fileFound = true;
            break;
        }
    }

    if (!fileFound) {
        throw new Error(`Demo not found for slug: ${slug}`);
    }

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        // Validation (Title is usually essential for a demo page)
        if (!matterResult.data.title) {
            console.warn(`Demo file ${slug} has missing title frontmatter.`);
            // Depending on requirements, you might throw or provide a fallback
            // throw new Error(`Missing title frontmatter in demo: ${slug}`);
        }

        return {
            slug,
            markdownContent: matterResult.content, // Provide raw content
            title: matterResult.data.title || `Demo: ${slug}`, // Fallback title
            excerpt: matterResult.data.excerpt || undefined, // Optional field
            thumbnail: matterResult.data.thumbnail || undefined, // Optional field
            videoUrl: matterResult.data.videoUrl || undefined, // Optional field
            order: matterResult.data.order || undefined, // Optional field
            ...matterResult.data,
        };
    } catch (error) {
        console.error(`Error reading or parsing demo file ${fullPath}:`, error);
        throw new Error(`Failed to get data for demo: ${slug}`);
    }
}