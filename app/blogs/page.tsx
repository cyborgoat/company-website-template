// app/blogs/page.tsx
// Server Component

import React from 'react';
import { Metadata } from 'next';
import { BlogPostData } from '@/types/content';
import { getSortedBlogPosts } from '@/lib/blogs';
import { BlogFilters } from '@/components/BlogFilters';
import { BlogList } from '@/components/BlogList';

// Add Metadata for SEO - This is allowed in Server Components
export const metadata: Metadata = {
    title: 'Our Blog',
    description: 'Insights, news, and articles from our team on technology, design, business strategy, and more.',
};


export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const allPosts: BlogPostData[] = getSortedBlogPosts();

  const sp = await searchParams;
  const qRaw = (sp?.q ?? '') as string | string[];
  const q = Array.isArray(qRaw) ? qRaw[0] : qRaw;

  const tagsParam = sp?.tags as string | string[] | undefined;
  const selectedTags = Array.isArray(tagsParam)
    ? tagsParam.flatMap((s) => s.split(',').map((t) => t.trim()).filter(Boolean))
    : typeof tagsParam === 'string' && tagsParam.length > 0
      ? tagsParam.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

  const availableTags = Array.from(
    new Set(
      allPosts.flatMap((p) => {
        const t = (p as any).tags as unknown;
        return Array.isArray(t) ? (t as string[]) : [];
      })
    )
  ).sort((a, b) => a.localeCompare(b));

  const normalizedSelected = selectedTags.map((t) => t.toLowerCase());

  const filteredPosts = allPosts.filter((post) => {
    const title = (post.title || '').toLowerCase();
    const excerpt = (post.excerpt || '').toLowerCase();
    const tags = Array.isArray((post as any).tags) ? ((post as any).tags as string[]) : [];
    const tagSetLower = new Set(tags.map((t) => t.toLowerCase()));

    const matchesQuery = q
      ? title.includes(q.toLowerCase()) || excerpt.includes(q.toLowerCase())
      : true;

    const matchesTags = normalizedSelected.length > 0
      ? normalizedSelected.every((t) => tagSetLower.has(t))
      : true;

    return matchesQuery && matchesTags;
  });

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
      <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        Insights, news, and articles from our team on technology, design, business strategy, and more.
      </p>

      <div className="max-w-5xl mx-auto">
        <BlogFilters availableTags={availableTags} currentQuery={q} currentTags={selectedTags} />
        <BlogList posts={filteredPosts} />
      </div>
    </main>
  );
}