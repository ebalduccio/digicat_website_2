'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PartnershipSection = ({ backgroundVideoUrl = '/videos/homevideo3.mp4' }) => {
    const partners = [
        { name: 'Google', logo: '/images/google-logo.webp', color: '#4285F4' },
        { name: 'Meta', logo: '/images/meta-logo.webp', color: '#0668E1' },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={backgroundVideoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-sky-900 opacity-90 z-10"></div>
            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-extrabold text-white mb-4">
                        Parcerias <span className="text-transparent bg-clip-text bg-sky-500">Estratégicas</span>
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Colaboramos com gigantes da tecnologia para impulsionar inovação
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            className="w-full md:w-2/5"
                        >
                            <Card className="overflow-hidden group">
                                <CardContent className="p-0">
                                    <div className="relative h-64 bg-gradient-to-br from-white to-gray-100">
                                        <div
                                            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                                            style={{ backgroundColor: partner.color }}
                                        ></div>
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            layout="fill"
                                            objectFit="contain"
                                            className="p-8 transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-2">{partner.name} Partner</h3>
                                        <p className="text-gray-600 mb-4">Certificados e especializados em soluções {partner.name}</p>
                                        <Link href={'/services/marketing'}>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center text-blue-600 font-semibold group"
                                            >
                                                Explorar soluções
                                                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </motion.button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;