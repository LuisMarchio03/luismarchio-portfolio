export const BLOG_URL = "https://8-bit-chronicles-blog.vercel.app";

export type BlogCategory = "Tech" | "Games" | "DevLog";

export type BlogPost = {
  id: string;
  title: string;
  category: BlogCategory;
  description: string;
  date: string;
  cover?: string;
};

/**
 * Posts curados do 8-bit-chronicles. Espelha app/data/posts.ts do blog.
 * Cada id resolve para `${BLOG_URL}/post/${id}` no blog publicado.
 * Manter em sincronia manual quando novos posts entrarem no blog.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "devlog01-pipeline-observability-jan-2026",
    title: "DevLog #01 – Order Pipeline: Arquitetura Event-Driven Serverless",
    category: "DevLog",
    description:
      "Início do DevLog sobre observabilidade e resiliência em arquiteturas event-driven serverless com C#/.NET. Visão geral do projeto Order Pipeline.",
    date: "06 Jan 2026",
  },
  {
    id: "clair-obscur-expedition-33-review-sem-spoilers",
    title: "Clair Obscur: Expedition 33 — Por que jogar agora (sem spoilers)",
    category: "Games",
    description:
      "RPG por turnos que mistura combate em tempo real com narrativa existencial. Análise técnica, recepção crítica e as atualizações recentes de 2026.",
    date: "2026",
  },
  {
    id: "devlog01-aloy-introducao-ao-projeto-aloy",
    title: "DevLog #01 – Aloy: Introdução ao projeto Aloy",
    category: "DevLog",
    description:
      "Por que decidi criar minha própria IA local, privada e modular. O que já funciona, a arquitetura em microsserviços e os planos de abrir o projeto como open source.",
    date: "23 Abr 2025",
  },
  {
    id: "microservices-scalability-operational-costs-cloud-native",
    title:
      "Impacto dos Microsserviços na Escalabilidade e no Custo Operacional em Cloud-Native",
    category: "Tech",
    description:
      "Como microsserviços impactam a escalabilidade e os custos operacionais em ambientes cloud-native. Casos reais, trade-offs e estratégias de otimização na nuvem.",
    date: "27 Mar 2025",
  },
];
