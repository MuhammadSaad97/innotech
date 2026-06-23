import { GoogleReview } from '@/types';

export default function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="card review-card">
      <div className="review-source">
        <span className="google-mark" aria-hidden="true">G</span>
        <span>Google Review</span>
      </div>
      <div className="meta-row">
        <span>{review.rating} / 5 rating</span>
        <span>{review.relativeTimeDescription}</span>
      </div>
      <h3>{review.authorName}</h3>
      <p>{review.text}</p>
    </article>
  );
}
