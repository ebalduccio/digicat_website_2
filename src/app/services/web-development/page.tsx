'use client'

import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform, useInView } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Laptop, Code, Zap, Search, Users, Lock, Smartphone, Globe } from "lucide-react";

const services = [
  { icon: Code, title: "Desenvolvimento Frontend", description: "Criamos interfaces modernas e responsivas que encantam seus usuários." },
  { icon: Zap, title: "Desenvolvimento Backend", description: "Construímos sistemas robustos e escaláveis para suportar seu negócio." },
  { icon: Search, title: "Otimização para SEO", description: "Garantimos que seu site seja encontrado pelos motores de busca." },
  { icon: Users, title: "UX/UI Design", description: "Projetamos experiências intuitivas e agradáveis para seus clientes." },
  { icon: Lock, title: "Segurança Web", description: "Implementamos as melhores práticas de segurança para proteger seus dados." },
  { icon: Smartphone, title: "Design Responsivo", description: "Seu site se adapta perfeitamente a todos os dispositivos." },
];

const benefits = [
  { title: "Aumento da Credibilidade", description: "Um site profissional aumenta a confiança dos clientes em sua marca." },
  { title: "Alcance Global", description: "Expanda seu negócio para novos mercados e alcance clientes em todo o mundo." },
  { title: "Disponibilidade 24/7", description: "Seu site trabalha por você, mesmo quando você está dormindo." },
  { title: "Melhoria no Atendimento ao Cliente", description: "Ofereça suporte e informações instantâneas aos seus clientes." },
  { title: "Coleta de Dados Valiosos", description: "Obtenha insights sobre o comportamento dos seus clientes para tomar decisões informadas." },
  { title: "Aumento das Vendas", description: "Transforme visitantes em clientes com estratégias de conversão eficazes." },
];

const WebDevelopmentPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const ServicesSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-full bg-sky-100/80 backdrop-filter backdrop-blur-lg border-none hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <service.icon className="w-12 h-12 text-sky-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-sky-800">{service.title}</CardTitle>
                <CardDescription className="text-sky-700">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-800 via-sky-900 to-sky-400 text-sky-900 overflow-hidden">
      <Container className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent text-white">
            Desenvolvimento Web de Ponta
          </h1>
          <p className="text-2xl text-white max-w-3xl mx-auto">
            Transforme sua presença online com soluções web inovadoras e personalizadas.
          </p>
        </motion.div>

        <ServicesSection />

        <motion.div
          style={{ scale }}
          className="mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 rounded-3xl transform -rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-sky-400 rounded-3xl transform rotate-1 opacity-75"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-800">
              Por que investir em Desenvolvimento Web?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start space-x-3"
                >
                  <Globe className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sky-800">{benefit.title}</h3>
                    <p className="text-sky-700">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent text-white">
            Pronto para Elevar Sua Presença Online?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para criar a solução web perfeita para o seu negócio.
          </p>
          <Button
            size="lg"
            className="bg-sky-500 text-white text-lg px-8 py-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Solicite um Orçamento Gratuito
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default WebDevelopmentPage;