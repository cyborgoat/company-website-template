// components/BlogCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPostData } from '@/lib/blogs'; // Adjust path if necessary
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from 'lucide-react'; // Use icons from your example
import { motion } from 'framer-motion';
import { cardHover, fadeInUp } from '@/lib/animations'; // Use animations from lib

interface BlogCardProps {
    post: BlogPostData;
}

export function BlogCard({ post }: BlogCardProps) {
    // Fallback image if needed
    const imageUrl = post.image || post.imageUrl || "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Example fallback

    return (
        <motion.div
            variants={fadeInUp}
            whileHover={cardHover}
            className="h-full" // Ensure motion div takes full height for layout
        >
            {/* Card itself is not a link anymore */}
            <Card className="flex flex-col h-full overflow-hidden border shadow-sm transition-shadow duration-300 dark:border-gray-700">
                {/* Use the actual image source */}
                <div className="aspect-video relative w-full">
                    <Image
                        src={imageUrl}
                        alt={`${post.title} thumbnail`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }} // Correct property for fill
                        className="bg-muted" // Add a background color while image loads
                    />
                </div>
                <CardHeader>
                    {/* Link only the title for accessibility, or rely on Read More button */}
                    <CardTitle className="text-xl">
                        <Link href={`/blogs/${post.slug}`} className="hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm">
                            {post.title}
                        </Link>
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground pt-1">
                        {post.date && post.date !== 'N/A' && ( // Conditionally render date
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" />
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                            </span>
                        )}
                        {/* You might need to add 'readTime' to your frontmatter or calculate it */}
                        {post.readTime && (
                            <span className="flex items-center gap-1.5">
                                <Clock className="h-3.5 w-3.5" />
                                {post.readTime}
                            </span>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                    {/* Use Button with asChild containing Link */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={`/blogs/${post.slug}`}>Read More &rarr;</Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}