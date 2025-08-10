import Link from 'next/link';
import {Button} from '@/components/ui/button';

export function TeamPreviewSection() {
  return (
    <section className="text-center">
      <div className="rounded-lg border p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">Meet the Innovators</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 text-balance">
          Our team brings together leading experts in machine learning, software engineering, and product design.
        </p>
        <Button asChild size="lg">
          <Link href="/team">See Our Full Team</Link>
        </Button>
      </div>
    </section>
  );
}
