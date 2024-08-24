import type { Metadata } from 'next';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar/Navbar';
import { FooterWrapper } from '@/components/FooterWrapper'
import { NavbarProvider } from '@/context/NavContext';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

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
      <body className={cn('relative h-full antialiased', roboto.variable, 'font-roboto')}>
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