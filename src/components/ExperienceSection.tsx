import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"


export const ExperienceSection = () => {
    return (
        <section className="mb-32" id="experiencia">
    <div className="text-center mb-16">
      <p className="text-indigo-400 font-medium mb-2">MINHA JORNADA</p>
      <h2 className="text-4xl font-bold">Experiência Profissional</h2>
    </div>
    
    <div className="relative border-l-2 border-indigo-900 ml-6 md:ml-0 md:mx-auto md:max-w-3xl pl-8 space-y-12">
      {[
        {
          period: "2024 - Presente",
          role: "Desenvolvedor de software Pleno",
          company: "Promedico Gestao Hospitalar",
          desc: "Focado no desenvolvimento de novas features e manutenção de sistemas para Gestão Hospitalar"
        },
        {
          period: "2023 - 2024",
          role: "Analista de Desenvolvimento de Sistemas Pleno",
          company: "Digital Software",
          desc: "Desenvolvimento e manuteção de ERP web e desenvolvimento de ferramentas mobile personalizadas para clientes"
        },
        {
          period: "2023 - 2023",
          role: "Desenvolvedor Golang Júnior",
          company: "Delivery ALPV",
          desc: "Desenvolvimento de soluções backend de alta performance"
        },
        {
          period: "2021 - 2023",
          role: "Desenvolvedor Web Júnior",
          company: "B9 Sistemas",
          desc: "Desenvolvimento de sistemas web e APIs customizadas, com foco específico em: Soluções de CRM e Plataformas de Educação para Desenvolvedores "
        }
      ].map((exp, idx) => (
        <div key={idx} className="relative">
          <div className="absolute -left-14 mt-1.5 w-10 h-10 rounded-full bg-indigo-900 border-4 border-[#050816] flex items-center justify-center">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <div className="bg-[#0a0a1a]/60 backdrop-blur-lg border border-indigo-900/30 rounded-xl p-6 hover:border-indigo-600/50 transition-colors shadow-lg">
            <span className="inline-block px-3 py-1 bg-indigo-900/40 text-indigo-300 rounded-full text-xs font-medium mb-4">
              {exp.period}
            </span>
            <h3 className="text-xl font-semibold mb-1 text-white">{exp.role}</h3>
            <h4 className="text-indigo-400 mb-4">{exp.company}</h4>
            <p className="text-gray-400">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
    )
}
