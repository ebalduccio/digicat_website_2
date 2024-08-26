
'use client'

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Zap, Lock, Phone, Cpu, BarChart, LucideIcon, ArrowRight, CheckCircle } from "lucide-react";

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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzBBMEMxRCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIwLjciIGZpbGw9IiMxRTI5M0IiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIwIiByPSIwLjciIGZpbGw9IiMxRTI5M0IiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSI2MCIgcj0iMC43IiBmaWxsPSIjMUUyOTNCIi8+CjxjaXJjbGUgY3g9IjAiIGN5PSIzMCIgcj0iMC43IiBmaWxsPSIjMUUyOTNCIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iMzAiIHI9IjAuNyIgZmlsbD0iIzFFMjkzQiIvPgo8L3N2Zz4=')] opacity-20" />

            <Container className="relative py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                            Desenvolvimento de Software
                        </span>
                        <br />
                        <span className="text-4xl md:text-5xl text-gray-300">que Transforma Negócios</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        Impulsione sua empresa com soluções de software personalizadas e inovadoras que elevam a eficiência, segurança e competitividade.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card
                                className="bg-transparent backdrop-blur-xl border-2 border-cyan-500/20 text-gray-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group overflow-hidden relative h-full"
                                onClick={() => handleServiceClick(service)}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
                                <CardHeader className="relative z-10">
                                    <CardTitle className="flex items-center text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                                        {React.createElement(service.icon, { className: "w-8 h-8 mr-3 text-cyan-400" })}
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <CardDescription className="text-gray-300 text-lg mb-4">{service.description}</CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        {service.techStack.map((tech, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-cyan-300 border border-cyan-500/30">{tech}</span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                            <div  ref={selectedServiceRef}></div>
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
                            <Card className="bg-transparent backdrop-blur-xl border-2 border-cyan-500/30 text-gray-100 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
                                <CardHeader className="relative">
                                    <CardTitle className="flex items-center text-3xl font-bold text-cyan-400">
                                        {React.createElement(selectedService.icon, { className: "w-10 h-10 mr-3" })}
                                        {selectedService.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative">
                                    <p className="text-xl mb-6 text-gray-300">{selectedService.description}</p>
                                    <h4 className="text-lg font-semibold mb-3 text-cyan-300">Tecnologias Utilizadas:</h4>
                                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {selectedService.techStack.map((tech, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-center"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                <CheckCircle className="w-5 h-5 mr-2 text-teal-400" />
                                                <span className="text-gray-300">{tech}</span>
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
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        Como Impulsionamos Seu Negócio
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
                                <Card className="bg-transparent backdrop-blur-xl border-2 border-cyan-500/20 text-gray-100 h-full overflow-hidden group relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                    <CardHeader className="relative">
                                        <CardTitle className="flex items-center text-2xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                                            {React.createElement(benefit.icon, { className: "w-8 h-8 mr-3 text-cyan-400" })}
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
                    <h2 className="text-5xl font-bold text-cyan-300 mb-8">Pronto para Transformar seu Negócio?</h2>
                    <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Nossa equipe de desenvolvedores especializados está pronta para criar soluções de software personalizadas que impulsionarão sua empresa para o próximo nível.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="bg-sky-500 hover:bg-sky600 text-white text-xl px-12 py-6 transition-all duration-300 ease-in-out shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40">
                            Inicie sua Transformação Digital
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </motion.div>
                </motion.div>
                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-32"
                >
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        O Que Nossos Clientes Dizem
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Maria Silva", company: "TechInova", text: "A solução desenvolvida superou nossas expectativas. Nossos processos internos estão muito mais eficientes." },
                            { name: "João Santos", company: "DataFuture", text: "A equipe de desenvolvimento é extremamente competente e profissional. Recomendo fortemente." },
                            { name: "Ana Oliveira", company: "CloudSys", text: "O software personalizado nos permitiu escalar nosso negócio de forma que não imaginávamos ser possível." }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-lg p-6 shadow-lg"
                            >
                                <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-semibold text-cyan-300">{testimonial.name}</p>
                                        <p className="text-sm text-gray-400">{testimonial.company}</p>
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
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-32"
                >
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                        Perguntas Frequentes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { question: "Quanto tempo leva para desenvolver um software personalizado?", answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Projetos simples podem levar algumas semanas, enquanto projetos mais complexos podem levar vários meses." },
                            { question: "Vocês oferecem suporte após o lançamento?", answer: "Sim, oferecemos suporte técnico contínuo e manutenção para todos os nossos projetos de software." },
                            { question: "Como garantem a segurança dos dados?", answer: "Implementamos as melhores práticas de segurança em todos os níveis de desenvolvimento, incluindo criptografia, autenticação segura e auditorias regulares." },
                            { question: "Posso solicitar modificações após o início do desenvolvimento?", answer: "Sim, trabalhamos de forma ágil e flexível, permitindo ajustes e modificações ao longo do processo de desenvolvimento." }
                        ].map((faq, index) => (
                            <Card key={index} className="bg-transparent backdrop-blur-xl border border-gray-700/50 text-gray-100">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-cyan-300">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-300">{faq.answer}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>

                {/* Call-to-Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="text-center mt-32"
                >
                    <h2 className="text-5xl font-bold text-cyan-300 mb-8">Vamos Começar Seu Projeto</h2>
                    <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Estamos ansiosos para transformar suas ideias em realidade. Entre em contato conosco hoje para uma consulta gratuita e descubra como podemos impulsionar seu negócio com soluções de software inovadoras.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="bg-sky-500 text-white text-xl px-12 py-6 rounded-md transition-all duration-300 ease-in-out shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40">
                            Solicite uma Consulta Gratuita
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
};

export default SoftwareDevelopmentPage;