'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { ArrowLeft, Users, CreditCard, VoteIcon, Newspaper, Smartphone } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import astramData from '@/data/astram.json';

const iconMap = {
    Users,
    CreditCard,
    VoteIcon,
    Newspaper,
    Smartphone
};

const FeatureCard: React.FC<{ icon: keyof typeof iconMap; title: string; description: string }> = ({ icon, title, description }) => {
    const IconComponent = iconMap[icon];
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
        >
            <div className="text-blue-500 mb-4">
                <IconComponent size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default function ASTRAMPage() {
    return (
        <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-20"
                >
                    <Link href="/portfolio" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar para o portfólio
                    </Link>

                    <div className="flex flex-col md:flex-row items-center mb-12">
                        <div className="md:w-2/3 md:pr-8">
                            <h1 className="text-5xl font-bold text-blue-900 mb-6">{astramData.title}</h1>
                            <p className="text-xl text-gray-700 mb-8">
                                {astramData.description}
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Principais Funcionalidades</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {astramData.features.map((feature, index) => (
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
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {astramData.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Benefícios para o Sindicato</h2>
                        <ul className="space-y-2">
                            {astramData.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <Smartphone size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </motion.div>
            </Container>
        </div>
    );
}