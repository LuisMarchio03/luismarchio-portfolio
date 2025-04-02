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
              title: "DataViz Pro",
              desc: "Plataforma de análise de dados em tempo real com visualizações interativas e dashboards personalizáveis",
              image: "https://public.readdy.ai/ai/img_res/5a9ece0fa2d46cf55d9947b2a0677e88.jpg",
              tech: ["React", "TypeScript", "Node.js", "D3.js"]
            },
            {
              title: "E-commerce Nexus",
              desc: "Sistema completo de e-commerce com gestão de produtos, pagamentos e logística integrada",
              image: "https://public.readdy.ai/ai/img_res/872830ff4dc1dc1f05e0d2da6db9a969.jpg",
              tech: ["Next.js", "MongoDB", "Stripe", "AWS"]
            },
            {
              title: "TaskFlow",
              desc: "Aplicativo de gerenciamento de projetos com recursos avançados de colaboração em equipe",
              image: "https://public.readdy.ai/ai/img_res/766d02762a2f5bff4988a4eab5134939.jpg",
              tech: ["Vue.js", "Firebase", "Express", "Socket.io"]
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
                    Ver Detalhes
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
