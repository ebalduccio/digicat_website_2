'use client';

import React, { useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';
import Container from '../Container';
import { useNavbar } from '../../context/NavContext';

function Navbar() {
  const { open, setOpen } = useNavbar();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='relative bg-white border-b h-16'>
          <Container className='flex h-16'>
            <div className='flex justify-around items-center w-full'>
              <div className='ml-4 md:ml-2 self-stretch flex items-center'>
                <Link href={'/'}>
                  <Image
                    src={'/icons/Logo.svg'}
                    alt='header logo'
                    width={212}
                    height={43}
                  />
                </Link>
              </div>
              <div className='lg:hidden duration-300 hover:cursor-pointer' onClick={() => setOpen(!open)}>
                {open ? <X /> : <MenuIcon />}
              </div>
              <div className='w-auto hidden lg:flex gap-12 justify-center items-center h-full'>
                <NavLinks />
              </div>
            </div>
          </Container>
        </header>
      </div>
      {/* Mobile Nav */}
      <div className={`lg: z-10 pt-20 bg-white fixed border-r w-72 h-full duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
        <div className='h-screen w-full'>
          <div className='flex flex-col w-full justify-start gap-8'>
            <div className='flex w-full overflow-hidden flex-col mt-2 gap-8'>
              <NavLinksMobile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;