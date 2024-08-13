'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface ProjectCardProps {
    title: string;
    description: string;
    details: string[];
    technologies: string[];
    duration?: string;
    client?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, details, technologies, duration, client }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const techRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if (techRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = techRef.current;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
            }
        };

        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (techRef.current) {
            const scrollAmount = 100;
            techRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(() => {
                const { scrollLeft, scrollWidth, clientWidth } = techRef.current!;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
            }, 300);
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="h-full"
        >
            <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="text-2xl font-bold mb-2 text-sky-900">{title}</CardTitle>
                    {client && <p className="text-sm text-gray-500 mb-2">Cliente: {client}</p>}
                    {duration && <p className="text-sm text-gray-500 mb-4">Duração: {duration}</p>}
                    <p className="text-gray-700 mb-4">{description}</p>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        {details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                    <div className="relative mb-4 mt-auto">
                        <p className="font-semibold mb-2 text-sky-800">Tecnologias:</p>
                        <div
                            ref={techRef}
                            className="flex space-x-2 overflow-x-hidden"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {technologies.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-sky-100 text-sky-800 rounded-full text-sm whitespace-nowrap">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {showLeftArrow && (
                            <button
                                onClick={() => scroll('left')}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
                            >
                                <ChevronLeft size={20} className="text-sky-600" />
                            </button>
                        )}
                        {showRightArrow && (
                            <button
                                onClick={() => scroll('right')}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md"
                            >
                                <ChevronRight size={20} className="text-sky-600" />
                            </button>
                        )}
                    </div>
                    <Button variant="link" className="text-sky-600 hover:text-sky-700 p-0 mt-2 self-start">
                        Ver mais detalhes <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const projects: ProjectCardProps[] = [
    {
        title: "Investor Acumen",
        description: "Sistema completo de indicadores financeiros com APIs de diversas fontes e processos automáticos de cálculo de portfólio.",
        client: "Cliente em Nova York",
        duration: "2010 - presente",
        details: [
            "Sistema de indicadores financeiros",
            "API de consulta FRED, QUANDL, GuruFocus, e outras fontes de dados",
            "API de Corretora ETRADE com operações de trading em tempo real",
            "Banco de dados de Ativos, Indicadores e histórico de dados (3678 tabelas)",
            "Processos automáticos de cálculo do portfólio",
            "Sistema de subscritores",
            "Conexão ao sistema de Bloomberg com interface proprietária",
            "Conexão ao sistema de Seeking Alpha com interface proprietária"
        ],
        technologies: ["Java", "C#", "PHP", "Python", "Pandas", "Anaconda", "C", "PostgreSQL", "MySQL"]
    },
    {
        title: "ASTRAM",
        description: "Aplicativo sindical com gestão de associados, carteira virtual, sistema de enquetes e notícias.",
        details: [
            "Gestão de associados",
            "Carteira Virtual",
            "Sistema de Enquetes",
            "Notícias"
        ],
        technologies: ["React", "React Native", "Firebase Auth", "Firebase Firestore"]
    },
    {
        title: "Dendicasa",
        description: "Aplicativo de entregas estilo Uber Eats com integração de pagamentos.",
        details: [
            "Aplicativo de entregas tipo Uber Eats",
            "Traça rotas dos pedidos",
            "Integração de pagamentos com EBANX"
        ],
        technologies: ["React Native", "Firebase", "EBANX API"]
    },
    {
        title: "Sistema de Identidade - Panamá",
        description: "Sistema de emissão de carteira de identidade e passaporte com suporte biométrico para o Panamá.",
        details: [
            "Cadastro do cidadão",
            "Cadastro de biometria (de dedos e facial)",
            "Reconhecimento biométrico",
            "API de integração do sistema para todo o país",
            "Implementação em Panamá"
        ],
        technologies: ["C++", "C#", "Java", "Oracle"]
    },
    {
        title: "Sistema de Identidade - Paraguai",
        description: "Sistema de emissão de carteira de identidade e passaporte com suporte biométrico para o Paraguai.",
        details: [
            "Cadastro do cidadão",
            "Cadastro de biometria (de dedos e facial)",
            "Reconhecimento biométrico",
            "API de integração do sistema para todo o país",
            "Implementação no Paraguai"
        ],
        technologies: ["C++", "C#", "Java", "Oracle"]
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-gradient-to-b from-sky-100 to-white">
            <AnimatedSection>
                <section className="py-20 overflow-hidden">
                    <Container>
                        <motion.div
                            className="text-center mb-16"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl font-bold text-sky-900 mb-6">Nosso Portfólio</h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Conheça alguns dos projetos inovadores que desenvolvemos para nossos clientes. Cada solução é única e feita sob medida para atender às necessidades específicas de cada negócio.
                            </p>
                        </motion.div>
                    </Container>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="py-20 bg-sky-50">
                    <Container>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        >
                            {projects.map((project) => (
                                <div key={project.title} className="h-full"> {/* Wrapper para manter a altura consistente */}
                                    <ProjectCard {...project} />
                                </div>
                            ))}
                        </motion.div>
                    </Container>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="py-20">
                    <Container>
                        <motion.div
                            className="text-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-sky-900 mb-6">Pronto para transformar sua ideia em realidade?</h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Nossa equipe de especialistas está pronta para ajudar a levar seu projeto ao próximo nível. Vamos criar algo incrível juntos!
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={'/contact'}>
                                    <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                                        Solicite um Orçamento
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </Container>
                </section>
            </AnimatedSection>
        </div>
    );
}