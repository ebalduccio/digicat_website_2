'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ThankYouPageProps = {
  answers?: Record<number, string>;
};

const ThankYouPage: React.FC<ThankYouPageProps> = ({ answers = {} }) => {
  // Função para determinar as ofertas personalizadas com base nas respostas
  const getPersonalizedOffers = (answers: Record<number, string>) => {
    const offers = [];

    // Exemplo de lógica para ofertas personalizadas
    const answerValues = Object.values(answers);

    if (answerValues.includes("Aumentar vendas")) {
      offers.push({
        title: "Consultoria de Vendas",
        description: "Aumente suas vendas com nossa consultoria especializada.",
        price: "R$ 1.500/mês"
      });
    }

    if (answerValues.some(answer => answer?.includes("Redes sociais"))) {
      offers.push({
        title: "Gestão de Mídias Sociais",
        description: "Potencialize sua presença nas redes sociais.",
        price: "R$ 2.000/mês"
      });
    }

    if (answerValues.includes("Não, mas estou interessado")) {
      offers.push({
        title: "Automação de Marketing",
        description: "Implemente automação em seus processos de marketing.",
        price: "A partir de R$ 3.000"
      });
    }

    // Oferta padrão caso nenhuma condição seja atendida
    if (offers.length === 0) {
      offers.push({
        title: "Consultoria Personalizada",
        description: "Descubra como podemos ajudar seu negócio a crescer.",
        price: "Preço sob consulta"
      });
    }

    return offers;
  };

  const personalizedOffers = getPersonalizedOffers(answers);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-3xl bg-gray-800 text-sky-100">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-sky-300 text-center">Obrigado por responder nosso questionário!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-center mb-8">
            Com base em suas respostas, preparamos algumas ofertas personalizadas para você:
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {personalizedOffers.map((offer, index) => (
              <Card key={index} className="bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-sky-300">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white mb-4">{offer.description}</p>
                  <p className="text-lg font-bold text-sky-400">{offer.price}</p>
                  <Button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4">Gostaria de falar com um de nossos especialistas?</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Agende uma Consulta Gratuita
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYouPage;