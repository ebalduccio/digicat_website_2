'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, CreditCard, VoteIcon, Newspaper, Smartphone } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
    >
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

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
                            <h1 className="text-5xl font-bold text-blue-900 mb-6">ASTRAM</h1>
                            <p className="text-xl text-gray-700 mb-8">
                                Aplicativo sindical inovador que oferece gestão de associados, carteira virtual,
                                sistema de enquetes e notícias, tudo em uma plataforma móvel intuitiva e eficiente.
                            </p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Principais Funcionalidades</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={<Users size={32} />}
                                title="Gestão de Associados"
                                description="Cadastro e gerenciamento eficiente de membros do sindicato."
                            />
                            <FeatureCard
                                icon={<CreditCard size={32} />}
                                title="Carteira Virtual"
                                description="Acesso digital à identificação sindical e benefícios associados."
                            />
                            <FeatureCard
                                icon={<VoteIcon size={32} />}
                                title="Sistema de Enquetes"
                                description="Ferramenta para coleta de opiniões e tomada de decisões democráticas."
                            />
                            <FeatureCard
                                icon={<Newspaper size={32} />}
                                title="Notícias"
                                description="Atualização em tempo real sobre atividades sindicais e informações relevantes."
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {["React", "React Native", "Firebase Auth", "Firebase Firestore"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Benefícios para o Sindicato</h2>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <Smartphone size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span>Comunicação direta e eficiente com os associados</span>
                            </li>
                            <li className="flex items-start">
                                <Smartphone size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span>Aumento da participação dos membros em decisões importantes</span>
                            </li>
                            <li className="flex items-start">
                                <Smartphone size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span>Simplificação de processos administrativos</span>
                            </li>
                            <li className="flex items-start">
                                <Smartphone size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span>Acesso rápido a informações e serviços sindicais</span>
                            </li>
                        </ul>
                    </div>

                </motion.div>
            </Container>
        </div>
    );
}