'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
    ChevronRight, 
    Check, 
    Globe, 
    Instagram, 
    MapPin, 
    Megaphone,
    Sparkles,
    ArrowRight,
    ExternalLink,
    Star
} from 'lucide-react';
import Link from 'next/link';

// Types
interface Project {
    id: number;
    title: string;
    client: string;
    category: 'basic' | 'intermediate' | 'custom';
    description: string;
    image: string;
    services: string[];
    testimonial?: string;
    link?: string;
}

interface ServicePackage {
    name: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    color: string;
    badge?: string;
}

// Reusable Animation Components
const FadeIn = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 50
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const directionValues = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { y: 0, x: distance },
        right: { y: 0, x: -distance }
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: directionValues[direction].y,
                x: directionValues[direction].x
            }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, x: 0 }
                    : {
                        opacity: 0,
                        y: directionValues[direction].y,
                        x: directionValues[direction].x
                    }
            }
            transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const GlowingBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`relative group ${className}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl opacity-30 blur-sm group-hover:opacity-70 transition duration-1000"></div>
            <div className="relative">
                {children}
            </div>
        </div>
    );
};

const DecorativeBlur = ({ className = "" }: { className?: string }) => (
    <div
        className={`absolute rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70 ${className}`}
    ></div>
);

// Service Package Card Component
const ServicePackageCard = ({ 
    pkg, 
    index, 
    onSelectPackage 
}: { 
    pkg: ServicePackage; 
    index: number;
    onSelectPackage: (name: string) => void;
}) => {
    return (
        <FadeIn delay={0.2 * index}>
            <GlowingBorder className="h-full">
                <Card className="backdrop-blur-sm bg-gray-800/40 border-none shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                    <CardContent className="p-8 flex flex-col h-full relative">
                        {pkg.badge && (
                            <div className="absolute -top-3 right-6">
                                <span className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {pkg.badge}
                                </span>
                            </div>
                        )}

                        <div className={`w-16 h-16 rounded-full ${pkg.color} flex items-center justify-center mb-6`}>
                            {pkg.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-sky-300 mb-3">
                            Pacote {pkg.name}
                        </h3>

                        <p className="text-gray-300 mb-6 flex-grow">
                            {pkg.description}
                        </p>

                        <div className="space-y-3 mb-8">
                            {pkg.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start">
                                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {pkg.name === 'Sob Medida' ? (
                            <a 
                                href="https://wa.me/5511999999999" // Substituir pelo número real
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button 
                                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white"
                                    size="lg"
                                >
                                    Falar com Especialista
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        ) : (
                            <Button 
                                variant="outline" 
                                className="w-full border-sky-500/50 text-sky-400 hover:bg-sky-950/50"
                                size="lg"
                                onClick={() => onSelectPackage(pkg.name)}
                            >
                                Ver Projetos {pkg.name}
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </GlowingBorder>
        </FadeIn>
    );
};

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Card className="backdrop-blur-sm bg-gray-800/40 border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700"
                        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.category === 'basic' ? 'bg-green-500/20 text-green-300' :
                            project.category === 'intermediate' ? 'bg-sky-500/20 text-sky-300' :
                            'bg-purple-500/20 text-purple-300'
                        }`}>
                            {project.category === 'basic' ? 'Básico' :
                             project.category === 'intermediate' ? 'Intermediário' :
                             'Sob Medida'}
                        </span>
                    </div>
                </div>

                <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-sky-300 mb-2">{project.title}</h3>
                    <p className="text-sm text-sky-400 mb-3">{project.client}</p>
                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service, idx) => (
                            <span key={idx} className="px-2 py-1 bg-sky-900/30 text-sky-300 rounded-full text-xs">
                                {service}
                            </span>
                        ))}
                    </div>

                    {project.testimonial && (
                        <div className="border-t border-gray-700 pt-4 mt-4">
                            <p className="text-sm text-gray-400 italic">&quot;{project.testimonial}&quot;</p>
                        </div>
                    )}

                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm font-medium mt-4 group"
                        >
                            Ver projeto
                            <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
};

// Client Logo Component
const ClientLogo = ({ name, logo }: { name: string; logo: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center p-8 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-sky-500/30 transition-all duration-300"
        >
            <Image
                src={logo}
                alt={name}
                width={120}
                height={60}
                objectFit="contain"
                className="filter grayscale hover:grayscale-0 transition-all duration-300"
            />
        </motion.div>
    );
};

// Data
const servicePackages: ServicePackage[] = [
    {
        name: "Básico",
        description: "Perfeito para empresas que estão começando sua jornada digital",
        features: [
            "Site institucional responsivo",
            "Posicionamento estratégico no Instagram",
            "Configuração e otimização do Google Meu Negócio",
            "Suporte por 3 meses"
        ],
        icon: <Globe className="h-8 w-8 text-white" />,
        color: "bg-green-500"
    },
    {
        name: "Intermediário",
        description: "Ideal para empresas que querem expandir sua presença online",
        features: [
            "Site personalizado com design exclusivo",
            "Gestão completa do Instagram",
            "Google Meu Negócio otimizado",
            "Campanhas de tráfego pago (Google e Meta)",
            "Relatórios mensais de performance",
            "Suporte prioritário"
        ],
        icon: <Megaphone className="h-8 w-8 text-white" />,
        color: "bg-sky-500",
        badge: "Mais Popular"
    },
    {
        name: "Sob Medida",
        description: "Soluções customizadas para necessidades específicas do seu negócio",
        features: [
            "Consultoria completa de marketing digital",
            "Desenvolvimento de sistemas personalizados",
            "Estratégias avançadas de crescimento",
            "Equipe dedicada ao seu projeto",
            "Resultados garantidos ou seu dinheiro de volta"
        ],
        icon: <Sparkles className="h-8 w-8 text-white" />,
        color: "bg-gradient-to-br from-purple-500 to-pink-500"
    }
];

// Placeholder projects data
const projects: Project[] = [
    // Projetos Básicos
    {
        id: 1,
        title: "Site Institucional - Clínica Saúde+",
        client: "Clínica Saúde+",
        category: "basic",
        description: "Desenvolvimento de site responsivo com agendamento online integrado",
        image: "/images/portfolio/project1.jpg",
        services: ["Site", "Instagram", "Google Meu Negócio"],
        testimonial: "A Digicat transformou nossa presença online!",
        link: "https://example.com"
    },
    {
        id: 2,
        title: "Presença Digital - Pizzaria Bella",
        client: "Pizzaria Bella Italia",
        category: "basic",
        description: "Criação de identidade visual e presença nas redes sociais",
        image: "/images/portfolio/project2.jpg",
        services: ["Site", "Instagram", "Google Meu Negócio"],
        testimonial: "Nossos pedidos online aumentaram 150%!"
    },
    // Projetos Intermediários
    {
        id: 3,
        title: "E-commerce Fashion Store",
        client: "Boutique Elegance",
        category: "intermediate",
        description: "Loja virtual completa com gestão de estoque e campanhas de tráfego",
        image: "/images/portfolio/project3.jpg",
        services: ["Site Personalizado", "Instagram Ads", "Google Ads", "Email Marketing"],
        testimonial: "ROI de 300% no primeiro trimestre!",
        link: "https://example.com"
    },
    {
        id: 4,
        title: "Academia FitLife - Expansão Digital",
        client: "Academia FitLife",
        category: "intermediate",
        description: "Sistema de matrículas online e campanhas para captação de alunos",
        image: "/images/portfolio/project4.jpg",
        services: ["Site com Sistema", "Meta Ads", "Google Ads", "Automação"],
        testimonial: "Dobramos o número de matrículas em 60 dias"
    },
    // Projetos Sob Medida
    {
        id: 5,
        title: "Plataforma de Cursos Online",
        client: "Instituto Conhecer",
        category: "custom",
        description: "Desenvolvimento de plataforma EAD completa com área do aluno",
        image: "/images/portfolio/project5.jpg",
        services: ["Sistema Customizado", "Marketing 360°", "Automação", "CRM"],
        testimonial: "Solução perfeita para nosso modelo de negócio"
    },
    {
        id: 6,
        title: "Marketplace B2B Industrial",
        client: "TechParts Brasil",
        category: "custom",
        description: "Marketplace personalizado para o setor industrial com integração ERP",
        image: "/images/portfolio/project6.jpg",
        services: ["Plataforma Custom", "SEO Avançado", "Integração ERP", "BI Dashboard"],
        link: "https://example.com"
    }
];

// Placeholder client logos
const clients = [
    { name: "Cliente 1", logo: "/images/clients/client1.png" },
    { name: "Cliente 2", logo: "/images/clients/client2.png" },
    { name: "Cliente 3", logo: "/images/clients/client3.png" },
    { name: "Cliente 4", logo: "/images/clients/client4.png" },
    { name: "Cliente 5", logo: "/images/clients/client5.png" },
    { name: "Cliente 6", logo: "/images/clients/client6.png" }
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'basic' | 'intermediate' | 'custom'>('all');
    const portfolioRef = useRef<HTMLDivElement>(null);

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);

    const handleSelectPackage = (packageName: string) => {
        const categoryMap: { [key: string]: 'basic' | 'intermediate' | 'custom' } = {
            'Básico': 'basic',
            'Intermediário': 'intermediate',
            'Sob Medida': 'custom'
        };
        
        setSelectedCategory(categoryMap[packageName]);
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden">
                <DecorativeBlur className="w-96 h-96 bg-sky-900/20 top-0 -left-48" />
                <DecorativeBlur className="w-96 h-96 bg-blue-800/20 bottom-0 -right-48 animation-delay-2000" />
                <DecorativeBlur className="w-64 h-64 bg-sky-600/10 top-1/4 right-1/3 animation-delay-4000" />
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-24 space-y-32">
                {/* Hero Section */}
                <section className="min-h-[60vh] flex items-center">
                    <Container>
                        <div className="text-center max-w-4xl mx-auto space-y-8">
                            <FadeIn>
                                <div className="inline-block px-4 py-2 bg-sky-950/60 border border-sky-500/20 rounded-full mb-4">
                                    <p className="text-sky-400 font-medium">Nosso Portfolio</p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <h1 className="text-5xl md:text-7xl font-bold text-sky-300 leading-tight">
                                    Entregamos desde o 
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400"> básico </span>
                                    até o mais
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> avançado </span>
                                    para sua empresa
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                    Não importa o tamanho do seu negócio ou desafio, temos a solução ideal 
                                    para levar sua empresa ao próximo nível no mundo digital
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.6}>
                                <Link href="#packages">
                                    <Button 
                                        size="lg" 
                                        className="bg-sky-500 hover:bg-sky-600 text-white group"
                                    >
                                        Conhecer Soluções
                                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </FadeIn>
                        </div>
                    </Container>
                </section>

                {/* Service Packages Section */}
                <section id="packages">
                    <Container>
                        <div className="text-center mb-16">
                            <FadeIn>
                                <h2 className="text-4xl md:text-5xl font-bold text-sky-300 mb-6">
                                    Escolha o pacote ideal para seu 
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400"> negócio</span>
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                    Desenvolvemos soluções que se adaptam ao momento e às necessidades da sua empresa
                                </p>
                            </FadeIn>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {servicePackages.map((pkg, index) => (
                                <ServicePackageCard 
                                    key={index} 
                                    pkg={pkg} 
                                    index={index}
                                    onSelectPackage={handleSelectPackage}
                                />
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Portfolio Section */}
                <section ref={portfolioRef}>
                    <Container>
                        <div className="text-center mb-12">
                            <FadeIn>
                                <h2 className="text-4xl md:text-5xl font-bold text-sky-300 mb-6">
                                    Projetos que 
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400"> transformam</span>
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                    Conheça alguns dos negócios que já impulsionamos com nossas soluções
                                </p>
                            </FadeIn>

                            {/* Filter Buttons */}
                            <FadeIn delay={0.2}>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {[
                                        { value: 'all', label: 'Todos', color: 'bg-gray-600' },
                                        { value: 'basic', label: 'Básico', color: 'bg-green-500' },
                                        { value: 'intermediate', label: 'Intermediário', color: 'bg-sky-500' },
                                        { value: 'custom', label: 'Sob Medida', color: 'bg-purple-500' }
                                    ].map((filter) => (
                                        <button
                                            key={filter.value}
                                            onClick={() => setSelectedCategory(filter.value as any)}
                                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                                selectedCategory === filter.value
                                                    ? `${filter.color} text-white shadow-lg`
                                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                            }`}
                                        >
                                            {filter.label}
                                        </button>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Projects Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {/* Load More Button */}
                        {filteredProjects.length > 6 && (
                            <FadeIn delay={0.3} className="text-center mt-12">
                                <Button variant="outline" size="lg" className="border-sky-500/50 text-sky-400 hover:bg-sky-950/50">
                                    Ver mais projetos
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                            </FadeIn>
                        )}
                    </Container>
                </section>

                {/* Clients Section */}
                <section className="py-20 bg-gray-900/30">
                    <Container>
                        <div className="text-center mb-16">
                            <FadeIn>
                                <h2 className="text-4xl md:text-5xl font-bold text-sky-300 mb-6">
                                    Clientes que 
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400"> confiam </span>
                                    na gente
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                    Empresas de diversos segmentos que escolheram a Digicat para crescer no digital
                                </p>
                            </FadeIn>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {clients.map((client, index) => (
                                <FadeIn key={index} delay={0.1 * index}>
                                    <ClientLogo name={client.name} logo={client.logo} />
                                </FadeIn>
                            ))}
                        </div>

                        {/* Testimonials */}
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <FadeIn direction="left">
                                <Card className="bg-gray-800/40 border-none shadow-lg">
                                    <CardContent className="p-8">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 mb-4 italic">
                                            &quot;A Digicat revolucionou nossa presença digital. Em apenas 3 meses, 
                                            nossas vendas online cresceram 200%. Recomendo de olhos fechados!&quot;
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 rounded-full bg-sky-500/20 mr-4"></div>
                                            <div>
                                                <p className="font-semibold text-sky-300">João Silva</p>
                                                <p className="text-sm text-gray-400">CEO - TechStore</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </FadeIn>

                            <FadeIn direction="right">
                                <Card className="bg-gray-800/40 border-none shadow-lg">
                                    <CardContent className="p-8">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-300 mb-4 italic">
                                            &quot;Profissionalismo e resultados excepcionais. A equipe da Digicat 
                                            entendeu nossas necessidades e entregou muito além do esperado.&quot;
                                        </p>
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 rounded-full bg-purple-500/20 mr-4"></div>
                                            <div>
                                                <p className="font-semibold text-sky-300">Maria Oliveira</p>
                                                <p className="text-sm text-gray-400">Diretora - Clínica Saúde+</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </FadeIn>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="pb-32">
                    <Container>
                        <FadeIn>
                            <Card className="bg-gradient-to-br from-sky-900/30 to-blue-900/30 border-none shadow-2xl overflow-hidden">
                                <div className="relative">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                                    
                                    <CardContent className="relative p-12 text-center">
                                        <h2 className="text-4xl md:text-5xl font-bold text-sky-300 mb-6">
                                            Pronto para 
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400"> transformar </span>
                                            seu negócio?
                                        </h2>
                                        
                                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                            Entre em contato com nossa equipe e descubra como podemos 
                                            ajudar sua empresa a alcançar resultados extraordinários
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link href="/contact">
                                                <Button 
                                                    size="lg" 
                                                    className="bg-sky-500 hover:bg-sky-600 text-white group"
                                                >
                                                    Entre em contato com a equipe
                                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                            
                                            <a 
                                                href="https://wa.me/5511999999999" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                <Button 
                                                    size="lg" 
                                                    variant="outline" 
                                                    className="border-green-500/50 text-green-400 hover:bg-green-950/50 group"
                                                >
                                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                                    </svg>
                                                    WhatsApp
                                                </Button>
                                            </a>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </FadeIn>
                    </Container>
                </section>
            </div>
        </div>
    );
}