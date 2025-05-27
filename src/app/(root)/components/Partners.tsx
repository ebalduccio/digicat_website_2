'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, MotionValue, useTransform, useMotionValue } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from "next/image";
import { ArrowRight, Shield, Award, Zap, ChevronRight, CheckCircle, ExternalLink, Globe } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

// Tipos
interface Benefit {
    icon: React.ElementType;
    text: string;
    description: string;
}

interface Case {
    company: string;
    metric: string;
    value: string;
    description: string;
}

interface Partner {
    id: string;
    name: string;
    logo: string;
    color: string;
    gradient: string;
    accentColor: string;
    benefits: Benefit[];
    description: string;
    cases: Case[];
    features: string[];
}

// Dados dos parceiros
const partners: Partner[] = [
    {
        id: 'google',
        name: 'Google',
        logo: '/images/google-logo.webp',
        color: '#4285F4',
        gradient: 'from-blue-600 to-blue-400',
        accentColor: 'blue',
        benefits: [
            {
                icon: Shield,
                text: 'Proteção de dados avançada',
                description: 'Segurança de nível empresarial com criptografia e proteção contra ameaças avançadas.'
            },
            {
                icon: Award,
                text: 'Certificação oficial',
                description: 'Equipe certificada com as mais recentes qualificações técnicas do Google.'
            },
            {
                icon: Zap,
                text: 'Performance otimizada',
                description: 'Acesso a ferramentas exclusivas de otimização para máximo desempenho.'
            }
        ],
        description: 'Acesso exclusivo às mais avançadas ferramentas de marketing e análise do Google, permitindo estratégias data-driven precisas e resultados mensuráveis para seu negócio digital.',
        cases: [
            {
                company: 'Empresa Tech',
                metric: 'Aumento de Conversões',
                value: '+143%',
                description: 'Utilizando Google Ads otimizado com nossa estratégia personalizada'
            }
        ],
        features: [
            'Google Ads otimizado por IA',
            'Google Analytics avançado',
            'Integração com Google Business Profile',
            'Google Search Console profissional'
        ]
    },
    {
        id: 'meta',
        name: 'Meta',
        logo: '/images/meta-logo.webp',
        color: '#0668E1',
        gradient: 'from-blue-500 to-indigo-600',
        accentColor: 'indigo',
        benefits: [
            {
                icon: Shield,
                text: 'Segurança integrada',
                description: 'Proteção completa para todas as suas campanhas e integrações com as plataformas Meta.'
            },
            {
                icon: Award,
                text: 'Parceiro certificado',
                description: 'Equipe com expertise reconhecida e certificada diretamente pela Meta.'
            },
            {
                icon: Zap,
                text: 'Alcance maximizado',
                description: 'Ferramentas exclusivas para potencializar o alcance e engajamento das suas campanhas.'
            }
        ],
        description: 'Recursos exclusivos para maximizar sua presença nas plataformas Meta, incluindo Instagram, Facebook e WhatsApp Business, com estratégias avançadas de segmentação e engajamento.',
        cases: [
            {
                company: 'E-commerce Premium',
                metric: 'Retorno sobre investimento',
                value: '6.2x',
                description: 'Com campanhas personalizadas no Instagram e Facebook Ads'
            }
        ],
        features: [
            'Campanhas integradas Multi-plataforma',
            'Segmentação avançada de público',
            'WhatsApp Business API',
            'Automação de resposta em redes sociais'
        ]
    },
];

// Componente para efeito de partículas no fundo
const ParticlesBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-1 h-1 bg-sky-500/30 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [0, Math.random() * -100 - 50],
                        opacity: [0, 0.7, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10,
                    }}
                />
            ))}
        </div>
    );
};

// Componente para o fundo de vídeo melhorado
const EnhancedBackgroundVideo: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
    return (
        <div className="absolute inset-0">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
            >
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>

            {/* Gradiente melhorado com maior profundidade */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/98 via-gray-900/95 to-gray-800/90" />

            {/* Padrão de grade com animação sutil */}
            <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '40px 40px']
                }}
                transition={{
                    duration: 60,
                    ease: "linear",
                    repeat: Infinity
                }}
            />

            {/* Partículas flutuantes */}
            <ParticlesBackground />
        </div>
    );
};

// Hook personalizado para efeito de rotação 3D
function useHover3DEffect(
    strength: number = 20
): [React.RefObject<HTMLDivElement>, { rotateX: MotionValue<number>; rotateY: MotionValue<number> }] {
    const ref = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current || !hovering) return;

            const rect = ref.current.getBoundingClientRect();

            // Calcular a posição do mouse relativa ao elemento
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Normalizar a posição do mouse para valores entre -1 e 1
            const normalizedX = (e.clientX - centerX) / (rect.width / 2);
            const normalizedY = (e.clientY - centerY) / (rect.height / 2);

            // Aplicar rotação com base na posição normalizada
            rotateX.set(-normalizedY * strength);
            rotateY.set(normalizedX * strength);
        };

        const handleMouseLeave = () => {
            setHovering(false);
            // Resetar rotação suavemente quando o mouse sai
            rotateX.set(0);
            rotateY.set(0);
        };

        const handleMouseEnter = () => {
            setHovering(true);
        };

        const element = ref.current;
        if (element) {
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('mouseleave', handleMouseLeave);
            element.addEventListener('mouseenter', handleMouseEnter);

            return () => {
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('mouseleave', handleMouseLeave);
                element.removeEventListener('mouseenter', handleMouseEnter);
            };
        }
    }, [hovering, rotateX, rotateY, strength]);

    return [ref, { rotateX, rotateY }];
}

// Componente para caso de sucesso
const SuccessCase: React.FC<{ caseData: Case; color: string }> = ({ caseData, color }) => {
    return (
        <div className={`p-4 rounded-xl bg-gray-800/50 border border-gray-700/50`}>
            <p className={`text-${color}-400 text-xs font-medium mb-1`}>
                {caseData.company}
            </p>
            <div className="flex items-end gap-3 mb-2">
                <h4 className={`text-3xl font-bold text-${color}-500`}>{caseData.value}</h4>
                <p className="text-white text-sm">{caseData.metric}</p>
            </div>
            <p className="text-gray-400 text-xs">{caseData.description}</p>
        </div>
    );
};

// Componente de benefício com hover
const BenefitItem: React.FC<{ benefit: Benefit; color: string; isOpen: boolean; onClick: () => void }> = ({
    benefit,
    color,
    isOpen,
    onClick
}) => {
    const Icon = benefit.icon;
    const colorMap: Record<string, string> = {
        'blue': 'text-blue-400',
        'indigo': 'text-indigo-400'
    };

    return (
        <div
            className={cn(
                "p-4 rounded-xl transition-all duration-300 cursor-pointer",
                isOpen ? `bg-gray-800/80 border border-gray-700/50` : "hover:bg-gray-800/30"
            )}
            onClick={onClick}
        >
            <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-lg ${isOpen ? `bg-${color}-500/20` : ''} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${colorMap[color]}`} />
                </div>
                <h4 className="text-white font-medium">{benefit.text}</h4>
                <ChevronRight className={cn(
                    "w-4 h-4 text-gray-500 ml-auto transition-transform duration-300",
                    isOpen && "rotate-90"
                )} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 text-sm pl-11 pt-2">{benefit.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Componente do cartão de parceiro melhorado
const PartnerCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });
    const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'benefits' | 'features'>('benefits');

    // Efeito 3D no cartão
    const [hoverRef, { rotateX, rotateY }] = useHover3DEffect(10);

    // Gradiente dinâmico que segue o mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Transformar para percentagens para o gradiente radial
    const gradientX = useTransform(mouseX, [-100, 100], [0, 100]);
    const gradientY = useTransform(mouseY, [-100, 100], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="w-full md:w-[calc(50%-1rem)] perspective-1000"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                ref={hoverRef}
                style={{
                    rotateX,
                    rotateY,
                    z: 0,
                    transformPerspective: 1000
                }}
                className="relative group h-full transform-gpu"
            >
                {/* Gradiente de fundo animado */}
                <motion.div
                    className="absolute -inset-0.5 rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 blur-md"
                    style={{
                        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, ${partner.color}, transparent 70%)`,
                        zIndex: -1
                    }}
                />

                <Card className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group-hover:border-gray-700/80 transition-all duration-300">
                    <CardContent className="p-0 h-full">
                        {/* Logo com efeito melhorado */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md">
                            {/* Padrão de fundo dinâmico */}
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: `radial-gradient(circle at 30% 20%, ${partner.color}22 1%, transparent 8%), radial-gradient(circle at 70% 60%, ${partner.color}22 1%, transparent 8%)`,
                                backgroundSize: '60px 60px'
                            }} />

                            {/* Brilho dinâmico */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                                style={{ backgroundColor: partner.color }}
                                animate={{ opacity: [0.05, 0.15, 0.05] }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            />

                            {/* Logo com efeito de scale */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-40 h-20">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="transition-transform duration-500 group-hover:scale-110 brightness-0 invert"
                                    />
                                </div>
                            </div>

                            {/* Badge "Oficial" com efeito de pulsação */}
                            <div className="absolute top-5 right-5">
                                <motion.div
                                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${partner.gradient} bg-opacity-20 border border-${partner.accentColor}-500/30`}
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    <span className={`text-sm font-medium text-${partner.accentColor}-400 flex items-center gap-1.5`}>
                                        <CheckCircle className="w-3 h-3" />
                                        Oficial
                                    </span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Conteúdo principal com tabs */}
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <h3 className="text-2xl font-bold text-white">{partner.name} Partner</h3>
                            </div>

                            <p className="text-gray-300 mb-8 leading-relaxed">
                                {partner.description}
                            </p>

                            {/* Tabs de navegação */}
                            <div className="flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/30 mb-6">
                                <button
                                    onClick={() => setActiveTab('benefits')}
                                    className={cn(
                                        "relative flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300",
                                        activeTab === 'benefits' ? "text-white" : "text-gray-400 hover:text-gray-300"
                                    )}
                                >
                                    Benefícios
                                    {activeTab === 'benefits' && (
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} rounded-md opacity-20`}
                                            layoutId={`tabBackground-${partner.id}`}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            style={{ zIndex: -1 }}
                                        />
                                    )}
                                </button>
                                <button
                                    onClick={() => setActiveTab('features')}
                                    className={cn(
                                        "relative flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300",
                                        activeTab === 'features' ? "text-white" : "text-gray-400 hover:text-gray-300"
                                    )}
                                >
                                    Recursos
                                    {activeTab === 'features' && (
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-r ${partner.gradient} rounded-md opacity-20`}
                                            layoutId={`tabBackground-${partner.id}`}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            style={{ zIndex: -1 }}
                                        />
                                    )}
                                </button>
                            </div>

                            {/* Conteúdo das tabs */}
                            <AnimatePresence mode="wait">
                                {activeTab === 'benefits' && (
                                    <motion.div
                                        key="benefits"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Lista de benefícios expansível */}
                                        <div className="space-y-2 mb-8">
                                            {partner.benefits.map((benefit, idx) => (
                                                <BenefitItem
                                                    key={idx}
                                                    benefit={benefit}
                                                    color={partner.accentColor}
                                                    isOpen={expandedBenefit === idx}
                                                    onClick={() => setExpandedBenefit(expandedBenefit === idx ? null : idx)}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'features' && (
                                    <motion.div
                                        key="features"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="mb-8"
                                    >
                                        <div className="grid grid-cols-1 gap-3">
                                            {partner.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 transition-colors duration-300">
                                                    <CheckCircle className={`w-5 h-5 text-${partner.accentColor}-400 mt-0.5`} />
                                                    <span className="text-gray-200 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Case de sucesso */}
                            {partner.cases && partner.cases.length > 0 && (
                                <div className="mb-8">
                                    <SuccessCase caseData={partner.cases[0]} color={partner.accentColor} />
                                </div>
                            )}

                            {/* Botão de ação com efeitos */}
                            <Link href={`/services/marketing?partner=${partner.id}`} className="block">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative group/button"
                                >
                                    {/* Glow effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${partner.gradient} rounded-xl opacity-0 group-hover/button:opacity-30 blur-md transition-opacity duration-300`} />

                                    {/* Button */}
                                    <div className="relative flex items-center justify-between p-4 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 cursor-pointer group-hover/button:border-gray-600/50 transition-all duration-300">
                                        <span className="text-white font-medium">Explorar soluções</span>
                                        <ArrowRight className={`w-5 h-5 text-${partner.accentColor}-400 transform group-hover/button:translate-x-1 transition-transform duration-300`} />
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    );
};

// Componente de display de parceiros
const PartnerShowcase: React.FC<{ partners: Partner[] }> = ({ partners }) => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
                <PartnerCard key={partner.id} partner={partner} index={index} />
            ))}
        </div>
    );
};

// Componente de chamada à ação
const PartnershipCTA: React.FC = () => {
    const ctaRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(ctaRef, { once: true, amount: 0.7 });

    return (
        <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 max-w-3xl mx-auto"
        >
            <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-600/30 via-blue-600/30 to-indigo-600/30 rounded-2xl blur-md opacity-70" />

                <div className="relative p-8 rounded-2xl bg-gray-900/90 backdrop-blur-md border border-gray-800/60 overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat opacity-5" />

                    <div className="relative z-10 text-center">
                        <Globe className="w-12 h-12 mx-auto mb-4 text-sky-400" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Quer saber mais sobre nossas parcerias estratégicas?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                            Descubra como podemos ajudar seu negócio a atingir novos patamares com tecnologias de ponta e estratégias personalizadas.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium cursor-pointer"
                        >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Agendar consultoria gratuita
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Componente principal da seção
const PartnershipSection: React.FC<{ backgroundVideoUrl?: string }> = ({
    backgroundVideoUrl = '/videos/homevideo3.mp4'
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Fundo de vídeo aprimorado */}
            {/* <EnhancedBackgroundVideo videoUrl={backgroundVideoUrl} /> */}

            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Cabeçalho da seção */}
                    <motion.div
                        className="text-center mb-16"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium px-5 py-2.5 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                            Parcerias Oficiais
                        </motion.div>

                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                        >
                            <span>Impulsione seu crescimento com</span>{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                                    Parcerias Estratégicas
                                </span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-xl text-gray-300 max-w-2xl mx-auto mb-4"
                        >
                            Colaboramos com gigantes da tecnologia para impulsionar inovação e entregar resultados excepcionais para o seu negócio
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="inline-flex items-center gap-2 text-gray-400 text-sm"
                        >
                            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                            Parceiros oficiais com equipe certificada
                            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                            Acesso a recursos exclusivos
                            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                            Estratégias otimizadas
                        </motion.div>
                    </motion.div>

                    {/* Grid de parceiros */}
                    <PartnerShowcase partners={partners} />

                    {/* CTA */}
                    <PartnershipCTA />
                </motion.div>
            </div>

            {/* Estilos para animações personalizadas */}
            <style jsx global>{`
              @keyframes pulse {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 1; }
              }
              
              .perspective-1000 {
                perspective: 1000px;
              }
            `}</style>
        </section>
    );
};

export default PartnershipSection;