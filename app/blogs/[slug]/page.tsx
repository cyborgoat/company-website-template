// app/blogs/[slug]/page.tsx

import MarkdownRenderer from '@/components/MarkdownRenderer'; // Adjust path if necessary
// Assume you create lib/blogs.ts similar to lib/news.ts
import {BlogPostData, getAllBlogSlugs, getBlogData} from '@/lib/blogs'; // Adjust paths/names if necessary
import {notFound} from 'next/navigation';
import {Metadata, ResolvingMetadata} from 'next';
import Link from 'next/link';

// Define props type
interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Add generateStaticParams for blogs
export async function generateStaticParams() {
    // Assumes getAllBlogSlugs exists in lib/blogs.ts
    const paths = getAllBlogSlugs();
    return paths;
}

// Add generateMetadata for blogs
export async function generateMetadata(props: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;
    const slug = params.slug;
    try {
        // Assumes getBlogData exists in lib/blogs.ts
        const post = await getBlogData(slug);
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
export default async function BlogPostPage(props: BlogPostPageProps) {
    const params = await props.params;
    const slug = params.slug;
    let post: BlogPostData;

    try {
        // Use your actual data fetching function from lib/blogs.ts
        post = await getBlogData(slug);
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