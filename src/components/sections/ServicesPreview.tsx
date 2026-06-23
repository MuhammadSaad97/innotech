import Link from 'next/link';
import { services } from '@/data/services';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ui/ServiceCard';

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="One team for design clarity and construction control."
          description="Choose focused consultation or a full design-build path with coordinated project delivery."
        />
        <div className="grid grid-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="hero-actions">
          <Link className="btn btn-ghost" href="/services">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
