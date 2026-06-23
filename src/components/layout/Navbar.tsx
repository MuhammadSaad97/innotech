'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { siteProfile } from '@/data/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label={`${siteProfile.name} home`}>
          <Image
            src="/brand/innotech-logo.jpeg"
            alt={siteProfile.name}
            width={180}
            height={64}
            priority
          />
          <span>{siteProfile.name}</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="btn btn-gold" href="/contact" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
