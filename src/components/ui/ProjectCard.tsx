import Image from 'next/image';
import { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  const gallery = project.gallery?.length ? project.gallery : [project.coverImage];
  const galleryPreview = gallery.slice(1, 4);

  return (
    <article className="card project-card">
      <div className="project-card-media">
        {project.mediaType === 'video' ? (
          <video src={project.coverImage} muted playsInline controls preload="metadata" />
        ) : (
          <Image
            src={project.coverImage}
            alt={project.title}
            width={720}
            height={540}
            sizes="(max-width: 900px) 100vw, 33vw"
          />
        )}
      </div>
      <div className="project-card-body">
        <div className="meta-row">
          <span>{project.serviceType || project.category}</span>
          <span>{project.year}</span>
          {gallery.length > 1 ? <span>{gallery.length} images</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        {galleryPreview.length ? (
          <div className="project-thumb-row" aria-label={`${project.title} gallery preview`}>
            {galleryPreview.map((image, index) => (
              <Image
                alt={`${project.title} preview ${index + 2}`}
                height={88}
                key={image}
                src={image}
                width={120}
              />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
