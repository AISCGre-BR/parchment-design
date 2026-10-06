# Button

Botão em `label` (só a inicial maiúscula), cantos `radius-md`; plano por padrão, com fundo `ink-wash` no hover.

- **Primário** (`sc-btn--primary`): preenchimento `rubric`, texto `on-rubric`. No máximo um por região visível (ex.: "Exportar DOCX" na aba Tabela, "Criar" num diálogo).
- **Outline** (`sc-btn--outline`): borda `rule-strong`, para ações secundárias que precisam parecer clicáveis fora de uma toolbar.
- **Texto** (padrão): dentro de toolbars e barras de ação.
- **Toggle**: `aria-pressed="true"` dá fundo `rubric-wash`, texto `rubric` e o fleurão ❧; nunca use checkbox numa toolbar.
- **Perigo** (`sc-btn--danger`): só para ações destrutivas, sempre com palavra explícita ("Excluir fonte"), nunca só ícone.
- **Ícone** (`sc-btn--icon`): ícones lucide a 14px, stroke 1.5, `aria-label` obrigatório e tooltip com atalho.

O consumidor fornece o rótulo (verbo no infinitivo: "Exportar", "Aceitar sugestão") e, opcionalmente, o ícone. Primário e outline têm `shadow-raised`; os demais são planos.
