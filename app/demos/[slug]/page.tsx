// app/demos/[slug]/page.tsx
import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Link from 'next/link'; // Import Link component
import {DemoData, getAllDemoSlugs, getDemoData} from '@/lib/demos';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import {Badge} from '@/components/ui/badge';

// Generate static paths for all demos at build time
export async function generateStaticParams() {
    const slugs = getAllDemoSlugs();
    return slugs;
}

// Generate metadata specific to this demo page
export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    try {
        const demo = await getDemoData(params.slug);
        return {
            title: `${demo.title} | Demo`,
            description: demo.excerpt || `View the demo for ${demo.title}.`,
            openGraph: {
                title: `${demo.title} | Demo`,
                description: demo.excerpt || `View the demo for ${demo.title}.`,
                images: demo.thumbnail ? [{ url: demo.thumbnail }] : undefined,
                type: 'article',
            },
        };
    } catch (error) {
        return {
            title: 'Demo Not Found',
            description: 'The demo you are looking for could not be found.',
        };
    }
}


// The main page component
export default async function DemoDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    let demo: DemoData;

    try {
        demo = await getDemoData(params.slug);
    } catch (error) {
        console.error(`Error fetching demo data for slug "${params.slug}":`, error);
        notFound();
    }

    // Render the page
    return (
        // The main article container
        // End of main article container
        <article className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
            {/* Header section */}
            <header className="mb-8 md:mb-12 border-b pb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {demo.title}
                </h1>
                {demo.excerpt && (
                    <p className="text-lg md:text-xl text-muted-foreground mb-4">
                        {demo.excerpt}
                    </p>
                )}
                {demo.tags && Array.isArray(demo.tags) && demo.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {demo.tags.map((tag: string) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                    </div>
                )}
            </header>
            {/* Video Embed Section - Conditionally rendered */}
            {demo.videoUrl && (
                <section className="mb-8 md:mb-12">
                    <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-md">
                        <iframe
                            className="w-full h-full"
                            src={demo.videoUrl}
                            title={`${demo.title} Video Demo`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            )}
            {/* Markdown Content Section */}
            <section className="mb-12"> {/* Added margin-bottom here */}
                {demo.markdownContent ? (
                    <MarkdownRenderer>
                        {demo.markdownContent}
                    </MarkdownRenderer>
                ) : (
                    <p className="text-muted-foreground">No further details available for this demo.</p>
                )}
            </section>
            <div className="mt-12 text-center"> {/* Use mt-12 for spacing */}
                <Link href="/demos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {/* Use HTML arrow entity */}
                    &larr; Back to All Demos
                </Link>
            </div>
        </article>
    );
}