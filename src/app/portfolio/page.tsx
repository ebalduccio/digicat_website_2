import React from 'react';
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags }) => (
    <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="relative h-48 md:h-64">
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="p-4">
            <CardTitle className="text-xl font-bold mb-2 text-sky-900 group-hover:text-sky-700 transition-colors duration-300">{title}</CardTitle>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">{tag}</span>
                ))}
            </div>
            <Button variant="link" className="text-sky-600 group-hover:text-sky-700 p-0">
                Ver detalhes <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
        </CardContent>
    </Card>
);

const projects: ProjectCardProps[] = [
    {
        title: "E-commerce Responsivo",
        description: "Plataforma de comércio eletrônico otimizada para dispositivos móveis e desktop.",
        image: "/images/portfolio/ecommerce.jpg",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Aplicativo de Gestão Financeira",
        description: "App móvel para controle de despesas e investimentos pessoais.",
        image: "/images/portfolio/finance-app.jpg",
        tags: ["React Native", "Firebase", "Redux"]
    },
    {
        title: "Sistema de Gerenciamento de Projetos",
        description: "Plataforma web para coordenação de equipes e acompanhamento de projetos.",
        image: "/images/portfolio/project-management.jpg",
        tags: ["Vue.js", "Laravel", "MySQL"]
    },
    {
        title: "Dashboard de Análise de Dados",
        description: "Interface interativa para visualização de métricas e KPIs empresariais.",
        image: "/images/portfolio/data-dashboard.jpg",
        tags: ["Angular", "D3.js", "Python"]
    },
    {
        title: "Chatbot com IA",
        description: "Assistente virtual inteligente para atendimento ao cliente 24/7.",
        image: "/images/portfolio/chatbot.jpg",
        tags: ["NLP", "Machine Learning", "Node.js"]
    },
    {
        title: "Aplicativo de Delivery",
        description: "Solução completa para pedidos e entregas de alimentos.",
        image: "/images/portfolio/delivery-app.jpg",
        tags: ["Flutter", "Google Maps API", "Firebase"]
    }
];

export default function PortfolioPage() {
    return (
        <div className="bg-gradient-to-b from-sky-100 to-white">
            <section className="py-20 overflow-hidden">
                <Container>
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-sky-900 mb-6">Nosso Portfólio</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Conheça alguns dos projetos inovadores que desenvolvemos para nossos clientes. Cada solução é única e feita sob medida para atender às necessidades específicas de cada negócio.
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-sky-50">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-sky-900 mb-6">Pronto para transformar sua ideia em realidade?</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Nosso time de especialistas está pronto para ajudar a levar seu projeto ao próximo nível. Vamos criar algo incrível juntos!
                        </p>
                        <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                            Solicite um Orçamento
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}