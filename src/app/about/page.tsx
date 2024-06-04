import Image from "next/image";
import Container from "../components/Container";
import Card from "./components/Card";

export default function About() {
    return (
        <>
            <section className="h-[62rem] lg:h-[44rem] bg-homebg bg-cover bg-center bg-no-repeat">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-14 items-center pt-10 lg:pt-20 justify-center">
                        <div className="flex flex-col pt-[5rem] gap-12 lg:gap-16 text-center">
                            <h1 className="text-6xl">
                                Quem somos?
                            </h1>
                            <h3 className="text-xl font-semibold">
                                Digicat nasceu da paixão pela <span className="text-homeblue">tecnologia</span> e da determinação em criar <span className="text-homeblue">soluções inovadoras</span> no universo da programação. Fundada em 2018, por Edgardo Balduccio,
                                começamos como uma pequena startup com grandes sonhos: <span className="text-homeblue">simplificar</span> a tecnologia para empresas e indivíduos, transformando <span className="text-homeblue">ideias</span> em realidade <span className="text-homeblue">acessivél</span>.
                            </h3>
                        </div>
                        <Image
                            src={'/images/Aboutimage1.png'}
                            alt="about image"
                            width={477}
                            height={477}
                        />
                    </div>
                </Container>
            </section>
            <div className="w-full flex items-center justify-center h-[10rem] bg-sky-500">
                <h1 className="text-center text-white text-2xl">
                    Na <span className="font-digicat text-teal-300">DIGICAT</span>, acreditamos que um design <span className="text-teal-300">eficiente</span> e <span className="text-teal-300">envolvente</span>
                    é crucial para o <span className="text-teal-300">sucesso</span> de qualquer projeto digital.
                </h1>
            </div>
            <section className="h-[145rem] lg:h-[100rem] bg-homebg bg-cover bg-no-repeat bg-center">
                <Container>
                    <div className="flex flex-col relative items-center gap-24">
                        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 pt-24 items-center justify-center ">
                            <Card
                                title="Inovação"
                                content="Buscamos constantemente novas ideias e abordagens."
                            />
                            <Card
                                title="Integridade"
                                content="Agimos com honestidade e transparência."
                            />
                        </div>
                        <div className="absolute hidden lg:block pt-[26rem] pr-[35rem]">
                            <Image
                                src={'/icons/Curve1.svg'}
                                alt="curve 1"
                                width={156}
                                height={156}
                            />
                        </div>
                        <div className="absolute hidden lg:block pt-[26rem] pl-[35rem]">
                            <Image
                                src={'/icons/Curve2.svg'}
                                alt="curve 2"
                                width={156}
                                height={156}
                            />
                        </div>
                        <Image
                            src={'/images/AboutImage2.png'}
                            alt="about image 2"
                            width={562}
                            height={581}
                        />
                        <div className="absolute hidden lg:block pt-[60rem] pr-[35rem]">
                            <Image
                                src={'/icons/Curve3.svg'}
                                alt="curve 3"
                                width={156}
                                height={156}
                            />
                        </div>
                        <div className="absolute hidden lg:block pt-[60rem] pl-[35rem]">
                            <Image
                                src={'/icons/Curve4.svg'}
                                alt="curve 4"
                                width={156}
                                height={156}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center justify-center ">
                            <Card
                                title="Qualidade"
                                content="Comprometemo-nos com a excelência em cada projeto."
                            />
                            <Card
                                title="Colaboração"
                                content="Acreditamos no poder da equipe."
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <section>
                <Container>
                    Nosso time
                </Container>
            </section>
        </>
    )
}