import { Button } from "./ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons"

export const AboutSection = () => {
    return (
        <section className="mb-20 md:mb-32" id="sobre">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                <div className="w-full md:w-1/2">
                    <div className="relative">
                        <div className="w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden border border-indigo-900/30">
                            <img
                                src="/luis.jpg"
                                alt="Luís Gabriel Marchió Batista"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-2 p-4 md:-bottom-6 md:-right-6 md:p-6 bg-indigo-900/80 backdrop-blur-lg rounded-2xl border border-indigo-700/50 shadow-xl">
                            <div className="text-center">
                                <p className="text-3xl md:text-4xl font-bold text-white mb-1">3+</p>
                                <p className="text-xs md:text-sm text-indigo-200">Anos de Experiência</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
                        Sobre Mim
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-600"></span>
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Sou um desenvolvedor Full-Stack apaixonado por tecnologia, com foco especial em arquitetura de software e soluções backend de alta performance. Bacharel em Sistemas de Informação pela UNIFIMES, atuo como Desenvolvedor Full-Stack Pleno construindo soluções tecnológicas inovadoras e, atualmente, me especializo em arquitetura de software, cloud e cybersecurity.
                    </p>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Minha trajetória no universo da programação teve início em 2019, quando descobri minha vocação tecnológica através de modificações de códigos de jogos. Essa experiência inicial despertou uma curiosidade profunda que rapidamente se transformou em uma paixão pelo desenvolvimento de software.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="min-w-0">
                            <h4 className="text-indigo-400 font-medium mb-2">Nome</h4>
                            <p className="text-white">Luís Gabriel Marchió Batista</p>
                        </div>
                        <div className="min-w-0">
                            <h4 className="text-indigo-400 font-medium mb-2">Email</h4>
                            <p className="text-white break-words">luisgabrielmarchio75@gmail.com</p>
                        </div>
                        <div>
                            <h4 className="text-indigo-400 font-medium mb-2">Localização</h4>
                            <p className="text-white">Mineiros, Goiás, Brasil</p>
                        </div>
                        <div>
                            <h4 className="text-indigo-400 font-medium mb-2">Disponibilidade</h4>
                            <p className="text-white">Freelance & Contrato</p>
                        </div>
                    </div>

                    <Button asChild className="!rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium">
                        <a href="/curriculo.pdf" download="Curriculo-Luis-Gabriel-Marchio-Batista.pdf">
                            <FontAwesomeIcon icon={faDownload} /> Baixar Currículo
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
