import { Button } from "./ui/button"
import { Card } from "./ui/card"

export const EducationSection = () => {
  return (
    <section className="mb-32" id="educacao">
      <div className="text-center mb-16">
        <p className="text-indigo-400 font-medium mb-2">MINHA FORMAÇÃO</p>
        <h2 className="text-4xl font-bold">Educação</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            period: "2022 - 2025",
            degree: "Bacharelado em Sistemas de Informação",
            institution: "UNIFIMES - Centro Universitário de Mineiros",
            desc: "Formação com ênfase em desenvolvimento de software, algoritmos e estruturas de dados."
          },
          {
            period: "2022 - Presente",
            degree: "Monitoria de Algoritmos e Lógica de Programação",
            institution: "UNIFIMES - Centro Universitário de Mineiros",
            desc: "Auxílio a alunos no desenvolvimento de habilidades de programação"
          },
          {
            period: "2024 - 2025",
            degree: "Projeto de Extensão - Redes de Computadores",
            institution: "UNIFIMES - Centro Universitário de Mineiros",
            desc: "Participação em projeto de pesquisa e extensão na área de redes de computadores"
          },
          {
            period: "2025 - Presente",
            degree: "Aulas Práticas de DevOps",
            institution: "UNIFIMES - Centro Universitário de Mineiros",
            desc: "Ministrando aulas práticas de DevOps e CI / CD"
          },
          {
            period: "2025 - Presente",
            degree: "Projeto de Extensão - Plataforma Mobile Integrada",
            institution: "UNIFIMES - Centro Universitário de Mineiros",
            desc: "Desenvolvimento de plataforma para integração de pesquisa e extensão"
          }
        ].map((edu, idx) => (
          <Card key={idx} className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden hover:border-indigo-600/50 transition-colors shadow-lg">
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-indigo-900/40 text-indigo-300 rounded-full text-xs font-medium mb-4">
                {edu.period}
              </span>
              <h3 className="text-xl font-semibold mb-1 text-white">{edu.degree}</h3>
              <h4 className="text-indigo-400 mb-4">{edu.institution}</h4>
              <p className="text-gray-400">{edu.desc}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="!rounded-button whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-medium">
          Ver Todos os Artigos
        </Button>
      </div>
    </section>
  )
}
