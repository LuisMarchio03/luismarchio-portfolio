# Portfólio Redesign (Bloco A) Implementation Plan

> **For agentic workers:** Steps use checkbox (`- [ ]`) syntax for tracking.
> **Verification model:** This project has NO unit-test infra and the deliverables are visual.
> Each task's test cycle is: `npm run build` (tsc typecheck + vite build) + `npm run lint`
> (no NEW errors) + targeted visual/behavioral check. Substitute for TDD here.

**Goal:** Reorganizar o portfólio — Artigos vira só o TCC, Blog reativado com posts reais,
nova seção Roadmaps animada (dados reais de estudo), e responsividade corrigida.

**Architecture:** Extrair dados hardcoded para `src/data/*.ts`; componentes só de apresentação.
Adicionar `framer-motion` para animações on-scroll. Navegação responsiva com drawer mobile.

**Tech Stack:** Vite 6, React 19, TypeScript ~5.7, Tailwind v4, framer-motion, echarts, FontAwesome.

## Global Constraints

- Identidade visual: dark `#050816`, acentos `indigo-*`/`purple-*`. Manter.
- Ícones via `@fortawesome/react-fontawesome` (NÃO usar classes CDN `fa-*` — não há CSS FA carregado).
- Links externos: sempre `target="_blank" rel="noopener noreferrer"`.
- Blog publicado: `https://8-bit-chronicles-blog.vercel.app` (post: `/post/<id>`).
- Não introduzir novos erros de lint/tsc. Build deve passar.

---

### Task 0: Setup — dependências

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1:** `npm install` (popular node_modules)
- [ ] **Step 2:** `npm install framer-motion`
- [ ] **Step 3:** Baseline: `npm run build` deve passar antes de qualquer mudança.
- Verify: build OK, `framer-motion` em `package.json`.

---

### Task 1: Camada de dados (`src/data/`)

**Files:**
- Create: `src/data/projects.ts`, `src/data/tcc.ts`, `src/data/blogPosts.ts`, `src/data/roadmaps.ts`

**Interfaces (Produces):**
- `projects.ts` → `export type Project = { title; desc; image; tech: string[]; link: string }`
  + `export const projects: Project[]` (3 projetos atuais, typos corrigidos: `Next.js`, `Python`).
- `tcc.ts` → `export type Tcc = { title; theme; status; areas: string[]; abstract; stack: string[] }`
  + `export const tcc: Tcc` (tema Microsserviços + DICOM cloud-native; status "Em pesquisa / proposta").
- `blogPosts.ts` → `export type BlogPost = { id; title; category: 'Tech'|'Games'|'DevLog'; description; date; cover?: string }`
  + `export const blogPosts: BlogPost[]` (4 posts reais: order-pipeline devlog #01, clair-obscur, aloy devlog, microservices).
  + `export const BLOG_URL = 'https://8-bit-chronicles-blog.vercel.app'`.
- `roadmaps.ts` → tipos:
  ```ts
  export type RoadmapItem = { label: string; detail?: string; goals?: string[]; done?: boolean };
  export type Roadmap = { id: string; title: string; subtitle: string;
    kind: 'timeline' | 'steps' | 'tracks'; progress?: number; items: RoadmapItem[] };
  export const roadmaps: Roadmap[];
  ```
  3 roadmaps derivados de `~/Documentos/Estudos` (DevSecOps 12m / Pós+Docência / Trilhas).

- [ ] **Step 1:** Criar os 4 arquivos com os tipos+dados acima (conteúdo real).
- [ ] **Step 2:** `npm run build` (typecheck dos novos módulos, ainda não importados → ok).
- Verify: build passa.

---

### Task 2: Navigation responsiva + item Roadmaps

**Files:**
- Modify: `src/components/Navigation.tsx`

**Interfaces (Consumes):** `activeTab`, `setActiveTab` (inalterado).

- [ ] **Step 1:** Adicionar tab `roadmaps` ("Roadmaps") na lista, depois de "Blog".
- [ ] **Step 2:** Desktop (`hidden md:flex`): manter as abas atuais.
- [ ] **Step 3:** Mobile (`md:hidden`): botão hambúrguer que abre um painel (estado `useState(open)`)
  com a lista vertical de links; clicar num link chama `handleNavClick` e fecha o painel.
- [ ] **Step 4:** Garantir que `handleNavClick` continua fazendo scroll suave por `id`.
- Verify: build + lint; visual em 360px (menu abre/fecha, navega) e 1280px (abas intactas).

---

### Task 3: Artigos → TCC

**Files:**
- Modify: `src/components/AcademicArticlesSection.tsx` (consome `src/data/tcc.ts`)

- [ ] **Step 1:** Remover os 2 papers fixos e o `<i className="fas fa-university">` (quebrado).
- [ ] **Step 2:** Renderizar 1 card com `tcc`: título, badge "Em pesquisa", badges de área,
  abstract, chips de stack. Manter heading "Produção Acadêmica / TCC".
- [ ] **Step 3:** `id="artigos"` mantido (nav já aponta pra ele).
- Verify: build + lint; visual (card do TCC aparece, sem ícone quebrado).

---

### Task 4: BlogSection reativada (posts reais)

**Files:**
- Modify: `src/components/BlogSection.tsx` (consome `blogPosts`, `BLOG_URL`)
- Modify: `src/App.tsx` (descomentar import + render)

- [ ] **Step 1:** Reescrever cards a partir de `blogPosts`: título, descrição (`line-clamp-3`),
  badge de categoria, data; sem imagens readdy.ai. Capa: usa `post.cover` se houver, senão
  fallback gradiente + badge.
- [ ] **Step 2:** "Ler Post" → `${BLOG_URL}/post/${post.id}` (`_blank`); "Ver todos" → `${BLOG_URL}`.
- [ ] **Step 3:** App: descomentar `import { BlogSection }` e `<BlogSection />`.
- Verify: build + lint; visual (3-4 cards, links abrem o blog publicado).

---

### Task 5: RoadmapsSection (nova, animada)

**Files:**
- Create: `src/components/RoadmapsSection.tsx` (consome `roadmaps`)
- Modify: `src/App.tsx` (import + render entre TCC e Blog)

**Interfaces (Produces):** `export const RoadmapsSection: React.FC`.

- [ ] **Step 1:** `id="roadmaps"`. Seletor (tabs/botões) entre os 3 roadmaps (`useState` do ativo).
- [ ] **Step 2:** Render por `kind`:
  - `timeline` → coluna com nós; cada item `motion.div` com `whileInView` (fade+slide-up);
    linha vertical gradiente; metas 🎯 destacadas; barra de progresso (`progress`) animada por `motion`.
  - `steps` → passos numerados conectados (mesmo padrão de reveal).
  - `tracks` → grid de áreas (cards) com itens.
- [ ] **Step 3:** Animações com `framer-motion` (`motion`, `whileInView`, `viewport={{ once: true }}`).
- [ ] **Step 4:** App: importar e renderizar `<RoadmapsSection />`.
- Verify: build + lint; visual (troca de roadmap funciona, itens revelam ao rolar, barra anima).

---

### Task 6: App.tsx — ordem das seções + wiring final

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1:** Ordem de render: Sobre → Projetos → Habilidades → Experiência → Educação →
  TCC → Roadmaps → Blog → Contato (alinha com a nav).
- [ ] **Step 2:** Conferir que todos os imports novos estão presentes.
- Verify: build + lint; visual (ordem das seções e scroll-spy da nav corretos).

---

### Task 7: Pente-fino de responsividade

**Files:**
- Modify: `src/components/HeroSection.tsx`, `SkillsSection.tsx`, `ProjectsSection.tsx`,
  `AboutSection.tsx`, `ExperienceSection.tsx`, `EducationSection.tsx`, `ContactSection.tsx`,
  `Footer.tsx`, `App.tsx` (paddings do `main`)

- [ ] **Step 1:** Headings: `text-3xl md:text-4xl`; Hero `h1` `text-4xl md:text-6xl`.
- [ ] **Step 2:** Containers: `px-4 md:px-6`/`md:px-8`; `main` `py-16 md:py-24`; `mb-20 md:mb-32`.
- [ ] **Step 3:** Cards com altura fixa (`h-[280px]`, `h-48`): trocar por `min-h-*` ou remover
  para não cortar texto no mobile.
- [ ] **Step 4:** Radar echarts: container `h-[320px] md:h-[450px]`; garantir `resize` (já há listener).
- [ ] **Step 5:** Hero: empilhar botões no mobile (`flex-col sm:flex-row`), botões largura cheia.
- Verify: build + lint; visual em 360 / 768 / 1280 (sem overflow horizontal, texto não corta).

---

### Task 8: Ajustes finais (typos, links, título)

**Files:**
- Modify: `src/components/ProjectsSection.tsx`, `index.html`, links quebrados diversos

- [ ] **Step 1:** Projetos vêm de `projects.ts` (typos já corrigidos); remover `href="#"` órfãos
  ou apontar pro link real do projeto.
- [ ] **Step 2:** `index.html` `<title>` → "Luís Gabriel Marchió Batista · Full Stack".
- [ ] **Step 3:** Botões "Ver Todos os Projetos" / CV: remover ou desabilitar se sem destino real.
- Verify: build + lint final; visual geral.

---

## Self-Review

- **Spec coverage:** Artigos→TCC (T3) ✓ · Blog reativado real (T4) ✓ · Roadmaps animada (T5) ✓ ·
  Responsividade (T2 nav + T7) ✓ · Ajustes/typos/links (T8) ✓ · Data extraction (T1) ✓.
- **Placeholders:** nenhum "TBD"; conteúdo de dados é real (vem dos arquivos lidos).
- **Type consistency:** tipos definidos em T1 e consumidos em T3/T4/T5 com os mesmos nomes.
