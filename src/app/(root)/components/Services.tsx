'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Brain, Code, Smartphone, Settings, Palette, Target, Search } from 'lucide-react';

const serviceItems = [
    { 
        label: 'IA (Inteligência Artificial)', 
        href: '/services/ai', 
        icon: Brain,
        description: 'Potencialize seu negócio com soluções de IA personalizadas, desde chatbots inteligentes até análise preditiva avançada.'
    },
    { 
        label: 'Desenvolvimento Web', 
        href: '/services/web-development', 
        icon: Code,
        description: 'Criamos websites responsivos e aplicações web robustas, utilizando as mais recentes tecnologias para uma experiência de usuário excepcional.'
    },
    { 
        label: 'Marketing Digital', 
        href: '/services/marketing', 
        icon: Target,
        description: 'Estratégias de marketing digital sob medida para aumentar sua visibilidade online, gerar leads e impulsionar as vendas.'
    },
    { 
        label: 'Software Personalizado', 
        href: '/services/software', 
        icon: Settings,
        description: 'Desenvolvemos soluções de software personalizadas para otimizar processos e aumentar a eficiência do seu negócio.'
    },
    { 
        label: 'UI/UX Design', 
        href: '/services/design', 
        icon: Palette,
        description: 'Designs intuitivos e atraentes que melhoram a experiência do usuário e fortalecem a identidade da sua marca.'
    },
    { 
        label: 'Aplicativos iOS e Android', 
        href: '/services/apps', 
        icon: Smartphone,
        description: 'Criamos aplicativos móveis nativos e cross-platform que cativam os usuários e impulsionam o engajamento.'
    },
    { 
        label: 'SEO e Otimização', 
        href: '/services/SEO', 
        icon: Search,
        description: 'Melhore sua visibilidade nos mecanismos de busca e aumente o tráfego orgânico com nossas estratégias de SEO avançadas.'
    },
];

const ServiceCard: React.FC<{ item: typeof serviceItems[0], index: number }> = ({ item, index }) => {
    const IconComponent = item.icon;
    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="mb-4 p-3 bg-sky-100 rounded-full">
                <IconComponent className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <a href={item.href} className="mt-auto text-sky-600 hover:text-sky-800 text-sm font-medium">
                Saiba mais →
            </a>
        </motion.div>
    );
};

const Services: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-l from-gray-900 to-sky-900">
            <Container>
                <h2 className="text-[2.5rem] font-bold text-center mb-4 text-white">
                    Nossas Soluções
                </h2>
                <motion.p 
                    className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Nossa abordagem estratégica é feita sob medida para quem busca mais do que apenas o básico – <strong>nós preparamos você para dominar as ferramentas do futuro.</strong> Nosso plano garante acesso às melhores ferramentas do mercado, elevando o potencial do seu negócio.
                </motion.p>
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