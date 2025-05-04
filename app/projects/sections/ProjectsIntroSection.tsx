import {motion} from 'framer-motion';

export function ProjectsIntroSection() {
  return (
    <>
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Projects
      </motion.h1>
      <motion.p
        className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        A selection of work showcasing our capabilities, innovation, and expertise across various domains.
      </motion.p>
    </>
  );
}
