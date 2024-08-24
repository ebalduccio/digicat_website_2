'use client'

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Globe, Cog, Target, Bot, CheckCircle } from 'lucide-react';

const benefitItems = [
    { text: 'Visibilidade online', icon: Globe },
    { text: 'Automação de processos', icon: Cog },
    { text: 'Diferenciação da concorrência', icon: Target },
    { text: 'Atendentes Virtuais de inteligência avançada', icon: Bot },
];

const BenefitItem: React.FC<{ text: string; icon: React.ElementType; index: number }> = ({ text, icon: Icon, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.li
            ref={ref}
            className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="bg-sky-500 rounded-full p-2">
                <Icon className="h-6 w-6 text-white" />
            </div>
            <span className="text-white flex-grow">{text}</span>
            <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
        </motion.li>
    );
};

const DigitalTransformation: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/homevideo2.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-sky-900/90"></div>
            </div>
            <Container className="relative z-10">
                <motion.div
                    ref={ref}
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6 text-left">
                        Perdendo clientes por falta de uma <span className="text-sky-400">presença online forte</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 text-left">
                        A transformação digital é uma realidade e as empresas precisam estar preparadas para acompanhar essa evolução.
                    </p>
                    <h3 className="text-2xl font-semibold text-white mb-8 text-center">Iremos te entregar</h3>
                    <ul className="space-y-4 text-xl mb-12">
                        {benefitItems.map((item, index) => (
                            <BenefitItem key={index} text={item.text} icon={item.icon} index={index} />
                        ))}
                    </ul>
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-4 rounded-md text-sm shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                            QUERO SERVIÇO GRATUITAMENTE
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
};

export default DigitalTransformation;