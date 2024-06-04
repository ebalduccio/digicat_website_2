import Link from "next/link";

import Container from "../components/Container";
import HomeCard from "../components/HomeCard";

import Image from "next/image";
import OrcamentoButton from "../components/Buttons/OrcamentoButton";

export default function HomePage() {
  return (
    <>
      <section className="h-[62rem] lg:h-[44rem] bg-homebg bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="flex flex-col gap-14 lg:flex-row items-center justify-center pt-20">
            <div className="flex flex-col gap-14 md:gap-16">
              <h1 className="text-4xl max-w-sm ">
                Nossas soluções são projetadas para <span className="text-homeblue">otimizar</span>,
                <span className="text-homeblue"> escalar</span> e <span className="text-homeblue">impulsionar</span>.
              </h1>
              <OrcamentoButton>
                PEÇA SEU ORÇAMENTO!
              </OrcamentoButton>
            </div>
            <div>
              <Image
                src={'/images/Handcoding-bro.png'}
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
      <section className="h-[422rem] xlg:h-[230rem] bg-homebg bg-cover bg-no-repeat bg-center">
        <Container>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-5 pt-20 lg:pt-32">
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
              icon={'/icons/ServerIconhome.svg'}
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
              icon2={'icons/iOSIconHome.svg'}
              title="Aplicativos iOS e Android"
              content="Expandimos o alcance do seu negócio com aplicativos móveis intuitivos e de alto desempenho para plataformas iOS e Android.
               Nossos aplicativos são projetados para oferecer uma experiência de usuário impecável,
               aumentando a retenção e o engajamento do cliente."
              className="h-[36rem]"
            />
          </div>
          <div className="flex flex-col xlg:flex-row items-center justify-center gap-40 pl-6 pt-20 lg:pt-32">
            <HomeCard
              icon={'/icons/IAIconHome.svg'}
              title="Sistemas Web e Desktop"
              content="Desenvolvemos sistemas robustos e escaláveis para web e desktop,
               personalizados para atender às necessidades específicas do seu negócio. Com foco em segurança e eficiência,
                nossas soluções são projetadas para otimizar seus processos operacionais."
              className="h-[37rem]"
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
