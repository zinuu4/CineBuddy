import './globals.scss';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import React from 'react';

import { Header } from '@/widgets/header';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

const title =
  'Онлайн-кинотеатр CineBuddy - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве';
const description =
  'Устройте кинотеатр у себя дома! Смотрите онлайн фильмы хорошего качества в приятной домашней обстановке и в удобное для вас время. Для вас всегда доступны на любой вкус: сериалы, фильмы, мультфильмы и многое другое.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/cinebuddy.appspot.com/o/project-logo-with-bg.png?alt=media&token=3cd5991b-5d4f-40c7-bb46-f7f500dbc7c3',
        alt: title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
