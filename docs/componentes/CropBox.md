# CropBox

Caixa de recorte de uma sílaba sobre a imagem do manuscrito, com três estados.

- **Confirmada**: contorno sólido 1.5px `lapis` + preenchimento `lapis-wash`. Sem etiqueta; a sílaba aparece no hover.
- **Ativa**: contorno `rubric` com halo `rubric-wash`, 8 alças de 8px (`handle`, `radius-handle`) e a única etiqueta visível, com a sílaba.
- **Sugerida**: contorno tracejado `lapis`, sem preenchimento e sem etiqueta. Nunca substitui uma caixa confirmada.
- Zoom: controle discreto no canto inferior direito do fólio (`sc-zoom`), não numa barra.

Por que `lapis`: os manuscritos já têm rubricas vermelhas e tinta sépia; o azul é a única família que não aparece no códice. A rubrica fica para o foco (a caixa ativa).

Teclado: Enter aceita a sugestão, Delete rejeita, Tab/Shift+Tab percorre sílabas, setas movem 1px (Shift: 10px).
