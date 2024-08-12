'use client';

import React, { useEffect, useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';
import Container from '../Container';
import { Button } from "@/components/ui/button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className='bg-white sticky z-50 top-0 inset-x-0 h-20 shadow-sm'>
        <header className='relative bg-white h-20'>
          <Container>
            <div className='flex justify-between items-center h-20'>
              <Link href={'/'} className='flex items-center'>
                <Image
                  src={'/icons/Logo.svg'}
                  alt='Digicat logo'
                  width={150}
                  height={40}
                  className="mr-4"
                />
              </Link>
              <nav className='hidden lg:flex items-center space-x-8'>
                <NavLinks />
              </nav>
              <button 
                className='lg:hidden p-2 rounded-md hover:bg-gray-100 transition duration-200'
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </Container>
        </header>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <Image
                  src={'/icons/Logo.svg'}
                  alt='Digicat logo'
                  width={120}
                  height={30}
                />
                <button 
                  className='p-2 rounded-md hover:bg-gray-100 transition duration-200'
                  onClick={() => setOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-grow p-4">
                <NavLinksMobile />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay for mobile nav */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;