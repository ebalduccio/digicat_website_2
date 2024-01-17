'use client'

import React, { useState } from 'react'
import { MenuIcon, X } from 'lucide-react'

import Container from '../Container'
import NavLinks from './NavLinks'

import Link from 'next/link'
import Image from 'next/image'

import logo from '../../../../public/Logo.svg'

function Navbar() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white border-b h-16'>
                <Container className='flex h-16'>
                    <div className='flex justify-between items-center w-full lg:w-auto'>
                        <div className='ml-4 md:ml-2 self-stretch flex items-center'>
                            <Link href={'/'}>
                                <Image
                                    src={logo}
                                    alt='header logo'
                                />
                            </Link>
                        </div>
                        <div className='lg:hidden duration-300 hover:cursor-pointer' onClick={() => setOpen(!open)}>
                            {open ? <MenuIcon /> : <X />}
                        </div>
                        <div className='w-auto hidden lg:flex gap-12 justify-center items-center'>
                            <NavLinks />
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    )
}

export default Navbar