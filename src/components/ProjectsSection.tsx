import { Button } from "./ui/button"
import { Card } from "./ui/card"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { projects } from "../data/projects"

export const ProjectsSection = () => {
  return (
    <section className="mb-20 md:mb-32" id="projetos">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-indigo-400 font-medium mb-2">MEU TRABALHO</p>
        <h2 className="text-3xl md:text-4xl font-bold">Projetos em Destaque</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <Card key={idx} className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden group hover:border-indigo-600/50 transition-all duration-300 shadow-xl flex flex-col">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-44 overflow-hidden bg-[#151530]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
            </a>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-4 line-clamp-3 text-sm flex-1">{project.desc}</p>
              <div className="flex gap-2 flex-wrap mb-5">
                {project.tech.slice(0, 5).map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 rounded-full text-xs font-medium text-indigo-300">{tech}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="!rounded-button whitespace-nowrap bg-transparent hover:bg-indigo-900/50 border border-indigo-700/50 text-indigo-400 px-4 py-2 text-sm">
                    Ver Detalhes
                  </Button>
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
