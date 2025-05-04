import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function TeamPreviewSection() {
  return (
    <section className="text-center mb-16 md:mb-24 bg-muted dark:bg-muted/50 py-12 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meet the Innovators</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Our team brings together leading experts in machine learning, software engineering, and product design.
      </p>
      {/* Optionally, map over featured members here */}
      <Button asChild size="lg">
        <Link href="/team">See Our Full Team</Link>
      </Button>
    </section>
  );
}
