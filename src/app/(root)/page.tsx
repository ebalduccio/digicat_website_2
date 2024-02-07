import Link from "next/link";

import Container from "../components/Container";

import Image from "next/image";
import HomeImage from '../../../public/3imagehome.svg'

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
                <div className="w-[15rem] flex items-center justify-center h-8 bg-sky-500 hover:bg-sky-700 duration-300 rounded-full">
                  <span className="text-white font-rhd font-semibold tracking-wide text-sm">PEÇA JÁ SEU ORÇAMENTO!</span>
                </div>
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
    </>

  )
}
