// app/about/page.tsx
'use client';

import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations'; // Assuming you created lib/animations.ts

export default function AboutPage() {
    return (
        <motion.main
            className="container mx-auto px-4 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-3xl mx-auto">
                {/* ... (Title and Intro Paragraph with basic motion) ... */}
                <motion.h1 className="text-4xl font-bold text-center mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>About Us</motion.h1>
                <motion.p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
                    [Intro paragraph about the company...]
                </motion.p>

                <Separator className="my-12" />

                {/* Mission Section */}
                <motion.section className="mb-16" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3"><Target className="h-6 w-6 text-primary" />Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">[Your Mission Statement Here.]</p>
                </motion.section>

                {/* Values Section */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 flex items-center gap-3"><Lightbulb className="h-6 w-6 text-primary" />Our Values</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={staggerContainer(0.2)} // Use stagger function
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Map through values, each wrapped in <motion.div variants={fadeInUp}> */}
                        <motion.div variants={fadeInUp}><h3 className="text-xl font-medium">Innovation</h3><p className="text-muted-foreground text-sm">[Value description]</p></motion.div>
                        <motion.div variants={fadeInUp}><h3 className="text-xl font-medium">Integrity</h3><p className="text-muted-foreground text-sm">[Value description]</p></motion.div>
                        {/* ... more values */}
                    </motion.div>
                </section>
            </div>
        </motion.main>
    );
}