'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type Question = {
  question: string;
  options: string[];
  hasOther?: boolean;
};

const questions: Question[] = [
  {
    question: "Qual é o principal objetivo do seu negócio nos próximos 12 meses?",
    options: [
      "Aumentar vendas",
      "Melhorar a experiência do cliente",
      "Automatizar processos internos",
      "Expandir presença digital",
      "Reduzir custos operacionais",
    ],
    hasOther: true,
  },
  {
    question: "Quais canais digitais você utiliza atualmente para atrair clientes?",
    options: [
      "Redes sociais (Facebook, Instagram, etc.)",
      "SEO e tráfego orgânico",
      "Anúncios pagos (Google Ads, Facebook Ads, etc.)",
      "Email marketing",
      "Nenhum",
    ],
    hasOther: true,
  },
  {
    question: "Você já utiliza alguma automação para tarefas repetitivas?",
    options: [
      "Sim, para atendimento ao cliente",
      "Sim, para marketing e vendas",
      "Não, mas estou interessado",
      "Não, e não considero necessário agora",
    ],
  },
  {
    question: "Como você classificaria a atual experiência do usuário em seu site ou aplicativo?",
    options: [
      "Excelente",
      "Boa",
      "Média",
      "Ruim",
      "Não tenho site/aplicativo",
    ],
  },
  {
    question: "Qual é o maior desafio que você enfrenta atualmente em seu negócio?",
    options: [
      "Aumentar a base de clientes",
      "Retenção de clientes",
      "Gerenciamento de processos internos",
      "Diferenciação da concorrência",
    ],
    hasOther: true,
  },
  {
    question: "Qual é a sua prioridade ao considerar uma solução digital?",
    options: [
      "Redução de custos",
      "Aumento de eficiência",
      "Melhoria na experiência do cliente",
      "Crescimento rápido",
      "Inovação tecnológica",
    ],
  },
  {
    question: "Você já tentou implementar alguma solução digital no passado?",
    options: [
      "Sim, com resultados positivos",
      "Sim, mas não deu certo",
      "Não, nunca tentei",
      "Não, mas estou considerando",
    ],
  },
  {
    question: "Qual é o seu orçamento estimado para investimentos em soluções digitais nos próximos 6 meses?",
    options: [
      "Menos de R$ 5.000",
      "Entre R$ 5.000 e R$ 20.000",
      "Entre R$ 20.000 e R$ 50.000",
      "Mais de R$ 50.000",
      "Ainda não defini um orçamento",
    ],
  },
];

const MarketingQuestionnaire: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleOtherAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      otherAnswer: { value: string };
    };
    const otherAnswer = target.otherAnswer.value;
    handleAnswer(otherAnswer);
  };

  const handleSubmit = () => {
    console.log("Respostas:", answers);
    // Aqui você pode adicionar a lógica para enviar as respostas para o servidor
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl bg-gray-800 text-sky-100">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-sky-300">Questionário de Marketing Digital</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="mb-6" />
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-sky-200">{currentQ.question}</h2>
            <RadioGroup onValueChange={handleAnswer} className="space-y-3">
              {currentQ.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`option-${index}`} className="text-sky-500" />
                  <Label htmlFor={`option-${index}`} className="text-sky-100">{option}</Label>
                </div>
              ))}
            </RadioGroup>
            {currentQ.hasOther && (
              <form onSubmit={handleOtherAnswer} className="mt-4">
                <Input
                  name="otherAnswer"
                  placeholder="Outro (especifique)"
                  className="bg-gray-700 text-sky-100 border-sky-500"
                />
                <Button type="submit" className="mt-2 bg-sky-600 hover:bg-sky-700 text-white">
                  Enviar Outra Opção
                </Button>
              </form>
            )}
          </div>
        </CardContent>
        <CardFooter>
          {currentQuestion === questions.length - 1 ? (
            <Button onClick={handleSubmit} className="w-full bg-sky-500 hover:bg-sky-600 text-white">
              Enviar Respostas
            </Button>
          ) : (
            <Button 
              onClick={() => setCurrentQuestion(prev => Math.min(prev + 1, questions.length - 1))} 
              className="w-full bg-sky-500 hover:bg-sky-600 text-white"
            >
              Próxima Pergunta
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default MarketingQuestionnaire;