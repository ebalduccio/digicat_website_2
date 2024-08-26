'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Zap, TrendingUp, Shield, Users, BarChart, ChevronRight, ArrowRight, ChevronLeft, CheckCircle } from "lucide-react";
import type { LucideIcon } from 'lucide-react';

const VIDEO_URL = '/videos/iavideo.mp4';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  caseStudy: string;
}

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Aumento da Eficiência",
    description: "Automatize tarefas repetitivas e processe grandes volumes de dados rapidamente.",
    stats: "Aumento médio de 40% na produtividade",
    caseStudy: "Empresa X reduziu tempo de processamento em 60%"
  },
  {
    icon: TrendingUp,
    title: "Melhoria na Tomada de Decisões",
    description: "Utilize análises preditivas para tomar decisões mais informadas e estratégicas.",
    stats: "Precisão de previsão aumentada em 30%",
    caseStudy: "Empresa Y aumentou ROI em 25% com IA preditiva"
  },
  {
    icon: Shield,
    title: "Maior Segurança",
    description: "Detecte e previna fraudes e ameaças cibernéticas com maior precisão.",
    stats: "Redução de 50% em incidentes de segurança",
    caseStudy: "Banco Z evitou $10M em fraudes com IA"
  },
  {
    icon: Users,
    title: "Experiência do Cliente Aprimorada",
    description: "Ofereça atendimento personalizado e respostas rápidas com chatbots e assistentes virtuais.",
    stats: "Satisfação do cliente aumentou 35%",
    caseStudy: "Varejo W reduziu tempo de resposta em 80%"
  },
  {
    icon: BarChart,
    title: "Otimização de Processos",
    description: "Identifique gargalos e optimize fluxos de trabalho para maior produtividade.",
    stats: "Eficiência operacional melhorada em 45%",
    caseStudy: "Fabricante V economizou $5M/ano em otimizações"
  }
];

const transformations: string[] = [
  "Análise preditiva para prever tendências de mercado e comportamento do consumidor",
  "Chatbots e assistentes virtuais para atendimento ao cliente 24/7",
  "Automação de processos para reduzir erros e aumentar a produtividade",
  "Sistemas de recomendação para aumentar as vendas e a satisfação do cliente",
  "Manutenção preditiva para reduzir tempo de inatividade e custos de manutenção"
];

const AIServicePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
    return (
      <Card className="w-full h-full bg-white/10 backdrop-blur-lg border-none flex flex-col p-6 rounded-3xl shadow-2xl">
        <div className="flex-grow flex flex-col items-center justify-center mb-4">
          <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-6 rounded-full mb-4">
            {React.createElement(benefit.icon, { className: "w-16 h-16 text-white" })}
          </div>
          <CardTitle className="text-2xl text-sky-100 font-bold text-center">{benefit.title}</CardTitle>
        </div>
        <CardContent className="flex-shrink-0">
          <CardDescription className="text-sm text-sky-200 mb-4 text-center">{benefit.description}</CardDescription>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-3">
              <h4 className="text-sm font-semibold text-sky-300 mb-1 text-center">Impacto Comprovado</h4>
              <p className="text-xs text-sky-100 text-center">{benefit.stats}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3">
              <h4 className="text-sm font-semibold text-sky-300 mb-1 text-center">Caso de Sucesso</h4>
              <p className="text-xs text-sky-100 text-center">{benefit.caseStudy}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-sky-900 to-sky-950">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      >
        <source src={VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10">
        <Container className="py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Inteligência Artificial
              </span>
              <br />para Sua Empresa
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
              Transforme seu negócio com o poder da Inteligência Artificial. Descubra como a IA pode impulsionar a inovação, eficiência e crescimento da sua empresa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-semibold text-sky-300 mb-12 text-center">Principais Benefícios da IA</h2>
            <div className="relative flex justify-center items-center h-[500px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute"
                >
                  <BenefitCard benefit={benefits[currentIndex]} />
                </motion.div>
              </AnimatePresence>
              <Button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg text-white rounded-3xl p-8 mb-24"
          >
            <h2 className="text-3xl font-semibold mb-8 text-sky-300">Como a IA Pode Transformar Sua Empresa</h2>
            <ul className="space-y-6">
              {transformations.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-sky-100">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold text-sky-300 mb-6">Pronto para Revolucionar Seu Negócio?</h2>
            <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para ajudar você a implementar soluções de IA personalizadas para as necessidades específicas da sua empresa.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-4 rounded-md transition-all duration-300 ease-in-out group">
                Agende uma Consulta Gratuita
                <ChevronRight className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default AIServicePage;