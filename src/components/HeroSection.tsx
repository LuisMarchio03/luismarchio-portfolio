import { Button } from "./ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import bgImage from "../assets/bg.jpg";

export const HeroSection = ({
    setActiveTab
}: {
    setActiveTab: (tab: string) => void
}) => {
    const handleNavClick = (sectionId: string) => {
        setActiveTab(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };


    return (
        <div className="relative h-screen flex items-center overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/80 to-transparent"></div>
            <div className="container mx-auto px-8 relative z-10 flex flex-col items-start justify-center h-full max-w-7xl">
                <div className="max-w-2xl">
                    <div className="inline-block px-3 py-1 mb-6 border border-indigo-500 rounded-full bg-indigo-500/10 text-indigo-300">
                        <span className="text-sm font-medium tracking-wider">DESENVOLVEDOR FULL STACK</span>
                    </div>
                    <h1 className="text-6xl font-bold mb-6 leading-tight">
                        <span className="block">Olá, eu sou</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500">Luís Gabriel Marchió Batista</span>
                    </h1>
                    <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-xl">
                        Estudante de Sistemas de Informação apaixonado por backend, arquitetura de sistemas e computação distribuída. Minha jornada no desenvolvimento começou em 2019 modificando códigos de jogos.
                    </p>
                    <div className="flex gap-4">
                        <Button 
                            onClick={() => handleNavClick("projetos")}
                            className="!rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium">
                            Ver Projetos
                        </Button>
                        <Button className="!rounded-button whitespace-nowrap bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-6 text-lg font-medium">
                            <FontAwesomeIcon icon={faDownload} /> Baixar CV
                        </Button>
                    </div>
                    <div className="flex gap-6 mt-12">
                        <a target="_blank" href="https://github.com/LuisMarchio03" className="text-gray-400 hover:text-indigo-400 transition-colors">
                            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-4a8b58287/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/luis_marchio/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
