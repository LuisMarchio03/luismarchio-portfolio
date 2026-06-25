export type RoadmapItem = {
  label: string;
  detail?: string;
  goals?: string[];
  done?: boolean;
};

export type Roadmap = {
  id: string;
  title: string;
  subtitle: string;
  kind: "timeline" | "steps" | "tracks";
  /** percentual 0-100, usado no kind "timeline" */
  progress?: number;
  items: RoadmapItem[];
};

/**
 * Roadmaps derivados dos planos de estudo reais (~/Documentos/Estudos).
 * São os processos que estou estudando atualmente.
 */
export const roadmaps: Roadmap[] = [
  {
    id: "devsecops",
    title: "DevSecOps · 12 meses",
    subtitle: "De dev sênior a DevSecOps — base sólida + certs + portfólio (início jun/2026)",
    kind: "timeline",
    progress: 5,
    items: [
      {
        label: "Q1 · Fundamentos + Security+",
        detail:
          "Base conceitual e primeiro sinal de mercado: redes (TCP/IP, DNS, TLS), Linux, cripto básica, authn/authz, modelagem de ameaças. Professor Messer + TryHackMe.",
        goals: ["🎯 CompTIA Security+"],
      },
      {
        label: "Q2 · AppSec / Segurança Web",
        detail:
          "Achar e corrigir vulnerabilidade em aplicação. PortSwigger Web Security Academy (SQLi, XSS, SSRF, Auth, Access Control, CSRF) + OWASP Top 10.",
        goals: ["🎯 40+ labs PortSwigger", "🎯 1 writeup de vulnerabilidade"],
      },
      {
        label: "Q3 · Kubernetes (CKA) + IaC",
        detail:
          "Transformar a experiência de k8s em credencial e cobrir IaC: RBAC, etcd, networking, troubleshooting, Terraform.",
        goals: ["🎯 Passar no CKA", "🎯 Módulo Terraform versionado no GitLab"],
      },
      {
        label: "Q4 · DevSecOps capstone + CKS",
        detail:
          "Segurança dentro da pipeline + hardening de k8s. Capstone GitLab CI: Semgrep, Trivy, Gitleaks, Checkov, OWASP ZAP, SBOM + Cosign, Kyverno/Falco.",
        goals: ["🎯 Passar no CKS", "🎯 Pipeline DevSecOps documentada"],
      },
      {
        label: "Trilha paralela · Segurança na era da IA",
        detail:
          "O ano inteiro, ~20-30 min/semana: OWASP Top 10 for LLM Apps, MITRE ATLAS, Gandalf (prompt injection), HackAPrompt.",
      },
    ],
  },
  {
    id: "pos-docencia",
    title: "Pós + Docência",
    subtitle: "Entrar já na docência com a especialização e construir o mestrado depois",
    kind: "steps",
    items: [
      {
        label: "Passo 1 · Pós em Cybersecurity",
        detail:
          "Especialização lato sensu (4–12 meses, EAD). Já credencia a lecionar em faculdade privada, EAD, tecnólogo e pós lato sensu — sobretudo em disciplinas aplicadas.",
      },
      {
        label: "Passo 2 · Coursera + Certificações",
        detail:
          "Google Cybersecurity Professional Certificate + Security+ (base e didática). Diferenciação DevSecOps com o CKS (alavanca o k8s) e AWS Security.",
        goals: ["⭐ CKS — Certified Kubernetes Security Specialist"],
      },
      {
        label: "Passo 3 · Mestrado em Segurança da Informação",
        detail:
          "Mestrado profissional (encaixa melhor com CLT). É a chave que abre universidade e concurso — fechando a escada de forma coerente.",
      },
    ],
  },
  {
    id: "trilhas",
    title: "Trilhas de estudo",
    subtitle: "Mapa de recursos gratuitos por área — introduzir o que falta, reforçar o que já faço",
    kind: "tracks",
    items: [
      {
        label: "Redes",
        detail: "Maior gap formal · introduzir",
        goals: [
          "Professor Messer — Network+ N10-009",
          "Cisco Networking Essentials (Packet Tracer)",
          "Kurose & Ross — slides 9ª ed.",
          "TCP/IP (Yonsei) + Wireshark",
        ],
      },
      {
        label: "Criptografia",
        detail: "Base teórica · introduzir",
        goals: [
          "Dan Boneh — Cryptography I (Stanford)",
          "MIT OCW 6.857",
          "MIT 6.5620 — Foundations of Cryptography",
          "UNICAMP MO421 (ementa PT-BR)",
        ],
      },
      {
        label: "AppSec",
        detail: "Hands-on · reforçar",
        goals: ["OWASP Juice Shop", "PortSwigger Web Security Academy"],
      },
      {
        label: "Forense / DFIR",
        detail: "Introduzir + reforçar",
        goals: ["DFIR Diva (índice)", "Blue Team Labs Online", "CyberDefenders (84+ labs)", "Autopsy"],
      },
      {
        label: "LGPD / GRC",
        detail: "Introduzir · PT-BR com certificado",
        goals: ["EV.G — LGPD (cursos 153 → 603)", "ANPD — materiais educativos", "ISO 27001 (Advisera/Alison)"],
      },
    ],
  },
];
