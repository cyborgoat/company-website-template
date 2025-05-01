// app/team/page.tsx (Example with Card)
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Adjust path if needed
import Image from 'next/image'; // Import Next.js Image
import { Button } from '@/components/ui/button'; // Assuming Button component exists
import { cn } from "@/lib/utils"; // Import the cn utility

export default function TeamPage() {
    const teamMembers = [
        { name: "Alice Doe", title: "CEO", bio: "...", imageUrl: "/images/alice.jpg", social: { linkedin: "#" } },
        { name: "Bob Smith", title: "CTO", bio: "...", imageUrl: "/images/bob.jpg", social: { github: "#" } },
        // Add more team members
    ];

    return (
        // Apply container and padding similar to app/page.tsx
        <main className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12">Meet Our Team</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <Card key={member.name} className={cn("flex flex-col")}> {/* Use cn for potential future overrides */}
                        <CardHeader className="items-center text-center">
                            {/* Use Next.js Image for optimization */}
                            {/* Make sure imageUrl points to a valid path in your public folder */}
                            {/* Or configure next.config.ts for external domains */}
                            <Image
                                src={member.imageUrl || "/images/placeholder.png"} // Fallback image
                                alt={`Photo of ${member.name}`}
                                width={120}
                                height={120}
                                className="rounded-full mb-4 border-2 border-primary" // Example styling
                            />
                            <CardTitle>{member.name}</CardTitle>
                            <CardDescription>{member.title}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">{member.bio}</p>
                        </CardContent>
                        <CardFooter className="justify-center gap-2">
                            {/* Add social links, potentially using Button component */}
                            {member.social?.linkedin && <Button variant="outline" size="sm" asChild><a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></Button>}
                            {member.social?.github && <Button variant="outline" size="sm" asChild><a href={member.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></Button>}
                            {/* Add other social links as needed */}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}