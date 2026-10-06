// Gera css/parchment.css e tailwind/parchment-theme.css a partir de tokens/tokens.json.
// Sem dependências: node scripts/build-css.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(root, 'tokens/tokens.json'), 'utf8'));
const [first, ...others] = t.color.themes.map((th) => th.id);

const resolve = (v) => (typeof v === 'string' && /^\{.+\}$/.test(v) ? `var(--${v.slice(1, -1)})` : v);
const valueFor = (tok, theme) => (typeof tok.value === 'string' ? tok.value : tok.value[theme] ?? tok.value[first]);
const themed = [...t.color.tokens, ...(t.shadow?.tokens ?? [])];

const decls = (theme) => themed.map((tok) => `  --${tok.name}: ${resolve(valueFor(tok, theme))};`).join('\n');
const plain = ['spacing', 'radius', 'size']
  .flatMap((fam) => t[fam]?.tokens ?? [])
  .map((tok) => `  --${tok.name}: ${tok.value};`)
  .join('\n');
const fonts = Object.entries(t.type.families).map(([k, v]) => `  --font-${k}: ${v};`).join('\n');

let css = `/* ${t.name} — gerado por scripts/build-css.mjs a partir de tokens/tokens.json. Não edite à mão. */\n`;
css += `:root {\n${decls(first)}\n${plain}\n${fonts}\n  color-scheme: light;\n}\n`;
for (const th of others) {
  css += `@media (prefers-color-scheme: ${th}) {\n  :root:not([data-theme="${first}"]) {\n${decls(th).replace(/^/gm, '  ')}\n    color-scheme: ${th};\n  }\n}\n`;
  css += `:root[data-theme="${th}"] {\n${decls(th)}\n  color-scheme: ${th};\n}\n`;
}
writeFileSync(join(root, 'css/parchment.css'), css);

// Tailwind 4: expõe os tokens como utilitários (bg-parchment, text-rubric, rounded-lg, shadow-raised, font-display...).
// Cores: @theme inline aponta para as variáveis (troca de tema funciona sozinha).
// Sombras (elev-*, highlight, inset) viram shadow-elev-1 etc. via var(). Raio e fonte têm o mesmo nome no Tailwind e no Parchment: ficam como valores literais num @theme normal,
// e css/parchment.css (fora de @layer, portanto vence) redefine as sombras no tema escuro. Evita var() circular.
const lit = (tok) => (typeof tok.value === 'string' ? tok.value : tok.value[first]);
const tw = [
  `/* ${t.name} para Tailwind 4 — gerado. Uso: @import "tailwindcss"; @import "parchment-design/tailwind/parchment-theme.css"; */`,
  `@import "../css/parchment.css";`,
  `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));`,
  `@theme inline {`,
  ...t.color.tokens.map((tok) => `  --color-${tok.name}: var(--${tok.name});`),
  ...(t.spacing?.tokens ?? []).map((tok) => `  --spacing-${tok.name.replace(/^space-/, '')}: var(--${tok.name});`),
  ...(t.shadow?.tokens ?? []).map((tok) => `  --shadow-${tok.name}: var(--${tok.name});`),
  `}`,
  `@theme {`,
  ...(t.radius?.tokens ?? []).map((tok) => `  --${tok.name}: ${tok.value};`),
  ...Object.entries(t.type.families).map(([k, v]) => `  --font-${k}: ${v};`),
  ...t.type.groups.flatMap((g) => g.styles).map((s) => `  --text-${s.name}: ${s.fontSize};\n  --text-${s.name}--line-height: ${s.lineHeight};`),
  `}`,
  '',
].join('\n');
writeFileSync(join(root, 'tailwind/parchment-theme.css'), tw);
console.log('css/parchment.css e tailwind/parchment-theme.css gerados');
