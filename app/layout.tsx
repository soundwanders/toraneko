// /app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import ThemeProvider from './provider';

const outfit = Outfit({ subsets: ['latin'] });

// www is the canonical host: it serves Production on Vercel, while the apex
// 308-redirects to it. Canonical/OG URLs must point at the host that actually
// serves, not at one that redirects.
const siteURL = 'https://www.soundwanders.com';
const title = 'soundwanders ᓚᘏᗢ';
const description = 'Drifting through the digital constellations of web design and development.';

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteURL,
    siteName: title,
    title,
    description,
    images: [{ url: '/miniroom.png', width: 1025, height: 925, alt: 'A small illustrated room' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/miniroom.png'],
  },
};

export default function RootLayout({children,} : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >   
            {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
};