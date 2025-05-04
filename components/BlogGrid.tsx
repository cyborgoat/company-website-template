import { ContentGrid } from './ContentGrid';
import type { BlogPostData } from '@/types/content';
export function BlogGrid({ posts }: { posts: BlogPostData[] }) {
  return (
    <ContentGrid
      items={posts}
      hrefPrefix="blogs"
      showReadTime={true}
      readTimeField="readTime"
      imageField="image"
    />
  );
}