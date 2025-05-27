'use client'

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Brain, Code, Smartphone, Settings, Target, ArrowRight, Sparkles, Star, LucideIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Define interfaces
interface ServiceItem {
    label: string;
    href: string;
    icon: LucideIcon;
    description: string;
    buttonText: string;
    gradient: string;
    hoverGradient: string;
    iconGradient: string;
    accentColor: string;
    size: 'featured' | 'lg' | 'md';
    benefits: string[];
    position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

interface ServiceCardProps {
    item: ServiceItem;
    index: number;
}

interface TiltCardProps {
    children: React.ReactNode;
    sensitivity?: number;
    className?: string;
}

interface FloatingElementProps {
    children?: React.ReactNode;
    className?: string;
    yOffset?: number;
    duration?: number;
}

interface AnimatedBadgeProps {
    children: React.ReactNode;
    className?: string;
}

interface CircleDecorationProps {
    className: string;
}

// Service data
const serviceItems: ServiceItem[] = [
    {
        label: 'IA (Inteligência Artificial)',
        href: '/services/ai',
        icon: Brain,
        description: 'Com a IA, você vai oferecer aos clientes uma experiência personalizada e ainda irá automatizar tarefas repetitivas como e-mails, gestão de estoque, e atendimento, liberando tempo para atividades que realmente importam.',
        buttonText: 'QUERO ECONOMIZAR TEMPO',
        gradient: 'from-blue-500 via-indigo-500 to-purple-600',
        hoverGradient: 'from-blue-400 via-indigo-400 to-purple-500',
        iconGradient: 'from-blue-600 to-indigo-700',
        accentColor: 'rgb(99, 102, 241)',
        size: 'featured',
        benefits: ['Automação inteligente', 'Personalização avançada', 'Análise preditiva'],
        position: 'center'
    },
    {
        label: 'Desenvolvimento Web',
        href: '/services/web-development',
        icon: Code,
        description: 'Um site bem desenvolvido é a vitrine do seu negócio na internet, transmitindo credibilidade para os clientes. Você terá Chatbots, formulários de contato e integração com redes sociais que impressionarão seus clientes.',
        buttonText: 'QUERO UM SITE PROFISSIONAL',
        gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
        hoverGradient: 'from-emerald-400 via-teal-400 to-cyan-500',
        iconGradient: 'from-emerald-600 to-teal-700',
        accentColor: 'rgb(20, 184, 166)',
        size: 'md',
        benefits: ['Design responsivo', 'SEO otimizado', 'Carregamento rápido'],
        position: 'top-left'
    },
    {
        label: 'Marketing Digital',
        href: '/services/marketing',
        icon: Target,
        description: 'No ambiente competitivo atual destacar-se é crucial. Você irá aumentar exponencialmente a visibilidade da sua marca e apresentará para as pessoas com maior probabilidade de comprar de você.',
        buttonText: 'QUERO MAIS CLIENTES',
        gradient: 'from-orange-500 via-amber-500 to-red-600',
        hoverGradient: 'from-orange-400 via-amber-400 to-red-500',
        iconGradient: 'from-orange-600 to-red-700',
        accentColor: 'rgb(249, 115, 22)',
        size: 'md',
        benefits: ['Tráfego qualificado', 'Conversão otimizada', 'ROI mensurável'],
        position: 'top-right'
    },
    {
        label: 'Software Personalizado',
        href: '/services/software-development',
        icon: Settings,
        description: 'Deixe que o sistema cuide das tarefas entediantes e manuais, sua equipe se concentra em atividades estratégicas, o Software servirá como um um sistema que trabalha exatamente da forma que você precisa.',
        buttonText: 'QUERO MAIS PRODUTIVIDADE',
        gradient: 'from-indigo-500 via-blue-500 to-sky-600',
        hoverGradient: 'from-indigo-400 via-blue-400 to-sky-500',
        iconGradient: 'from-indigo-600 to-blue-700',
        accentColor: 'rgb(79, 70, 229)',
        size: 'md',
        benefits: ['Workflow otimizado', 'Integração completa', 'Customização total'],
        position: 'bottom-left'
    },
    {
        label: 'Aplicativos iOS e Android',
        href: '/services/apps',
        icon: Smartphone,
        description: 'Seus clientes terão acesso rápido a sua marca, bastando apenas um clique. As notificações, recompensas e ofertas personalizadas irão manter os clientes engajados e leais à marca, tornando-a inesquecível aos olhos dos clientes.',
        buttonText: 'QUERO SOFISTICAR MINHA MARCA',
        gradient: 'from-pink-500 via-rose-500 to-purple-600',
        hoverGradient: 'from-pink-400 via-rose-400 to-purple-500',
        iconGradient: 'from-pink-600 to-rose-700',
        accentColor: 'rgb(236, 72, 153)',
        size: 'lg',
        benefits: ['Experiência nativa', 'Push notifications', 'Performance otimizada'],
        position: 'bottom-right'
    },
];

// Mouse follower component with Spring physics
const MouseFollower: React.FC = () => {
    const cursorX = useMotionValue<number>(-100);
    const cursorY = useMotionValue<number>(-100);

    const springConfig = { damping: 25, stiffness: 120 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed w-96 h-96 rounded-full pointer-events-none mix-blend-screen filter blur-3xl opacity-30 z-0"
            style={{
                background: "radial-gradient(circle, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.4) 50%, rgba(0,0,0,0) 80%)",
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%"
            }}
        />
    );
};

// 3D Tilt Card Effect
const TiltCard: React.FC<TiltCardProps> = ({ children, sensitivity = 5, className }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState<number>(0);
    const [rotateY, setRotateY] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate rotation based on mouse position
        const rotateY = ((mouseX - cardCenterX) / (rect.width / 2)) * sensitivity;
        const rotateX = -((mouseY - cardCenterY) / (rect.height / 2)) * sensitivity;

        setRotateX(rotateX);
        setRotateY(rotateY);
        setScale(1.02);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setScale(1);
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn("relative transform-gpu", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                transition: "transform 0.1s ease-out"
            }}
        >
            {children}
        </motion.div>
    );
};

// Animated badge component
const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ children, className }) => {
    return (
        <div className={cn("relative overflow-hidden group", className)}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundSize: "200% 100%" }}>
                <motion.div
                    className="w-full h-full"
                    animate={{
                        backgroundPosition: ["0% center", "100% center", "0% center"],
                    }}
                    transition={{
                        duration: 8,
                        ease: "linear",
                        repeat: Infinity
                    }}
                />
            </div>
            <div className="relative px-4 py-1.5 text-white font-medium z-10">{children}</div>
        </div>
    );
};

// Floating elements animation
const FloatingElement: React.FC<FloatingElementProps> = ({
    children,
    className,
    yOffset = 10,
    duration = 3
}) => {
    return (
        <motion.div
            className={className}
            animate={{
                y: [`${-yOffset}px`, `${yOffset}px`, `${-yOffset}px`]
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    );
};

// Circle decoration component
const CircleDecoration: React.FC<CircleDecorationProps> = ({ className }) => (
    <div className={`absolute rounded-full mix-blend-screen opacity-20 blur-xl ${className}`} />
);

// Service card component with advanced effects
const ServiceCard: React.FC<ServiceCardProps> = ({ item, index }) => {
    const IconComponent = item.icon;
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [isHovered, setIsHovered] = useState<boolean>(false);

    // Determine card size class
    let sizeClass = "col-span-1";
    if (item.size === 'lg') sizeClass = "col-span-1 md:col-span-2";
    if (item.size === 'featured') sizeClass = "col-span-1 md:col-span-3 lg:col-span-2";

    // Card entry animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            className={`${sizeClass} relative z-10`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <TiltCard className="h-full">
                <div className="relative h-full group">
                    {/* Animated background glow */}
                    <motion.div
                        className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-700`}
                        animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Card background with glass effect */}
                    <Card className="relative h-full backdrop-blur-lg bg-gray-950/80 border-0 overflow-hidden rounded-3xl shadow-2xl">
                        {/* Animated gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />

                        {/* Animated light shimmer effect */}
                        <motion.div
                            className="absolute -inset-full h-[200%] w-[50%] top-0 opacity-0 group-hover:opacity-100 z-5 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        />

                        {/* Card content */}
                        <CardContent className="p-8 sm:p-10 relative z-10 h-full flex flex-col">
                            {/* Micro interactions for icon */}
                            <motion.div
                                className={`relative mb-6 bg-gradient-to-br ${item.iconGradient} rounded-2xl w-16 h-16 flex items-center justify-center overflow-hidden shadow-lg`}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: `0 0 25px 5px ${item.accentColor}40`
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                {/* Icon light effect */}
                                <motion.div
                                    className="absolute w-full h-full bg-white/20"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isHovered ? { opacity: 0.2, scale: 1.5 } : { opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.7 }}
                                />

                                {/* Icon with animation */}
                                <motion.div
                                    animate={isHovered ? { rotate: [0, 10, 0], scale: [1, 1.1, 1] } : {}}
                                    transition={{ duration: 0.5 }}
                                >
                                    <IconComponent className="w-8 h-8 text-white relative z-10" />
                                </motion.div>
                            </motion.div>

                            {/* Badge for featured items */}
                            {item.size === 'featured' && (
                                <div className="absolute top-6 right-6">
                                    <AnimatedBadge className="rounded-full text-xs">
                                        <div className="flex items-center gap-1.5">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            DESTAQUE
                                        </div>
                                    </AnimatedBadge>
                                </div>
                            )}

                            {/* Title with animated underline */}
                            <div className="mb-4">
                                <h3 className={`text-2xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent relative`}>
                                    {item.label}
                                    <motion.div
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${item.gradient} rounded-full`}
                                        initial={{ width: "0%" }}
                                        animate={isHovered ? { width: "40%" } : { width: "0%" }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </h3>
                            </div>

                            {/* Description with better spacing */}
                            <p className="text-gray-300 text-base leading-relaxed">
                                {item.description}
                            </p>

                            {/* Benefits list with icons */}
                            <ul className="mt-6 space-y-2">
                                {item.benefits.map((benefit, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-2 text-sm text-gray-300"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 }}
                                    >
                                        <Star className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`} />
                                        {benefit}
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Button with advanced effects */}
                            <motion.div
                                className="mt-auto pt-8"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button
                                    asChild
                                    className={`relative overflow-hidden bg-gradient-to-r ${isHovered ? item.hoverGradient : item.gradient} text-white font-medium py-3 px-6 rounded-xl shadow-xl transition-all duration-300`}
                                >
                                    <a href={item.href} className="flex items-center gap-2">
                                        <motion.span
                                            className="relative z-10"
                                            animate={isHovered ? { x: [0, 5, 0] } : {}}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {item.buttonText}
                                        </motion.span>
                                        <motion.div
                                            animate={isHovered ? { x: [0, 5, 0] } : {}}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                        >
                                            <ArrowRight className="w-5 h-5 relative z-10" />
                                        </motion.div>

                                        {/* Button light overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300"
                                            animate={isHovered ? { opacity: 0.15 } : { opacity: 0 }}
                                        />
                                    </a>
                                </Button>
                            </motion.div>
                        </CardContent>
                    </Card>
                </div>
            </TiltCard>
        </motion.div>
    );
};

// Header component with advanced animations
const TitleCard: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Staggered text animation
    const titleWords = ["Ao", "que", "você", "terá", "acesso"];

    return (
        <motion.div
            ref={ref}
            className="col-span-full mb-28 relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-4xl mx-auto text-center relative">
                {/* Animated decorative elements */}
                <FloatingElement
                    className="absolute -left-20 top-0 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl"
                    yOffset={15}
                    duration={5}
                />

                <FloatingElement
                    className="absolute -right-16 bottom-10 w-24 h-24 rounded-full bg-indigo-500/10 blur-2xl"
                    yOffset={10}
                    duration={4}
                />

                {/* Badge with shimmer effect */}
                <div className="inline-block mb-6">
                    <motion.div
                        className="relative px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm overflow-hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
                            animate={{
                                x: ["-100%", "200%"]
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                        />
                        <span className="relative z-10 text-blue-400 text-sm font-medium tracking-wider">NOSSOS SERVIÇOS</span>
                    </motion.div>
                </div>

                {/* Animated title with word-by-word reveal */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight flex flex-wrap justify-center gap-x-5 gap-y-2">
                    {titleWords.map((word, i) => (
                        <motion.span
                            key={i}
                            className={`inline-block ${word === 'acesso' ? 'relative bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text' : 'text-white'}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3 + (i * 0.1),
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                        >
                            {word}

                            {/* Animated underline for "acesso" */}
                            {word === 'acesso' && (
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-full"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                                    transition={{
                                        delay: 0.8,
                                        duration: 0.8,
                                        ease: [0.215, 0.61, 0.355, 1]
                                    }}
                                />
                            )}
                        </motion.span>
                    ))}
                </h2>

                {/* Description with advanced fade-in and character animation */}
                <motion.p
                    className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto relative"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Nossa abordagem estratégica é feita sob medida para quem busca mais do que apenas o básico —
                    <motion.span
                        className="font-semibold text-white inline-block"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                    > nós preparamos você para dominar as ferramentas do futuro</motion.span>.
                    Nosso plano garante acesso às melhores ferramentas do mercado, elevando o potencial do seu negócio.
                </motion.p>
            </div>
        </motion.div>
    );
};

// Main services section
const Services: React.FC = () => {
    return (
        <section className="py-48 relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black">
            {/* Mouse follower effect */}
            <MouseFollower />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated gradient circles */}
                <FloatingElement
                    className="absolute w-[40rem] h-[40rem] rounded-full bg-blue-600/5 blur-3xl -top-20 -left-20"
                    yOffset={20}
                    duration={12}
                />

                <FloatingElement
                    className="absolute w-[30rem] h-[30rem] rounded-full bg-indigo-600/5 blur-3xl top-1/4 -right-20"
                    yOffset={15}
                    duration={15}
                />

                <FloatingElement
                    className="absolute w-[35rem] h-[35rem] rounded-full bg-purple-600/5 blur-3xl -bottom-40 left-1/3"
                    yOffset={20}
                    duration={18}
                />

                {/* Animated lines effect */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                    <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

                    <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
                    <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
                    <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-sky-500 to-transparent" />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjAyODNBIiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTYwIDBoLTYwdjYwaDYweiIvPjwvZz48L3N2Zz4=')] opacity-20" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/5 to-purple-900/5" />
            </div>

            {/* Main content */}
            <Container className="relative z-10 px-4 sm:px-6 lg:px-8">
                <TitleCard />

                {/* Service cards with motion.div for animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {serviceItems.map((item, index) => (
                        <ServiceCard key={item.href} item={item} index={index} />
                    ))}
                </motion.div>

                {/* CTA button with advanced effects */}
                <motion.div
                    className="mt-28 text-center relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <FloatingElement
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-24 bg-blue-600/10 rounded-full blur-3xl"
                        yOffset={5}
                        duration={3}
                    />

                    <Button
                        asChild
                        className="relative bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-medium px-10 py-7 rounded-xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-lg overflow-hidden group"
                    >
                        <a href="/contact" className="flex items-center gap-2">
                            <span className="relative z-10">FALE COM UM ESPECIALISTA</span>
                            <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                            {/* Button light effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.8 }}
                            />
                        </a>
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
};

export default Services;