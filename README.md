# portfolio

[![CI](https://github.com/Luis-Perf/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Luis-Perf/portfolio/actions/workflows/ci.yml)

Site de apresentação estático e bilíngue (PT-BR e EN), feito com Astro. Não tem backend, não carrega framework no navegador e usa um único script pequeno. A ideia foi levar performance, acessibilidade e segurança a sério num site simples, sem abrir mão de uma identidade visual própria.

No ar em **[portfolio.luisperfeito.workers.dev](https://portfolio.luisperfeito.workers.dev)**.

| Claro | Escuro |
| --- | --- |
| ![Página inicial no tema claro](docs/preview-light.png) | ![Página inicial no tema escuro](docs/preview-dark.png) |

<details>
<summary>Versão mobile</summary>

<img src="docs/preview-mobile.png" alt="Página inicial no celular" width="320">

</details>

## O que tem aqui

- Página inicial com serviços, projetos, trajetória e contato, mais uma página para cada projeto, gerada a partir de Markdown.
- Português em `/` e inglês em `/en/`, com `hreflang` entre as versões.
- Tema claro e escuro que segue o sistema e não pisca ao carregar.
- Visual de planta baixa: grade técnica no fundo e um trilho entre as seções que vai sendo desenhado com a rolagem.
- Link de WhatsApp que cumprimenta de acordo com o horário de quem visita, e um vCard para salvar o contato.

## Rodando

Precisa de Node.js 22 ou superior. CI e deploy usam a versão do `.node-version`.

```sh
npm install
npm run dev      # http://localhost:4321
```

| Script | Para quê |
| --- | --- |
| `npm run build` | Gera o site em `dist/`, junto com o `_headers` |
| `npm run preview` | Serve o build localmente |
| `npm run lint` | ESLint, incluindo regras de acessibilidade |
| `npm run check` | Checagem de tipos em `.astro` e `.ts` |
| `npm run validate` | Lint, tipos e build, na mesma ordem do CI |

## Como está organizado

```text
integrations/security-headers.ts   gera o _headers com a CSP depois do build
public/                            favicon, vCard e robots.txt
src/
  config/site.ts                   nome, telefone e links
  content/cases/{pt,en}/           projetos em Markdown, um arquivo por idioma
  content.config.ts                schema dos projetos
  i18n/ui.ts                       textos da interface nos dois idiomas
  scripts/enhance.ts               o único JS que vai para o navegador
  styles/global.css                tokens de cor, grade e estilos base
  components/  layouts/  views/    a página em si
  pages/                           só as rotas
```

Os projetos são arquivos Markdown com front matter validado por Zod. O nome do arquivo vira a URL, e `translationKey` liga a versão em português à versão em inglês. Se um projeto existir em só um idioma, o build para. Os textos da interface seguem a mesma lógica: o dicionário em inglês usa o tipo do português, então uma tradução esquecida vira erro de compilação.

## Algumas decisões

### CSP gerada a partir do HTML final

O Astro tem CSP própria, mas ela sai numa tag `<meta>`, e `frame-ancestors` só funciona como header HTTP. Então uma integração pequena lê o HTML depois do build, calcula o SHA-256 de cada script inline e escreve o `_headers` que a Cloudflare aplica. A política não usa `'unsafe-inline'` e se atualiza sozinha quando um script muda. O CSS é sempre externo, e o build falha se aparecer um atributo `style=""` em qualquer página.

### Fontes que não empurram o layout

No primeiro deploy, o Lighthouse CI acusou CLS de 0,12: o título do hero mudava de tamanho quando a fonte chegava. A correção foi pré-carregar as duas fontes principais e criar fontes reservas locais com `size-adjust` e `ascent-override`, medidos contra as fontes reais. Com as fontes atrasadas de propósito em 2 segundos, o CLS ficou em 0,0001.

### Uma definição por cor

As cores são declaradas uma vez com `light-dark()`. Trocar de tema é só mudar o `color-scheme`, sem manter uma segunda paleta para o modo escuro. Um script curto no `<head>` aplica a escolha salva antes da primeira pintura.

### Animação só com CSS

O trilho entre as seções e a entrada dos blocos usam scroll-driven animations (`animation-timeline: view()`). Navegador sem suporte mostra o estado final, e `prefers-reduced-motion` desliga tudo.

### JavaScript opcional

O único script do site aplica o tema escolhido e ajusta a saudação do WhatsApp. Sem ele, nada quebra: o tema segue o sistema e o link usa uma mensagem neutra.

## Qualidade

Todo push e pull request passa por lint, checagem de tipos e build. Depois, o Lighthouse CI testa três páginas e barra o merge se alguma sair destas metas:

| Métrica | Meta |
| --- | --- |
| Performance | ≥ 90 |
| Acessibilidade | 100 |
| Boas práticas | ≥ 95 |
| SEO | 100 |
| LCP | ≤ 2 s |
| CLS | ≤ 0,1 |
| Peso da página | ≤ 300 KB |

Nas medições locais em desktop, as páginas ficaram com 100 nas quatro categorias e cerca de 200 KB. A `main` é protegida: só entra código por pull request com o CI verde. O Dependabot cuida das atualizações semanais.

## Segurança

Além da CSP, o `_headers` aplica HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Cross-Origin-Opener-Policy` e uma `Permissions-Policy` que desliga câmera, microfone, geolocalização, pagamento e USB. Fontes e imagens saem do próprio domínio. Não há backend, formulário nem segredo no repositório.

## Deploy

Cloudflare Workers com static assets. Cada push na `main` publica, e cada pull request ganha uma URL de preview. O `wrangler.jsonc` aponta para a pasta `dist` e usa o `404.html` para rotas que não existem.

Para rodar localmente no mesmo runtime da produção, com os headers aplicados:

```sh
npm run build
npx wrangler dev
```

## Uso

O código está aberto para consulta e para servir de referência. Textos, foto e identidade visual são pessoais e não devem ser reutilizados sem autorização.
