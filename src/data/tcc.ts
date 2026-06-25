export type Tcc = {
  title: string;
  theme: string;
  status: string;
  areas: string[];
  abstract: string;
  stack: string[];
  related?: { label: string; href: string };
};

export const tcc: Tcc = {
  title:
    "Impacto dos Microsserviços na Escalabilidade e no Custo Operacional em Ambientes Cloud-Native",
  theme: "Aplicado à análise de imagens médicas no formato DICOM",
  status: "Em pesquisa · proposta de TCC",
  areas: [
    "Arquitetura de Software",
    "Computação Distribuída",
    "Cloud Computing",
    "Machine Learning",
  ],
  abstract:
    "Proposta de pesquisa que compara arquiteturas monolíticas e baseadas em microsserviços aplicadas a um sistema de machine learning para análise de imagens médicas no formato DICOM. A investigação usa uma infraestrutura cloud-native — containers Docker, orquestração via Kubernetes e observabilidade com Prometheus e Grafana — avaliando desempenho, escalabilidade e custo operacional sob três níveis de carga (baixa, média e alta). A hipótese é que, embora microsserviços ofereçam vantagens claras em escalabilidade e resiliência, exigem maior complexidade de gestão e custos operacionais mais altos — e o estudo busca mapear esses trade-offs para orientar decisões arquiteturais em contextos reais. O tema dialoga diretamente com o projeto BrigidAI.",
  stack: ["Docker", "Kubernetes", "Prometheus", "Grafana", "DICOM", "TensorFlow"],
  related: { label: "Projeto relacionado: BrigidAI", href: "#projetos" },
};
