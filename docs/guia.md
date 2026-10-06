Parchment Design é a linguagem visual das ferramentas de paleografia gregoriana (Mocquereau, Notker). Função antes da forma: a estrutura vem do Material Design (elevação, camadas de estado, escala de formas), a matéria vem dos manuscritos (pergaminho, tinta, rubrica, lápis-lazúli), e as superfícies têm volume sutil com luz vinda de cima, como os ícones recentes do macOS.

## Princípios

- **Função antes da forma.** Cada elemento existe para uma ação. Se a tela funciona sem ele, ele sai.
- **Contenção.** Sem contadores, numeração, legendas explicativas ou estados escritos onde a forma já comunica. Ferramentas são ícones com tooltip; texto visível só na ação principal da vista. Ações contextuais aparecem só quando aplicáveis. Detalhe vai para tooltip, menu ou diálogo.
- **Interface sem serifa, conteúdo com serifa.** Controles em Source Sans 3; o que vem do manuscrito e do projeto (sílabas, nomes de fontes, texto litúrgico, título da peça) em Source Serif 4.
- **Profundidade com moderação.** Peças neutras têm volume: gradiente vertical quase imperceptível, brilho de 1px no topo (`highlight`) e sombra curta (`elev-1`). Pressionar afunda (`inset`). Cartões pousam na mesa (`elev-2`); o que flutua sobe mais (`elev-3`, `elev-4`). Nada de vidro, reflexo ou textura chamativa.
- **Uma cor de ação.** `rubric` marca a ação principal, a seleção, o foco e a caixa ativa. Não é ornamento: sem iniciais vermelhas.

## Cor

- Mesa (`workspace`, com textura de papel a 5%) → cartões `surface` → peças elevadas e menus `surface-high`. Menubar e toolbar em `parchment`; trilhos rebaixados em `parchment-deep`.
- Texto `ink`; secundário `ink-soft`; legendas e placeholders `ink-muted` (>= 4.7:1 em todos os fundos).
- Fios `rule-soft` dentro de cartões, `rule` em contornos, `rule-strong` em hover de campos.
- Ação: `rubric` sólido no botão preenchido (hover `rubric-soft`, pressionado `rubric-deep`), texto `on-rubric`, fundo tonal `rubric-wash`. Nunca gradiente nem contorno escuro em cor de ação: a profundidade vem da sombra macia tingida.
- Estados, nomeados pelos pigmentos dos códices: `verdigris` sucesso, `orpiment` aviso, `lapis` informação e caixas de recorte, `danger` = `rubric`. Sempre com palavra.

### Tema Vigília

O scriptorium à luz de vela: marrom-tinta quente, texto cor de pergaminho, rubrica clareada (#e0727a) com texto escuro por cima. O brilho `highlight` cai para 7% e as sombras ficam pretas. Todo par de texto passa 4.5:1 nos dois temas.

## Tipografia

- **Source Sans 3** (`sans`): `title-lg` 20, `title` 15, `body` 14, `label` 13, `caption` 12, `overline` 11 (raro).
- **Source Serif 4** (`serif`): `wordmark` 40, `doc-title` 22, `liturgical` 16/24, `source` 15, `syllable` 15 (itálico na ativa).
- Números que se alinham usam `tabular-nums`.
- No app as fontes vão embutidas (@fontsource) para funcionar offline.

## Forma

- `radius-xs` 2 (caixa de recorte e alças), `radius-sm` 6 (campos, segmentos, itens de menu), `radius-md` 8 (botões, controle segmentado, toasts), `radius-lg` 12 (cartões, menus, folha), `radius-xl` 16 (diálogos).

## Elevação e estado

- `elev-1` peças (botões elevados, segmento selecionado, chips) · `elev-2` cartões e a folha · `elev-3` menus e toasts · `elev-4` diálogos. Toda peça com volume leva `highlight`.
- Camada de estado sobre a cor do conteúdo: 8% no hover, 12% pressionado. Pressionado também desce 0.5px.
- Movimento: 150ms, curva `cubic-bezier(.2,0,0,1)`; `prefers-reduced-motion` desliga.

## Estrutura da janela

- Menubar 30px (ícone do app, menus, título centralizado com "— Editado"), toolbar 44px (seletor de vistas Texto | Fontes | Recortes | Tabela, ferramentas, ação principal à direita), mesa com cartões. Sem faixa de abas e sem barra de status.

## Foco e teclado

- Foco: anel de 2px `focus` (= `rubric`) com 2px de afastamento; campos ganham halo `rubric-wash`.
- Menubar, toolbar, menu de contexto e atalhos chamam os mesmos comandos; o atalho aparece no menu e no tooltip.

## Iconografia

- lucide, 16px, stroke 1.75, só em ferramentas e botões de ícone; sempre com `aria-label` e tooltip. Ícone do app: quadrado arredondado com gradiente de rubrica e "M" em serifa. Sem emoji.

## Texto

- Português do Brasil por padrão (7 idiomas no app). Botões com verbo ("Sugerir", "Exportar DOCX", "Aceitar 2"); reticências quando abre diálogo. Erros numa frase com a saída: "Sem permissão para gravar nesta pasta. Escolher outra."
- Termos do ofício: sílaba, neuma, fólio, fonte, adiastemático, diastemático.

## Implementação

- Repositório `htbg/parchment-design`: `tokens/tokens.json` é a fonte; `npm run build` gera `css/parchment.css` (variáveis, dois temas) e `tailwind/parchment-theme.css` (Tailwind 4).
- Mocquereau (React + Tailwind 4): `@import "parchment-design/tailwind/parchment-theme.css"`; componentes com utilitários dos tokens, nenhum `gray-*`/`blue-*` cru.
- Notker (TS puro): `parchment.css` + `components.css`.
