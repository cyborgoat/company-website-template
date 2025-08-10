import React from 'react';
import { NewsArticleData } from '@/types/content'; 
import { getSortedNewsArticles } from '@/lib/news';
import {NewsGrid} from '@/components/NewsGrid';
import {Metadata} from 'next';

// Optional: Add Metadata for SEO
export const metadata: Metadata = {
    title: 'Latest News',
    description: 'Stay updated with our latest announcements and company news.',
};

export default function NewsPage() {
    // Fetch data on the server
    const allNews: NewsArticleData[] = getSortedNewsArticles();

    return (
        <main className="mx-auto max-w-screen-xl px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <h1 className="text-4xl font-bold text-center mb-4 text-balance">Latest News</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-balance">
                Stay updated with our latest announcements and company news.
            </p>

            <NewsGrid newsItems={allNews} />
        </main>
    );
}