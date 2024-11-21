'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from "@/components/ui/container";
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { NavItems } from '@/constants';

const NavLinks = ({ item }: { item: { label: string; href: string } }) => {
    return (
        <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Link href={item.href}>
                <div className='group flex items-center gap-2 font-medium text-gray-400 hover:text-white rounded-lg py-2 transition duration-300 ease-in-out'>
                    <ArrowRight className="w-4 h-4 text-sky-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                </div>
            </Link>
        </motion.div>
    );
};

const SocialButton = ({ name, icon, href = '/' }: { name: string; icon: string; href?: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
    >
        <Link 
            href={href}
            className="relative group bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl flex items-center justify-center overflow-hidden"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            
            <Image
                src={`/icons/${icon}Footer.svg`}
                alt={`${name} icon`}
                width={24}
                height={24}
                className="relative z-10 brightness-0 invert group-hover:scale-110 transition-transform duration-300"
            />
        </Link>
    </motion.div>
);

const ContactItem = ({ icon: Icon, text }: { icon: any; text: string }) => (
    <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
        <div className="p-2 rounded-lg bg-gray-800">
            <Icon className="w-4 h-4 text-sky-400" />
        </div>
        <span className="text-sm">{text}</span>
    </div>
);

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
        <footer ref={ref} className="relative bg-gray-900">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative">
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
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Nós somos profissionais altamente qualificados com mais de duas décadas de experiência em desenvolvimento tecnológico.
                            </p>
                            {/* <div className="flex gap-3">
                                {['instagram', 'Wpp', 'Facebook'].map((social) => (
                                    <SocialButton key={social} name={social} icon={social} />
                                ))}
                            </div> */}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg font-semibold mb-6 text-white">Navegação</h3>
                            <nav className="space-y-1">
                                {NavItems.map((item, index) => (
                                    <NavLinks key={index} item={item} />
                                ))}
                            </nav>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
                            <div className="space-y-4">
                                <ContactItem icon={Phone} text="+55 (71) 99226-6505" />
                                <ContactItem icon={Mail} text="contato@digicat.com.br" />
                                <ContactItem icon={MapPin} text="Salvador, BA - Brasil" />
                            </div>
                        </motion.div>

                        <motion.div className="relative lg:text-right" variants={itemVariants}>
                            <div className="relative w-full aspect-square max-w-[280px] mx-auto lg:ml-auto">
                                <Image
                                    src={'/images/FooterImage.png'}
                                    alt='footer image'
                                    layout="fill"
                                    objectFit="contain"
                                    className="drop-shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </Container>

                {/* Bottom Bar */}
                <motion.div 
                    className="border-t border-gray-800"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1 }}
                >
                    <Container>
                        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                            <p>© <span className="font-digicat">DIGICAT</span> | 2018 - {currentYear}</p>
                            <div className="flex items-center gap-8">
                                <Link href="/" className="hover:text-white transition-colors">
                                    Termos de Uso
                                </Link>
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                                <Link href="/" className="hover:text-white transition-colors">
                                    Política de Privacidade
                                </Link>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;