// app/blogs/page.tsx
import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from 'lucide-react'; // Example icons

// In a real app, fetch this data from a CMS or API
const blogPosts = [
    { slug: "first-post", title: "The Future of Web Development", date: "May 1, 2025", readTime: "5 min read", excerpt: "Exploring upcoming trends and technologies shaping the web..." },
    { slug: "cloud-migration-strategies", title: "Effective Cloud Migration Strategies", date: "April 20, 2025", readTime: "7 min read", excerpt: "Tips and best practices for moving your infrastructure to the cloud..." },
    { slug: "minimalist-design-principles", title: "Minimalist Design Principles", date: "April 5, 2025", readTime: "4 min read", excerpt: "How less can be more when designing user interfaces..." },
    // Add more posts
];

export default function BlogPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Insights, news, and articles from our team on technology, design, and business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Card key={post.slug} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                        {/* Optional: Add Image component here for a post thumbnail */}
                        {/* <Image src={`/images/blogs/${post.slug}.jpg`} alt="" width={...} height={...} className="aspect-video object-cover"/> */}
                        <CardHeader>
                            <CardTitle className="text-xl">{post.title}</CardTitle>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                                <span className="flex items-center gap-1"><Calendar className="h-3 w-3"/> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock className="h-3 w-3"/> {post.readTime}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{post.excerpt}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" size="sm" asChild>
                                <Link href={`/blogs/${post.slug}`}>Read More</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}

// Note: You would also need to create dynamic route pages for individual posts,
// typically at `app/blogs/[slug]/page.tsx`.