// components/BlogCard.tsx
'use client';

import type {BlogPostData} from '@/types/content';
import {ContentCard} from './ContentCard';

interface BlogCardProps {
  post: BlogPostData;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <ContentCard
      item={post}
      href={`/blogs/${post.slug}`}
      showReadTime={!!post.readTime}
      readTimeField="readTime"
      imageField="image"
    />
  );
}