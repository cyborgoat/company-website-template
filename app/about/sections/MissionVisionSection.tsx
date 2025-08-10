import Image from 'next/image';
import {BrainCircuit, Target} from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 flex items-center text-balance">
            <Target className="w-7 h-7 mr-3 text-primary" /> Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            To democratize access to powerful AI tools, enabling businesses and individuals to innovate faster and achieve more than ever before.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 flex items-center text-balance">
            <BrainCircuit className="w-7 h-7 mr-3 text-primary" /> Our Vision
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            A future where artificial intelligence seamlessly integrates with human potential, augmenting capabilities and driving positive global change.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border max-w-md mx-auto w-full">
          <Image
            src="/images/about/mission-vision.avif"
            alt="Graphic representing mission and vision"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
