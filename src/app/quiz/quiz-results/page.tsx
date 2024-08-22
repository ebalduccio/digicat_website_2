import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const QuizResultPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-sky-900 flex items-center justify-center py-12">
            <Container className="w-full max-w-4xl">
                <div className='flex flex-col gap-12 items-center justify-center text-center'>
                    <Image
                        src={'/icons/WhiteLogo.svg'}
                        alt='Digicat logo'
                        width={200}
                        height={80}
                    />
                    <h1 className='text-white text-4xl md:text-5xl font-bold leading-tight'>
                        Existe <span className='text-sky-400'>96%</span> de chance de você aumentar o seu tráfego drasticamente.
                    </h1>
                    <p className='text-gray-300 text-lg max-w-3xl'>
                        Com base na análise, você precisa resolver vários problemas de SEO on-page e off-page.
                        Iremos analisar o perfil da sua empresa e caso se encaixe no perfil de site que atendemos,
                        nosso especialista vai entrar em contato com você para te ajudar a aumentar seu tráfego com
                        táticas avançadas.
                    </p>
                    <p className='text-sky-300 text-xl font-semibold'>
                        Precisa de ajuda imediata para conseguir mais tráfego?
                    </p>
                    <Link href="/contato" passHref>
                        <Button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            Clique aqui e fale com nosso time de especialistas
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default QuizResultPage