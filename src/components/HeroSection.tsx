import { Button } from "./ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCode } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { motion } from "framer-motion"
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
        <div className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            {/* Ambient dark gradient + bottom fade into page */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/70 lg:to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] to-transparent"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl py-24 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* LEFT — text */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-2xl order-2 lg:order-1"
                    >
                        <div className="inline-block px-3 py-1 mb-6 border border-indigo-500 rounded-full bg-indigo-500/10 text-indigo-300">
                            <span className="text-sm font-medium tracking-wider">DESENVOLVEDOR FULL STACK</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="block">Olá, eu sou</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-500">Luís Gabriel Marchió Batista</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-xl">
                            Estudante de Sistemas de Informação apaixonado por backend, arquitetura de sistemas e computação distribuída. Minha jornada no desenvolvimento começou em 2019 modificando códigos de jogos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => handleNavClick("projetos")}
                                className="!rounded-button whitespace-nowrap w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium">
                                Ver Projetos
                            </Button>
                            <Button className="!rounded-button whitespace-nowrap w-full sm:w-auto bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-6 text-lg font-medium">
                                <FontAwesomeIcon icon={faDownload} /> Baixar CV
                            </Button>
                        </div>
                        <div className="flex gap-6 mt-10 md:mt-12">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuisMarchio03" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-4a8b58287/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/luis_marchio/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT — stylized portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* glow blobs */}
                            <div aria-hidden className="absolute -top-10 -right-6 w-44 h-44 bg-indigo-600/30 rounded-full blur-3xl" />
                            <div aria-hidden className="absolute -bottom-12 -left-10 w-56 h-56 bg-purple-600/30 rounded-full blur-3xl" />
                            {/* tilted gradient panel behind for depth */}
                            <div aria-hidden className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-25 blur-[2px] rotate-6 scale-95" />

                            {/* gradient-bordered frame */}
                            <div className="relative w-56 sm:w-64 lg:w-[340px] aspect-[3/4] rounded-[2.5rem] p-[2px] bg-gradient-to-tr from-indigo-500/80 via-purple-500/40 to-transparent">
                                <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-[#050816]">
                                    <img
                                        src="/luis-hero.webp"
                                        alt="Luís Gabriel Marchió Batista programando"
                                        className="h-full w-full object-cover object-center"
                                        style={{
                                            maskImage: "linear-gradient(to bottom, black 76%, transparent)",
                                            WebkitMaskImage: "linear-gradient(to bottom, black 76%, transparent)",
                                        }}
                                    />
                                    {/* color-tie overlay */}
                                    <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-indigo-700/40 via-transparent to-purple-600/25 mix-blend-soft-light" />
                                    {/* inner ring */}
                                    <div aria-hidden className="absolute inset-0 rounded-[2.4rem] ring-1 ring-inset ring-white/10" />
                                </div>
                            </div>

                            {/* floating accent chip */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-3 -left-3 sm:-left-5 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0a0a1a]/80 backdrop-blur-lg border border-indigo-700/50 shadow-xl"
                            >
                                <FontAwesomeIcon icon={faCode} className="text-indigo-400" />
                                <span className="text-sm font-medium text-indigo-200">full-stack & cloud</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
