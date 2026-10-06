# Button

Botão de 30px, `radius-md`, `label` em Source Sans 3. Hover e pressionado usam camada de estado (8% / 12% da cor do texto), como no Material.

- **Preenchido** (`sc-btn--filled`): `rubric` sólido, brilho de topo a 14% e sombra macia tingida de rubrica; hover `rubric-soft`, pressionado `rubric-deep`. Sem gradiente e sem contorno. Uma ação principal por região: "Sugerir", "Exportar DOCX", "Salvar".
- **Elevado** (`sc-btn--elevated`): superfície `surface-high` → `surface` com volume; ações secundárias ("Abrir…", "Cancelar" em diálogos).
- **Tonal** (`sc-btn--tonal`): fundo `rubric-wash`, texto `rubric`; ação contextual de destaque ("Aceitar 2").
- **Texto** (padrão): ações terciárias.
- **Ícone** (`sc-btn--icon`): 30×30, lucide 16px stroke 1.75, sempre com `aria-label` e tooltip com atalho.
- **Perigo**: texto `danger` e verbo explícito; destrutivo nunca é o preenchido.
