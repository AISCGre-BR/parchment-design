# Pigments

Paleta de destaque do conteúdo, com seis pigmentos dos códices: lápis-lazúli (`lapis`), ouro-pigmento (`orpiment`), verdete (`verdigris`), mínio (`minium`), púrpura de múrex (`murex`) e malaquita (`malachite`), cada um com um `-wash` translúcido.

- Aplique com a classe `sc-pig-<nome>`, que define `--pig` e `--pig-wash`; caixa de recorte, chip de sílaba e célula da faixa de prévia leem essas variáveis.
- Ciclo padrão por sílaba, nesta ordem: lapis, orpiment, verdigris, minium, murex, malachite. Vizinhos no ciclo continuam distinguíveis com deuteranopia (ΔE >= 47) nos dois temas.
- O usuário pode fixar o pigmento de uma sílaba, palavra ou seção; o ciclo só preenche o que não foi escolhido.
- Pigmentos marcam contorno e preenchimento (>= 3.3:1); texto sobre eles continua em `ink`.
- `rubric` não faz parte da paleta: é ação, seleção e foco.
