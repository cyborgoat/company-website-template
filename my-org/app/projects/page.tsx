import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { Button } from '@/components/ui/button'; // Optional: Use Button for links

export default function ProjectsPage() {
    return (
        <div className="container py-8"> {/* Added container and padding */}
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <p className="mb-4">Explore our active and archived projects.</p>

            {/* Optional: Links to sub-pages if you create them later */}
            <div className="flex gap-4 mb-8">
                <Button asChild>
                    <Link href="/projects/active">Active Projects</Link>
                </Button>
                <Button variant="secondary" asChild>
                    <Link href="/projects/archived">Archived Projects</Link>
                </Button>
            </div>

            {/* Add an overview or featured projects here */}
            <p>General content for the projects overview page goes here...</p>
        </div>
    );
}