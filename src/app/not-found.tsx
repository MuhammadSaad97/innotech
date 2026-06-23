import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="Not Found"
            title="This page is not part of the current build."
            description="Return to the homepage or browse the project portfolio."
          />
          <div className="hero-actions">
            <Link className="btn btn-gold" href="/">
              Home
            </Link>
            <Link className="btn btn-ghost" href="/projects">
              Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
