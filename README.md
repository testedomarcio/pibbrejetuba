# Primeira Igreja Batista em Brejetuba

Site estático em Astro + TypeScript + Tailwind CSS, com conteúdo versionado em Markdown e publicação pelo GitHub Pages.

## Rodar localmente

```bash
npm ci
npm run dev
npm run build
npm run check
```

## Publicação

O workflow `.github/workflows/deploy.yml` publica a pasta `dist/` a cada push para `main`. Em **Settings → Pages**, escolha **GitHub Actions** como fonte. O domínio personalizado fica em `public/CNAME`. Confira também DNS e certificado HTTPS no painel do GitHub Pages antes de anunciar a migração.

## Conteúdo

- Páginas institucionais: `src/pages/`.
- Artigos: `src/content/artigos/*.md`.
- Mensagens: `src/content/mensagens/*.md`.
- Eventos: `src/content/eventos/*.md` (só publique depois de confirmar data e local).
- Horários/endereço: `src/data.ts`; atualize em um lugar.
- Fotos e logo fornecidas pela igreja: `public/images/`. Atualize os arquivos e seus textos alternativos ao substituir imagens.

Para criar um artigo, copie a estrutura de um arquivo em `src/content/artigos/`, altere `title`, `description`, `date` e o texto. O build cria a página e a inclui no sitemap. `draft: true` impede a publicação do item.

## SEO e migração

Sitemap gerado automaticamente em `/sitemap-index.xml`, metadados, canonical, Open Graph e dados estruturados Church/Article. O repositório antigo tinha URLs públicas de calendário e edital. Preserve esses caminhos enquanto ainda houver links externos. GitHub Pages **não oferece redirecionamento HTTP 301** via `_redirects`; esse arquivo serve apenas em provedores compatíveis. Para 301 verdadeiro, configure na camada de hospedagem/CDN. Não marque `www` ou propriedade do Search Console como pronta sem verificar DNS e propriedade.

## Antes de divulgar

Confirmar com a igreja: endereço/número, horários e informações específicas de eventos. O telefone e o e-mail oficiais foram informados pelo Pastor Márcio. Não há Pix publicado sem confirmação. Google Analytics e Search Console precisam de IDs e acesso à propriedade, por isso não foram inventados.
