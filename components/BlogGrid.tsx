// components/BlogGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations'; // Use animations from lib
import type { BlogPostData } from '@/types/content';
import { ContentGrid } from './ContentGrid';

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