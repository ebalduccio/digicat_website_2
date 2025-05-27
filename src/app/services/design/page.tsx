'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    Palette, Smartphone, Zap, TrendingUp, Users, Shield, BarChart3, LucideIcon,
    ArrowRight, CheckCircle, ChevronRight, Sparkles, Star, Layers
} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

// Tipos
interface DesignService {
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
    color: string;
    bgGradient: string;
}

interface Benefit {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
}

interface Testimonial {
    name: string;
    company: string;
    content: string;
    avatar: string;
}

// Dados
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
        ],
        color: "from-indigo-400 to-blue-500",
        bgGradient: "from-indigo-500/10 via-indigo-400/5 to-blue-500/10"
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
        ],
        color: "from-violet-400 to-purple-500",
        bgGradient: "from-violet-500/10 via-violet-400/5 to-purple-500/10"
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
        ],
        color: "from-fuchsia-400 to-pink-500",
        bgGradient: "from-fuchsia-500/10 via-fuchsia-400/5 to-pink-500/10"
    }
];

const benefits: Benefit[] = [
    {
        icon: TrendingUp,
        title: "Conversões Exponenciais",
        description: "Interfaces que transformam visitantes em clientes fiéis instantaneamente.",
        color: "text-cyan-400"
    },
    {
        icon: Users,
        title: "Engajamento Máximo",
        description: "Experiências tão intuitivas que os usuários ficam imersos por horas.",
        color: "text-blue-400"
    },
    {
        icon: Shield,
        title: "Autoatendimento Inteligente",
        description: "Designs tão intuitivos que o suporte se torna quase obsoleto.",
        color: "text-indigo-400"
    },
    {
        icon: BarChart3,
        title: "Domínio de Mercado",
        description: "Design tão avançado que coloca sua marca anos à frente da concorrência.",
        color: "text-violet-400"
    }
];

const testimonials: Testimonial[] = [
    {
        name: "Sofia Mendes",
        company: "TechVision",
        content: "A equipe entregou um design que superou todas as nossas expectativas. Vimos um aumento de 300% nas conversões logo no primeiro mês após o lançamento.",
        avatar: "/api/placeholder/400/400"
    },
    {
        name: "Ricardo Alves",
        company: "InnovateCorp",
        content: "O redesign da nossa plataforma resultou em um engajamento sem precedentes. Nossos usuários passam em média 80% mais tempo no aplicativo.",
        avatar: "/api/placeholder/400/400"
    },
    {
        name: "Júlia Santos",
        company: "FutureBank",
        content: "A abordagem inovadora da equipe transformou nossa experiência bancária digital. Nossos clientes agora resolvem 90% dos problemas sem precisar de suporte.",
        avatar: "/api/placeholder/400/400"
    }
];

// Componentes Reutilizáveis
const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <div ref={ref} className="text-center mb-16 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="mb-2"
            >
                <span className="text-sm font-medium uppercase tracking-widest inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1 mb-3">
                    <Sparkles className="w-4 h-4 text-purple-400" /> {subtitle}
                </span>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold relative inline-block"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    {title}
                </span>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"></div>
            </motion.h2>
        </div>
    );
};

const GlassCard = ({ children, className = "", glowColor = "from-purple-500/20 to-pink-500/20" }: { children: React.ReactNode, className?: string, glowColor?: string }) => (
    <div className={`relative rounded-2xl overflow-hidden backdrop-blur-lg ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 -z-10"></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} -z-10 opacity-30`}></div>
        <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-white/10 to-white/5 -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        {children}
    </div>
);

// Seções
const HeroSection = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);

    return (
        <div className="relative min-h-screen flex items-center py-20 overflow-hidden border-b border-white/10">
            {/* Background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    style={{ y: y1, opacity }}
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
                />
                <motion.div
                    style={{ y: y2, opacity }}
                    className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
                />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-20" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="inline-flex items-center gap-2 bg-white/5 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                                Design revolucionário para a era digital
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            <span className="block mb-2">Criamos</span>
                            <span className="relative">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                    experiências do futuro
                                </span>
                                <motion.svg
                                    width="100%"
                                    height="10"
                                    viewBox="0 0 400 10"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="absolute -bottom-1 left-0 w-full overflow-visible stroke-purple-500"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 5H400"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeDasharray="8 8"
                                    />
                                </motion.svg>
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
                        >
                            Transcendemos as expectativas convencionais com designs que não apenas impressionam, mas transformam indústrias inteiras através de experiências digitais inovadoras.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/chat">
                                <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full transition-all duration-300 ease-out shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105">
                                    <span>Iniciar Revolução Digital</span>
                                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full transition-all duration-300">
                                Explorar Portfólio
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-10 flex items-center gap-8"
                        >
                            <div className="flex -space-x-3">
                                {Array(4).fill(0).map((_, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 overflow-hidden ring-2 ring-purple-500/20">
                                        <Image
                                            src={`/api/placeholder/400/400`}
                                            width={400}
                                            height={400}
                                            alt="Client"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 mb-1">
                                    {Array(5).fill(0).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-400">+100 clientes satisfeitos</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="lg:col-span-2 relative"
                    >
                        <GlassCard className="relative z-10 p-1 aspect-square max-w-md mx-auto">
                            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 aspect-square">
                                <Image
                                    src="/api/placeholder/600/600"
                                    width={600}
                                    height={600}
                                    alt="Design Showcase"
                                    className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                                />
                            </div>

                            <div className="absolute bottom-6 left-6 right-6">
                                <GlassCard className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center">
                                            <Layers className="w-5 h-5 text-purple-300" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 mb-0.5">Projetos entregues</div>
                                            <div className="text-xl font-bold">245+</div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </div>
                        </GlassCard>

                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-2xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl"></div>
                    </motion.div>
                </div>
            </Container>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-sm text-gray-400 mb-2">Scroll para explorar</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                </motion.div>
            </div>
        </div>
    );
};

const ServicesSection = ({ services, selectedService, setSelectedService }:
    { services: DesignService[], selectedService: DesignService | null, setSelectedService: (service: DesignService | null) => void }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <div id="services" className="py-24 border-b border-white/10">
            <Container>
                <SectionHeading
                    title="Nossos Serviços"
                    subtitle="ESPECIALIDADES"
                />

                <div ref={ref} className="relative">
                    <Tabs defaultValue={services[0].title} className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <TabsList className="w-full grid grid-cols-3 mb-12 bg-transparent gap-4">
                                {services.map((service, index) => (
                                    <TabsTrigger
                                        key={index}
                                        value={service.title}
                                        className={`data-[state=active]:bg-gradient-to-br data-[state=active]:${service.bgGradient} data-[state=active]:shadow-lg data-[state=active]:shadow-${service.color.split(' ')[1]}/20 border border-white/10 backdrop-blur-sm rounded-xl py-6 hover:bg-white/5 data-[state=active]:border-transparent`}
                                    >
                                        <div className="flex flex-col items-center">
                                            {React.createElement(service.icon, {
                                                className: `w-8 h-8 mb-2 bg-clip-text text-transparent bg-gradient-to-br ${service.color}`
                                            })}
                                            <span className="text-lg font-semibold">{service.title}</span>
                                        </div>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </motion.div>

                        {services.map((service, index) => (
                            <TabsContent
                                key={index}
                                value={service.title}
                                className="relative mt-0"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <GlassCard
                                        className="p-8"
                                        glowColor={service.bgGradient}
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                            <div>
                                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-inner shadow-white/5">
                                                    {React.createElement(service.icon, {
                                                        className: `w-8 h-8 bg-clip-text text-transparent bg-gradient-to-br ${service.color}`
                                                    })}
                                                </div>
                                                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                                                    {service.title}
                                                </h3>
                                                <p className="text-xl text-gray-300 mb-8">
                                                    {service.description}
                                                </p>

                                                <ul className="space-y-3 mb-8">
                                                    {service.details.map((detail, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${service.bgGradient}`}>
                                                                <CheckCircle className="w-4 h-4 text-white" />
                                                            </div>
                                                            <span className="text-gray-300">{detail}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>

                                                <Button className={`group bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-${service.color.split(' ')[1]}/20`}>
                                                    <span>Saiba mais</span>
                                                    <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </div>

                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl transform rotate-3 scale-95 opacity-50 blur-sm"></div>
                                                <div className="relative rounded-xl overflow-hidden aspect-video">
                                                    <Image
                                                        src="/api/placeholder/800/450"
                                                        width={800}
                                                        height={450}
                                                        alt={service.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black blur-2xl opacity-60"></div>
                                                <div className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-gradient-to-br ${service.bgGradient} blur-2xl opacity-40`}></div>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </Container>
        </div>
    );
};

const BenefitsSection = ({ benefits }: { benefits: Benefit[] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <div id="benefits" className="py-24 relative overflow-hidden border-b border-white/10">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"></div>

            <Container className="relative z-10">
                <SectionHeading
                    title="Impacto no Seu Negócio"
                    subtitle="BENEFÍCIOS"
                />

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <GlassCard className="p-8 h-full group hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                                            {React.createElement(benefit.icon, { className: `w-6 h-6 ${benefit.color}` })}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-300">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                                        <Button variant="link" className={`p-0 group-hover:underline ${benefit.color}`}>
                                            <span>Conheça casos de sucesso</span>
                                            <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

const TestimonialsSection = ({ testimonials }: { testimonials: Testimonial[] }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <div id="testimonials" className="py-24 relative">
            <Container>
                <SectionHeading
                    title="O Que Nossos Clientes Dizem"
                    subtitle="DEPOIMENTOS"
                />

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <GlassCard className="p-8 h-full">
                                <div className="flex flex-col h-full">
                                    <div className="mb-6">
                                        {Array(5).fill(0).map((_, i) => (
                                            <Star key={i} className="inline-block w-5 h-5 mr-1 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                                            <Image
                                                src={testimonial.avatar}
                                                width={400}
                                                height={400}
                                                alt={testimonial.name}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-400">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

const CTASection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
        <div id="cta" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-10"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl rounded-full bg-purple-500/10 blur-3xl"></div>

            <Container className="relative z-10">
                <div ref={ref} className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            Pronto para Redefinir o Futuro?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 mb-10 leading-relaxed"
                    >
                        Nossa equipe de visionários está pronta para criar experiências digitais que não apenas superam expectativas, mas definem novos paradigmas para sua indústria.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link href="/chat">
                            <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-12 py-8 rounded-full transition-all duration-300 ease-out shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105">
                                <span>Iniciar Revolução Digital</span>
                                <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

// Componente Principal
const DesignServicesPage: React.FC = () => {
    const [selectedService, setSelectedService] = useState<DesignService | null>(null);

    return (
        <div className="min-h-screen bg-[#050508] text-gray-100 overflow-hidden">
            <HeroSection />
            <ServicesSection
                services={designServices}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
            />
            <BenefitsSection benefits={benefits} />
            <TestimonialsSection testimonials={testimonials} />
            <CTASection />
        </div>
    );
};

export default DesignServicesPage;