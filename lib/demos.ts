// lib/demos.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
// Removed unused imports: fs, path, matter
import { DemoData } from '@/types/content';
import {
  getSortedContentData,
  getAllContentSlugs,
  getContentItem,
} from './server-utils'; // Changed import path

const CONTENT_TYPE = 'demos';

/**
 * Reads all markdown files in the demos directory, parses their frontmatter,
 * and returns an array of demo data sorted by the 'order' field (ascending),
 * then by title.
 * Does not include the full markdown content.
 */
export function getSortedDemoData(): DemoData[] {
    // 'order' is the primary sort field, true for ascending (1, 2, 3...)
    // 'title' is the secondary sort field (handled by getSortedContentData)
    return getSortedContentData<DemoData>(CONTENT_TYPE, 'order', true);
}

/**
 * Returns an array of slug objects suitable for Next.js's generateStaticParams.
 * Example: [ { params: { slug: 'my-first-demo' } }, ... ]
 */
export function getAllDemoSlugs(): { params: { slug: string } }[] {
    return getAllContentSlugs(CONTENT_TYPE);
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
    return getContentItem<DemoData>(CONTENT_TYPE, slug);
}