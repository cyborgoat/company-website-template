// components/NewsCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NewsArticleData } from '@/lib/news'; // Adjust path if necessary
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { cardHover, fadeInUp } from '@/lib/animations';

interface NewsCardProps {
    article: NewsArticleData;
}

export function NewsCard({ article }: NewsCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            whileHover={cardHover}
            className="h-full"
        >
            <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 dark:border-gray-700">
                {article.image && (
                    <div className="relative w-full h-48">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            style={{ objectFit: 'cover' }} // Correct way for fill in newer Next.js
                            className="rounded-t-lg"
                            sizes="(max-width: 768px) 100vw, 50vw" // Example sizes, adjust if needed
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                        <Calendar className="h-3 w-3"/>
                        <span>{new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</span>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardDescription>{article.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                    {/* --- CORRECTION START --- */}
                    <Button variant="outline" size="sm" asChild>
                        {/* Place Link directly inside Button when using asChild */}
                        <Link href={`/news/${article.slug}`}>
                            Read More &rarr;
                        </Link>
                    </Button>
                    {/* --- CORRECTION END --- */}
                </CardFooter>
            </Card>
        </motion.div>
    );
}