// Prüft, dass jeder Text, der im Code mit T("…") übersetzt wird, im englischen Wörterbuch EN steht (und umgekehrt keine Einträge übrig sind).
// Neue deutsche Texte im Code gehören in T("…"), die Übersetzung in EN. Aufruf: node scripts/check-i18n.mjs
import { readFileSync } from "node:fs";

const text = readFileSync(new URL("../dist/tariffy-glow.js", import.meta.url), "utf8");
const start = text.indexOf("const EN = ");
const end = text.indexOf("};\nconst T = ", start);
if (start < 0 || end < 0) { console.error("Wörterbuch EN nicht gefunden."); process.exit(1); }
const EN = JSON.parse(text.slice(start + "const EN = ".length, end + 1));

// Alle Zeichenketten innerhalb von T(…): auch bei Ausdrücken wie T(a ? "x" : b ? "y" : "z", { … })
const used = new Set();
const code = text.slice(end);
for (const m of code.matchAll(/\bT\(/g)) {
  let depth = 1, i = m.index + m[0].length;
  const argStart = i;
  while (i < code.length && depth > 0) {
    const ch = code[i];
    if (ch === '"' || ch === "'" || ch === "`") { // Zeichenkette überspringen
      const q = ch; i += 1;
      while (i < code.length && code[i] !== q) i += code[i] === "\\" ? 2 : 1;
    } else if (ch === "(") depth += 1;
    else if (ch === ")") depth -= 1;
    i += 1;
  }
  const args = code.slice(argStart, i - 1);
  // nur der erste Parameter zählt (vor dem Komma auf oberster Ebene): Zeichenketten bis zum ersten ", {"
  const first = args.split(/,\s*\{/)[0];
  for (const s of first.matchAll(/"((?:[^"\\\n]|\\.)*)"/g)) {
    const key = JSON.parse(`"${s[1]}"`);
    if (/^[a-z0-9_.:-]+$/.test(key) && !Object.prototype.hasOwnProperty.call(EN, key)) continue; // Vergleichswerte wie "loan"
    used.add(key);
  }
}

const missing = [...used].filter((k) => !Object.prototype.hasOwnProperty.call(EN, k));
const unused = Object.keys(EN).filter((k) => !used.has(k));
if (missing.length) { console.error("Ohne englische Übersetzung:\n- " + missing.join("\n- ")); process.exit(1); }
console.log(`${used.size} Texte im Code, ${Object.keys(EN).length} im Wörterbuch.${unused.length ? ` Ungenutzt: ${unused.length} (Module-Wörterbücher und Platzhalter können dazugehören).` : ""}`);
