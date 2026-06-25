# Portfólio — Redesign (Bloco A) · Design

> **Autor:** Luís Gabriel Marchió Batista · **Data:** 2026-06-25
> **Projeto:** `luismarchio-portfolio-main` (Vite + React 19 + Tailwind v4)
> **Escopo:** Bloco A (Portfólio). O Bloco B (blog 8-bit-chronicles) é um ciclo separado.

## Objetivo

Reorganizar e polir o portfólio: a seção de Artigos passa a destacar **apenas a ideia do TCC**;
o **Blog** é reativado com posts reais linkando para o blog publicado; nasce uma seção nova de
**Roadmaps** (animada) alimentada pelos planos de estudo reais; e a **responsividade** é corrigida
(principal ofensor: a navegação).

## Decisões técnicas

- **Animação:** `framer-motion` (`motion`) para reveals on-scroll e a timeline dos roadmaps.
  Alternativas descartadas: CSS+IntersectionObserver (manual demais para o efeito desejado),
  GSAP (peso desnecessário).
- **Responsividade:** navegação vira **drawer/hambúrguer no mobile** (`md:` mantém as abas);
  pente-fino de spacing/tipografia em todas as seções.
- **Organização:** dados hoje hardcoded no JSX migram para `src/data/*.ts`
  (`tcc.ts`, `blogPosts.ts`, `roadmaps.ts`, `projects.ts`). Componentes ficam só de apresentação.
- **Sem git:** o projeto não é repositório git; o spec não é commitado (opção futura: `git init`).

## Componentes e dados

### Estrutura de dados (`src/data/`)

- `tcc.ts` — objeto único com a ideia do TCC (título, área, status "proposta/pesquisa", resumo,
  stack, link opcional). Tema: **Impacto dos Microsserviços na Escalabilidade e Custo Operacional
  em Ambientes Cloud-Native aplicado a análise de imagens médicas DICOM** (linha do BrigidAI).
- `blogPosts.ts` — array curado de 3-4 posts reais espelhando `app/data/posts.ts` do blog
  (id, título, categoria, descrição, data, capa opcional). Cada um linka para
  `https://8-bit-chronicles-blog.vercel.app/post/<id>`.
- `roadmaps.ts` — os 3 roadmaps derivados de `~/Documentos/Estudos`:
  1. **DevSecOps 12 meses** — timeline Q1→Q4 (Security+, AppSec, CKA, CKS+capstone) + metas 🎯
     + trilha paralela de IA. Inclui progresso aproximado.
  2. **Pós + Docência** — 3 passos (Pós Cybersecurity → Certs/CKS → Mestrado).
  3. **Trilhas de estudo** — mapa por área (Redes, Cripto, AppSec, DFIR, LGPD/GRC).
  Tipo: `Roadmap { id, title, subtitle, kind: 'timeline'|'steps'|'tracks', items: RoadmapItem[] }`.
- `projects.ts` — extrai os projetos hoje inline em `ProjectsSection` (corrigindo typos de stack).

### Componentes

- `AcademicArticlesSection.tsx` → renomeia conceito para **TCC/Pesquisa**: 1 card com a ideia do TCC,
  badges de área e status "Em pesquisa". Remove os 2 papers fixos.
- `BlogSection.tsx` → reativado (descomenta no `App.tsx`): cards reais a partir de `blogPosts.ts`,
  cada card abre o post no blog publicado (target `_blank`), botão "Ver todos" → home do blog.
  Remove imagens placeholder readdy.ai.
- `RoadmapsSection.tsx` (novo) → seletor (tabs) entre os 3 roadmaps; render por `kind`:
  - `timeline` → linha vertical animada, nós (●/◐), metas 🎯 e barra de progresso do ano.
  - `steps` → passos numerados conectados.
  - `tracks` → grid de áreas com itens.
  Animações: reveal por item via `framer-motion` (`whileInView`), linha "cresce", barra anima.
- `Navigation.tsx` → adiciona item **Roadmaps**; no mobile colapsa num botão hambúrguer que abre um
  drawer com os links (fecha ao navegar). Desktop (`md:`) mantém as abas atuais.
- `App.tsx` → importa `RoadmapsSection`, descomenta `BlogSection`, alinha ordem de render com a nav.

## Fluxo / ordem das seções

Hero → Sobre → Projetos → Habilidades → Experiência → Educação → **TCC** → **Roadmaps** → **Blog**
→ Contato → Footer. A ordem da nav passa a refletir a ordem de render (hoje Skills/Projects estão
trocados entre nav e App).

## Responsividade (pente-fino)

- **Nav:** drawer no mobile (principal correção).
- **Hero/headings:** escala de fonte com `clamp`/breakpoints (`text-3xl md:text-4xl`).
- **Cards com altura fixa** (`h-[280px]`, `h-48`): trocar por mínimos flexíveis para não cortar texto.
- **Radar (echarts):** garantir `resize` e altura responsiva no container.
- **Paddings de container:** `px-4 md:px-6`, `py-16 md:py-24`.
- Verificar em larguras 360 / 768 / 1280.

## Ajustes gerais

- Corrigir typos de stack (`Next.j`, `Python.js`).
- Corrigir links quebrados (`href="#"`, botões "Ver Detalhes"/"Ver Todos" sem destino).
- Padronizar identidade visual roxo/índigo nas seções novas.

## Erros & estados

- Roadmap sem itens → não quebra (lista vazia tratada).
- Links externos sempre `target="_blank" rel="noopener noreferrer"`.
- Imagens de capa do blog são opcionais; sem capa, usa fallback com gradiente + badge de categoria.

## Testes / verificação

- `npm install` + `npm run build` (tsc + vite) deve passar sem erros de tipo.
- `npm run lint` sem novos erros.
- Verificação visual manual em 360 / 768 / 1280 (nav, roadmaps, blog).

## Fora de escopo (Bloco B — depois)

- Limpeza dos posts em `app/data/posts.ts` (o artigo de microsserviços é SEO-spam; padronizar).
- Migrar o paper de Grafana para post do blog.
- Melhorias gerais do blog 8-bit-chronicles.
