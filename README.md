# Parchment Design

Linguagem visual compartilhada das ferramentas de paleografia gregoriana: Mocquereau, Notker e o que vier depois. Pergaminho, tinta e rubricação, como numa página de gradual, com tema claro (Pergaminho) e escuro (Vigília).

*Shared visual language for the Gregorian paleography tools (Mocquereau, Notker): parchment, ink and rubrication, with light and dark themes. Docs are in Portuguese.*

## Conteúdo

| Caminho | O quê |
|---|---|
| `tokens/tokens.json` | Fonte única de verdade: cores (2 temas), tipografia, espaçamento, raios, sombras, medidas |
| `css/parchment.css` | Tokens como variáveis CSS, com tema escuro por `prefers-color-scheme` e `data-theme` (gerado) |
| `css/components.css` | Componentes de referência com prefixo `sc-` (botão, campo, menu, abas, toolbar, painel, diálogo, toast, caixa de recorte...) |
| `tailwind/parchment-theme.css` | Tema para Tailwind 4: `bg-parchment`, `text-rubric`, `rounded-lg`, `shadow-raised`, `font-display`, `text-label`... (gerado) |
| `docs/guia.md` | O guia: princípios (contenção primeiro), cor, tipografia, espaço, movimento, foco, iconografia, texto |
| `docs/componentes/` | Diretrizes de cada componente |
| `previews/` | Previews HTML independentes, com alternância de tema |

Versão navegável (privada): https://claude.ai/artifact/Mc3oQbKeCaE8XzGGQnABaB

## Uso

```bash
npm install --save github:htbg/parchment-design
```

Tailwind 4 (Mocquereau):

```css
@import "tailwindcss";
@import "parchment-design/tailwind/parchment-theme.css";
```

CSS puro (Notker):

```css
@import "parchment-design/parchment.css";
@import "parchment-design/components.css";
```

Tema: `document.documentElement.dataset.theme = 'dark' | 'light'`; sem o atributo, segue o sistema.

Fontes: Source Serif 4 e Cormorant Garamond. Apps desktop devem embuti-las (ex.: `@fontsource-variable/source-serif-4`, `@fontsource/cormorant-garamond`) para funcionar offline.

## Alterar tokens

Edite `tokens/tokens.json` e rode `npm run build`. Nunca edite `css/parchment.css` nem `tailwind/parchment-theme.css` à mão. Todo par de texto precisa de contraste >= 4.5:1 nos dois temas.
