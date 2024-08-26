'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Tablet, Layers, Zap, TrendingUp, Users, Shield, BarChart, LucideIcon } from "lucide-react";

interface Service {
    icon: LucideIcon;
    title: string;
    value: string;
    description: string;
    details: string[];
}

interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: Smartphone,
        title: "Desenvolvimento iOS",
        value: "ios",
        description: "Criamos aplicativos iOS intuitivos e poderosos que aproveitam ao máximo os recursos do ecossistema Apple.",
        details: [
            "Desenvolvimento em React Native",
            "Otimização para todos os dispositivos iOS (iPhone, iPad, Apple Watch)",
            "Publicação e manutenção na App Store",
            "Suporte para atualizações do iOS e novos dispositivos"
        ]
    },
    {
        icon: Tablet,
        title: "Desenvolvimento Android",
        value: "android",
        description: "Desenvolvemos aplicativos Android robustos e escaláveis para atender à diversidade de dispositivos no mercado.",
        details: [
            "Desenvolvimento em React Native",
            "Adaptação para diversos tamanhos de tela e resoluções",
            "Integração com serviços Google (Firebase, Maps, ML Kit)",
            "Otimização de performance e consumo de bateria",
            "Publicação e gerenciamento na Google Play Store"
        ]
    },
    {
        icon: Layers,
        title: "Aplicativos Híbridos",
        value: "hybrid",
        description: "Oferecemos soluções multiplataforma eficientes para alcançar usuários iOS e Android com um único código base.",
        details: [
            "Desenvolvimento com React Native",
            "Reutilização de código para iOS e Android",
            "Integração de funcionalidades nativas quando necessário",
            "UI/UX adaptável para parecer nativo em cada plataforma",
            "Manutenção simplificada e atualizações simultâneas"
        ]
    }
];

const benefits: Benefit[] = [
    {
        icon: Zap,
        title: "Aumento de Produtividade",
        description: "Automatize processos e permita que sua equipe trabalhe de forma mais eficiente, em qualquer lugar."
    },
    {
        icon: TrendingUp,
        title: "Engajamento do Cliente",
        description: "Melhore a experiência do cliente e aumente a fidelidade com interações personalizadas e convenientes."
    },
    {
        icon: Users,
        title: "Alcance Expandido",
        description: "Amplie seu mercado e conecte-se com clientes em escala global através de aplicativos móveis."
    },
    {
        icon: Shield,
        title: "Segurança Aprimorada",
        description: "Implemente medidas de segurança robustas para proteger dados sensíveis e transações."
    },
    {
        icon: BarChart,
        title: "Insights em Tempo Real",
        description: "Obtenha dados valiosos sobre o comportamento do usuário para tomar decisões informadas."
    }
];

const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const AppServicesPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("ios");
    const [isAutoSwitching, setIsAutoSwitching] = useState<boolean>(true);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (isAutoSwitching) {
            intervalId = setInterval(() => {
                setActiveTab((prevTab) => {
                    const currentIndex = services.findIndex(service => service.value === prevTab);
                    const nextIndex = (currentIndex + 1) % services.length;
                    return services[nextIndex].value;
                });
            }, 5000); // Switch every 5 seconds
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoSwitching]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
        setIsAutoSwitching(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700">
            <Container className="py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500">
                            Transforme seu Negócio
                        </span>
                        <br />
                        com Aplicativos Móveis
                    </h1>
                    <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
                        Desenvolvemos aplicativos iOS e Android de alta performance para impulsionar o crescimento da sua empresa.
                    </p>
                </motion.div>

                <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-16">
                    <TabsList className="grid w-full grid-cols-3 bg-sky-800/50 rounded-full p-1">
                        {services.map((service) => (
                            <TabsTrigger 
                                key={service.value} 
                                value={service.value} 
                                className="rounded-full text-sky-100"
                                onClick={() => handleTabChange(service.value)}
                            >
                                {service.title.split(' ')[1]}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="relative h-[400px] mt-4"> {/* Fixed height container */}
                        <AnimatePresence mode="wait">
                            {services.map((service) => (
                                service.value === activeTab && (
                                    <motion.div
                                        key={service.value}
                                        variants={tabVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-0 left-0 w-full"
                                    >
                                        <TabsContent value={service.value} forceMount>
                                            <Card className="bg-sky-800/30 backdrop-blur-lg border-none text-sky-100">
                                                <CardHeader>
                                                    <CardTitle className="flex items-center text-2xl">
                                                        {React.createElement(service.icon, { className: "w-8 h-8 mr-2" })}
                                                        {service.title}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription className="text-sky-200 mb-4">{service.description}</CardDescription>
                                                    <ul className="list-disc pl-5 text-sky-100">
                                                        {service.details.map((detail, idx) => (
                                                            <li key={idx} className="mb-2">{detail}</li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </Tabs>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-semibold text-sky-300 mb-8 text-center">
                        Como Nossos Aplicativos Beneficiam Sua Empresa
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <Card className="bg-sky-800/20 backdrop-blur-md border-none text-sky-100 h-full">
                                    <CardHeader>
                                        <CardTitle className="flex items-center text-xl">
                                            {React.createElement(benefit.icon, { className: "w-6 h-6 mr-2 text-sky-400" })}
                                            {benefit.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sky-200">{benefit.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-semibold text-sky-300 mb-6">Pronto para Impulsionar seu Negócio?</h2>
                    <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                        Nossa equipe de especialistas está pronta para criar a solução móvel perfeita para as necessidades únicas da sua empresa.
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-sky-400 to-sky-600 hover:from-sky-500 hover:to-sky-700 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 ease-in-out">
                        Solicite uma Demonstração
                    </Button>
                </motion.div>
            </Container>
        </div>
    );
};

export default AppServicesPage;