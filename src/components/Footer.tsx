import { faWhatsapp, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return (
        <footer className="bg-[#0a0a1a] border-t border-indigo-900/30 py-12">
  <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Luís Gabriel <br /> Marchió Batista</h3>
        <p className="text-gray-400 mb-6">Desenvolvedor Full Stack & Arquiteto de Software especializado em criar soluções digitais inovadoras.</p>
        <div className="flex gap-4">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/LuisMarchio03" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-4a8b58287/" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/luis_marchio/" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Links Rápidos</h4>
        <ul className="space-y-3">
          <li><a href="#sobre" className="text-gray-400 hover:text-indigo-400 transition-colors">Sobre</a></li>
          <li><a href="#projetos" className="text-gray-400 hover:text-indigo-400 transition-colors">Projetos</a></li>
          <li><a href="#roadmaps" className="text-gray-400 hover:text-indigo-400 transition-colors">Roadmaps</a></li>
          <li><a href="#blog" className="text-gray-400 hover:text-indigo-400 transition-colors">Blog</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Serviços</h4>
        <ul className="space-y-3">
          <li className="text-gray-400">Desenvolvimento Web</li>
          <li className="text-gray-400">Arquitetura de Software</li>
          <li className="text-gray-400">DevOps</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
        <ul className="space-y-3">
          <li className="text-gray-400"><FontAwesomeIcon icon={faEnvelope} className="text-indigo-400" /> luisgabrielmarchio75@gmail.com</li>
          <li className="text-gray-400"><FontAwesomeIcon icon={faWhatsapp} className="text-indigo-400" /> +55 (64) 9 9991-8525</li>
          <li className="text-gray-400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-400" /> Mineiros, Goiás, Brasil</li>
        </ul>
      </div>
    </div>
    
    <div className="border-t border-indigo-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-center md:text-left">&copy; 2026 Luís Gabriel Marchió Batista. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
    )
}