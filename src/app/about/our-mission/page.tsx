'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Zap, Shield, ArrowRight, Check, Rocket, Target, Lightbulb, Smartphone, Brain, Cloud, Wifi, Globe, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Parallax } from 'react-parallax';

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
        title: "Excelência em Soluções Customizadas",
        description: "Nossa empresa se destaca na criação de soluções tecnológicas personalizadas. Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades específicas e desenvolver sistemas que otimizam seus processos e impulsionam seu crescimento.",
        icon: "🎯"
    },
    {
        title: "Desenvolvimento Ágil e Eficiente",
        description: "Adotamos metodologias ágeis em todos os nossos projetos, garantindo entregas rápidas e de alta qualidade. Nossa equipe altamente qualificada utiliza as melhores práticas de desenvolvimento para criar software robusto, escalável e fácil de manter.",
        icon: "⚡"
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
        title: "Inovação Contínua e P&D",
        description: "Investimos constantemente em pesquisa e desenvolvimento para manter nossa posição de liderança no mercado. Nosso laboratório de inovação explora tecnologias emergentes e desenvolve protótipos que se transformam em produtos revolucionários para nossos clientes.",
        icon: "🔬"
    }
];

interface MissionCardProps extends MissionPoint {
    index: number;
}

const MissionCard: React.FC<MissionCardProps> = ({ title, description, icon, index }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="bg-sky-900/30 backdrop-blur-md border-sky-500/50 hover:bg-sky-800/50 transition-all duration-300 shadow-lg hover:shadow-sky-500/20">
                <CardContent className="p-6">
                    <motion.div
                        className="text-4xl mb-4"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-sky-100 mb-2">{title}</h3>
                    <AnimatePresence initial={false}>
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className={`text-sky-200 ${isExpanded ? '' : 'line-clamp-2'}`}>{description}</p>
                        </motion.div>
                    </AnimatePresence>
                    <Button
                        variant="ghost"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 text-sky-400 hover:text-sky-300 transition-colors duration-200"
                    >
                        {isExpanded ? 'Ler menos' : 'Ler mais'}
                        <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </motion.span>
                    </Button>
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
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage="/api/placeholder/1920/1080"
                bgImageAlt="Mission background"
                strength={200}
            >
                <header className="py-32 px-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                            Nossa Missão
                        </h1>
                        <p className="text-2xl mb-12 text-blue-100">
                            Impulsionar o sucesso dos nossos clientes através de soluções digitais inovadoras e personalizadas.
                        </p>
                        <Button variant="secondary" size="lg" asChild className="group">
                            <a href="#mission-details" className="inline-flex items-center">
                                Saiba Mais
                                <motion.span
                                    className="ml-2"
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <ChevronDown className="w-5 h-5" />
                                </motion.span>
                            </a>
                        </Button>
                    </motion.div>
                </header>
            </Parallax>
            <section id="mission-details" className="py-20 px-4 bg-gradient-to-b from-sky-900 to-sky-950">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
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
                        className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
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
                                whileHover={{ scale: 1.05 }}
                            >
                                <Card className="bg-sky-950/70 backdrop-blur-md hover:bg-blue-800/50 transition-all duration-300 border-sky-500/30 shadow-lg hover:shadow-sky-500/20">
                                    <CardHeader>
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className="mb-4"
                                        >
                                            <value.icon className="w-12 h-12 text-sky-400" />
                                        </motion.div>
                                        <CardTitle className='text-2xl font-semibold text-white mb-2'>{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-sky-200 text-base">{value.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-20 px-4 bg-gradient-to-br from-gray-950 to-sky-950">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Áreas de Atuação
                    </motion.h2>
                    <Tabs defaultValue="web" className="max-w-5xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-sky-900/50 rounded-lg p-1 mb-8 overflow-x-auto">
                            {serviceAreas.map((service) => (
                                <TabsTrigger
                                    key={service.title}
                                    value={service.title.toLowerCase().split(' ')[0]}
                                    className="data-[state=active]:bg-sky-700 data-[state=active]:text-white transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
                                >
                                    <service.icon className="w-4 h-4 mr-1 sm:w-5 sm:h-5 sm:mr-2" />
                                    <span className="hidden sm:inline">{service.title.split(' ')[0]}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <AnimatePresence mode="wait">
                            {serviceAreas.map((service) => (
                                <TabsContent key={service.title} value={service.title.toLowerCase().split(' ')[0]}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card className="bg-sky-950/70 backdrop-blur-md border-sky-500/30 shadow-lg">
                                            <CardHeader>
                                                <CardTitle className="text-2xl md:text-3xl text-white flex items-center">
                                                    <service.icon className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-blue-400" />
                                                    {service.title}
                                                </CardTitle>
                                                <CardDescription className="text-blue-200 text-base md:text-lg">{service.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="mb-4 md:mb-6">
                                                    <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">Tecnologias</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {service.technologies.map((tech) => (
                                                            <Badge key={tech} variant="secondary" className="bg-sky-700 text-white px-2 py-1 text-xs md:text-sm">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">Recursos</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                        {service.features.map((feature) => (
                                                            <li key={feature} className="flex items-center text-blue-200 text-sm md:text-base">
                                                                <Check className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400 flex-shrink-0" />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="secondary" className="w-full group text-sm md:text-base">
                                                    Saiba mais sobre {service.title}
                                                    <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                </TabsContent>
                            ))}
                        </AnimatePresence>
                    </Tabs>
                </div>
            </section>

            <section className="py-20 px-4 bg-gradient-to-b from-sky-950 to-gray-900">
                <div className="container mx-auto">
                    <motion.h2
                        className="text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Nosso Compromisso
                    </motion.h2>
                    <motion.div
                        className="bg-blue-900/30 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto shadow-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                { title: "Soluções Personalizadas", content: "Desenvolvemos soluções personalizadas que atendam às necessidades únicas de cada cliente, garantindo que cada projeto seja adaptado aos objetivos específicos do negócio." },
                                { title: "Inovação Constante", content: "Mantemo-nos atualizados com as últimas tendências tecnológicas para oferecer soluções de ponta, garantindo que nossos clientes estejam sempre à frente da concorrência." },
                                { title: "Suporte Contínuo", content: "Fornecemos suporte contínuo e orientação para garantir o sucesso a longo prazo de nossos clientes, estando sempre disponíveis para ajudar e resolver quaisquer problemas que possam surgir." },
                                { title: "Cultura de Inovação", content: "Promovemos uma cultura de inovação e melhoria contínua em nossa empresa e nos projetos de nossos clientes, incentivando a criatividade e a busca por soluções cada vez melhores." }
                            ].map((item, index) => (
                                <AccordionItem value={`item-${index + 1}`} key={index}>
                                    <AccordionTrigger className="text-lg font-semibold text-blue-300 hover:text-blue-200 transition-colors duration-300">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-blue-100">
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.content}
                                        </motion.div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default OurMission;