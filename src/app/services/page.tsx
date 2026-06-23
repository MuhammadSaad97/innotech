import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import ServiceCard from '@/components/ui/ServiceCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Construction, architecture, interior design, renovation, project management, and design-build consultation services from Innotech Construction.'
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="Services"
            title="Construction and design services under one premium workflow."
            description="Use Innotech for focused design input, detailed visualization, full project management, or complete execution."
          />
        </div>
      </section>
      <section className="section section--tight">
        <div className="container grid grid-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
