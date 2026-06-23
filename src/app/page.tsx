import AboutPreview from '@/components/sections/AboutPreview';
import ConstructionMediaSection from '@/components/sections/ConstructionMediaSection';
import ContactSection from '@/components/sections/ContactSection';
import Hero from '@/components/sections/Hero';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectsPreview from '@/components/sections/ProjectsPreview';
import ServicesPreview from '@/components/sections/ServicesPreview';
import StatsBand from '@/components/sections/StatsBand';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <StatsBand />
      <ProjectsPreview />
      <ConstructionMediaSection />
      <ProcessSection />
      <TestimonialsSection preview />
      <ContactSection />
    </main>
  );
}
