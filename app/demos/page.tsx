// app/demos/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {Metadata} from 'next';
import {DemoData, getSortedDemoData} from '@/lib/demos';
import {cn} from '@/lib/utils';
import {CardBody, CardContainer, CardItem} from '@/components/ui/3d-card'; // Keep 3D card imports

// Metadata for the page
export const metadata: Metadata = {
    title: 'Product Demos | Your Company Name',
    description: 'Explore interactive demos showcasing our products and features.',
};

// DemoCard component (using 3D card components)
function DemoCard({ demo }: { demo: DemoData }) {
    return (
        // Using CardContainer for 3D effect - No changes needed here
        <CardContainer className="inter-var h-full">
            {/* Applying specific border/hover fixes directly here as per your last successful fix */}
            <CardBody className={cn(
                "h-full flex flex-col", // Base layout
                "border-2 border-gray-600/60 hover:border-gray-500/80", // Your border fix + slightly lighter hover
                // Add back base styling if needed, or ensure CardBody in 3d-card.tsx has them
                "bg-background rounded-xl dark:hover:shadow-xl dark:hover:shadow-primary/[0.15] hover:shadow-lg hover:brightness-[1.02] transition-all duration-300 p-6" // Example base + hover effects
                // Note: The shining border effect from 3d-card.tsx might conflict if added here AND in the component file. Choose one place.
                // If you want the shining border, remove the border classes above and rely on the CardBody component's internal styles.
                // If you prefer this simpler border, ensure the border/before styles in 3d-card.tsx CardBody are removed or adjusted.
            )}>
                {/* CardItem for Title */}
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-foreground"
                >
                    {demo.title}
                </CardItem>

                {/* CardItem for Excerpt */}
                {demo.excerpt && (
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-muted-foreground text-sm max-w-sm mt-2 line-clamp-3"
                    >
                        {demo.excerpt}
                    </CardItem>
                )}

                {/* CardItem for Thumbnail */}
                {demo.thumbnail && (
                    <CardItem
                        translateZ="80"
                        className="w-full mt-4 aspect-video relative"
                    >
                        <Image
                            src={demo.thumbnail}
                            alt={`${demo.title} thumbnail`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover rounded-xl"
                        />
                    </CardItem>
                )}

                {/* Container for bottom content (tags + link) */}
                <div className="mt-auto pt-4">
                    {/* CardItem for Tags - UPDATED STYLING */}
                    {demo.tags && Array.isArray(demo.tags) && demo.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {demo.tags.map((tag: string) => (
                                <CardItem
                                    key={tag}
                                    translateZ={20} // Keep the 3D effect for tags
                                    as="div"
                                    // ***** UPDATED TAG CLASSES *****
                                    className={cn(
                                        "inline-block rounded-full px-3 py-1 text-xs font-medium", // Shape, size, weight
                                        "border", // Add base border class
                                        "bg-neutral-800/80", // Slightly transparent dark gray background
                                        "border-neutral-700", // Darker gray border
                                        "text-neutral-400" // Lighter gray text
                                        // You could add hover states here too if desired, e.g.:
                                        // "hover:bg-neutral-700/90 hover:border-neutral-500 hover:text-neutral-300 transition-colors"
                                    )}
                                    // ******************************
                                >
                                    {tag}
                                </CardItem>
                            ))}
                        </div>
                    )}

                    {/* CardItem for Link */}
                    <div className="flex justify-end items-center">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href={`/demos/${demo.slug}`}
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:text-primary transition-colors"
                        >
                            Learn more →
                        </CardItem>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
}


// Main Page Component - No changes needed here
export default function DemosPage() {
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 lg:gap-x-12">
                    {demos.map((demo) => (
                        <DemoCard key={demo.slug} demo={demo} />
                    ))}
                </div>
            )}
        </main>
    );
}