// components/NewsGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations'; // Import animations
import { NewsArticleData } from '@/lib/news'; // Adjust path
import { NewsCard } from './NewsCard'; // Adjust path

interface NewsGridProps {
    newsItems: NewsArticleData[];
}

export function NewsGrid({ newsItems }: NewsGridProps) {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.15, 0.2)} // Use your existing stagger values
            initial="hidden"
            animate="visible"
        >
            {newsItems.length > 0 ? (
                newsItems.map((item) => (
                    <NewsCard key={item.slug} article={item} />
                ))
            ) : (
                <p className="col-span-full text-center text-muted-foreground">
                    No news articles found.
                </p>
            )}
        </motion.div>
    );
}