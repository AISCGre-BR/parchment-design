# CropBox

Caixa de recorte de uma sílaba sobre a folha do manuscrito (`sc-folio`: superfície com leve vinheta, `elev-2`).

- **Confirmada**: contorno 1.5px `lapis` + `lapis-wash`. Sem etiqueta.
- **Ativa**: contorno `rubric` com halo, 8 alças de 8px (`radius-xs`, com `elev-1`), etiqueta da sílaba em `rubric`.
- **Sugerida**: contorno tracejado `lapis`, vazia. Nunca substitui uma confirmada.
- Zoom: controle flutuante no canto da folha.

`lapis` porque é a única cor que não existe no códice (tinta sépia, rubricas vermelhas). Teclado: Enter aceita, Delete rejeita, Tab percorre, setas movem 1px (Shift 10px).
