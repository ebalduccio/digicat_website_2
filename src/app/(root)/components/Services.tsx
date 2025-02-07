'use client'

import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Brain, Code, Smartphone, Settings, Target, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceItems = [
    {
        label: 'IA (Inteligência Artificial)',
        href: '/services/ai',
        icon: Brain,
        description: 'Com a IA, você vai oferecer aos clientes uma experiência personalizada e ainda irá automatizar tarefas repetitivas como e-mails, gestão de estoque, e atendimento, liberando tempo para atividades que realmente importam.',
        buttonText: 'QUERO ECONOMIZAR TEMPO',
        gradient: 'from-blue-600 to-purple-600'
    },
    {
        label: 'Desenvolvimento Web',
        href: '/services/web-development',
        icon: Code,
        description: 'Um site bem desenvolvido é a vitrine do seu negócio na internet, transmitindo credibilidade para os clientes. Você terá Chatbots, formulários de contato e integração com redes sociais que impressionarão seus clientes.',
        buttonText: 'QUERO UM SITE PROFISSIONAL',
        gradient: 'from-emerald-600 to-teal-600'
    },
    {
        label: 'Marketing Digital',
        href: '/services/marketing',
        icon: Target,
        description: 'No ambiente competitivo atual destacar-se é crucial. Você irá aumentar exponencialmente a visibilidade da sua marca e apresentará para as pessoas com maior probabilidade de comprar de você.',
        buttonText: 'QUERO MAIS CLIENTES',
        gradient: 'from-orange-600 to-red-600'
    },
    {
        label: 'Software Personalizado',
        href: '/services/software-development',
        icon: Settings,
        description: 'Deixe que o sistema cuide das tarefas entediantes e manuais, sua equipe se concentra em atividades estratégicas, o Software servirá como um um sistema que trabalha exatamente da forma que você precisa.',
        buttonText: 'QUERO MAIS PRODUTIVIDADE',
        gradient: 'from-indigo-600 to-blue-600'
    },
    {
        label: 'Aplicativos iOS e Android',
        href: '/services/apps',
        icon: Smartphone,
        description: 'Seus clientes terão acesso rápido a sua marca, bastando apenas um clique. As notificações, recompensas e ofertas personalizadas irão manter os clientes engajados e leais à marca, tornando-a inesquecível aos olhos dos clientes.',
        buttonText: 'QUERO SOFISTICAR MINHA MARCA',
        gradient: 'from-pink-600 to-rose-600'
    },
];

const ServiceCard: React.FC<{ item: typeof serviceItems[0], index: number }> = ({ item, index }) => {
    const IconComponent = item.icon;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
            <Card className="relative bg-gray-900 border-0 overflow-hidden rounded-2xl">
                <CardContent className="p-6">
                    <div className="relative z-10">
                        <motion.div
                            className={`mb-6 p-4 bg-gradient-to-r ${item.gradient} rounded-xl w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                        >
                            <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-200 group-hover:to-white transition-all duration-300">
                            {item.label}
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            {item.description}
                        </p>
                        <motion.div
                            className="flex items-center"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                asChild
                                variant="ghost"
                                className={`p-0 bg-transparent hover:bg-transparent text-white group-hover:opacity-75 transition-opacity duration-300`}
                            >
                                <a href={item.href} className="flex items-center gap-2">
                                    {item.buttonText}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const TitleCard: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="col-span-full mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Ao que você terá <span className=" relative bg-gradient-to-r from-sky-400 to-blue-600 text-transparent bg-clip-text">
                        acesso
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-600"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        />
                    </span>
                </motion.h2>
                <motion.p
                    className="text-gray-400 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    Nossa abordagem estratégica é feita sob medida para quem busca mais do que apenas o básico –
                    <span className="font-bold text-white"> nós preparamos você para dominar as ferramentas do futuro</span>.
                    Nosso plano garante acesso às melhores ferramentas do mercado, elevando o potencial do seu negócio.
                </motion.p>
            </div>
        </motion.div>
    );
};

const Services: React.FC = () => {
    return (
        <section className="py-32 bg-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.1),transparent_50%)]" />
            <Container className="relative z-10">
                <TitleCard />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceItems.map((item, index) => (
                        <ServiceCard key={item.href} item={item} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;