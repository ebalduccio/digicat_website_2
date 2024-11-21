import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    console.log('Received form data:', { name, email, phone, message });

    const smtpConfig = {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 60000,
      socketTimeout: 60000,
    };

    console.log('SMTP Configuration:', {
      ...smtpConfig,
      auth: { user: smtpConfig.auth.user, pass: '******' }, // Hide password in logs
    });

    const transporter = nodemailer.createTransport(smtpConfig);

    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const info = await transporter.sendMail({
      from: `"Formulário de Contato" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: 'Nova mensagem do formulário de contato - DigiCat',
      text: `
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Mensagem: ${message}
      `,
      html: `
        <h1>Nova mensagem do formulário de contato - DigiCat</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json({ message: 'Email enviado com sucesso', info });
  } catch (error: unknown) {
    console.error('Erro detalhado ao enviar email:', {
      error,
      stack: error instanceof Error ? error.stack : 'No stack trace available',
    });
    
    let errorMessage = 'Erro desconhecido ao enviar email';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    return NextResponse.json({ message: 'Erro ao enviar email', error: errorMessage }, { status: 500 });
  }
}