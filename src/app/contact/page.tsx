'use client';

import React, { useRef } from 'react';
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <motion.div 
        className="flex items-center space-x-3 text-sky-800"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        {icon}
        <span>{text}</span>
    </motion.div>
);

const WhatsAppButton: React.FC<{ number: string }> = ({ number }) => {
    const handleClick = () => {
        const whatsappLink = `https://wa.me/${number.replace(/\D/g, '')}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2"
                onClick={handleClick}
            >
                <MessageCircle size={20} />
                <span>Falar conosco no WhatsApp</span>
            </Button>
        </motion.div>
    );
};

export default function ContatoPage() {
    return (
        <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
            <AnimatedSection>
                <section className="py-20 overflow-hidden">
                    <Container>
                        <motion.div 
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl font-bold text-sky-900 mb-6">Entre em Contato</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Estamos ansiosos para ouvir sobre seu projeto. Entre em contato conosco via WhatsApp e vamos transformar suas ideias em realidade digital.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <AnimatedSection>
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-6 space-y-6">
                                        <h2 className="text-2xl font-bold text-sky-900">Fale Conosco</h2>
                                        <p className="text-gray-600">
                                            Inicie uma conversa no WhatsApp com nosso representante. Estamos prontos para atender você!
                                        </p>
                                        <WhatsAppButton number="+55 71 99226-6505" />
                                    </CardContent>
                                </Card>
                            </AnimatedSection>

                            <AnimatedSection>
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-bold text-sky-900 mb-6">Informações de Contato</h2>
                                        <motion.div 
                                            className="space-y-4"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                                        >
                                            <ContactInfo icon={<Phone className="h-5 w-5" />} text="+55 (71) 9 9226-6505" />
                                            <ContactInfo icon={<Mail className="h-5 w-5" />} text="contato@digicat.com.br" />
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        </div>
                    </Container>
                </section>
            </AnimatedSection>

            <AnimatedSection>
                <section className="py-20 bg-sky-900 text-white">
                    <Container>
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Não importa o tamanho do seu projeto, estamos aqui para ajudar. Vamos criar algo incrível juntos!
                            </p>
                            <WhatsAppButton number="+55 71 99226-6505" />
                        </motion.div>
                    </Container>
                </section>
            </AnimatedSection>
        </div>
    );
}