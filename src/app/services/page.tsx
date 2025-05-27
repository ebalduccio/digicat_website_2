'use client'

import React, { useRef } from 'react';
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Palette,
  Globe,
  Layout,
  Smartphone,
  Brain,
  Megaphone,
  Target,
  Rocket,
  LineChart,
  ChevronRight
} from "lucide-react";
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Components reusáveis
const SectionHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-16 space-y-4 text-center">
    <Badge variant="outline" className="border-sky-500/30 text-sky-400 px-4 py-1 font-medium bg-sky-950/30">
      Digicat Solutions
    </Badge>
    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
      {title}
      <span className="block mt-1 bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
        {subtitle}
      </span>
    </h2>
  </div>
);

// Hook personalizado para animações
function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Componente de destaque com animação melhorada
const FeatureHighlight = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <motion.div
    className="flex gap-4 items-start"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-3 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-500/5 border border-sky-500/10 text-sky-400">
      <Icon size={22} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
  href: string; // Added href property
}

const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description, delay = 0, href }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: delay * 0.1, ease: "easeOut" }}
      className="h-full flex"
    >
      <Link href={href} className="w-full h-full">
        <Card className="group relative h-full w-full bg-gradient-to-b from-gray-800/70 to-gray-900/90 backdrop-blur-md border-gray-700/50 overflow-hidden transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute h-[200%] w-[200%] -top-[50%] -left-[50%] bg-sky-500/30 opacity-0 group-hover:opacity-5 rotate-12 scale-0 group-hover:scale-100 transition-all duration-700"></div>
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

          <CardContent className="p-6 h-full flex flex-col">
            <div className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center bg-gradient-to-br from-sky-500/20 to-indigo-600/20 border border-sky-500/10 text-sky-400 transform-gpu group-hover:scale-110 group-hover:text-white transition-all duration-300">
              <Icon size={28} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 text-sm mb-6 grow">{description}</p>

            <div className="mt-auto">
              <div className="flex items-center text-sm font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
                <span>Saiba mais</span>
                <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const services: (ServiceCardProps & { id: number })[] = [
  {
    id: 1,
    Icon: Palette,
    title: "UI/X Design Orientado a Conversão",
    description: "Criamos interfaces que não só impressionam visualmente, mas também são estrategicamente projetadas para maximizar conversões e engajamento do usuário.",
    href: "/services/design"
  },
  {
    id: 2,
    Icon: Globe,
    title: "Páginas Web de Alto Desempenho",
    description: "Desenvolvemos sites que não apenas se adaptam a qualquer dispositivo, mas também são otimizados para velocidade e conversão, impulsionando seus resultados de negócio.",
    href: "/services/web-development"
  },
  {
    id: 3,
    Icon: Layout,
    title: "Sistemas Web e Desktop Personalizados",
    description: "Projetamos soluções sob medida que se integram perfeitamente ao seu fluxo de trabalho, aumentando significativamente a eficiência e produtividade do seu negócio.",
    href: "/services/software-development"
  },
  {
    id: 4,
    Icon: Smartphone,
    title: "Aplicativos Móveis Inovadores",
    description: "Criamos apps que não só oferecem uma experiência excepcional, mas também são estrategicamente projetados para engajar usuários e impulsionar o crescimento do seu negócio.",
    href: "/services/apps"
  },
  {
    id: 5,
    Icon: Brain,
    title: "Soluções de IA Orientadas a Resultados",
    description: "Implementamos inteligência artificial que vai além da automação, fornecendo insights acionáveis e impulsionando decisões estratégicas para o crescimento do seu negócio.",
    href: "/services/ai"
  },
  {
    id: 6,
    Icon: Megaphone,
    title: "Marketing Digital Focado em ROI",
    description: "Desenvolvemos estratégias de tráfego pago e marketing digital que não só aumentam sua visibilidade, mas são meticulosamente otimizadas para maximizar seu retorno sobre investimento.",
    href: "/services/marketing"
  }
];

export default function ServicosPage() {
  const { scrollYProgress } = useScroll();
  const y1 = useParallax(scrollYProgress, 100);
  const y2 = useParallax(scrollYProgress, -100);
  const ref = useRef(null);

  return (
    <main className="relative bg-gray-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-3/4 right-0 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Hero section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="border-sky-500/30 text-sky-400 px-4 py-1 font-medium bg-sky-950/30 mb-6">
              Serviços Digicat
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Soluções Digitais
              <span className="block mt-2 bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Orientadas a Resultados
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
              Na Digicat, não nos contentamos apenas em entregar serviços. Nosso compromisso é com o seu sucesso.
              Trabalhamos incansavelmente para garantir que cada solução se traduza em resultados tangíveis para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white border-0 shadow-lg shadow-sky-800/30 transition-all duration-300">
                Conheça Nossos Serviços
              </Button>
              <Button size="lg" className="border-sky-500/40 hover:border-sky-400 text-white hover:bg-sky-500/5 transition-all duration-300">
                <span>Entre em Contato</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <div className="mt-16 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="p-1 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500">
                  <div className="w-auto h-auto overflow-hidden rounded-2xl">
                    <Image
                      src="/images/service-illustration.png"
                      alt="Digicat Services"
                      width={800}
                      height={400}
                      className="w-auto h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Container>

        {/* Blur circle decorations */}
        <motion.div style={{ y: y1 }} className="absolute top-1/4 right-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-64 h-64 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></motion.div>
      </section>

      {/* Services section */}
      <section ref={ref} className="py-24 bg-gray-950/70 backdrop-blur-lg relative z-10">
        <Container>
          <SectionHeading
            title="Soluções Digitais"
            subtitle="Que Transformam Negócios"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                Icon={service.Icon}
                title={service.title}
                description={service.description}
                delay={service.id}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Our Process / Testimonials section */}
      <section className="py-24 relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <Badge variant="outline" className="border-sky-500/30 text-sky-400 px-4 py-1 font-medium bg-sky-950/30 mb-6">
                Nossa Abordagem
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Compromisso com
                <span className="block mt-1 text-sky-400">Resultados Reais</span>
              </h2>

              <p className="text-gray-300 mb-8">
                Não descansamos até que você veja resultados concretos. Nossa abordagem vai além do padrão do mercado - analisamos,
                estrategizamos e nos dedicamos completamente ao crescimento do seu negócio.
              </p>

              <div className="space-y-5 mb-10">
                <FeatureHighlight
                  icon={Target}
                  title="Estratégias Personalizadas"
                  description="Soluções únicas adaptadas às necessidades específicas do seu negócio."
                />
                <FeatureHighlight
                  icon={Rocket}
                  title="Comprometimento com Objetivos"
                  description="Trabalhamos em parceria para alcançar seus objetivos de negócio."
                />
                <FeatureHighlight
                  icon={LineChart}
                  title="Foco em Métricas e ROI"
                  description="Monitoramento constante para garantir resultados mensuráveis."
                />
              </div>

              <Button className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-medium shadow-lg shadow-sky-800/30 transition-all duration-300">
                <span>Inicie sua transformação digital</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Decorative gradient backgrounds */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-600/10 to-indigo-600/10 rounded-2xl blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-indigo-600/10 rounded-xl"></div>

              <div className="relative p-8 bg-gray-900/70 backdrop-blur-lg rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                {/* Success metrics */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="text-3xl font-bold text-sky-400 mb-1">94%</div>
                    <div className="text-sm text-gray-400">Clientes satisfeitos</div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="text-3xl font-bold text-sky-400 mb-1">310%</div>
                    <div className="text-sm text-gray-400">Aumento médio em ROI</div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="text-3xl font-bold text-sky-400 mb-1">12 dias</div>
                    <div className="text-sm text-gray-400">Tempo médio de deploy</div>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="text-3xl font-bold text-sky-400 mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Suporte dedicado</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/50 rounded-lg border border-gray-700/50">
                  <div className="absolute top-2 left-4 text-5xl text-sky-600/20 font-serif">&quot;</div>
                  <p className="relative text-gray-300 italic mb-4">
                    A equipe da Digicat transformou completamente nossa presença digital. Nossas conversões aumentaram 200% em apenas 3 meses de trabalho. Recomendo sem hesitar!
                  </p>
                  <div className="flex items-center">
                    {/* <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 mr-3">
                      <div className="w-full h-full bg-gradient-to-br from-sky-400 to-indigo-600"></div>
                    </div> */}
                    <div>
                      <div className="font-medium text-white">Ricardo Almeida</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-sky-950/95 relative">
        <div className="absolute inset-0 bg-gray-950/30 backdrop-blur-sm"></div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="outline" className="border-sky-500/30 text-sky-400 px-4 py-1 font-medium bg-sky-950/30 mb-6">
              Vamos começar?
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Pronto para transformar sua
              <span className="block mt-1 bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
                presença digital?
              </span>
            </h2>

            <p className="text-gray-300 mb-10">
              Agende uma consultoria gratuita e descubra como nossos serviços podem impulsionar seu negócio para o próximo nível.
            </p>

            <Button size="lg" className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-medium shadow-lg shadow-sky-800/30 px-8 py-6 text-lg transition-all duration-300">
              <span>Agendar Consultoria Gratuita</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>

            <p className="text-gray-500 text-sm mt-6">
              Resposta em até 24 horas. Sem compromisso.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}