import './globals.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import React from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CineBuddy',
  description: 'CineBuddy - app where you can explore movies',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
