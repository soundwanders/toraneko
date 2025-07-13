// /app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import ThemeProvider from './provider';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'soundwanders ᓚᘏᗢ',
  description: 'Drifting through the digital constellations of web design and development.',
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