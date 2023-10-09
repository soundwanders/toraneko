// /app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Outfit } from 'next/font/google';
import ThemeProvider from './provider';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'soundwanders ᓚᘏᗢ',
  description: 'Tabby cats and tiger paws',
};

export default function RootLayout({children,} : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >   
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
};
