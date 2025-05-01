// app/news/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Newspaper, Calendar } from 'lucide-react'; // Example icons
import { motion } from 'framer-motion';
import { fadeIn, cardHover, staggerContainer, fadeInUp } from '@/lib/animations';

// Fetch this data
const newsItems = [
    { slug: "funding-round-closed", title: "Secures $10M Series A Funding", date: "2025-04-15", excerpt: "We're excited to announce the closing of our Series A funding round led by..." },
    { slug: "new-partnership-announced", title: "Partners with TechCorp for Cloud Integration", date: "2025-03-22", excerpt: "This strategic partnership will enhance our cloud service offerings..." },
    { slug: "product-launch-v2", title: "Launches Version 2.0 of Flagship Product", date: "2025-02-01", excerpt: "Version 2.0 includes major upgrades and new features based on user feedback..." },
    // ... more news items
];

export default function NewsPage() {
    return (
        <motion.main
            className="container mx-auto px-4 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-4xl font-bold text-center mb-4">Latest News</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Stay updated with our latest announcements and company news.
            </p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer(0.15, 0.2)}
                initial="hidden"
                animate="visible"
            >
                {newsItems.map((item) => (
                    <motion.div
                        key={item.slug}
                        variants={fadeInUp}
                        whileHover={cardHover}
                    >
                        <Card className="flex flex-col h-full transition-shadow duration-300">
                            {/* Optional Image */}
                            <CardHeader>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                                    <Calendar className="h-3 w-3"/>
                                    <span>{new Date(item.date).toLocaleDateString()}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{item.excerpt}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm" asChild>
                                    {/* Link to a full news article page if available */}
                                    <Link href={`/news/${item.slug}`}>Read More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
            {/* Remember to create app/news/[slug]/page.tsx if needed */}
        </motion.main>
    );
}