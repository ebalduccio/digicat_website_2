import React from 'react';
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const ValueCard = ({ title, content, icon }: { title: string; content: string; icon: string }) => (
  <Card className="bg-white/80 backdrop-blur-md border-none shadow-lg hover:shadow-xl transition-all duration-300">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4 text-sky-500">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-sky-900">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </CardContent>
  </Card>
);

export default function About() {
  return (
    <div className="bg-gradient-to-b from-sky-100 via-white to-sky-50">
      <section className="py-20 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-sky-900 leading-tight">
                Transformando ideias em <span className="text-sky-500">realidade digital</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Digicat nasceu da paixão pela <span className="text-sky-600 font-semibold">tecnologia</span> e da determinação em criar <span className="text-sky-600 font-semibold">soluções inovadoras</span>. Desde 2018, simplificamos a tecnologia, tornando ideias acessíveis para empresas e indivíduos.
              </p>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/AboutImage1.png"
                alt="Equipe Digicat"
                width={500}
                height={500}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sky-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-4 leading-tight">
            Na <span className="font-digicat text-teal-300">DIGICAT</span>, acreditamos que um design <span className="text-teal-300">eficiente</span> e <span className="text-teal-300">envolvente</span> é crucial para o <span className="text-teal-300">sucesso</span> de qualquer projeto digital.
          </h2>
        </Container>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-blue-100 opacity-50 transform -skew-y-6"></div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon="💡"
              title="Inovação"
              content="Buscamos constantemente novas ideias e abordagens."
            />
            <ValueCard
              icon="🤝"
              title="Integridade"
              content="Agimos com honestidade e transparência."
            />
            <ValueCard
              icon="🏆"
              title="Qualidade"
              content="Comprometemo-nos com a excelência em cada projeto."
            />
            <ValueCard
              icon="🚀"
              title="Colaboração"
              content="Acreditamos no poder da equipe."
            />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-50 to-blue-50 relative overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/AboutImage2.png"
                alt="Nossa Equipe"
                width={600}
                height={600}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
            <div className="flex-1 space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-sky-900 leading-tight">Nossa Equipe: <span className="text-sky-500">O Coração da Inovação</span></h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Na Digicat, nossa equipe é o motor da inovação. Composta por profissionais apaixonados e altamente qualificados, estamos sempre prontos para enfrentar novos desafios e criar soluções que impulsionam o sucesso dos nossos clientes.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}