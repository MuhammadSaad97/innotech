import Image from 'next/image';
import Link from 'next/link';
import { siteProfile } from '@/data/site';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/projects/bilal-residence.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="container hero-content">
        <span className="eyebrow">{siteProfile.legalName}</span>
        <h1>{siteProfile.tagline}</h1>
        <p>
          Premium construction, architectural design, interiors, and project management
          for spaces that need to feel considered from first sketch to final handover.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-gold" href="/contact">
            Start a Project
          </Link>
          <Link className="btn btn-ghost" href="/projects">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
