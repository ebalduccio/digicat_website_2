'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Fingerprint, UserCheck, Shield, Globe, Database, Key } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

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

export default function ParaguayIdentitySystemPage() {
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
                    
                    <h1 className="text-5xl font-bold text-blue-900 mb-6">Sistema de Identidade - Paraguai</h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                        Um sistema de última geração para emissão de carteira de identidade e passaporte, 
                        desenvolvido especificamente para o governo do Paraguai. Este sistema incorpora 
                        tecnologia biométrica avançada e medidas de segurança robustas para garantir a 
                        integridade e confiabilidade dos documentos de identificação nacional.
                    </p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-6">Principais Funcionalidades</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FeatureCard
                                icon={<UserCheck size={32} />}
                                title="Cadastro de Cidadãos"
                                description="Sistema abrangente para registro e atualização de informações dos cidadãos paraguaios."
                            />
                            <FeatureCard
                                icon={<Fingerprint size={32} />}
                                title="Biometria Multimodal"
                                description="Captura e processamento de impressões digitais, reconhecimento facial e íris."
                            />
                            <FeatureCard
                                icon={<Shield size={32} />}
                                title="Segurança Avançada"
                                description="Protocolos de segurança de nível militar para prevenir fraudes e falsificações."
                            />
                            <FeatureCard
                                icon={<Globe size={32} />}
                                title="Integração Nacional"
                                description="API robusta para integração com outros sistemas governamentais em todo o Paraguai."
                            />
                            <FeatureCard
                                icon={<Database size={32} />}
                                title="Gestão de Dados Centralizada"
                                description="Armazenamento centralizado e seguro de dados biométricos e pessoais."
                            />
                            <FeatureCard
                                icon={<Key size={32} />}
                                title="Autenticação Multifator"
                                description="Sistema de autenticação robusto para acesso ao sistema e verificação de identidade."
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {["C++", "C#", "Java", "Oracle", "Algoritmos Biométricos Avançados", "Criptografia de Ponta"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Impacto e Benefícios para o Paraguai</h2>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <div className="text-blue-500 mr-2 mt-1">•</div>
                                <span>Modernização significativa do sistema de identificação nacional</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-blue-500 mr-2 mt-1">•</div>
                                <span>Redução drástica em casos de fraude de identidade e documentos falsos</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-blue-500 mr-2 mt-1">•</div>
                                <span>Aumento na eficiência dos serviços públicos que dependem de verificação de identidade</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-blue-500 mr-2 mt-1">•</div>
                                <span>Melhoria na segurança nacional e controle de fronteiras</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-blue-500 mr-2 mt-1">•</div>
                                <span>Facilitação de processos eleitorais e outros serviços governamentais</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mb-12">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Desafios Superados</h2>
                        <p className="text-gray-700 mb-4">
                            O desenvolvimento e implementação deste sistema enfrentou e superou vários desafios complexos:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Integração de múltiplas modalidades biométricas em um sistema unificado e eficiente</li>
                            <li>Desenvolvimento de uma infraestrutura capaz de lidar com o volume de dados de toda a população paraguaia</li>
                            <li>Implementação de medidas de segurança que atendem aos mais altos padrões internacionais</li>
                            <li>Criação de uma interface intuitiva para funcionários governamentais com diferentes níveis de expertise técnica</li>
                            <li>Adaptação do sistema às leis e regulamentações específicas do Paraguai</li>
                            <li>Garantia de acessibilidade do sistema em áreas remotas do país</li>
                        </ul>
                    </div>

                </motion.div>
            </Container>
        </div>
    );
}