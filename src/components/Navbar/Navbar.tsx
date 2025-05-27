'use client'

import React, { useEffect, useState, KeyboardEvent as ReactKeyboardEvent } from 'react'
import {
  Menu, X, MessageCircle, Search,
  ChevronRight, ArrowUpRight, BellRing
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { NavItems } from '@/constants'
import NavLinks from './NavLinks'
import NavLinksMobile from './NavLinksMobile'

// Types
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  subItems?: SubNavItem[];
}

export interface SubNavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent): void => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const whatsappNumber = "5571992266505"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os seguintes serviços:")

  // Navbar animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
          scrolled
            ? "py-3 bg-white/10 dark:bg-gray-950/70 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-800/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]"
            : "py-5 bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block relative group">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-700 group-hover:duration-500" />
                <Image
                  src="/icons/WhiteLogo.svg"
                  alt="Digicat logo"
                  width={130}
                  height={35}
                  className="relative transition-all duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <nav className="flex items-center justify-center px-3 py-1.5 rounded-full bg-white/10 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/20 dark:border-gray-800/30">
                <NavLinks />

                {/* Search Button */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="ml-2 p-2 text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Search"
                >
                  <Search size={18} />
                  <span className="sr-only">Search</span>
                </button>
              </nav>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Notification Bell - Desktop */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild className="hidden lg:block">
                  <Button variant="ghost" size="icon" className="relative">
                    <BellRing size={20} className="text-gray-500 dark:text-gray-400" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[300px] p-4">
                  <div className="text-sm font-medium">Notificações</div>
                  <div className="mt-2 text-xs text-gray-500">Você não tem novas notificações</div>
                </DropdownMenuContent>
              </DropdownMenu> */}

              {/* WhatsApp Button - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="hidden lg:block"
              >
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative px-5 py-2.5 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-emerald-600 shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-2 text-white">
                      <MessageCircle size={18} className="animate-bounce" />
                      <span className="font-medium">Fale Conosco</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden flex items-center justify-center p-2 rounded-full  dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/50 text-white dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/70 transition-all duration-200"
                aria-expanded={open}
                aria-label="Menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 shadow-2xl lg:hidden overflow-hidden"
            >
              <div className="flex h-full flex-col overflow-y-auto">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-800/50">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/icons/WhiteLogo.svg"
                      alt="Digicat logo"
                      width={120}
                      height={30}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full bg-gray-800/70 text-gray-400 hover:text-white hover:bg-gray-700/70 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Search Input - Mobile */}
                <div className="px-6 pt-6 pb-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Buscar..."
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-full py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 px-6 py-6">
                  <NavLinksMobile />
                </div>

                {/* Mobile Footer */}
                <div className="border-t border-gray-800/50 p-6 space-y-4">
                  {/* Mobile WhatsApp Button */}
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-green-500 to-emerald-600"
                    >
                      <div className="relative flex items-center justify-center gap-2 p-3 text-white">
                        <MessageCircle size={18} />
                        <span className="font-medium">Fale Conosco</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>

                  {/* Links */}
                  <div className="flex items-center justify-center space-x-6 text-sm pt-2">
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

      {/* Global Search Dialog */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Sugestões">
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <Link href="/services/web-development">
                <span>Desenvolvimento de Sites</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <Link href="/services/apps">
                <span>Desenvolvimento de Apps</span>
              </Link>
            </CommandItem>
            <CommandItem>
              <Search className="mr-2 h-4 w-4" />
              <Link href="/services/marketing">
                <span>Marketing Digital</span>
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links Rápidos">
            {NavItems.map((item, index) => (
              <CommandItem
                key={index}
                onSelect={(): void => {
                  setSearchOpen(false)
                  window.location.href = item.href
                }}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Navbar;