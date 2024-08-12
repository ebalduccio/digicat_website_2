'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import FooterLinks from './FooterLinks'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-b from-sky-900 to-sky-950 text-white">
            <Container>
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <Link href={'/'} className="inline-block">
                            <Image
                                src={'/icons/Logo.svg'}
                                alt='Digicat logo'
                                width={180}
                                height={36}
                                className="brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Nós somos profissionais altamente qualificados com mais de duas décadas de experiência em desenvolvimento tecnológico.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-sky-300">Navegação</h3>
                        <nav className="space-y-3">
                            <FooterLinks />
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-sky-300">Contato</h3>
                        <p className="text-gray-300 mb-4">Fale Conosco!</p>
                        <div className="flex space-x-4">
                            {['instagram', 'wpp', 'facebook'].map((social) => (
                                <Link key={social} href={'/'} className="transition-transform hover:scale-110">
                                    <Image
                                        src={`/icons/${social}Footer.svg`}
                                        alt={`${social} icon`}
                                        width={40}
                                        height={40}
                                        className="brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src={'/images/FooterImage.png'}
                            alt='footer image'
                            width={223}
                            height={231}
                            className="absolute bottom-0 right-0 max-w-full h-auto"
                        />
                    </div>
                </div>
            </Container>
            <div className="bg-sky-950 py-4">
                <Container>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <p>© <span className="font-digicat">DIGICAT</span> | 2018 - {currentYear}</p>
                        <div className="space-x-4">
                            <Link href="/" className="hover:text-sky-300 transition-colors">Termos de Uso</Link>
                            <Link href="/" className="hover:text-sky-300 transition-colors">Política de Privacidade</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer