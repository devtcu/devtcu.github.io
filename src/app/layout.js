import './globals.css';
import { jetbrainsMono } from './fonts';

export const metadata = {
  title: 'Devansh KM - Personal Website',
  description: 'Personal website of Devansh Kalluhole Matham (Devansh Matham, Devansh Kalluhole) — Physics researcher specializing in Graph Neural Networks, topological data analysis, and computational physics. Graduate from Texas Christian University.',
  keywords: [
    'Devansh Kalluhole Matham',
    'Devansh Matham', 
    'Devansh Kalluhole',
    'Physics Research',
    'Machine Learning',
    'Graph Neural Networks',
    'TCU',
    'Texas Christian University',
    'Topological Data Analysis',
    'CUDA Programming',
    'Computational Biology',
    'Research Associate'
  ],
  authors: [{ name: 'Devansh Kalluhole Matham' }],
  creator: 'Devansh Kalluhole Matham',
  openGraph: {
    title: 'Devansh Kalluhole Matham | Physics Researcher',
    description: 'Physics researcher and machine learning engineer specializing in Graph Neural Networks and biological systems modeling.',
    url: 'https://devtcu.github.io/',
    siteName: 'Devansh Kalluhole Matham Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devansh Kalluhole Matham | Physics Researcher',
    description: 'Physics researcher specializing in Graph Neural Networks and topological data analysis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    { rel: 'icon', url: '/zap.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/favicon-new.ico' },
    { rel: 'apple-touch-icon', url: '/zap.svg' },
    { rel: 'shortcut icon', url: '/zap.svg' }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-black ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://devtcu.github.io/" />
        <meta name="author" content="Devansh Kalluhole Matham" />
        <link rel="preload" href="/parallax/star.gif" as="image" />
        <link rel="preload" href="./parallax/bird.webp" as="image" />
        <link rel="preload" href="./parallax/wave1.jpg" as="image" />
        <link rel="icon" href="/zap.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/zap.svg" />
        <link rel="shortcut icon" href="/zap.svg" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={`font-jetbrains min-h-screen bg-black ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  )
}
