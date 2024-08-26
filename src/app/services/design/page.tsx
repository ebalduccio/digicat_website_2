'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Palette, Smartphone, Zap, TrendingUp, Users, Shield, BarChart3, LucideIcon, ArrowRight, CheckCircle } from "lucide-react";

interface DesignService {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
}

interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

const designServices: DesignService[] = [
    {
        icon: Palette,
        title: "UI Design",
        description: "Interfaces futuristas que definem tendências.",
        details: [
            "Design de interfaces imersivas",
            "Sistemas de design inovadores",
            "Microinterações avançadas",
            "Paletas de cores de alto contraste"
        ]
    },
    {
        icon: Smartphone,
        title: "UX Design",
        description: "Experiências que antecipam as necessidades do usuário.",
        details: [
            "Pesquisa preditiva de usuários",
            "Arquitetura de informação adaptativa",
            "Prototipagem em realidade aumentada",
            "Testes de usabilidade em tempo real"
        ]
    },
    {
        icon: Zap,
        title: "Prototipagem",
        description: "Do conceito ao protótipo em tempo recorde.",
        details: [
            "Prototipagem de ultra-alta fidelidade",
            "Testes multivariados em tempo real",
            "Iterações baseadas em IA",
            "Feedback preditivo de usuários"
        ]
    }
];

const benefits: Benefit[] = [
    {
        icon: TrendingUp,
        title: "Conversões Exponenciais",
        description: "Interfaces que transformam visitantes em clientes fiéis instantaneamente."
    },
    {
        icon: Users,
        title: "Engajamento Máximo",
        description: "Experiências tão intuitivas que os usuários ficam imersos por horas."
    },
    {
        icon: Shield,
        title: "Autoatendimento Inteligente",
        description: "Designs tão intuitivos que o suporte se torna quase obsoleto."
    },
    {
        icon: BarChart3,
        title: "Domínio de Mercado",
        description: "Design tão avançado que coloca sua marca anos à frente da concorrência."
    }
];

const DesignServicesPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<DesignService | null>(null);

    return (
        <div className="min-h-screen bg-[#050508] text-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-800/10" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjM1Ii8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4=')] opacity-10" />
            
            <Container className="relative py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Design do Futuro
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Criamos experiências digitais revolucionárias que transcendem as expectativas e redefinem indústrias inteiras.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
                >
                    {designServices.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card 
                                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 text-gray-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                                onClick={() => setSelectedService(service)}
                            >
                                <CardHeader>
                                    <CardTitle className="flex items-center text-2xl font-bold">
                                        {React.createElement(service.icon, { className: "w-8 h-8 mr-3 text-purple-400" })}
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-300 text-lg">{service.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedService && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="mb-24"
                        >
                            <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 text-gray-100 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10" />
                                <CardHeader className="relative">
                                    <CardTitle className="flex items-center text-3xl font-bold">
                                        {React.createElement(selectedService.icon, { className: "w-10 h-10 mr-3 text-purple-400" })}
                                        {selectedService.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative">
                                    <p className="text-xl mb-6 text-gray-300">{selectedService.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {selectedService.details.map((detail, index) => (
                                            <motion.li 
                                                key={index} 
                                                className="flex items-center"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                                                <span className="text-gray-300">{detail}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-24"
                >
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Impacto Revolucionário no Seu Negócio
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ scale: 1.03, rotateY: 5 }}
                            >
                                <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 text-gray-100 h-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                                    <CardHeader className="relative">
                                        <CardTitle className="flex items-center text-2xl font-semibold">
                                            {React.createElement(benefit.icon, { className: "w-8 h-8 mr-3 text-purple-400" })}
                                            {benefit.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="relative">
                                        <CardDescription className="text-gray-300 text-lg">{benefit.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-5xl font-bold text-purple-300 mb-8">Pronto para Redefinir o Futuro?</h2>
                    <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Nossa equipe de visionários está pronta para criar experiências digitais que não apenas superam expectativas, mas definem novos paradigmas para sua indústria.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-12 py-6 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40">
                            Iniciar Revolução Digital
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
};

export default DesignServicesPage;