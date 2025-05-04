// components/BlogGrid.tsx
'use client';

import type {BlogPostData} from '@/types/content';
import {ContentGrid} from './ContentGrid';

interface BlogGridProps {
  posts: BlogPostData[];
}

export function BlogGrid({ posts }: BlogGridProps) {
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