'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from "@/components/ui/container"
import FooterLinks from './FooterLinks'
import { motion, useInView } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <footer ref={ref} className="bg-gradient-to-b from-sky-900 to-sky-950 text-white">
            <Container>
                <motion.div 
                    className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
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
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-sky-300">Navegação</h3>
                        <nav className="space-y-3">
                            <FooterLinks />
                        </nav>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-sky-300">Contato</h3>
                        <p className="text-gray-300 mb-4">Fale Conosco!</p>
                        <div className="flex space-x-4">
                            {['instagram', 'Wpp', 'Facebook'].map((social) => (
                                <motion.div
                                    key={social}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href={'/'} className="transition-transform hover:scale-110">
                                        <Image
                                            src={`/icons/${social}Footer.svg`}
                                            alt={`${social} icon`}
                                            width={40}
                                            height={40}
                                            className="brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="relative" variants={itemVariants}>
                        <Image
                            src={'/images/FooterImage.png'}
                            alt='footer image'
                            width={223}
                            height={231}
                            className="absolute bottom-0 right-0 max-w-full h-auto"
                        />
                    </motion.div>
                </motion.div>
            </Container>
            <motion.div 
                className="bg-sky-950 py-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
            >
                <Container>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <p>© <span className="font-digicat">DIGICAT</span> | 2018 - {currentYear}</p>
                        <div className="space-x-4">
                            <Link href="/" className="hover:text-sky-300 transition-colors">Termos de Uso</Link>
                            <Link href="/" className="hover:text-sky-300 transition-colors">Política de Privacidade</Link>
                        </div>
                    </div>
                </Container>
            </motion.div>
        </footer>
    )
}

export default Footer