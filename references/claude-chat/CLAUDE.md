# Contexto do projeto — Site Enquesta

## Sobre a empresa

Enquesta Inspeções Prediais de Gás LTDA — empresa carioca de vistoria/inspeção periódica de gás
predial (residencial e comercial), Organismo de Inspeção Acreditado pela CGCRE/Inmetro.
Sede na Barra da Tijuca (Av. Embaixador Abelardo Bueno, 1340 – sala 401).

**Objetivo do projeto:** reconstruir o site institucional para capturar buscas comerciais no
Google (hoje o site tem só ~3 páginas indexadas e nenhuma segmentação por serviço/região) e
aumentar conversão para agendamento via WhatsApp.

## Decisões já tomadas (não reabrir sem justificativa)

- **Stack:** Hugo (SSG estático, sem Node/npm — decisão deliberada do dono do projeto).
- **Deploy alvo:** Netlify, Cloudflare Pages ou Vercel (build `hugo --minify`).
- **11 páginas ao todo**, sem blog genérico por enquanto — prioridade é intenção de contratação,
  não tráfego de curiosidade.
- **URLs planas onde possível**, menu com no máximo 2 níveis.
- A página `/recebi-notificacao-da-naturgy/` fica **fora do menu principal** (só acessível via
  CTA/links contextuais) — é para quem já está numa jornada de urgência específica.

## Arquitetura do site (menu)

- **Início** (`/`) — landing principal, já com conteúdo completo
- **Serviços** (dropdown)
  - `/servicos/inspecao-residencial-de-gas/` — esqueleto, falta conteúdo
  - `/servicos/inspecao-comercial-de-gas/` — esqueleto, falta conteúdo
  - `/servicos/reinspecao-de-gas/` — conteúdo completo
  - `/servicos/nova-inspecao-periodica-renovacao/` — esqueleto, falta conteúdo
- **Áreas atendidas** (dropdown)
  - `/areas-atendidas/inspecao-de-gas-barra-da-tijuca-zona-oeste/` — conteúdo completo
  - `/areas-atendidas/inspecao-de-gas-zona-sul-rj/` — conteúdo completo
- **Institucional**
  - `/sobre/` — esqueleto, falta conteúdo
  - `/perguntas-frequentes/` — parcial (só 3 perguntas, falta completar)
  - `/contato/` — esqueleto, falta formulário
- **Fora do menu**
  - `/recebi-notificacao-da-naturgy/` — esqueleto, **prioridade alta de conteúdo** (maior
    potencial de conversão: usuário já em situação de urgência)

## Regras de conteúdo e SEO (aplicar em toda página nova)

- Cada página precisa de front matter com `title`, `seo_title` e `description` preenchidos.
- Cada página comercial deve linkar para: a página de área geográfica aplicável, a FAQ, e um CTA
  de WhatsApp.
- **Não repetir "Naturgy" excessivamente fora da página de notificação** — nas páginas gerais o
  foco de associação semântica é "Inspeção Periódica de Gás + Rio de Janeiro".
- **Não usar depoimentos de clientes que não sejam reais e verificados.** (Foi encontrada uma
  versão-protótipo do site feita por uma agência terceira, `enquesta.utequi.com.br`, com
  depoimentos que não foram confirmados como reais — não reaproveitar esse texto.)
- **Dados de credenciamento** (ano de fundação, registro CREA-RJ, cadastro Naturgy, associação
  ABRAIPE, volume de inspeções) precisam ser confirmados com o cliente antes de publicar — não
  inventar nem assumir números.
- Sentence case, sem emoji, tom técnico mas acessível — o site fala com quem já está decidindo
  contratar, não com quem está só curioso.

## Pendências técnicas conhecidas

- Resolver a duplicidade `/` vs `/pt_BR/` que existe no site atual em produção (redirect 301)
  antes do lançamento da versão nova.
- CSS em `static/css/style.css` é só uma base funcional — identidade visual definitiva ainda não
  foi aplicada (está em discussão separada do projeto).
- Número de WhatsApp e telefone em `hugo.toml` (`params.whatsapp`, `params.telefone`) estão como
  placeholder (`XXXXXXXXX`) — substituir pelos reais.

## Próximo passo sugerido

Desenvolver o conteúdo completo de `/recebi-notificacao-da-naturgy/`, seguindo o mesmo padrão de
detalhamento usado na home (`content/_index.md`): H1, blocos de texto por H2, CTAs marcados, e
front matter de SEO completo.
