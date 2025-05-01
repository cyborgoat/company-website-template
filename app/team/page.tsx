// app/team/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // If you want links from team cards
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Linkedin, Github } from 'lucide-react'; // Example social icons
import { motion } from 'framer-motion';
import { fadeIn, cardHover, staggerContainer, fadeInUp } from '@/lib/animations';
import { cn } from "@/lib/utils"; // Import cn


// Fetch this data
const teamMembers = [
    { name: "Alice Doe", title: "CEO", bio: "Visionary leader driving innovation.", imageUrl: "/images/team/alice.jpg", social: { linkedin: "#" } },
    { name: "Bob Smith", title: "CTO", bio: "Expert technologist architecting the future.", imageUrl: "/images/team/bob.jpg", social: { github: "#", linkedin: "#" } },
    { name: "Charlie Ray", title: "Lead Designer", bio: "Crafting beautiful and intuitive user experiences.", imageUrl: "/images/team/charlie.jpg", social: { linkedin: "#" } },
    // Add more team members
];

export default function TeamPage() {
    return (
        <motion.main
            className="container mx-auto px-4 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-4xl font-bold text-center mb-4">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                The passionate individuals driving our success.
            </p>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer(0.15, 0.2)}
                initial="hidden"
                animate="visible"
            >
                {teamMembers.map((member) => (
                    <motion.div
                        key={member.name}
                        variants={fadeInUp}
                        whileHover={cardHover}
                    >
                        <Card className={cn("flex flex-col text-center items-center h-full")}>
                            <CardHeader className="items-center">
                                <Image
                                    src={member.imageUrl || "/images/placeholder.png"}
                                    alt={`Photo of ${member.name}`}
                                    width={120}
                                    height={120}
                                    className="rounded-full mb-4 border-2 border-primary/50" // Slightly subtle border
                                />
                                <CardTitle>{member.name}</CardTitle>
                                <CardDescription>{member.title}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">{member.bio}</p>
                            </CardContent>
                            <CardFooter className="justify-center gap-2">
                                {member.social?.linkedin && (
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn Profile`}>
                                            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                                        </a>
                                    </Button>
                                )}
                                {member.social?.github && (
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub Profile`}>
                                            <Github className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                                        </a>
                                    </Button>
                                )}
                                {/* Add other social links */}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.main>
    );
}