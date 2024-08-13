'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, CreditCard, Clock, Truck, Star } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <motion.div 
        className="bg-white p-6 rounded-lg shadow-md"
        whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)' }}
    >
        <div className="text-orange-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

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
                    
                    <h1 className="text-5xl font-bold text-orange-900 mb-6">Dendicasa</h1>
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                        Dendicasa é um aplicativo de entrega inovador, similar ao Uber Eats, projetado para 
                        conectar clientes a uma variedade de restaurantes e serviços de entrega locais. Com 
                        uma interface intuitiva e recursos avançados, o Dendicasa oferece uma experiência 
                        de pedido e entrega sem complicações.
                    </p>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-6">Principais Funcionalidades</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FeatureCard
                                icon={<MapPin size={32} />}
                                title="Geolocalização Inteligente"
                                description="Localiza restaurantes próximos e calcula rotas eficientes para entrega."
                            />
                            <FeatureCard
                                icon={<CreditCard size={32} />}
                                title="Integração de Pagamentos"
                                description="Processamento seguro de pagamentos através da integração com EBANX."
                            />
                            <FeatureCard
                                icon={<Clock size={32} />}
                                title="Rastreamento em Tempo Real"
                                description="Acompanhamento do status do pedido e localização do entregador em tempo real."
                            />
                            <FeatureCard
                                icon={<Truck size={32} />}
                                title="Gerenciamento de Frota"
                                description="Sistema eficiente para gerenciar entregadores e otimizar entregas."
                            />
                            <FeatureCard
                                icon={<Star size={32} />}
                                title="Sistema de Avaliação"
                                description="Permite que usuários avaliem restaurantes e entregadores, mantendo a qualidade do serviço."
                            />
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Tecnologias Utilizadas</h2>
                        <div className="flex flex-wrap gap-3">
                            {["React Native", "Firebase", "EBANX API", "Google Maps API"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Benefícios do Dendicasa</h2>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <div className="text-orange-500 mr-2 mt-1">•</div>
                                <span>Aumenta a visibilidade e alcance de restaurantes locais</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-orange-500 mr-2 mt-1">•</div>
                                <span>Oferece uma fonte adicional de renda para entregadores independentes</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-orange-500 mr-2 mt-1">•</div>
                                <span>Proporciona uma experiência de pedido conveniente e personalizada para os clientes</span>
                            </li>
                            <li className="flex items-start">
                                <div className="text-orange-500 mr-2 mt-1">•</div>
                                <span>Utiliza algoritmos avançados para otimizar rotas e tempos de entrega</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg mb-12">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-4">Desafios Superados</h2>
                        <p className="text-gray-700 mb-4">
                            Durante o desenvolvimento do Dendicasa, enfrentamos e superamos vários desafios, incluindo:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Integração de múltiplas APIs para criar uma experiência de usuário fluida</li>
                            <li>Desenvolvimento de um sistema de roteamento eficiente para otimizar entregas</li>
                            <li>Implementação de medidas de segurança robustas para proteger dados de usuários e transações</li>
                            <li>Criação de uma interface intuitiva que atende às necessidades de clientes, restaurantes e entregadores</li>
                        </ul>
                    </div>

                </motion.div>
            </Container>
        </div>
    );
}