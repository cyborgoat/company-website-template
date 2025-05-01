// app/blogs/page.tsx
'use client'; // Needed for Framer Motion animations

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import if you want to add post thumbnails

// Import necessary shadcn/ui components
// Ensure you have added these via the CLI: npx shadcn-ui@latest add card button
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import icons
import { Calendar, Clock } from 'lucide-react';

// Import framer-motion
import { motion } from 'framer-motion';

// --- Animation Variants ---
// You can place these here or import them from a shared file like '@/lib/animations'
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
        },
    },
});

const cardHover = {
    scale: 1.03, // Slightly enlarge the card on hover
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)", // Optional: add subtle shadow on hover
    transition: { duration: 0.2 }
};
// --- End Animation Variants ---


// --- Placeholder Data ---
// IMPORTANT: Replace this with actual data fetching logic (e.g., from a CMS or API)
const blogPosts = [
    {
        slug: "future-web-development", // Used for the URL
        title: "The Future of Web Development in 2025",
        date: "2025-05-01", // Use YYYY-MM-DD for easier sorting/parsing
        readTime: "5 min read",
        excerpt: "Exploring upcoming trends like AI integration, edge computing, and the evolution of JavaScript frameworks.",
        imageUrl: "/images/blog/web-dev-future.png" // Optional: Path in /public folder
    },
    {
        slug: "cloud-migration-strategies",
        title: "Effective Cloud Migration Strategies for SMEs",
        date: "2025-04-20",
        readTime: "7 min read",
        excerpt: "Practical tips and best practices for small and medium enterprises moving their infrastructure to the cloud.",
        imageUrl: "/images/blog/cloud-migration.png" // Optional
    },
    {
        slug: "minimalist-design-power",
        title: "The Power of Minimalist Design in User Interfaces",
        date: "2025-04-05",
        readTime: "4 min read",
        excerpt: "How adopting a 'less is more' approach can lead to more intuitive, engaging, and effective user experiences.",
        imageUrl: "/images/blog/minimalist-design.png" // Optional
    },
    // Add more post objects here
];
// --- End Placeholder Data ---


export default function BlogsPage() {
    return (
        // Page container with fade-in animation
        <motion.main
            className="container mx-auto px-4 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            {/* Page Title */}
            <motion.h1
                className="text-4xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Our Blog
            </motion.h1>

            {/* Introductory Paragraph */}
            <motion.p
                className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Insights, news, and articles from our team on technology, design, business strategy, and more.
            </motion.p>

            {/* Grid container with stagger animation */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // Responsive grid
                variants={staggerContainer(0.15, 0.2)} // Stagger children, start after 0.2s delay
                initial="hidden"
                animate="visible"
            >
                {/* Map through the blog posts data */}
                {blogPosts.map((post) => (
                    // Wrapper for each card with individual animation and hover effect
                    <motion.div
                        key={post.slug}
                        variants={fadeInUp} // Use fadeInUp for each card
                        whileHover={cardHover} // Use cardHover effect
                    >
                        {/* Card component - Must be the single direct child */}
                        <Card className="flex flex-col h-full overflow-hidden border shadow-sm transition-shadow duration-300"> {/* h-full ensures cards in a row have same height */}
                            {/* Optional: Post Thumbnail Image */}
                            {post.imageUrl && (
                                <div className="aspect-video relative w-full">
                                    <Image
                                        src={post.imageUrl}
                                        alt={`${post.title} thumbnail`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Card Header: Title and Meta Info */}
                            <CardHeader>
                                <CardTitle className="text-xl hover:text-primary transition-colors">
                                    {/* Link the title to the individual post page */}
                                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                                </CardTitle>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                      {/* Format date nicely */}
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                                    <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                                        {post.readTime}
                  </span>
                                </div>
                            </CardHeader>

                            {/* Card Content: Excerpt */}
                            <CardContent className="flex-grow"> {/* flex-grow pushes footer down */}
                                <CardDescription>{post.excerpt}</CardDescription>
                            </CardContent>

                            {/* Card Footer: Read More Button */}
                            <CardFooter>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/blogs/${post.slug}`}>Read More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div> // End motion wrapper for card
                ))}
            </motion.div> {/* End grid container */}

            {/* Message if no posts exist */}
            {blogPosts.length === 0 && (
                <motion.p
                    className="text-center text-muted-foreground mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    No blog posts published yet. Check back soon!
                </motion.p>
            )}

            {/* Reminder about individual post pages */}
            {/*
        IMPORTANT: You will also need to create a dynamic route page for individual blog posts.
        This would typically be located at: app/blogs/[slug]/page.tsx
        That page would fetch data based on the 'slug' parameter and display the full post content.
      */}

        </motion.main> // End page container
    );
}