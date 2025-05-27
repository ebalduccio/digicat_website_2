'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
    Globe,
    Cog,
    Target,
    Bot,
    ArrowRight,
    CheckCircle,
    ExternalLink,
    MousePointer
} from 'lucide-react';
import { cn } from "@/lib/utils";
import Link from 'next/link';

// Tipos
interface BenefitItem {
    id: string;
    title: string;
    icon: React.ElementType;
    description: string;
    color: string;
    stats: {
        value: string;
        label: string;
    };
}

// Dados
const benefitItems: BenefitItem[] = [
    {
        id: 'visibility',
        title: 'Visibilidade online',
        icon: Globe,
        description: 'Seja encontrado por quem realmente procura pelos seus produtos e serviços.',
        color: 'blue',
        stats: {
            value: '78%',
            label: 'aumento em leads qualificados'
        }
    },
    {
        id: 'automation',
        title: 'Automação de processos',
        icon: Cog,
        description: 'Reduza custos e erros com fluxos de trabalho inteligentes e eficientes.',
        color: 'emerald',
        stats: {
            value: '3x',
            label: 'mais produtividade operacional'
        }
    },
    {
        id: 'differentiation',
        title: 'Diferenciação competitiva',
        icon: Target,
        description: 'Destaque-se no mercado com experiências digitais superiores.',
        color: 'amber',
        stats: {
            value: '64%',
            label: 'dos clientes escolhem por diferenciação'
        }
    },
    {
        id: 'ai-assistants',
        title: 'Atendentes de IA',
        icon: Bot,
        description: 'Ofereça suporte personalizado 24/7 com assistentes virtuais avançados.',
        color: 'purple',
        stats: {
            value: '92%',
            label: 'de satisfação em atendimentos'
        }
    },
];

// Componente Mouse Follow para efeito imersivo
const MouseFollowLight: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Inicializa tamanho da janela
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calcula posição relativa para o gradiente radial
    const relativeX = mousePosition.x / windowSize.width * 100;
    const relativeY = mousePosition.y / windowSize.height * 100;

    return (
        <div
            className="absolute inset-0 opacity-60 pointer-events-none z-0"
            style={{
                background: `radial-gradient(800px circle at ${relativeX}% ${relativeY}%, rgba(56, 189, 248, 0.1), transparent 40%)`
            }}
        />
    );
};

// Componente de Problema/Solução
const ProblemSolutionToggle: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

    return (
        <div className="relative mb-16 mx-auto max-w-xl">
            <div className="flex p-1 bg-gray-800/70 backdrop-blur-sm rounded-full border border-gray-700/50 relative z-10">
                <button
                    onClick={() => setActiveTab('problem')}
                    className={cn(
                        "relative flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300",
                        activeTab === 'problem' ? "text-gray-900" : "text-gray-400 hover:text-gray-300"
                    )}
                >
                    O Problema
                    {activeTab === 'problem' && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
                            layoutId="tabBackground"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            style={{ zIndex: -1 }}
                        />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('solution')}
                    className={cn(
                        "relative flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300",
                        activeTab === 'solution' ? "text-gray-900" : "text-gray-400 hover:text-gray-300"
                    )}
                >
                    A Solução
                    {activeTab === 'solution' && (
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                            layoutId="tabBackground"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            style={{ zIndex: -1 }}
                        />
                    )}
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'problem' ? (
                    <motion.div
                        key="problem"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Empresas sem presença digital forte estão <span className="text-red-400">perdendo 73% dos clientes</span> para concorrentes online
                        </h3>
                        <p className="text-gray-400">
                            A nova geração de consumidores pesquisa online antes de qualquer decisão de compra.
                            Sem uma estratégia digital eficaz, sua empresa está invisível para milhares de potenciais clientes.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        key="solution"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="mt-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Transformação digital <span className="text-sky-400">completa e personalizada</span> para o seu negócio
                        </h3>
                        <p className="text-gray-400">
                            Nossa estratégia integrada combina presença online, automação de processos e inteligência artificial
                            para criar uma vantagem competitiva única e duradoura para seu negócio.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Componente de destaque dos benefícios
const BenefitCard: React.FC<BenefitItem & { index: number }> = ({
    id,
    title,
    icon: Icon,
    description,
    color,
    stats,
    index
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });
    const [isHovered, setIsHovered] = useState(false);

    // Mapeando cores para classes do Tailwind
    const colorMap: Record<string, { bg: string, text: string, border: string, glow: string }> = {
        blue: {
            bg: "from-blue-500/20 to-blue-600/20",
            text: "text-blue-400",
            border: "border-blue-500/30",
            glow: "bg-blue-500/20"
        },
        emerald: {
            bg: "from-emerald-500/20 to-emerald-600/20",
            text: "text-emerald-400",
            border: "border-emerald-500/30",
            glow: "bg-emerald-500/20"
        },
        amber: {
            bg: "from-amber-500/20 to-amber-600/20",
            text: "text-amber-400",
            border: "border-amber-500/30",
            glow: "bg-amber-500/20"
        },
        purple: {
            bg: "from-purple-500/20 to-purple-600/20",
            text: "text-purple-400",
            border: "border-purple-500/30",
            glow: "bg-purple-500/20"
        }
    };

    // Rotação 3D suave baseada na posição do mouse
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || !isHovered) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // Calcula posição do mouse relativa ao cartão
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Converte para valores entre -10 e 10 para rotação
        const rotX = ((y - rect.height / 2) / rect.height) * 5;
        const rotY = ((x - rect.width / 2) / rect.width) * -5;

        rotateX.set(rotX);
        rotateY.set(rotY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Retorna à posição original suavemente
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1200
            }}
            className="h-full perspective-1000"
        >
            <div className={cn(
                "relative flex flex-col h-full bg-gradient-to-br",
                colorMap[color].bg,
                "rounded-2xl backdrop-blur-md overflow-hidden",
                "border border-gray-800/60 hover:border-gray-700/80",
                "transition-all duration-500 ease-out",
                "group"
            )}>
                {/* Glow effect */}
                <motion.div
                    className={cn(
                        "absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30",
                        colorMap[color].glow
                    )}
                    initial={{ scale: 0.8 }}
                    animate={isHovered ? { scale: 1.2 } : { scale: 0.8 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-repeat opacity-5" />

                <div className="relative z-10 p-6 flex flex-col h-full">
                    {/* Icon */}
                    <div className={cn(
                        "relative w-16 h-16 rounded-xl p-3 mb-5",
                        colorMap[color].text,
                        colorMap[color].border,
                        "border-2 transition-all duration-500",
                        "bg-gray-900/70 backdrop-blur-md"
                    )}>
                        <Icon className="w-full h-full" strokeWidth={1.5} />

                        {/* Animated corner accent */}
                        <motion.div
                            className={cn(
                                "absolute -top-1 -left-1 w-4 h-4 rounded-full",
                                colorMap[color].text
                            )}
                            initial={{ scale: 0 }}
                            animate={isHovered ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-white">
                        {title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-5">
                        {description}
                    </p>

                    {/* Stats highlight */}
                    <div className="mt-auto bg-gray-900/40 rounded-xl p-4 transform origin-bottom transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg">
                        <p className={cn("text-2xl font-bold mb-1", colorMap[color].text)}>
                            {stats.value}
                        </p>
                        <p className="text-gray-400 text-xs">
                            {stats.label}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Componente de Passos da Transformação
const TransformationSteps: React.FC = () => {
    const stepsRef = useRef<HTMLDivElement>(null);
    const stepsInView = useInView(stepsRef, { once: true, amount: 0.3 });

    const steps = [
        { id: 1, title: "Diagnóstico", description: "Análise completa da sua presença digital atual" },
        { id: 2, title: "Estratégia", description: "Plano personalizado para seus objetivos" },
        { id: 3, title: "Implementação", description: "Execução técnica e criativa" },
        { id: 4, title: "Otimização", description: "Aprimoramento contínuo baseado em dados" }
    ];

    return (
        <motion.div
            ref={stepsRef}
            initial={{ opacity: 0 }}
            animate={stepsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-16"
        >
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between max-w-4xl w-full">
                {/* Linha de conexão */}
                <div className="absolute top-8 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-amber-500/30 hidden md:block" />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative flex flex-col items-center text-center mb-8 md:mb-0 z-10"
                    >
                        <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-sky-500/50 flex items-center justify-center mb-3">
                            <span className="text-xl font-bold text-sky-400">{step.id}</span>
                        </div>
                        <h4 className="text-white font-medium mb-1">{step.title}</h4>
                        <p className="text-gray-400 text-xs max-w-[150px]">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

// Componente de CTA imersivo
const ImmersiveCTA: React.FC = () => {
    const ctaRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ctaRef, { once: true, amount: 0.5 });

    return (
        <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
        >
            <div className="absolute -inset-px bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 overflow-hidden">
                {/* Partículas de fundo */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-sky-400/40"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                boxShadow: '0 0 15px 2px rgba(56, 189, 248, 0.3)',
                                animation: `floatParticle ${3 + Math.random() * 7}s infinite ease-in-out ${Math.random() * 5}s`
                            }}
                        />
                    ))}
                </div>

                {/* Padrão de grade */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Pronto para transformar seu negócio?
                        </h3>
                        <p className="text-gray-300 max-w-xl">
                            Solicite agora uma análise gratuita e descubra como podemos impulsionar sua presença digital.
                        </p>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                className="relative bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold px-8 py-6 rounded-xl shadow-xl border-0 hover:shadow-sky-500/25 flex items-center gap-2"
                            >
                                SOLICITAR ANÁLISE GRATUITA
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Interface interativa para demonstrar a transformação
const InteractiveDemo: React.FC = () => {
    const demoRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(demoRef, { once: true, amount: 0.2 });
    const [step, setStep] = useState(0);

    const steps = [
        { label: "Antes", color: "border-red-500/30" },
        { label: "Durante", color: "border-amber-500/30" },
        { label: "Depois", color: "border-emerald-500/30" }
    ];

    return (
        <motion.div
            ref={demoRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="relative mb-16 p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50"
        >
            <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-5 mix-blend-overlay rounded-2xl" />

            <div className="relative z-10">
                <h3 className="text-xl font-bold text-white text-center mb-6">Veja a transformação na prática</h3>

                <div className="flex justify-center mb-8">
                    <div className="flex p-1 bg-gray-800/70 backdrop-blur-sm rounded-full">
                        {steps.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => setStep(i)}
                                className={cn(
                                    "relative py-2 px-4 rounded-full text-sm font-medium transition-all duration-300",
                                    step === i ? "text-white" : "text-gray-400 hover:text-gray-300"
                                )}
                            >
                                {s.label}
                                {step === i && (
                                    <motion.div
                                        className={cn("absolute inset-0 rounded-full border-2", s.color)}
                                        layoutId="stepIndicator"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        style={{ zIndex: -1 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full h-64 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 overflow-hidden">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="before"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
                            >
                                <div className="mb-4 p-3 rounded-full bg-red-500/20">
                                    <ExternalLink className="w-6 h-6 text-red-400" />
                                </div>
                                <h4 className="text-lg font-medium text-red-400 mb-2">Site desatualizado e sem conversões</h4>
                                <p className="text-gray-400 text-sm max-w-md">
                                    Sem estratégia digital, presença online fraca e poucos clientes encontrando seu negócio.
                                </p>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div
                                key="during"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
                            >
                                <div className="mb-4 p-3 rounded-full bg-amber-500/20">
                                    <Cog className="w-6 h-6 text-amber-400" />
                                </div>
                                <h4 className="text-lg font-medium text-amber-400 mb-2">Implantação e configuração</h4>
                                <p className="text-gray-400 text-sm max-w-md">
                                    Reconstrução completa da presença digital e implementação de automações de marketing.
                                </p>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="after"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full flex flex-col items-center justify-center p-6 text-center"
                            >
                                <div className="mb-4 p-3 rounded-full bg-emerald-500/20">
                                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h4 className="text-lg font-medium text-emerald-400 mb-2">Fluxo contínuo de novos clientes</h4>
                                <p className="text-gray-400 text-sm max-w-md">
                                    Aumento de 230% nas conversões, sistema otimizado gerando resultados de forma automática.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-4 flex justify-center">
                    <div className="text-gray-500 text-xs flex items-center gap-1">
                        <MousePointer className="w-3 h-3" />
                        Clique nas etapas para ver a transformação
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Componente principal
const DigitalTransformation: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section
            ref={sectionRef}
            className="relative py-32 overflow-hidden"
        >
            {/* Vídeo Background com gradiente aprimorado */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/videos/homevideo2.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                </video>

                {/* Gradiente de sobreposição otimizado */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95" />

                {/* Grade de pontos, mais sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />

                {/* Efeito de partículas flutuantes */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                scale: Math.random() * 0.5 + 0.5,
                            }}
                            animate={{
                                y: [0, Math.random() * -100 - 50],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 20,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Efeito de luz que segue o mouse */}
            <MouseFollowLight />

            <Container className="relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Cabeçalho */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    >
                        {/* Tag */}
                        <div className="inline-flex items-center bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium px-5 py-2.5 rounded-full mb-6">
                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.7, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="w-2 h-2 rounded-full bg-sky-400 mr-2"
                            />
                            Transformação Digital
                        </div>

                        {/* Título principal diferenciado */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                            <div className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Transforme seu negócio com uma
                            </div>
                            <div className="relative inline-flex flex-col">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">
                                    presença digital impactante
                                </span>
                                <motion.span
                                    className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </div>
                        </h2>
                    </motion.div>

                    {/* Elementos interativos */}
                    <ProblemSolutionToggle />

                    {/* Grid de benefícios */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {benefitItems.map((item, index) => (
                            <BenefitCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                                color={item.color}
                                stats={item.stats}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Demonstração interativa */}
                    <InteractiveDemo />

                    {/* Passos da transformação */}
                    <TransformationSteps />

                    {/* CTA Imersivo */}
                    <ImmersiveCTA />
                </div>
            </Container>

            {/* Estilos para animações */}
            <style jsx global>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(5px) translateX(-15px); }
          75% { transform: translateY(-7px) translateX(-5px); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
        </section>
    );
};

export default DigitalTransformation;