'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Globe, Cog, Target, Bot, CheckCircle, ArrowRight } from 'lucide-react';

const benefitItems = [
    {
        text: 'Visibilidade online',
        icon: Globe,
        description: 'Destaque sua marca no mundo digital e alcance milhares de clientes potenciais.',
        gradient: 'from-blue-600 to-violet-600'
    },
    {
        text: 'Automação de processos',
        icon: Cog,
        description: 'Otimize suas operações e reduza custos com processos automatizados inteligentes.',
        gradient: 'from-emerald-600 to-teal-600'
    },
    {
        text: 'Diferenciação da concorrência',
        icon: Target,
        description: 'Destaque-se no mercado com soluções inovadoras e experiências únicas.',
        gradient: 'from-orange-600 to-red-600'
    },
    {
        text: 'Atendentes Virtuais de inteligência avançada',
        icon: Bot,
        description: 'Ofereça suporte 24/7 com assistentes virtuais que entendem e atendem seus clientes.',
        gradient: 'from-pink-600 to-purple-600'
    },
];

const BenefitItem: React.FC<{
    text: string;
    icon: React.ElementType;
    description: string;
    gradient: string;
    index: number
}> = ({ text, icon: Icon, description, gradient, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl transform group-hover:-rotate-2 transition-transform duration-300" />
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} p-3 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300">
                    {text}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const DigitalTransformation: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Video Background with Enhanced Overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                >
                    <source src="/videos/homevideo2.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-sky-900/90" />
                {/* Geometric Patterns */}
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(30deg,#ffffff12_1px,transparent_1px),linear-gradient(150deg,#ffffff12_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }} />
            </div>

            <Container className="relative z-10">
                <motion.div
                    ref={ref}
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block"
                        >
                            <span className="bg-gradient-to-r from-sky-400/10 to-blue-400/10 text-sky-400 text-sm font-medium px-4 py-2 rounded-full mb-4 inline-block">
                                Transformação Digital
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            Perdendo clientes por falta de uma{' '}
                            <span className="relative inline-block">
                                presença online forte?
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-500"
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-400 max-w-3xl mx-auto mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            A transformação digital é uma realidade e as empresas precisam estar preparadas para acompanhar essa evolução.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {benefitItems.map((item, index) => (
                            <BenefitItem
                                key={index}
                                text={item.text}
                                icon={item.icon}
                                description={item.description}
                                gradient={item.gradient}
                                index={index}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-sky-500/25 group"
                        >
                            <span className="flex items-center gap-2">
                                RECEBER UMA ANÁLISE GRATUITA
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default DigitalTransformation;