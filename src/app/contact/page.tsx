import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Innotech Construction for construction, architectural design, interior design, renovation, and project management enquiries.'
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
