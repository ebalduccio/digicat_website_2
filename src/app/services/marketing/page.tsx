'use client'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { motion } from 'framer-motion';
import { ArrowRight, Award, Rocket, Target, TrendingUp, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MarketingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className='min-h-screen bg-gradient-to-br pt-16 sm:pt-20 lg:pt-28 from-gray-900 to-blue-950 text-white'>
            <Container className="px-4 sm:px-6 lg:px-8">
                <header className="py-8 sm:py-12 lg:py-20 text-center">
                    <motion.h1
                        className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white px-2"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                        transition={{ duration: 0.8 }}
                    >
                        Se Atualize no Digital e Pare de Perder Espaço Para Seus Concorrentes.
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-white mb-6 sm:mb-10 max-w-2xl mx-auto px-4"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Não Descansamos Até que Você Obtenha Resultados.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={fadeIn}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="px-4"
                    >
                        <Link href={'/chat'}>
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white px-4 sm:px-8 py-4 sm:py-7 
                                rounded-md text-sm sm:text-md transition-all duration-300
                                shadow-[0_0_20px_5px_rgba(56,189,248,0.6)] 
                                hover:shadow-[0_0_30px_10px_rgba(56,189,248,0.8)]"
                            >
                                ACELERE SEU CRESCIMENTO DIGITAL AGORA
                                <ArrowRight className="ml-2 hidden sm:inline" />
                            </Button>
                        </Link>
                    </motion.div>
                </header>

                <section className="py-8 sm:py-16">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-sky-300 px-4">
                        Por que Empreendedores de Sucesso Escolhem a DIGICAT?
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
                        {[
                            { icon: TrendingUp, title: "Alavancagem Imediata", description: "Impulsione seu negócio com estratégias digitais que geram resultados rápidos e mensuráveis." },
                            { icon: Award, title: "Liderança de Mercado", description: "Posicione-se à frente da concorrência com tecnologias inovadoras e estratégias de ponta." },
                            { icon: Zap, title: "Atualização Constante", description: "Mantenha-se sempre atualizado com as últimas tendências em IA, tráfego pago e marketing digital." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border border-sky-500"
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                variants={fadeIn}
                                transition={{ duration: 0.8, delay: 0.2 * index }}
                            >
                                <feature.icon className="text-sky-400 mb-3 sm:mb-4" size={32} />
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-sky-200">{feature.title}</h3>
                                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-8 sm:py-16 bg-gray-800 rounded-xl my-8 sm:my-16 p-4 sm:p-8 border border-sky-500 mx-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-sky-300">
                        Nosso Processo de Domínio Digital
                    </h2>
                    <div className="space-y-6 sm:space-y-8">
                        {[
                            { icon: Users, title: "Análise Personalizada", description: "Entendemos seu negócio e identificamos oportunidades únicas de crescimento digital." },
                            { icon: Target, title: "Estratégia de Impacto", description: "Desenvolvemos um plano de ação focado em resultados rápidos e sustentáveis." },
                            { icon: Rocket, title: "Implementação Acelerada", description: "Colocamos sua estratégia em prática com agilidade, garantindo vantagem competitiva." },
                            { icon: TrendingUp, title: "Otimização Contínua", description: "Analisamos dados em tempo real para maximizar seu ROI e domínio de mercado." }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start space-x-3 sm:space-x-4"
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                variants={fadeIn}
                                transition={{ duration: 0.8, delay: 0.2 * index }}
                            >
                                <div className="bg-sky-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold flex-shrink-0">
                                    <step.icon size={16} className="sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-sky-200">{step.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-8 sm:py-16 text-center px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-sky-300">
                        Não Fique Para Trás na Revolução Digital
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto">
                        A cada dia que passa, seus concorrentes avançam no mundo digital. Não deixe sua empresa ficar obsoleta.
                    </p>
                    <Link href='/quiz'>
                        <Button 
                            size="lg" 
                            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white px-6 sm:px-8 py-3 
                            rounded-full text-base sm:text-lg shadow-lg transition-all duration-300"
                        >
                            Agende Sua Consulta Estratégica Gratuita
                            <ArrowRight className="ml-2 hidden sm:inline" />
                        </Button>
                    </Link>
                </section>
            </Container>
        </div>
    )
}

export default MarketingPage