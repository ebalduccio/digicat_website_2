
'use client'

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Zap, Lock, Phone, Cpu, BarChart, LucideIcon, ArrowRight, CheckCircle } from "lucide-react";
import Link from 'next/link';

interface Service {
    icon: LucideIcon;
    title: string;
    description: string;
    techStack: string[];
}

interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        icon: Code,
        title: "Desenvolvimento Full-Stack",
        description: "Criamos aplicações web robustas e escaláveis, do back-end ao front-end.",
        techStack: ["React", "NextJs", "Node.js", "Python", "Java", "GraphQL", "REST APIs"]
    },
    {
        icon: Phone,
        title: "Desenvolvimento Mobile",
        description: "Apps nativos e multiplataforma que oferecem experiências móveis excepcionais.",
        techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "Soluções em nuvem e práticas DevOps para operações eficientes e escaláveis.",
        techStack: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
    },
    {
        icon: Database,
        title: "Big Data & Analytics",
        description: "Transforme dados em insights acionáveis com nossas soluções de big data.",
        techStack: ["Hadoop", "Spark", "Tableau", "Machine Learning", "Data Lakes"]
    },
    {
        icon: Lock,
        title: "Cibersegurança",
        description: "Proteja seus ativos digitais com nossas soluções de segurança avançadas.",
        techStack: ["Penetration Testing", "Encryption", "Firewall", "Identity Management"]
    },
    {
        icon: Cpu,
        title: "IoT & Sistemas Embarcados",
        description: "Conecte o mundo físico ao digital com nossas soluções IoT inovadoras.",
        techStack: ["Arduino", "Raspberry Pi", "MQTT", "Edge Computing"]
    }
];

const benefits: Benefit[] = [
    {
        icon: Zap,
        title: "Aumento de Eficiência",
        description: "Automatize processos e aumente a produtividade com software personalizado."
    },
    {
        icon: BarChart,
        title: "Vantagem Competitiva",
        description: "Destaque-se no mercado com soluções tecnológicas inovadoras e sob medida."
    },
    {
        icon: Database,
        title: "Decisões Baseadas em Dados",
        description: "Transforme dados brutos em insights valiosos para tomadas de decisão precisas."
    },
    {
        icon: Lock,
        title: "Segurança Aprimorada",
        description: "Proteja seus ativos digitais e a confiança dos clientes com segurança de ponta."
    }
];

const SoftwareDevelopmentPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const selectedServiceRef = useRef<HTMLDivElement>(null);

    const handleServiceClick = (service: Service) => {
        setSelectedService(service);
        setTimeout(() => {
            if (selectedServiceRef.current) {
                selectedServiceRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, 100); // Pequeno delay para garantir que o componente foi renderizado
    };

    const testimonials = [
        { name: "Maria Silva", company: "TechInova", text: "A solução desenvolvida superou nossas expectativas. Nossos processos internos estão muito mais eficientes." },
        { name: "João Santos", company: "DataFuture", text: "A equipe de desenvolvimento é extremamente competente e profissional. Recomendo fortemente." },
        { name: "Ana Oliveira", company: "CloudSys", text: "O software personalizado nos permitiu escalar nosso negócio de forma que não imaginávamos ser possível." }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 overflow-x-hidden">
            <div className="absolute inset-0 bg-pattern opacity-20" />

            <Container className="relative mt-28 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6 mb-12 sm:mb-16 md:mb-24"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 block mb-2">
                            Desenvolvimento de Software
                        </span>
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-300">
                            que Transforma Negócios
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
                        Impulsione sua empresa com soluções de software personalizadas e inovadoras que elevam a eficiência, segurança e competitividade.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-24"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="h-full"
                        >
                            <Card
                                className="bg-transparent backdrop-blur-xl border border-cyan-500/20 text-gray-100 h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
                                onClick={() => handleServiceClick(service)}
                            >
                                <CardHeader className="p-4 sm:p-6">
                                    <CardTitle className="flex items-start sm:items-center space-x-3 text-lg sm:text-xl md:text-2xl font-bold">
                                        {React.createElement(service.icon, {
                                            className: "w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 flex-shrink-0 mt-1 sm:mt-0"
                                        })}
                                        <span className="flex-1">{service.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6 space-y-4">
                                    <CardDescription className="text-gray-300 text-sm sm:text-base md:text-lg">
                                        {service.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        {service.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-gray-700/50 rounded-full text-xs sm:text-sm text-cyan-300 border border-cyan-500/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Selected Service Detail */}
                <AnimatePresence>
                    {selectedService && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-12 sm:mb-16 md:mb-24 overflow-hidden"
                        >
                            <Card className="bg-transparent backdrop-blur-xl border-2 border-cyan-500/30 text-gray-100">
                                <CardHeader className="p-4 sm:p-6 md:p-8">
                                    <CardTitle className="flex items-center space-x-3 text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
                                        {React.createElement(selectedService.icon, {
                                            className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                                        })}
                                        <span>{selectedService.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6 md:p-8 space-y-6">
                                    <p className="text-base sm:text-lg md:text-xl text-gray-300">
                                        {selectedService.description}
                                    </p>
                                    <div className="space-y-4">
                                        <h4 className="text-lg sm:text-xl font-semibold text-cyan-300">
                                            Tecnologias Utilizadas:
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            {selectedService.techStack.map((tech, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                                                    <span className="text-gray-300 text-sm sm:text-base">{tech}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                            <div ref={selectedServiceRef} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 md:mb-24 space-y-8 sm:space-y-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        Como Impulsionamos Seu Negócio
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="h-full"
                            >
                                <Card className="bg-transparent backdrop-blur-xl border border-cyan-500/20 text-gray-100 h-full group">
                                    <CardHeader className="p-4 sm:p-6">
                                        <CardTitle className="flex items-center space-x-3 text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-cyan-400 transition-colors">
                                            {React.createElement(benefit.icon, {
                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 flex-shrink-0"
                                            })}
                                            <span>{benefit.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-4 sm:p-6">
                                        <CardDescription className="text-gray-300 text-sm sm:text-base md:text-lg">
                                            {benefit.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 md:mb-24 space-y-8 sm:space-y-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        O Que Nossos Clientes Dizem
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-lg p-4 sm:p-6 space-y-4"
                            >
                                <p className="text-gray-300 italic text-sm sm:text-base">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold text-white">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-cyan-300 text-sm sm:text-base">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs sm:text-sm text-gray-400">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 sm:mb-16 md:mb-24 space-y-8 sm:space-y-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        Perguntas Frequentes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        {[
                            {
                                question: "Quanto tempo leva para desenvolver um software personalizado?",
                                answer: "O tempo varia conforme a complexidade. Projetos simples podem levar semanas, enquanto os mais complexos podem levar meses."
                            },
                            {
                                question: "Vocês oferecem suporte após o lançamento?",
                                answer: "Sim, oferecemos suporte técnico contínuo e manutenção para todos os projetos."
                            },
                            {
                                question: "Como garantem a segurança dos dados?",
                                answer: "Implementamos as melhores práticas de segurança em todos os níveis, incluindo criptografia e auditorias regulares."
                            },
                            {
                                question: "Posso solicitar modificações durante o desenvolvimento?",
                                answer: "Sim, trabalhamos de forma ágil e flexível, permitindo ajustes ao longo do processo."
                            }
                        ].map((faq, index) => (
                            <Card
                                key={index}
                                className="bg-transparent backdrop-blur-xl border border-gray-700/50 text-gray-100"
                            >
                                <CardHeader className="p-4 sm:p-6">
                                    <CardTitle className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300">
                                        {faq.question}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 sm:p-6">
                                    <CardDescription className="text-gray-300 text-sm sm:text-base">
                                        {faq.answer}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-6 sm:space-y-8"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300">
                        Vamos Começar Seu Projeto
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                        Estamos prontos para transformar suas ideias em realidade.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Link href="/chat">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 rounded-lg"
                            >
                                Solicite uma Consulta Gratuita
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
};

export default SoftwareDevelopmentPage;