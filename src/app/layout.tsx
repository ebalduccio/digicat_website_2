import type { Metadata } from 'next';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar/Navbar';
import { FooterWrapper } from '@/components/FooterWrapper'
import { NavbarProvider } from '@/context/NavContext';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Digicat',
  description: 'Digicat Website',
  icons: {
    icon: '/favicon.ico',
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