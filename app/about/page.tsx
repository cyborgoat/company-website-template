// app/about/page.tsx
import React from 'react';
import { Separator } from "@/components/ui/separator"; // Add using shadcn/ui CLI if needed
import { Lightbulb, Target, Users } from 'lucide-react'; // Example icons

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
                    We are driven by a passion for innovation and a commitment to delivering
                    exceptional value to our clients. Learn more about our journey and what makes us unique.
                </p>

                <Separator className="my-12" />

                {/* Mission/Vision Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                        <Target className="h-6 w-6 text-primary" />
                        Our Mission
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        [Your Company's Mission Statement Here. Keep it concise and impactful.
                        Explain the core purpose and the value you aim to provide.]
                    </p>
                </section>

                {/* Values Section */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">Innovation</h3>
                            <p className="text-muted-foreground text-sm">
                                [Brief description of how your company values innovation.]
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">Integrity</h3>
                            <p className="text-muted-foreground text-sm">
                                [Brief description of your commitment to integrity.]
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">Collaboration</h3>
                            <p className="text-muted-foreground text-sm">
                                [Brief description of how you foster collaboration.]
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">Customer Focus</h3>
                            <p className="text-muted-foreground text-sm">
                                [Brief description of your focus on customer success.]
                            </p>
                        </div>
                    </div>
                </section>

                {/* Optional: Add a Team link section */}
                {/* <Separator className="my-12" />
         <section className="text-center">
             <h2 className="text-2xl font-semibold mb-4">Meet the People Behind the Vision</h2>
             <Button asChild>
                 <Link href="/team">Our Team</Link>
             </Button>
         </section> */}
            </div>
        </main>
    );
}