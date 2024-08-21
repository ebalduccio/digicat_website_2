'use client'

import { usePathname } from 'next/navigation';
import Footer from './Footer/Footer';

export function FooterWrapper() {
  const pathname = usePathname();
  const isOrcamentoPage = pathname === '/orcamento';
  const isQuizPage = pathname === '/quiz';

  if (isOrcamentoPage || isQuizPage) {
    return null;
  }

  return <Footer />;
}