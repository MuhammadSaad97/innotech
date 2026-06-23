import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FirebaseAnalytics from '@/components/FirebaseAnalytics';
import { siteProfile } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://innotechconstruction.com'),
  title: {
    default: `${siteProfile.name} | ${siteProfile.tagline}`,
    template: `%s | ${siteProfile.name}`
  },
  description: siteProfile.description,
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png'
  },
  openGraph: {
    title: `${siteProfile.name} | ${siteProfile.tagline}`,
    description: siteProfile.description,
    siteName: siteProfile.name,
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630 }],
    locale: 'en_PK',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteProfile.name} | ${siteProfile.tagline}`,
    description: siteProfile.description,
    images: ['/opengraph-image.jpg']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          {children}
          <Footer />
          <FirebaseAnalytics />
        </div>
      </body>
    </html>
  );
}
