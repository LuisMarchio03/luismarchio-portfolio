import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export const ContactSection = ({
  handleSubmit,
  handleInputChange,
  formData,
}: {
  handleSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formData: {
    name: string;
    email: string;
    message: string;
  };
}) => {
  return (
    <section className="mb-32" id="contato">
      <div className="text-center mb-16">
        <p className="text-indigo-400 font-medium mb-2">VAMOS CONVERSAR</p>
        <h2 className="text-4xl font-bold">Entre em Contato</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 inline-block relative text-white">
              Informações de Contato
              <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-indigo-600"></span>
            </h3>

            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">luisgabrielmarchio75@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="text-white">+55 (64) 9 9991-8525</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="text-white">Mineiros, Goiás, Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4 text-white">Me encontre nas redes sociais</h4>
              <div className="flex gap-4">
                <a target="_blank" href="https://www.linkedin.com/in/lu%C3%ADs-gabriel-marchi%C3%B3-batista-4a8b58287/" className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 hover:bg-indigo-700 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target="_blank" href="https://github.com/LuisMarchio03" className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 hover:bg-indigo-700 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a target="_blank" href="https://www.instagram.com/luis_marchio/" className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 hover:bg-indigo-700 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 inline-block relative text-white">
              Envie uma Mensagem
              <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-indigo-600"></span>
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">Nome</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[#151530] border-indigo-900/50 focus:border-indigo-500 text-white"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#151530] border-indigo-900/50 focus:border-indigo-500 text-white"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-[#151530] border-indigo-900/50 focus:border-indigo-500 text-white min-h-[150px]"
                  placeholder="Escreva sua mensagem aqui..."
                  required
                />
              </div>

              <Button type="submit" className="!rounded-button whitespace-nowrap w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg font-medium">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
