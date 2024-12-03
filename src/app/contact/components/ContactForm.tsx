import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  message: string;
  error?: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Oops, we haven't got JSON!");
      }

      const responseText = await response.text();
      if (!responseText) {
        throw new Error('Resposta vazia do servidor');
      }

      const result: ApiResponse = JSON.parse(responseText);

      if (result.message) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Resposta inválida do servidor');
      }
    } catch (error) {
      setSubmitStatus('error');
      if (error instanceof Error) {
        setErrorMessage(`Erro ao enviar a mensagem: ${error.message}`);
      } else {
        setErrorMessage('Ocorreu um erro desconhecido ao enviar a mensagem.');
      }
      console.error('Error details:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-sky-900">Entre em Contato</CardTitle>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' && (
          <Alert className="mb-4 bg-green-100 border-green-400 text-green-700">
            <AlertDescription>Mensagem enviada com sucesso! Entraremos em contato em breve.</AlertDescription>
          </Alert>
        )}
        {submitStatus === 'error' && (
          <Alert className="mb-4 bg-red-100 border-red-400 text-red-700">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              {...register("name", { required: "Nome é obrigatório" })}
              className="mt-1"
              placeholder="Seu nome completo"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email é obrigatório",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email inválido"
                }
              })}
              className="mt-1"
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              {...register("phone", { required: "Telefone é obrigatório" })}
              className="mt-1"
              placeholder="(00) 00000-0000"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea
              id="message"
              {...register("message")}
              className="mt-1"
              placeholder="Conte-nos mais sobre seu projeto..."
              rows={4}
            />
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              type="submit" 
              className="w-full bg-sky-600 hover:bg-sky-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>)
  );
};

export default ContactForm;