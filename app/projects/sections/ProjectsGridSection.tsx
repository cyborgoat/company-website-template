import {motion} from 'framer-motion';
import {ProjectCard, ProjectData} from './ProjectCard';

export function ProjectsGridSection({ projects }: { projects: ProjectData[] }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const cardHover = {
    scale: 1.03,
    transition: { duration: 0.2 },
  };
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{}}
    >
      {projects.map(project => (
        <motion.div
          key={project.id}
          variants={fadeInUp}
          whileHover={cardHover}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
