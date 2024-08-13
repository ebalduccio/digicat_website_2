'use client'

import React, { useRef } from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
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

const ValueCard = ({ title, content, icon }: { title: string; content: string; icon: string }) => (
    <AnimatedSection>
        <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-4 text-sky-500">{icon}</div>
                <h3 className="text-xl font-bold mb-2 text-sky-900">{title}</h3>
                <p className="text-gray-600">{content}</p>
            </CardContent>
        </Card>
    </AnimatedSection>
);

const PartnerCard = ({ name, role, specialization, description, imageSrc }: { name: string; role: string; specialization: string; description: string; imageSrc: string }) => (
    <AnimatedSection>
        <Card className="bg-white/90 backdrop-blur-md border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20 opacity-75"></div>
            <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={150}
                    height={150}
                    className="rounded-full mb-4 border-4 border-sky-500 shadow-lg"
                />
                <h3 className="text-2xl font-bold mb-2 text-sky-900">{name}</h3>
                <p className="text-lg font-semibold text-sky-600 mb-1">{role}</p>
                <p className="text-md text-sky-400 mb-3">{specialization}</p>
                <p className="text-gray-700">{description}</p>
            </CardContent>
        </Card>
    </AnimatedSection>
);

export default function About() {
    return (
        <div className="bg-gradient-to-b from-sky-100 via-white to-sky-50">
            <section className="py-20 overflow-hidden">
                <Container>
                    <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-sky-900 leading-tight">
                                Transformando ideias em <span className="text-sky-500">realidade digital</span>
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Digicat nasceu da paixão pela <span className="text-sky-600 font-semibold">tecnologia</span> e da determinação em criar <span className="text-sky-600 font-semibold">soluções inovadoras</span>. Desde 2018, simplificamos a tecnologia, tornando ideias acessíveis para empresas e indivíduos.
                            </p>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
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

            <AnimatedSection className="py-16 bg-sky-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10"></div>
                <Container className="relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
                        Na <span className="font-digicat text-teal-300">DIGICAT</span>, acreditamos que um design <span className="text-teal-300">eficiente</span> e <span className="text-teal-300">envolvente</span> é crucial para o <span className="text-teal-300">sucesso</span> de qualquer projeto digital.
                    </h2>
                </Container>
            </AnimatedSection>

            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 opacity-50 transform -skew-y-6"></div>
                <Container className="relative z-10">
                    <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon="💡"
                            title="Inovação"
                            content="Buscamos constantemente novas ideias e abordagens."
                        />
                        <ValueCard
                            icon="🤝"
                            title="Integridade"
                            content="Agimos com honestidade e transparência."
                        />
                        <ValueCard
                            icon="🏆"
                            title="Qualidade"
                            content="Comprometemo-nos com a excelência em cada projeto."
                        />
                        <ValueCard
                            icon="🚀"
                            title="Colaboração"
                            content="Acreditamos no poder da equipe."
                        />
                    </AnimatedSection>
                </Container>
            </section>

            <section className="py-20 bg-gradient-to-r from-sky-50 to-blue-50 relative overflow-hidden">
                <Container>
                    <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="flex-1 relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <Image
                                src="/images/AboutImage2.png"
                                alt="Nossa Equipe"
                                width={600}
                                height={600}
                                className="relative z-10 drop-shadow-2xl"
                            />
                        </div>
                        <div className="flex-1 space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-sky-900 leading-tight">Nossa Equipe: <span className="text-sky-500">O Coração da Inovação</span></h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Na Digicat, nossa equipe é o motor da inovação. Composta por profissionais apaixonados e altamente qualificados, estamos sempre prontos para enfrentar novos desafios e criar soluções que impulsionam o sucesso dos nossos clientes.
                            </p>
                        </div>
                    </AnimatedSection>
                </Container>
            </section>
            <section className="py-20 relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200">
                <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                <Container className="relative z-10">
                    <AnimatedSection>
                        <h2 className="text-5xl font-bold text-center mb-12 leading-tight text-sky-900">
                            Conheça os <span className="text-sky-500">Fundadores</span> da Digicat
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <PartnerCard
                            name="Edgardo"
                            role="Fundador & Desenvolvedor Fullstack"
                            specialization="Especialista em Soluções Web Completas"
                            description="Com uma visão técnica abrangente e anos de experiência em desenvolvimento fullstack, Edgardo é o arquiteto versátil por trás de nossas soluções end-to-end. Sua expertise em tecnologias frontend e backend garante a criação de aplicações robustas, escaláveis e com experiências de usuário excepcionais."
                            imageSrc="/images/edgardo.jpg"
                        />
                        <PartnerCard
                            name="Enzo"
                            role="Co-fundador & Desenvolvedor Frontend"
                            specialization="Especialista em Interfaces de Usuário"
                            description="Enzo combina sua paixão por design com expertise em tecnologias frontend, criando interfaces intuitivas e responsivas que elevam a experiência do usuário em cada solução digital da Digicat."
                            imageSrc="/images/enzo.jpg"
                        />
                    </div>
                    <AnimatedSection className="mt-12 text-center">
                        <p className="text-xl text-sky-800 leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-lg shadow-lg">
                            Juntos, Edgardo e Enzo formam uma parceria técnica poderosa, combinando expertise fullstack e frontend especializado para criar soluções digitais completas e inovadoras. Sua sinergia impulsiona a Digicat a oferecer produtos de ponta que atendem às necessidades tecnológicas modernas, do backend ao frontend.
                        </p>
                    </AnimatedSection>
                </Container>
            </section>
        </div>
    );
}