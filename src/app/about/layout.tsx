import type { Metadata } from 'next'
import '../globals.css'
import { cn } from '@/lib/utils'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Quem somos?',
  description: 'Digicat Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full '>
      <body className={cn('relative h-full antialiased font-rhd')}>
        <main className='absolute sm:relative flex flex-col min-h-screen'>
          <div className='flex-grow flex-1'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  )
}


