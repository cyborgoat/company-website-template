import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ContentItem } from '@/types/content';

// Define the directory where content markdown files are stored
const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Reads all markdown files in a given content type directory, parses their frontmatter,
 * and returns an array of content data sorted by a specified field (e.g., 'order', 'date'),
 * then by title.
 * Does not include the full markdown content.
 * @param contentType The subdirectory name under 'content/' (e.g., 'blogs', 'demos', 'news').
 * @param defaultSortField The primary field to sort by if present (e.g., 'date', 'order').
 * @param sortAscendingPrimary Primary sort order: true for ascending, false for descending.
 */
export function getSortedContentData<T extends ContentItem>(
  contentType: string,
  defaultSortField: keyof T | 'date' | 'order' = 'date',
  sortAscendingPrimary = false
): T[] {
  const specificContentDir = path.join(contentDirectory, contentType);
  let fileNames: string[];

  try {
    fileNames = fs.readdirSync(specificContentDir);
  } catch {
    // console.error(`Error reading ${contentType} directory (${specificContentDir}):`, error); // Optionally log less verbosely or handle
    return [];
  }

  const allContentData = fileNames
    .filter((fileName) => /\.(md|mdx)$/.test(fileName))
    .map((fileName): T | null => {
      try {
        const slug = fileName.replace(/\.(md|mdx)$/, '');
        const fullPath = path.join(specificContentDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data: frontmatter } = matter(fileContents);

        if (!frontmatter.title) {
          // console.warn(`Skipping ${contentType} file ${fileName}: missing title frontmatter.`);
          return null;
        }

        return {
          slug,
          ...frontmatter,
        } as T;
      } catch {
        // console.error(`Error processing ${contentType} file ${fileName}:`, error);
        return null;
      }
    })
    .filter((item): item is T => item !== null);

  return allContentData.sort((a, b) => {
    const valA = a[defaultSortField as keyof T];
    const valB = b[defaultSortField as keyof T];

    if (defaultSortField === 'date') {
      const dateA = a.date ? new Date(a.date).getTime() : (sortAscendingPrimary ? Infinity : -Infinity);
      const dateB = b.date ? new Date(b.date).getTime() : (sortAscendingPrimary ? Infinity : -Infinity);
      const comparison = sortAscendingPrimary ? dateA - dateB : dateB - dateA;
      if (comparison !== 0) return comparison;
    } else if (valA !== undefined && valB !== undefined) {
      if (typeof valA === 'number' && typeof valB === 'number') {
        const comparison = sortAscendingPrimary ? valA - valB : valB - valA;
        if (comparison !== 0) return comparison;
      } else if (typeof valA === 'string' && typeof valB === 'string') {
        const comparison = sortAscendingPrimary ? valA.localeCompare(valB) : valB.localeCompare(valA);
        if (comparison !== 0) return comparison;
      }
    } else if (valA !== undefined) {
      return sortAscendingPrimary ? -1 : 1;
    } else if (valB !== undefined) {
      return sortAscendingPrimary ? 1 : -1;
    }
    return (a.title || '').localeCompare(b.title || '');
  });
}

export function getAllContentSlugs(contentType: string): { params: { slug: string } }[] {
  const specificContentDir = path.join(contentDirectory, contentType);
  let fileNames: string[];
  try {
    fileNames = fs.readdirSync(specificContentDir);
  } catch {
    // console.error(`Error reading ${contentType} directory for slugs (${specificContentDir}):`, error);
    return [];
  }
  return fileNames
    .filter((fileName) => /\.(md|mdx)$/.test(fileName))
    .map((fileName) => ({
      params: { slug: fileName.replace(/\.(md|mdx)$/, '') },
    }));
}

export async function getContentItem<T extends ContentItem>(
  contentType: string,
  slug: string
): Promise<T> {
  const specificContentDir = path.join(contentDirectory, contentType);
  const potentialFiles = [`${slug}.md`, `${slug}.mdx`];
  let fullPath = '';
  let fileFound = false;
  for (const file of potentialFiles) {
    const testPath = path.join(specificContentDir, file);
    if (fs.existsSync(testPath)) {
      fullPath = testPath;
      fileFound = true;
      break;
    }
  }
  if (!fileFound) {
    throw new Error(`${contentType} item not found for slug: ${slug} in ${specificContentDir}`);
  }
  try {
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    const { content: markdownContent, data: frontmatter } = matter(fileContents);
    return {
      slug,
      markdownContent,
      ...frontmatter,
      title: frontmatter.title || `Untitled ${contentType.slice(0, -1)}: ${slug}`,
    } as T;
  } catch {
    // console.error(`Error reading or parsing ${contentType} file ${fullPath}:`, error);
    throw new Error(`Failed to get data for ${contentType} item: ${slug}`);
  }
} 