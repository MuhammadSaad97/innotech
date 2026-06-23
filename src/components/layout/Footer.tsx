import Image from 'next/image';
import Link from 'next/link';
import { siteProfile } from '@/data/site';
import SocialLinks from '@/components/ui/SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <Image
              src="/brand/innotech-logo.jpeg"
              alt={siteProfile.name}
              width={180}
              height={64}
            />
            <span>{siteProfile.name}</span>
          </Link>
          <p>{siteProfile.description}</p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <p><Link href="/about">About</Link></p>
          <p><Link href="/services">Services</Link></p>
          <p><Link href="/projects">Projects</Link></p>
          <p><Link href="/testimonials">Testimonials</Link></p>
          <p><Link href="/contact">Contact</Link></p>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <p><a href={`tel:${siteProfile.phone}`}>{siteProfile.phone}</a></p>
          <p><a href={`mailto:${siteProfile.email}`}>{siteProfile.email}</a></p>
          <p>{siteProfile.address}</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
