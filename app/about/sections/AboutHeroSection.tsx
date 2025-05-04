import Image from 'next/image';

export function AboutHeroSection() {
  return (
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
          src="/images/about/robot.avif"
          alt="AI Concept Visualization"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>
    </section>
  );
}
