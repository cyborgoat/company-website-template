// app/about/page.tsx
import {Metadata} from 'next';
import {AboutHeroSection} from './sections/AboutHeroSection';
import {MissionVisionSection} from './sections/MissionVisionSection';
import {ValuesSection} from './sections/ValuesSection';
import {TeamPreviewSection} from './sections/TeamPreviewSection';
import {ApproachSection} from './sections/ApproachSection';

export const metadata: Metadata = {
  title: 'About Us | Your AI Company',
  description: 'Learn about our mission, values, and the team driving the future of AI at Your AI Company.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <AboutHeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamPreviewSection />
      <ApproachSection />
    </main>
  );
}