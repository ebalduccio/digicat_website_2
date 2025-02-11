'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Send, User, Download } from "lucide-react";
import Image from "next/legacy/image";
import { useSearchParams } from 'next/navigation';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
}

interface ApiResponse {
  reply: string;
}

export default function OrcamentoPage(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('');
  const [isAiTyping, setIsAiTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initialMessageSent = useRef<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setUserId(`user_${Math.random().toString(36).substr(2, 9)}`);
    if (!initialMessageSent.current) {
      addMessageWithTypingEffect({
        role: 'assistant',
        content: "Olá! Meu nome é Digiquinho! Sou o analista de projetos da Digicat. Em que posso lhe ajudar?"
      });
      initialMessageSent.current = true;
    }
  }, []);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Função para remover tags HTML e converter para texto puro
  const sanitizeHtml = (html: string): string => {
    return html
      // Remove scripts
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      // Remove eventos on*
      .replace(/\son\w+="[^"]*"/gi, '')
      // Remove iframes
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      // Remove comentários
      .replace(/<!--[\s\S]*?-->/g, '')
      // Converte algumas entidades HTML comuns
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      // Remove espaços extras
      .replace(/\s+/g, ' ')
      .trim();
  };

  const processMessage = (content: string, isTyping: boolean): JSX.Element => {
    if (isTyping) {
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
          <span className="inline-block ml-1 animate-pulse">...</span>
        </>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />;
  };

  const ThinkingAnimation = () => (
    <div className="flex items-center space-x-1 text-gray-400">
      {/* <div className="text-sm">Pensando</div> */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );

  const addMessageWithTypingEffect = (message: Message): void => {
    setIsAiTyping(true);
    setMessages(prev => [...prev, { ...message, content: '', isTyping: true }]);
    let i = 0;
    const interval = setInterval(() => {
      setMessages(prev =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { ...msg, content: message.content.slice(0, i) }
            : msg
        )
      );
      i++;
      if (i > message.content.length) {
        clearInterval(interval);
        setMessages(prev =>
          prev.map((msg, index) =>
            index === prev.length - 1
              ? { ...msg, isTyping: false }
              : msg
          )
        );
        setIsAiTyping(false);
      }
    }, 20);
  };

  const handleSend = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (input.trim() === '' || isLoading || isAiTyping) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setMessages(prev => [...prev, { role: 'assistant', content: '', isTyping: true }]);

    try {
      const clientParam = searchParams.get('client') || 'digicat';
      const response = await fetch('https://api.digicat.com.br/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          message: input,
          company_id: clientParam,
        }),
      });

      if (!response.ok) throw new Error(`API response was not ok: ${response.status}`);
      const data: ApiResponse = await response.json();
      setMessages(prev => prev.slice(0, -1));
      addMessageWithTypingEffect({ role: 'assistant', content: data.reply });
    } catch (error) {
      setMessages(prev => prev.slice(0, -1));
      addMessageWithTypingEffect({
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (): void => {
    const conversationText = messages
      .map(msg => `${msg.role === 'user' ? 'Você' : 'Digiquinho'}: ${msg.content}`)
      .join('\n\n');
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversa-digiquinho.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex flex-col pt-16 sm:pt-20 lg:pt-28">
      <Container className="flex-grow flex flex-col p-4 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-900 mb-4 sm:mb-8 text-center">
          Vamos Conversar Sobre Seu Projeto!
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-8 text-center max-w-3xl mx-auto px-4">
          Você será atendido por nossa inteligência artificial avançada, projetada para oferecer respostas rápidas e precisas.
          Um de nossos especialistas revisará a conversa em breve para garantir o melhor atendimento possível.
        </p>

        <div className="flex-grow bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden flex flex-col">
          <div className="flex-grow overflow-y-auto p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 sm:space-x-4 max-w-[85%] sm:max-w-[75%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse sm:space-x-reverse' : ''
                  }`}>
                  <div className={`flex-shrink-0 rounded-full ${message.role === 'user' ? 'bg-sky-500' : 'bg-gray-200'
                    } overflow-hidden w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center`}>
                    {message.role === 'user' ? (
                      <User className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src='/images/digiquinho.png'
                          alt='digiquinho'
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className={`rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md ${message.role === 'user'
                    ? 'bg-sky-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                    }`}>
                    <div className="text-sm sm:text-base [&>h1]:text-xl [&>h1]:font-bold [&>h1]:mb-2 
  [&>ul]:pl-4 [&>ul>li]:mb-1 [&>p]:mb-2 prose-strong:font-bold">
                      {message.isTyping && !message.content ? (
                        <ThinkingAnimation />
                      ) : (
                        processMessage(message.content, !!message.isTyping)
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t p-2 sm:p-4 bg-gray-50">
            <div className="max-w-4xl mx-auto flex items-center space-x-2 sm:space-x-4">
              <div className="flex-grow relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="w-full px-4 sm:px-6 py-2 sm:py-4 bg-white border-2 border-gray-300 rounded-full 
                    focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent 
                    text-sm sm:text-base lg:text-lg transition-all duration-300 ease-in-out"
                  disabled={isLoading || isAiTyping}
                />
              </div>
              <Button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-2 sm:p-4 
                  shadow-md sm:shadow-lg transition-all duration-300 ease-in-out flex-shrink-0"
                disabled={isLoading || isAiTyping}
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 sm:p-4 
                  shadow-md sm:shadow-lg transition-all duration-300 ease-in-out flex-shrink-0"
                type="button"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}