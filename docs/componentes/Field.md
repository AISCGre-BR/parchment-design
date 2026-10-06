# Field

Campo de formulário com rótulo `micro` em MAIÚSCULAS acima e input com borda `rule-strong`, `radius-sm` e leve rebaixo (`shadow-inset`).

- Foco: borda `rubric` + halo de 3px `rubric-wash`.
- Textarea do texto litúrgico usa `body` 14/21.
- Placeholder em itálico `ink-muted`.
- Erro: `sc-field--error` + mensagem `small` que diz o que houve e como resolver.

O consumidor fornece rótulo, valor e mensagem de erro. Use `select` nativo (Electron não tem o problema de compositor do WebKitGTK que levou o Notker a evitá-lo).
