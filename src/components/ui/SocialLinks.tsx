import { siteProfile } from '@/data/site';

type SocialLinksProps = {
  variant?: 'inline' | 'buttons';
};

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M14.25 8.35V6.9c0-.7.45-.86.77-.86h1.95V3.05L14.28 3c-2.99 0-3.67 2.16-3.67 3.55v1.8H8.5v3.36h2.11V21h3.64v-9.29h2.46l.32-3.36h-2.78Z" />
    </svg>
  );
}

const socials = [
  {
    label: 'Instagram',
    href: siteProfile.socials.instagram,
    icon: <InstagramIcon />
  },
  {
    label: 'Facebook',
    href: siteProfile.socials.facebook,
    icon: <FacebookIcon />
  }
];

export default function SocialLinks({ variant = 'inline' }: SocialLinksProps) {
  return (
    <div className={`social-links social-links--${variant}`}>
      {socials.map((social) => (
        <a
          className={variant === 'buttons' ? 'btn btn-ghost social-button' : 'social-link'}
          href={social.href}
          key={social.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {social.icon}
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  );
}
