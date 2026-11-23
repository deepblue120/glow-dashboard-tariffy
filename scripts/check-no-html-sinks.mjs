// Prüft, dass die Karte keinen HTML-Eingang nutzt, über den Eingaben (Vertragsnamen, Anbieter, Labels …) als HTML gelesen werden könnten.
// Es sind dieselben Begriffe, die der Test des Tariffy-Projekts (tests/test_panel_frontend.py) in allen Dateien der Oberfläche verbietet.
// Aufruf: node scripts/check-no-html-sinks.mjs
import { readFileSync } from "node:fs";

const FILES = ["dist/tariffy-glow.js"];
const FORBIDDEN = ["inner" + "HTML", "outer" + "HTML", "insertAdjacent" + "HTML", "document." + "write", "ev" + "al(", "new Func" + "tion", 'setAttribute("' + "on", "java" + "script:"];

let failed = false;
for (const file of FILES) {
  const text = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  for (const word of FORBIDDEN) {
    if (text.includes(word)) { console.error(`${file}: enthält "${word}"`); failed = true; }
  }
}
if (failed) process.exit(1);
console.log("Keine verbotenen HTML-Eingänge gefunden.");
