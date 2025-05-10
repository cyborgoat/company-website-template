'use client'; // Needed for Framer Motion animations
import React from 'react';
import {ProjectsIntroSection} from './sections/ProjectsIntroSection';
import {ProjectsGridSection} from './sections/ProjectsGridSection';
import type {ProjectData} from './sections/ProjectCard';


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