'use client';

import React, { useRef, useState } from 'react';
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone, Mail, MessageCircle, Clock, MapPin, Send, Copy, Check } from "lucide-react";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

type ContactFormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

// Componente de seção animada
const AnimatedSection = ({
    children,
    className,
    delay = 0,
    direction = "up"
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const directionVariants = {
        up: { opacity: 0, y: 50 },
        down: { opacity: 0, y: -50 },
        left: { opacity: 0, x: 50 },
        right: { opacity: 0, x: -50 }
    };

    return (
        <motion.div
            ref={ref}
            initial={directionVariants[direction]}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : directionVariants[direction]}
            transition={{ duration: 0.7, delay: delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Componente de informação de contato
const ContactInfo: React.FC<{
    icon: React.ReactNode;
    title: string;
    text: string;
    delay?: number;
    copyable?: boolean;
}> = ({ icon, title, text, delay = 0, copyable = false }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            className="flex items-start space-x-4 p-4 rounded-lg hover:bg-sky-50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-sky-900">{title}</h3>
                <p className="text-gray-600">{text}</p>
            </div>
            {copyable && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-sky-600"
                >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
            )}
        </motion.div>
    );
};

// Componente de botão do WhatsApp
const WhatsAppButton: React.FC<{ number: string; text?: string }> = ({
    number,
    text = "Falar via WhatsApp"
}) => {
    const handleClick = () => {
        const whatsappLink = `https://wa.me/${number.replace(/\D/g, '')}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2 rounded-full shadow-lg"
                onClick={handleClick}
            >
                <MessageCircle size={20} />
                <span>{text}</span>
            </Button>
        </motion.div>
    );
};

// Componente de formulário de contato
const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);

        // Simulando envio do formulário
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast("Mensagem enviada!");

        form.reset();
        setIsSubmitting(false);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input placeholder="Seu nome" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="seu@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Assunto</FormLabel>
                            <FormControl>
                                <Input placeholder="Sobre o que deseja falar?" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Digite sua mensagem aqui..."
                                    className="min-h-32"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                            <Clock className="mr-2 h-4 w-4" />
                        </motion.div>
                    ) : (
                        <Send className="mr-2 h-4 w-4" />
                    )}
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
            </form>
        </Form>
    );
};

export default function ContatoPage() {
    const [activeTab, setActiveTab] = useState("whatsapp");

    return (
        <div className="bg-gradient-to-b from-sky-50 to-white min-h-screen">
            <Toaster />

            {/* Hero Section */}
            <section className="relative pt-24 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-sky-900 opacity-5 pattern-grid-lg" />
                <Container>
                    <motion.div
                        className="text-center relative z-10"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-4 px-6 py-2 bg-sky-100 text-sky-800 rounded-full">
                            <span className="text-sm font-medium">Estamos aqui para ajudar</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-900 mb-6">
                            Entre em <span className="text-sky-600">Contato</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Estamos ansiosos para ouvir sobre seu projeto. Escolha a melhor forma de entrar em contato e vamos transformar suas ideias em realidade digital.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Button
                                className="bg-sky-600 hover:bg-sky-700 text-white rounded-full shadow-lg"
                                onClick={() => setActiveTab("form")}
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                Enviar mensagem
                            </Button>
                            <WhatsAppButton number="+55 71 99226-6505" />
                        </motion.div>
                    </motion.div>
                </Container>
            </section>

            {/* Tabs de Contato */}
            <section className="py-16 relative z-10">
                <Container>
                    <Tabs
                        defaultValue="whatsapp"
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="whatsapp" className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white">
                                <MessageCircle className="mr-2 h-4 w-4" />
                                WhatsApp
                            </TabsTrigger>
                            <TabsTrigger value="form" className="rounded-full data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                                <Mail className="mr-2 h-4 w-4" />
                                Formulário
                            </TabsTrigger>
                        </TabsList>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Informações de Contato - comum a ambas as abas */}
                            <AnimatedSection className="lg:col-span-2" direction="left">
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border-none bg-gradient-to-br from-sky-50 to-white">
                                    <CardContent className="p-6 h-full">
                                        <h2 className="text-2xl font-bold text-sky-900 mb-6">Informações de Contato</h2>
                                        <div className="space-y-1">
                                            <ContactInfo
                                                icon={<Phone className="h-5 w-5" />}
                                                title="Telefone"
                                                text="+55 (71) 9 9226-6505"
                                                delay={0.1}
                                                copyable
                                            />
                                            <ContactInfo
                                                icon={<Mail className="h-5 w-5" />}
                                                title="Email"
                                                text="contato@digicat.com.br"
                                                delay={0.2}
                                                copyable
                                            />
                                            <ContactInfo
                                                icon={<Clock className="h-5 w-5" />}
                                                title="Horário de Atendimento"
                                                text="Segunda a Sexta, 9h às 18h"
                                                delay={0.3}
                                            />
                                            <ContactInfo
                                                icon={<MapPin className="h-5 w-5" />}
                                                title="Localização"
                                                text="Salvador, Bahia - Brasil"
                                                delay={0.4}
                                            />
                                        </div>

                                    </CardContent>
                                </Card>
                            </AnimatedSection>

                            {/* Conteúdo das Tabs */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="lg:col-span-3"
                                >
                                    <TabsContent value="whatsapp" className="mt-0">
                                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-none overflow-hidden">
                                            <div className="bg-green-500 p-6 text-white">
                                                <h2 className="text-2xl font-bold mb-2">Fale Conosco via WhatsApp</h2>
                                                <p className="opacity-90">
                                                    Resposta rápida e personalizada para suas necessidades.
                                                </p>
                                            </div>
                                            <CardContent className="p-6 space-y-6">
                                                <div className="space-y-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="bg-green-100 p-3 rounded-full text-green-500">
                                                            <Clock className="h-5 w-5" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium">Resposta Rápida</h3>
                                                            <p className="text-sm text-gray-500">Tempo médio de resposta de 15 minutos</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center space-x-4">
                                                        <div className="bg-green-100 p-3 rounded-full text-green-500">
                                                            <MessageCircle className="h-5 w-5" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium">Atendimento Personalizado</h3>
                                                            <p className="text-sm text-gray-500">Fale diretamente com nossa equipe de especialistas</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-50 p-6 rounded-lg">
                                                    <p className="text-gray-600 mb-4">
                                                        Clique no botão abaixo para iniciar uma conversa no WhatsApp com nosso representante. Estamos prontos para atender você!
                                                    </p>
                                                    <WhatsAppButton
                                                        number="+55 71 99226-6505"
                                                        text="Iniciar conversa no WhatsApp"
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="form" className="mt-0">
                                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-none overflow-hidden">
                                            <div className="bg-sky-600 p-6 text-white">
                                                <h2 className="text-2xl font-bold mb-2">Envie-nos uma Mensagem</h2>
                                                <p className="opacity-90">
                                                    Preencha o formulário abaixo e entraremos em contato.
                                                </p>
                                            </div>
                                            <CardContent className="p-6">
                                                <ContactForm />
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Tabs>
                </Container>
            </section>

            {/* Call to Action */}
            <AnimatedSection>
                <section className={cn(
                    "py-20 relative overflow-hidden",
                    "after:absolute after:inset-0 after:bg-sky-900 after:opacity-90 after:z-0"
                )}>
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-sky-900 opacity-90" />
                    </div>

                    <Container className="relative z-10">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para Transformar suas Ideias em Realidade?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto text-sky-100">
                                Não importa o tamanho do seu projeto, estamos aqui para ajudar. Vamos criar algo incrível juntos!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <WhatsAppButton number="+55 71 99226-6505" text="Iniciar agora" />
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-sky-900 rounded-full"
                                    onClick={() => setActiveTab("form")}
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Enviar email
                                </Button>
                            </div>
                        </motion.div>
                    </Container>
                </section>
            </AnimatedSection>
        </div>
    );
}