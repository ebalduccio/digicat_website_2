'use client'

import React, { useEffect, useState } from 'react';
import { MenuIcon, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from "next/legacy/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';

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

  const whatsappNumber = "5571993020258";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os seguintes serviços:");

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        className={`fixed z-50 w-full ${isTop
          ? 'py-6'
          : 'py-3 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-full items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Link href="/" className="flex items-center">
                <div className="relative group">
                  <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-sky-600/20 to-purple-600/20 opacity-0 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/icons/WhiteLogo.svg"
                    alt="Digicat logo"
                    width={150}
                    height={40}
                    className="relative transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center text-white space-x-1 px-8 py-2 rounded-2xl bg-gray-800/50 backdrop-blur-sm"
            >
              <NavLinks />
            </motion.nav>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {/* WhatsApp Button - Desktop */}
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
              >
                {/* <Button
                  size="lg"
                  className="relative group"
                > */}
                <span className="relative flex items-center gap-2 px-6 py-4 bg-emerald-300 bg-opacity-10 rounded-lg">
                  <MessageCircle size={18} className="text-green-500" />
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                    WhatsApp
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-green-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                {/* </Button> */}
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative group"
                onClick={() => setOpen(!open)}
              >
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-sky-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md" />
                <div className="relative p-2 rounded-xl bg-gray-800 text-white transition-colors duration-200">
                  {open ? <X size={24} /> : <MenuIcon size={24} />}
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6">
                  <Image
                    src="/icons/WhiteLogo.svg"
                    alt="Digicat logo"
                    width={120}
                    height={30}
                  />
                  <button
                    onClick={() => setOpen(false)}
                    className="relative group"
                  >
                    <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-sky-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md" />
                    <div className="relative p-2 rounded-xl bg-gray-800 text-white transition-colors duration-200">
                      <X size={20} />
                    </div>
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-y-auto px-6 pb-6">
                  <NavLinksMobile />
                </div>

                {/* Mobile Footer */}
                <div className="border-t border-gray-800/50 p-6 space-y-4">
                  {/* Mobile WhatsApp Button */}
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200" />
                      <span className="relative flex items-center justify-center gap-2 px-4 py-2 bg-emerald-300 rounded-lg">
                        <MessageCircle size={20} className="text-green-500" />
                        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
                          WhatsApp
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-green-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </Button>
                  </Link>

                  {/* Links */}
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                      Privacidade
                    </Link>
                    <div className="w-1 h-1 rounded-full bg-gray-700" />
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                      Termos
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;