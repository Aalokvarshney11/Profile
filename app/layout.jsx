import { Albert_Sans, Fragment_Mono } from 'next/font/google';
import './globals.css';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const fragmentMono = Fragment_Mono({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-fragment',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://aalok.dev'),
  title: 'Aalok Varshney',
  description:
    'A focused editorial portfolio hero featuring an interactive liquid-glass anatomical reveal and spatial UI engineering.',
  keywords: ['Design Technologist', 'Creative Developer', 'Portfolio', 'Spatial UI', 'Interactive Web'],
  authors: [{ name: 'Aalok Varshney' }],
  openGraph: {
    title: 'Portfolio',
    description:
      'A focused editorial portfolio hero featuring an interactive liquid-glass anatomical reveal.',
    type: 'website',
    images: [
      {
        url: '/images/Base_image_desktop.png',
        width: 1456,
        height: 819,
        alt: 'Editorial portrait portfolio hero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio ',
    description:
      'A focused editorial portfolio hero featuring an interactive liquid-glass anatomical reveal.',
    images: ['/images/Base_image_desktop.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#edf5ff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${albertSans.variable} ${fragmentMono.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink selection:bg-blue-100 selection:text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
