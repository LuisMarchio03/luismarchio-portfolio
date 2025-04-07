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
                                    title: "IMPACTO DOS MICROSSERVIÇOS NA ESCALABILIDADE E NO CUSTO OPERACIONAL EM AMBIENTES CLOUD-NATIVE",
                                    conference: "IX Colóquio Estadual de Pesquisa Multidisciplinar, VII Congresso Nacional de Pesquisa Multidisciplinar, II Congresso de Pós-Graduação e VI Feira de Empreendedorismo da UNIFIMES",
                                    area: "Arquitetura de Software, Computação Distribuída, Cloud Computing",
                                    abstract: "Este artigo apresenta uma análise detalhada das diferentes abordagens arquiteturais para implementação de microsserviços em ambientes que exigem alta disponibilidade e resiliência. A pesquisa compara arquiteturas monolíticas e baseadas em microsserviços aplicadas a um sistema de machine learning para análise de imagens médicas no formato DICOM, utilizando uma infraestrutura cloud-native com containers Docker, orquestração via Kubernetes e monitoramento com Prometheus e Grafana. Os testes consideram três níveis de carga (baixa, média e alta), avaliando desempenho, escalabilidade e custo operacional. Os resultados esperados indicam que, embora os microsserviços ofereçam vantagens significativas em escalabilidade e resiliência, eles exigem maior complexidade de gestão e custos operacionais mais altos. O estudo fornece insights valiosos sobre os trade-offs envolvidos e orienta organizações quanto à viabilidade dessa arquitetura em diferentes contextos."
                                },
                                {
                                    title: "USO DO GRAFANA PARA MONITORAMENTO DE INFRAESTRUTURA CLOUD: AWS, AZURE, GCP",
                                    conference: "IX Colóquio Estadual de Pesquisa Multidisciplinar, VII Congresso Nacional de Pesquisa Multidisciplinar, II Congresso de Pós-Graduação e VI Feira de Empreendedorismo da UNIFIMES",
                                    area: "Observabilidade, Monitoramento de Sistemas, Computação em Nuvem, Arquiteturas Multi-cloud",
                                    abstract: "Este trabalho investiga o uso do Grafana como ferramenta estratégica para o monitoramento de infraestruturas em ambientes de computação em nuvem, com foco nas plataformas AWS, Azure e Google Cloud Platform (GCP). Considerando o crescimento da adoção de arquiteturas multi-cloud, o estudo analisa como o Grafana consolida dados oriundos de serviços como AWS CloudWatch, Azure Monitor e Google Cloud Monitoring em painéis unificados e personalizáveis. Por meio de revisão bibliográfica e experimentações práticas, demonstra-se como a ferramenta contribui para a observabilidade avançada, detecção precoce de falhas, otimização de recursos e aumento da resiliência operacional. Conclui-se que o Grafana se estabelece como um componente essencial para a inteligência operacional em ecossistemas distribuídos e altamente dinâmicos."
                                }

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
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                Áreas de Pesquisa
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Arquitetura de Software",
                                    "Computação Distribuída",
                                    "Sistemas em Nuvem",
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