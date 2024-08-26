'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import PartnershipSection from '../(root)/components/Partners';

const DigiCatLandingPage = () => {
    const services = [
        { name: 'UI/UX Design', description: 'Designs centrados no usuário que transformam ideias em realidade visual.' },
        { name: 'Desenvolvimento Web', description: 'Sites que impressionam, com chatbots, formulários e integração com redes sociais.' },
        { name: 'Desenvolvimento de Software', description: 'Sistemas personalizados que automatizam tarefas e liberam sua equipe.' },
        { name: 'Aplicativos iOS e Android', description: 'Acesso rápido à sua marca, com notificações e ofertas personalizadas.' },
        { name: 'Inteligência Artificial (IA)', description: 'Experiências personalizadas e automação de tarefas repetitivas.' },
        { name: 'Marketing Digital', description: 'Aumente a visibilidade da sua marca e alcance clientes potenciais.' },
    ];

    const testimonials = [
        { name: 'João Silva', company: 'Tech Solutions', content: 'A Digicat transformou completamente nosso processo de negócios. Altamente recomendado!' },
        { name: 'Maria Oliveira', company: 'Inova Ltda', content: 'O aplicativo desenvolvido pela Digicat superou todas as nossas expectativas. Incrível!' },
    ];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
                    Seu negócio está perdendo dinheiro enquanto você dorme?
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                    Descubra como nossa tecnologia de ponta pode multiplicar seus lucros 24/7
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600">
                        <ArrowRight className="mr-2 h-5 w-5" /> Chamar no WhatsApp
                    </Button>
                    <Button size="lg" variant="outline">
                        Receber Análise Grátis
                    </Button>
                </div>
            </motion.section>

            <PartnershipSection />

            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Nossos Serviços</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">O Que Nossos Clientes Dizem</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
                <ul className="text-left max-w-md mx-auto mb-8">
                    <li className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Aumente sua visibilidade online
                    </li>
                    <li className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Automatize processos e reduza custos
                    </li>
                    <li className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Melhore a experiência do cliente
                    </li>
                </ul>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Agende sua Consultoria Gratuita
                </Button>
            </motion.section>
        </div>
    );
};

export default DigiCatLandingPage;