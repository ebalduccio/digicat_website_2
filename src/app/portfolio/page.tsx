'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

interface ProjectCardProps {
    title: string;
    summary: string;
    technologies: string[];
    slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, technologies, slug }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
        >
            <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 flex flex-col flex-grow">
                    <Link href={`/projetos?id=${slug}`} passHref>
                        <CardTitle className="text-2xl font-bold mb-3 text-sky-900 hover:text-sky-700 transition-colors duration-300">{title}</CardTitle>
                    </Link>
                    <p className="text-gray-700 mb-4 flex-grow">{summary}</p>
                    <div className="mb-4">
                        <p className="font-semibold mb-2 text-sky-800">Principais tecnologias:</p>
                        <div className="flex flex-wrap gap-2">
                            {technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 3 && (
                                <span className="px-2 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">
                                    +{technologies.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                    <Link href={`/projetos?id=${slug}`} passHref>
                        <Button variant="link" className="text-sky-600 hover:text-sky-700 p-0 mt-2 self-start">
                            Ver detalhes <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const projects = [
    {
        title: "Investor Acumen",
        summary: "Sistema completo de indicadores financeiros com APIs de diversas fontes e processos automáticos de cálculo de portfólio.",
        technologies: ["Java", "C#", "PHP", "Python", "PostgreSQL", "MySQL"],
        slug: "investor-acumen"
    },
    {
        title: "ASTRAM",
        summary: "Aplicativo sindical com gestão de associados, carteira virtual, sistema de enquetes e notícias.",
        technologies: ["React", "React Native", "Firebase"],
        slug: "astram"
    },
    {
        title: "Dendicasa",
        summary: "Aplicativo de entregas estilo Uber Eats com integração de pagamentos EBANX.",
        technologies: ["React Native", "Firebase", "EBANX API"],
        slug: "dendicasa"
    },
    {
        title: "Sistema de Identidade - Panamá",
        summary: "Sistema de emissão de carteira de identidade e passaporte com suporte biométrico para o Panamá.",
        technologies: ["C++", "C#", "Java", "Oracle"],
        slug: "sistema-identidade-panama"
    },
    {
        title: "Sistema de Identidade - Paraguai",
        summary: "Sistema de emissão de carteira de identidade e passaporte com suporte biométrico para o Paraguai.",
        technologies: ["C++", "C#", "Java", "Oracle"],
        slug: "sistema-identidade-paraguai"
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
                                <ProjectCard key={project.slug} {...project} />
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