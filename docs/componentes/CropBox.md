# CropBox

Caixa de recorte de uma sílaba sobre a folha do manuscrito (`sc-folio`: superfície com leve vinheta, `elev-2`).

- **Confirmada**: contorno 1.5px + preenchimento translúcido do pigmento da sílaba (`sc-pig-*`; ciclo lapis, orpiment, verdigris, minium, murex, malachite), para que caixas vizinhas nunca tenham a mesma cor. Sem etiqueta.
- **Ativa**: contorno `rubric` com halo, 8 alças de 8px (`radius-xs`, com `elev-1`), etiqueta da sílaba em `rubric`.
- **Sugerida**: contorno tracejado no pigmento que a sílaba terá, vazia. Nunca substitui uma confirmada.
- Zoom: controle flutuante no canto da folha.

Pigmentos em vez de vermelho porque o códice já tem tinta sépia e rubricas vermelhas; a rubrica fica só para a caixa ativa. Teclado: Enter aceita, Delete rejeita, Tab percorre, setas movem 1px (Shift 10px).
