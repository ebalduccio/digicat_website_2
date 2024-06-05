import Image from "next/image";
import Container from "../components/Container";
import BlueText from "../components/BlueText";
import TealText from "../components/TealText";
import Card from "./components/Card";

export default function Servicos() {
    return (
        <>
            <section className="h-[62rem] lg:h-[44rem] bg-homebg bg-cover bg-center bg-no-repeat">
                <Container>
                    <h1 className="text-6xl text-center pt-16">
                        Serviços
                    </h1>
                    <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center">
                        <Image
                            src={'/images/ServiceImage1.png'}
                            alt="service image 1"
                            width={481.78}
                            height={477}
                        />
                        <h3 className="lg:text-xl font-semibold">
                            Na Digicat, nos especializamos em transformar suas <BlueText content="ideias" /> em <BlueText content="realidade digital" />. Oferecemos uma gama completa de serviços de desenvolvimento e design,
                            todos focados em proporcionar <BlueText content="soluções inovadoras" /> e de <BlueText content="alta qualidade" /> que atendam às necessidades específicas do seu negócio.
                            Nossa equipe de especialistas está preparada para enfrentar qualquer desafio e entregar <BlueText content="resultados" /> que superam as expectativas.
                            Conheça mais sobre cada um de nossos serviços abaixo:
                        </h3>
                    </div>
                </Container>
            </section>
            <div className="w-full flex items-center justify-center rounded-md h-[10rem] bg-sky-500">
                <div className="flex flex-col items-center gap-2 font-semibold">
                    <h1 className="text-2xl text-white">UI/X Design:</h1>
                    <h2 className="text-center text-white text-md">
                        Criação de interfaces visuais <TealText content="intuitivas" /> e <TealText content="centradas" /> no usuário.
                    </h2>
                </div>
            </div>
            <section className="h-[85rem] lg:h-[44rem] bg-homebg bg-cover bg-center bg-no-repeat">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center pt-20 gap-20 justify-center">
                        <Card>
                            <h1 className="max-w-md font-semibold">
                                Transformamos <BlueText content="ideias" /> em <BlueText content="experiências visuais" /> impressionantes.
                                 Nossa equipe de design de UI/UX se dedica a criar interfaces <BlueText content="intuitivas" /> e <BlueText content="agradáveis" />,
                                focadas na jornada do usuário. Desde o <BlueText content="wireframe" /> até o protótipo final,
                                nosso objetivo é <BlueText content="garantir" /> que cada interação com seu produto seja <BlueText content="significativa" /> e <BlueText content="envolvente" />,
                                resultando em designs que não apenas <BlueText content="atraem" />, mas também <BlueText content="retêm" /> e <BlueText content="convertem" /> usuários.
                            </h1>
                        </Card>
                        <Image 
                            src={'/images/ServicesImage2.png'}
                            alt="service image 2"
                            width={573}
                            height={573}
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}