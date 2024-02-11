'use client'

import React from 'react'
import Container from '../Container'

import Image from 'next/image'
import Logo from '../../../../public/icons/Logo.svg'
import InstagramFooter from '../../../../public/icons/InstagramFooter.svg'
import WppFooter from '../../../../public/icons/WppFooter.svg'
import FacebookFooter from '../../../../public/icons/FacebookFooter.svg'
import FooterImage from '../../../../public/images/FooterImage.png'
import FooterLinks from './FooterLinks'

const Footer = () => {
    return (
        <>
            <footer className='h-[70rem] xlg:h-[35rem] bg-homeblue'>
                <Container>
                    <div className='flex flex-col xlg:flex-row gap-10  justify-between items-center pt-20'>
                        <div className='flex flex-col gap-10'>
                            <Image
                                src={Logo}
                                alt='Digicat Logo'
                            />
                            <p className='max-w-xs text-md text-white'>Nós somos profissionais altamente qualificados com mais de duas décadas de experiência em desenvolvimento tecnológico.</p>
                        </div>
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
                                <Image 
                                    src={InstagramFooter}
                                    alt='instagram footer'
                                />
                                <Image 
                                    src={WppFooter}
                                    alt='wpp footer'
                                />
                                <Image 
                                    src={FacebookFooter}
                                    alt='facebook footer'
                                />
                            </div>
                        </div>
                        <Image 
                            src={FooterImage}
                            alt='footer image'
                        />
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer