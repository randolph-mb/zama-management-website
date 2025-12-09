import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';

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
        <meta httpEquiv="Content-Language" content="de" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      </head>
      <body>
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
