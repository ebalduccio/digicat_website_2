'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Fingerprint, UserCheck, Shield, Globe, Database } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <motion.div 
        className="bg-white p-6 rounded-lg shadow-md"
        whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
    >
        <div className="text-red-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

export default function PanamaIdentitySystemPage() {
    return (
        <div className="bg-gradient-to-b from-red-100 to-white min-h-screen">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-20"
                >
                    <Link href="/portfolio" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar para o portfólio
                    </Link>
                    
                    <h1 className="text-5xl font-bold text-red-900 mb-6">Sistema de Identidade - Panamá</h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                        Um sistema de emissão de carteira de identidade e passaporte de última geração, 
                        desenvolvido especificamente para o governo do Panamá. Este sistema integra 
                        tecnologia biométrica avançada para garantir a segurança e a integridade da 
                        identificação nacional.
                    </p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-red-800 mb-6">Principais Funcionalidades</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FeatureCard
                                icon={<UserCheck size={32} />}
                                title="Cadastro de Cidadãos"
                                description="Sistema robusto para registro e atualização de informações dos cidadãos."
                            />
                            <FeatureCard
                                icon={<Fingerprint size={32} />}
                                title="Biometria Avançada"
                                description="Captura e processamento de impressões digitais e reconhecimento facial."
                            />
                            <FeatureCard
                                icon={<Shield size={32} />}
                                title="Segurança Aprimorada"
                                description="Medidas de segurança de ponta para prevenir fraudes e falsificações."
                            />
                            <FeatureCard
                                icon={<Globe size={32} />}
                                title="Integração Nacional"
                                description="API para integração com outros sistemas governamentais em todo o país."
                            />
                            <FeatureCard
                                icon={<Database size={32} />}
                                title="Gerenciamento de Dados"
                                description="Armazenamento seguro e eficiente de grandes volumes de dados biométricos."
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-red-800 mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {["C++", "C#", "Java", "Oracle", "Algoritmos Biométricos"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-red-100 text-red-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-red-800 mb-4">Impacto e Benefícios</h2>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <div className="text-red-500 mr-2 mt-1">•</div>
                                <span>Aumento significativo na segurança e confiabilidade dos documentos de identidade nacionais</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-red-500 mr-2 mt-1">•</div>
                                <span>Redução drástica em casos de fraude de identidade</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-red-500 mr-2 mt-1">•</div>
                                <span>Melhoria na eficiência dos serviços governamentais relacionados à identificação</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-red-500 mr-2 mt-1">•</div>
                                <span>Facilitação de processos de verificação de identidade em todo o país</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg mb-12">
                        <h2 className="text-2xl font-semibold text-red-800 mb-4">Desafios Superados</h2>
                        <p className="text-gray-700 mb-4">
                            O desenvolvimento e implementação deste sistema enfrentou vários desafios complexos:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Integração de múltiplas tecnologias biométricas em um sistema coeso</li>
                            <li>Garantia de alta disponibilidade e performance para um sistema de escala nacional</li>
                            <li>Implementação de medidas de segurança rigorosas para proteger dados sensíveis dos cidadãos</li>
                            <li>Desenvolvimento de uma interface intuitiva para funcionários governamentais com diversos níveis de habilidade técnica</li>
                            <li>Adaptação do sistema às regulamentações e requisitos legais específicos do Panamá</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-red-800 mb-4">Interessado em Sistemas de Identificação Governamental?</h2>
                        <p className="text-gray-700 mb-6">
                            Se você representa um governo ou organização que necessita de um sistema de identificação 
                            robusto e seguro, gostaríamos de compartilhar nossa experiência e discutir como podemos 
                            adaptar nossa solução às suas necessidades específicas.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                                Agendar uma Consultoria
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}