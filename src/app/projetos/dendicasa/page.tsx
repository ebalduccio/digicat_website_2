'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { ArrowLeft, MapPin, CreditCard, Clock, Truck, Star } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import dendicasaData from '@/data/dendicasa.json';

const iconMap = {
    MapPin,
    CreditCard,
    Clock,
    Truck,
    Star
};

const FeatureCard: React.FC<{ icon: keyof typeof iconMap; title: string; description: string }> = ({ icon, title, description }) => {
    const IconComponent = iconMap[icon];
    return (
        <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
        >
            <div className="text-orange-500 mb-4">
                <IconComponent size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default function DendicasaPage() {
    return (
        <div className="bg-gradient-to-b from-orange-100 to-white min-h-screen">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-20"
                >
                    <Link href="/portfolio" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar para o portfólio
                    </Link>
                    
                    <h1 className="text-5xl font-bold text-orange-900 mb-6">{dendicasaData.title}</h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                        {dendicasaData.description}
                    </p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-6">Principais Funcionalidades</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {dendicasaData.features.map((feature, index) => (
                                <FeatureCard
                                    key={index}
                                    icon={feature.icon as keyof typeof iconMap}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {dendicasaData.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Benefícios do Dendicasa</h2>
                        <ul className="space-y-2">
                            {dendicasaData.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="text-orange-500 mr-2 mt-1">•</div>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Desafios Superados</h2>
                        <p className="text-gray-700 mb-4">
                            Durante o desenvolvimento do Dendicasa, enfrentamos e superamos vários desafios, incluindo:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {dendicasaData.challenges.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                            ))}
                        </ul>
                    </div>

                </motion.div>
            </Container>
        </div>
    );
}