'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight, Shield, Award, Zap } from 'lucide-react';
import Link from 'next/link';

const partners = [
    {
        name: 'Google',
        logo: '/images/google-logo.webp',
        color: '#4285F4',
        benefits: [
            { icon: Shield, text: 'Proteção de dados avançada' },
            { icon: Award, text: 'Certificação oficial' },
            { icon: Zap, text: 'Performance otimizada' }
        ],
        description: 'Acesso exclusivo às mais avançadas ferramentas de marketing e análise do Google, permitindo estratégias data-driven precisas.'
    },
    {
        name: 'Meta',
        logo: '/images/meta-logo.webp',
        color: '#0668E1',
        benefits: [
            { icon: Shield, text: 'Segurança integrada' },
            { icon: Award, text: 'Parceiro certificado' },
            { icon: Zap, text: 'Alcance maximizado' }
        ],
        description: 'Recursos exclusivos para maximizar sua presença nas plataformas Meta, incluindo Instagram, Facebook e WhatsApp Business.'
    },
];

const PartnerCard: React.FC<{ partner: typeof partners[0], index: number }> = ({ partner, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-full md:w-[calc(50%-1rem)]"
        >
            <div className="relative group">
                {/* Card Shadow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 blur" />

                <Card className="relative bg-gray-900 border-0 rounded-xl overflow-hidden">
                    <CardContent className="p-0">
                        {/* Logo Section */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                            <div
                                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                style={{ backgroundColor: partner.color }}
                            />
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                layout="fill"
                                objectFit="contain"
                                className="p-8 transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
                            />
                            {/* Animated Glow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700 transform -rotate-12" />
                        </div>

                        {/* Content Section */}
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-2xl font-bold text-white">{partner.name} Partner</h3>
                                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-500/20 border border-sky-500/20">
                                    <span className="text-sm font-medium text-sky-400">Oficial</span>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {partner.description}
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-3 mb-8">
                                {partner.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                                        <benefit.icon className="w-5 h-5 text-sky-400" />
                                        <span className="text-sm">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href={'/services/marketing'} className="block">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700/50 group/button cursor-pointer"
                                >
                                    <span className="text-white font-medium">Explorar soluções</span>
                                    <ArrowRight className="w-5 h-5 text-sky-400 transform group-hover/button:translate-x-1 transition-transform duration-300" />
                                </motion.div>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
};

const PartnershipSection: React.FC<{ backgroundVideoUrl?: string }> = ({
    backgroundVideoUrl = '/videos/homevideo3.mp4'
}) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Video Background with Enhanced Overlay */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                >
                    <source src={backgroundVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-sky-900/90" />
                {/* Animated Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="bg-gradient-to-r from-sky-400/10 to-blue-400/10 text-sky-400 text-sm font-medium px-4 py-2 rounded-full mb-6 inline-block">
                            Parcerias Oficiais
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-5xl font-bold mb-6 py-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Parcerias{' '}
                        <span className="relative inline-block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                            Estratégicas
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Colaboramos com gigantes da tecnologia para impulsionar inovação e entregar resultados excepcionais
                    </motion.p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {partners.map((partner, index) => (
                        <PartnerCard key={partner.name} partner={partner} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;