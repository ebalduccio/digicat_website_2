'use client'

import React, { useRef, useState } from 'react';
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Tipos
interface TeamMember {
    id: number;
    name: string;
    role: string;
    specialization: string;
    description: string;
    longDescription: string;
    imageSrc: string;
    skills: string[];
}

// Componentes Auxiliares
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const ParallaxText = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <AnimatedSection>
            <Card className="backdrop-blur-sm bg-gray-800/30 border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center relative">
                    <h3 className="text-2xl font-bold mb-2 text-sky-300 group-hover:text-sky-200 transition-colors duration-300">{member.name}</h3>
                    <p className="text-lg font-semibold text-sky-400 mb-1">{member.role}</p>
                    <p className="text-md text-sky-500 mb-3">{member.specialization}</p>

                    <motion.div
                        animate={{ height: isExpanded ? "auto" : "100px" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-300 mb-4">{isExpanded ? member.longDescription : member.description}</p>
                    </motion.div>

                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {member.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-sky-900/30 text-sky-300 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-sky-400 hover:text-sky-300"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        <span className="ml-2">{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                    </Button>
                </CardContent>
            </Card>
        </AnimatedSection>
    );
};

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Edgardo Balduccio",
        role: "Fundador & Desenvolvedor Fullstack",
        specialization: "Especialista em Soluções Web Completas",
        description: "Edgardo lidera nossa equipe técnica com uma visão abrangente e anos de experiência.",
        longDescription: "Edgardo lidera nossa equipe técnica com uma visão abrangente e mais de uma década de experiência no desenvolvimento de soluções web. Sua dedicação em criar aplicações robustas e escaláveis, combinada com um profundo conhecimento em arquitetura de software, tem sido fundamental para o sucesso da Digicat. Sua abordagem metódica e inovadora garante que cada projeto seja entregue com excelência técnica e valor agregado para nossos clientes.",
        imageSrc: "/images/edgardo.jpg",
        skills: ["React", "Node.js", "Express", "Python", "PHP", "MySQL"]
    },
    {
        id: 2,
        name: "Enzo Balduccio",
        role: "Co-fundador & Desenvolvedor Frontend",
        specialization: "Especialista em Interfaces de Usuário",
        description: "A paixão de Enzo por design e sua expertise em tecnologias frontend são fundamentais para criar experiências excepcionais.",
        longDescription: "A paixão de Enzo por design e sua expertise em tecnologias frontend são fundamentais para criar experiências de usuário que não apenas impressionam visualmente, mas também impulsionam o engajamento e as conversões. Com um olhar aguçado para detalhes e profundo conhecimento em UX/UI, Enzo transforma conceitos complexos em interfaces intuitivas e atraentes. Sua abordagem centrada no usuário garante que cada projeto não apenas atenda, mas supere as expectativas dos clientes.",
        imageSrc: "/images/enzo.jpg",
        skills: ["React", "Next.js", "TailwindCSS", "Figma", "UX/UI", "Frontend Architecture"]
    },
    {
        id: 3,
        name: "Thiago Rizzone",
        role: "Gestor de Tráfego & Copywriter",
        specialization: "Especialista em Marketing Digital",
        description: "Thiago é o motor por trás de nossas estratégias de marketing digital e comunicação efetiva.",
        longDescription: "Thiago é o motor por trás de nossas estratégias de marketing digital, combinando análise de dados com criatividade para desenvolver campanhas que geram resultados mensuráveis. Sua experiência em gestão de tráfego pago e copywriting estratégico permite que nossos clientes não apenas alcancem seu público-alvo, mas também estabeleçam conexões significativas que se convertem em resultados tangíveis. Sua abordagem orientada por dados garante que cada campanha seja otimizada para máximo retorno sobre investimento.",
        imageSrc: "/images/thiago.jpg",
        skills: ["Meta Ads", "Google Ads", "Copywriting", "Analytics", "SEO", "Email Marketing"]
    }
];

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
            {/* Background Elements */}
            <div className="fixed inset-0">
                <div className="absolute top-0 -left-40 w-80 h-80 bg-sky-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-32 py-20">
                {/* Hero Section */}
                <section className="min-h-[80vh] flex items-center">
                    <Container>
                        <AnimatedSection className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="flex-1 space-y-6 order-2 lg:order-1">
                                <ParallaxText>
                                    <motion.h1
                                        className="text-5xl lg:text-6xl font-bold text-sky-300 leading-tight"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        Quem somos?
                                    </motion.h1>
                                </ParallaxText>

                                <motion.p
                                    className="text-xl text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    A <span className='font-bold'>Digicat</span> tem um propósito: Aproximar sua marca dos resultados que você sempre sonhou.
                                </motion.p>
                            </div>

                            <motion.div
                                className="flex-1 relative order-1 lg:order-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative w-[600px] h-[600px] mx-auto">
                                    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-sky-500/30 shadow-2xl">
                                        <Image
                                            src="/images/digigatos.jpg"
                                            alt="Nossa Equipe"
                                            width={600}
                                            height={800}
                                            className="scale-110 hover:scale-105 transition-transform duration-500 -translate-y-20"
                                        />
                                    </div>
                                    <div className="absolute inset-0 rounded-full border-4 border-sky-400/20 animate-pulse"></div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    </Container>
                </section>

                {/* Mission Section */}
                <section>
                    <Container>
                        <AnimatedSection className="max-w-4xl mx-auto">
                            <motion.div className="space-y-8 text-center backdrop-blur-sm bg-gray-800/30 rounded-xl p-8">
                                <h2 className="text-4xl md:text-5xl font-bold text-sky-300 leading-tight">
                                    Nossa missão é clara.
                                </h2>
                                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                                    Acreditamos não apenas em crescer mais, mas em crescer melhor. E crescer melhor significa alinhar o sucesso do seu próprio negócio com o sucesso dos nossos clientes. Não descansamos até que você veja os resultados de perto.
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    </Container>
                </section>

                {/* History Section */}
                <section>
                    <Container>
                        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                            <motion.div
                                className="flex-1 relative"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/AboutImage2.png"
                                            alt="Nossa História"
                                            layout="fill"
                                            style={{ objectFit: 'cover' }}
                                            className="scale-105 hover:scale-100 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex-1 space-y-8"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8">
                                    <h2 className="text-4xl md:text-5xl font-bold text-sky-300 leading-tight mb-8">
                                        Como tudo começou...
                                    </h2>

                                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                                        <p>
                                            Em 2023, três amantes da tecnologia e do marketing digital identificaram uma mudança profunda na forma como as empresas se conectam com seus clientes. Eles perceberam que empresários e gestores não queriam mais ferramentas complicadas ou abordagens genéricas. <span className="text-sky-400 font-semibold">Eles buscavam soluções simples, integradas e que realmente trouxessem resultados claros. Inspirados por essa necessidade, nasceu a DIGICAT.</span>
                                        </p>

                                        <p>
                                            Desde então, a DIGICAT evoluiu para oferecer mais do que apenas serviços digitais. Construímos um ecossistema integrado de soluções, projetado para criar uma experiência fluida e eficiente que os empresários modernos esperam. Nosso processo é pensado minuciosamente para entregar o melhor para aqueles que escolhem a Digicat na sua empresa.
                                        </p>

                                        <p>
                                            Sob a liderança de uma equipe de especialistas apaixonados por inovação, <span className="text-sky-400 font-semibold">a DIGICAT ajuda organizações em crescimento a automatizar tarefas, aumentar sua presença online e atingir novos patamares de sucesso</span>. Com a tecnologia certa e a abordagem personalizada, garantimos que nossos parceiros estejam sempre à frente no mercado.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>

                {/* Numbers Section */}
                <section>
                    <Container>
                        <AnimatedSection>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-sky-300">Digicat em números</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8 border border-sky-500/10 hover:border-sky-500/20 transition-all duration-300"
                                >
                                    <h3 className="text-5xl font-bold text-sky-400 mb-4">+8</h3>
                                    <p className="text-xl text-gray-300">Países onde já operamos</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8 border border-sky-500/10 hover:border-sky-500/20 transition-all duration-300"
                                >
                                    <h3 className="text-5xl font-bold text-sky-400 mb-4">+40</h3>
                                    <p className="text-xl text-gray-300">Empresas crescendo com novas tecnologias</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8 border border-sky-500/10 hover:border-sky-500/20 transition-all duration-300"
                                >
                                    <h3 className="text-5xl font-bold text-sky-400 mb-4">+100</h3>
                                    <p className="text-xl text-gray-300">Acessos diários no Blog Digital</p>
                                </motion.div>
                            </div>
                        </AnimatedSection>
                    </Container>
                </section>

                {/* Growing Section */}
                <section>
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <AnimatedSection>
                                <h2 className="text-4xl md:text-5xl font-bold text-sky-300 text-center mb-16">
                                    Crescendo com Responsabilidade
                                </h2>
                            </AnimatedSection>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                <AnimatedSection>
                                    <div className="space-y-6 text-gray-300 backdrop-blur-sm bg-gray-800/30 rounded-xl p-8">
                                        <p className="text-lg leading-relaxed">
                                            A DigiCat está comprometida em transformar sonhos digitais em realidades palpáveis, construindo pontes entre marcas e pessoas, e impulsionando negócios para um futuro mais próspero. Nosso foco vai além de resultados – buscamos impacto, inovação e parcerias duradouras.
                                        </p>
                                        <p className="text-lg leading-relaxed">
                                            Com cada estratégia personalizada, cada site impecável e cada campanha cuidadosamente planejada, reafirmamos nossa missão: crescer junto com você, de forma ética, sustentável e com propósito. Porque, para nós, sucesso só faz sentido quando compartilhado.
                                        </p>
                                        <p className="text-lg leading-relaxed">
                                            Temos um compromisso com seu resultado e nos dedicaremos ao máximo para que sua empresa seja a próxima a crescer todos os dias com a internet e <span className="text-sky-400 font-semibold">obter resultados expressivos</span> no menor espaço de tempo possível.
                                        </p>
                                    </div>
                                </AnimatedSection>

                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Liderança Digital",
                                            content: "Você não quer ver seus concorrentes ultrapassarem seu negócio, certo? A inserção digital não só mantém você no jogo, mas coloca você na liderança com estratégias que funcionam como alavancas na sua empresa."
                                        },
                                        {
                                            title: "Estratégia SEO Eficiente",
                                            content: "É sobre ser encontrado facilmente pelo público, utilizando as estratégias certas. É sobre priorizar a experiência do usuário, desde a busca até a visita no seu site."
                                        },
                                        {
                                            title: "Otimização Especializada",
                                            content: "Compreendemos que fazer a otimização de sites sem nenhum tipo de orientação, não é algo tão simples. Afinal de contas, somente o Google possui mais de 200 fatores de ranqueamento."
                                        }
                                    ].map((card, index) => (
                                        <AnimatedSection key={index}>
                                            <motion.div
                                                className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-6 border border-sky-500/10 hover:border-sky-500/20 transition-all duration-300"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <h3 className="text-xl font-bold text-sky-400 mb-3">{card.title}</h3>
                                                <p className="text-gray-300">{card.content}</p>
                                            </motion.div>
                                        </AnimatedSection>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Services Hub Section */}
                <section>
                    <Container>
                        <div className="max-w-7xl mx-auto">
                            <AnimatedSection>
                                <div className="text-center mb-16 space-y-4 backdrop-blur-sm bg-gray-800/30 rounded-xl p-8">
                                    <h2 className="text-4xl md:text-5xl font-bold text-sky-300">
                                        HUB DE SERVIÇOS FORNECIDOS
                                    </h2>
                                    <h3 className="text-2xl md:text-3xl text-sky-400">
                                        Serviços Exclusivos para liderar o Mercado
                                    </h3>
                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Nossa abordagem estratégica é feita sob medida para quem busca mais do que apenas sobreviver – nós preparamos você para dominar. Com nosso plano passo a passo, garantimos resultados ou continuamos trabalhando para você sem custos adicionais.
                                    </p>
                                </div>
                            </AnimatedSection>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {teamMembers.map((member) => (
                                    <TeamMemberCard key={member.id} member={member} />
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Benefits Section */}
                <section className="pb-32">
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <AnimatedSection>
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl md:text-5xl font-bold text-sky-300 mb-6">
                                        Benefícios Claros e Diretos
                                    </h2>
                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                        Você terá 100% do nosso esforço dedicado ao seu negócio. Entregamos resultados a empresários que não aceitam ficar para trás na revolução digital e irão fazer parte da Vanguarda.
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection>
                                <div className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8 mb-12">
                                    <h3 className="text-2xl font-bold text-sky-400 mb-6 text-center">
                                        Não perca mais tempo e leve sua empresa para o próximo nível
                                    </h3>
                                    <p className="text-lg text-gray-300 text-center mb-8">
                                        Obtenha resultados reais, sem precisar perder seu tempo ou entender de tecnologia. Estamos aqui para fazer o trabalho pesado enquanto você só colhe os frutos.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="text-sky-300 font-semibold mb-4">O que você ganha:</h4>
                                            {[
                                                "Obtenha 100% do retorno de investimento",
                                                "Soluções Personalizadas e Sob medida",
                                                "Comunicação Clara e acessível",
                                                "Ajustes e reparos do serviço conforme necessário"
                                            ].map((benefit, index) => (
                                                <div key={index} className="flex items-center space-x-3 text-gray-300">
                                                    <span className="text-green-400 text-xl">✅</span>
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-sky-300 font-semibold mb-4">O que você não precisa:</h4>
                                            {[
                                                "Sem tomar seu tempo",
                                                "Sem precisar entender de tecnologia"
                                            ].map((benefit, index) => (
                                                <div key={index} className="flex items-center space-x-3 text-gray-300">
                                                    <span className="text-red-400 text-xl">❌</span>
                                                    <span>{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection className="text-center">
                                <Link href="/contact">
                                    <Button
                                        className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg font-semibold rounded-xl"
                                        size="lg"
                                    >
                                        Quero fazer parte da vanguarda digital
                                    </Button>
                                </Link>
                            </AnimatedSection>
                        </div>
                    </Container>
                </section>
            </div>
        </div>
    );
}