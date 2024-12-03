'use client'

import React, { useState, useEffect, useMemo, ReactNode, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from "@/components/ui/container";
import { CheckCircle, ArrowRight, Zap, Smartphone, PenTool, TrendingUp, Target, Clock, } from 'lucide-react';
import Image from "next/legacy/image";

interface CustomImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
    className?: string;
    priority?: boolean;
    onError?: () => void;
}

// Create a memoized ImageWithFallback component
const ImageWithFallback: React.FC<CustomImageProps> = React.memo(({ src, alt, ...props }) => {
    const [imgSrc, setImgSrc] = useState<string>(src);

    const handleError = useCallback(() => {
        setImgSrc('/images/placeholder.png');
    }, []);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={handleError}
            priority
        />
    );
});

ImageWithFallback.displayName = 'ImageWithFallback';

const DevelopmentLandingPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = useMemo(() => [
        { name: 'João Oliveira', position: 'Dono de E-commerce', content: 'Antes de integrar automação e IA no meu site, eu passava horas todos os dias apenas lidando com e-mails e atendimento ao cliente. Agora, tudo isso é feito automaticamente, e eu posso focar em expandir minha empresa. É como ter uma equipe extra trabalhando 24/7.', },
        { name: 'Maria Souza', position: 'Gestora de Marketing', content: 'A automação salvou o meu tempo e, mais importante, reduziu drasticamente os erros nas minhas operações diárias. Não sei como consegui operar tanto tempo sem isso.', },
    ], []);

    const ShiningImageBackground: React.FC<{ children: ReactNode }> = React.memo(({ children }) => (
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-900 rounded-lg blur-3xl opacity-30 group-hover:opacity-40 duration-300"></div>
            <div className="relative">
                {children}
            </div>
        </div>
    ));

    ShiningImageBackground.displayName = 'ShiningImageBackground';

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <>
            <section className='bg-sky-950 w-fill'>
                <Container>
                    <div className="py-14 flex flex-col md:flex-row items-center gap-14 justify-between">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Quanto dinheiro você está deixando na mesa por uma falta de presença online?
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-sky-200 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                No cenário atual, onde o mundo é mais rápido e eficiente, ter um site responsivo e automações na sua empresa deixaram de ser diferenciais e hoje são necessidades em qualquer empresa bem sucedida.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    <ArrowRight className="mr-2 h-6 w-6" /> Descubra Como Se Destacar Online
                                </Button>
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <ShiningImageBackground>
                                <div className="relative w-full h-[300px] md:h-[600px]">
                                    <Image
                                        src='/images/futuredoor.png'
                                        alt='Porta se abrindo para um futuro brilhante'
                                        layout="fill"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-lg"
                                        priority
                                    />
                                </div>
                            </ShiningImageBackground>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='bg-gray-900 w-full'>
                <Container>
                    <section className="py-24 flex flex-col md:flex-row-reverse items-center gap-20 justify-between">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <motion.h2
                                className="text-4xl font-bold mb-8 text-sky-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Automatize Tarefas Repetitivas e Liberte seu Tempo
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-400 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Você está perdendo tempo em tarefas que podem ser automatizadas? Imagine um cenário em que suas tarefas repetitivas são executadas automaticamente, sem esforço adicional, permitindo que você se concentre no que realmente importa: crescer o seu negócio.
                            </motion.p>
                            <motion.p
                                className="text-xl text-gray-400 mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Com as soluções que oferecemos, você pode transformar seu site em uma máquina de automação, impulsionada por Inteligência Artificial, que trabalha para você 24/7.
                            </motion.p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <ShiningImageBackground>
                                <div className="relative w-full h-[300px] md:h-[600px]">
                                    <Image
                                        src='/images/aitime.png'
                                        alt='Automação de tarefas'
                                        layout='fill'
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </ShiningImageBackground>
                        </div>
                    </section>
                </Container>
            </section>

            <section className=' bg-sky-900 w-full'>
                <Container>
                    <section className="py-24">
                        <motion.h2
                            className="text-4xl font-bold text-center mb-16 text-sky-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Como Funciona?
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="bg-gray-800 border-gray-700">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-sky-200">1. Identificação das Tarefas que Consomem Seu Tempo</h3>
                                    <p className="text-gray-400">Mapeamos todas as tarefas repetitivas que você executa diariamente. Estas tarefas estão tomando tempo que você poderia usar para pensar em estratégias de crescimento?</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 border-gray-700">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-sky-200">2. Escolha das Melhores Ferramentas para o Seu Negócio</h3>
                                    <p className="text-gray-400">Selecionamos as melhores ferramentas de automação disponíveis no mercado, como Zapier e Automate.io, que se conectam diretamente ao seu site.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-800 border-gray-700">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-sky-200">3. Integração de IA para Atendimento e Mais</h3>
                                    <p className="text-gray-400">Utilizamos Inteligência Artificial para automatizar o atendimento ao cliente, qualificar leads e até mesmo realizar vendas, tudo isso diretamente no seu site.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                </Container>
            </section>

            <section className='bg-gray-900 w-full'>
                <Container>
                    <section className="py-24 flex flex-col md:flex-row items-center gap-14 justify-between">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <motion.h2
                                className="text-4xl font-bold mb-8 text-sky-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Por que Isso é Importante?
                            </motion.h2>
                            <ul className="space-y-4">
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    <CheckCircle className="h-6 w-6 text-sky-400 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-sky-200">Ganhe Tempo e Eficiência</h3>
                                        <p className="text-gray-400">Com essas automações, você não só ganha tempo, mas também aumenta a eficiência do seu negócio. Tarefas que antes demoravam horas, agora são feitas em segundos.</p>
                                    </div>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <CheckCircle className="h-6 w-6 text-sky-400 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-sky-200">Reduza Erros Humanos</h3>
                                        <p className="text-gray-400">Automatizando tarefas, você também reduz a possibilidade de erros humanos, garantindo que cada ação seja executada de forma precisa e consistente.</p>
                                    </div>
                                </motion.li>
                                <motion.li
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <CheckCircle className="h-6 w-6 text-sky-400 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-sky-200">Esteja Sempre um Passo à Frente</h3>
                                        <p className="text-gray-400">Com a automação e a IA, você terá uma vantagem competitiva no mercado. Enquanto seus concorrentes ainda estão ocupados com tarefas manuais, você estará focado em crescer, inovar e liderar o seu setor.</p>
                                    </div>
                                </motion.li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <ShiningImageBackground>
                                <div className="relative w-full h-[300px] md:h-[600px]">
                                    <ImageWithFallback
                                        src='/images/rocket.png'
                                        alt='Porta se abrindo para um futuro brilhante'
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </ShiningImageBackground>
                        </div>
                    </section>
                </Container>
            </section>

            <section className='bg-sky-900 w-full'>
                <Container>
                    <section className="py-24 flex flex-col md:flex-row-reverse items-center gap-20 justify-between">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <motion.h2
                                className="text-4xl font-bold mb-8 text-sky-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Como Você Pode Começar?
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xl font-semibold mb-4 text-sky-200">Configuração Rápida e Sem Dor de Cabeça</h3>
                                <p className="text-gray-400 mb-6">Implementar essas soluções no seu site é mais simples do que você imagina. Nossa equipe especializada cuida de toda a configuração, desde a escolha das ferramentas certas até a integração completa com o seu site.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-xl font-semibold mb-4 text-sky-200">Monitoramento e Ajustes Contínuos</h3>
                                <p className="text-gray-400 mb-6">Além disso, garantimos que tudo funcione perfeitamente e, se necessário, fazemos ajustes contínuos para otimizar os resultados. Você terá um sistema que evolui junto com o seu negócio.</p>
                            </motion.div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <ShiningImageBackground>
                                <div className="relative w-full h-[300px] md:h-[600px]">
                                    <Image
                                        src='/images/buttonpress.png'
                                        alt='Implementação fácil de automação'
                                        layout='fill'
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        style={{ objectFit: 'cover' }}
                                        className="rounded-lg"
                                    />
                                </div>
                            </ShiningImageBackground>
                        </div>
                    </section>
                </Container>
            </section>

            <section className='bg-gray-900 w-full'>
                <Container>
                    <section className="py-24">
                        <motion.h2
                            className="text-4xl font-bold text-center mb-16 text-sky-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Depoimentos de Quem Já Transformou Seu Negócio
                        </motion.h2>
                        <div className="max-w-4xl mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg shadow-xl"
                                >
                                    <p className="text-xl italic text-gray-300 mb-4">&quot;{testimonials[currentTestimonial].content}&quot;</p>
                                    <div className="flex justify-end">
                                        <div>
                                            <p className="text-lg font-semibold text-sky-200">{testimonials[currentTestimonial].name}</p>
                                            <p className="text-sky-400">{testimonials[currentTestimonial].position}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </section>
                </Container>
            </section>
            <section className='bg-gray-900 w-full'>
                <Container>
                    <section className="py-24">
                        <h2 className="text-4xl font-bold text-center mb-16 text-sky-300">Benefícios que Você Não Pode Ignorar</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: Zap, title: "Aumento da Eficiência", description: "Tarefas automáticas que reduzem a carga de trabalho e aceleram o crescimento." },
                                { icon: Target, title: "Redução de Erros", description: "Precisão em cada ação, minimizando falhas humanas." },
                                { icon: TrendingUp, title: "Foco no Crescimento", description: "Deixe as tarefas repetitivas para a IA e concentre-se no que realmente importa." },
                                { icon: Clock, title: "Suporte Contínuo", description: "Estamos aqui para garantir que sua automação funcione sem problemas, sempre." }
                            ].map((benefit, index) => (
                                <Card key={index} className="bg-gray-800 border-gray-700">
                                    <CardContent className="p-6">
                                        <benefit.icon className="h-12 w-12 text-sky-400 mb-4" />
                                        <h3 className="text-xl font-semibold mb-2 text-sky-200">{benefit.title}</h3>
                                        <p className="text-gray-400">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </Container>
            </section>
            <Container>
                <section className="py-24 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-sky-300">Comece Agora e Veja a Diferença</h2>
                    <p className="text-xl mb-12 max-w-2xl text-gray-400 mx-auto">Transforme seu negócio, liberte seu tempo e maximize seus resultados com automação e IA. Não espere mais – o futuro do seu negócio começa agora.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                            <Smartphone className="mr-2 h-6 w-6" /> Chamar no WhatsApp
                        </Button>
                        <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                            <PenTool className="mr-2 h-6 w-6" /> Receber Análise Grátis
                        </Button>
                    </div>
                </section>
            </Container>

        </>
    );
};

export default DevelopmentLandingPage;