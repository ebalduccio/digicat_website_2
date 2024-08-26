'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Search, BarChart, Globe, Zap, Target, Award, ArrowRight } from "lucide-react";

interface SEOService {
    icon: React.ElementType;
    title: string;
    description: string;
}

const seoServices: SEOService[] = [
    {
        icon: Search,
        title: "Otimização On-Page",
        description: "Aprimoramos elementos cruciais do seu site para melhorar o ranking nos motores de busca."
    },
    {
        icon: Globe,
        title: "Link Building",
        description: "Desenvolvemos estratégias para aumentar a autoridade do seu domínio através de backlinks de qualidade."
    },
    {
        icon: BarChart,
        title: "Análise de Dados",
        description: "Utilizamos métricas avançadas para orientar nossas estratégias e medir o sucesso das campanhas."
    },
    {
        icon: Zap,
        title: "Otimização de Velocidade",
        description: "Aceleramos o carregamento do seu site para melhorar a experiência do usuário e o ranking."
    },
    {
        icon: Target,
        title: "SEO Local",
        description: "Aumentamos sua visibilidade em buscas locais para atrair mais clientes na sua região."
    },
    {
        icon: Award,
        title: "Conteúdo Otimizado",
        description: "Criamos conteúdo relevante e otimizado para atrair tráfego orgânico qualificado."
    }
];

const GradientBackground: React.FC = () => (
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzFhMTAzNyIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIwLjciIGZpbGw9IiMzYjI0NmUiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIwIiByPSIwLjciIGZpbGw9IiMzYjI0NmUiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSI2MCIgcj0iMC43IiBmaWxsPSIjM2IyNDZlIi8+CjxjaXJjbGUgY3g9IjAiIGN5PSIzMCIgcj0iMC43IiBmaWxsPSIjM2IyNDZlIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iMzAiIHI9IjAuNyIgZmlsbD0iIzNiMjQ2ZSIvPgo8L3N2Zz4=')] opacity-20" />
);

const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 ${className}`}>
    {children}
  </span>
);

const Header: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-24"
  >
    <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
      <GradientText>SEO e Otimização</GradientText>
      <br />
      <span className="text-4xl md:text-5xl text-gray-300">Impulsione sua Presença Online</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
      Maximize sua visibilidade nos motores de busca e atraia mais clientes qualificados com nossas estratégias avançadas de SEO e otimização.
    </p>
  </motion.div>
);

const ServiceCard: React.FC<{ service: SEOService; index: number }> = ({ service, index }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateY: 5 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="bg-transparent backdrop-blur-xl border-2 border-indigo-500/20 text-white h-full overflow-hidden group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500 to-indigo-500 transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center text-2xl font-bold group-hover:text-pink-300 transition-colors duration-300">
          {React.createElement(service.icon, { className: "w-8 h-8 mr-3 text-pink-400" })}
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-gray-300 text-lg">{service.description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const Services: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
  >
    {seoServices.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
  </motion.div>
);

const WhyInvestInSEO: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mb-24"
  >
    <h2 className="text-4xl font-bold text-center mb-12">
      <GradientText>Por Que Investir em SEO?</GradientText>
    </h2>
    <Tabs defaultValue="visibility" className="w-full">
      <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 bg-indigo-900/50 rounded-lg p-2">
        <TabsTrigger value="visibility">Visibilidade</TabsTrigger>
        <TabsTrigger value="traffic">Tráfego Orgânico</TabsTrigger>
        <TabsTrigger value="credibility">Credibilidade</TabsTrigger>
        <TabsTrigger value="roi">ROI</TabsTrigger>
      </TabsList>
      {[
        { value: "visibility", title: "Aumente sua Visibilidade Online", content: "Com SEO otimizado, seu site aparecerá nas primeiras posições dos resultados de busca, aumentando drasticamente suas chances de ser visto por potenciais clientes." },
        { value: "traffic", title: "Atraia Tráfego Orgânico Qualificado", content: "SEO atrai visitantes que estão ativamente procurando por seus produtos ou serviços, resultando em leads mais qualificados e taxas de conversão mais altas." },
        { value: "credibility", title: "Construa Credibilidade e Autoridade", content: "Sites bem posicionados nos resultados de busca são vistos como mais confiáveis pelos usuários, aumentando a credibilidade da sua marca." },
        { value: "roi", title: "Excelente Retorno sobre Investimento", content: "SEO oferece um dos melhores ROIs em marketing digital, gerando tráfego contínuo e resultados duradouros ao longo do tempo." }
      ].map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Card className="bg-transparent backdrop-blur-xl border-2 border-indigo-500/20 text-white">
            <CardHeader>
              <CardTitle>{tab.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tab.content}</p>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  </motion.div>
);

const OurApproach: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="text-center mb-24"
  >
    <h2 className="text-4xl font-bold mb-8">
      <GradientText>Nossa Abordagem</GradientText>
    </h2>
    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      Combinamos técnicas comprovadas com as últimas inovações em SEO para criar estratégias personalizadas que impulsionam seu sucesso online.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {["Análise Aprofundada", "Estratégia Personalizada", "Implementação Precisa", "Monitoramento Contínuo"].map((step, index) => (
        <Card key={index} className="bg-transparent backdrop-blur-xl border-2 border-indigo-500/20 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-pink-300">{index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{step}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </motion.div>
);

const SEOPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-950 to-purple-900 text-white overflow-hidden relative">
      <GradientBackground />
      <Container className="relative py-20 md:py-32">
        <Header />
        <Services />
        <WhyInvestInSEO />
        <OurApproach />
      </Container>
    </div>
  );
};

export default SEOPage;