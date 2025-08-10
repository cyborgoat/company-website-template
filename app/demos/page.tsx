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
        <main className="mx-auto max-w-screen-xl px-4 md:px-6 py-12 md:py-16 lg:py-20">
            <h1 className="text-4xl font-bold text-center mb-4 text-balance">
                Product Demos
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-balance">
                Explore interactive demos showcasing our products and features.
            </p>

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