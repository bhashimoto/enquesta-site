# Site Enquesta — projeto Hugo

## Como rodar localmente

1. Baixe o Hugo (binário único, sem npm): https://gohugo.io/installation/
2. Dentro desta pasta, rode: `hugo server`
3. Abra http://localhost:1313

## Como publicar

1. Suba este repositório no GitHub.
2. Conecte em Netlify, Cloudflare Pages ou Vercel — todos detectam Hugo automaticamente.
3. Configure o comando de build como `hugo --minify`.

## Estrutura

- `hugo.toml` — configuração do site e dos menus (principal, serviços, áreas atendidas)
- `layouts/partials/header.html` — cabeçalho e menu (reaproveitado em todas as páginas)
- `layouts/partials/footer.html` — rodapé (reaproveitado em todas as páginas)
- `layouts/_default/baseof.html` — esqueleto de toda página (junta header + conteúdo + footer)
- `content/_index.md` — home / landing principal (já com o conteúdo aprovado)
- `content/servicos/` — as 4 páginas de serviço
- `content/areas-atendidas/` — as 2 páginas de área geográfica
- `content/sobre.md`, `content/contato.md`, `content/perguntas-frequentes.md`, `content/recebi-notificacao-da-naturgy.md`

## Pendências marcadas com TODO no conteúdo

Várias páginas têm comentários `<!-- TODO ... -->` indicando onde falta desenvolver o conteúdo
completo (o mesmo processo que fizemos para a landing principal). O CSS em `static/css/style.css`
é só uma base funcional — a identidade visual definitiva ainda entra por cima.
