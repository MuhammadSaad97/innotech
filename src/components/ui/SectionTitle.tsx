type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  as = 'h2'
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <Heading>{title}</Heading>
      {description ? <p>{description}</p> : null}
      <div className="gold-bar" />
    </div>
  );
}
