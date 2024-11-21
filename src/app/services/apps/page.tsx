'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Tablet, Layers, Zap, TrendingUp, Users, Shield, BarChart, LucideIcon, ArrowRight, CheckCircle } from "lucide-react";
import Link from 'next/link';

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
            }, 5000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isAutoSwitching]);

    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-sky-900/90" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Gradients */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-48 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
            </div>

            <Container className="relative pt-32 pb-16">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-sky-600/20 text-blue-400 border border-blue-500/20">
                            Desenvolvimento Mobile
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mt-8 mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <div className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-purple-400 text-transparent bg-clip-text">
                                Transforme seu Negócio
                            </span>
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-sky-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </div>
                        <br />
                        <span className="text-white">com Aplicativos Móveis</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        Desenvolvemos aplicativos iOS e Android de alta performance
                        que impulsionam o crescimento e a inovação da sua empresa.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                    >
                        <Button
                            size="lg"
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                            <span className="relative flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-lg">
                                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold text-lg">
                                    Começar Projeto
                                </span>
                                <ArrowRight className="w-5 h-5 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-transparent border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            Ver Portfolio
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Platforms Section */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Plataformas de Desenvolvimento
                        </motion.h2>
                        <motion.p
                            className="text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Escolha a solução ideal para o seu negócio
                        </motion.p>
                    </div>

                    <Tabs
                        value={activeTab}
                        onValueChange={value => {
                            setActiveTab(value);
                            setIsAutoSwitching(false);
                        }}
                        className="relative"
                    >
                        <div className="relative max-w-xl mx-auto mb-8">
                            {/* Decorative Elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-full blur-xl opacity-50" />

                            <TabsList className="relative grid w-full grid-cols-3 bg-gray-800/50 rounded-full p-1 backdrop-blur-xl border border-gray-700/50">
                                {services.map((service) => (
                                    <TabsTrigger
                                        key={service.value}
                                        value={service.value}
                                        className="rounded-full text-gray-400 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-sky-500 transition-all duration-300"
                                    >
                                        <span className="flex items-center gap-2">
                                            {React.createElement(service.icon, { className: "w-4 h-4" })}
                                            {service.title.split(' ')[1]}
                                        </span>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <div className="relative min-h-[500px]">
                            <AnimatePresence mode="wait">
                                {services.map((service) => (
                                    service.value === activeTab && (
                                        <motion.div
                                            key={service.value}
                                            className="absolute inset-0"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <TabsContent value={service.value} className="mt-0" forceMount>
                                                <div className="relative group">
                                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                                                    <Card className="relative bg-gray-900/50 backdrop-blur-xl border-gray-800/50">
                                                        <CardContent className="p-6">
                                                            <div className="flex flex-col md:flex-row gap-8">
                                                                <div className="md:w-1/2">
                                                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 p-4 mb-6`}>
                                                                        {React.createElement(service.icon, { className: "w-full h-full text-white" })}
                                                                    </div>
                                                                    <h3 className="text-2xl font-bold text-white mb-4">
                                                                        {service.title}
                                                                    </h3>
                                                                    <p className="text-gray-400 leading-relaxed mb-6">
                                                                        {service.description}
                                                                    </p>
                                                                </div>
                                                                <div className="md:w-1/2">
                                                                    <div className="space-y-4">
                                                                        {service.details.map((detail, idx) => (
                                                                            <div
                                                                                key={idx}
                                                                                className="flex items-start gap-3 p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 group/item hover:bg-gray-800 transition-colors duration-200"
                                                                            >
                                                                                <div className="p-1 rounded-lg bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors duration-200">
                                                                                    <CheckCircle className="w-4 h-4 text-blue-400" />
                                                                                </div>
                                                                                <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
                                                                                    {detail}
                                                                                </span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </TabsContent>
                                        </motion.div>
                                    )
                                ))}
                            </AnimatePresence>
                        </div>
                    </Tabs>
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
                            Benefícios
                        </span>
                        <h2 className="text-3xl font-bold text-white mt-6 mb-4">
                            Como Nossos Aplicativos Beneficiam Sua Empresa
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Descubra como nossos aplicativos podem transformar seus processos e impulsionar seus resultados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-sky-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                                <Card className="relative h-full bg-gray-900/50 backdrop-blur-xl border-gray-800/50">
                                    <CardContent className="p-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 p-3 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                            {React.createElement(benefit.icon, { className: "w-full h-full text-white" })}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-sky-400 transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {benefit.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-purple-500/10 blur-3xl opacity-30" />
                    <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-8"
                        >
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                Comece Agora
                            </span>

                            <h2 className="text-4xl font-bold text-white">
                                Pronto para Criar seu Aplicativo?
                            </h2>

                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                Nossa equipe de especialistas está pronta para transformar sua visão em um
                                aplicativo móvel de sucesso. Vamos começar sua jornada digital hoje.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <Link href="/chat">
                                    <Button
                                        size="lg"
                                        className="relative group"
                                    >
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                                        <span className="relative flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-lg">
                                            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold">
                                                Iniciar Projeto
                                            </span>
                                            <ArrowRight className="w-5 h-5 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                    </Button>
                                </Link>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-transparent border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    Agendar Reunião
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { value: "100+", label: "Apps Entregues" },
                                    { value: "98%", label: "Clientes Satisfeitos" },
                                    { value: "5★", label: "Avaliação Média" },
                                    { value: "24/7", label: "Suporte Técnico" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="relative space-y-2 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300">
                                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Pattern */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50" />
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-32"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Vamos Criar Algo Incrível Juntos?
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa
                        a alcançar novos patamares com soluções mobile inovadoras.
                    </p>
                    <Button
                        size="lg"
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                        <span className="relative flex items-center gap-2 px-8 py-4 bg-gray-900 rounded-lg">
                            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-bold text-lg">
                                Começar Conversa
                            </span>
                            <ArrowRight className="w-6 h-6 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </Button>
                </motion.div>
            </Container>
        </div>
    );
};

export default AppServicesPage;