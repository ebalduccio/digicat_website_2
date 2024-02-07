import Link from "next/link";

import Container from "../components/Container";

import Image from "next/image";
import HomeImage from '../../../public/3imageshome.png'
import HomeCard from "../components/HomeCard";
import HomeDesign from '../../../public/designHome.png'
import DesignIconHome from '../../../public/DesignIconHome.svg'
import WebHome from '../../../public/WebHome.png'
import WebIconHome from '../../../public/WebIconHome.svg'
import ServerIconHome from '../../../public/ServerIconHome.svg'
import ServerHome from '../../../public/ServerHome.png'
import MobileHome from '../../../public/MobileHome.png'
import AndroidIconHome from '../../../public/AndroidIconHome.svg'
import IOSIconHome from '../../../public/IOSIconHome.svg'
import IAIconHome from '../../../public/IAIconHome.svg'
import IAHome from '../../../public/IAHome.png'

export default function Home() {
  return (
    <>
      <section className="h-[62rem] lg:h-[55rem] bg-homebg bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="flex flex-col gap-14 lg:flex-row items-center justify-center pt-20">
            <div className="flex flex-col gap-14 md:gap-16">
              <h1 className="text-4xl max-w-sm ">
                Nossas soluções são projetadas para <span className="text-sky-400">otimizar</span>,
                <span className="text-sky-400"> escalar</span> e <span className="text-sky-500">impulsionar</span>.
              </h1>
              <Link href={'/'}>
                <button className="w-[15rem] flex items-center justify-center h-8 bg-sky-500 hover:bg-sky-700 duration-300 rounded-full">
                  <span className="text-white font-rhd font-semibold tracking-wide text-sm">PEÇA JÁ SEU ORÇAMENTO!</span>
                </button>
              </Link>
            </div>
            <div>
              <Image
                src={HomeImage}
                alt="3 images home"
              />
            </div>
          </div>
        </Container>
      </section>
      <div className="w-full flex items-center justify-center h-[10rem] bg-sky-500">
        <h1 className="text-center text-white text-2xl">
          Desenvolvendo sistemas que fazem mais do que <span className="text-teal-300">resolver problemas</span>; eles abrem novas <span className="text-cyan-300">oportunidades</span>.
        </h1>
      </div>
      <section className="h-[420rem] xlg:h-[230rem] bg-homebg bg-cover bg-no-repeat bg-center">
        <Container>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <HomeCard
              icon={DesignIconHome}
              title="UI/X Design"
              content="Transformamos ideias em realidade visual com designs de alta qualidade e centrados no usuário. 
                Nosso objetivo é criar uma experiência visual envolvente que não apenas atraia, mas também converta visitantes em clientes fiéis."
              className="h-[32rem]"
            />
            <Image
              src={HomeDesign}
              alt="home design image"
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <Image
              src={WebHome}
              alt="home web image"
            />
            <HomeCard
              icon={WebIconHome}
              title="Páginas Web Interativas"
              content="Transformamos ideias em realidade visual com designs de alta qualidade e centrados no usuário. 
                Nosso objetivo é criar uma experiência visual envolvente que não apenas atraia, mas também converta visitantes em clientes fiéis."
              className="h-[35rem]"
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <HomeCard
              icon={ServerIconHome}
              title="Sistemas Web e Desktop"
              content="Desenvolvemos sistemas robustos e escaláveis para web e desktop,
               personalizados para atender às necessidades específicas do seu negócio. Com foco em segurança e eficiência,
                nossas soluções são projetadas para otimizar seus processos operacionais."
              className="h-[36rem]"
            />
            <Image
              src={ServerHome}
              alt="home web image"
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <Image
              src={MobileHome}
              alt="home web image"
              layout="fixed"
            />
            <HomeCard
              icon={AndroidIconHome}
              icon2={IOSIconHome}
              title="Aplicativos iOS e Android"
              content="Expandimos o alcance do seu negócio com aplicativos móveis intuitivos e de alto desempenho para plataformas iOS e Android.
               Nossos aplicativos são projetados para oferecer uma experiência de usuário impecável,
               aumentando a retenção e o engajamento do cliente."
              className="h-[40.7rem]"
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <HomeCard
              icon={IAIconHome}
              title="Sistemas Web e Desktop"
              content="Desenvolvemos sistemas robustos e escaláveis para web e desktop,
               personalizados para atender às necessidades específicas do seu negócio. Com foco em segurança e eficiência,
                nossas soluções são projetadas para otimizar seus processos operacionais."
              className="h-[38.5rem]"
            />
            <Image
              src={IAHome}
              alt="home web image"
              layout="fixed"
            />
          </div>
        </Container>
      </section>
    </>

  )
}
