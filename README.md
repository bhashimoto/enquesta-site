# Site Enquesta — Inspeções Prediais de Gás

Site institucional da Enquesta (inspeção periódica de gás predial no Rio de Janeiro).
Hugo (site estático, sem Node/npm). Identidade visual: design system **Industry** —
azul-aço sobre fundo técnico claro, títulos em Barlow Condensed, cantos retos, molduras
hairline.

## Rodar localmente

1. Instale o Hugo (binário único):
   - Arch: `sudo pacman -S hugo`
   - ou baixe de <https://github.com/gohugoio/hugo/releases> e coloque em `~/.local/bin/`
   - docs: <https://gohugo.io/installation/>
2. `hugo server -D`
3. <http://localhost:1313>

## Build de produção

```
hugo --gc --minify
```

Saída em `public/`. Deploy em Netlify / Cloudflare Pages / Vercel (todos detectam Hugo;
comando de build `hugo --gc --minify`).

## Estrutura

| Caminho | O que é |
| --- | --- |
| `hugo.toml` | Config, menus, `params` (WhatsApp, telefone, endereço, e-mail) |
| `data/enquesta.toml` | Credenciais confirmadas + listas reaproveitadas (checklist, motivos, FAQ, passos Naturgy) |
| `static/css/industry.css` | Design system — fonte da verdade dos tokens. **Não editar** (a não ser os tokens no `:root` do topo) |
| `static/css/enquesta.css` | Camada do site: `.section` / `.plate` / `.prose`, header, footer, grades, responsivo |
| `static/js/nav.js` | Menu mobile (progressive enhancement; sem JS o menu aparece aberto) |
| `layouts/index.html` | Home — seções fixas |
| `layouts/areas-atendidas/single.html` | Página de área — hero + endereço + grade de bairros (front matter `bairros`) + CTA |
| `layouts/_default/naturgy.html` | Página "Recebi notificação da Naturgy" — selecionada por `layout: naturgy` no front matter |
| `layouts/_default/single.html` | Páginas de texto (serviços, sobre, contato, FAQ) — `.prose` + plate de CTA |
| `layouts/_default/list.html` | Hubs de seção (`/servicos/`, `/areas-atendidas/`) |
| `layouts/partials/` | `head` (SEO + JSON-LD), `header`, `footer`, `cta-plate`, `spec-sheet` |
| `layouts/shortcodes/credenciais.html` | Bloco de credenciais para usar dentro de markdown (`{{< credenciais >}}`) |

## Páginas (13 URLs)

Home · 4 serviços + hub `/servicos/` · 2 áreas + hub `/areas-atendidas/` · Sobre ·
Perguntas frequentes · Contato · Recebi notificação da Naturgy (fora do menu).

## Placeholders a substituir antes de publicar

- `hugo.toml` → `params.whatsapp_digits` (`5521900000000`), `params.telefone` (`(21) 3100-XXXX`),
  `params.email`.
- `static/img/` — fotos reais. Hoje o hero e as regiões são uma caixa rotulada (`.photo-slot`).
  Ao inserir `<img>`, envolver em `<div class="duotone">…</div>` para o tratamento do design system.
- `/recebi-notificacao-da-naturgy/` — só o esqueleto de conteúdo (maior potencial de conversão);
  desenvolver a copy de urgência.
- Páginas com `<!-- TODO -->`: inspeção residencial, inspeção comercial, renovação (5 anos),
  sobre, contato (formulário), perguntas frequentes (completar).

## Regras de conteúdo (do briefing)

- Todo page precisa de `title`, `seo_title` e `description` no front matter.
- Sem depoimentos não verificados. Sem números de credenciamento não confirmados
  (ex.: "+10.000 inspeções", associação ABRAIPE). Confirmados: fundação **2019**,
  CREA-RJ **2019200638**, CNPJ **33.519.767/0001-80**.
- "Naturgy" só na página dedicada; nas demais o foco de associação é
  "Inspeção Periódica de Gás + Rio de Janeiro".
- Sentence case, sem emoji, tom técnico mas acessível.

## Pendência de infra

- Redirect 301 de `/pt_BR/` → `/` (duplicidade do site atual em produção) na configuração
  de deploy, antes do lançamento.

## Referências

O material de origem (sessão de arquitetura + sessão de design) está em `references/`
e não faz parte do build.
