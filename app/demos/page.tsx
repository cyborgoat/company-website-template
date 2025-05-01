// app/demos/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Github } from 'lucide-react'; // Example icons
import { motion } from 'framer-motion';
import { fadeIn, cardHover, staggerContainer, fadeInUp } from '@/lib/animations';


// Fetch this data
const demos = [
    { id: 'demo-1', title: "Interactive Dashboard", description: "A live demo of our data visualization dashboard.", imageUrl: "https://images.pexels.com/photos/12355347/pexels-photo-12355347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", liveUrl: "#", repoUrl: "#" },
    { id: 'demo-2', title: "AI Chatbot Interface", description: "Experience our intuitive AI chatbot in action.", imageUrl: "https://images.pexels.com/photos/12355347/pexels-photo-12355347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", liveUrl: "#", repoUrl: null },
    { id: 'demo-3', title: "Real-time Collaboration Tool", description: "See how teams can work together seamlessly.", imageUrl: "https://images.pexels.com/photos/12355347/pexels-photo-12355347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", liveUrl: "#", repoUrl: "#" },
    // ... more demos
];

export default function DemosPage() {
    return (
        <motion.main
            className="container mx-auto px-4 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-4xl font-bold text-center mb-4">Demos</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Explore interactive demos of our products and features.
            </p>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer(0.15, 0.2)}
                initial="hidden"
                animate="visible"
            >
                {demos.map((demo) => (
                    <motion.div
                        key={demo.id}
                        variants={fadeInUp}
                        whileHover={cardHover}
                    >
                        <Card className="flex flex-col h-full overflow-hidden"> {/* overflow-hidden for image */}
                            <Image
                                src={demo.imageUrl || "/images/placeholder.png"}
                                alt={`${demo.title} thumbnail`}
                                width={500}
                                height={300}
                                className="aspect-video w-full object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{demo.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{demo.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="gap-2">
                                {demo.liveUrl && (
                                    <Button size="sm" asChild>
                                        <Link href={demo.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <PlayCircle className="mr-2 h-4 w-4" /> Live Demo
                                        </Link>
                                    </Button>
                                )}
                                {demo.repoUrl && (
                                    <Button variant="secondary" size="sm" asChild>
                                        <Link href={demo.repoUrl} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> Repository
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.main>
    );
}