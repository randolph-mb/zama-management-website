import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Zama-Management Seminare. Jetzt informieren.',
  description: 'Gemeinsam erfolgreich mit Zama Management Seminare: von Abrechnung, über Hygiene hin zu Führungskräfteentwicklung und Teamtraining. Jetzt informieren.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    description: 'Gemeinsam erfolgreich mit Zama Management Seminare: von Abrechnung, über Hygiene hin zu Führungskräfteentwicklung und Teamtraining. Jetzt informieren.',
  },
  twitter: {
    card: 'summary',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta httpEquiv="Content-Language" content="de" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        {/* Google Fonts: Oswald + Open Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
