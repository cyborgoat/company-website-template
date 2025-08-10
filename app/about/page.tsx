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
    <main className="mx-auto max-w-screen-2xl px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <AboutHeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamPreviewSection />
      <ApproachSection />
    </main>
  );
}