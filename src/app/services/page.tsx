'use client'

import React, { useRef } from 'react';
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Globe, Layout, Smartphone, Brain, Megaphone, Target, Rocket, LineChart } from "lucide-react";
import Link from 'next/link';
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

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
      <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
      >
          <Card className="group bg-gray-800 hover:bg-gray-700 transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-sky-500 shadow-lg hover:shadow-xl">
              <CardContent className="p-6">
                  <motion.div
                      className="mb-4 text-sky-400 group-hover:text-sky-300 transition-colors duration-300"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                  >
                      <Icon size={48} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-sky-300 group-hover:text-sky-200 transition-colors duration-300">{title}</h3>
                  <p className="text-gray-400 mb-4">{description}</p>
              </CardContent>
          </Card>
      </motion.div>
  );
};

const services: ServiceCardProps[] = [
  {
    Icon: Palette,
    title: "UI/X Design Orientado a Conversão",
    description: "Criamos interfaces que não só impressionam visualmente, mas também são estrategicamente projetadas para maximizar conversões e engajamento do usuário."
  },
  {
    Icon: Globe,
    title: "Páginas Web de Alto Desempenho",
    description: "Desenvolvemos sites que não apenas se adaptam a qualquer dispositivo, mas também são otimizados para velocidade e conversão, impulsionando seus resultados de negócio."
  },
  {
    Icon: Layout,
    title: "Sistemas Web e Desktop Personalizados",
    description: "Projetamos soluções sob medida que se integram perfeitamente ao seu fluxo de trabalho, aumentando significativamente a eficiência e produtividade do seu negócio."
  },
  {
    Icon: Smartphone,
    title: "Aplicativos Móveis Inovadores",
    description: "Criamos apps que não só oferecem uma experiência excepcional, mas também são estrategicamente projetados para engajar usuários e impulsionar o crescimento do seu negócio."
  },
  {
    Icon: Brain,
    title: "Soluções de IA Orientadas a Resultados",
    description: "Implementamos inteligência artificial que vai além da automação, fornecendo insights acionáveis e impulsionando decisões estratégicas para o crescimento do seu negócio."
  },
  {
    Icon: Megaphone,
    title: "Marketing Digital Focado em ROI",
    description: "Desenvolvemos estratégias de tráfego pago e marketing digital que não só aumentam sua visibilidade, mas são meticulosamente otimizadas para maximizar seu retorno sobre investimento."
  }
];

export default function ServicosPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-sky-950 min-h-screen text-white">
      <AnimatedSection>
        <section className="py-20 overflow-hidden">
          <Container>
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-sky-400 mb-6">Serviços Orientados a Resultados</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Na Digicat, não nos contentamos apenas em entregar serviços. Nosso compromisso é com o seu sucesso. Trabalhamos incansavelmente para garantir que cada solução se traduza em resultados tangíveis para o seu negócio.
              </p>
            </motion.div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-sky-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
              <motion.div 
                className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {services.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </motion.div>
            </div>
          </Container>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20 bg-sky-900 text-white">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-sky-300">Compromisso com Seu Sucesso</h2>
                <p className="text-xl mb-8 text-gray-300">
                  Não descansamos até que você veja resultados concretos. Nossa abordagem vai além do padrão do mercado - analisamos, estrategizamos e nos dedicamos completamente ao crescimento do seu negócio.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Target className="text-sky-400 mr-2" />
                    <span>Estratégias personalizadas para seu negócio</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket className="text-sky-400 mr-2" />
                    <span>Comprometimento total com seus objetivos</span>
                  </div>
                  <div className="flex items-center">
                    <LineChart className="text-sky-400 mr-2" />
                    <span>Foco contínuo em métricas e resultados</span>
                  </div>
                </div>
                <motion.div
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={'/chat'}>
                    <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                      Inicie sua Transformação Digital
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div 
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <Image
                  src="/images/service-illustration.png"
                  alt="Compromisso Digicat com Resultados"
                  width={500}
                  height={500}
                  className="relative z-10"
                />
              </motion.div>
            </div>
          </Container>
        </section>
      </AnimatedSection>
    </div>
  );
}