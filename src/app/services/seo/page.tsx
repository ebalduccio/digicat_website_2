'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, Search, BarChart, Globe, Zap, Target, Award, ArrowRight, CheckCircle2 } from "lucide-react";

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

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12 sm:mb-24 px-4"
  >
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
      <GradientText>SEO e Otimização</GradientText>
      <br />
      <span className="text-2xl sm:text-3xl lg:text-5xl text-gray-300">Impulsione sua Presença Online</span>
    </h1>
    <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
      Maximize sua visibilidade nos motores de busca e atraia mais clientes qualificados.
    </p>
  </motion.div>
);

const ServiceCard = ({ service, index }: any) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Card className="bg-transparent backdrop-blur-xl border-2 border-indigo-500/20 text-white h-full overflow-hidden group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="relative z-10 p-4 sm:p-6">
        <CardTitle className="flex items-center text-xl sm:text-2xl font-bold group-hover:text-pink-300 transition-colors duration-300">
          {React.createElement(service.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 mr-3 text-pink-400" })}
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 p-4 sm:p-6">
        <CardDescription className="text-gray-300 text-base sm:text-lg">{service.description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const Services = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-24 px-4"
  >
    {seoServices.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
  </motion.div>
);

const WhyInvestInSEO = () => {
  const tabContent = [
    {
      value: "visibility",
      title: "Aumente sua Visibilidade Online",
      icon: <ArrowUpRight className="w-4 h-4" />,
      content: "Com SEO otimizado, seu site aparecerá nas primeiras posições dos resultados de busca, aumentando drasticamente suas chances de ser visto por potenciais clientes."
    },
    {
      value: "traffic",
      title: "Atraia Tráfego Orgânico Qualificado",
      icon: <BarChart className="w-4 h-4" />,
      content: "SEO atrai visitantes que estão ativamente procurando por seus produtos ou serviços, resultando em leads mais qualificados e taxas de conversão mais altas."
    },
    {
      value: "credibility",
      title: "Construa Credibilidade e Autoridade",
      icon: <Award className="w-4 h-4" />,
      content: "Sites bem posicionados nos resultados de busca são vistos como mais confiáveis pelos usuários, aumentando a credibilidade da sua marca."
    },
    {
      value: "roi",
      title: "Excelente Retorno sobre Investimento",
      icon: <Target className="w-4 h-4" />,
      content: "SEO oferece um dos melhores ROIs em marketing digital, gerando tráfego contínuo e resultados duradouros ao longo do tempo."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-12 sm:mb-24 px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
        <GradientText>Por Que Investir em SEO?</GradientText>
      </h2>

      <Tabs defaultValue="visibility" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-indigo-900/50 rounded-lg p-1.5 sm:p-2 gap-1 sm:gap-2">
          {tabContent.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base py-2 sm:py-3
                data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500/20 data-[state=active]:to-indigo-500/20
                data-[state=active]:border data-[state=active]:border-pink-500/30
                transition-all duration-300"
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.value.charAt(0).toUpperCase() + tab.value.slice(1)}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabContent.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="mt-4 sm:mt-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gradient-to-br mt-14 from-indigo-900/50 to-purple-900/50 backdrop-blur-xl 
                border-2 border-indigo-500/20 text-white overflow-hidden">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl">
                    {tab.icon}
                    {tab.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{tab.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
};
const OurApproach = () => {
  const steps = [
    {
      number: "01",
      title: "Análise Aprofundada",
      description: "Avaliação completa do seu site e mercado",
      features: ["Auditoria técnica", "Análise de palavras-chave", "Estudo da concorrência"]
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      description: "Planejamento sob medida para seus objetivos",
      features: ["Definição de metas", "Roadmap detalhado", "KPIs específicos"]
    },
    {
      number: "03",
      title: "Implementação Precisa",
      description: "Execução meticulosa do plano traçado",
      features: ["Otimização técnica", "Produção de conteúdo", "Link building"]
    },
    {
      number: "04",
      title: "Monitoramento Contínuo",
      description: "Acompanhamento e ajustes constantes",
      features: ["Análise de métricas", "Relatórios mensais", "Otimização contínua"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-center mb-12 sm:mb-24 px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
        <GradientText>Nossa Abordagem</GradientText>
      </h2>
      <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
        Combinamos técnicas comprovadas com as últimas inovações em SEO para criar estratégias personalizadas.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group"
          >
            <Card className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl 
              border-2 border-indigo-500/20 text-white h-full hover:shadow-2xl transition-all duration-300
              hover:border-pink-500/30 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-indigo-500/20 
                transform rotate-45 translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />

              <CardHeader>
                <div className="text-4xl sm:text-5xl font-bold text-pink-300 mb-4 opacity-50">{step.number}</div>
                <CardTitle className="text-xl sm:text-2xl font-bold mb-2">{step.title}</CardTitle>
                <p className="text-gray-300 text-sm sm:text-base">{step.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 text-left">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-pink-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SEOPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-950 to-purple-900 text-white overflow-hidden relative">
      <GradientBackground />
      <Container className="relative mt-28 py-12 sm:py-20 lg:py-32">
        <Header />
        <Services />
        <WhyInvestInSEO />
        <OurApproach />
      </Container>
    </div>
  );
};

export default SEOPage;