import { constructionVideos } from '@/data/site';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ConstructionMediaSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="On Site"
          title="Construction progress, not just polished renders."
          description="These site videos show the execution side of Innotech's work: active coordination, construction stages, and real build momentum."
        />
        <div className="grid grid-3 media-grid">
          {constructionVideos.map((video) => (
            <article className="card media-card" key={video.src}>
              <div className="media-frame">
                <video src={video.src} controls preload="metadata" playsInline muted poster={video.poster} />
              </div>
              <div className="media-card-body">
                <div className="meta-row">
                  <span>Construction Video</span>
                </div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
