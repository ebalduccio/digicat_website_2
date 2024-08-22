'use client'

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface Question {
    question: string;
    options: string[];
}

interface UserInfo {
    name: string;
    email: string;
    phone: string;
}

const questions: Question[] = [
    {
        question: "Quanto você investe em tráfego pago na sua empresa? (Não será compartilhado)",
        options: [
            "Menos de R$1000/mês",
            "R$1000 - R$5000/mês",
            "Mais de R$5000/mês"
        ]
    },
    {
        question: "Você tem algum sistema de monitoramento das suas métricas online?",
        options: [
            "Sim",
            "Não"
        ]
    },
    {
        question: "Quantos posts por mês você realiza no Instagram ou sites de blogs?",
        options: [
            "1-5",
            "5-10",
            "10-20",
            "20-30",
            "+30",
        ]
    },
    {
        question: "Você já utiliza ferramentas de inteligência artificial no seu negócio?",
        options: [
            "Sim",
            "Não",
        ]
    },
    {
        question: "Qual é o seu nível de satisfação com seus resultados online atuais?",
        options: [
            "Muito satisfeito",
            "Satisfeito",
            "Insatisfeito",
            "Muito insatisfeito"
        ]
    }
];

const QuizPage: React.FC = () => {
    const [step, setStep] = useState<number>(0);
    const [url, setUrl] = useState<string>('');
    const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''));
    const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', email: '', phone: '' });

    const progress = ((step + 1) / (questions.length + 2)) * 100;

    const handleNext = () => {
        if (step < questions.length + 1) setStep(step + 1);
    };

    const handlePrevious = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleAnswer = (answer: string) => {
        const newAnswers = [...answers];
        newAnswers[step - 1] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        console.log('URL:', url);
        console.log('Answers:', answers);
        console.log('User Info:', userInfo);
        // Aqui você implementaria a lógica para enviar os dados para seu backend
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-sky-900 flex items-center justify-center p-4">
            <Container className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
                <Progress
                    value={progress}
                    className="w-full mb-8 h-2 bg-gray-200 [&>div]:bg-sky-600"
                />

                {step === 0 && (
                    <>
                        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 leading-tight">
                            Quer começar a ter resutados usando a internet?
                        </h1>
                        <p className="text-xl mb-8 text-center text-gray-600">
                            Coloque a URL da sua empresa. Eu vou analisá-la com meu software enquanto você responde 5 perguntas rápidas do quiz.
                        </p>
                        <div className="space-y-4">
                            <Input
                                type="text"
                                placeholder="www.seusite.com"
                                value={url}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
                                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                            />
                            <Button onClick={handleNext} className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
                                Começar Análise <ArrowRight className="ml-2" />
                            </Button>
                            <Button onClick={handleNext} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out">
                                Ainda não tenho um site <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </>
                )}

                {step > 0 && step <= questions.length && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                            {questions[step - 1].question}
                        </h2>
                        <RadioGroup
                            className="space-y-4"
                            value={answers[step - 1]}
                            onValueChange={handleAnswer}
                        >
                            {questions[step - 1].options.map((option, index) => (
                                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-sky-50 transition-all cursor-pointer">
                                    <RadioGroupItem value={option} id={`option-${index}`} className="text-sky-600" />
                                    <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">{option}</Label>
                                    {answers[step - 1] === option && <CheckCircle className="text-sky-600" />}
                                </div>
                            ))}
                        </RadioGroup>
                        <div className="flex justify-between mt-8">
                            <Button onClick={handlePrevious} className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg transition-all">
                                <ArrowLeft className="mr-2" /> Voltar
                            </Button>
                            <Button onClick={handleNext} className="bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-lg transition-all">
                                {step === questions.length ? 'Finalizar' : 'Próxima'} <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </div>
                )}

                {step > questions.length && (
                    <>
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                            Última etapa!
                        </h2>
                        <p className="text-xl mb-8 text-center text-gray-600">
                            Conclua as etapas finais para receber a análise customizada do seu negócio.
                        </p>
                        <div className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Seu nome"
                                value={userInfo.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, name: e.target.value })}
                                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                            />
                            <Input
                                type="email"
                                placeholder="Seu e-mail"
                                value={userInfo.email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, email: e.target.value })}
                                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                            />
                            <Input
                                type="tel"
                                placeholder="Seu telefone"
                                value={userInfo.phone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInfo({ ...userInfo, phone: e.target.value })}
                                className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all"
                            />
                            <Link href={'/quiz/quiz-results'} className='mt-4'>
                                <Button onClick={handleSubmit} className="w-full bg-sky-600 hover:bg-sky-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
                                    Receber Minha Análise Gratuita <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </>
                )}
            </Container>
        </div>
    );
};

export default QuizPage;