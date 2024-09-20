'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

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
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ transform: 'scaleX(-1)' }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/homevideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />
      <Container className="relative z-10 min-h-screen flex items-center justify-start">
        <div className="text-white text-left max-w-xl">
          <div className='mb-14'>
            <motion.h2
              className="text-6xl leading-[70px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Acelere o <span className='font-bold'>crescimento</span> da sua empresa com...
            </motion.h2>
            <motion.div
              className="text-4xl font-semibold h-20 leading-[70px] relative tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-green-500 text-transparent bg-clip-text">
                {text}
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-4 mt-4 rounded-md text-sm transition-all duration-300 tracking-wider"
            >
              QUERO ACELERAR MEU NEGÓCIO
              <ArrowRight className="ml-2" />
            </Button> */}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;