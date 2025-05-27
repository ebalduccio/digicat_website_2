'use client'

import React, { useRef, useState, useEffect } from 'react';
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Types
interface TeamMember {
    id: number;
    name: string;
    role: string;
    specialization: string;
    description: string;
    longDescription: string;
    imageSrc: string;
    skills: string[];
}

// Animated Components
const FadeIn = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 50
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const directionValues = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { y: 0, x: distance },
        right: { y: 0, x: -distance }
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: directionValues[direction].y,
                x: directionValues[direction].x
            }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, x: 0 }
                    : {
                        opacity: 0,
                        y: directionValues[direction].y,
                        x: directionValues[direction].x
                    }
            }
            transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ParallaxText = ({
    children,
    speed = 50
}: {
    children: React.ReactNode;
    speed?: number;
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -speed]);

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

const FloatingElement = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
};

const CircularTeamImage = () => {
    return (
        <div className="relative mx-auto max-w-md lg:max-w-full">
            {/* Efeito de glow ao redor */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-600/20 to-blue-600/30 blur-2xl"></div>

            {/* Container circular com borda */}
            <div className="relative rounded-full overflow-hidden border-4 border-sky-500/30 shadow-2xl aspect-square">
                {/* Container da imagem com proporção 1:1 */}
                <div className="w-full h-full relative overflow-hidden">
                    <Image
                        src="/images/digigatos.jpg"
                        alt="Nossa Equipe"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="transform scale-125 transition-transform duration-700"
                    />
                </div>

                {/* Overlay gradiente (mantido dentro do círculo) */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>
            </div>

            {/* Conteúdo na parte inferior (fora do círculo) - separado do container circular */}
            <div className="mt-6">
                <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-4 border border-sky-500/20">
                    <p className="text-sky-300 font-semibold mb-1">Equipe Digicat</p>
                    <p className="text-gray-300 text-sm">Apaixonados por tecnologia, comprometidos com seu sucesso</p>
                </div>
            </div>
        </div>
    );
}

const GlowingBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`relative group ${className}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-600 to-blue-700 rounded-xl opacity-30 blur-sm group-hover:opacity-70 transition duration-1000"></div>
            <div className="relative">
                {children}
            </div>
        </div>
    );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <GlowingBorder>
                <Card
                    className="backdrop-blur-sm bg-gray-800/40 border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
                >
                    <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-sky-300 group-hover:text-sky-200 transition-colors duration-300">
                            {member.name}
                        </h3>

                        <div className="mt-2 mb-3">
                            <p className="text-lg font-semibold text-sky-400">{member.role}</p>
                            <p className="text-md text-sky-500 italic">{member.specialization}</p>
                        </div>

                        <p className="text-gray-300 my-4 flex-grow">{member.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {member.skills.slice(0, 3).map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-sky-900/50 text-sky-300 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                            {member.skills.length > 3 && (
                                <span className="px-3 py-1 bg-sky-900/30 text-sky-400 rounded-full text-sm">
                                    +{member.skills.length - 3}
                                </span>
                            )}
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-sky-400 hover:text-sky-300 hover:bg-sky-950/50 mt-auto self-start group flex items-center"
                            onClick={() => setIsOpen(true)}
                        >
                            <span>Ver mais</span>
                            <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </CardContent>
                </Card>
            </GlowingBorder>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            ref={cardRef}
                            className="bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl border border-sky-800/30"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25 }}
                        >
                            <div className="relative p-6">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-4 top-4 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <div className="sm:w-1/3 flex flex-col items-center">
                                        {/* <div className="relative w-32 h-32 rounded-xl overflow-hidden mb-4 border-2 border-sky-500/20">
                                            <Image
                                                src={member.imageSrc}
                                                alt={member.name}
                                                layout="fill"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div> */}

                                        <h3 className="text-xl font-bold text-sky-300 text-center">{member.name}</h3>
                                        <p className="text-md font-medium text-sky-400 text-center">{member.role}</p>
                                        <p className="text-sm text-sky-500 text-center italic mb-4">{member.specialization}</p>

                                        <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                            {member.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-sky-900/50 text-sky-300 rounded-full text-xs"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="sm:w-2/3">
                                        <h4 className="text-lg font-semibold text-sky-300 mb-3">Sobre {member.name.split(' ')[0]}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{member.longDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = Math.min(value, 9999);
        const incrementTime = (duration * 1000) / end;

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
        }, incrementTime);

        return () => {
            clearInterval(timer);
        };
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const DecorativeBlur = ({ className = "" }: { className?: string }) => (
    <div
        className={`absolute rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70 ${className}`}
    ></div>
);

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Edgardo Balduccio",
        role: "Fundador & Desenvolvedor Fullstack",
        specialization: "Especialista em Soluções Web Completas",
        description: "Edgardo lidera nossa equipe técnica com uma visão abrangente e anos de experiência.",
        longDescription: "Edgardo lidera nossa equipe técnica com uma visão abrangente e mais de uma década de experiência no desenvolvimento de soluções web. Sua dedicação em criar aplicações robustas e escaláveis, combinada com um profundo conhecimento em arquitetura de software, tem sido fundamental para o sucesso da Digicat. Sua abordagem metódica e inovadora garante que cada projeto seja entregue com excelência técnica e valor agregado para nossos clientes.",
        imageSrc: "/images/edgardo.jpg",
        skills: ["React", "Node.js", "Express", "Python", "PHP", "MySQL"]
    },
    {
        id: 2,
        name: "Enzo Balduccio",
        role: "Co-fundador & Desenvolvedor Frontend",
        specialization: "Especialista em Interfaces de Usuário",
        description: "A paixão de Enzo por design e sua expertise em tecnologias frontend são fundamentais para criar experiências excepcionais.",
        longDescription: "A paixão de Enzo por design e sua expertise em tecnologias frontend são fundamentais para criar experiências de usuário que não apenas impressionam visualmente, mas também impulsionam o engajamento e as conversões. Com um olhar aguçado para detalhes e profundo conhecimento em UX/UI, Enzo transforma conceitos complexos em interfaces intuitivas e atraentes. Sua abordagem centrada no usuário garante que cada projeto não apenas atenda, mas supere as expectativas dos clientes.",
        imageSrc: "/images/enzo.jpg",
        skills: ["React", "Next.js", "TailwindCSS", "Figma", "UX/UI", "Frontend Architecture"]
    },
    {
        id: 3,
        name: "Thiago Rizzone",
        role: "Gestor de Tráfego & Copywriter",
        specialization: "Especialista em Marketing Digital",
        description: "Thiago é o motor por trás de nossas estratégias de marketing digital e comunicação efetiva.",
        longDescription: "Thiago é o motor por trás de nossas estratégias de marketing digital, combinando análise de dados com criatividade para desenvolver campanhas que geram resultados mensuráveis. Sua experiência em gestão de tráfego pago e copywriting estratégico permite que nossos clientes não apenas alcancem seu público-alvo, mas também estabeleçam conexões significativas que se convertem em resultados tangíveis. Sua abordagem orientada por dados garante que cada campanha seja otimizada para máximo retorno sobre investimento.",
        imageSrc: "/images/thiago.jpg",
        skills: ["Meta Ads", "Google Ads", "Copywriting", "Analytics", "SEO", "Email Marketing"]
    }
];

export default function About() {
    const [activeSection, setActiveSection] = useState<string>('hero');
    const sectionRefs = {
        hero: useRef<HTMLDivElement>(null),
        mission: useRef<HTMLDivElement>(null),
        history: useRef<HTMLDivElement>(null),
        numbers: useRef<HTMLDivElement>(null),
        growing: useRef<HTMLDivElement>(null),
        team: useRef<HTMLDivElement>(null),
        benefits: useRef<HTMLDivElement>(null),
    };

    // Intersection observer for sections
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        const sectionEntries = Object.entries(sectionRefs);

        sectionEntries.forEach(([id, ref]) => {
            if (!ref.current) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                { threshold: 0.3 }
            );

            observer.observe(ref.current);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 relative overflow-hidden">
            {/* Navigation Indicator */}
            <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
                <div className="flex flex-col gap-4">
                    {Object.entries(sectionRefs).map(([id, ref]) => (
                        <button
                            key={id}
                            className="group flex items-center"
                            onClick={() => {
                                ref.current?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span
                                className={`w-3 h-3 rounded-full mr-2 transition-all duration-300 
                                    ${activeSection === id
                                        ? 'bg-sky-400 scale-125'
                                        : 'bg-gray-600 group-hover:bg-sky-600'
                                    }`}
                            ></span>
                            <span
                                className={`text-xs font-medium transition-all duration-300 
                                    ${activeSection === id
                                        ? 'opacity-100 text-sky-400'
                                        : 'opacity-0 group-hover:opacity-100 text-gray-400'
                                    }`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden">
                <DecorativeBlur className="w-96 h-96 bg-sky-900/20 top-0 -left-48" />
                <DecorativeBlur className="w-96 h-96 bg-blue-800/20 bottom-0 -right-48 animation-delay-2000" />
                <DecorativeBlur className="w-64 h-64 bg-sky-600/10 top-1/4 right-1/3 animation-delay-4000" />
                <DecorativeBlur className="w-80 h-80 bg-indigo-900/15 bottom-1/4 left-1/4 animation-delay-3000" />
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-950/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-24 space-y-36">
                {/* Hero Section */}
                <section ref={sectionRefs.hero} className="min-h-[90vh] flex items-center">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 order-2 lg:order-1">
                                <FadeIn direction="left" delay={0.1}>
                                    <div className="inline-block px-4 py-2 bg-sky-950/60 border border-sky-500/20 rounded-full mb-4">
                                        <p className="text-sky-400 font-medium">Conheça nossa história</p>
                                    </div>
                                </FadeIn>

                                <FadeIn direction="left" delay={0.3}>
                                    <h1 className="text-6xl lg:text-7xl font-bold text-sky-300 leading-tight">
                                        Quem <span className="relative">
                                            somos
                                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-sky-500/40" viewBox="0 0 200 8">
                                                <path d="M 0 5 C 40 0, 60 8, 200 3" stroke="currentColor" strokeWidth="3" fill="none" />
                                            </svg>
                                        </span>
                                    </h1>
                                </FadeIn>

                                <FadeIn direction="left" delay={0.5}>
                                    <p className="text-xl text-gray-300 leading-relaxed">
                                        A <span className='font-bold text-sky-400'>Digicat</span> tem um propósito:
                                        Aproximar sua marca dos resultados que você sempre sonhou,
                                        com soluções digitais criativas e eficientes.
                                    </p>
                                </FadeIn>

                                <FadeIn direction="left" delay={0.7}>
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <Link href="/contact">
                                            <Button
                                                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-6 text-lg font-medium rounded-xl group"
                                                size="lg"
                                            >
                                                <span>Iniciar projeto</span>
                                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </FadeIn>
                            </div>

                            <FadeIn direction="right" delay={0.4} className="order-1 lg:order-2">
                                <FloatingElement>
                                    <CircularTeamImage />
                                </FloatingElement>
                            </FadeIn>
                        </div>
                    </Container>
                </section>

                {/* Mission Section */}
                <section ref={sectionRefs.mission}>
                    <Container>
                        <FadeIn>
                            <div className="max-w-5xl mx-auto">
                                <Card className="overflow-hidden border-none shadow-2xl">
                                    <div className="relative">
                                        {/* Gradient background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-950/95 to-gray-900/95"></div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

                                        <CardContent className="relative p-12 text-center space-y-8">
                                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-950/60 border border-sky-500/30 mb-4">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 11L20 7" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 11V22" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 11L4 7" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>

                                            <h2 className="text-5xl md:text-6xl font-bold text-sky-300 leading-tight">
                                                Nossa missão é <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">clara</span>.
                                            </h2>

                                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                                Acreditamos não apenas em crescer mais, mas em
                                                <span className="relative mx-2 text-sky-400">
                                                    crescer melhor
                                                    <svg className="absolute -bottom-1 left-0 w-full h-2 text-sky-500/40" viewBox="0 0 200 8">
                                                        <path d="M 0 5 C 40 0, 60 8, 200 3" stroke="currentColor" strokeWidth="3" fill="none" />
                                                    </svg>
                                                </span>.
                                                E isso significa alinhar o sucesso do seu próprio negócio com o
                                                sucesso dos nossos clientes.
                                            </p>

                                            <p className="text-xl text-sky-400 font-semibold">
                                                Não descansamos até que você veja os resultados de perto.
                                            </p>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </FadeIn>
                    </Container>
                </section>

                {/* History Section */}
                <section ref={sectionRefs.history}>
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
                            <div className="lg:col-span-2">
                                <FadeIn direction="left">
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-gradient-to-r from-sky-600/20 to-blue-600/20 blur-xl rounded-full"></div>
                                        <div className="relative rounded-2xl overflow-hidden">
                                            <div className="w-full aspect-square relative">
                                                <Image
                                                    src="/images/AboutImage2.png"
                                                    alt="Nossa História"
                                                    layout="fill"
                                                    style={{ objectFit: 'cover' }}
                                                    className="scale-105 hover:scale-100 transition-transform duration-700"
                                                />
                                            </div>

                                            {/* Caption */}
                                            <div className="absolute bottom-0 w-full p-6">
                                                <p className="text-sm text-sky-300 bg-gray-900/70 backdrop-blur-sm rounded-lg py-2 px-4 inline-block">
                                                    Desde 2023 transformando negócios
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>

                            <div className="lg:col-span-3 space-y-8">
                                <FadeIn direction="right" delay={0.2}>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="h-px bg-sky-500/30 w-12"></div>
                                            <span className="text-sky-400 uppercase text-sm font-semibold tracking-wider">Nossa História</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-sky-300 leading-tight">
                                            Como tudo começou...
                                        </h2>
                                    </div>
                                </FadeIn>

                                <div className="space-y-6">
                                    <FadeIn direction="right" delay={0.3}>
                                        <Card className="bg-gray-800/40 border-none shadow-lg hover:shadow-xl transition-all duration-500">
                                            <CardContent className="p-6">
                                                <p className="text-lg text-gray-300 leading-relaxed">
                                                    Em 2023, três amantes da tecnologia e do marketing digital identificaram uma mudança profunda na forma como as empresas se conectam com seus clientes. Eles perceberam que empresários e gestores não queriam mais ferramentas complicadas ou abordagens genéricas. <span className="text-sky-400 font-semibold">Eles buscavam soluções simples, integradas e que realmente trouxessem resultados claros. Inspirados por essa necessidade, nasceu a DIGICAT.</span>
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </FadeIn>

                                    <FadeIn direction="right" delay={0.4}>
                                        <Card className="bg-gray-800/40 border-none shadow-lg hover:shadow-xl transition-all duration-500">
                                            <CardContent className="p-6">
                                                <p className="text-lg text-gray-300 leading-relaxed">
                                                    Desde então, a DIGICAT evoluiu para oferecer mais do que apenas serviços digitais. Construímos um ecossistema integrado de soluções, projetado para criar uma experiência fluida e eficiente que os empresários modernos esperam. Nosso processo é pensado minuciosamente para entregar o melhor para aqueles que escolhem a Digicat na sua empresa.
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </FadeIn>

                                    <FadeIn direction="right" delay={0.5}>
                                        <Card className="bg-gray-800/40 border-none shadow-lg hover:shadow-xl transition-all duration-500">
                                            <CardContent className="p-6">
                                                <p className="text-lg text-gray-300 leading-relaxed">
                                                    Sob a liderança de uma equipe de especialistas apaixonados por inovação, <span className="text-sky-400 font-semibold">a DIGICAT ajuda organizações em crescimento a automatizar tarefas, aumentar sua presença online e atingir novos patamares de sucesso</span>. Com a tecnologia certa e a abordagem personalizada, garantimos que nossos parceiros estejam sempre à frente no mercado.
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Numbers Section */}
                <section ref={sectionRefs.numbers} className="py-16 relative">
                    <Container>
                        <FadeIn>
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-sky-300 inline-block relative">
                                    Digicat em números
                                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-sky-500/40" viewBox="0 0 200 8">
                                        <path d="M 0 5 C 40 0, 60 8, 200 3" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </svg>
                                </h2>
                            </div>
                        </FadeIn>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    number: 8,
                                    suffix: "+",
                                    label: "Países onde já operamos",
                                    icon: (
                                        <svg className="w-10 h-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2.5M15 11h2a2 2 0 012 2v1a2 2 0 002 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    ),
                                    delay: 0.2
                                },
                                {
                                    number: 40,
                                    suffix: "+",
                                    label: "Empresas crescendo com novas tecnologias",
                                    icon: (
                                        <svg className="w-10 h-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    delay: 0.4
                                },
                                {
                                    number: 100,
                                    suffix: "+",
                                    label: "Acessos diários no Blog Digital",
                                    icon: (
                                        <svg className="w-10 h-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ),
                                    delay: 0.6
                                }
                            ].map((stat, index) => (
                                <FadeIn key={index} delay={stat.delay}>
                                    <GlowingBorder>
                                        <Card className="bg-gray-800/50 border-none shadow-lg h-full">
                                            <CardContent className="p-8 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-900/30 mb-6">
                                                    {stat.icon}
                                                </div>
                                                <h3 className="text-6xl font-bold text-sky-400 mb-3">
                                                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                                                </h3>
                                                <p className="text-xl text-gray-300">{stat.label}</p>
                                            </CardContent>
                                        </Card>
                                    </GlowingBorder>
                                </FadeIn>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Growing Section */}
                <section ref={sectionRefs.growing}>
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <FadeIn>
                                <h2 className="text-4xl md:text-5xl font-bold text-sky-300 text-center mb-16">
                                    Crescendo com <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">Responsabilidade</span>
                                </h2>
                            </FadeIn>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                <FadeIn direction="left">
                                    <Card className="bg-gray-800/40 border-none shadow-xl h-full">
                                        <CardContent className="p-8">
                                            <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 rounded-full bg-sky-900/40 flex items-center justify-center mr-4">
                                                    <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-2xl font-bold text-sky-300">Nossa Missão</h3>
                                            </div>
                                            <div className="space-y-4 text-gray-300">
                                                <p className="text-lg leading-relaxed">
                                                    A DigiCat está comprometida em transformar sonhos digitais em realidades palpáveis, construindo pontes entre marcas e pessoas, e impulsionando negócios para um futuro mais próspero. Nosso foco vai além de resultados – buscamos impacto, inovação e parcerias duradouras.
                                                </p>
                                                <p className="text-lg leading-relaxed">
                                                    Com cada estratégia personalizada, cada site impecável e cada campanha cuidadosamente planejada, reafirmamos nossa missão: crescer junto com você, de forma ética, sustentável e com propósito. Porque, para nós, sucesso só faz sentido quando compartilhado.
                                                </p>
                                                <p className="text-lg leading-relaxed">
                                                    Temos um compromisso com seu resultado e nos dedicaremos ao máximo para que sua empresa seja a próxima a crescer todos os dias com a internet e <span className="text-sky-400 font-semibold">obter resultados expressivos</span> no menor espaço de tempo possível.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </FadeIn>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Liderança Digital",
                                            content: "Você não quer ver seus concorrentes ultrapassarem seu negócio, certo? A inserção digital não só mantém você no jogo, mas coloca você na liderança com estratégias que funcionam como alavancas na sua empresa.",
                                            icon: (
                                                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                            ),
                                            delay: 0.2
                                        },
                                        {
                                            title: "Estratégia SEO Eficiente",
                                            content: "É sobre ser encontrado facilmente pelo público, utilizando as estratégias certas. É sobre priorizar a experiência do usuário, desde a busca até a visita no seu site.",
                                            icon: (
                                                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            ),
                                            delay: 0.4
                                        },
                                        {
                                            title: "Otimização Especializada",
                                            content: "Compreendemos que fazer a otimização de sites sem nenhum tipo de orientação, não é algo tão simples. Afinal de contas, somente o Google possui mais de 200 fatores de ranqueamento.",
                                            icon: (
                                                <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                            ),
                                            delay: 0.6
                                        }
                                    ].map((card, index) => (
                                        <FadeIn key={index} direction="right" delay={card.delay}>
                                            <GlowingBorder>
                                                <Card className="bg-gray-800/40 border-none shadow-lg hover:shadow-xl transition-all duration-500">
                                                    <CardContent className="p-6">
                                                        <div className="flex items-start">
                                                            <div className="flex-shrink-0 mr-4">
                                                                <div className="w-12 h-12 rounded-full bg-sky-900/40 flex items-center justify-center">
                                                                    {card.icon}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-bold text-sky-400 mb-3">{card.title}</h3>
                                                                <p className="text-gray-300">{card.content}</p>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </GlowingBorder>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Team/Services Hub Section */}
                <section ref={sectionRefs.team}>
                    <Container>
                        <div className="max-w-7xl mx-auto">
                            <FadeIn>
                                <div className="text-center mb-16 space-y-6">
                                    <div className="inline-block px-4 py-2 bg-sky-950/60 border border-sky-500/20 rounded-full mb-2">
                                        <p className="text-sky-400 font-medium">Nossos Especialistas</p>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-bold text-sky-300">
                                        HUB DE SERVIÇOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">FORNECIDOS</span>
                                    </h2>

                                    <h3 className="text-2xl md:text-3xl text-sky-400">
                                        Serviços Exclusivos para liderar o Mercado
                                    </h3>

                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Nossa abordagem estratégica é feita sob medida para quem busca mais do que apenas sobreviver –
                                        nós preparamos você para dominar. Com nosso plano passo a passo, garantimos
                                        resultados ou continuamos trabalhando para você sem custos adicionais.
                                    </p>
                                </div>
                            </FadeIn>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {teamMembers.map((member, index) => (
                                    <FadeIn key={member.id} delay={0.2 * index}>
                                        <TeamMemberCard member={member} />
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Benefits Section */}
                <section ref={sectionRefs.benefits} className="pb-32">
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <FadeIn>
                                <div className="text-center mb-16 space-y-4">
                                    <h2 className="text-4xl md:text-5xl font-bold text-sky-300 mb-6">
                                        Benefícios <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">Claros e Diretos</span>
                                    </h2>
                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Você terá 100% do nosso esforço dedicado ao seu negócio. Entregamos resultados a
                                        empresários que não aceitam ficar para trás na revolução digital e irão fazer parte da Vanguarda.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn>
                                <Card className="bg-gray-800/40 border-none shadow-2xl overflow-hidden">
                                    <div className="relative">
                                        {/* Background gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 via-blue-950/50 to-gray-900/20"></div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
                                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

                                        <CardContent className="relative p-8 md:p-12">
                                            <div className="text-center mb-12">
                                                <h3 className="text-2xl md:text-3xl font-bold text-sky-300 mb-6">
                                                    Não perca mais tempo e leve sua empresa para o próximo nível
                                                </h3>
                                                <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                                                    Obtenha resultados reais, sem precisar perder seu tempo ou entender de
                                                    tecnologia. Estamos aqui para fazer o trabalho pesado enquanto você só colhe os frutos.
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                                <div className="space-y-6">
                                                    <h4 className="text-xl text-sky-300 font-semibold flex items-center">
                                                        <svg className="w-6 h-6 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        O que você ganha:
                                                    </h4>

                                                    <div className="space-y-4">
                                                        {[
                                                            "Obtenha 100% do retorno de investimento",
                                                            "Soluções Personalizadas e Sob medida",
                                                            "Comunicação Clara e acessível",
                                                            "Ajustes e reparos do serviço conforme necessário"
                                                        ].map((benefit, index) => (
                                                            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border-l-4 border-green-500">
                                                                <span className="text-green-400 text-xl flex-shrink-0">✅</span>
                                                                <span className="text-gray-300">{benefit}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <h4 className="text-xl text-sky-300 font-semibold flex items-center">
                                                        <svg className="w-6 h-6 mr-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                        </svg>
                                                        O que você não precisa:
                                                    </h4>

                                                    <div className="space-y-4">
                                                        {[
                                                            "Sem tomar seu tempo",
                                                            "Sem precisar entender de tecnologia"
                                                        ].map((benefit, index) => (
                                                            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border-l-4 border-red-500">
                                                                <span className="text-red-400 text-xl flex-shrink-0">❌</span>
                                                                <span className="text-gray-300">{benefit}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </Card>
                            </FadeIn>

                            <FadeIn delay={0.3} className="text-center mt-16">
                                <Link href="/contact">
                                    <GlowingBorder className="inline-block">
                                        <Button
                                            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg font-medium rounded-xl group flex items-center"
                                            size="lg"
                                        >
                                            <span>Quero fazer parte da vanguarda digital</span>
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </GlowingBorder>
                                </Link>
                            </FadeIn>
                        </div>
                    </Container>
                </section>
            </div>

            {/* Floating Action Button for scrolling to top */}
            <AnimatePresence>
                {activeSection !== 'hero' && (
                    <motion.button
                        className="fixed right-6 bottom-6 z-40 bg-sky-500 hover:bg-sky-600 text-white rounded-full p-3 shadow-lg"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}