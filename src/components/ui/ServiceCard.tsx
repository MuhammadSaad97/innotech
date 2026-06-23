import { Service } from '@/types';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card service-card">
      <strong>{service.label}</strong>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.features?.length ? (
        <ul className="feature-list">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
