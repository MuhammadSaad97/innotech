import type { Metadata } from 'next';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Watch Innotech Construction client testimonial videos and read Google reviews from customers.'
};

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsSection />
    </main>
  );
}
