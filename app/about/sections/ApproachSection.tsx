export function ApproachSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-balance">Our Approach to AI</h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Research-Driven</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">Grounded in the latest academic research and industry best practices.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Scalable Infrastructure</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">Building robust systems ready for real-world deployment and growth.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Human-Centered Design</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">Focusing on creating AI tools that are intuitive, useful, and enhance human capabilities.</p>
        </div>
      </div>
    </section>
  );
}
