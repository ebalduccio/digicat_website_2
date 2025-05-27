'use client'

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Laptop, Code, Zap, Search, Users, Lock, Smartphone, Globe, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  technologies: string[];
  color: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: React.ElementType;
  stat: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Desenvolvimento Frontend",
    description: "Criamos interfaces modernas e responsivas que encantam seus usuários.",
    technologies: ["React", "Next.js", "Vue", "Angular"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Zap,
    title: "Desenvolvimento Backend",
    description: "Construímos sistemas robustos e escaláveis para suportar seu negócio.",
    technologies: ["Node.js", "Python", "Java", "PHP"],
    color: "from-indigo-500 to-purple-400"
  },
  {
    icon: Search,
    title: "Otimização para SEO",
    description: "Garantimos que seu site seja encontrado pelos motores de busca.",
    technologies: ["Analytics", "Performance", "Keywords", "Backlinks"],
    color: "from-green-500 to-emerald-400"
  },
  {
    icon: Users,
    title: "UX/UI Design",
    description: "Projetamos experiências intuitivas e agradáveis para seus clientes.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Protótipos"],
    color: "from-amber-500 to-yellow-400"
  },
  {
    icon: Lock,
    title: "Segurança Web",
    description: "Implementamos as melhores práticas de segurança para proteger seus dados.",
    technologies: ["HTTPS", "Firewall", "Auth", "Criptografia"],
    color: "from-red-500 to-rose-400"
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Seu site se adapta perfeitamente a todos os dispositivos.",
    technologies: ["Mobile-first", "Tablets", "Desktop", "TV"],
    color: "from-sky-500 to-blue-400"
  },
];

const benefits: Benefit[] = [
  {
    title: "Aumento da Credibilidade",
    description: "Um site profissional aumenta a confiança dos clientes em sua marca.",
    icon: CheckCircle,
    stat: "87%"
  },
  {
    title: "Alcance Global",
    description: "Expanda seu negócio para novos mercados e alcance clientes em todo o mundo.",
    icon: Globe,
    stat: "24/7"
  },
  {
    title: "Disponibilidade 24/7",
    description: "Seu site trabalha por você, mesmo quando você está dormindo.",
    icon: Zap,
    stat: "100%"
  },
  {
    title: "Melhoria no Atendimento",
    description: "Ofereça suporte e informações instantâneas aos seus clientes.",
    icon: Users,
    stat: "65%"
  },
  {
    title: "Coleta de Dados",
    description: "Obtenha insights sobre o comportamento dos seus clientes.",
    icon: Search,
    stat: "3x"
  },
  {
    title: "Aumento das Vendas",
    description: "Transforme visitantes em clientes com estratégias eficazes.",
    icon: ArrowRight,
    stat: "+40%"
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Ana Silva",
    role: "CEO, TechSolutions",
    content: "A equipe superou nossas expectativas. Nosso site não só ficou lindo, como também aumentou nossas conversões em 45%.",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Carlos Mendes",
    role: "Diretor de Marketing, InnovateBR",
    content: "Trabalhar com esta equipe foi uma experiência transformadora para nossa marca. O processo foi transparente e os resultados, excepcionais.",
    avatar: "/api/placeholder/100/100"
  },
  {
    name: "Fernanda Costa",
    role: "Fundadora, StartupXYZ",
    content: "Como startup, precisávamos de uma presença online que transmitisse confiança. Agora temos um site que nossos investidores adoram.",
    avatar: "/api/placeholder/100/100"
  }
];

const process: ProcessStep[] = [
  {
    step: 1,
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e público-alvo para criar uma solução personalizada."
  },
  {
    step: 2,
    title: "Planejamento",
    description: "Desenvolvemos um plano detalhado com wireframes, paleta de cores e cronograma."
  },
  {
    step: 3,
    title: "Design",
    description: "Criamos protótipos interativos que você pode visualizar antes da implementação."
  },
  {
    step: 4,
    title: "Desenvolvimento",
    description: "Transformamos o design em código funcional usando as tecnologias mais modernas."
  },
  {
    step: 5,
    title: "Testes",
    description: "Garantimos que tudo funcione perfeitamente em todos os dispositivos e navegadores."
  },
  {
    step: 6,
    title: "Lançamento",
    description: "Seu site vai ao ar e começamos a monitorar seu desempenho para otimizações."
  }
];

// Animated gradient background component
const AnimatedGradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -inset-[10%] opacity-30">
        <div className="absolute top-0 -left-[25%] w-[50%] h-[50%] rounded-full bg-blue-400 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-[25%] w-[50%] h-[50%] rounded-full bg-purple-400 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-teal-400 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-sky-950/90 backdrop-filter backdrop-blur-md"></div>
    </div>
  );
};

// Hero particles effect
const HeroParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-sky-400/20"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

const WebDevelopmentPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);

  useEffect(() => {
    setIsLoaded(true);

    // Add CSS for animation-delay classes
    const style = document.createElement('style');
    style.innerHTML = `
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
      }
      @keyframes blob {
        0% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30%, -30%) scale(1.1); }
        66% { transform: translate(-20%, 20%) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
      }
      .animate-blob {
        animation: blob 12s infinite alternate;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const ServicesSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-300">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-16 px-4 sm:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden bg-sky-950/50 backdrop-blur-lg border border-sky-800/50 hover:border-sky-400/50 transition-all duration-300 group">
                <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="relative pb-2">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-800/20 rounded-full blur-2xl"></div>
                  <div className="mb-3 p-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-800/50 to-sky-900/50 border border-sky-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-sky-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-sky-300/80">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-sky-700/50 text-sky-300 bg-sky-900/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const BenefitsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
      <motion.div
        ref={ref}
        style={{ scale }}
        className="mb-24 relative mx-4 sm:mx-0 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-3xl transform -rotate-1 blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-sky-400/10 to-purple-400/10 rounded-3xl transform rotate-1 opacity-75"></div>
        <div className="relative bg-sky-950/70 rounded-3xl p-8 lg:p-12 border border-sky-800/50 backdrop-blur-lg shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-300">
            Por que investir em Desenvolvimento Web?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-indigo-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center text-center p-6 h-full">
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-3">
                    {benefit.stat}
                  </div>
                  <benefit.icon className="w-10 h-10 text-sky-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sky-300/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const ProcessSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-24 mx-4 sm:mx-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-300">
          Nosso Processo
        </h2>
        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 w-px h-full bg-gradient-to-b from-sky-500/50 via-indigo-500/50 to-transparent"></div>
          <div className="space-y-12 lg:space-y-24 relative">
            {process.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
              >
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-sky-400 to-indigo-600 text-white font-bold text-xl shadow-[0_0_20px_rgba(56,189,248,0.5)] relative z-10">
                    {step.step}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <Card className="bg-sky-950/50 backdrop-blur-lg border border-sky-800/50 overflow-hidden">
                    <div className="h-1 w-full bg-gradient-to-r from-sky-400 to-indigo-500"></div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                      <CardDescription className="text-sky-300">{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const TestimonialsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-24 mx-4 sm:mx-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-300">
          O que Nossos Clientes Dizem
        </h2>

        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8 bg-sky-950/70 border border-sky-800/50">
            {testimonials.map((_, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                className="data-[state=active]:bg-sky-800/30 data-[state=active]:text-white text-sky-300"
              >
                {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              <TabsContent key={index} value={index.toString()} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-sky-950/50 backdrop-blur-lg border border-sky-800/50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-sky-400 relative">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            {Array(5).fill(0).map((_, i) => (
                              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-sky-200 text-lg italic mb-4">&quot;{testimonial.content}&quot;</p>
                          <div>
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-sky-400 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <AnimatedGradientBackground />
      <HeroParticles />

      {/* Main Content */}
      <div className="pt-28 pb-16 relative">
        <Container className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Badge className="mb-4 px-3 py-1 bg-sky-400/10 text-sky-300 border-sky-400/30 text-sm">
                  Desenvolvimento Web Profissional
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6">
                  <span className="block text-white">Transforme sua</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600">
                    Presença Digital
                  </span>
                </h1>
                <p className="text-xl text-sky-300 max-w-lg mb-8">
                  Soluções web inovadoras e personalizadas que elevam sua marca e impulsionam resultados mensuráveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white border-0 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300"
                    >
                      Solicitar Orçamento
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden border border-sky-700/50 shadow-[0_0_30px_rgba(56,189,248,0.2)] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-indigo-500/20 to-purple-500/20"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src="/api/placeholder/650/400"
                      alt="Web Development"
                      fill
                      className="object-cover mix-blend-luminosity opacity-80"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>

                  {/* Code snippets decoration */}
                  <div className="absolute -top-5 -right-5 w-32 h-24 bg-sky-950/90 rounded-lg border border-sky-700/50 p-3 transform rotate-6 shadow-lg backdrop-blur-sm">
                    <div className="text-xs text-sky-300 font-mono">
                      <div>{'<div className="'}</div>
                      <div>{' flex items-center'}</div>
                      <div>{' justify-between'}</div>
                      <div>{'">...</div>'}</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-5 -left-5 w-32 h-24 bg-sky-950/90 rounded-lg border border-sky-700/50 p-3 transform -rotate-6 shadow-lg backdrop-blur-sm">
                    <div className="text-xs text-green-300 font-mono">
                      <div>{'function App() {'}</div>
                      <div>{'  return ('}</div>
                      <div>{'    <Main />'}</div>
                      <div>{'  );'}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services Section */}
          <ServicesSection />

          {/* Benefits Section */}
          <BenefitsSection />

          {/* Process Section */}
          <ProcessSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center relative z-10 px-4"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/30 to-indigo-600/30 rounded-3xl blur-2xl"></div>
              <Card className="border-0 bg-gradient-to-r from-sky-950/90 to-indigo-950/90 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    Pronto para Elevar sua<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
                      Presença Online?
                    </span>
                  </h2>
                  <p className="text-xl text-sky-300 mb-8 max-w-2xl mx-auto">
                    Nossa equipe de especialistas está pronta para criar a solução web perfeita para o seu negócio.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white border-0 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all duration-300 text-lg"
                    >
                      Solicite um Orçamento Gratuito
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-sky-500 text-sky-400 hover:bg-sky-950/50 text-lg"
                    >
                      Agende uma Consulta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;