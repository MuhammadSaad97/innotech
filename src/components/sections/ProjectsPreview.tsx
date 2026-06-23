import Link from 'next/link';
import { projects } from '@/data/projects';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectCard from '@/components/ui/ProjectCard';

export default function ProjectsPreview() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Portfolio"
          title="Selected architecture and interior work."
          description="A curated look at residential facades, interior concepts, visualizations, and client-facing media."
        />
        <div className="grid grid-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="hero-actions">
          <Link className="btn btn-gold" href="/projects">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
