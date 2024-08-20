'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Send, User, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export default function OrcamentoPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Olá! Sou o assistente de orçamentos da Digicat. Como posso ajudar você hoje?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulação de resposta da IA
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "Entendi sua necessidade. Poderia me fornecer mais detalhes sobre o projeto?",
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex flex-col">
      <Container className="flex-grow flex flex-col py-8">
        <h1 className="text-4xl font-bold text-sky-900 mb-8 text-center">Vamos Conversar Sobre Seu Projeto!</h1>
        <p className="text-sm text-gray-500 mb-8 text-center max-w-3xl mx-auto">
          Você será atendido por nossa inteligência artificial avançada, projetada para oferecer respostas rápidas e precisas.
          Um de nossos especialistas revisará a conversa em breve para garantir o melhor atendimento possível.
        </p>
        <div className="flex-grow bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[70%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                >
                  <div className={`flex-shrink-0 rounded-full p-2 ${message.sender === 'user' ? 'bg-sky-500' : 'bg-gray-200'
                    }`}>
                    {message.sender === 'user' ? <User size={20} className="text-white" /> : <Bot size={20} className="text-sky-500" />}
                  </div>
                  <div
                    className={`rounded-2xl p-4 shadow-md ${message.sender === 'user'
                        ? 'bg-sky-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t p-4 bg-gray-50">
            <div className="max-w-4xl mx-auto flex items-center space-x-4">
              <div className="flex-grow relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="w-full px-6 py-4 bg-white border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-lg transition-all duration-300 ease-in-out pr-12"
                />
              </div>
              <Button
                onClick={handleSend}
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out"
              >
                <Send size={24} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}