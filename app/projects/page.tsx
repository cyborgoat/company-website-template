// app/projects/page.tsx
'use client'; // Needed for Framer Motion animations

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Make sure to import Next.js Image component

// Import necessary shadcn/ui components
// Ensure you have added these via the CLI: npx shadcn-ui@latest add card button badge
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import icons
import { ExternalLink, Layers } from 'lucide-react';

// Import framer-motion
import { motion } from 'framer-motion';

// --- Animation Variants ---
// You can place these here or import them from a shared file like '@/lib/animations'
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: { opacity: 1 }, // Can keep container visible while children animate
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerChildren,
            delayChildren: delayChildren,
        },
    },
});

const cardHover = {
    scale: 1.03, // Example hover effect: slightly enlarge the card
    transition: { duration: 0.2 }
};
// --- End Animation Variants ---


// --- Placeholder Data ---
// Replace this with data fetched from your CMS or API
const projects = [
    {
        id: 'proj-alpha',
        title: "Project Alpha",
        description: "A groundbreaking e-commerce platform with AI-powered recommendations, enhancing user experience and driving sales.",
        imageUrl: "/images/placeholder-project.png", // Replace with actual path in /public
        projectUrl: "#", // Replace with actual project link or leave null
        tags: ["E-commerce", "AI", "Next.js", "Tailwind CSS"]
    },
    {
        id: 'proj-beta',
        title: "Project Beta",
        description: "A scalable, cloud-native data processing pipeline designed to handle terabytes of data efficiently.",
        imageUrl: "/images/placeholder-project.png", // Replace with actual path in /public
        projectUrl: "#", // Replace with actual project link or leave null
        tags: ["Cloud", "Data Engineering", "Python", "AWS"]
    },
    {
        id: 'proj-gamma',
        title: "Project Gamma",
        description: "Cross-platform mobile application fostering community engagement and local event discovery.",
        imageUrl: "/images/placeholder-project.png", // Replace with actual path in /public
        projectUrl: null, // Example where there's no live link
        tags: ["Mobile App", "React Native", "Community"]
    },
    // Add more project objects here
];
// --- End Placeholder Data ---


export default function ProjectsPage() {
    return (
        // Page container with fade-in animation
        <motion.main
            className="container mx-auto px-4 py-16" // Standard container padding
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            {/* Page Title */}
            <motion.h1
                className="text-4xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Our Projects
            </motion.h1>

            {/* Introductory Paragraph */}
            <motion.p
                className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                A selection of work showcasing our capabilities, innovation, and expertise across various domains.
            </motion.p>

            {/* Grid container with stagger animation for children */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" // Responsive grid layout
                variants={staggerContainer(0.15, 0.2)} // Stagger children slightly, start after 0.2s
                initial="hidden"
                animate="visible"
            >
                {/* Map through the projects data */}
                {projects.map((project) => (
                    // Wrapper for each card with individual fade-up and hover animations
                    // IMPORTANT: Ensure <Card> is the *only* direct child here to avoid Children.only error
                    <motion.div
                        key={project.id}
                        variants={fadeInUp} // Each card uses the fadeInUp animation variant
                        whileHover={cardHover} // Apply hover effect variant
                    >
                        {/* Card component - ensure it's a single child */}
                        <Card className="flex flex-col h-full overflow-hidden border shadow-sm hover:shadow-md transition-shadow duration-300"> {/* Add borders/shadows as desired */}
                            {/* Project Image */}
                            <div className="aspect-video relative w-full"> {/* Use aspect ratio for consistent image size */}
                                <Image
                                    src={project.imageUrl || "/images/placeholder-project.png"} // Fallback image
                                    alt={`${project.title} thumbnail`}
                                    fill // Use fill layout for responsiveness within the relative container
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                                    className="object-cover" // Ensure image covers the area
                                />
                            </div>

                            {/* Card Header: Title and Tags */}
                            <CardHeader>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                                {/* Display Tags if they exist */}
                                {project.tags && project.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1 pt-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                        ))}
                                    </div>
                                )}
                            </CardHeader>

                            {/* Card Content: Description */}
                            <CardContent className="flex-grow"> {/* flex-grow pushes footer down */}
                                <CardDescription>{project.description}</CardDescription>
                            </CardContent>

                            {/* Card Footer: Link Button */}
                            <CardFooter>
                                {/* Conditionally render button only if projectUrl exists */}
                                {project.projectUrl && (
                                    // Button with asChild prop to pass props to the Link child
                                    <Button variant="outline" size="sm" asChild>
                                        {/* Link is the single direct child of Button */}
                                        <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                            View Project
                                            <ExternalLink className="ml-2 h-4 w-4" /> {/* Icon inside the Link */}
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div> // End of motion.div wrapper for the card
                ))}
            </motion.div> {/* End of grid container */}

            {/* Optional: Add a message if there are no projects */}
            {projects.length === 0 && (
                <motion.p
                    className="text-center text-muted-foreground mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }} // Delay slightly after potential stagger
                >
                    More projects coming soon!
                </motion.p>
            )}

        </motion.main> // End of page container
    );
}