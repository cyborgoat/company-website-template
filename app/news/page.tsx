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
        // Keep your main layout and intro text
        <main className="container mx-auto px-4 py-16"> {/* Removed motion from main */}
            <h1 className="text-4xl font-bold text-center mb-4">Latest News</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Stay updated with our latest announcements and company news.
            </p>

            {/* Render the client component, passing the fetched data */}
            <NewsGrid newsItems={allNews} />

            {/* The comment below is still relevant */}
            {/* Remember to create app/news/[slug]/page.tsx if needed */}
        </main>
    );
}