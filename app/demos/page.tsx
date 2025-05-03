// app/demos/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getSortedDemoData, DemoData } from '@/lib/demos'; // Import demo data functions
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Metadata for the page
export const metadata: Metadata = {
    title: 'Product Demos | Your Company Name', // Customize your company name
    description: 'Explore interactive demos showcasing our products and features.',
};

// Reusable Demo Card Component (Displays title, excerpt, thumbnail, tags)
function DemoCard({ demo }: { demo: DemoData }) {
    return (
        <Link href={`/demos/${demo.slug}`} className="block group h-full"> {/* Ensure links point to /demos/... */}
            <Card className="h-full flex flex-col transition-shadow duration-200 hover:shadow-lg dark:hover:shadow-primary/20 overflow-hidden"> {/* Added overflow-hidden */}
                {demo.thumbnail && (
                    <div className="relative w-full aspect-video"> {/* Aspect ratio for consistency */}
                        <Image
                            src={demo.thumbnail}
                            alt={`${demo.title} thumbnail`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}
                {/* Apply top rounding if no image */}
                <CardHeader className={cn(!demo.thumbnail && "rounded-t-lg")}>
                    <CardTitle className="group-hover:text-primary transition-colors">{demo.title}</CardTitle>
                    {demo.excerpt && (
                        <CardDescription className="mt-2 line-clamp-3">{demo.excerpt}</CardDescription>
                    )}
                </CardHeader>
                {/* Use mt-auto to push tags towards the bottom */}
                <CardContent className="mt-auto pt-2 flex flex-col justify-end"> {/* Adjusted for flex */}
                    {demo.tags && Array.isArray(demo.tags) && demo.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {demo.tags.map((tag: string) => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
}


// Main Page Component - Fetches and displays the grid of DemoCards
export default function DemosPage() {
    // Fetch sorted demo data using the function from lib/demos.ts
    const demos = getSortedDemoData();

    return (
        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
                Product Demos
            </h1>

            {demos.length === 0 ? (
                <p className="text-center text-muted-foreground mt-10">
                    No demos available yet. Check back soon!
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Map over the fetched demos and render a card for each */}
                    {demos.map((demo) => (
                        <DemoCard key={demo.slug} demo={demo} />
                    ))}
                </div>
            )}
        </main>
    );
}