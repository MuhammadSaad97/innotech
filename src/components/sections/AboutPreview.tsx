import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <SectionTitle
            eyebrow="About Innotech"
            title="A design-led construction partner for refined spaces."
            description="Innotech brings architectural thinking, practical construction knowledge, and finish-level attention into one coordinated process."
          />
          <p>
            From residential facades and interiors to renovation and site execution, the
            team focuses on clarity before work begins and accountability while work is
            underway.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-gold" href="/about">
              Our Approach
            </Link>
            <Link className="btn btn-ghost" href="/services">
              Services
            </Link>
          </div>
        </div>
        <div className="image-stack">
          <Image src="/office/office-01.jpeg" alt="Innotech office" width={520} height={650} />
          <Image src="/projects/interior-suite-01.jpeg" alt="Interior render" width={520} height={650} />
        </div>
      </div>
    </section>
  );
}
