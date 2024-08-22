'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Users,
  Target,
  Rocket,
  Palette,
  Globe,
  LayoutDashboard,
  Smartphone,
  Brain,
  Megaphone
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CodeLine: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <motion.div
      className="h-px bg-sky-500/30"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{
        duration: Math.random() * 2 + 1,
        delay: delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    />
  );
};

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  interface ServiceCardProps {
    Icon: React.ElementType;
    title: string;
    content: string;
  }

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

  const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, content }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group bg-white hover:bg-sky-50 transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-sky-500 shadow-lg hover:shadow-xl">
        <CardHeader className="relative">
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 bg-sky-500 rounded-bl-full"
            initial={{ x: 40, y: -40 }}
            whileHover={{ x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          <CardTitle className="flex items-center space-x-3 text-2xl font-bold text-sky-900 group-hover:text-sky-700 transition-colors duration-300">
            <Icon size={36} className="z-10 text-sky-600" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 group-hover:text-sky-900 transition-colors duration-300">{content}</p>
          <motion.div
            className="flex items-center text-sky-600 group-hover:text-sky-700 transition-colors duration-300"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-semibold mr-2">Saiba mais</span>
            <ArrowRight size={20} />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );


  interface Service extends ServiceCardProps {
    image: string;
  }

  const services: Service[] = [
    {
      Icon: Palette,
      title: 'UI/X Design',
      content: 'Transformamos ideias em realidade visual com designs de alta qualidade e centrados no usuário.',
      image: '/images/designhome.png'
    },
    {
      Icon: Globe,
      title: 'Páginas Web Interativas',
      content: 'Criamos experiências web envolventes que não apenas atraem, mas também convertem visitantes em clientes fiéis.',
      image: '/images/WebHome.png'
    },
    {
      Icon: LayoutDashboard,
      title: 'Sistemas Web e Desktop',
      content: 'Desenvolvemos sistemas robustos e escaláveis, personalizados para otimizar seus processos operacionais.',
      image: '/images/ServerHome.png'
    },
    {
      Icon: Smartphone,
      title: 'Aplicativos iOS e Android',
      content: 'Expandimos o alcance do seu negócio com aplicativos móveis intuitivos e de alto desempenho.',
      image: '/images/MobileHome.png'
    },
    {
      Icon: Brain,
      title: 'Inteligência Artificial (IA)',
      content: 'Implementamos soluções de IA para automatizar processos e fornecer insights valiosos para seu negócio.',
      image: '/images/IAHome.png'
    },
    {
      Icon: Megaphone,
      title: 'Tráfego Pago e Marketing Digital',
      content: 'Impulsionamos sua presença online com estratégias de marketing digital personalizadas e orientadas por dados.',
      image: '/images/MarketingHome.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-950 text-white">

      <Container>
        <header className="py-20 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Se Atualize no Digital e Pare de Perder Espaço Para Seus Concorrentes.
          </motion.h1>
          <motion.p
            className="text-xl text-white mb-10 max-w-2xl mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Não Descansamos Até que Você Obtenha Resultados.
          </motion.p>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-7 rounded-md text-md transition-all duration-300
             shadow-[0_0_20px_5px_rgba(56,189,248,0.6)] hover:shadow-[0_0_30px_10px_rgba(56,189,248,0.8)]"
            >
              ACELERE SEU CRESCIMENTO DIGITAL AGORA
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </header>

        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-sky-300">Por que Empreendedores de Sucesso Escolhem a DIGICAT?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Alavancagem Imediata", description: "Impulsione seu negócio com estratégias digitais que geram resultados rápidos e mensuráveis." },
              { icon: Award, title: "Liderança de Mercado", description: "Posicione-se à frente da concorrência com tecnologias inovadoras e estratégias de ponta." },
              { icon: Zap, title: "Atualização Constante", description: "Mantenha-se sempre atualizado com as últimas tendências em IA, tráfego pago e marketing digital." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md border border-sky-500"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <feature.icon className="text-sky-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2 text-sky-200">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-gray-800 rounded-xl my-16 p-8 border border-sky-500">
          <h2 className="text-3xl font-bold mb-10 text-center text-sky-300">Nosso Processo de Domínio Digital</h2>
          <div className="space-y-8">
            {[
              { icon: Users, title: "Análise Personalizada", description: "Entendemos seu negócio e identificamos oportunidades únicas de crescimento digital." },
              { icon: Target, title: "Estratégia de Impacto", description: "Desenvolvemos um plano de ação focado em resultados rápidos e sustentáveis." },
              { icon: Rocket, title: "Implementação Acelerada", description: "Colocamos sua estratégia em prática com agilidade, garantindo vantagem competitiva." },
              { icon: TrendingUp, title: "Otimização Contínua", description: "Analisamos dados em tempo real para maximizar seu ROI e domínio de mercado." }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="bg-sky-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  <step.icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-200">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-sky-300">Não Fique Para Trás na Revolução Digital</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            A cada dia que passa, seus concorrentes avançam no mundo digital. Não deixe sua empresa ficar obsoleta.
          </p>
          <Link href='/quiz'>
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300">
              Agende Sua Consulta Estratégica Gratuita
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </section>
      </Container>
      <AnimatedSection>
        <section className="py-16 bg-sky-900 text-white">
          <Container>
            <h2 className="text-3xl font-bold text-center leading-tight">
              Desenvolvendo sistemas que fazem mais do que <span className="text-cyan-300">resolver problemas</span>; <br />eles abrem novas <span className="text-cyan-300">oportunidades</span>.
            </h2>
          </Container>
        </section>
      </AnimatedSection>

      <section className="py-20">
        <Container>
          {services.map((service, index) => (
            <AnimatedSection key={service.title}>
              <div className={`flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <Link href={'/services'}>
                    <ServiceCard Icon={service.Icon} title={service.title} content={service.content} />
                  </Link>
                </div>
                <motion.div
                  className="flex-1 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-teal-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="relative z-10 drop-shadow-2xl rounded-lg"
                  />
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;