'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from "@/components/ui/container";
import { CheckCircle, Star, ArrowRight, Zap, Settings, Smartphone, Code, PenTool, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import PartnershipSection from '../(root)/components/Partners';

const DigiCatLandingPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const services = [
        { name: 'UI/UX Design', description: 'Designs intuitivos que cativam seus usuários', icon: PenTool },
        { name: 'Desenvolvimento Web', description: 'Sites impressionantes com chatbots e integração social', icon: Code },
        { name: 'Software Personalizado', description: 'Sistemas que automatizam e potencializam sua equipe', icon: Settings },
        { name: 'Apps iOS e Android', description: 'Engaje seus clientes com apps nativos poderosos', icon: Smartphone },
        { name: 'Inteligência Artificial', description: 'Experiências personalizadas e automação inteligente', icon: Zap },
        { name: 'Marketing Digital', description: 'Aumente sua visibilidade e alcance novos clientes', icon: TrendingUp },
    ];

    const testimonials = [
        { name: 'João Silva', position: 'CEO, Tech Solutions', content: 'A Digicat transformou completamente nosso processo de negócios. Vimos um aumento de 300% em nossas conversões online!', image: '/images/testimonial1.jpg' },
        { name: 'Maria Oliveira', position: 'CTO, Inova Ltda', content: 'O aplicativo desenvolvido pela Digicat superou todas as nossas expectativas. Nossa base de usuários triplicou em apenas 3 meses!', image: '/images/testimonial2.jpg' },
        { name: 'Carlos Mendes', position: 'CMO, Global Tech', content: 'A estratégia de marketing digital da Digicat nos colocou no mapa. Agora somos líderes de mercado em nosso segmento!', image: '/images/testimonial3.jpg' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100">
            <Container>
                <motion.header
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="py-24 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/images/tech-pattern.svg')] opacity-5"></div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">
                        Transforme seu Negócio em uma Máquina de Lucros 24/7
                    </h1>
                    <p className="text-xl md:text-2xl text-sky-200 mb-8 max-w-3xl mx-auto">
                        Descubra como nossa tecnologia de ponta pode multiplicar seus lucros e revolucionar sua presença digital
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                            <ArrowRight className="mr-2 h-6 w-6" /> Iniciar Transformação Agora
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300">
                            Receber Análise Grátis
                        </Button>
                    </div>
                </motion.header>
            </Container>

            <Container>
                <section className="py-24">
                    <h2 className="text-4xl font-bold text-center mb-16 text-sky-300">Nossos Serviços de Classe Mundial</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="bg-gray-800/50 backdrop-blur-lg border-none hover:bg-gray-700/50 transition-all duration-300">
                                    <CardContent className="p-6">
                                        <service.icon className="h-12 w-12 text-sky-400 mb-4" />
                                        <h3 className="text-2xl font-semibold mb-2 text-sky-200">{service.name}</h3>
                                        <p className="text-gray-300">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </Container>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800">
                <Container>
                    <section className="py-24">
                        <h2 className="text-4xl font-bold text-center mb-16 text-sky-300">O Que Nossos Clientes Estão Dizendo</h2>
                        <div className="max-w-4xl mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg"
                                >
                                    <div className="flex items-center mb-6">
                                        <Image
                                            src={testimonials[currentTestimonial].image}
                                            alt={testimonials[currentTestimonial].name}
                                            width={80}
                                            height={80}
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <h3 className="text-2xl font-semibold text-sky-200">{testimonials[currentTestimonial].name}</h3>
                                            <p className="text-sky-400">{testimonials[currentTestimonial].position}</p>
                                        </div>
                                    </div>
                                    <p className="text-xl italic text-gray-300 mb-4">"{testimonials[currentTestimonial].content}"</p>
                                    <div className="flex justify-center">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`h-3 w-3 rounded-full mx-1 ${index === currentTestimonial ? 'bg-sky-500' : 'bg-sky-300'}`}
                                                onClick={() => setCurrentTestimonial(index)}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </section>
                </Container>
            </div>

            <Container>
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center py-24"
                >
                    <h2 className="text-4xl font-bold mb-8 text-sky-300">Pronto para Dominar seu Mercado?</h2>
                    <ul className="text-left max-w-md mx-auto mb-12">
                        {[
                            'Aumente sua visibilidade online em 200%',
                            'Reduza custos operacionais em até 40%',
                            'Melhore a satisfação do cliente em 98%'
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center mb-4 text-lg text-gray-300"
                            >
                                <CheckCircle className="h-6 w-6 text-sky-400 mr-3" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                    <Button size="lg" className="bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        Agende sua Consultoria Gratuita Agora
                    </Button>
                </motion.section>
            </Container>
        </div>
    );
};

export default DigiCatLandingPage;