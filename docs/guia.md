Parchment Design é a linguagem visual compartilhada das ferramentas de paleografia gregoriana (Mocquereau e Notker): pergaminho, tinta e rubricação, como numa página de gradual. Estética monástica e paleográfica, não minimalismo tecnológico.

## Princípios

- **Contenção.** A tela mostra só o que ajuda na próxima ação. Sem contadores, numeração, legendas explicativas ou estados escritos onde a forma já comunica. Ferramentas são ícones com tooltip; texto visível só na ação principal. Ações contextuais aparecem apenas quando aplicáveis. Detalhe vai para tooltip, menu ou diálogo. Antes de adicionar um rótulo, pergunte se a tela funciona sem ele.
- **Uma só cor de ênfase.** `rubric` é a rubricação do códice: ação primária, aba ativa, foco, inicial de título, fleurão ❧. Tudo o mais é tinta (`ink`, `ink-soft`, `ink-muted`) sobre pergaminho (`parchment`, `parchment-deep`, `surface`).
- **Cartões sobre a mesa.** O espaço de trabalho (`workspace`) é a mesa; lista de fontes, fólio e tabela são cartões `surface` com `radius-lg` e `shadow-raised`. Dentro do cartão, separe com fios de 1px `rule-soft`. Sombra maior só no que flutua (`shadow-float`, `shadow-pop`).
- **Cantos suaves, não redondos.** `radius-sm` 4 em campos e selos, `radius-md` 6 em botões e abas, `radius-lg` 10 em cartões, menus e diálogos. A caixa de recorte fica quase reta (`radius-handle` 2): o recorte é retangular.
- **A imagem do manuscrito é o protagonista.** Nada de cor forte competindo com o códice; as caixas de recorte usam `lapis`, a única cor que não existe no pergaminho.
- **Estado tem palavra.** Cor nunca é o único sinal: "Salvo", "Modificado", "Sugerida", "Erro".

## Cor

- Menubar e abas em `parchment`; espaço de trabalho `workspace`; cartões, menus, diálogos e a página da tabela `surface`; cólofon e área do fólio `parchment-deep`.
- Texto `ink` em todos os três fundos; secundário `ink-soft`; legendas, placeholders e atalhos `ink-muted`.
- Hairlines decorativas `rule`/`rule-soft`; borda de controle que precisa ser vista `rule-strong` (>= 3:1).
- Pigmentos de estado: `verdigris` (verdete) sucesso, `orpiment` (ouro-pigmento) aviso e não salvo, `lapis` (lápis-lazúli) informação e caixas de recorte, `danger` = `rubric` com palavra e ícone.
- Texto sobre preenchimento rubric: `on-rubric`.

### Tema escuro: Vigília

Não é uma inversão: é o scriptorium à luz de vela. Fundo marrom-tinta quente (`parchment` #1a1613), texto cor de pergaminho, rubrica clareada para #e0727a (5.9:1) com texto escuro por cima (`on-rubric`). Os pigmentos clareiam na mesma proporção. Todos os pares de texto passam 4.5:1 nos dois temas.

## Tipografia

- Família única serifada: **Source Serif 4** (`serif`) para toda a interface; **Cormorant Garamond** (`display`) para wordmark, títulos, nomes de manuscritos e sílabas.
- Escala: `display-xl` 44, `display` 28, `title` 21, `name` 16, `syllable` 15, `body` 14, `body-sm` 13, `label` 13, `caption` 11, `micro` 10.
- Botões e abas: `label` 13px, só a inicial maiúscula. Menubar e tipo de notação no cólofon: versalete. Caixa alta com tracking .12em só em `micro` (rótulos de campo, subtítulos de painel, selos).
- Títulos de painel e diálogo têm a primeira letra em `rubric` (`::first-letter`).
- Números que se alinham (contagens, zoom, fólio, horários) usam `font-variant-numeric: tabular-nums`.
- No app, as fontes ficam embutidas (pacotes @fontsource) para funcionar offline; só este documento as carrega do Google Fonts.

## Espaço e medidas

- Escala de 4px: `space-1` 4 … `space-8` 32.
- Estrutura da janela: `menubar-h` 30, `tabs-h` 36, `toolbar-h` 40, lista lateral `sidebar-w` 220 (redimensionável). Barra de status (`statusbar-h` 24) só quando houver informação contínua indispensável; o Mocquereau não usa.
- Alças das caixas de recorte: `handle` 8px, quadradas.

## Movimento

- 120–180ms com `cubic-bezier(.2,.7,.2,1)`; só cor, fundo, borda e opacidade. Nada salta ou desliza.
- `prefers-reduced-motion: reduce` desliga todas as transições.

## Foco e teclado

- Todo elemento focável: outline 2px sólido `focus` (= `rubric`), offset 2px. Campos de texto em foco: borda `rubric` + halo de 3px `rubric-wash`.
- Cada comando tem um id no registro de comandos; menubar, toolbar, menu de contexto e atalhos chamam o mesmo comando, e o atalho aparece no menu.

## Iconografia

- **lucide** a 15px, stroke 1.6, só nas toolbars e botões de ícone, onde o uso é repetitivo. Ícone sozinho sempre tem `aria-label` e tooltip com atalho.
- Ornamentos tipográficos Unicode, herdados do Notker: ❧ (toggle ligado, item padrão), ✠ (família de notação, quando precisar aparecer).
- Nada de emoji.

## Texto

- Português do Brasil por padrão (o app tem 7 idiomas). Verbos no infinitivo em botões ("Exportar DOCX", "Aceitar sugestão"); reticências quando abre diálogo.
- Erros dizem o que houve e o que fazer: "Não foi possível gravar o DOCX: a pasta está protegida contra escrita. Escolha outra pasta."
- Termos do ofício sem tradução forçada: sílaba, neuma, fólio, fonte (manuscrito), adiastemático, diastemático.

## Implementação em Tailwind 4 (Mocquereau)

- Os tokens viram `@theme` (arquivo `tailwind/parchment-theme.css` do repositório parchment-design) (`--color-parchment`, `--color-rubric`, `--font-serif`, `--font-display`, `--shadow-float`…); o tema escuro redefine as variáveis sob `[data-theme="dark"]`.
- Componentes React com as mesmas classes semânticas descritas aqui; nenhum `bg-gray-*`/`text-blue-*` cru nos componentes.
- O Notker (vanilla TS) consome `css/parchment.css` e `css/components.css` do mesmo repositório.
