'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  const services: string[] = [
    'Desenvolvimento de Sites',
    'Desenvolvimento de Software',
    'Marketing Digital',
    'Inteligência Artificial',
    'Aplicativos Móveis',
    'UI/UX Design',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % services.length;
      const fullText = services[i];

      if (!isDeleting) {
        setText((current) => {
          const nextChar = fullText.charAt(current.length);
          const updatedText = current + nextChar;
          return updatedText;
        });

        if (text === fullText) {
          setIsDeleting(true);
          setTypingSpeed(2000);
        } else {
          setTypingSpeed(150 - Math.random() * 100);
        }
      } else {
        setText((current) => current.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(25);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, services, typingSpeed]);

  return (
    <div className="relative min-h-screen pt-28 md:pt-0 overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ transform: 'scaleX(-1)' }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-sky-900/80" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <Container className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-sky-400/10 to-blue-400/10 text-sky-400 text-sm font-medium px-4 py-2 rounded-full">
                Soluções Digitais
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl font-bold leading-[1.2] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Acelere o{' '}
                <span className="relative inline-block">
                  crescimento
                  {/* <motion.span
                    className="absolute hidden md:block -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  /> */}
                </span>
                {' '}da sua empresa com...
              </motion.h1>

              {/* Typing Effect */}
              <motion.div
                className="h-20 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                    {text}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block w-0.5 h-8 bg-sky-400 ml-1"
                  />
                </h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-400 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Transforme sua presença digital e alcance resultados extraordinários com nossas soluções personalizadas.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sky-500/25 group"
                >
                  <span className="flex items-center gap-2">
                    QUERO ACELERAR MEU NEGÓCIO
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link href="/about/team">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white border border-white/20 hover:bg-white/10 font-medium px-8 py-6 rounded-xl group"
                >
                  <span className="flex items-center gap-2">
                    Conheça nosso trabalho
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Hero;