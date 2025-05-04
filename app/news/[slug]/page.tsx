// app/news/[slug]/page.tsx

import MarkdownRenderer from '@/components/MarkdownRenderer'; // Adjust path if necessary
import { getAllNewsSlugs, getNewsData, NewsArticleData } from '@/lib/news'; // Adjust path if necessary
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';

interface NewsArticleProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const paths = getAllNewsSlugs();
    return paths;
}

export async function generateMetadata(props: NewsArticleProps, parent: ResolvingMetadata): Promise<Metadata> {
    const params = await props.params;
    const slug = params.slug;
    try {
        const article = await getNewsData(slug);
        return {
            title: article.title,
            description: article.excerpt,
        };
    } catch (error) {
        console.error(`Metadata generation failed for /news/${slug}:`, error);
        return {
            title: 'Article Not Found',
            description: 'The requested news article could not be found.',
        };
    }
}

export default async function NewsArticle(props: NewsArticleProps) {
    const params = await props.params;
    const slug = params.slug;
    let article: NewsArticleData;

    try {
        article = await getNewsData(slug);
    } catch (error) {
        console.error(`Data fetching failed for news article slug: ${slug}`, error);
        notFound();
    }

    return (
        <article className="container mx-auto max-w-3xl py-12">
            <h1 className="text-center text-4xl md:text-5xl font-bold mb-8">{article.title}</h1>

            {article.markdownContent ? (
                <MarkdownRenderer>
                    {article.markdownContent}
                </MarkdownRenderer>
            ) : (
                <p className="text-center text-muted-foreground">Article content is missing.</p>
            )}

            <div className="mt-12 text-center">
                <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    &larr; Back to All News
                </Link>
            </div>
        </article>
    );
}