'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { ArrowLeft, ChevronRight, Database, Globe, LineChart, Clock } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import investorAcumenData from '@/data/investor-acumen.json';

const iconMap = {
    Globe,
    Database,
    LineChart,
    Clock
};

const FeatureCard: React.FC<{ icon: keyof typeof iconMap; title: string; description: string }> = ({ icon, title, description }) => {
    const IconComponent = iconMap[icon];
    return (
        <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
        >
            <div className="text-sky-500 mb-4">
                <IconComponent size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

export default function InvestorAcumenDetail() {
    return (
        <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-20"
                >
                    <Link href="/portfolio" className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-8">
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar para o portfólio
                    </Link>
                    
                    <h1 className="text-5xl font-bold text-sky-900 mb-6">{investorAcumenData.title}</h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                        {investorAcumenData.description}
                    </p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-sky-800 mb-4">Detalhes do Projeto</h2>
                        <ul className="space-y-2">
                            {investorAcumenData.projectDetails.map((detail, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <ChevronRight size={20} className="text-sky-500 mr-2" />
                                    {detail.label}: {detail.value}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-sky-800 mb-6">Principais Funcionalidades</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {investorAcumenData.features.map((feature, index) => (
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
                        <h2 className="text-2xl font-semibold text-sky-800 mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {investorAcumenData.technologies.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </motion.div>
            </Container>
        </div>
    );
}