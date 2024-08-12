import React from 'react';
import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center space-x-3 text-sky-800">
        {icon}
        <span>{text}</span>
    </div>
);

export default function ContatoPage() {
    return (
        <div className="bg-gradient-to-b from-sky-100 to-white min-h-screen">
            <section className="py-20 overflow-hidden">
                <Container>
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-sky-900 mb-6">Entre em Contato</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Estamos ansiosos para ouvir sobre seu projeto. Entre em contato conosco e vamos transformar suas ideias em realidade digital.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-sky-900 mb-6">Envie uma Mensagem</h2>
                                <form className="flex flex-col gap-4 flex-grow">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Input placeholder="Nome" />
                                        <Input placeholder="E-mail" type="email" />
                                    </div>
                                    <Input placeholder="Assunto" />
                                    <Textarea placeholder="Sua mensagem" className="min-h-[100px] flex-grow" />
                                    <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white mt-auto">
                                        Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        <div className="space-y-8 flex flex-col">
                            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <h2 className="text-2xl font-bold text-sky-900 mb-6">Informações de Contato</h2>
                                    <div className="space-y-4">
                                        <ContactInfo icon={<MapPin className="h-5 w-5" />} text="R. da Boa Viagem, 15 - Monte Serrat, Salvador - BA, 40414-610" />
                                        <ContactInfo icon={<Phone className="h-5 w-5" />} text="+55 (71) 9 9226-6505" />
                                        <ContactInfo icon={<Mail className="h-5 w-5" />} text="contato@digicat.com.br" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex-grow">
                                <CardContent className="p-0 h-full">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6419398835574!2d-38.517682224169526!3d-12.930719658990146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160530ad57a8c5%3A0x238eb9c5de51d702!2sDigicat%20-%20P%C3%A1ginas%20Web%2C%20Aplicativos%20Android%20e%20iOS%2C%20Desenvolvimento%20de%20sistemas%20em%20geral.!5e0!3m2!1ses-419!2sbr!4v1723484872402!5m2!1ses-419!2sbr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-sky-900 text-white">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Não importa o tamanho do seu projeto, estamos aqui para ajudar. Vamos criar algo incrível juntos!
                        </p>
                        <Button size="lg" className="bg-white text-sky-900 hover:bg-sky-100">
                            Agende uma Consulta Gratuita
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
}