export type Project = {
  title: string;
  desc: string;
  image: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Aloy",
    desc: "Assistente virtual pessoal, local e modular, projetada para centralizar e automatizar tarefas do dia a dia. Esta versão implementa a interface desktop em Electron, com interação direta com o sistema operacional, integração com APIs e suporte a comandos de voz.",
    image: "/Aloy.png",
    tech: ["Next.js", "TypeScript", "Node.js", "Python", "Golang", "Microservices", "DevOps"],
    link: "https://github.com/LuisMarchio03/aloy-desktop-electron-v0",
  },
  {
    title: "8-bit Chronicles",
    desc: "Blog técnico e pessoal onde a nostalgia do pixel art encontra as inovações da era digital. DevLogs, arquitetura de software, games retrô e reflexões sobre a carreira dev — tudo com uma identidade visual marcante.",
    image: "/blog.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://8-bit-chronicles-blog.vercel.app",
  },
  // ⛔ BrigidAI removido temporariamente — vou arrumar isso manualmente depois.
  // {
  //   title: "BrigidAI — DICOM Image Manager",
  //   desc: "Plataforma de análise de imagens médicas em DICOM, usando machine learning para auxiliar diagnósticos. Upload e armazenamento seguros, pré-processamento otimizado, inferência com modelos de IA e API eficiente. Interface web para visualização avançada e revisão médica. Infraestrutura escalável com Kubernetes, monitorada via Prometheus e Grafana.",
  //   image: "/BrigidAI.png",
  //   tech: ["Next.js", "TypeScript", "Node.js", "Python", "Golang", "Microservices", "Cloud", "DevOps"],
  //   link: "https://github.com/LuisMarchio03",
  // },
];
