'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users, Zap, Shield, ArrowRight, Check, Rocket, Target, Lightbulb, Smartphone, Brain, Cloud, Wifi, Globe, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

interface MissionPoint {
    title: string;
    description: string;
    icon: string;
}

const missionPoints: MissionPoint[] = [
    {
        title: "Inovação Tecnológica",
        description: "Buscamos constantemente as mais recentes inovações em tecnologia para impulsionar a transformação digital. Nosso foco está em inteligência artificial, blockchain e Internet das Coisas (IoT) para criar soluções que revolucionam indústrias.",
        icon: "🚀"
    },
    {
        title: "Sustentabilidade Ambiental",
        description: "Comprometemo-nos a desenvolver práticas e tecnologias que promovam a sustentabilidade. Isso inclui a criação de soluções de energia renovável, otimização de recursos e redução de emissões de carbono em todos os nossos projetos.",
        icon: "🌱"
    },
    {
        title: "Educação e Capacitação",
        description: "Acreditamos no poder da educação para transformar vidas. Oferecemos programas de treinamento, workshops e parcerias educacionais para capacitar indivíduos com habilidades tecnológicas essenciais para o futuro do trabalho.",
        icon: "📚"
    },
    {
        title: "Inclusão Digital",
        description: "Trabalhamos para reduzir a divisão digital, garantindo que comunidades subrepresentadas tenham acesso à tecnologia e às oportunidades que ela oferece. Isso inclui iniciativas de conectividade em áreas rurais e programas de alfabetização digital.",
        icon: "🌐"
    },
    {
        title: "Ética e Governança de Dados",
        description: "Priorizamos a proteção de dados e a privacidade em todas as nossas operações. Desenvolvemos e promovemos práticas éticas no uso de dados, garantindo transparência e confiança em nossas soluções tecnológicas.",
        icon: "🛡️"
    },
    {
        title: "Colaboração Global",
        description: "Fomentamos parcerias internacionais para abordar desafios globais. Através da colaboração com instituições de pesquisa, empresas e governos, buscamos criar um impacto positivo em escala global.",
        icon: "🤝"
    }
];

interface MissionCardProps extends MissionPoint {
    index: number;
}

const MissionCard: React.FC<MissionCardProps> = ({ title, description, icon, index }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
        >
            <Card className="bg-transparent hover:from-sky-700/40 hover:to-sky-800/60 transition-all duration-300 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{icon}</span>
                        <h3 className="text-xl font-semibold text-sky-100">{title}</h3>
                    </div>
                    <p className={`text-sky-200 ${isExpanded ? '' : 'line-clamp-2'}`}>{description}</p>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 flex items-center text-sky-400 hover:text-sky-300 transition-colors duration-200"
                    >
                        {isExpanded ? 'Ler menos' : 'Ler mais'}
                        {isExpanded ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                    </button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const OurMission: React.FC = () => {
    const values = [
        { icon: Users, title: 'Colaboração', description: 'Trabalhamos em estreita parceria com nossos clientes para garantir resultados excepcionais.' },
        { icon: Zap, title: 'Inovação', description: 'Estamos sempre na vanguarda das últimas tecnologias e tendências do mercado.' },
        { icon: Shield, title: 'Confiabilidade', description: 'Entregamos projetos de alta qualidade, dentro do prazo e do orçamento acordados.' },
        { icon: Rocket, title: 'Agilidade', description: 'Adaptamos rapidamente às mudanças do mercado e às necessidades dos clientes.' },
        { icon: Target, title: 'Foco no Cliente', description: 'Colocamos as necessidades e objetivos dos nossos clientes no centro de tudo o que fazemos.' },
        { icon: Lightbulb, title: 'Criatividade', description: 'Buscamos soluções inovadoras e únicas para cada desafio que enfrentamos.' },
    ];

    const serviceAreas = [
        {
            title: 'Desenvolvimento Web',
            icon: Globe,
            description: 'Criação de sites e aplicações web responsivas e de alta performance.',
            technologies: ['React', 'Next.js', 'Node.js', 'PHP', 'WordPress'],
            features: [
                'Design responsivo',
                'Otimização de performance',
                'Integração com APIs',
                'E-commerce',
                'Progressive Web Apps (PWAs)'
            ]
        },
        {
            title: 'Aplicativos Móveis',
            icon: Smartphone,
            description: 'Desenvolvimento de apps nativos e híbridos para iOS e Android.',
            technologies: ['React Native', 'Flutter',],
            features: [
                'UX/UI intuitivo',
                'Integração com hardware do dispositivo',
                'Push notifications',
                'Offline mode',
                'App Store/Google Play deployment'
            ]
        },
        {
            title: 'Inteligência Artificial',
            icon: Brain,
            description: 'Implementação de soluções de IA e machine learning para otimizar processos.',
            technologies: ['OpenAI GPT',],
            features: [
                'Análise preditiva',
                'Processamento de linguagem natural',
                'Visão computacional',
                'Sistemas de recomendação',
                'Automação de processos'
            ]
        },
        {
            title: 'Cloud Computing',
            icon: Cloud,
            description: 'Migração e gerenciamento de infraestruturas na nuvem.',
            technologies: ['Google Cloud', 'Docker'],
            features: [
                'Arquitetura serverless',
                'Escalabilidade automática',
                'Disaster recovery',
                'Monitoramento e logging',
                'Otimização de custos'
            ]
        },
        {
            title: 'Cibersegurança',
            icon: Shield,
            description: 'Proteção de dados e sistemas contra ameaças cibernéticas.',
            technologies: ['Penetration Testing', 'Firewalls', 'Encryption', 'VPNs', 'SIEM'],
            features: [
                'Análise de vulnerabilidades',
                'Resposta a incidentes',
                'Conformidade com GDPR/LGPD',
                'Segurança de endpoints',
                'Treinamento de conscientização'
            ]
        },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-900 to-sky-900 min-h-screen text-white">
            <header className="py-20 px-4 text-center relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="w-full h-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center filter blur-sm"></div>
                </motion.div>
                <div className="relative z-10">
                    <motion.h1
                        className="text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nossa Missão
                    </motion.h1>
                    <motion.p
                        className="text-2xl mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Impulsionar o sucesso dos nossos clientes através de soluções digitais inovadoras e personalizadas.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Button variant="secondary" size="lg" asChild>
                            <a href="#mission-details" className="inline-flex items-center">
                                Saiba Mais
                                <ChevronDown className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </header>

            <section id="mission-details" className="py-20 px-4 bg-gradient-to-b from-sky-900 to-sky-950">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-5xl font-bold mb-16 text-center text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Nossa Missão em Detalhes
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {missionPoints.map((point, index) => (
                            <MissionCard key={index} {...point} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gradient-to-r from-gray-950 to-sky-900">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-4xl font-bold mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Nossos Valores
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 * index, duration: 0.5 }}
                            >
                                <Card className="bg-sky-950 backdrop-blur-md hover:bg-blue-800/50 transition-colors duration-300">
                                    <CardHeader>
                                        <value.icon className="w-12 h-12 mb-4 text-sky-400" />
                                        <CardTitle className='text-white'>{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-300">{value.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gradient-to-br from-gray-950 to-sky-950">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-5xl font-bold mb-16 text-center text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Áreas de Atuação
                    </motion.h2>
                    <Tabs defaultValue="web" className="max-w-5xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-sky-900 rounded-lg p-1">
                            {serviceAreas.map((service) => (
                                <TabsTrigger
                                    key={service.title}
                                    value={service.title.toLowerCase().split(' ')[0]}
                                    className="data-[state=active]:bg-sky-700 data-[state=active]:text-white"
                                >
                                    <service.icon className="w-5 h-5 mr-2" />
                                    {service.title.split(' ')[0]}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {serviceAreas.map((service) => (
                            <TabsContent key={service.title} value={service.title.toLowerCase().split(' ')[0]}>
                                <Card className="bg-sky-950 backdrop-blur-md border-sky-500">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-white flex items-center">
                                            <service.icon className="w-8 h-8 mr-3 text-blue-400" />
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-blue-200">{service.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-4">
                                            <h4 className="text-lg font-semibold mb-2 text-white">Tecnologias</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech) => (
                                                    <Badge key={tech} variant="secondary" className="bg-sky-700 text-white">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2 text-white">Recursos</h4>
                                            <ul className="list-disc list-inside text-blue-200">
                                                {service.features.map((feature) => (
                                                    <li key={feature}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button variant="secondary" className="w-full">
                                            Saiba mais sobre {service.title}
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-4xl font-bold mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Nosso Compromisso
                    </motion.h2>
                    <motion.div
                        className="bg-blue-900/30 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Soluções Personalizadas</AccordionTrigger>
                                <AccordionContent>
                                    Desenvolvemos soluções personalizadas que atendam às necessidades únicas de cada cliente, garantindo que cada projeto seja adaptado aos objetivos específicos do negócio.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Inovação Constante</AccordionTrigger>
                                <AccordionContent>
                                    Mantemo-nos atualizados com as últimas tendências tecnológicas para oferecer soluções de ponta, garantindo que nossos clientes estejam sempre à frente da concorrência.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Suporte Contínuo</AccordionTrigger>
                                <AccordionContent>
                                    Fornecemos suporte contínuo e orientação para garantir o sucesso a longo prazo de nossos clientes, estando sempre disponíveis para ajudar e resolver quaisquer problemas que possam surgir.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Cultura de Inovação</AccordionTrigger>
                                <AccordionContent>
                                    Promovemos uma cultura de inovação e melhoria contínua em nossa empresa e nos projetos de nossos clientes, incentivando a criatividade e a busca por soluções cada vez melhores.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OurMission;