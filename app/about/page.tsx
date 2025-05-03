// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Target, BrainCircuit, Users, Lightbulb } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
    title: 'About Us | Your AI Company', // Customize
    description: 'Learn about our mission, values, and the team driving the future of AI at Your AI Company.', // Customize
};

// Optional: Fetch a few key team members if you want to feature them
// (Requires adapting the team data structure/fetching if needed)
// import { TeamMember } from '@/lib/types'; // Assuming you defined this
// const featuredMembers: TeamMember[] = [ /* Fetch or define a few key members */ ];

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            {/* 1. Hero Section */}
            <section className="text-center mb-16 md:mb-24">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                    Pioneering the Future with Artificial Intelligence
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    We are [Your AI Company Name], dedicated to building intelligent solutions that solve complex challenges and create new possibilities.
                </p>
                {/* Optional Hero Image */}
                <div className="mt-10 relative w-full max-w-4xl mx-auto aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/images/about/robot.avif" // <-- REPLACE with your relevant hero image
                        alt="AI Concept Visualization"
                        fill
                        priority // Load this image early
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 896px" // Adjust sizes as needed
                    />
                </div>
            </section>

            {/* 2. Mission & Vision Section */}
            <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center">
                        <Target className="w-8 h-8 mr-3 text-primary" /> Our Mission
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        To democratize access to powerful AI tools, enabling businesses and individuals to innovate faster and achieve more than ever before. {/* <-- REPLACE */}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center">
                        <BrainCircuit className="w-8 h-8 mr-3 text-primary" /> Our Vision
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A future where artificial intelligence seamlessly integrates with human potential, augmenting capabilities and driving positive global change. {/* <-- REPLACE */}
                    </p>
                </div>
                {/* Optional Image for Mission/Vision */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md max-w-md mx-auto w-full">
                    <Image
                        src="/images/about/mission-vision.avif" // <-- REPLACE with your image
                        alt="Graphic representing mission and vision"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </section>

            {/* 3. Values Section */}
            <section className="mb-16 md:mb-24 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-10">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Repeat Card for each value */}
                    <Card className="text-center">
                        <CardHeader>
                            <Lightbulb className="w-10 h-10 mx-auto mb-3 text-primary" />
                            <CardTitle>Innovation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                We constantly explore new frontiers in AI, pushing the boundaries of what's possible. {/* <-- REPLACE */}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center">
                        <CardHeader>
                            <CheckCircle className="w-10 h-10 mx-auto mb-3 text-primary" />
                            <CardTitle>Integrity & Ethics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                We are committed to developing and deploying AI responsibly, transparently, and ethically. {/* <-- REPLACE */}
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="text-center">
                        <CardHeader>
                            <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                            <CardTitle>Collaboration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">
                                We believe the best results come from diverse teams working together openly and supportively. {/* <-- REPLACE */}
                            </p>
                        </CardContent>
                    </Card>
                    {/* Add more value cards as needed */}
                </div>
            </section>

            {/* 4. Team Introduction Section */}
            <section className="text-center mb-16 md:mb-24 bg-muted dark:bg-muted/50 py-12 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meet the Innovators</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Our team brings together leading experts in machine learning, software engineering, and product design.
                </p>
                {/* Optional: Display a few featured members */}
                {/* <div className="flex justify-center space-x-8 mb-8">
          {featuredMembers.map(member => (
             <div key={member.id} className="text-center">
               <Avatar className="w-20 h-20 mx-auto mb-2 ring-1 ring-primary/30">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</AvatarFallback>
               </Avatar>
               <p className="font-semibold text-sm">{member.name}</p>
               <p className="text-xs text-muted-foreground">{member.title}</p>
             </div>
          ))}
        </div> */}
                <Button asChild size="lg">
                    <Link href="/team">See Our Full Team</Link>
                </Button>
            </section>

            {/* 5. Optional: Technology / Approach Section */}
            <section className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Our Approach to AI</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Research-Driven</h3>
                        <p className="text-muted-foreground text-sm">Grounded in the latest academic research and industry best practices.</p> {/* <-- REPLACE */}
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
                        <p className="text-muted-foreground text-sm">Building robust systems ready for real-world deployment and growth.</p> {/* <-- REPLACE */}
                    </div>
                    <div className="p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Human-Centered Design</h3>
                        <p className="text-muted-foreground text-sm">Focusing on creating AI tools that are intuitive, useful, and enhance human capabilities.</p> {/* <-- REPLACE */}
                    </div>
                </div>
            </section>

            {/* 6. Optional: Call to Action (e.g., Careers) */}
            {/* <section className="text-center">
         <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
         <p className="text-muted-foreground mb-6">We're always looking for talented individuals passionate about AI. </p>
         <Button asChild variant="outline">
            <Link href="/careers">View Open Positions</Link>
         </Button>
      </section> */}

        </main>
    );
}