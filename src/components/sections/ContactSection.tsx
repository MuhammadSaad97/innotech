import Link from 'next/link';
import { siteProfile } from '@/data/site';
import SectionTitle from '@/components/ui/SectionTitle';
import SocialLinks from '@/components/ui/SocialLinks';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Ready to discuss a build, renovation, or design package?"
          description="Share the essentials and the Innotech team can follow up with the right next step."
        />
        <div className="contact-panel">
          <div className="card contact-details">
            <p className="eyebrow">Business Profile</p>
            <h3>{siteProfile.legalName}</h3>
            <p>{siteProfile.address}</p>
            <p>
              <a href={`tel:${siteProfile.phone}`}>{siteProfile.phone}</a>
            </p>
            <p>
              <a href={`mailto:${siteProfile.email}`}>{siteProfile.email}</a>
            </p>
            <div className="hero-actions">
              <Link className="btn btn-ghost" href={siteProfile.googleBusinessUrl}>
                Google Business
              </Link>
              <SocialLinks variant="buttons" />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
