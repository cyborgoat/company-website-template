// lib/news.ts

import { NewsArticleData } from '@/types/content';
import {
  getSortedContentData,
  getAllContentSlugs,
  getContentItem,
} from './server-utils';

const CONTENT_TYPE = 'news';

/**
 * Reads all markdown files in the news directory, parses their frontmatter,
 * and returns an array of news article data sorted by date (newest first),
 * then by title.
 */
export function getSortedNewsArticles(): NewsArticleData[] {
  return getSortedContentData<NewsArticleData>(CONTENT_TYPE, 'date', false);
}

/**
 * Returns an array of slug objects suitable for Next.js's generateStaticParams.
 */
export function getAllNewsArticleSlugs(): { params: { slug: string } }[] {
  return getAllContentSlugs(CONTENT_TYPE);
}

/**
 * Reads a specific news article's markdown file by slug,
 * parses frontmatter, and returns the full news article data including
 * the raw markdown content.
 */
export async function getNewsArticleData(slug: string): Promise<NewsArticleData> {
  return getContentItem<NewsArticleData>(CONTENT_TYPE, slug);
}