import { Card, CardContent } from "./ui/card"

export const AcademicArticlesSection = () => {
    return (
        <section className="mb-32" id="artigos">
            <div className="text-center mb-16">
                <p className="text-indigo-400 font-medium mb-2">
                    PRODUÇÃO ACADÊMICA
                </p>
                <h2 className="text-4xl font-bold">
                    Artigos Acadêmicos e Técnicos
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
                <Card className="bg-[#0a0a1a]/60 backdrop-blur-lg border-indigo-900/30 overflow-hidden shadow-xl">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-6 inline-block relative text-white">
                            Publicações
                            <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-indigo-600"></span>
                        </h3>
                        <div className="space-y-8 mt-6">
                            {[
                                {
                                    title:
                                        "Análise Comparativa de Arquiteturas de Microsserviços em Ambientes de Alta Disponibilidade",
                                    conference:
                                        "Simpósio Brasileiro de Redes de Computadores (SBRC 2024)",
                                    area: "Arquitetura de Software, Computação Distribuída",
                                    abstract:
                                        "Este artigo apresenta uma análise detalhada das diferentes abordagens arquiteturais para implementação de microsserviços em ambientes que exigem alta disponibilidade e resiliência.",
                                },
                                {
                                    title:
                                        "Implementação de Protocolos de Comunicação Eficientes para IoT em Redes de Baixa Potência",
                                    conference:
                                        "Conferência Latino-Americana de Computação de Alto Desempenho (CLCAR 2023)",
                                    area: "Redes de Computadores, Internet das Coisas",
                                    abstract:
                                        "Estudo sobre otimização de protocolos de comunicação para dispositivos IoT com restrições energéticas, propondo um novo modelo de transmissão de dados que reduz o consumo de energia em 35%.",
                                },
                                {
                                    title:
                                        "Estratégias de Balanceamento de Carga em Sistemas Distribuídos: Um Estudo de Caso",
                                    conference:
                                        "Workshop de Computação em Nuvem (CloudComp 2023)",
                                    area: "Computação Distribuída, Sistemas em Nuvem",
                                    abstract:
                                        "Análise comparativa de diferentes algoritmos de balanceamento de carga em ambientes de nuvem, com foco em métricas de desempenho e escalabilidade.",
                                },
                            ].map((article, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#151530]/50 rounded-xl p-6 border border-indigo-900/30 hover:border-indigo-600/50 transition-colors"
                                >
                                    <h4 className="text-xl font-semibold mb-2 text-white">
                                        {article.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 rounded-full text-xs font-medium text-indigo-300">
                                            {article.area.split(", ")[0]}
                                        </span>
                                        {article.area.split(", ")[1] && (
                                            <span className="px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 rounded-full text-xs font-medium text-indigo-300">
                                                {article.area.split(", ")[1]}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-indigo-400 mb-3 text-sm">
                                        <i className="fas fa-university mr-2"></i>{" "}
                                        {article.conference}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        {article.abstract}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">
                                Áreas de Pesquisa
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Redes de Computadores",
                                    "Arquitetura de Software",
                                    "Computação Distribuída",
                                    "Sistemas em Nuvem",
                                    "Internet das Coisas",
                                    "Segurança da Informação",
                                ].map((area, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-indigo-900/40 border border-indigo-800/50 rounded-full text-sm font-medium text-indigo-300"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}