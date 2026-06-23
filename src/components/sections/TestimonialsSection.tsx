import Link from 'next/link';
import { googleReviewSummary, reviews, testimonialVideos } from '@/data/site';
import SectionTitle from '@/components/ui/SectionTitle';
import ReviewCard from '@/components/ui/ReviewCard';

type TestimonialsSectionProps = {
  preview?: boolean;
};

export default function TestimonialsSection({ preview = false }: TestimonialsSectionProps) {
  const visibleReviews = preview ? reviews.slice(0, 3) : reviews;

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Testimonials"
          title="Client Testimonials"
          description={`${googleReviewSummary.label} holds a ${googleReviewSummary.rating.toFixed(
            1
          )} rating from ${googleReviewSummary.reviewCount} Google reviews.`}
        />
        <div className="testimonial-video-grid">
          {testimonialVideos.map((video) => (
            <article className="card media-card testimonial-card" key={video.src}>
              <div className="testimonial-frame">
                <video src={video.src} controls preload="metadata" playsInline poster={video.poster} />
              </div>
              <div className="media-card-body">
                <div className="meta-row">
                  <span>Video Review</span>
                </div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="review-subsection">
          <div className="review-subsection-header">
            <div>
              <p className="eyebrow">Google Reviews</p>
              <h3>{googleReviewSummary.rating.toFixed(1)} out of 5.0 from {googleReviewSummary.reviewCount} reviews</h3>
            </div>
            {preview ? (
              <Link className="btn btn-ghost" href="/testimonials">
                View All Testimonials
              </Link>
            ) : null}
          </div>
          <div className="grid grid-3">
            {visibleReviews.map((review) => (
              <ReviewCard key={`${review.authorName}-${review.time}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
