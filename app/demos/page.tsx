// app/demos/page.tsx
import {Metadata} from 'next';
import {getSortedDemoData} from '@/lib/demos';
import { DemoData } from '@/types/content';
import { ContentGrid } from '@/components/ContentGrid';

// Metadata for the page
export const metadata: Metadata = {
    title: 'Product Demos | Your Company Name',
    description: 'Explore interactive demos showcasing our products and features.',
};

// Main Page Component
export default function DemosPage() {
    const demos = getSortedDemoData();

    return (
        <main className="mx-auto max-w-screen-2xl px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
                Product Demos
            </h1>

            {demos.length === 0 ? (
                <p className="text-center text-muted-foreground mt-10">
                    No demos available yet. Check back soon!
                </p>
            ) : (
                <ContentGrid<DemoData> items={demos} hrefPrefix="demos" imageField="thumbnail" />
            )}
        </main>
    );
}