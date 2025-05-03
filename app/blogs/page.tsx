// app/blogs/page.tsx
'use client'; // Needed for Framer Motion animations

import React from 'react';
import Link from 'next/link'; // Keep Link import
import Image from 'next/image';

// Import necessary shadcn/ui components
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import icons
import { Calendar, Clock } from 'lucide-react';

// Import framer-motion
import { motion } from 'framer-motion';

// --- Animation Variants ---
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
    scale: 1.03,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.08)", // Slightly enhanced shadow on hover
    transition: { type: "spring", stiffness: 300, damping: 20 } // Spring animation for hover
};
// --- End Animation Variants ---


// --- Placeholder Data ---
const blogPosts = [
    {
        slug: "future-web-development",
        title: "The Future of Web Development in 2025",
        date: "2025-05-01",
        readTime: "5 min read",
        excerpt: "Exploring upcoming trends like AI integration, edge computing, and the evolution of JavaScript frameworks.",
        imageUrl: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        slug: "cloud-migration-strategies",
        title: "Effective Cloud Migration Strategies for SMEs",
        date: "2025-04-20",
        readTime: "7 min read",
        excerpt: "Practical tips and best practices for small and medium enterprises moving their infrastructure to the cloud.",
        imageUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        slug: "minimalist-design-power",
        title: "The Power of Minimalist Design in User Interfaces",
        date: "2025-04-05",
        readTime: "4 min read",
        excerpt: "How adopting a 'less is more' approach can lead to more intuitive, engaging, and effective user experiences.",
        imageUrl: "https://images.pexels.com/photos/34088/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // Add more post objects here
];
// --- End Placeholder Data ---


export default function BlogsPage() {
    return (
        <motion.main
            className="container mx-auto px-4 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="text-4xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Our Blog
            </motion.h1>

            <motion.p
                className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Insights, news, and articles from our team on technology, design, business strategy, and more.
            </motion.p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer(0.15, 0.2)}
                initial="hidden"
                animate="visible"
            >
                {blogPosts.map((post) => (
                    // It's often better to apply motion effects to a wrapper div
                    // containing the interactive element (Link) rather than directly on the Link.
                    <motion.div
                        key={post.slug} // Key on the outermost element in the map
                        variants={fadeInUp}
                        whileHover={cardHover}
                        className="h-full" // Ensure motion div takes full height for layout
                    >
                        {/* Link wraps the entire Card for a larger clickable area */}
                        <Link href={`/blogs/${post.slug}`} passHref legacyBehavior>
                            {/* Use an 'a' tag inside Link when using legacyBehavior for robustness */}
                            <a className="focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg block h-full">
                                <Card className="flex flex-col h-full overflow-hidden border shadow-sm transition-shadow duration-300 hover:shadow-md"> {/* Remove hover effect from Card if Link handles it */}
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
                                    <CardHeader>
                                        {/* Title doesn't strictly need its own Link if the card is linked, but keeping it doesn't hurt */}
                                        <CardTitle className="text-xl hover:text-primary transition-colors">
                                            {post.title}
                                            {/* <Link href={`/blog/${post.slug}`}>{post.title}</Link> */} {/* Redundant if card is linked */}
                                        </CardTitle>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="h-3.5 w-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription>{post.excerpt}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        {/* The Button is now just visual, the Link handles navigation */}
                                        <Button variant="outline" size="sm" tabIndex={-1} > {/* tabIndex -1 prevents double tabbing */}
                                            Read More
                                        </Button>
                                        {/* --- Previous Button linking approach (alternative) --- */}
                                        {/* <Button variant="outline" size="sm" asChild>
                                            <Link href={`/blog/${post.slug}`}>Read More</Link>
                                        </Button> */}
                                    </CardFooter>
                                </Card>
                            </a>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

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

            {/* Reminder comment - Make sure you have the dynamic page! */}
            {/* Ensure 'app/blog/[slug]/page.tsx' exists to handle these links */}

        </motion.main>
    );
}