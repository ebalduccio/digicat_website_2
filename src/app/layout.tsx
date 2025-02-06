import type { Metadata } from 'next';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar/Navbar';
import { FooterWrapper } from '@/components/FooterWrapper'
import { NavbarProvider } from '@/context/NavContext';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Digicat',
  description: 'Digicat - Soluções Digitais para Empresas Modernas',
  keywords: [
    'transformação digital',
    'soluções tecnológicas',
    'inovação digital',
    'consultoria tech',
    'desenvolvimento web',
    'tecnologia empresarial'
  ],
  authors: [
    { name: 'Digicat' }
  ],
  creator: 'Digicat',
  publisher: 'Digicat',
  metadataBase: new URL('https://digicat.tech'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Digicat',
    description: 'Digicat - Soluções Digitais para Empresas Modernas',
    url: 'https://digicat.tech',
    siteName: 'Digicat',
    images: [
      {
        url: '/ogimage/og-image.png', // EDIT: Adicionar imagem OG 1200x630px
        width: 1200,
        height: 630,
        alt: 'Digicat - Soluções Digitais',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digicat',
    description: 'Digicat - Soluções Digitais para Empresas Modernas',
    images: ['/twitter-image.png'], // EDIT: Adicionar imagem Twitter
    creator: '@digicat', // EDIT: Handle do Twitter
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='h-full'>
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M4ZQ9MMP');`}
      </Script>
      <body className={cn('relative h-full antialiased', 'font-roboto')}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4ZQ9MMP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NavbarProvider>
          <div className='flex bg-gray-900 flex-col min-h-screen'>
            <Navbar />
            <main className='flex-grow'>
              {children}
            </main>
            <FooterWrapper />
          </div>
        </NavbarProvider>
      </body>
    </html>
  );
}