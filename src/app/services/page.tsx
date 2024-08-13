'use client'

import React, { useRef } from 'react';
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Globe, Layout, Smartphone, Brain } from "lucide-react";
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
            <Card className="group bg-white hover:bg-sky-50 transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-sky-500 shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                    <motion.div
                        className="mb-4 text-sky-600 group-hover:text-sky-700 transition-colors duration-300"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Icon size={48} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-sky-900 group-hover:text-sky-700 transition-colors duration-300">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const services: ServiceCardProps[] = [
  {
    Icon: Palette,
    title: "UI/X Design",
    description: "Criamos interfaces intuitivas e centradas no usuário, transformando ideias em experiências visuais impressionantes."
  },
  {
    Icon: Globe,
    title: "Páginas Web Interativas",
    description: "Desenvolvemos sites responsivos e dinâmicos que se adaptam perfeitamente a qualquer dispositivo."
  },
  {
    Icon: Layout,
    title: "Sistemas Web e Desktop",
    description: "Projetamos soluções robustas e escaláveis que otimizam processos e aumentam a produtividade."
  },
  {
    Icon: Smartphone,
    title: "Aplicativos iOS e Android",
    description: "Criamos apps nativos e multiplataforma que proporcionam experiências excepcionais aos usuários."
  },
  {
    Icon: Brain,
    title: "Inteligência Artificial (IA)",
    description: "Implementamos soluções inteligentes que automatizam processos e fornecem insights valiosos para seu negócio."
  }
];

export default function ServicosPage() {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
      <AnimatedSection>
        <section className="py-20 overflow-hidden">
          <Container>
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-sky-900 mb-6">Nossos Serviços</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Na Digicat, transformamos suas ideias em realidade digital. Nossa equipe de especialistas oferece soluções inovadoras e de alta qualidade, adaptadas às necessidades específicas do seu negócio.
              </p>
            </motion.div>
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 right-1/4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
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
                <h2 className="text-4xl font-bold mb-6">Transforme sua visão em realidade</h2>
                <p className="text-xl mb-8">
                  Estamos prontos para enfrentar qualquer desafio e entregar resultados que superam suas expectativas. Vamos criar algo incrível juntos!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={'/contact'}>
                    <Button size="lg" className="bg-white text-sky-900 hover:bg-sky-100">
                      Solicite um orçamento
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
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-teal-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <Image
                  src="/images/service-illustration.png"
                  alt="Serviços Digicat"
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