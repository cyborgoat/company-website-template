// components/BlogGrid.tsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations'; // Use animations from lib
import { BlogPostData } from '@/lib/blogs'; // Adjust path
import { BlogCard } from './BlogCard'; // Adjust path

interface BlogGridProps {
    posts: BlogPostData[];
}

export function BlogGrid({ posts }: BlogGridProps) {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            animate="visible"
        >
            {posts.length > 0 ? (
                posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))
            ) : (
                <motion.p
                    className="col-span-full text-center text-muted-foreground mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    No blog posts published yet. Check back soon!
                </motion.p>
            )}
        </motion.div>
    );
}