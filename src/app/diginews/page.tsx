'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Newspaper, Cpu, Clock, Image, Bot, Search, BarChart, Sparkles, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: Search,
        title: "Busca Inteligente",
        description: "Sistema avançado de crawling que monitora fontes confiáveis 24/7 para trazer as notícias mais relevantes em tempo real.",
        gradient: "from-blue-500 to-sky-500"
    },
    {
        icon: Cpu,
        title: "IA Avançada",
        description: "Algoritmos de última geração que processam e reescrevem conteúdo mantendo precisão e qualidade jornalística.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Image,
        title: "Geração de Imagens",
        description: "Criação automática de imagens únicas e relevantes para cada notícia usando IA generativa.",
        gradient: "from-amber-500 to-orange-500"
    },
    {
        icon: Clock,
        title: "Atualização Constante",
        description: "Conteúdo atualizado automaticamente a cada hora, garantindo que você nunca perca as últimas notícias.",
        gradient: "from-emerald-500 to-green-500"
    }
];

const benefits = [
    {
        title: "Economia de Tempo e Recursos",
        items: [
            "Redução de até 70% no tempo de produção de conteúdo",
            "Eliminação de tarefas manuais repetitivas",
            "Otimização da equipe editorial"
        ]
    },
    {
        title: "Qualidade e Consistência",
        items: [
            "Padronização do estilo editorial",
            "Verificação automática de fatos",
            "Referências e fontes sempre citadas"
        ]
    },
    {
        title: "Escalabilidade",
        items: [
            "Produção ilimitada de conteúdo",
            "Múltiplos idiomas e localizações",
            "Fácil expansão para novos tópicos"
        ]
    }
];

const stats = [
    { value: "10k+", label: "Notícias/Mês" },
    { value: "99.9%", label: "Precisão" },
    { value: "< 1min", label: "Tempo de Publicação" },
    { value: "24/7", label: "Monitoramento" }
];

const DiginewsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Floating Gradients */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                <div className="absolute top-96 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
            </div>

            <Container className="relative pt-32 pb-16">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/20">
                            Revolucionando o Jornalismo Digital
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 text-transparent bg-clip-text">
                            Diginews
                        </span>
                        <br />
                        <span className="text-white text-4xl md:text-5xl">
                            Notícias Inteligentes em Tempo Real
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        Uma plataforma revolucionária que utiliza Inteligência Artificial para criar,
                        gerenciar e publicar notícias automaticamente, mantendo seu site sempre atualizado
                        com conteúdo relevante e de qualidade.
                    </motion.p>

                    {/* Live Demo Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="relative max-w-4xl mx-auto mb-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                        <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700/50 p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">Atualizado há 5 minutos</span>
                                </div>
                            </div>

                            {/* Live Demo Content */}
                            <div className="space-y-4">
                                <div className="animate-pulse space-y-4">
                                    <div className="h-8 bg-gray-700/50 rounded-lg w-3/4" />
                                    <div className="h-32 bg-gray-700/50 rounded-lg" />
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-700/50 rounded w-5/6" />
                                        <div className="h-4 bg-gray-700/50 rounded w-4/6" />
                                        <div className="h-4 bg-gray-700/50 rounded w-3/6" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700/50">
                                    <div className="flex items-center gap-4">
                                        <Bot className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm text-gray-400">Gerado por IA</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <span>Fonte:</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            Recursos
                        </span>
                        <h2 className="text-3xl font-bold text-white mt-6 mb-4">
                            Tecnologia de Ponta em Cada Detalhe
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Descubra como o Diginews revoluciona a produção de conteúdo com
                            recursos avançados de Inteligência Artificial
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                                <Card className="relative h-full bg-gray-900/50 backdrop-blur-xl border-gray-800/50">
                                    <CardContent className="p-6">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                            {React.createElement(feature.icon, { className: "w-full h-full text-white" })}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* How It Works Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Processo
                        </span>
                        <h2 className="text-3xl font-bold text-white mt-6 mb-4">
                            Como o Diginews Funciona
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 blur-sm" />

                        {[
                            {
                                title: "Coleta de Dados",
                                description: "Nossos crawlers monitoram constantemente milhares de fontes confiáveis em busca das últimas notícias.",
                                icon: Search,
                                gradient: "from-blue-500 to-sky-500"
                            },
                            {
                                title: "Processamento por IA",
                                description: "Algoritmos avançados analisam, verificam e reescrevem o conteúdo mantendo a precisão jornalística.",
                                icon: Cpu,
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                title: "Geração de Mídia",
                                description: "IA generativa cria imagens únicas e relevantes para cada notícia automaticamente.",
                                icon: Image,
                                gradient: "from-amber-500 to-orange-500"
                            },
                            {
                                title: "Publicação Automática",
                                description: "Conteúdo é formatado e publicado automaticamente em seu site com todas as referências.",
                                icon: Sparkles,
                                gradient: "from-emerald-500 to-green-500"
                            }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-16`}
                            >
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                                        <div className="relative p-6 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-gray-700/50">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} p-2.5 mb-4`}>
                                                {React.createElement(step.icon, { className: "w-full h-full text-white" })}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                            Benefícios
                        </span>
                        <h2 className="text-3xl font-bold text-white mt-6 mb-4">
                            Por que escolher o Diginews?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                                <Card className="relative h-full bg-gray-900/50 backdrop-blur-xl border-gray-800/50">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-4">
                                            {benefit.title}
                                        </h3>
                                        <div className="space-y-3">
                                            {benefit.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="p-1 rounded-lg bg-green-500/10">
                                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                                    </div>
                                                    <span className="text-gray-400">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-30" />
                    <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12 max-w-4xl mx-auto text-center">
                        <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            Comece Agora
                        </span>

                        <h2 className="text-4xl font-bold text-white mt-6 mb-4">
                            Revolucione seu Site de Notícias
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Junte-se a centenas de publishers que já confiam no Diginews para
                            automatizar sua produção de conteúdo com qualidade e eficiência.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={'https://digicat.news'}>
                                <Button
                                    size="lg"
                                    className="relative group"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                                    <span className="relative flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-lg">
                                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                                            Conhecer a Diginews
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-purple-400 transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default DiginewsPage;