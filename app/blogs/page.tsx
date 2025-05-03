// app/blogs/page.tsx
// NO 'use client'; directive here - This is a Server Component

import React from 'react';
import { getSortedBlogData, BlogPostData } from '@/lib/blogs'; // Import data fetching
import { BlogGrid } from '@/components/BlogGrid'; // Import client grid component
import { Metadata } from 'next'; // Import Metadata type

// Add Metadata for SEO - This is allowed in Server Components
export const metadata: Metadata = {
    title: 'Our Blog',
    description: 'Insights, news, and articles from our team on technology, design, business strategy, and more.',
};


export default function BlogsPage() {
    // Fetch blog post data on the server
    const allPosts: BlogPostData[] = getSortedBlogData();

    return (
        // Use regular main tag, animations handled in BlogGrid
        <main className="container mx-auto px-4 py-16">
            {/* Static title and description */}
            <h1 className="text-4xl font-bold text-center mb-4">
                Our Blog
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Insights, news, and articles from our team on technology, design, business strategy, and more.
            </p>

            {/* Render the client grid component, passing the fetched posts */}
            {/* BlogGrid component internally uses 'use client' */}
            <BlogGrid posts={allPosts} />
        </main>
    );
}