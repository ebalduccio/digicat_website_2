'use client'

import React, { useEffect, useState } from 'react';
import { MenuIcon, X, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';
import Container from '../Container';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `sticky z-50 top-0 inset-x-0 transition-all duration-300 bg-gradient-to-r from-gray-900 to-sky-950 ${
    !isTop ? 'backdrop-blur-md' : ''
  }`;

  const whatsappNumber = "5571993020258";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os seguintes serviços:");

  return (
    <>
      <div className={navbarClasses}>
        <div className="relative">
          <div className="absolute top-0 left-0 h-full flex items-center pl-4">
            <Link href={'/'} className='flex items-center'>
              <Image
                src='/icons/WhiteLogo.svg'
                alt='Digicat logo'
                width={150}
                height={40}
              />
            </Link>
          </div>
          <Container className="flex justify-center items-center h-20">
            <nav className='hidden lg:flex text-white items-center justify-center'>
              <NavLinks />
            </nav>
            <div className="lg:hidden">
              <button
                className='p-2 rounded-md text-white hover:bg-white/20 transition duration-200'
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </Container>
          <div className="absolute top-0 right-0 h-full flex items-center pr-4">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-gray-900 shadow-xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <Image
                  src='/icons/WhiteLogo.svg'
                  alt='Digicat logo'
                  width={120}
                  height={30}
                />
                <button
                  className='p-2 rounded-md text-white hover:bg-white/20 transition duration-200'
                  onClick={() => setOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-grow p-4">
                <NavLinksMobile />
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-4"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </Link>
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