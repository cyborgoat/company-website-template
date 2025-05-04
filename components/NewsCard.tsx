// components/NewsCard.tsx
'use client';

import type {NewsArticleData} from '@/types/content';
import {ContentCard} from './ContentCard';

interface NewsCardProps {
  article: NewsArticleData;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <ContentCard
      item={article}
      href={`/news/${article.slug}`}
      imageField="image"
    />
  );
}