'use client'

import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Brain, Code, Smartphone, Settings, Target } from 'lucide-react';
import { Button } from "@/components/ui/button";

const serviceItems = [
    {
        label: 'IA (Inteligência Artificial)',
        href: '/services/ai',
        icon: Brain,
        description: 'Com a IA, você vai oferecer aos clientes uma experiência personalizada e ainda irá automatizar tarefas repetitivas como e-mails, gestão de estoque, e atendimento, liberando tempo para atividades que realmente importam.',
        buttonText: 'QUERO ECONOMIZAR TEMPO'
    },
    {
        label: 'Desenvolvimento Web',
        href: '/services/web-development',
        icon: Code,
        description: 'Um site bem desenvolvido é a vitrine do seu negócio na internet, transmitindo credibilidade para os clientes. Você terá Chatbots, formulários de contato e integração com redes sociais que impressionarão seus clientes.',
        buttonText: 'QUERO UM SITE PROFISSIONAL'
    },
    {
        label: 'Marketing Digital',
        href: '/services/marketing',
        icon: Target,
        description: 'No ambiente competitivo atual destacar-se é crucial. Você irá aumentar exponencialmente a visibilidade da sua marca e apresentará para as pessoas com maior probabilidade de comprar de você.',
        buttonText: 'QUERO MAIS CLIENTES'
    },
    {
        label: 'Software Personalizado',
        href: '/services/software',
        icon: Settings,
        description: 'Deixe que o sistema cuide das tarefas entediantes e manuais, sua equipe se concentra em atividades estratégicas, o Software servirá como um um sistema que trabalha exatamente da forma que você precisa.',
        buttonText: 'QUERO MAIS PRODUTIVIDADE'
    },
    {
        label: 'Aplicativos iOS e Android',
        href: '/services/apps',
        icon: Smartphone,
        description: 'Seus clientes terão acesso rápido a sua marca, bastando apenas um clique. As notificações, recompensas e ofertas personalizadas irão manter os clientes engajados e leais à marca, tornando-a inesquecível aos olhos dos clientes.',
        buttonText: 'QUERO SOFISTICAR MINHA MARCA'
    },
];

const ServiceCard: React.FC<{ item: typeof serviceItems[0], index: number }> = ({ item, index }) => {
    const IconComponent = item.icon;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
            <motion.div 
                className="mb-4 p-3 bg-sky-400/20 rounded-full"
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
                <IconComponent className="w-8 h-8 text-sky-600" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.label}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Button 
                    asChild
                    variant="default"
                    className="mt-auto bg-sky-500 hover:bg-sky-600 text-white"
                >
                    <a href={item.href}>{item.buttonText}</a>
                </Button>
            </motion.div>
        </motion.div>
    );
};

const TitleCard: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="bg-transparent backdrop-blur-sm rounded-lg shadow-lg p-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
            <motion.h2 
                className="text-[2.5rem] font-normal mb-4 text-sky-500"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Ao que você terá <motion.span 
                    className='font-bold'
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >acesso</motion.span>
            </motion.h2>
            <motion.p 
                className="text-white text-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                Nossa abordagem estratégica é feita sob medida para quem busca mais do que apenas o básico –
                <span className='font-bold'> nós preparamos você para dominar as ferramentas do futuro</span>. Nosso plano garante acesso às melhores ferramentas do mercado, elevando o potencial do seu negócio.
            </motion.p>
        </motion.div>
    );
};

const Services: React.FC = () => {
    return (
        <section className="py-32 bg-gradient-to-l from-gray-900 to-sky-900">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TitleCard />
                    {serviceItems.map((item, index) => (
                        <ServiceCard key={item.href} item={item} index={index + 1} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;