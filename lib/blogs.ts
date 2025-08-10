// lib/blogs.ts
// eslint-disable @typescript-eslint/no-explicit-any
import { BlogPostData } from '@/types/content';
import {
  getSortedContentData,
  getAllContentSlugs,
  getContentItem,
} from './server-utils';

const CONTENT_TYPE = 'blogs';

/**
 * Reads all markdown files in the blogs directory, parses their frontmatter,
 * and returns an array of blog post data sorted by date (newest first),
 * then by title.
 */
export function getSortedBlogPosts(): BlogPostData[] {
  // 'date' is the primary sort field, false for descending (newest first)
  return getSortedContentData<BlogPostData>(CONTENT_TYPE, 'date', false);
}

/**
 * Returns an array of slug objects suitable for Next.js's generateStaticParams.
 */
export function getAllBlogPostSlugs(): { params: { slug: string } }[] {
  return getAllContentSlugs(CONTENT_TYPE);
}

/**
 * Reads a specific blog post's markdown file by slug,
 * parses frontmatter, and returns the full blog post data including
 * the raw markdown content.
 */
export async function getBlogPostData(slug: string): Promise<BlogPostData> {
  return getContentItem<BlogPostData>(CONTENT_TYPE, slug);
}