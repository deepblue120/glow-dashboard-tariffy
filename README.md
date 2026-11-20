# Tariffy Glow

Dunkle, kartenbasierte Lovelace-Karte für die Home-Assistant-Integration [Tariffy](https://github.com/weskona/tariffy).
Sie zeigt Verträge übersichtlich: was Aufmerksamkeit braucht zuerst, Details erst auf Tipp.

Die Karte liest die Daten über den Websocket-Befehl `tariffy/subscribe` und ändert nichts an Tariffy. Sie ist rein lesend.
Tariffy muss installiert und eingerichtet sein.

## Funktionen

- **Übersicht:** Fixkosten pro Monat (mit Umschalter „Ohne Kredit“), „Braucht dich“ (Nachzahlung, Kündigungsfrist, Tarifwechsel), nächste Termine und je Vertrag eine Kachel. Die Kacheln sind filterbar und sortierbar nach Dringlichkeit, Abschlag, Gesamtkosten, Laufzeit, Restlaufzeit oder Art des Vertrags (Pfeil-Knopf kehrt die Reihenfolge um, die Wahl wird gemerkt).
- **Vertragsdetails** wie im Tariffy-Panel: Zahlweise und nächste Abbuchung, Mindestlaufzeit und Kündigungsfrist, Versicherungsart, Folgevertrag, Außenzähler beim Wasser, PV-Autarkie mit Gesamtverbrauch und die Abschlagsempfehlung.
- **Kredite & Leasing:** Kredite und Leasingverträge stehen wie in Tariffy zusammen in einer Gruppe. Leasing zeigt Kilometerstand, Soll, Hochrechnung und die erwartete Nach- oder Gutschrift. Eigene Icons (`mdi:...`) aus Tariffy werden übernommen.
- **Verträge:** eine Zeile je Vertrag, nach Gruppen sortiert. Ein Tipp auf eine Kachel der Übersicht springt direkt zum geöffneten Vertrag. Beim Zurückwechseln zur Übersicht schließen sich alle Verträge wieder. Antippen klappt Vertrag, Preise, Verbrauch und Einmalposten auf. Kredite zeigen Restschuld, Zins, nächste Rate und Verlauf.
- **Kosten:** Zeitraum wie im Auto-Dashboard: Monat, Jahr, Gesamt oder Plan (Jahresplan), bei Monat und Jahr mit Pfeilen zum Blättern. Die Kostenaufteilung als Ring (je Sparte oder je Vertrag) und die Spalte „Im Zeitraum“ folgen dem Zeitraum. Darunter Verbrauchsverträge, Pauschalverträge und Kredite mit Summen.
- **Historie:** archivierte Verträge und frühere Laufzeiten mit Kosten, Verbrauch und Saldo.
- **Sicherung** (nur Admins): Sicherung herunterladen, aus Datei wiederherstellen (mit Vorschau und Rückfrage) und gelöschte Verträge zurückholen oder endgültig vergessen.
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
   `/local/tariffy-glow/tariffy-glow.js?v=6`

## Konfiguration

```yaml
type: custom:tariffy-glow
# title: Tariffy       # optional
# show_loans: false    # Kredite und Leasing ausblenden
```

## Hinweise

- Nur Deutsch.
- Verträge anlegen, bearbeiten, verlängern, archivieren und Warnungen bestätigen geht weiterhin nur im Tariffy-Panel selbst. Die Karte ändert nur über die Sicherung etwas, und nur für Admins.
- Die Schrift „Outfit“ (SIL Open Font License 1.1) ist eingebettet. Lizenztext: `dist/OFL-Outfit.txt`.
