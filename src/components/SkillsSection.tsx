import { Card, CardContent } from "./ui/card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faDocker, faGolang, faJsSquare, faNode, faReact, faGithub, faLinux } from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"


export const SkillsSection = ({
    chartRef
}: {
    chartRef: any
}) => {
    return (
        <section className="mb-32" id="habilidades">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-2">O QUE EU FAÇO</p>
          <h2 className="text-4xl font-bold">Minhas Habilidades</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div ref={chartRef} style={{ height: '450px', width: '100%' }}></div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 inline-block relative">
                Especialidades
                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-indigo-600"></span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'React', icon: faReact },
                  { name: 'TypeScript', icon: faJsSquare },
                  { name: 'Node.js', icon: faNode },
                  { name: 'Golang', icon: faGolang },
                  { name: 'C#', icon: faCode },
                  { name: 'AWS', icon: faAws },
                  { name: 'Git', icon: faGithub },
                  { name: 'Docker', icon: faDocker },
                  { name: 'Linux', icon: faLinux }
                ].map((skill) => (
                  <div key={skill.name} className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-5 rounded-xl border border-indigo-800/30 flex items-center gap-3 hover:border-indigo-600/50 transition-colors group">
                    <FontAwesomeIcon icon={skill.icon} className="text-2xl text-indigo-400 group-hover:text-indigo-300" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 inline-block relative">
                Serviços
                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-indigo-600"></span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Desenvolvimento Web', desc: 'Criação de sites e aplicações web responsivas e de alta performance' },
                  { title: 'Arquitetura de Software', desc: 'Design e implementação de arquiteturas escaláveis e robustas' },
                  { title: 'DevOps', desc: 'Configuração de pipelines CI/CD e infraestrutura como código' }
                ].map((service, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-5 rounded-xl border border-indigo-800/30 hover:border-indigo-600/50 transition-colors">
                    <h4 className="text-xl font-medium mb-2 text-indigo-300">{service.title}</h4>
                    <p className="text-gray-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
