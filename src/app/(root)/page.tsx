import Link from "next/link";

import Container from "../components/Container";
import HomeCard from "../components/HomeCard";

import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="h-[62rem] lg:h-[44rem] bg-homebg bg-cover bg-center bg-no-repeat">
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
                src={'/images/3imageshome.png'}
                alt="3 images home"
                width={500}
                height={500}
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
              icon={'/icons/DesignIconHome.svg'}
              title="UI/X Design"
              content="Transformamos ideias em realidade visual com designs de alta qualidade e centrados no usuário. 
                Nosso objetivo é criar uma experiência visual envolvente que não apenas atraia, mas também converta visitantes em clientes fiéis."
              className="h-[32rem]"
            />
            <Image
              src={'/images/designhome.png'}
              alt="home design image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <Image
              src={'/images/WebHome.png'}
              alt="home web image"
              width={500}
              height={500}
            />
            <HomeCard
              icon={'/icons/WebIconHome.svg'}
              title="Páginas Web Interativas"
              content="Transformamos ideias em realidade visual com designs de alta qualidade e centrados no usuário. 
                Nosso objetivo é criar uma experiência visual envolvente que não apenas atraia, mas também converta visitantes em clientes fiéis."
              className="h-[35rem]"
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <HomeCard
              icon={'/icons/ServerIconHome.svg'}
              title="Sistemas Web e Desktop"
              content="Desenvolvemos sistemas robustos e escaláveis para web e desktop,
               personalizados para atender às necessidades específicas do seu negócio. Com foco em segurança e eficiência,
                nossas soluções são projetadas para otimizar seus processos operacionais."
              className="h-[36rem]"
            />
            <Image
              src={'/images/ServerHome.png'}
              alt="home web image"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <Image
              src={'/images/MobileHome.png'}
              alt="home web image"
              layout="fixed"
              width={500}
              height={500}
            />
            <HomeCard
              icon={'/icons/AndroidIconHome.svg'}
              icon2={'icons/IOSIconHome.svg'}
              title="Aplicativos iOS e Android"
              content="Expandimos o alcance do seu negócio com aplicativos móveis intuitivos e de alto desempenho para plataformas iOS e Android.
               Nossos aplicativos são projetados para oferecer uma experiência de usuário impecável,
               aumentando a retenção e o engajamento do cliente."
              className="h-[40.7rem]"
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <HomeCard
              icon={'/icons/IAIconHome.svg'}
              title="Sistemas Web e Desktop"
              content="Desenvolvemos sistemas robustos e escaláveis para web e desktop,
               personalizados para atender às necessidades específicas do seu negócio. Com foco em segurança e eficiência,
                nossas soluções são projetadas para otimizar seus processos operacionais."
              className="h-[38.5rem]"
            />
            <Image
              src={'/images/IAHome.png'}
              alt="home web image"
              layout="fixed"
              width={500}
              height={500}
            />
          </div>
        </Container>
      </section>
    </>

  )
}
