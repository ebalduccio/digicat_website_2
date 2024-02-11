'use client'

import React from 'react'
import Container from '../Container'

import Image from 'next/image'
import FooterLinks from './FooterLinks'
import Link from 'next/link'
import { Copyright } from 'lucide-react'

const Footer = () => {
    return (
        <>
            <footer className='h-[60rem] xlg:h-[35rem] bg-homeblue border-b-gray-500'>
                <Container>
                    <div className='flex flex-col xlg:flex-row gap-10  justify-between items-center pt-20'>
                        <div className='flex flex-col gap-10'>
                            <Link href={'/'}>
                                <Image
                                    src={'/icons/Logo.svg'}
                                    alt='header logo'
                                    width={212}
                                    height={43}
                                />
                            </Link>
                            <p className='max-w-xs text-md text-white'>Nós somos profissionais altamente qualificados com mais de duas décadas de experiência em desenvolvimento tecnológico.</p>
                        </div>
                        <div className='flex gap-10'>
                            <div className='flex flex-col gap-5 text-white'>
                                <h3 className='text-sm text-black font-semibold'>Paginação</h3>
                                <div className='text-md flex flex-col gap-4'>
                                    <FooterLinks />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 text-white'>
                                <h3 className='text-sm text-black font-semibold'>Contato</h3>
                                <p className='text-md'>Fale Conosco!</p>
                                <div className='flex gap-4'>
                                    <Link href={'/'}>
                                        <Image
                                            src={'/icons/InstagramFooter.svg'}
                                            alt='instagram footer'
                                            width={60}
                                            height={60}
                                        />
                                    </Link>
                                    <Link href={'/'}>
                                        <Image
                                            src={'/icons/WppFooter.svg'}
                                            alt='wpp footer'
                                            width={60}
                                            height={60}
                                        />
                                    </Link>
                                    <Link href={'/'}>
                                        <Image
                                            src={'/icons/FacebookFooter.svg'}
                                            alt='facebook footer'
                                            width={60}
                                            height={60}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={'/images/FooterImage.png'}
                            alt='footer image'
                            width={223}
                            height={231}
                        />
                    </div>
                </Container>
            </footer>
            <div className='w-full h-20 bg-homeblue flex items-center justify-center text-white text-semibold border-t-2'>
                <p>© DigiCat | 2018 - 2024</p>
            </div>
        </>
    )
}

export default Footer