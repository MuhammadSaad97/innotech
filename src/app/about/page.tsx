import type { Metadata } from 'next';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { processSteps } from '@/data/site';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Innotech Construction, a design-led construction partner for architecture, interiors, renovation, and project delivery.'
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="About"
            title="Built around design clarity, site discipline, and premium finish quality."
            description="Innotech Construction combines visual design, practical planning, and coordinated execution for clients who want the process to feel as considered as the final space."
          />
        </div>
      </section>
      <section className="section section--tight">
        <div className="container split">
          <div className="image-stack">
            <Image src="/office/office-02.jpeg" alt="Innotech office team workspace" width={520} height={650} />
            <Image src="/office/office-04.jpeg" alt="Innotech office meeting area" width={520} height={650} />
          </div>
          <div>
            <p className="eyebrow">Studio & Site</p>
            <h2>One conversation from concept to handover.</h2>
            <p>
              The team is structured to reduce friction between ambition and delivery.
              Design decisions are documented clearly, material choices are discussed
              early, and execution stays tied to practical site realities.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Method" title="How Innotech moves a project forward." />
          <div className="grid grid-4">
            {processSteps.map((step, index) => (
              <article className="card process-card" key={step.title}>
                <div className="meta-row">
                  <span>0{index + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Capabilities" title="Teams shaped around the work." />
          <div className="grid grid-3">
            {team.map((member) => (
              <article className="card project-card" key={member.name}>
                <div className="project-card-media">
                  <Image src={member.image} alt={member.name} width={720} height={540} />
                </div>
                <div className="project-card-body">
                  <div className="meta-row">
                    <span>{member.role}</span>
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
