import { ContentGrid } from './ContentGrid';
import type { NewsArticleData } from '@/types/content';
export function NewsGrid({ newsItems }: { newsItems: NewsArticleData[] }) {
  return (
    <ContentGrid
      items={newsItems}
      hrefPrefix="news"
      imageField="image"
    />
  );
}