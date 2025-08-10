// app/blogs/[slug]/page.tsx

import MarkdownRenderer from '@/components/MarkdownRenderer'; // Adjust path if necessary
// Assume you create lib/blogs.ts similar to lib/news.ts
import { BlogPostData } from '@/types/content'; // Corrected import for BlogPostData
import { getAllBlogPostSlugs, getBlogPostData } from '@/lib/blogs'; // Corrected import for functions
import {notFound} from 'next/navigation';
import {Metadata} from 'next';
import Link from 'next/link';


// Add generateStaticParams for blogs
export async function generateStaticParams() {
    return getAllBlogPostSlugs().map(({ params }) => params);
}

// Add generateMetadata for blogs
export async function generateMetadata(props: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = props.params;
    try {
        // Assumes getBlogPostData exists in lib/blogs.ts
        const post = await getBlogPostData(slug);
        return {
            // Use excerpt if available, otherwise fallback
            title: post.title,
            description: post.excerpt || `Read the blog post: ${post.title}`,
        };
    } catch (error) {
        console.error(`Metadata generation failed for /blogs/${slug}:`, error);
        return {
            title: 'Blog Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }
}

// Update the main component
export default async function BlogPostPage(props: { params: { slug: string } }) {
    const { slug } = await props.params; // Await the params
    let post: BlogPostData;

    try {
        // Use your actual data fetching function from lib/blogs.ts
        post = await getBlogPostData(slug);
    } catch (error) {
        console.error(`Data fetching failed for blog post slug: ${slug}`, error);
        notFound(); // Use notFound for 404
    }

    return (
        // Consistent article structure
        <article className="container mx-auto max-w-3xl py-12">
            {/* Consistent title structure */}
            <h1 className="text-center text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
            {/* Consistent Markdown rendering */}
            {post.markdownContent ? (
                <MarkdownRenderer>
                    {post.markdownContent}
                </MarkdownRenderer>
            ) : (
                <p className="text-center text-muted-foreground">Blog post content is missing.</p>
            )}
            {/* Consistent Back link */}
            <div className="mt-12 text-center">
                <Link href="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    &larr; Back to All Blogs
                </Link>
            </div>
        </article>
    );
}