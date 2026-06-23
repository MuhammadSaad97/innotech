import { processSteps } from '@/data/site';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Process"
          title="Structured enough for control, flexible enough for real sites."
          description="Every project moves through clear stages so clients understand what is being decided, designed, built, and handed over."
        />
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
  );
}
