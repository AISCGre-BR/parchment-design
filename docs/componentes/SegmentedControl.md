# SegmentedControl

Trilho rebaixado (`parchment-deep` + `inset`) com segmentos; o selecionado sobe como uma peça física (`surface-high` → `surface`, `highlight`, `elev-1`).

- **Seletor de vistas**: Texto, Fontes, Recortes, Tabela. Substitui o assistente Avançar/Voltar e a faixa de abas; fica à esquerda da toolbar. `role="tablist"`, atalhos Ctrl+1…4.
- **Grupo de ferramentas**: segmentos só de ícone (`is-icon`); ferramenta ligada usa `aria-pressed` e fica `rubric`.
- Só nomes, sem números ou marcadores de estado.
