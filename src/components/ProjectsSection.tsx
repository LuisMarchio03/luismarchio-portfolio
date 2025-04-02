import { Button } from "./ui/button"
import { Card } from "./ui/card"

export const ProjectsSection = () => {
    return (
        <section className="mb-32" id="projetos">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-2">MEU TRABALHO</p>
          <h2 className="text-4xl font-bold">Projetos em Destaque</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Aloy",
              desc: "Aloy é um assistente virtual projetado para centralizar e automatizar tarefas do dia a dia. Esta versão do projeto implementa a interface desktop utilizando Electron, permitindo interação direta com o sistema operacional, integração com APIs e suporte a comandos de voz.",
              image: "/Aloy.png",
              tech: ["Next.j", "TypeScript", "Node.js", "Python.js", "Golang", "Microservices", "DevOps"],
              link: "https://github.com/LuisMarchio03/aloy-desktop-electron-v0"
            },
            {
              title: "8-bit Chronicles",
              desc: "Bem-vindo ao 8-Bit Chronicles, um espaço onde a nostalgia do pixel art se encontra com as inovações da era digital. Aqui, exploramos desde os clássicos atemporais dos videogames até as mais recentes tendências em tecnologia, sempre com um olhar analítico e apaixonado.",
              image: "/blog.png",
              tech: ["Next.js", "Supabase"],
              link: "https://github.com/LuisMarchio03/8-bit_chronicles_blog"
            },
            {
              title: "BrigidAI - Dicom Image Manager",
              desc: "Plataforma de análise de imagens médicas em DICOM, utilizando machine learning para auxiliar diagnósticos. Inclui um sistema seguro de upload e armazenamento, pré-processamento otimizado, inferência com modelos de IA (provavelmente TensorFlow) e uma API eficiente para comunicação entre componentes. A interface web permite visualização avançada, comparação de exames e revisão médica. A infraestrutura é escalável com Kubernetes, monitorada via Prometheus e Grafana, e otimizada para custos com instâncias spot e estratégias híbridas.",
              image: "/BrigidAI.png",
              tech: ["Next.j", "TypeScript", "Node.js", "Python.js", "Golang", "Microservices", "Cloud", "DevOps"],
              link: ""
            }
          ].map((project, idx) => (
            <Card key={idx} className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden group cursor-pointer hover:border-indigo-600/50 transition-all duration-300 shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.desc}</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 rounded-full text-xs font-medium text-indigo-300">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button className="!rounded-button whitespace-nowrap bg-transparent hover:bg-indigo-900/50 border border-indigo-700/50 text-indigo-400 px-4 py-2 text-sm">
                    <a target="_blank" href={project.link}>Ver Detalhes</a>
                  </Button>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="!rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium">
            Ver Todos os Projetos
          </Button>
        </div>
      </section>   
    )
}
