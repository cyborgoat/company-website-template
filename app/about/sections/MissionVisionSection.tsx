import Image from 'next/image';
import { Target, BrainCircuit } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center">
          <Target className="w-8 h-8 mr-3 text-primary" /> Our Mission
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          To democratize access to powerful AI tools, enabling businesses and individuals to innovate faster and achieve more than ever before.
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center">
          <BrainCircuit className="w-8 h-8 mr-3 text-primary" /> Our Vision
        </h2>
        <p className="text-lg text-muted-foreground">
          A future where artificial intelligence seamlessly integrates with human potential, augmenting capabilities and driving positive global change.
        </p>
      </div>
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-md max-w-md mx-auto w-full">
        <Image
          src="/images/about/mission-vision.avif"
          alt="Graphic representing mission and vision"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
