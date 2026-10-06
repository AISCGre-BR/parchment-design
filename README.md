# Parchment Design

Linguagem visual compartilhada das ferramentas de paleografia gregoriana: Mocquereau, Notker e o que vier depois. Função antes da forma: estrutura do Material Design, matéria dos manuscritos (pergaminho, tinta, rubrica) e profundidade sutil com luz vinda de cima. Tema claro (Pergaminho) e escuro (Vigília).

*Shared visual language for the Gregorian paleography tools (Mocquereau, Notker): function over form, Material-like structure, manuscript materials and subtle depth. Docs are in Portuguese.*

## Conteúdo

| Caminho | O quê |
|---|---|
| `tokens/tokens.json` | Fonte única de verdade: cores (2 temas), tipografia, espaçamento, raios, sombras, medidas |
| `css/parchment.css` | Tokens como variáveis CSS, com tema escuro por `prefers-color-scheme` e `data-theme` (gerado) |
| `css/components.css` | Componentes de referência com prefixo `sc-` (botão, controle segmentado, campo, menu, toolbar, painel, diálogo, toast, caixa de recorte...) |
| `tailwind/parchment-theme.css` | Tema para Tailwind 4: `bg-parchment`, `text-rubric`, `rounded-lg`, `shadow-elev-2`, `font-serif`, `text-label`... (gerado) |
| `docs/guia.md` | O guia: princípios (contenção primeiro), cor, tipografia, espaço, movimento, foco, iconografia, texto |
| `docs/componentes/` | Diretrizes de cada componente |
| `previews/` | Previews HTML independentes, com alternância de tema |

## Uso

```bash
npm install --save github:AISCGre-BR/parchment-design#v1.0.0
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

Fontes: Source Sans 3 (interface) e Source Serif 4 (conteúdo). Apps desktop devem embuti-las (`@fontsource-variable/source-sans-3`, `@fontsource-variable/source-serif-4`) para funcionar offline.

## Alterar tokens

Edite `tokens/tokens.json` e rode `npm run build`. Nunca edite `css/parchment.css` nem `tailwind/parchment-theme.css` à mão. Todo par de texto precisa de contraste >= 4.5:1 nos dois temas.

## Licença

MIT (ver `LICENSE`). Avisos de terceiros (ícones Lucide nos previews, fontes OFL) em `NOTICE.md`.
