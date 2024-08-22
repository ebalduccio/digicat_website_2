'use client'

import React, { useRef } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { motion, useInView } from 'framer-motion';
import { Target, Rocket, LineChart, Zap } from 'lucide-react';

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

const ValueCard = ({ title, content, Icon }: { title: string; content: string; Icon: React.ElementType }) => (
    <AnimatedSection>
        <Card className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
                <Icon className="w-12 h-12 mb-4 text-sky-400" />
                <h3 className="text-xl font-bold mb-2 text-sky-300">{title}</h3>
                <p className="text-gray-300">{content}</p>
            </CardContent>
        </Card>
    </AnimatedSection>
);

const PartnerCard = ({ name, role, specialization, description, imageSrc }: { name: string; role: string; specialization: string; description: string; imageSrc: string }) => (
    <AnimatedSection>
        <Card className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 to-blue-900/50 opacity-75"></div>
            <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={150}
                    height={150}
                    className="rounded-full mb-4 border-4 border-sky-500 shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2 text-sky-300">{name}</h3>
                <p className="text-lg font-semibold text-sky-400 mb-1">{role}</p>
                <p className="text-md text-sky-500 mb-3">{specialization}</p>
                <p className="text-gray-300">{description}</p>
            </CardContent>
        </Card>
    </AnimatedSection>
);

export default function About() {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white">
            <section className="py-20 overflow-hidden">
                <Container>
                    <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-sky-300 leading-tight">
                                Transformando ideias em <span className="text-sky-400">resultados excepcionais</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Na Digicat, não nos contentamos com o comum. Nossa paixão pela <span className="text-sky-400 font-semibold">inovação</span> e nosso compromisso com o <span className="text-sky-400 font-semibold">sucesso do cliente</span> nos impulsionam a criar soluções digitais que verdadeiramente transformam negócios.
                            </p>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <Image
                                src="/images/AboutImage1.png"
                                alt="Equipe Digicat"
                                width={500}
                                height={500}
                                className="relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </AnimatedSection>
                </Container>
            </section>

            <AnimatedSection className="py-16 bg-gradient-to-r from-gray-900 to-gray-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5"></div>
                <Container className="relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
                        Na <span className="font-digicat text-sky-400">DIGICAT</span>, nosso compromisso é entregar <span className="text-sky-400">resultados tangíveis</span> e superar as <span className="text-sky-400">expectativas dos nossos clientes</span> em cada projeto.
                    </h2>
                </Container>
            </AnimatedSection>

            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 to-blue-950 opacity-50 transform -skew-y-6"></div>
                <Container className="relative z-10">
                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            Icon={Zap}
                            title="Dedicação Total"
                            content="Comprometemo-nos 100% com o sucesso de cada projeto, indo além do esperado."
                        />
                        <ValueCard
                            Icon={Target}
                            title="Foco em Resultados"
                            content="Nossa prioridade é entregar soluções que impulsionem seu negócio de forma mensurável."
                        />
                        <ValueCard
                            Icon={Rocket}
                            title="Inovação Constante"
                            content="Buscamos continuamente novas tecnologias e abordagens para manter nossos clientes à frente."
                        />
                        <ValueCard
                            Icon={LineChart}
                            title="Crescimento Contínuo"
                            content="Evoluímos constantemente nossas habilidades para oferecer sempre o melhor."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            <section className="py-20 bg-gradient-to-r from-gray-950 to-blue-950 relative overflow-hidden">
                <Container>
                    <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <Image
                                src="/images/AboutImage2.png"
                                alt="Nossa Equipe"
                                width={600}
                                height={600}
                                className="relative z-10 drop-shadow-2xl"
                            />
                        </div>
                        <div className="flex-1 space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-sky-300 leading-tight">Nossa Equipe: <span className="text-sky-400">O Motor da Excelência</span></h2>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Na Digicat, nossa equipe é formada por profissionais apaixonados e altamente qualificados. Estamos sempre prontos para enfrentar desafios, buscando incansavelmente as melhores soluções para impulsionar o sucesso dos nossos clientes.
                            </p>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-950 to-blue-950">
                <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-950 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-950 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                <Container className="relative z-10">
                    <AnimatedSection>
                        <h2 className="text-5xl font-bold text-center mb-12 leading-tight text-sky-300">
                            Conheça os <span className="text-sky-400">Fundadores</span> da Digicat
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <PartnerCard
                            name="Edgardo Balduccio"
                            role="Fundador & Desenvolvedor Fullstack"
                            specialization="Especialista em Soluções Web Completas"
                            description="Edgardo lidera nossa equipe técnica com uma visão abrangente e anos de experiência. Sua dedicação em criar soluções robustas e escaláveis é o que impulsiona a Digicat a entregar resultados excepcionais em cada projeto."
                            imageSrc="/images/edgardo.jpg"
                        />
                        <PartnerCard
                            name="Enzo Balduccio"
                            role="Co-fundador & Desenvolvedor Frontend"
                            specialization="Especialista em Interfaces de Usuário"
                            description="A paixão de Enzo por design e sua expertise em tecnologias frontend são fundamentais para criar experiências de usuário que não apenas impressionam visualmente, mas também impulsionam o engajamento e as conversões."
                            imageSrc="/images/enzo.jpg"
                        />
                        <PartnerCard
                            name="Thiago Rizzone"
                            role="Gestor de Tráfego & Copywriter"
                            specialization="Especialista em Marketing Digital"
                            description="Thiago é o motor por trás de nossas estratégias de marketing digital. Sua habilidade em criar campanhas impactantes e conteúdo persuasivo garante que nossas soluções não apenas funcionem perfeitamente, mas também alcancem e engajem efetivamente o público-alvo."
                            imageSrc="/images/thiago.jpg"
                        />
                    </div>
                    <AnimatedSection className="mt-12 text-center">
                        <p className="text-xl text-sky-300 leading-relaxed backdrop-blur-sm bg-blue-900/30 p-6 rounded-lg shadow-lg">
                            Juntos, Edgardo, Enzo e Thiago formam uma equipe multidisciplinar poderosa, combinando expertise técnica, design de interface e marketing digital. Esta sinergia única permite à Digicat oferecer soluções digitais completas e inovadoras, garantindo que cada projeto não apenas atenda, mas supere as expectativas dos nossos clientes.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}