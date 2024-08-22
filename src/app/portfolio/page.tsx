'use client'

import React from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight, Target, Rocket, LineChart } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';

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
    results: string;
    slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, technologies, results, slug }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
        >
            <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 border-sky-400 bg-gray-800 text-white">
                <CardContent className="p-6 flex flex-col flex-grow">
                    <Link href={`/projetos?id=${slug}`} passHref>
                        <CardTitle className="text-2xl font-bold mb-3 text-sky-400 hover:text-sky-300 transition-colors duration-300">{title}</CardTitle>
                    </Link>
                    <p className="text-gray-300 mb-4 flex-grow">{summary}</p>
                    <div className="mb-4">
                        <p className="font-semibold mb-2 text-sky-300">Principais tecnologias:</p>
                        <div className="flex flex-wrap gap-2">
                            {technologies.slice(0, 3).map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-sky-900 text-sky-200 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 3 && (
                                <span className="px-2 py-1 bg-sky-900 text-sky-200 rounded-full text-sm">
                                    +{technologies.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold mb-2 text-green-400">Resultados Alcançados:</p>
                        <p className="text-gray-300">{results}</p>
                    </div>
                    <Link href={`/projetos?id=${slug}`} passHref>
                        <Button variant="link" className="text-sky-400 hover:text-sky-300 p-0 mt-2 self-start">
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
        results: "Aumento de 40% na eficiência de análise de investimentos e redução de 30% no tempo de tomada de decisão.",
        slug: "investor-acumen"
    },
    {
        title: "ASTRAM",
        summary: "Aplicativo sindical com gestão de associados, carteira virtual, sistema de enquetes e notícias.",
        technologies: ["React", "React Native", "Firebase"],
        results: "Engajamento dos associados aumentou em 65%, com 98% de satisfação dos usuários.",
        slug: "astram"
    },
    {
        title: "Dendicasa",
        summary: "Aplicativo de entregas estilo Uber Eats com integração de pagamentos EBANX.",
        technologies: ["React Native", "Firebase", "EBANX API"],
        results: "Crescimento de 200% nas entregas em 6 meses, com 95% de avaliações positivas dos clientes.",
        slug: "dendicasa"
    },
    {
        title: "Sistema de Identidade - Panamá",
        summary: "Sistema de emissão de carteira de identidade e passaporte com suporte biométrico para o Panamá.",
        technologies: ["C++", "C#", "Java", "Oracle"],
        results: "Redução de 70% no tempo de emissão de documentos e aumento de 99,9% na precisão de identificação.",
        slug: "sistema-identidade-panama"
    },
    {
        title: "Sistema de Identidade - Paraguai",
        summary: "Sistema de emissão de carteira de identidade e passaporte com suporte biométrico para o Paraguai.",
        technologies: ["C++", "C#", "Java", "Oracle"],
        results: "Diminuição de 80% em fraudes de identidade e aumento de 60% na eficiência do processo de emissão.",
        slug: "sistema-identidade-paraguai"
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-blue-950 text-white">
            <AnimatedBackground />
            <AnimatedSection>
                <section className="py-20 overflow-hidden">
                    <Container>
                        <motion.div
                            className="text-center mb-10"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-5xl font-bold text-sky-400 mb-10">Projetos de Impacto Real</h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Conheça algumas das transformações digitais que realizamos. Cada projeto é um testemunho do nosso compromisso em entregar resultados excepcionais e superar as expectativas dos nossos clientes.
                            </p>
                        </motion.div>
                    </Container>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="py-20 bg-gray-850">
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
                <section className="py-20 bg-gray-900 ">
                    <Container>
                        <motion.div
                            className="text-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-sky-300 mb-6">Pronto para Revolucionar Seu Negócio?</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Não nos contentamos com resultados medianos. Nossa equipe está pronta para se dedicar integralmente ao sucesso do seu projeto, superando obstáculos e entregando soluções que realmente impulsionam seu negócio.
                            </p>
                            <div className="flex justify-center space-x-8 mb-10">
                                <div className="flex items-center">
                                    <Target className="text-sky-400 mr-2" />
                                    <span>Foco total em seus objetivos</span>
                                </div>
                                <div className="flex items-center">
                                    <Rocket className="text-sky-400 mr-2" />
                                    <span>Inovação constante</span>
                                </div>
                                <div className="flex items-center">
                                    <LineChart className="text-sky-400 mr-2" />
                                    <span>Resultados mensuráveis</span>
                                </div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={'/contact'}>
                                    <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                                        Inicie Sua Transformação Digital
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