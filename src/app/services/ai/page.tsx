'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, Shield, Users, BarChart, ChevronRight, ChevronLeft, CheckCircle, ArrowRight } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  caseStudy: string;
  gradient: string;
}

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Aumento da Eficiência",
    description: "Automatize tarefas repetitivas e processe grandes volumes de dados rapidamente.",
    stats: "Aumento médio de 40% na produtividade",
    caseStudy: "Empresa X reduziu tempo de processamento em 60%",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: TrendingUp,
    title: "Melhoria na Tomada de Decisões",
    description: "Utilize análises preditivas para tomar decisões mais informadas e estratégicas.",
    stats: "Precisão de previsão aumentada em 30%",
    caseStudy: "Empresa Y aumentou ROI em 25% com IA preditiva",
    gradient: "from-blue-500 to-violet-600"
  },
  {
    icon: Shield,
    title: "Maior Segurança",
    description: "Detecte e previna fraudes e ameaças cibernéticas com maior precisão.",
    stats: "Redução de 50% em incidentes de segurança",
    caseStudy: "Banco Z evitou $10M em fraudes com IA",
    gradient: "from-emerald-500 to-green-600"
  },
  {
    icon: Users,
    title: "Experiência do Cliente Aprimorada",
    description: "Ofereça atendimento personalizado e respostas rápidas com chatbots e assistentes virtuais.",
    stats: "Satisfação do cliente aumentou 35%",
    caseStudy: "Varejo W reduziu tempo de resposta em 80%",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: BarChart,
    title: "Otimização de Processos",
    description: "Identifique gargalos e optimize fluxos de trabalho para maior produtividade.",
    stats: "Eficiência operacional melhorada em 45%",
    caseStudy: "Fabricante V economizou $5M/ano em otimizações",
    gradient: "from-sky-500 to-cyan-600"
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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => (
    <Card className="w-full max-w-lg bg-gray-900/50 border-0 backdrop-blur-xl overflow-hidden">
      <div className="relative p-6">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full blur-3xl opacity-30 transform translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full blur-3xl opacity-30 transform -translate-x-16 translate-y-16" />

        <CardContent className="relative space-y-6">
          {/* Icon */}
          <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
            {React.createElement(benefit.icon, { className: "w-full h-full text-white" })}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              {benefit.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {benefit.description}
            </p>

            {/* Stats & Case Study */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Impacto Comprovado</span>
                </div>
                <p className="text-sm text-gray-300">{benefit.stats}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Caso de Sucesso</span>
                </div>
                <p className="text-sm text-gray-300">{benefit.caseStudy}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 scale-110"
        >
          <source src="/videos/iavideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/95" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Radial Gradients */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="relative">
        <Container className="pt-32 pb-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/20">
                Transformação Digital
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mt-8 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Inteligência Artificial
                </span>
                {/* <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                /> */}
              </div>
              <br />
              <span className="text-white">para Sua Empresa</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Transforme seu negócio com o poder da Inteligência Artificial.
              Descubra como a IA pode impulsionar a inovação, eficiência e crescimento da sua empresa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Button
                size="lg"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                <span className="relative flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-lg">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg">
                    Começar Agora
                  </span>
                  <ArrowRight className="w-5 h-5 text-purple-400 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              <Link href={'/chat'}>
                <Button
                  size="lg"
                  className="bg-transparent border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Ver Demonstração
                </Button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
              >
                <motion.div className="w-1.5 h-1.5 rounded-full bg-gray-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Benefits Carousel */}
          <div className="mb-32">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Principais Benefícios
              </motion.h2>
              <motion.p
                className="text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Descubra como a IA pode transformar sua empresa
              </motion.p>
            </div>

            <div className="relative flex justify-center items-center min-h-[600px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute w-full max-w-lg"
                >
                  <BenefitCard benefit={benefits[currentIndex]} />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.div
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={() => {
                    setDirection(-1);
                    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                  <span className="relative flex items-center px-4 py-2 bg-gray-900 rounded-lg">
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:-translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
                <Button
                  onClick={() => {
                    setDirection(1);
                    setCurrentIndex((prev) => (prev + 1) % benefits.length);
                  }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                  <span className="relative flex items-center px-4 py-2 bg-gray-900 rounded-lg">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Button>
              </motion.div>

              {/* Carousel Indicators
              <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'w-8 bg-blue-500'
                      : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div> */}
            </div>
          </div>

          {/* Transformations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-32"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-30" />
              <div className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                    <motion.h2
                      className="text-3xl font-bold text-white mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Como a IA Pode Transformar Sua Empresa
                    </motion.h2>
                    <motion.p
                      className="text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      Explore as diversas maneiras como nossa solução de IA pode revolucionar seus processos e resultados.
                    </motion.p>
                  </div>

                  <div className="md:w-2/3 grid gap-4">
                    {transformations.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 group hover:bg-gray-700/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        </div>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-32"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já transformaram seus negócios com nossas soluções de IA.
            </p>
            <Link href={'/contact'}>
              <Button
                size="lg"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-200" />
                <span className="relative flex items-center gap-2 px-8 py-4 bg-gray-900 rounded-lg">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-lg">
                    Iniciar Agora
                  </span>
                  <ArrowRight className="w-6 h-6 text-purple-400 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default AIServicePage;