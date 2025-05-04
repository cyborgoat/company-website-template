// components/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { BlogPostData } from '@/types/content';
import { ContentCard } from './ContentCard';

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