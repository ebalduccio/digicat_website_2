import React from 'react';
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, content }) => (
  <Card className="group bg-white hover:bg-sky-50 transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-sky-500 shadow-lg hover:shadow-xl">
    <CardHeader className="relative">
      <div className="absolute top-0 right-0 w-20 h-20 bg-sky-500 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
      <CardTitle className="flex items-center space-x-3 text-2xl font-bold text-sky-900 group-hover:text-sky-700 transition-colors duration-300">
        <Image src={icon} alt={title} width={36} height={36} className="z-10" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-gray-600 group-hover:text-sky-900 transition-colors duration-300">{content}</p>
      <div className="flex items-center text-sky-600 group-hover:text-sky-700 transition-colors duration-300">
        <span className="font-semibold mr-2">Saiba mais</span>
        <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </CardContent>
  </Card>
);

interface Service extends ServiceCardProps {
  image: string;
}

export default function HomePage() {
  const services: Service[] = [
    {
      icon: '/icons/DesignIconHome.svg',
      title: 'UI/X Design',
      content: 'Transformamos ideias em realidade visual com designs de alta qualidade e centrados no usuário.',
      image: '/images/designhome.png'
    },
    {
      icon: '/icons/WebIconHome.svg',
      title: 'Páginas Web Interativas',
      content: 'Criamos experiências web envolventes que não apenas atraem, mas também convertem visitantes em clientes fiéis.',
      image: '/images/WebHome.png'
    },
    {
      icon: '/icons/ServerIconhome.svg',
      title: 'Sistemas Web e Desktop',
      content: 'Desenvolvemos sistemas robustos e escaláveis, personalizados para otimizar seus processos operacionais.',
      image: '/images/ServerHome.png'
    },
    {
      icon: '/icons/AndroidIconHome.svg',
      title: 'Aplicativos iOS e Android',
      content: 'Expandimos o alcance do seu negócio com aplicativos móveis intuitivos e de alto desempenho.',
      image: '/images/MobileHome.png'
    },
    {
      icon: '/icons/IAIconHome.svg',
      title: 'Inteligência Artificial (IA)',
      content: 'Implementamos soluções de IA para automatizar processos e fornecer insights valiosos para seu negócio.',
      image: '/images/IAHome.png'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-sky-100 to-white">
      <section className="py-20 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl font-bold text-sky-900 leading-tight">
                Soluções para <span className="text-sky-500">otimizar</span>, <span className="text-sky-500">escalar</span> e <span className="text-sky-500">impulsionar</span> seu negócio.
              </h1>
              <p className="text-xl text-gray-700">
                Transforme sua visão em realidade com nossas soluções tecnológicas de ponta.
              </p>
              <div>
                <Link href={'/contact'}>
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                    PEÇA SEU ORÇAMENTO!
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/Handcoding-bro.png"
                alt="Coding illustration"
                width={500}
                height={500}
                className="relative z-10"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sky-900 text-white">
        <Container>
          <h2 className="text-3xl font-bold text-center leading-tight">
            Desenvolvendo sistemas que fazem mais do que <span className="text-teal-300">resolver problemas</span>; <br />eles abrem novas <span className="text-cyan-300">oportunidades</span>.
          </h2>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {services.map((service, index) => (
            <div key={service.title} className={`flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6 transform hover:scale-105 transition-transform duration-300">
                <ServiceCard icon={service.icon} title={service.title} content={service.content} />
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-teal-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="relative z-10 drop-shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}