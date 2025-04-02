import { Button } from "./ui/button"
import { Card } from "./ui/card"

export const BlogSection = () => {
    return (
        <section className="mb-32" id="blog">
            <div className="text-center mb-16">
                <p className="text-indigo-400 font-medium mb-2">
                    COMPARTILHANDO CONHECIMENTO
                </p>
                <h2 className="text-4xl font-bold">Blog Técnico</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title:
                            "Implementando Autenticação JWT em APIs RESTful com Node.js",
                        summary:
                            "Um guia completo sobre como implementar autenticação segura usando JSON Web Tokens em APIs Node.js, incluindo boas práticas e estratégias de renovação de tokens.",
                        technologies: ["Node.js", "JWT", "Express", "Segurança"],
                        keywords: ["autenticação", "API", "segurança", "backend"],
                        image:
                            "https://public.readdy.ai/ai/img_res/458716425c2546be41022c64b70196e2.jpg",
                    },
                    {
                        title:
                            "Otimizando Performance em Aplicações React: Técnicas Avançadas",
                        summary:
                            "Análise de estratégias para melhorar o desempenho de aplicações React, incluindo memoização, virtualização de listas e técnicas de code-splitting para carregamento otimizado.",
                        technologies: ["React", "JavaScript", "Performance", "Webpack"],
                        keywords: ["frontend", "otimização", "renderização", "UX"],
                        image:
                            "https://public.readdy.ai/ai/img_res/bce10d2e06659a3ebb96624ce14b0b6c.jpg",
                    },
                    {
                        title:
                            "Arquiteturas Serverless: Quando Utilizar e Como Implementar",
                        summary:
                            "Uma análise profunda sobre os benefícios e desafios de arquiteturas serverless, com exemplos práticos de implementação usando AWS Lambda e Azure Functions.",
                        technologies: [
                            "AWS Lambda",
                            "Serverless",
                            "Cloud Computing",
                            "Microserviços",
                        ],
                        keywords: [
                            "cloud",
                            "arquitetura",
                            "escalabilidade",
                            "infraestrutura",
                        ],
                        image:
                            "https://public.readdy.ai/ai/img_res/5dc8e800dc7409b0656ce63c7bd24117.jpg",
                    },
                ].map((post, idx) => (
                    <Card
                        key={idx}
                        className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden group cursor-pointer hover:border-indigo-600/50 transition-all duration-300 shadow-xl"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 mb-4 line-clamp-3">
                                {post.summary}
                            </p>
                            <div className="flex gap-2 flex-wrap mb-4">
                                {post.technologies.slice(0, 3).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 rounded-full text-xs font-medium text-indigo-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.keywords.map((keyword, i) => (
                                    <span key={i} className="text-xs text-gray-500">
                                        #{keyword}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <Button className="!rounded-button whitespace-nowrap bg-transparent hover:bg-indigo-900/50 border border-indigo-700/50 text-indigo-400 px-4 py-2 text-sm">
                                    Ler Artigo
                                </Button>
                                <span className="text-gray-500 text-sm">27 Mar 2025</span>
                            </div>
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