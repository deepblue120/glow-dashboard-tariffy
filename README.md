# Tariffy Glow

Dunkle, kartenbasierte Lovelace-Karte für die Home-Assistant-Integration [Tariffy](https://github.com/weskona/tariffy).
Sie zeigt Verträge übersichtlich: was Aufmerksamkeit braucht zuerst, Details erst auf Tipp.

Die Karte liest die Daten über den Websocket-Befehl `tariffy/subscribe` und ändert nichts an Tariffy. Sie ist rein lesend.
Tariffy muss installiert und eingerichtet sein.

## Funktionen

- **Übersicht:** Fixkosten pro Monat (mit Umschalter „Ohne Kredit“), „Braucht dich“ (Nachzahlung, Kündigungsfrist, Tarifwechsel), nächste Termine und je Vertrag eine Kachel. Die Kacheln sind filterbar und sortierbar nach Dringlichkeit, Abschlag, Gesamtkosten, Laufzeit, Restlaufzeit oder Art des Vertrags (Pfeil-Knopf kehrt die Reihenfolge um, die Wahl wird gemerkt).
- **Vertragsdetails** wie im Tariffy-Panel: Zahlweise und nächste Abbuchung, Mindestlaufzeit und Kündigungsfrist, Versicherungsart, Folgevertrag, Außenzähler beim Wasser, PV-Autarkie mit Gesamtverbrauch und die Abschlagsempfehlung.
- **Labels:** Labels, die du in Home Assistant am Gerät eines Vertrags vergeben hast (Einstellungen, Geräte, Tariffy, Gerät, Labels), erscheinen als Filter auf der Übersicht, in den Kacheln, in den Vertragsdetails und als Aufteilung „Je Label“ auf der Kosten-Seite (zum Beispiel Personen oder Interessen). Die Aufteilung nutzt die Farben der Labels aus Home Assistant (für Admins, andere sehen Grau). Ein Vertrag mit mehreren Labels zählt bei jedem Label voll („Voll zählen“, Standard, als Balken mit Prozent von allen Kosten, die Summe ist dann über 100 %) oder teilt seine Kosten gleichmäßig („Teilen“, als Ring). Namen und Farben der Labels liest die Karte für Admins aus der Label-Verwaltung, für andere Benutzer erscheint die Label-ID als Name.
- **Hauskosten** (Abfallgebühren, Straßenreinigung, Grundsteuer, Schornsteinfeger …, ab Tariffy 1.33) haben eine eigene Gruppe mit Art und „Betrag“ statt „Abschlag“, auf der Übersicht, in der Vertragsliste, in den Filtern und auf der Kosten-Seite.
- **Kredite & Leasing:** Kredite und Leasingverträge stehen wie in Tariffy zusammen in einer Gruppe. Leasing zeigt Kilometerstand, Soll, Hochrechnung und die erwartete Nach- oder Gutschrift. Eigene Icons (`mdi:...`) aus Tariffy werden übernommen.
- **Verträge:** eine Zeile je Vertrag, nach Gruppen sortiert. Ein Tipp auf eine Kachel der Übersicht springt direkt zum geöffneten Vertrag. Beim Zurückwechseln zur Übersicht schließen sich alle Verträge wieder. Antippen klappt Vertrag, Preise, Verbrauch und Einmalposten auf. Kredite zeigen Restschuld, Zins, nächste Rate und Verlauf.
- **Kosten:** Zeitraum wie im Auto-Dashboard: Monat, Jahr, Gesamt oder Plan (Jahresplan), bei Monat und Jahr mit Pfeilen zum Blättern. Die Kostenaufteilung als Ring (je Sparte oder je Vertrag) und die Spalte „Im Zeitraum“ folgen dem Zeitraum. Darunter Verbrauchsverträge, Pauschalverträge und Kredite mit Summen.
- **Kosten, Art der Zahlung:** Bei Monat und Jahr wählst du, wie gerechnet wird. **Anteilig** verteilt jede Zahlung auf die Monate, für die sie gilt (jährlich ÷ 12, halbjährlich ÷ 6, vierteljährlich ÷ 3). **Fällig** zählt die Zahlungen, die im Zeitraum wirklich anfallen. **Verbrauch** nimmt bei Strom, Gas und Wasser die Verbrauchskosten. Dieselbe Wahl „Anteilig / Fällig im <Monat>“ gibt es in der Fixkosten-Kachel der Übersicht. Kredite und Leasing sind in Kostenaufteilung und Gesamtkachel enthalten.
- **Symbole:** Bei jeder Sparte in den Einstellungen gibt es den Knopf „Symbol“. Er öffnet den Symbol-Wähler von Home Assistant mit Suche und Vorschlägen. Ist er nicht geladen, erscheinen Vorschläge zum Antippen und ein Feld für ein eigenes Symbol (`mdi:car`). Ein Symbol, das du in Tariffy an einem Vertrag gewählt hast, hat Vorrang.
- **Farben:** Auf der Seite Einstellungen (Admins) wählst du für jede genutzte Sparte und jede Gruppe eine Farbe, aus einer Palette oder frei. Sie gilt für Symbole, Kostenaufteilung und Legenden. Gespeichert wird sie im Benutzerkonto in Home Assistant. Für alle Benutzer lässt sie sich als `colors:` in der Kartenkonfiguration eintragen (Knopf „Als YAML kopieren“).
- **Historie:** archivierte Verträge und frühere Laufzeiten als eingeklappte Zeilen mit den Gesamtkosten. Ein Tipp klappt die Laufzeiten mit Kosten, Verbrauch und Saldo auf. Beim Verlassen der Seite oder des Tabs schließen sie sich wieder.
- **Einstellungen** (nur Admins): Farben (siehe unten) und Sicherung: Sicherung herunterladen, aus Datei wiederherstellen (mit Vorschau und Rückfrage) und gelöschte Verträge zurückholen oder endgültig vergessen.
- Die Karte startet immer bei „Übersicht“, auch nach dem Verlassen der Seite und der Rückkehr.
- Unter 600 px Breite stellt sich die Karte auf eine Spalte um.

## Installation

### Über HACS

1. **HACS → ⋮ → Benutzerdefinierte Repositories**
2. Dieses Repository, Typ **Dashboard** → **Hinzufügen**
3. „Tariffy Glow“ in HACS öffnen → **Herunterladen**
4. Browser neu laden (Strg+F5)

### Manuell

1. `dist/tariffy-glow.js` nach `/config/www/tariffy-glow/` kopieren.
2. **Einstellungen → Dashboards → ⋮ → Ressourcen** → Eintrag hinzufügen (Typ **JavaScript-Modul**):
   `/local/tariffy-glow/tariffy-glow.js?v=16`

## Konfiguration

```yaml
type: custom:tariffy-glow
# title: Tariffy       # optional
# show_loans: false    # Kredite und Leasing ausblenden
# abo_words: [fitness, gym, studio]   # Wörter, mit denen „Sonstiges“ zu „Telefon & Abos“ wird
# icons:                            # Symbole je Sparte für alle Benutzer
#   sparte: { gas: "mdi:fireplace" }
# colors:                           # Farben für alle Benutzer (eigene Wahl auf der Seite Einstellungen hat Vorrang)
#   sparte: { gas: "#fb923c", water: "#38bdf8" }
#   group: { energy: "#38bdf8" }
# labels:                           # Labels ohne Home Assistant, haben Vorrang
#   Fitnessstudio: [Anna, Fitness]
#   Strom Haus: [Anna, Ben]
# label_colors: { Anna: "#f472b6" }   # eigene Farbe für ein Label, hat Vorrang vor der Farbe aus Home Assistant
# label_include: [Anna, Ben]         # nur diese Labels berücksichtigen
# label_split: equal                 # Vorauswahl „Teilen“ statt „Voll zählen“
```

## Hinweise

- **Summen:** Übersicht und Kosten rechnen gleich. Ein Vertrag zählt in einem Monat nur, wenn seine Laufzeit in diesen Monat fällt: Verträge, die schon abgelaufen sind oder erst später beginnen, zählen nicht. Verträge ohne Beginn zählen immer. Die Preise in den Kacheln (€ / Mon) sind dagegen der feste Monatsanteil des Vertrags.
- Tariffy hat keine Sparte für Mitgliedschaften. Verträge der Sparte „Sonstiges“ mit einem der Wörter `fitness`, `gym`, `studio`, `sport`, `yoga`, `mitglied`, `abo` oder `club` im Titel, Anbieter oder Tarif (oder einem passenden Icon wie `mdi:dumbbell`) stehen deshalb bei „Telefon & Abos“. Mit `abo_words` änderst du die Wörter, eine leere Liste schaltet die Zuordnung ab.
- Nur Deutsch.
- Verträge anlegen, bearbeiten, verlängern, archivieren und Warnungen bestätigen geht weiterhin nur im Tariffy-Panel selbst. Die Karte ändert nur über die Sicherung etwas, und nur für Admins.
- Die Schrift „Outfit“ (SIL Open Font License 1.1) ist eingebettet. Lizenztext: `dist/OFL-Outfit.txt`.
