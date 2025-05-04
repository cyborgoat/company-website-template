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


import { ProjectsIntroSection } from './sections/ProjectsIntroSection';
import { ProjectsGridSection } from './sections/ProjectsGridSection';
import type { ProjectData } from './sections/ProjectCard';

// --- Placeholder Data ---
const projects: ProjectData[] = [
  {
    id: 'proj-alpha',
    title: "Project Alpha",
    description: "A groundbreaking e-commerce platform with AI-powered recommendations, enhancing user experience and driving sales.",
    imageUrl: "/images/placeholder-project.png",
    projectUrl: "#",
    tags: ["E-commerce", "AI", "Next.js", "Tailwind CSS"]
  },
  {
    id: 'proj-beta',
    title: "Project Beta",
    description: "A scalable, cloud-native data processing pipeline designed to handle terabytes of data efficiently.",
    imageUrl: "/images/placeholder-project.png",
    projectUrl: "#",
    tags: ["Cloud", "Data Engineering", "Python", "AWS"]
  },
  {
    id: 'proj-gamma',
    title: "Project Gamma",
    description: "Cross-platform mobile application fostering community engagement and local event discovery.",
    imageUrl: "/images/placeholder-project.png",
    projectUrl: null,
    tags: ["Mobile App", "React Native", "Community"]
  },
];
// --- End Placeholder Data ---

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <ProjectsIntroSection />
      <ProjectsGridSection projects={projects} />
      {projects.length === 0 && (
        <p className="text-center text-muted-foreground mt-12">
          More projects coming soon!
        </p>
      )}
    </main>
  );
}