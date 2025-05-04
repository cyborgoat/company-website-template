// app/team/page.tsx
import {Metadata} from 'next';
import {TeamIntroSection} from './sections/TeamIntroSection';
import {TeamGridSection} from './sections/TeamGridSection';
import type {TeamMember} from './sections/TeamMemberCard';

// Your team data
const teamMembers: TeamMember[] = [
    { id: 'jane-doe', name: 'Dr. Jane Doe', title: 'Chief Executive Officer', imageUrl: '/images/team/jane-doe.jpg', bio: 'Visionary leader with over 15 years of experience in AI R&D and commercialization.', category: 'Leadership', socials: { linkedin: '#', twitter: '#' } },
    { id: 'alex-smith', name: 'Alex Smith', title: 'Head of Research', imageUrl: '/images/team/alex-smith.jpg', bio: 'Pioneering research in Natural Language Processing and Large Language Models.', category: 'Research', expertise: ['NLP', 'Large Language Models', 'Deep Learning'], socials: { linkedin: '#', github: '#', website: '#' } },
    { id: 'maria-garcia', name: 'Maria Garcia', title: 'Lead AI Engineer', imageUrl: '/images/team/maria-garcia.jpg', bio: 'Expert in building scalable machine learning infrastructure and deploying AI models.', category: 'Engineering', expertise: ['MLOps', 'Cloud Architecture (AWS)', 'Distributed Systems', 'Python'], socials: { linkedin: '#', github: '#' } },
    { id: 'chen-wang', name: 'Chen Wang', title: 'Senior UX Designer', imageUrl: '/images/team/chen-wang.jpg', bio: 'Designing intuitive and effective interfaces for complex AI applications.', category: 'Design', expertise: ['Human-AI Interaction', 'Design Systems', 'Prototyping'], socials: { linkedin: '#', website: '#' } },
    { id: 'sam-jones', name: 'Sam Jones', title: 'Machine Learning Engineer', bio: 'Focusing on computer vision applications and model optimization.', category: 'Engineering', expertise: ['Computer Vision', 'PyTorch', 'Model Optimization'], socials: { linkedin: '#', github: '#' } },
]; // Remember to replace '#' with actual links and add real images!


// Metadata for the page
export const metadata: Metadata = {
    title: 'Our Team | Your AI Company', // Customize
    description: 'Meet the talented team behind our cutting-edge AI solutions.',
};

export default function TeamPage() {
  const categories = ['Leadership', 'Research', 'Engineering', 'Design', 'Operations'];
  const groupedMembers: { [key: string]: TeamMember[] } = {};

  teamMembers.forEach(member => {
    const category = member.category || 'Other';
    if (!groupedMembers[category]) {
      groupedMembers[category] = [];
    }
    groupedMembers[category].push(member);
  });

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <TeamIntroSection />
      <TeamGridSection groupedMembers={groupedMembers} categories={categories} />
    </main>
  );
}