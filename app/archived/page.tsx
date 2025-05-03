// app/archived/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge"; // Add if needed
import { Archive } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations';

// Fetch this data from your backend/CMS
const archivedItems = [
    { id: 'proj-001', type: 'Project', title: "Legacy System Overhaul", date: "2023-05-10", url: "/projects/legacy-system" },
    { id: 'news-005', type: 'News', title: "Company Acquired Startup X", date: "2023-02-15", url: "/news/acquired-startup-x" },
    { id: 'blogs-010', type: 'Blog', title: "The Rise of Serverless", date: "2022-11-01", url: "/blog/rise-of-serverless" },
    // ... more items
];

export default function ArchivedPage() {
    // Add filtering state/logic here if needed

    return (
        <motion.main
            className="container mx-auto px-4 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-4xl font-bold text-center mb-4">Archive</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                A look back at our past projects, news, and articles.
            </p>

            {/* Optional Filtering/Search Bar */}
            {/* <div className="mb-8 flex justify-center"> <Input placeholder="Search archive..." className="max-w-sm" /> </div> */}

            <motion.ul
                className="space-y-6 max-w-3xl mx-auto"
                variants={staggerContainer(0.1)}
                initial="hidden"
                animate="visible"
            >
                {archivedItems.map((item) => (
                    <motion.li key={item.id} variants={fadeInUp}>
                        <Link href={item.url} className="block p-4 rounded-lg border bg-card text-card-foreground hover:bg-muted/50 transition-colors">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                <div>
                                    <h2 className="text-lg font-medium mb-1">{item.title}</h2>
                                    <p className="text-sm text-muted-foreground">
                                        Archived: {new Date(item.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <Badge variant="secondary" className="w-fit">{item.type}</Badge>
                            </div>
                        </Link>
                        <Separator className="mt-6"/> {/* Optional separator */}
                    </motion.li>
                ))}
                {archivedItems.length === 0 && (
                    <motion.p variants={fadeInUp} className="text-center text-muted-foreground">No archived items found.</motion.p>
                )}
            </motion.ul>
        </motion.main>
    );
}