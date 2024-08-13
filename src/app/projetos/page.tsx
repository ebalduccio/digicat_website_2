'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from "@/components/ui/container";
import { ArrowLeft, Fingerprint, UserCheck, Shield, Globe, Database, Users, CreditCard, VoteIcon, Newspaper, MapPin, Clock, Truck, Star } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import allProjectsData from '@/data/all-projects.json';

type ProjectData = {
  title: string;
  description: string;
  theme?: string;
  details?: { label: string; value: string }[];
  features?: { icon: string; title: string; description: string }[];
  technologies?: string[];
  benefits?: string[];
  impactAndBenefits?: string[];
  challengesOvercome?: string[];
};

const iconMap: { [key: string]: React.ElementType } = {
    Fingerprint, UserCheck, Shield, Globe, Database, Users, CreditCard, VoteIcon, Newspaper, MapPin, Clock, Truck, Star
};

const FeatureCard: React.FC<{ icon: keyof typeof iconMap; title: string; description: string }> = ({ icon, title, description }) => {
    const IconComponent = iconMap[icon] || Globe;
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
        >
            <div className="text-primary-500 mb-4">
                <IconComponent size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

const projectThemes = {
  'investor-acumen': { primary: 'blue', secondary: 'sky' },
  'astram': { primary: 'green', secondary: 'emerald' },
  'dendicasa': { primary: 'orange', secondary: 'amber' },
  'sistema-identidade-panama': { primary: 'red', secondary: 'rose' },
  'sistema-identidade-paraguai': { primary: 'purple', secondary: 'violet' },
  // Adicione mais temas de projetos conforme necessário
};

const getThemeClass = (baseClass: string, projectId: string | null, fallback: string) => {
  const theme = projectId && projectThemes[projectId as keyof typeof projectThemes] ? projectThemes[projectId as keyof typeof projectThemes].primary : fallback;
  return `${baseClass}-${theme}`;
};

export default function ProjectPage() {
    const searchParams = useSearchParams();
    const projectId = searchParams.get('id');
    const projectData: ProjectData | undefined = projectId ? (allProjectsData as Record<string, ProjectData>)[projectId] : undefined;

    if (!projectData) {
        return (
            <Container>
                <div className="py-20 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Projeto não encontrado</h1>
                    <Link href="/portfolio" className="text-primary-600 hover:text-primary-700">
                        Voltar para o portfólio
                    </Link>
                </div>
            </Container>
        );
    }

    return (
        <div className={`bg-gradient-to-b ${getThemeClass('from', projectId, 'primary')}-100 to-white min-h-screen`}>
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-20"
                >
                    <Link href="/portfolio" className={`inline-flex items-center ${getThemeClass('text', projectId, 'primary')}-600 hover:${getThemeClass('text', projectId, 'primary')}-700 mb-8`}>
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar para o portfólio
                    </Link>

                    <h1 className={`text-5xl font-bold ${getThemeClass('text', projectId, 'primary')}-900 mb-6`}>{projectData.title}</h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                        {projectData.description}
                    </p>

                    {projectData.details && (
                        <motion.div 
                            className="mb-16 p-8 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className={`text-3xl font-bold ${getThemeClass('text', projectId, 'primary')}-800 mb-6`}>Detalhes do Projeto</h2>
                            <ul className="space-y-4">
                                {projectData.details.map((detail, index) => (
                                    <motion.li 
                                        key={index} 
                                        className="flex items-center text-gray-700"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className={`${getThemeClass('text', projectId, 'primary')}-500 mr-4`}>
                                            <Globe size={24} />
                                        </div>
                                        <span className="text-lg"><strong>{detail.label}:</strong> {detail.value}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {projectData.features && (
                        <motion.div 
                            className="mb-16 p-8 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className={`text-3xl font-bold ${getThemeClass('text', projectId, 'primary')}-800 mb-6`}>Principais Funcionalidades</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projectData.features.map((feature, index) => (
                                    <FeatureCard
                                        key={index}
                                        icon={feature.icon as keyof typeof iconMap}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {projectData.technologies && (
                        <motion.div 
                            className="mb-16 p-8 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className={`text-3xl font-bold ${getThemeClass('text', projectId, 'primary')}-800 mb-6`}>Tecnologias Utilizadas</h2>
                            <div className="flex flex-wrap gap-4">
                                {projectData.technologies.map((tech, index) => (
                                    <motion.span 
                                        key={tech} 
                                        className={`px-4 py-2 ${getThemeClass('bg', projectId, 'primary')}-100 ${getThemeClass('text', projectId, 'primary')}-800 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow duration-300`}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {projectData.benefits && (
                        <motion.div 
                            className="mb-16 p-8 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h2 className={`text-3xl font-bold ${getThemeClass('text', projectId, 'primary')}-800 mb-6`}>Benefícios</h2>
                            <ul className="space-y-4">
                                {projectData.benefits.map((benefit, index) => (
                                    <motion.li 
                                        key={index} 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className={`${getThemeClass('text', projectId, 'primary')}-500 mr-4 mt-1`}>
                                            <Shield size={24} />
                                        </div>
                                        <span className="text-gray-700 text-lg">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {projectData.impactAndBenefits && (
                        <motion.div 
                            className="mb-16 p-8 bg-white rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h2 className={`text-3xl font-bold ${getThemeClass('text', projectId, 'primary')}-800 mb-6`}>Impacto e Benefícios</h2>
                            <ul className="space-y-4">
                                {projectData.impactAndBenefits.map((item, index) => (
                                    <motion.li 
                                        key={index} 
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className={`${getThemeClass('text', projectId, 'primary')}-500 mr-4 mt-1`}>
                                            <Star size={24} />
                                        </div>
                                        <span className="text-gray-700 text-lg">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {projectData.challengesOvercome && (
                        <motion.div 
                            className={`${getThemeClass('bg', projectId, 'primary')}-50 p-8 rounded-lg shadow-lg mb-16`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <h2 className={`text-3xl font-bold ${getThemeClass('text', projectId, 'primary')}-800 mb-6`}>Desafios Superados</h2>
                            <p className="text-gray-700 text-lg mb-6">
                                Durante o desenvolvimento deste projeto, enfrentamos e superamos vários desafios complexos:
                            </p>
                            <ul className="space-y-4">
                                {projectData.challengesOvercome.map((challenge, index) => (
                                    <motion.li 
                                        key={index}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className={`${getThemeClass('text', projectId, 'primary')}-500 mr-4 mt-1`}>
                                            <Clock size={24} />
                                        </div>
                                        <span className="text-gray-700 text-lg">{challenge}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </motion.div>
            </Container>
        </div>
    );
}