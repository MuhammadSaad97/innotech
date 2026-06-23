import type { Metadata } from 'next';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore Innotech Construction architecture renders, interiors, construction media, client review video, and office visuals.'
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <SectionTitle
            as="h1"
            eyebrow="Projects"
            title="Architecture, interiors, and project media."
            description="Browse selected media from the Innotech project archive, organized by the way clients naturally evaluate the work."
          />
        </div>
      </section>
      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
