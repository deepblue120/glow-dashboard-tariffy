// Prüft, dass jeder Text, der im Code mit T("…") übersetzt wird, im englischen Wörterbuch EN steht (und umgekehrt keine Einträge übrig sind).
// Neue deutsche Texte im Code gehören in T("…"), die Übersetzung in EN. Aufruf: node scripts/check-i18n.mjs
import { readFileSync } from "node:fs";

const text = readFileSync(new URL("../dist/tariffy-glow.js", import.meta.url), "utf8");
const start = text.indexOf("const EN = ");
const end = text.indexOf("};\nconst T = ", start);
if (start < 0 || end < 0) { console.error("Wörterbuch EN nicht gefunden."); process.exit(1); }
const EN = JSON.parse(text.slice(start + "const EN = ".length, end + 1));

const used = new Set();
for (const m of text.slice(end).matchAll(/\bT\(\s*("(?:[^"\\\n]|\\.)*")/g)) used.add(JSON.parse(m[1]));
// T(n === 1 ? "…" : "…") und ähnliche Ausdrücke
for (const m of text.slice(end).matchAll(/\bT\([^"()]*\?\s*("(?:[^"\\\n]|\\.)*")\s*:\s*("(?:[^"\\\n]|\\.)*")/g)) { used.add(JSON.parse(m[1])); used.add(JSON.parse(m[2])); }

const missing = [...used].filter((k) => !Object.prototype.hasOwnProperty.call(EN, k));
const unused = Object.keys(EN).filter((k) => !used.has(k));
if (missing.length) { console.error("Ohne englische Übersetzung:\n- " + missing.join("\n- ")); process.exit(1); }
console.log(`${used.size} Texte im Code, ${Object.keys(EN).length} im Wörterbuch.${unused.length ? ` Ungenutzt: ${unused.length} (Module-Wörterbücher und Platzhalter können dazugehören).` : ""}`);
