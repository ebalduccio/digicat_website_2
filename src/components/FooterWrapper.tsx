'use client'

import { usePathname } from 'next/navigation';
import Footer from './Footer/Footer';

export function FooterWrapper() {
  const pathname = usePathname();
  const isOrcamentoPage = pathname === '/orcamento';
  const isQuizPage = pathname === '/quiz';
  const Chat = pathname === '/chat';

  if (isOrcamentoPage || isQuizPage  || Chat) {
    return null;
  }

  return <Footer />;
}