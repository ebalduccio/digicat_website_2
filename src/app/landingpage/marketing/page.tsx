'use client'

import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Container } from "@/components/ui/container";
import { CheckCircle, ArrowRight, Zap, Smartphone, PenTool, TrendingUp, Target, Clock, BarChart, Users, DollarSign, Award } from 'lucide-react';
import Image from 'next/image';

const ShiningImageBackground = React.memo(({ children }: { children: ReactNode }) => (
    <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-sky-900 rounded-lg blur-3xl opacity-30 group-hover:opacity-40 duration-300"></div>
        <div className="relative">{children}</div>
    </div>
));

ShiningImageBackground.displayName = 'ShiningImageBackground';

const MarketingLandingPage = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = useMemo(() => [
        { name: 'João Silva', position: 'Proprietário de E-commerce', content: 'Com a estratégia de gestão de tráfego personalizada, vi meus leads qualificados aumentarem em 150% em apenas 3 meses.' },
        { name: 'Maria Santos', position: 'Gerente de Marketing', content: 'A abordagem científica do marketing digital transformou completamente nossa presença online. Nosso ROI nunca foi tão alto!' },
    ], []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="bg-gradient-to-b from-gray-950 via-sky-900 to-sky-950 min-h-screen text-gray-100">
            <Container>
                <div className="py-24 flex flex-col md:flex-row items-center gap-14 justify-between">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Quanto dinheiro você está deixando na mesa por uma falta de presença online?
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-sky-200 font-thin mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Sua empresa investe em tráfego pago, mas não consegue gerar leads qualificados? Está cansado de gastar dinheiro em campanhas que não trazem o retorno esperado? Tem dificuldades em entender por que seus anúncios não convertem como deveriam?
                        </motion.p>
                        <motion.p
                            className="text-xl md:text-2xl text-sky-200 font-thin mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Se você se identifica com alguma dessas situações, saiba que não está sozinho. A boa notícia é que você já deu um passo importante apenas por estar aqui, considerando uma nova abordagem para mudar o rumo do seu negócio.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                <ArrowRight className="mr-2 h-6 w-6" /> Descubra Como Maximizar Seu ROI
                            </Button>
                        </motion.div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <ShiningImageBackground>
                            <div className="relative w-full h-[300px] md:h-[600px]">
                                <Image
                                    src='/images/marketing-strategy.jpg'
                                    alt='Estratégia de Marketing Digital'
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-lg"
                                    priority
                                />
                            </div>
                        </ShiningImageBackground>
                    </div>
                </div>
            </Container>

            <Container>
                <section className="py-24">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-sky-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Como ter leads qualificados e aumentar sua base de clientes
                    </motion.h2>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Você já investiu tempo e dinheiro em campanhas de marketing digital, mas sente que os resultados ainda não refletem o potencial do seu negócio? Esse tipo de frustração ocorre por fatores como: público errado, momento errado de anunciar, mensagens imprecisas…
                    </motion.p>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        É fato, portanto, que uma estratégia eficiente de gestão de tráfego é fundamental. A boa notícia é que podemos te entregar uma abordagem onde cada centavo investido em campanhas de tráfego é direcionado para as pessoas que realmente estão interessadas no que você tem a oferecer.
                    </motion.p>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Suas campanhas irão falar diretamente com o seu cliente ideal, no lugar certo, e no momento exato em que ele estará pronto para comprar.
                    </motion.p>
                </section>
            </Container>

            <Container>
                <section className="py-24">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-sky-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Qual é o seu objetivo?
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: DollarSign, title: "Parar de perder dinheiro", description: "Elimine campanhas ineficientes e maximize seu orçamento de marketing." },
                            { icon: Users, title: "Aumentar exposição da marca", description: "Encante novos clientes e aumente a visibilidade da sua marca ou página." },
                            { icon: Target, title: "Alcançar o público-alvo", description: "Chegue exatamente às pessoas que estão prontas para comprar." },
                            { icon: BarChart, title: "Gerar mais vendas", description: "Atraia pessoas interessadas, capture leads e aumente suas vendas." }
                        ].map((goal, index) => (
                            <Card key={index} className="bg-gray-800 border-gray-700">
                                <CardContent className="p-6">
                                    <goal.icon className="h-12 w-12 text-sky-400 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-sky-200">{goal.title}</h3>
                                    <p className="text-gray-400">{goal.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </Container>

            <Container>
                <section className="py-24">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-sky-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Marketing não é sorte, é ciência.
                    </motion.h2>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Um trabalho de tráfego de qualidade não é sobre impulsionar posts e aguardar resultados. Não é sobre ter milhares de seguidores para começar e nem sobre investir um valor específico por dia para que muitas pessoas vejam.
                    </motion.p>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        A qualidade está em segmentar para as pessoas certas e ter um perfil do seu cliente. É sobre entender a etapa da jornada de compra do seu público e criar campanhas personalizadas, direcionando o melhor formato para cada tipo de anúncio.
                    </motion.p>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Analisando o atual cenário do seu negócio, é possível realizar um trabalho de alta performance e nós estamos dispostos a te ajudar a implementar a estratégia certa no seu negócio.
                    </motion.p>
                </section>
            </Container>
            <Container>
                <section className="py-24">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-sky-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Como funciona o Trabalho de Facebook Ads
                    </motion.h2>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Os mestres estudam e planejam, os operadores executam e geram relatórios de acompanhamento dos resultados.
                        Entenda, abaixo, como cada etapa funciona:
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: "Análise de nicho", description: "Nossa equipe realiza uma análise minuciosa do mercado que seu negócio atua e identifica o público-alvo, a fim de criar campanhas bem otimizadas." },
                            { icon: TrendingUp, title: "Pesquisa de tendências", description: "Identificamos assuntos que o seu público possa gostar. Com base nisso, montamos um plano de ação que envolve a produção de conteúdo e a criação de anúncios capazes de ativar o interesse do público comprador." },
                            { icon: Zap, title: "Execução", description: "Na plataforma de anúncios do Facebook, criamos as campanhas já otimizadas. Nesse passo, nossa equipe também configura e gerencia o investimento diário de cada uma delas." },
                            { icon: Clock, title: "Reotimizações Periódicas", description: "Nossa equipe de mídia acompanha as campanhas e realiza ajustes sempre que necessário, maximizando seus resultados através de reotimizações periódicas." },
                            { icon: Users, title: "Segmentação Precisa", description: "Utilizamos a segmentação avançada do Facebook para direcionar seus anúncios ao público certo, evitando impressões desnecessárias e aumentando a qualidade e eficácia da campanha." },
                            { icon: Target, title: "Personalização Direcionada", description: "Baseados em resultados anteriores, ajustamos o raio de atuação dos anúncios, considerando fatores como gênero, idade e localização, para otimizar ao máximo seu investimento." },
                            { icon: Zap, title: "Alterações Ágeis", description: "Para campanhas de e-commerce, realizamos atualizações constantes, como ajustes de preço e estoque, garantindo respostas rápidas e eficazes às necessidades do seu negócio." },
                            { icon: BarChart, title: "Relatórios Mensais Completos", description: "Oferecemos relatórios mensais para monitorar o desempenho das suas campanhas no Facebook, começando com um relatório simples que apresenta métricas essenciais como alcance, frequência, cliques e CTR." }
                        ].map((step, index) => (
                            <Card key={index} className="bg-gray-800 border-gray-700">
                                <CardContent className="p-6">
                                    <step.icon className="h-12 w-12 text-sky-400 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-sky-200">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </Container>

            <Container>
                <section className="py-24">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-sky-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Análise Detalhada de Desempenho
                    </motion.h2>
                    <motion.p
                        className="text-xl text-center mb-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Além disso, nossa análise completa detalha dados específicos do seu site ou página do Facebook, segmentados por grupos de anúncios. Com a análise de conversão, você entenderá a eficiência das suas páginas e anúncios, possibilitando ajustes que maximizem o retorno sobre o investimento (ROI).
                    </motion.p>
                </section>
            </Container>

            <Container>
                <section className="py-24">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-16 text-sky-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Depoimentos de Quem Já Transformou Seu Negócio
                    </motion.h2>
                    <div className="max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg shadow-xl"
                            >
                                <p className="text-xl italic text-gray-300 mb-4">&quot;{testimonials[currentTestimonial].content}&quot;</p>
                                <div className="flex justify-end">
                                    <div>
                                        <p className="text-lg font-semibold text-sky-200">{testimonials[currentTestimonial].name}</p>
                                        <p className="text-sky-400">{testimonials[currentTestimonial].position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>
            </Container>

            <Container>
                <section className="py-24 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-sky-300">Comece Agora e Veja a Diferença</h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto">Transforme seu negócio, aumente suas vendas e maximize seus resultados com nossas estratégias de marketing digital personalizadas.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                            <Smartphone className="mr-2 h-6 w-6" /> Converse com um Especialista Agora
                        </Button>
                        <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                            <PenTool className="mr-2 h-6 w-6" /> Solicite Sua Análise Gratuita
                        </Button>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default MarketingLandingPage;