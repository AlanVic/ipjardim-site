# 🌿 Igreja Presbiteriana do Jardim (IPJardim)

Site institucional oficial da **Igreja Presbiteriana do Jardim**, localizada em Campina Grande – PB.  
Uma igreja centrada no Evangelho, fundada na Palavra de Deus e comprometida com a proclamação de Cristo.

---

## 🎨 Identidade Visual & Design

- **Tipografia:** Família tipográfica *Mosk* (pesos de 100 a 900) carregada localmente.
- **Paleta de Cores:**
  - Verde Escuro: `#0d6b4f`
  - Verde Primário: `#1a7a5e`
  - Verde Médio: `#2a9d7c`
  - Verde Claro: `#4cbb96`
  - Verde Suave: `#e8f5f0`
- **Componentes & Recursos:**
  - 🏠 **Hero:** Boas-vindas com a identidade oficial, brasão em alta definição e chamada para ação.
  - 📖 **Sobre:** Breve histórico da fundação (2019), missão, visão e valores fundamentados nas Escrituras.
  - ⛪ **Cultos e Horários:** Programação da EBD (domingo 9h30), Culto Solene (domingo 18h00) e Oração & Doutrina (quinta 19h30).
  - 📅 **Nossa Rotina:** Detalhamento da vida comunitária e encontros regulares.
  - 📍 **Contato & Localização:** Endereço completo, mapa interativo do Google Maps, formulário e dados da secretaria.
  - 💬 **WhatsApp Flutuante:** Botão fixo no canto inferior direito para contato rápido com a secretaria.
  - 🔗 **Rodapé Institucional:** Links de navegação e redes sociais integradas.

---

## 🚀 Tecnologias

- [Next.js 15](https://nextjs.org/) (App Router & Static Export)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GitHub Actions](https://github.com/features/actions) (CI/CD para GitHub Pages)

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn/pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/ipjardim-site.git
cd ipjardim-site

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

Abra no navegador em:
- Local: [http://localhost:3000](http://localhost:3000)
- Na rede local: `http://SEU_IP_LOCAL:3000`

---

## 🌐 Deploy no GitHub Pages com Domínio Próprio

O projeto já está configurado com **Static Export** (`output: "export"` no `next.config.ts`) e automação via **GitHub Actions**.

### 1. GitHub Actions
Ao fazer push para a branch `main`, o workflow em `.github/workflows/deploy.yml` compila e publica o site automaticamente no GitHub Pages.

### 2. Domínio Personalizado (`ipjardim.com.br`)
- O arquivo `public/CNAME` já está configurado apontando para `ipjardim.com.br`.
- No **Registro.br**, aponte 4 registros do tipo **A** com o campo **Nome em branco** para os IPs do GitHub Pages:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

---

## 📍 Informações da Igreja

- **Endereço:** Av. Jorn. Assis Chateaubriand, 1322 – Liberdade, Campina Grande – PB, 58414-060
- **E-mail:** [igrejapresbiterianajardim@gmail.com](mailto:igrejapresbiterianajardim@gmail.com)
- **WhatsApp:** [(83) 99333-0203](https://wa.me/5583993330203)
- **Instagram:** [@ipbjardim](https://www.instagram.com/ipbjardim)
- **YouTube:** [@IgrejaPresbiterianadoJardim](https://www.youtube.com/@IgrejaPresbiterianadoJardim)
- **Spotify:** [Podcast IPJardim](https://open.spotify.com/show/2LoAAsOihJsiqHrINHELsy)
- **Linktree:** [linktr.ee/ipbjardim_](https://linktr.ee/ipbjardim_)
