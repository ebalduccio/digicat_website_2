'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Zap, Users, Target, Rocket } from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Container>
        <header className="py-20 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-sky-400"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Domine o Mundo Digital e Supere Seus Concorrentes
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforme seu Negócio com Tecnologia de Ponta - Sem Ficar Para Trás
          </motion.p>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300">
              Acelere Seu Crescimento Digital Agora
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
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300">
            Agende Sua Consulta Estratégica Gratuita
            <ArrowRight className="ml-2" />
          </Button>
        </section>
      </Container>
    </div>
  );
};

export default LandingPage;