/*
 * tariffy-glow.js
 * Ablage:    /config/www/tariffy-glow/tariffy-glow.js
 * Ressource: /local/tariffy-glow/tariffy-glow.js?v=24  (Typ: JavaScript-Modul)
 * YAML:      type: custom:tariffy-glow
 *
 * Glow-Karte für die Integration „Tariffy“ (weskona/tariffy). Sie liest die Verträge über den
 * Websocket-Befehl `tariffy/subscribe` und verändert nichts an Tariffy selbst.
 */

window.customCards = window.customCards || [];
// ---------- Sprache ----------
// Die Texte im Code sind Deutsch. T() liefert bei englischer Oberfläche die Übersetzung aus EN (Schlüssel = deutscher Text) und ersetzt {name}.
let LANG = "de";
const EN = {
  "Strom": "Electricity",
  "Strom HT/NT": "Electricity HT/NT",
  "Gas": "Gas",
  "Wasser": "Water",
  "Internet": "Internet",
  "Mobilfunk": "Mobile",
  "Streaming": "Streaming",
  "Versicherung": "Insurance",
  "Kredit": "Loan",
  "Leasing": "Leasing",
  "Hauskosten": "House costs",
  "Sonstiges": "Other",
  "Energie & Wasser": "Energy & water",
  "Telefon & Abos": "Phone & subscriptions",
  "Versicherung & Sonstiges": "Insurance & other",
  "Kredite & Leasing": "Loans & leasing",
  "Das ist keine gültige Tariffy-Sicherung.": "This is not a valid Tariffy backup.",
  "Einen Vertrag mit diesem Namen und dieser Sparte gibt es schon.": "A contract with this name and category already exists.",
  "Diese Sicherung gibt es nicht mehr.": "This backup no longer exists.",
  "Das Wiederherstellen ist fehlgeschlagen.": "Restoring failed.",
  "Übersicht": "Overview",
  "Verträge": "Contracts",
  "Kosten": "Costs",
  "Vorschau": "Forecast",
  "Historie": "History",
  "Einstellungen": "Settings",
  "Abfallgebühren": "Waste fees",
  "Straßenreinigung": "Street cleaning",
  "Niederschlagswasser (Regenwassergebühr)": "Rainwater (stormwater fee)",
  "Grundsteuer": "Property tax",
  "Schornsteinfeger": "Chimney sweep",
  "Winterdienst": "Winter service",
  "Hausmeister / Gebäudeservice": "Caretaker / building services",
  "Auto (Kfz)": "Car",
  "Gebäude / Haus": "Building / house",
  "Hausrat": "Household contents",
  "Haftpflicht": "Liability",
  "Kranken": "Health",
  "Leben": "Life",
  "Rechtsschutz": "Legal protection",
  "Unfall": "Accident",
  "Sonstige": "Other",
  "vierteljährlich": "quarterly",
  "halbjährlich": "half-yearly",
  "jährlich": "yearly",
  "monatlich": "monthly",
  "Dringlichkeit": "Urgency",
  "Abschlag": "Instalment",
  "Gesamtkosten": "Total cost",
  "Laufzeit": "Term",
  "Restlaufzeit": "Remaining term",
  "Art des Vertrags": "Type of contract",
  "Tariffy nicht erreichbar": "Tariffy not reachable",
  "# Noch keine eigenen Farben oder Symbole gewählt": "# No own colours or icons chosen yet",
  "Standard-Symbol": "Default icon",
  "Schließen": "Close",
  "Übernehmen": "Apply",
  "Standard": "Default",
  "Symbol": "Icon",
  "Farben und Symbole": "Colours and icons",
  "Wähle für jede Sparte, die du nutzt, eine Farbe und ein Symbol. Die Farbe gilt für Symbole, Kostenaufteilung und Legenden, das Symbol für die Kacheln und Zeilen. Ein eigenes Symbol, das du in Tariffy an einem Vertrag gewählt hast, hat Vorrang. Die Gruppen färben den Balken der Fixkosten auf der Übersicht. Die Wahl wird in deinem Benutzerkonto in Home Assistant gespeichert und gilt auf allen deinen Geräten.": "Choose a colour and an icon for every category you use. The colour applies to icons, the cost split and legends, the icon to tiles and rows. An own icon that you chose for a contract in Tariffy takes precedence. The groups colour the bar of the fixed costs on the overview. Your choice is saved in your Home Assistant user account and applies on all your devices.",
  "Sparten": "Categories",
  "Gruppen": "Groups",
  "Alle auf Standard": "Reset all",
  "Als YAML kopieren": "Copy as YAML",
  "Für alle Benutzer trägst du Farben und Symbole in der Kartenkonfiguration ein. Das YAML dafür steht hier:": "For all users, enter colours and icons in the card configuration. The YAML for that is here:",
  "<p>Noch keine Verträge.</p>": "<p>No contracts yet.</p>",
  "Nachzahlung droht": "Balance due",
  "Abschlag auf": "Raise instalment to",
  "erhöhen": "",
  "Nachzahlung zu erwarten": "Balance due expected",
  "Jetzt kündigen": "Cancel now",
  "Frist bis": "Deadline",
  "Kündigungsfrist läuft": "Notice period running",
  "Tage": "days",
  "Mehrkilometer": "Extra kilometres",
  "Bei Rückgabe etwa": "At return about",
  "km über der Erlaubnis": "km over the allowance",
  "Mehr Kilometer als erlaubt": "More kilometres than allowed",
  "Wechsel am": "Switch on",
  "Neuer Tarif hinterlegt": "New tariff saved",
  "Abgelaufen": "Expired",
  "Guthaben": "Credit",
  "Gutschrift erwartet": "Credit expected",
  "km gefahren": "km driven",
  "% getilgt": "% repaid",
  "Läuft": "Running",
  "Gesamt": "Total",
  "J.": "y.",
  "Mon.": "mo.",
  "Noch {n} Tage": "{n} days left",
  "Tariffy ist nicht erreichbar:": "Tariffy is not reachable:",
  "Verträge werden geladen …": "Loading contracts …",
  "Noch keine Verträge in Tariffy angelegt.": "No contracts created in Tariffy yet.",
  "Wiederhergestellt:": "Restored:",
  "angelegt,": "created,",
  "übersprungen.": "skipped.",
  "„{t}“ ist wieder da.": "“{t}” is back.",
  "„{t}“ wurde vergessen.": "“{t}” was forgotten.",
  "Art der Kosten": "Kind of costs",
  "Anteilig": "Prorated",
  "Fällig im": "Due in",
  "Alles": "All",
  "Ohne Kredit &amp; Leasing": "Without loans &amp; leasing",
  "Alles im grünen Bereich": "All good",
  "Kündigungsfrist": "Notice period",
  "Vertragsende": "Contract end",
  "Wechsel auf neuen Tarif": "Switch to the new tariff",
  "Keine Termine in den nächsten Monaten.": "No dates in the next months.",
  "Alle": "All",
  "Sortieren": "Sort",
  "Reihenfolge umkehren": "Reverse order",
  "/ Mon": "/ mo",
  "pro Jahr": "per year",
  "Braucht dich": "Needs you",
  "Nächste Termine": "Next dates",
  "Fixkosten pro Monat": "Fixed costs per month",
  "Zahlungen, die im": "Payments due in",
  "fällig werden ·": "·",
  "(Ø": "(avg.",
  "pro Monat)": "per month)",
  "Pro Jahr (Plan)": "Per year (plan)",
  "Seit Vertragsbeginn": "Since contract start",
  "Monat": "Month",
  "Jahr": "Year",
  "Plan": "Plan",
  "Zurück": "Back",
  "Weiter": "Next",
  "Fällig": "Due",
  "Verbrauch": "Usage",
  "Zeitraum": "Period",
  "Ohne Label": "No label",
  "Voll zählen": "Count in full",
  "Teilen": "Split",
  "Je Sparte": "By category",
  "Je Vertrag": "By contract",
  "Je Label": "By label",
  "Kostenaufteilung ·": "Cost split ·",
  "In diesem Zeitraum fallen keine Kosten an.": "There are no costs in this period.",
  "Ein Vertrag mit mehreren Labels zählt bei jedem Label voll. Die Prozente beziehen sich auf alle Kosten (": "A contract with several labels counts in full for each label. The percentages refer to all costs (",
  ") und ergeben zusammen mehr als 100 %.": ") and add up to more than 100 %.",
  "Ein Vertrag mit mehreren Labels zählt bei jedem Label voll.": "A contract with several labels counts in full for each label.",
  "Ein Vertrag mit mehreren Labels teilt seine Kosten gleichmäßig auf, die Prozente ergeben zusammen 100 %.": "A contract with several labels splits its costs evenly; the percentages add up to 100 %.",
  "Keine Labels gefunden. Vergib sie am Gerät des Vertrags in Home Assistant (Einstellungen, Geräte, Tariffy, Gerät, Labels) oder lege sie in der Kartenkonfiguration unter": "No labels found. Assign them to the contract's device in Home Assistant (Settings, Devices, Tariffy, device, Labels) or define them in the card configuration under",
  "fest.": ".",
  "Verbrauchsverträge": "Metered contracts",
  "Pauschalverträge": "Flat-rate contracts",
  "Kostenaufteilung": "Cost split",
  "Anteilig: Jede Zahlung zählt auf die Monate verteilt, für die sie gilt (jährlich ÷ 12, halbjährlich ÷ 6, vierteljährlich ÷ 3).": "Prorated: every payment is spread over the months it covers (yearly ÷ 12, half-yearly ÷ 6, quarterly ÷ 3).",
  "Fällig: Es zählen die Zahlungen, die in diesem Zeitraum tatsächlich anfallen (monatlich, vierteljährlich, halbjährlich, jährlich).": "Due: the payments that actually fall due in this period count (monthly, quarterly, half-yearly, yearly).",
  "Verbrauch: Bei Strom, Gas und Wasser zählen die Verbrauchskosten, sonst die Abschläge anteilig auf die Tage. Kredite zählen anteilig.": "Usage: for electricity, gas and water the usage costs count, otherwise the instalments spread over the days. Loans count prorated.",
  "Alle Kosten im Zeitraum": "All costs in the period",
  "kein Abschlag nötig": "no instalment needed",
  "Im Zeitraum": "In the period",
  "Hochtarif": "High tariff",
  "Niedertarif": "Low tariff",
  "Vertrag": "Contract",
  "Saldo heute": "Balance today",
  "Zum Vertragsende": "At contract end",
  "Empfohlen": "Recommended",
  "Positiv ist Guthaben, negativ ist Nachzahlung. „Zum Vertragsende“ ist aus dem bisherigen Verbrauch hochgerechnet.": "Positive is credit, negative is balance due. “At contract end” is projected from the usage so far.",
  "Kein Vertragsende": "No contract end",
  "/ Jahr": "/ year",
  "Ende": "End",
  "Betrag": "Amount",
  "Bei Pauschalverträgen sind die Kosten bisher die bis heute fälligen Abschläge.": "For flat-rate contracts the cost so far is the instalments due until today.",
  "Hauskosten wie Abfallgebühren oder Grundsteuer sind Pauschalverträge und zählen in den Summen mit. Die Kosten bisher sind die bis heute fälligen Beträge.": "House costs such as waste fees or property tax are flat-rate contracts and count in the totals. The cost so far is the amounts due until today.",
  "Gezahlt": "Paid",
  "Restschuld": "Remaining debt",
  "Restsumme": "Remaining payments",
  "Rate": "Payment",
  "Zinsen gesamt": "Total interest",
  "Hochrechnung": "Projection",
  "Kilometer": "Kilometres",
  "Die Summen der Tabellen darüber zählen ohne Kredite und Leasing. Die Kostenaufteilung und die Gesamtkachel enthalten sie.": "The totals of the tables above exclude loans and leasing. The cost split and the total tile include them.",
  "diesen Monat anteilig": "this month, prorated",
  "Im Zeitraum sind": "The period includes",
  "von archivierten Verträgen enthalten.": "from archived contracts.",
  "3 Monate": "3 months",
  "6 Monate": "6 months",
  "12 Monate": "12 months",
  "Anteilig: Jede Zahlung zählt auf die Monate verteilt, für die sie gilt.": "Prorated: every payment is spread over the months it covers.",
  "Fällig: Es zählen die Zahlungen, die im jeweiligen Monat anfallen.": "Due: the payments that fall due in the month count.",
  "Verbrauch: Bei Strom, Gas und Wasser zählt der Verbrauch desselben Monats im Vorjahr zum heutigen Preis, sonst der Abschlag anteilig.": "Usage: for electricity, gas and water the usage of the same month last year at today's price counts, otherwise the instalment prorated.",
  "Filter aus der Übersicht aktiv": "Filter from the overview active",
  "Aufheben": "Clear",
  "Keine Verträge für die Vorschau.": "No contracts for the forecast.",
  "über Ø": "above avg.",
  "Aktueller Monat": "Current month",
  "Vertrag endet am": "Contract ends on",
  "Folgevertrag ab": "Next contract from",
  "Verbrauch ca.": "Usage approx.",
  "Posten": "Items",
  "<div class=\"sub\">Keine Zahlungen.</div>": "<div class=\"sub\">No payments.</div>",
  "Kündigungsfrist endet": "Notice period ends",
  "Vertrag endet, Folgevertrag ab": "Contract ends, next contract from",
  "Vertrag endet": "Contract ends",
  ", Nachzahlung etwa": ", balance due about",
  ", Guthaben etwa": ", credit about",
  "Wechsel auf den Folgevertrag": "Switch to the next contract",
  "Keine Termine in diesem Zeitraum.": "No dates in this period.",
  "Die Verbrauchsstatistik der Verträge war nicht abrufbar. Die Vorschau rechnet dann mit dem hochgerechneten Verbrauch der Laufzeit.": "The usage statistics of the contracts could not be retrieved. The forecast then uses the projected usage of the term.",
  "Nächste": "Next",
  "Monate": "months",
  "gesamt · Ø": "total · avg.",
  "pro Monat": "per month",
  "Termine im Zeitraum": "Dates in the period",
  "Die Vorschau nimmt die heutigen Preise. Verträge ohne Ende laufen weiter, Verträge mit Ende zählen danach nur mit Folgevertrag.": "The forecast uses today's prices. Contracts without an end continue; contracts with an end only count afterwards if a next contract exists.",
  "Noch keine Historie": "No history yet",
  "Die früheren Laufzeiten eines Vertrags erscheinen hier, sobald der Folgevertrag übernimmt. Archivierte Verträge erscheinen hier ebenfalls.": "The earlier terms of a contract appear here as soon as the next contract takes over. Archived contracts appear here as well.",
  "seit": "since",
  "1 Laufzeit": "1 term",
  "Laufzeiten": "terms",
  "Kosten gesamt:": "Total cost:",
  "mindestens": "at least",
  "Archiviert": "Archived",
  "1 frühere Laufzeit": "1 earlier term",
  "frühere Laufzeiten": "earlier terms",
  "bis": "until",
  "Frühere Laufzeiten": "Earlier terms",
  "gesamt": "total",
  "Saldo": "Balance",
  "Keine früheren Laufzeiten gespeichert.": "No earlier terms saved.",
  "Archivierte Verträge": "Archived contracts",
  "Sicherung heruntergeladen:": "Backup downloaded:",
  "Verträge.": "contracts.",
  "Die Datei ist zu groß.": "The file is too large.",
  "Abbrechen": "Cancel",
  "übersprungen: gibt es schon": "skipped: exists already",
  "Datei:": "File:",
  "Aktion": "Action",
  "Nichts wiederherzustellen: die Verträge dieser Datei gibt es schon.": "Nothing to restore: the contracts of this file already exist.",
  "{n} fehlende(n) Vertrag/Verträge aus dieser Datei anlegen? Vorhandene Verträge werden nicht verändert.": "Create {n} missing contract(s) from this file? Existing contracts are not changed.",
  "Ja, wiederherstellen": "Yes, restore",
  "Wiederherstellen (": "Restore (",
  "· gelöscht am": "· deleted on",
  "„{t}“ zurückholen?": "Bring back “{t}”?",
  "Ja, zurückholen": "Yes, bring back",
  "„{t}“ endgültig vergessen? Danach lässt er sich nicht mehr zurückholen.": "Forget “{t}” for good? It cannot be brought back afterwards.",
  "Ja, vergessen": "Yes, forget",
  "Zurückholen": "Bring back",
  "Jetzt vergessen": "Forget now",
  "Darstellung": "Appearance",
  "Sicherung": "Backup",
  "Sicherung erstellen": "Create a backup",
  "Speichert alle Verträge in einer Datei: ihre Daten, die Historie, den geplanten Folgevertrag und die Bestätigungen. Die Datei enthält persönliche Daten (Kundennummer, Zählernummer, Marktlokation, Benachrichtigungsziel). Bewahre sie sicher auf und gib sie nicht weiter.": "Saves all contracts in one file: their data, history, planned next contract and acknowledgements. The file contains personal data (customer number, meter number, market location, notification target). Keep it safe and do not pass it on.",
  "Sicherung herunterladen": "Download backup",
  "Aus Datei wiederherstellen": "Restore from a file",
  "Wähle eine Sicherungsdatei. Du siehst vorher, was passieren würde, bevor etwas angelegt wird. Verträge, die es schon gibt (gleicher Name und Sparte), werden übersprungen und nie verändert. Nur fehlende werden angelegt.": "Choose a backup file. You see what would happen before anything is created. Contracts that already exist (same name and category) are skipped and never changed. Only missing ones are created.",
  "Sicherungsdatei wählen": "Choose backup file",
  "Gelöschte Verträge": "Deleted contracts",
  "Ein gelöschter Vertrag bleibt 30 Tage erhalten und lässt sich hier zurückholen, auch wenn er in Home Assistant gelöscht wurde.": "A deleted contract is kept for 30 days and can be brought back here, even if it was deleted in Home Assistant.",
  "Keine gelöschten Verträge.": "No deleted contracts.",
  "Labels": "Labels",
  "Art": "Type",
  "Kilometerstand bei Beginn": "Odometer at start",
  "Erlaubt pro Jahr": "Allowed per year",
  "Rest": "Remaining",
  "Mindestlaufzeit": "Minimum term",
  "· bis": "· until",
  "Kündigen bis": "Cancel by",
  "Erinnerung ab": "Reminder from",
  "bestätigt": "confirmed",
  "{n} Monat": "{n} month",
  "{n} Monate": "{n} months",
  "Preis": "Price",
  "Arbeitspreis": "Unit price",
  "Arbeitspreis Niedertarif": "Unit price low tariff",
  "Arbeitspreis Nacht": "Unit price night",
  "Arbeitspreis effektiv": "Unit price effective",
  "Wasserpreis inkl. Abwasser": "Water price incl. wastewater",
  "Grundpreis": "Base price",
  "€/Mon": "€/mo",
  "/ Monat": "/ month",
  "Kosten / Jahr": "Cost / year",
  "Zahlung": "Payment",
  "Erste Abbuchung": "First debit",
  "Nächste Zahlung": "Next payment",
  "Kosten bisher": "Cost so far",
  "Kosten gesamt": "Total cost",
  "Empfohlener Abschlag": "Recommended instalment",
  "Gesamtverbrauch": "Total usage",
  "Durch PV gedeckt": "Covered by PV",
  "Netzbezug (abgerechnet)": "Grid draw (billed)",
  "Bisher": "So far",
  "Hochgerechnet": "Projected",
  "Gartenwasser": "Garden water",
  "Abwasserpflichtig": "Wastewater-liable",
  "Bisher, Hochtarif": "So far, high tariff",
  "Bisher, Niedertarif": "So far, low tariff",
  "Letzte Laufzeit": "Last term",
  "Gartenwasser-Kosten": "Garden water cost",
  "Abwasserkosten": "Wastewater cost",
  "Ohne PV-Autarkie": "Without PV self-sufficiency",
  "PV-Autarkie bisher": "PV self-sufficiency so far",
  "· Niedertarif": "· low tariff",
  "Beginn": "Start",
  "Anbieter": "Provider",
  "Tarif": "Tariff",
  "Zähler": "Meter",
  "Kein Abschlag nötig: Das Guthaben deckt die Kosten bis Vertragsende.": "No instalment needed: the credit covers the costs until the contract ends.",
  "Beim aktuellen Verbrauch ist eine Nachzahlung von etwa": "At the current usage a balance due of about",
  "zu erwarten. Abschlag auf": "is expected. Raise the instalment to",
  "pro Monat erhöhen.": "per month.",
  "Abschlag könnte auf": "The instalment could drop to",
  "pro Monat sinken.": "per month.",
  "Der Abschlag passt.": "The instalment fits.",
  "Es droht eine Nachzahlung.": "A balance due is looming.",
  "Preise": "Prices",
  "Einmalposten": "One-time items",
  "Folgevertrag": "Next contract",
  "Außenzähler": "Outdoor meters",
  "Kilometerstand": "Odometer",
  "Bisher gefahren": "Driven so far",
  "Erlaubt insgesamt": "Allowed in total",
  "Soll bis heute": "Target by now",
  "Gegenüber dem Soll": "Compared with target",
  "Noch übrig": "Left",
  "Erlaubt pro Tag": "Allowed per day",
  "Dein Schnitt pro Tag": "Your average per day",
  "Hochrechnung bei Rückgabe": "Projection at return",
  "Gegenüber der Erlaubnis": "Compared with the allowance",
  "Minderkilometer": "Kilometres not driven",
  "Erwartete Nachzahlung": "Expected extra payment",
  "Erwartete Gutschrift": "Expected credit",
  "Preis je Mehrkilometer": "Price per extra kilometre",
  "Gutschrift je Minderkilometer": "Credit per kilometre not driven",
  "Noch kein Kilometerstand: Wähle in Tariffy einen Sensor oder trage den Stand im Vertrag ein.": "No odometer reading yet: choose a sensor in Tariffy or enter the reading in the contract.",
  "Die Hochrechnung braucht mindestens zwei Wochen Fahrt.": "The projection needs at least two weeks of driving.",
  "In diesem Tempo liegst du bei Rückgabe etwa": "At this pace you will be about",
  "km unter der Erlaubnis.": "km under the allowance at return.",
  "In diesem Tempo bleibst du bei Rückgabe innerhalb der Erlaubnis.": "At this pace you stay within the allowance at return.",
  "abgelaufen": "expired",
  "bisher": "so far",
  "mind.": "min.",
  "wird angelegt": "will be created",
  "offen": "open",
  "aktiv": "active",
  "km über der Erlaubnis.": "km over the allowance at return.",
  "Eigene Farbe für {l}": "Own colour for {l}",
  "Symbol, zum Beispiel mdi:car": "Icon, for example mdi:car",
  "Offen": "Open",
  "Darlehen": "Loan amount",
  "Zins": "Interest",
  "Sollzins": "Nominal rate",
  "Effektiv": "Effective",
  "Zinsen bisher": "Interest so far",
  "Nächste Rate": "Next payment",
  "Datum": "Date",
  "Zinsen": "Interest",
  "Tilgung": "Principal",
  "Verlauf": "Progress",
  "Raten": "Payments",
  "Home Assistant hat das Formular beendet: {m}": "Home Assistant ended the form: {m}",
  "Das Formular konnte nicht geladen werden: {m}": "The form could not be loaded: {m}",
  "Pflichtfeld": "Required",
  "Keine gültige Zahl (null oder größer, Komma oder Punkt).": "Not a valid number (zero or more, decimal comma or point).",
  "Speichern fehlgeschlagen: {m}": "Saving failed: {m}",
  "Gespeichert, aber die Kündigung konnte nicht als erledigt markiert werden. Bitte „Kündigung bestätigen“ benutzen.": "Saved, but the cancellation could not be marked as done. Please use “Acknowledge cancellation”.",
  "Löschen fehlgeschlagen: {m}": "Deleting failed: {m}",
  "Seine Sensoren und Buttons werden entfernt. Die Langzeit-Statistiken, die Home Assistant schon aufgezeichnet hat, bleiben in der Datenbank.": "Its sensors and buttons are removed. The long-term statistics Home Assistant already recorded stay in its database.",
  "Neue Kreditsumme (€)": "New loan amount (€)",
  "Sollzins (% pro Jahr)": "Nominal interest rate (% a year)",
  "Effektiver Jahreszins (%)": "Effective interest rate (%)",
  "Laufzeit (Monate)": "Term (months)",
  "Zahlweise": "Payment interval",
  "Rate je Zahlung (freiwillig)": "Rate per payment (optional)",
  "Schlussrate (freiwillig)": "Final payment (optional)",
  "Erste Abbuchung (optional)": "First debit (optional)",
  "Betrag pro Zahlung (€)": "Amount per payment (€)",
  "Betrag unverändert": "Amount unchanged",
  "Eine der Zahlen ist nicht gültig.": "One of the numbers is not valid.",
  "Vertrag bearbeiten": "Edit contract",
  "Neuer Vertrag": "New contract",
  "Formular wird geladen …": "Loading the form …",
  "Dieses Formular enthält Felder, die die Karte noch nicht anzeigen kann. Bitte die Einrichtung von Home Assistant benutzen.": "This form has fields the card cannot show yet. Please use the setup of Home Assistant.",
  "Kündigung als erledigt markieren": "Mark the cancellation as done",
  "Den geplanten Folgevertrag entfernen? Der aktuelle Vertrag bleibt unverändert.": "Remove the planned next contract? The current contract stays as it is.",
  "Ja, entfernen": "Yes, remove",
  "Den Vertrag „{name}“ endgültig löschen? Das lässt sich nicht rückgängig machen. Zur Bestätigung den Namen eintippen.": "Delete the contract “{name}” for good? This cannot be undone. Type its name to confirm.",
  "Endgültig löschen": "Delete for good",
  "Änderungen speichern? Die Vertragsdaten werden durch das ersetzt, was das Formular zeigt.": "Save the changes? The contract data is replaced with what the form shows.",
  "Ja, speichern": "Yes, save",
  "Vertrag löschen": "Delete contract",
  "Geplanten Vertrag entfernen": "Remove planned contract",
  "{p} % teurer ({n} statt {o} pro Monat)": "{p} % dearer ({n} instead of {o} per month)",
  "{p} % günstiger ({n} statt {o} pro Monat)": "{p} % cheaper ({n} instead of {o} per month)",
  "Folgevertrag bearbeiten": "Edit next contract",
  "Folgevertrag planen": "Plan next contract",
  "Anschlussfinanzierung": "Follow-up financing",
  "Vertrag verlängern": "Renew contract",
  "Verlängern": "Renew",
  "Wird gespeichert …": "Saving …",
  "Die bisherige Laufzeit kommt in die Historie, der Kredit läuft mit neuer Summe, neuem Zins und neuer Laufzeit weiter. Die Summe ist meist die Restschuld.": "The current term goes to the history and the loan runs on with a new amount, interest and term. The amount is usually the remaining debt.",
  "Die bisherige Laufzeit kommt in die Historie. Der Vertrag läuft mit neuem Beginn, Ende und Betrag weiter; die Erinnerungen beginnen neu. Nutze es, wenn sich Beitrag oder Preis zum Ende der Laufzeit ändert, oder bei einer Preisanpassung eines Vertrags ohne Ende (Ende leer lassen).": "The current term goes to the history. The contract runs on with the new start, end and amount; reminders start over. Use it when the premium or price changes at the end of the term, or for a price adjustment of a contract without an end (leave the end empty).",
  "Warnung bestätigen": "Acknowledge warning",
  "Kündigung bestätigen": "Acknowledge cancellation",
  "Archivieren": "Archive",
  "Abschlag-Warnung bestätigen? Sie wird für diesen Vertrag erst wieder gemeldet, wenn sich die Prognose zwischendurch erholt hat.": "Acknowledge the instalment warning? It will not be shown again for this contract unless the forecast recovers first.",
  "Kündigungs-Erinnerung bestätigen? Die Erinnerung wird für diesen Vertrag ausgeblendet.": "Acknowledge the cancellation reminder? The reminder is dismissed for this contract.",
  "Diesen Vertrag archivieren? Er verschwindet aus Übersicht, Kosten und Verträgen und steht in der Historie. Nichts wird gelöscht, du kannst ihn zurückholen.": "Archive this contract? It leaves the overview, the costs and the contracts and moves to the history. Nothing is deleted and you can bring it back.",
  "Diesen Vertrag wieder in die Übersicht holen?": "Bring this contract back to the overview?",
  "Ja, bestätigen": "Yes, acknowledge",
  "Ja, archivieren": "Yes, archive",
  "Gespeichert. Home Assistant lädt den Vertrag neu.": "Saved. Home Assistant reloads the contract.",
  "Der Vertrag wurde angelegt.": "The contract was created.",
  "Der geplante Vertrag wurde entfernt.": "The planned contract was removed.",
  "Der Vertrag wurde gelöscht.": "The contract was deleted.",
  "Vertrag bearbeiten · {name}": "Edit contract · {name}",
  "Folgevertrag · {name}": "Next contract · {name}",
  "Trage einen Betrag über null ein.": "Enter an amount above zero.",
  "Wähle eine Zahlweise.": "Choose a payment interval.",
  "Dieser Vertrag lässt sich nicht verlängern (kein Ende eingetragen oder kein Pauschalvertrag).": "This contract cannot be renewed (no end date, or not a flat-rate contract).",
  "Das Ende darf nicht vor dem Beginn liegen.": "The end must not be before the start.",
  "Die Historie ist voll (50 Laufzeiten).": "The history is full (50 terms).",
  "Diese Laufzeit gibt es nicht mehr.": "This term does not exist any more.",
  "Trage eine Kreditsumme über null ein.": "Enter a loan amount above zero.",
  "Trage eine Laufzeit von mindestens einem Monat ein.": "Enter a term of at least one month.",
  "Trage den Sollzins oder den effektiven Jahreszins ein.": "Enter the nominal or the effective interest rate.",
  "Speichern": "Save",
  "Über der Erlaubnis": "Over the allowance",
  "km über der Erlaubnis, innerhalb der Toleranz": "km over the allowance, within the tolerance",
  "km über der Erlaubnis, bleibst aber innerhalb der Toleranz. Es fällt keine Nachzahlung an.": "km over the allowance but stay within the tolerance. No extra payment is due.",
  "Der Kilometer-Sensor": "The odometer sensor",
  "gibt es nicht (mehr). Wähle in Tariffy einen anderen Sensor.": "does not exist (any more). Choose another sensor in Tariffy.",
  "hat gerade keinen Zahlenwert (Zustand:": "currently has no numeric value (state:",
  "Der Kilometerstand": "The odometer reading",
  "liegt unter dem Stand bei Beginn.": "is below the reading at the start.",
  "Quelle": "Source",
  "Sensor, von der Karte gerechnet": "Sensor, calculated by the card",
  "Kilometer-Sensor": "Odometer sensor",
  "Von Hand eingetragen": "Entered by hand",
  "Details": "Details"};
const T = (key, vars) => {
  let s = LANG === "en" && typeof key === "string" && Object.prototype.hasOwnProperty.call(EN, key) ? EN[key] : key;
  if (vars && typeof s === "string") s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  return s;
};
const langOf = (code) => (String(code || "de").toLowerCase().startsWith("de") ? "de" : "en");
const VERSION = "0.14.0";
// Schrift „Outfit“ (SIL Open Font License 1.1, © The Outfit Project Authors), gleiche Datei wie im Car Dashboard. Lizenztext: dist/OFL-Outfit.txt
const FONT_WOFF2 = "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";

const ICONS = {
  electricity: "M13 2 4 14h7l-1 8 9-12h-7z",
  gas: "M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 .5 1.5 1.5 2 2 2-.5-3 0-5 1-8Z",
  water: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z",
  internet: "M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01",
  mobile: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM11 18h2",
  streaming: "M5 4h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM9 20h6M10 8.5l4 2-4 2z",
  insurance: "M12 3 5 6v5c0 4.500 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z",
  leasing: "M4 16v-4l2-5h12l2 5v4M4 16h16M7 16v2M17 16v2M6.5 12h11",
  hauskosten: "M3 11 12 3l9 8M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5",
  loan: "M3 6h18v12H3zM12 9.500a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5",
  other: "M5 5h14v14H5zM9 9h6M9 13h4",
};
ICONS.electricity_ht_nt = ICONS.electricity;
const TONE_COLOR = { red: "#f87171", orange: "#fb923c", green: "#34d399", blue: "#60a5fa", gray: "#5d6373" };
const SPARTE_COLOR = {
  electricity: "#f7b733", electricity_ht_nt: "#fcd34d", gas: "#fb923c", water: "#38bdf8",
  internet: "#a78bfa", mobile: "#c084fc", streaming: "#e879f9", insurance: "#34d399", other: "#94a3b8",
  hauskosten: "#2dd4bf", loan: "#818cf8", leasing: "#f472b6",
};
const SPARTE_NAME = {
  get electricity() { return T("Strom"); }, get electricity_ht_nt() { return T("Strom HT/NT"); }, get gas() { return T("Gas"); }, get water() { return T("Wasser"); }, get internet() { return T("Internet"); },
  get mobile() { return T("Mobilfunk"); }, get streaming() { return T("Streaming"); }, get insurance() { return T("Versicherung"); }, get loan() { return T("Kredit"); }, get leasing() { return T("Leasing"); }, get hauskosten() { return T("Hauskosten"); }, get other() { return T("Sonstiges"); },
};
const GROUPS = [
  { key: "energy", get label() { return T("Energie & Wasser"); }, color: "#38bdf8", sparten: ["electricity", "electricity_ht_nt", "gas", "water"] },
  { key: "abos", get label() { return T("Telefon & Abos"); }, color: "#a78bfa", sparten: ["internet", "mobile", "streaming"] },
  { key: "misc", get label() { return T("Versicherung & Sonstiges"); }, color: "#34d399", sparten: ["insurance", "other"] },
  { key: "house", get label() { return T("Hauskosten"); }, color: "#2dd4bf", sparten: ["hauskosten"] },
  { key: "loan", get label() { return T("Kredite & Leasing"); }, color: "#f7b733", sparten: ["loan", "leasing"] },
];
// Vorschläge für die Symbolwahl, falls der Symbol-Wähler von Home Assistant nicht geladen ist
const ICON_SUGGEST = ["mdi:flash", "mdi:fire", "mdi:water", "mdi:home", "mdi:home-city", "mdi:chimney", "mdi:recycle", "mdi:delete", "mdi:broom", "mdi:tree", "mdi:sprinkler", "mdi:garage",
  "mdi:wifi", "mdi:router-wireless", "mdi:cellphone", "mdi:phone", "mdi:television-play", "mdi:laptop", "mdi:cloud", "mdi:server", "mdi:newspaper", "mdi:gamepad-variant", "mdi:music", "mdi:camera",
  "mdi:car", "mdi:car-electric", "mdi:car-key", "mdi:gas-station", "mdi:ev-station", "mdi:train", "mdi:airplane", "mdi:bike",
  "mdi:shield-check", "mdi:umbrella", "mdi:lock", "mdi:key", "mdi:medical-bag", "mdi:heart-pulse", "mdi:tooth",
  "mdi:bank", "mdi:cash", "mdi:credit-card", "mdi:piggy-bank", "mdi:file-document", "mdi:account-group", "mdi:school", "mdi:book-open-variant",
  "mdi:dumbbell", "mdi:run", "mdi:paw", "mdi:baby-carriage", "mdi:silverware-fork-knife", "mdi:cart", "mdi:solar-power", "mdi:battery", "mdi:lightbulb", "mdi:thermometer", "mdi:fireplace", "mdi:hammer-wrench", "mdi:dots-horizontal"];
const HA_COLORS = { red: "#f44336", pink: "#e91e63", purple: "#926bc7", "deep-purple": "#6e41ab", indigo: "#3f51b5", blue: "#2196f3", "light-blue": "#03a9f4", cyan: "#00bcd4", teal: "#009688", green: "#4caf50", "light-green": "#8bc34a", lime: "#cddc39", yellow: "#ffeb3b", amber: "#ffc107", orange: "#ff9800", "deep-orange": "#ff6f22", brown: "#795548", "light-grey": "#bdbdbd", grey: "#9e9e9e", "dark-grey": "#606060", "blue-grey": "#607d8b" };
const CHART_COLORS = ["#38bdf8", "#f7b733", "#a78bfa", "#34d399", "#fb923c", "#f87171", "#60a5fa", "#f472b6", "#2dd4bf", "#e879f9", "#facc15", "#94a3b8"];
const BK_ERR = {
  get invalid_backup() { return T("Das ist keine gültige Tariffy-Sicherung."); },
  get exists() { return T("Einen Vertrag mit diesem Namen und dieser Sparte gibt es schon."); },
  get not_found() { return T("Diese Sicherung gibt es nicht mehr."); },
  get restore_failed() { return T("Das Wiederherstellen ist fehlgeschlagen."); },
};
const TABS = [["overview", "Übersicht"], ["contracts", "Verträge"], ["costs", "Kosten"], ["forecast", "Vorschau"], ["history", "Historie"], ["settings", "Einstellungen"]];
const HOUSE = { get waste() { return T("Abfallgebühren"); }, get street_cleaning() { return T("Straßenreinigung"); }, get rainwater() { return T("Niederschlagswasser (Regenwassergebühr)"); }, get property_tax() { return T("Grundsteuer"); }, get chimney_sweep() { return T("Schornsteinfeger"); }, get winter_service() { return T("Winterdienst"); }, get caretaker() { return T("Hausmeister / Gebäudeservice"); } };
const INSURANCE = { get car() { return T("Auto (Kfz)"); }, get house() { return T("Gebäude / Haus"); }, get household() { return T("Hausrat"); }, get liability() { return T("Haftpflicht"); }, get health() { return T("Kranken"); }, get life() { return T("Leben"); }, get legal() { return T("Rechtsschutz"); }, get accident() { return T("Unfall"); }, get other() { return T("Sonstige"); } };
const INTERVAL = { get monthly() { return T("monatlich"); }, get quarterly() { return T("vierteljährlich"); }, get halfyearly() { return T("halbjährlich"); }, get yearly() { return T("jährlich"); } };
// Formulare von Home Assistant: Folgevertrag (Konfigurieren), Vertragsdaten (Neu konfigurieren), neuer Vertrag (Hinzufügen)
const FLOWS = {
  next: { api: "config/config_entries/options/flow", body: (c) => ({ handler: c.entry_id }), category: "options" },
  edit: { api: "config/config_entries/flow", body: (c) => ({ handler: "tariffy", entry_id: c.entry_id }), category: "config" },
  create: { api: "config/config_entries/flow", body: () => ({ handler: "tariffy" }), category: "config" },
};
const INTERVAL_MONTHS = { monthly: 1, quarterly: 3, halfyearly: 6, yearly: 12 };
const ACTIONS = [
  { key: "confirm_abschlag_warning", cond: (c) => c.abschlag_warnung_zu_bestaetigen, label: "Warnung bestätigen", tone: "warn", ask: "Abschlag-Warnung bestätigen? Sie wird für diesen Vertrag erst wieder gemeldet, wenn sich die Prognose zwischendurch erholt hat.", yes: "Ja, bestätigen" },
  { key: "confirm_cancellation", cond: (c) => c.erinnerung_aktiv, label: "Kündigung bestätigen", tone: "warn", ask: "Kündigungs-Erinnerung bestätigen? Die Erinnerung wird für diesen Vertrag ausgeblendet.", yes: "Ja, bestätigen" },
  { key: "archive_contract", cond: (c) => c.archivierbar, label: "Archivieren", tone: "warn", ask: "Diesen Vertrag archivieren? Er verschwindet aus Übersicht, Kosten und Verträgen und steht in der Historie. Nichts wird gelöscht, du kannst ihn zurückholen.", yes: "Ja, archivieren" },
  { key: "restore_contract", cond: (c) => c.archiviert, label: "Zurückholen", tone: "blue", ask: "Diesen Vertrag wieder in die Übersicht holen?", yes: "Ja, zurückholen" },
];
const METERED = new Set(["electricity", "electricity_ht_nt", "gas", "water"]);
const isNum = (v) => typeof v === "number" && isFinite(v);
// Eingaben (Vertragsnamen, Anbieter, Labels, …) kommen nie in den HTML-Parser: esc() gibt nur eine Marke zurück, und _mount() setzt
// den Wert nach dem Parsen als reinen Text oder als Attributwert ein. Das Markup selbst stammt allein aus dem Code dieser Karte.
const TOK_OPEN = "\uE000", TOK_CLOSE = "\uE001";
const TOK_RE = new RegExp(`${TOK_OPEN}(\\d+)${TOK_CLOSE}`, "g");
let tokens = [];
const esc = (s) => { tokens.push(String(s ?? "")); return `${TOK_OPEN}${tokens.length - 1}${TOK_CLOSE}`; };
const tokenText = (str, depth = 0) => String(str).replace(TOK_RE, (_, i) => (depth < 4 ? tokenText(tokens[Number(i)] ?? "", depth + 1) : ""));
// nur harmlose Farbwerte dürfen in ein style-Attribut
const SAFE_COLOR = /^(#[0-9a-f]{3,8}|[a-z]+|(rgb|hsl)a?\([0-9 .,%/]+\)|var\(--[a-z0-9-]+(, ?#[0-9a-f]{3,8})?\))$/i;
const safeColor = (v, fallback) => (typeof v === "string" && SAFE_COLOR.test(v.trim()) ? v.trim() : fallback);
// Tariffy hat keine Sparte für Mitgliedschaften wie das Fitnessstudio: Verträge der Sparte „Sonstiges“ mit einem dieser Wörter
// im Titel, Anbieter oder Tarif (oder passendem Icon) stehen bei „Telefon & Abos“. Anpassbar mit abo_words in der Kartenkonfiguration.
const ABO_WORDS = ["fitness", "gym", "studio", "sport", "yoga", "mitglied", "abo", "club"];
const aboRegex = (words) => (words.length ? new RegExp(words.map((w) => String(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "i") : /$^/);
let ABO_RE = aboRegex(ABO_WORDS);
const groupOf = (c) => {
  if (c.sparte === "other" && (ABO_RE.test(`${c.title || ""} ${c.anbieter || ""} ${c.tarif || ""}`) || /dumbbell|weight|gym|yoga|run/i.test(c.icon || ""))) return GROUPS[1];
  return GROUPS.find((g) => g.sparten.includes(c.sparte)) || GROUPS[2];
};

const CSS = `
:host{display:block}
*{box-sizing:border-box}
.root,.overlay{--bg:#0b0d12;--tile:#14171e;--line:rgba(255,255,255,.07);--text:#f3f5f9;--muted:#8b91a1;--dim:#5d6373;
  --green:#34d399;--red:#f87171;--orange:#fb923c;--blue:#60a5fa;--gold:#f7b733;--cyan:#38bdf8;--violet:#a78bfa;
  font-family:'Outfit',system-ui,-apple-system,'Segoe UI',sans-serif;color:var(--text);font-size:15px;line-height:1.45;
  background:var(--bg);border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:14px}
.num{font-variant-numeric:tabular-nums}
.lbl{font-size:11.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.top{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.brand{font-weight:600;font-size:18px}
.tabs{display:inline-flex;gap:2px;padding:3px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.02)}
.tabs button{font:inherit;font-size:13.5px;color:var(--muted);background:none;border:0;border-radius:9px;padding:6px 14px;cursor:pointer;white-space:nowrap}
.tabs button.on{background:rgba(255,255,255,.08);color:var(--text);font-weight:500}
button:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.tile{background:linear-gradient(180deg,#161920,#12151b);border:1px solid var(--line);border-radius:16px;padding:16px;min-width:0}
.g-green{background:radial-gradient(120% 120% at 0% 0%,rgba(52,211,153,.16),transparent 60%),linear-gradient(180deg,#161920,#12151b);border-color:rgba(52,211,153,.22)}
.g-red{background:radial-gradient(120% 120% at 0% 0%,rgba(248,113,113,.16),transparent 60%),linear-gradient(180deg,#161920,#12151b);border-color:rgba(248,113,113,.25)}
.g-orange{background:radial-gradient(120% 120% at 0% 0%,rgba(251,146,60,.16),transparent 60%),linear-gradient(180deg,#161920,#12151b);border-color:rgba(251,146,60,.25)}
.g-blue{background:radial-gradient(120% 120% at 0% 0%,rgba(96,165,250,.14),transparent 60%),linear-gradient(180deg,#161920,#12151b);border-color:rgba(96,165,250,.22)}
.chip{display:inline-flex;align-items:center;font-size:12px;font-weight:500;border-radius:30px;padding:3px 10px;border:1px solid transparent;white-space:nowrap}
.chip.green{color:var(--green);background:rgba(52,211,153,.1);border-color:rgba(52,211,153,.25)}
.chip.red{color:var(--red);background:rgba(248,113,113,.1);border-color:rgba(248,113,113,.28)}
.chip.orange{color:var(--orange);background:rgba(251,146,60,.1);border-color:rgba(251,146,60,.28)}
.chip.blue{color:var(--blue);background:rgba(96,165,250,.1);border-color:rgba(96,165,250,.25)}
.chip.gray{color:var(--muted);background:rgba(255,255,255,.04);border-color:var(--line)}
.t-green{color:var(--green)}.t-red{color:var(--red)}.t-orange{color:var(--orange)}.t-blue{color:var(--blue)}.t-gray{color:var(--muted)}
.ico{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:rgba(255,255,255,.04);border:1px solid var(--line);flex:none}
.ctile .h .ico,.rh .ico,.hist .hh .ico,.alert .ico{align-self:flex-start}
.ico svg{width:19px;height:19px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.bar{height:6px;border-radius:3px;background:rgba(255,255,255,.07);overflow:hidden}
.bar i{display:block;height:100%;border-radius:3px;box-shadow:0 0 10px currentColor}
.hero{display:grid;grid-template-columns:1.35fr 1.2fr .95fr;gap:14px}
.big{font-size:44px;font-weight:600;line-height:1.05;letter-spacing:-.01em;margin-top:8px}
.big small{font-size:20px;font-weight:400;color:var(--muted)}
.sub{font-size:12.5px;color:var(--muted);margin-top:4px}
.stack{display:flex;height:10px;border-radius:5px;overflow:hidden;gap:2px;margin:14px 0 10px}
.stack i{display:block;height:100%}
.legend{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12.5px;color:var(--muted)}
.legend b{color:var(--text);font-weight:500}
.dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:6px}
.seg{display:inline-flex;padding:2px;border:1px solid var(--line);border-radius:10px;margin-top:12px}
.seg button{font:inherit;font-size:12.5px;color:var(--muted);background:none;border:0;border-radius:8px;padding:4px 10px;cursor:pointer}
.seg button.on{background:rgba(255,255,255,.09);color:var(--text)}
.alerts{display:flex;flex-direction:column;gap:8px;margin-top:10px}
.alert{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;border:1px solid var(--line);background:rgba(255,255,255,.02);cursor:pointer;width:100%;font:inherit;color:inherit;text-align:left}
.alert.red{border-color:rgba(248,113,113,.3);background:rgba(248,113,113,.06)}
.alert.orange{border-color:rgba(251,146,60,.3);background:rgba(251,146,60,.06)}
.alert.blue{border-color:rgba(96,165,250,.3);background:rgba(96,165,250,.06)}
.alert .t{min-width:0;flex:1;font-size:13.5px;line-height:1.3}
.alert .t span{display:block;font-size:12px;color:var(--muted)}
.alert .v{font-weight:600;font-size:14px;white-space:nowrap}
.ok{display:flex;align-items:center;gap:10px;margin-top:10px;color:var(--green);font-size:14px}
.tl{display:flex;flex-direction:column;gap:12px;margin-top:12px}
.tl div{display:grid;grid-template-columns:auto 1fr;gap:0 10px;font-size:13px}
.tl .d{grid-row:span 2;width:9px;height:9px;border-radius:50%;margin-top:6px;background:currentColor;box-shadow:0 0 8px currentColor}
.tl b{font-weight:500;color:var(--text)}
.tl em{font-style:normal;color:var(--muted);font-size:12px}
.bar-row{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.fchips{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.vsep{width:1px;height:20px;background:var(--line);margin:0 4px}
.fchip{font:inherit;font-size:13px;color:var(--muted);background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:30px;padding:5px 12px;cursor:pointer}
.fchip.on{color:var(--text);border-color:rgba(52,211,153,.4);background:rgba(52,211,153,.1)}
.fchip b{font-weight:500;margin-left:4px;color:var(--dim)}
.sortbox{display:flex;align-items:center;gap:8px}
.sortbox select{font:inherit;font-size:13px;color:var(--text);background:#14171e;border:1px solid var(--line);border-radius:10px;padding:5px 8px;color-scheme:dark}
.sortbox select:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.dirbtn{font:inherit;font-size:14px;color:var(--muted);background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:10px;padding:4px 9px;cursor:pointer}
.ctile .sv{font-size:12.5px;color:var(--text)}
.row{scroll-margin-top:72px}
.cgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(205px,1fr));gap:12px}
.ctile{display:flex;flex-direction:column;gap:10px;cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%}
.ctile .h{display:flex;gap:10px;align-items:center;min-width:0}
.ctile .n{font-weight:500;font-size:15px;line-height:1.2}
.ctile .p{font-size:12px;color:var(--muted)}
.ctile .price{font-size:22px;font-weight:600}
.ctile .price small{font-size:12px;font-weight:400;color:var(--muted)}
.ctile .f{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:12px;color:var(--muted)}
.rows{display:flex;flex-direction:column;gap:8px}
.glabel{display:flex;align-items:center;gap:8px;margin:8px 2px 0}
.glabel .cnt{font-size:11px;background:rgba(255,255,255,.06);border-radius:10px;padding:0 7px;color:var(--muted)}
.row{border:1px solid var(--line);border-radius:14px;background:linear-gradient(180deg,#161920,#12151b);overflow:hidden}
.row.open.tone-red{border-color:rgba(248,113,113,.3);background:radial-gradient(90% 140px at 0% 0%,rgba(248,113,113,.12),transparent 70%),linear-gradient(180deg,#161920,#12151b)}
.row.open.tone-orange{border-color:rgba(251,146,60,.3);background:radial-gradient(90% 140px at 0% 0%,rgba(251,146,60,.12),transparent 70%),linear-gradient(180deg,#161920,#12151b)}
.row.open.tone-green{border-color:rgba(52,211,153,.25);background:radial-gradient(90% 140px at 0% 0%,rgba(52,211,153,.10),transparent 70%),linear-gradient(180deg,#161920,#12151b)}
.row.open.tone-blue{border-color:rgba(96,165,250,.25);background:radial-gradient(90% 140px at 0% 0%,rgba(96,165,250,.10),transparent 70%),linear-gradient(180deg,#161920,#12151b)}
.row-top{display:flex;align-items:center;gap:6px;padding-right:10px}
.row-top .rh{flex:1;min-width:0;width:auto}
.ract{display:flex;gap:6px;flex:none}
.ib2{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--muted);cursor:pointer;padding:0;flex:none}
.ib2:hover{color:var(--text);background:rgba(255,255,255,.08)}
.ib2:disabled{opacity:.4;cursor:default}
.ib2:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.ib2 svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.ib2 svg.chev{stroke:var(--muted)}
.narrow .row-top{gap:4px;padding-right:6px}
.narrow .ract{gap:4px}
.narrow .ib2{width:30px;height:30px}
.rh{display:flex;align-items:center;gap:12px;padding:11px 14px;width:100%;background:none;border:0;color:inherit;font:inherit;text-align:left;cursor:pointer}
.rh .n{flex:1;min-width:0}
.rh .n b{display:block;font-weight:500;font-size:15px;line-height:1.25}
.rh .n span{font-size:12.5px;color:var(--muted)}
.rh .v{font-weight:600;font-size:15px;white-space:nowrap}
.rh .v small{font-weight:400;color:var(--muted);font-size:12px}
.chev{width:16px;height:16px;stroke:var(--muted);fill:none;stroke-width:2;flex:none;transition:transform .2s}
.row.open .chev{transform:rotate(180deg)}
.rb{display:none;padding:0 14px 14px}
.row.open .rb{display:block}
.cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}
.mini{background:rgba(255,255,255,.025);border:1px solid var(--line);border-radius:12px;padding:12px;min-width:0}
.mini .lbl{display:block;margin-bottom:6px;font-size:10.5px}
.kv{display:flex;justify-content:space-between;gap:10px;font-size:13px;padding:4px 0}
.kv span{color:var(--muted)}
.kv b{font-weight:500;text-align:right}
.hint{margin-top:12px;font-size:13px;color:var(--orange)}
.tabs{max-width:100%;overflow-x:auto}
select.sel{font:inherit;font-size:13px;color:var(--text);background:#14171e;border:1px solid var(--line);border-radius:10px;padding:5px 8px;color-scheme:dark}
select.sel:focus-visible,input.file:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.kper{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.kper .seg{margin-top:0}
.knav{display:inline-flex;align-items:center;gap:8px}
.knav b{min-width:140px;text-align:center;font-size:14px;font-weight:600}
.sic{width:32px;height:32px;display:grid;place-items:center;background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:10px;color:var(--text);cursor:pointer;padding:0}
.sic:disabled{opacity:.3;cursor:default}
.sic:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.sic svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.narrow .kper{justify-content:center}
.narrow .kper .seg{width:100%}
.narrow .kper .seg button{flex:1}
.crow{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:8px 0;border-top:1px solid var(--line)}
.ipick{flex-basis:100%;display:flex;flex-direction:column;gap:10px;padding:10px 0 4px}
.iin{display:flex;gap:8px;flex-wrap:wrap}
.iin input{flex:1;min-width:180px;font:inherit;font-size:13px;color:var(--text);background:#14171e;border:1px solid var(--line);border-radius:10px;padding:6px 10px}
.igrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(40px,1fr));gap:6px}
.ib{width:100%;aspect-ratio:1;display:grid;place-items:center;background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:10px;color:var(--text);cursor:pointer;padding:0}
.ib.on{border-color:rgba(52,211,153,.5);background:rgba(52,211,153,.12)}
.ib:focus-visible,.iin input:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.crow .cn{flex:1;min-width:140px;font-size:14px;color:var(--text)}
.crow .sw{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.swb{width:22px;height:22px;border-radius:50%;border:2px solid transparent;padding:0;cursor:pointer;box-shadow:0 0 0 1px rgba(255,255,255,.12) inset}
.swb.on{border-color:var(--text)}
.swb:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.crow input[type=color]{width:34px;height:26px;padding:0;border:1px solid var(--line);border-radius:8px;background:none;cursor:pointer}
textarea.yaml{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12.5px;color:#cbd2e1;background:#0d0f15;border:1px solid var(--line);border-radius:12px;padding:10px;resize:vertical;width:100%}
.fc{display:flex;gap:6px;align-items:flex-end;height:210px;padding-top:6px}
.fcol{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:5px;height:100%}
.fbar{width:100%;max-width:68px;display:flex;flex-direction:column-reverse;gap:1px;border-radius:8px;overflow:hidden}
.fbar i{display:block;width:100%}
.fv{font-size:12px;color:var(--muted)}
.fl{font-size:12px;color:var(--muted);text-align:center;line-height:1.15}
.fl small{font-size:10px;color:var(--dim)}
.fcol.peak .fv{color:var(--orange);font-weight:600}
.fline{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;padding:6px 0;border-top:1px solid var(--line);font-size:13.5px}
.fline:first-child{border-top:0}
.fline .fn{display:block;min-width:0}
.fline .fn .dot{margin-right:8px}
.fline .t2{display:block;font-size:12px;color:var(--muted);margin-left:16px}
.narrow .fc{gap:3px}.narrow .fv{font-size:10px}.narrow .fl{font-size:10px}
.overlay{border-radius:0;position:fixed;inset:0;z-index:50;background:rgba(5,7,10,.72);display:grid;place-items:center;padding:16px;overflow:auto}
.dialog{width:min(560px,100%);max-height:calc(100vh - 32px);overflow:auto;background:linear-gradient(180deg,#161920,#12151b);border:1px solid var(--line);border-radius:18px;padding:20px;display:flex;flex-direction:column;gap:12px;box-shadow:0 30px 80px -20px #000}
.dialog h2{margin:0;font-size:19px;font-weight:600}
.dialog .hint{margin:0;color:var(--muted);font-size:13.5px}
.fields{display:flex;flex-direction:column;gap:12px}
.fld{display:flex;flex-direction:column;gap:5px}
.fld.bool{flex-direction:row;align-items:center;gap:10px}
.fld .lbl{letter-spacing:.06em;text-transform:none;font-size:12.5px;font-weight:500;color:var(--muted)}
.fld input[type=text],.fld input[type=date],.fld select{font:inherit;font-size:14px;color:var(--text);background:#14171e;border:1px solid var(--line);border-radius:10px;padding:8px 10px;color-scheme:dark;width:100%}
.fld.bad input,.fld.bad select{border-color:rgba(248,113,113,.6)}
.fld input:focus-visible,.fld select:focus-visible,.confirm-name:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.ferr{font-size:12.5px;color:var(--red)}
.fnote{font-size:12.5px;color:var(--muted)}
.check{display:flex;align-items:center;gap:8px;font-size:13.5px}
.confirm-name{font:inherit;font-size:14px;color:var(--text);background:#14171e;border:1px solid var(--line);border-radius:10px;padding:7px 10px;min-width:160px}
.sec-title{display:flex;align-items:center;gap:8px;margin:8px 2px 0}
.ctl{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:14px}
.ctl .yr{display:flex;align-items:center;gap:8px}
.ctl .seg{margin-top:0}
.lbars{display:flex;flex-direction:column;gap:12px}
.lb .lh{display:grid;grid-template-columns:auto 1fr auto auto;gap:10px;align-items:center;font-size:13.5px;margin-bottom:5px}
.lb .lh b{font-weight:500}
.lb .lh .p{color:var(--muted);font-size:12px;min-width:52px;text-align:right}
.chart-body{display:flex;gap:24px;align-items:center;flex-wrap:wrap}
.donut{position:relative;width:190px;height:190px;flex:none}
.donut svg{width:100%;height:100%;display:block;filter:drop-shadow(0 0 8px rgba(96,165,250,.18))}
.donut .mid{position:absolute;inset:0;display:grid;place-content:center;text-align:center}
.donut .mid b{font-size:24px;font-weight:600;line-height:1.1}
.donut .mid span{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.cleg{flex:1;min-width:240px;display:flex;flex-direction:column;gap:2px}
.cleg div{display:grid;grid-template-columns:auto 1fr auto auto;gap:10px;align-items:center;font-size:13.5px;padding:6px 0;border-bottom:1px solid var(--line)}
.cleg div:last-child{border-bottom:0}
.cleg .p{color:var(--muted);font-size:12px;min-width:48px;text-align:right}
.kind{margin-top:16px}
.kind .stack{margin:0 0 8px}
.ctable{display:flex;flex-direction:column;gap:2px;font-size:13.5px}
.ch,.cr{display:grid;grid-template-columns:var(--cols);gap:10px;padding:8px 10px;align-items:center}
.ch{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.cr{border-top:1px solid var(--line)}
.cr.sub{color:var(--muted);font-size:12.5px;padding-top:2px;padding-bottom:2px;border-top:0}
.cr.tot{font-weight:600;border-top:1px solid rgba(255,255,255,.14)}
.cr .t2,.hist .t2{display:block;font-size:12px;color:var(--muted);font-weight:400}
.cr .r{text-align:right}.ch .r{text-align:right}
.hint2{font-size:12.5px;color:var(--muted);margin-top:10px}
.hist{display:flex;flex-direction:column;gap:10px}
.hist .hh{display:flex;align-items:center;gap:12px}
.hist .hh .n{flex:1;min-width:0}
.hist .hh .n b{display:block;font-weight:500}
.hist .hh .n span{font-size:12.5px;color:var(--muted)}
.bk{display:flex;flex-direction:column;gap:10px;font-size:14px}
.bk p{margin:0;color:var(--muted)}
.btn{font:inherit;font-size:13px;color:var(--text);background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:10px;padding:7px 14px;cursor:pointer}
.btn:disabled{opacity:.5;cursor:default}
.btn.blue{color:var(--blue);border-color:rgba(96,165,250,.4);background:rgba(96,165,250,.08)}
.btn.go{color:var(--green);border-color:rgba(52,211,153,.4);background:rgba(52,211,153,.1)}
.btn.red{color:var(--red);border-color:rgba(248,113,113,.35);background:rgba(248,113,113,.08)}
.btn:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
.acts{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.ask{display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding:10px 12px;border:1px solid rgba(251,146,60,.3);background:rgba(251,146,60,.06);border-radius:12px}
.ask span{flex:1;min-width:200px}
.msg{padding:10px 12px;border-radius:12px;border:1px solid rgba(52,211,153,.25);background:rgba(52,211,153,.08);color:var(--green);font-size:13.5px}
.err{padding:10px 12px;border-radius:12px;border:1px solid rgba(248,113,113,.3);background:rgba(248,113,113,.08);color:var(--red);font-size:13.5px}
.bkrow{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:10px 0;border-top:1px solid var(--line)}
.bkrow .n{flex:1;min-width:160px}
.bkrow .n b{display:block;font-weight:500}
.bkrow .n span{font-size:12.5px;color:var(--muted)}
input.file{font:inherit;font-size:13px;color:var(--muted);max-width:100%}
input.file::file-selector-button{font:inherit;font-size:13px;color:var(--text);background:rgba(255,255,255,.06);border:1px solid var(--line);border-radius:10px;padding:6px 12px;margin-right:10px;cursor:pointer}
.narrow .ch{display:none}
.narrow .cr{grid-template-columns:1fr;gap:2px;padding:10px 4px}
.narrow .cr>[data-l]{display:flex;justify-content:space-between;gap:10px}
.narrow .cr>[data-l]::before{content:attr(data-l);color:var(--muted)}
.narrow .cr .r{text-align:right}
.narrow .cr>.e{display:none}
.narrow .cr.sub{padding:0 4px}
.narrow .cr.tot{padding:10px 4px}
.narrow .cr>.c0{font-weight:500;font-size:15px}
.narrow .donut{margin:0 auto}
.state{padding:28px;text-align:center;color:var(--muted)}
.narrow .hero{grid-template-columns:1fr}
.narrow .cols{grid-template-columns:1fr 1fr}
.narrow .cols>.mini{min-width:0}
.narrow .big{font-size:36px}
.rh .n .st{display:none}
.narrow .rh .chip{display:none}
.narrow .rh .n .st{display:block}
.narrow .cgrid{grid-template-columns:1fr 1fr}
.mid .hero{grid-template-columns:1fr 1fr}
.mid .hero>:last-child{grid-column:1/-1}
.mid .cols{grid-template-columns:1fr 1fr}
@media (max-width:420px){.narrow .cols{grid-template-columns:1fr}.narrow .cgrid{grid-template-columns:1fr}}
@media (prefers-reduced-motion:reduce){.chev{transition:none}}
`;

// Sortierung der Kacheln auf der Übersicht. dir: Standardrichtung (-1 = absteigend, 1 = aufsteigend)
const SORTS = {
  urgency: { get label() { return T("Dringlichkeit"); } },
  abschlag: { get label() { return T("Abschlag"); }, dir: -1 },
  kosten: { get label() { return T("Gesamtkosten"); }, dir: -1 },
  laufzeit: { get label() { return T("Laufzeit"); }, dir: -1 },
  rest: { get label() { return T("Restlaufzeit"); }, dir: 1 },
  art: { get label() { return T("Art des Vertrags"); }, dir: 1 },
};

class TariffyGlow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._contracts = null;
    this._err = null;
    this._tab = "overview";
    this._noLoan = false;
    this._filter = "all";
    this._sort = "urgency";
    this._dir = 1; // 1 = Standardrichtung der Sortierung, -1 = umgekehrt
    try {
      const s = localStorage.getItem("tariffy-glow-sort");
      if (s && SORTS[s.split(":")[0]]) { this._sort = s.split(":")[0]; this._dir = s.endsWith(":-1") ? -1 : 1; }
    } catch (e) { /* ohne Speicher */ }
    this._scrollTo = null;
    this._open = new Set();
    this._histOpen = new Set(); // aufgeklappte Verträge der Historie
    this._dlg = null; // offenes Formular (Vertrag anlegen, ändern, Folgevertrag, Verlängerung)
    this._dlgEl = null;
    this._confirm = null; // Rückfrage zu einer Aktion eines Vertrags
    this._busy = null;
    this._actionError = null;
    this._fcN = 6; // Monate der Vorschau
    this._fcOpen = new Set(); // aufgeklappte Monate der Vorschau
    this._cons = null; // Verbrauch je Monat aus den Langzeitstatistiken: { entry_id: { monatsindex: Verbrauch } }
    this._unsub = null;
    this._ro = null;
    this._cp = { p: "month", off: 0 }; // Zeitraum der Kosten: month | year | all | plan, off 0 = aktuell, -1 = davor
    this._costGroup = "sparte"; // sparte | contract
    // eigene Farben der Sparten und Gruppen: je Benutzer in Home Assistant gespeichert (Einstellung auf der Seite „Einstellungen“)
    this._colors = { sparte: {}, group: {}, icon: {} };
    this._iconPick = null; // Zeile, deren Symbolwahl offen ist
    try { const s = JSON.parse(localStorage.getItem("tariffy-glow-colors") || "null"); if (s && typeof s === "object") this._colors = { sparte: s.sparte || {}, group: s.group || {}, icon: s.icon || {} }; } catch (e) { /* ohne Speicher */ }
    this._labelSplit = "full"; // full = Vertrag zählt bei jedem seiner Labels voll, equal = Kosten gleichmäßig teilen
    this._costMode = "share"; // share = anteilig je Monat, due = wenn die Zahlung fällig ist, real = Verbrauchskosten
    this._bk = { deleted: null, loading: false, busy: false, message: null, error: null, plan: null, backup: null, file: null, asking: null };
  }

  setConfig(config) {
    this._config = { show_loans: true, title: "Tariffy", ...(config || {}) };
    if (this._config.language) LANG = langOf(this._config.language);
    this._labelSplit = this._config.label_split === "equal" ? "equal" : "full";
    ABO_RE = aboRegex(Array.isArray(this._config.abo_words) ? this._config.abo_words : ABO_WORDS);
    this._render();
  }

  get _isAdmin() { return Boolean(this._hass?.user?.is_admin); }

  getCardSize() { return 8; }
  static getStubConfig() { return {}; }

  set hass(hass) {
    this._hass = hass;
    const lang = langOf(this._config?.language || hass?.locale?.language || hass?.language);
    if (lang !== LANG) { LANG = lang; if (this.isConnected && this._contracts) this._render(); }
    if (!this._sub && hass?.connection) this._subscribe();
    // Namen und Farben der Labels kennt nur die Label-Verwaltung (nur für Admins abrufbar); ohne sie dient die ID als Name
    if (!this._colorReq && hass?.callWS) {
      this._colorReq = true;
      hass.callWS({ type: "frontend/get_user_data", key: "tariffy-glow-colors" }).then((r) => {
        const v = r && r.value;
        if (v && typeof v === "object") { this._colors = { sparte: v.sparte || {}, group: v.group || {}, icon: v.icon || {} }; if (this.isConnected) this._render(); }
      }).catch(() => {});
    }
    this._kmSync();
    if (!this._labelReq && hass?.callWS && hass.user?.is_admin) {
      this._labelReq = true;
      hass.callWS({ type: "config/label_registry/list" }).then((list) => {
        this._labelReg = Object.fromEntries((list || []).map((l) => [l.label_id, l]));
        if (this.isConnected) this._render();
      }).catch(() => {});
    }
  }

  // Wer die Seite verlässt und zurückkommt, startet wieder bei „Übersicht“
  _resetView() {
    this._tab = "overview";
    this._open.clear();
    this._histOpen.clear();
    this._fcOpen.clear();
    this._closeFlow();
    this._confirm = null;
    this._scrollTo = null;
    this._filter = "all";
    this._cp = { p: "month", off: 0 };
    Object.assign(this._bk, { message: null, error: null, plan: null, backup: null, file: null, asking: null });
  }

  _onNav = () => {
    if (location.pathname === this._path) return;
    this._path = location.pathname;
    this._resetView();
    if (this.isConnected) this._render();
  };

  // Der Symbol-Wähler von Home Assistant wird erst mit einem Karten-Editor geladen: einmal anstoßen, ohne etwas anzuzeigen
  _loadIconPicker() {
    if (this._pickerTried || customElements.get("ha-icon-picker") || !window.loadCardHelpers) return;
    this._pickerTried = true;
    window.loadCardHelpers().then((h) => h.createCardElement({ type: "button", entity: "sun.sun" }))
      .then((el) => el && el.constructor && el.constructor.getConfigElement && el.constructor.getConfigElement()).catch(() => {});
    customElements.whenDefined("ha-icon-picker").then(() => { if (this.isConnected && this._iconPick) this._render(); });
  }

  connectedCallback() {
    this._loadIconPicker();
    this._path = location.pathname;
    window.addEventListener("location-changed", this._onNav);
    window.addEventListener("popstate", this._onNav);
    if (this._left) { this._left = false; this._resetView(); }
    if (!document.getElementById("tariffy-glow-font")) {
      const s = document.createElement("style");
      s.id = "tariffy-glow-font";
      s.textContent = `@font-face{font-family:'Outfit';font-style:normal;font-weight:100 900;font-display:swap;src:url(data:font/woff2;base64,${FONT_WOFF2}) format('woff2')}`;
      document.head.appendChild(s);
    }
    if (window.ResizeObserver) {
      this._ro = new ResizeObserver(() => this._fit());
      this._ro.observe(this);
    }
    if (this._hass?.connection && !this._sub) this._subscribe();
    this._render();
  }

  disconnectedCallback() {
    this._left = true;
    window.removeEventListener("location-changed", this._onNav);
    window.removeEventListener("popstate", this._onNav);
    this._ro?.disconnect();
    this._ro = null;
    const sub = this._sub;
    this._sub = null;
    if (sub) sub.then((unsub) => unsub && unsub()).catch(() => {});
  }

  _subscribe() {
    this._sub = this._hass.connection.subscribeMessage(
      (msg) => { this._raw = (msg && msg.contracts) || []; this._contracts = this._withKm(this._raw); this._err = null; this._render(); },
      { type: "tariffy/subscribe" }
    );
    this._sub.catch((e) => { this._sub = null; this._err = e?.message || T("Tariffy nicht erreichbar"); this._render(); });
  }

  _fit() {
    const root = this.shadowRoot.querySelector(".root");
    if (!root) return;
    const w = this.clientWidth;
    root.classList.toggle("narrow", w > 0 && w < 600);
    root.classList.toggle("mid", w >= 600 && w < 900);
  }

  // ---------- Daten ----------
  get _live() {
    const cs = (this._contracts || []).filter((c) => !c.archiviert);
    return this._config?.show_loans === false ? cs.filter((c) => groupOf(c).key !== "loan") : cs;
  }

  _monthly(c) {
    if (c.sparte === "loan") return isNum(c.kredit_rate) ? c.kredit_rate / this._stepMonths(c) : 0;
    if (isNum(c.abschlag_jahr)) return c.abschlag_jahr / 12;
    return isNum(c.abschlag) ? c.abschlag : 0;
  }

  // Labels des Vertrags: aus der Geräteverwaltung von Home Assistant (das Tariffy-Gerät des Vertrags) oder aus der
  // Kartenkonfiguration (labels: { "Vertragsname": [Label, …] }), die Vorrang hat. label_include schränkt die Auswahl ein.
  _labelsOf(c) {
    const slug = (n) => String(n).trim().toLowerCase().replace(/\s+/g, "_");
    const pretty = (id) => id.replace(/_/g, " ").replace(/^./, (x) => x.toUpperCase());
    const cfg = this._config?.labels;
    let list = null;
    if (cfg && typeof cfg === "object") {
      const key = Object.keys(cfg).find((k) => k === c.entry_id || k.toLowerCase() === String(c.title).toLowerCase());
      if (key) list = (Array.isArray(cfg[key]) ? cfg[key] : [cfg[key]]).map((n) => ({ id: slug(n), name: String(n), color: null }));
    }
    if (!list) {
      const devices = this._hass?.devices;
      if (devices && this._devSrc !== devices) {
        this._devSrc = devices;
        this._devMap = new Map();
        for (const d of Object.values(devices)) for (const e of d.config_entries || []) this._devMap.set(e, d);
      }
      const d = devices && this._devMap ? this._devMap.get(c.entry_id) : null;
      list = ((d && d.labels) || []).map((id) => {
        const r = (this._hass && this._hass.labels && this._hass.labels[id]) || (this._labelReg && this._labelReg[id]);
        return { id, name: (r && r.name) || pretty(id), color: (r && r.color) || null };
      });
    }
    const inc = this._config?.label_include;
    if (Array.isArray(inc) && inc.length) {
      const set = new Set(inc.map((x) => String(x).toLowerCase()));
      list = list.filter((l) => set.has(l.id.toLowerCase()) || set.has(l.name.toLowerCase()));
    }
    return list;
  }

  // Farbe eines Labels wie in Home Assistant: ein Farbname (red, blue, …) ist die Theme-Variable --<name>-color, sonst ein CSS-Wert.
  // Eigene Farbe in der Kartenkonfiguration: label_colors: { Anna: "#f472b6" } hat Vorrang. Ohne Farbe: neutral grau.
  _labelColor(l) {
    const own = this._config?.label_colors;
    if (own && typeof own === "object") {
      const k = Object.keys(own).find((x) => x.toLowerCase() === l.id.toLowerCase() || x.toLowerCase() === String(l.name).toLowerCase());
      if (k) return safeColor(own[k], "#8b91a1");
    }
    if (!l.color) return "#8b91a1";
    if (/^[a-z-]+$/.test(l.color)) return `var(--${l.color}-color, ${HA_COLORS[l.color] || "#8b91a1"})`;
    return safeColor(l.color, "#8b91a1");
  }

  // Farbe einer Sparte oder Gruppe: eigene Wahl, sonst Kartenkonfiguration (colors:), sonst Standard
  _sparteColor(s) { return safeColor(this._colors.sparte[s] || this._config?.colors?.sparte?.[s], SPARTE_COLOR[s] || "#8b91a1"); }
  _groupColor(g) {
    const key = typeof g === "string" ? g : g.key;
    const def = (GROUPS.find((x) => x.key === key) || {}).color || "#8b91a1";
    return safeColor(this._colors.group[key] || this._config?.colors?.group?.[key], def);
  }
  // gleiche Farbe, die folgenden Verträge derselben Sparte etwas blasser
  _shade(color, k) { return k > 0 && /^#[0-9a-f]{6}$/i.test(color) ? color + ["", "cc", "99", "73"][k % 4] : color; }

  _setIcon(key, value) {
    const id = key.slice(7);
    if (value && !/^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(value)) return;
    if (value) this._colors.icon[id] = value; else delete this._colors.icon[id];
    this._saveColors();
    this._render();
  }

  _saveColors() {
    try { localStorage.setItem("tariffy-glow-colors", JSON.stringify(this._colors)); } catch (e) { /* ohne Speicher */ }
    if (this._hass?.callWS) this._hass.callWS({ type: "frontend/set_user_data", key: "tariffy-glow-colors", value: this._colors }).catch(() => {});
  }

  _setColor(key, value) {
    const [kind, id] = key.split(":");
    if (!this._colors[kind]) return;
    if (value) this._colors[kind][id] = value; else delete this._colors[kind][id];
    this._saveColors();
    this._render();
  }

  _colorYaml() {
    const out = [];
    const cl = [];
    for (const kind of ["sparte", "group"]) {
      const e = Object.entries(this._colors[kind]);
      if (e.length) { cl.push(`  ${kind}:`); for (const [k, v] of e) cl.push(`    ${k}: "${v}"`); }
    }
    if (cl.length) out.push("colors:", ...cl);
    const icons = Object.entries(this._colors.icon);
    if (icons.length) { out.push("icons:", "  sparte:"); for (const [k, v] of icons) out.push(`    ${k}: "${v}"`); }
    return out.length ? out.join("\n") : T("# Noch keine eigenen Farben oder Symbole gewählt");
  }

  _colorRow(key, label, color, iconPath) {
    const swatches = CHART_COLORS.map((c) => `<button type="button" class="swb ${c.toLowerCase() === String(color).toLowerCase() ? "on" : ""}" style="background:${c}" data-act="col-set" data-key="${esc(key)}" data-v="${c}" aria-label="${c}" title="${c}"></button>`).join("");
    const isSparte = key.startsWith("sparte:");
    const own = isSparte ? this._colors.sparte[key.slice(7)] : this._colors.group[key.slice(6)];
    const symbol = isSparte ? this._icon(key.slice(7)) : `<span class="ico" style="color:${color}"><svg viewBox="0 0 24 24"><path d="${iconPath}"/></svg></span>`;
    const curIcon = isSparte ? this._colors.icon[key.slice(7)] || "" : "";
    const open = isSparte && this._iconPick === key;
    const picker = !open ? "" : `<div class="ipick">
      ${customElements.get("ha-icon-picker") ? `<ha-icon-picker class="ihaPicker" data-pickkey="${esc(key)}" label="Symbol suchen"></ha-icon-picker>`
        : `<div class="iin"><input type="text" id="tg-icon-input" placeholder="mdi:car" value="${esc(curIcon)}" aria-label="${T("Symbol, zum Beispiel mdi:car")}"><button type="button" class="btn blue" data-act="icon-apply" data-key="${esc(key)}">${T("Übernehmen")}</button></div>`}
      <div class="igrid">${ICON_SUGGEST.map((i) => `<button type="button" class="ib ${curIcon === i ? "on" : ""}" data-act="icon-set" data-key="${esc(key)}" data-v="${i}" title="${i}" aria-label="${i}"><ha-icon icon="${i}" style="--mdc-icon-size:20px"></ha-icon></button>`).join("")}</div>
      <div class="acts"><button type="button" class="btn" data-act="icon-reset" data-key="${esc(key)}"${curIcon ? "" : " disabled"}>${T("Standard-Symbol")}</button><button type="button" class="btn" data-act="icon-open" data-key="${esc(key)}">${T("Schließen")}</button></div></div>`;
    return `<div class="crow">${symbol}<span class="cn">${esc(label)}</span>
      <div class="sw">${swatches}<input type="color" value="${/^#[0-9a-f]{6}$/i.test(color) ? color : "#8b91a1"}" data-color="${esc(key)}" aria-label="${esc(T("Eigene Farbe für {l}", { l: label }))}">
      ${isSparte ? `<button type="button" class="btn" data-act="icon-open" data-key="${esc(key)}" aria-expanded="${open}">${T("Symbol")}</button>` : ""}
      <button type="button" class="btn" data-act="col-reset" data-key="${esc(key)}"${own ? "" : " disabled"}>${T("Standard")}</button></div>${picker}</div>`;
  }

  _colorTile() {
    const used = [...new Set((this._contracts || []).map((c) => c.sparte))].sort((a, b) => Object.keys(SPARTE_NAME).indexOf(a) - Object.keys(SPARTE_NAME).indexOf(b));
    const groupsUsed = GROUPS.filter((g) => (this._contracts || []).some((c) => groupOf(c) === g));
    const any = Object.keys(this._colors.sparte).length || Object.keys(this._colors.group).length || Object.keys(this._colors.icon).length;
    return `<div class="tile"><div class="lbl" style="margin-bottom:12px">${T("Farben und Symbole")}</div><div class="bk">
      <p>${T("Wähle für jede Sparte, die du nutzt, eine Farbe und ein Symbol. Die Farbe gilt für Symbole, Kostenaufteilung und Legenden, das Symbol für die Kacheln und Zeilen. Ein eigenes Symbol, das du in Tariffy an einem Vertrag gewählt hast, hat Vorrang. Die Gruppen färben den Balken der Fixkosten auf der Übersicht. Die Wahl wird in deinem Benutzerkonto in Home Assistant gespeichert und gilt auf allen deinen Geräten.")}</p>
      <div class="lbl" style="margin-top:4px">${T("Sparten")}</div>
      ${used.length ? used.map((s) => this._colorRow(`sparte:${s}`, SPARTE_NAME[s] || s, this._sparteColor(s), ICONS[s] || ICONS.other)).join("") : T("<p>Noch keine Verträge.</p>")}
      <div class="lbl" style="margin-top:8px">${T("Gruppen")}</div>
      ${groupsUsed.map((g) => this._colorRow(`group:${g.key}`, g.label, this._groupColor(g), "M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0")).join("")}
      <div class="acts" style="margin-top:6px"><button type="button" class="btn" data-act="col-reset-all"${any ? "" : " disabled"}>${T("Alle auf Standard")}</button>
        <button type="button" class="btn blue" data-act="col-copy">${T("Als YAML kopieren")}</button></div>
      <p style="font-size:12.5px">${T("Für alle Benutzer trägst du Farben und Symbole in der Kartenkonfiguration ein. Das YAML dafür steht hier:")}</p>
      <textarea class="yaml" id="tg-yaml" readonly rows="${Math.max(2, this._colorYaml().split("\n").length)}">${esc(this._colorYaml())}</textarea></div></div>`;
  }

  _deviceOf(c) {
    const devices = this._hass?.devices;
    if (!devices) return null;
    if (this._devSrc !== devices) {
      this._devSrc = devices;
      this._devMap = new Map();
      for (const d of Object.values(devices)) for (const e of d.config_entries || []) this._devMap.set(e, d);
    }
    return this._devMap.get(c.entry_id) || null;
  }

  // Sensor „Verbrauch bisher“ des Vertrags (Tariffy-Gerät): seine Langzeitstatistik liefert den Verbrauch je Monat
  _consEntity(c) {
    const d = this._deviceOf(c);
    const ents = this._hass?.entities;
    if (!d || !ents) return null;
    const list = Object.values(ents).filter((x) => x.device_id === d.id);
    const hit = list.find((x) => x.translation_key === "verbrauch_bisher") || list.find((x) => /verbrauch.*bisher|consumption.*so_far/i.test(x.entity_id));
    return hit ? hit.entity_id : null;
  }

  async _loadCons() {
    if (this._consBusy || !this._hass?.callWS) return;
    if (this._consAt && Date.now() - this._consAt < 3600000) return;
    this._consBusy = true;
    const out = {};
    try {
      const ids = {};
      for (const c of (this._contracts || []).filter((x) => METERED.has(x.sparte) && !x.archiviert)) { const e = this._consEntity(c); if (e) ids[c.entry_id] = e; }
      const list = Object.values(ids);
      if (list.length) {
        const start = new Date(); start.setMonth(start.getMonth() - 14, 1); start.setHours(0, 0, 0, 0);
        const res = await this._hass.callWS({ type: "recorder/statistics_during_period", start_time: start.toISOString(), statistic_ids: list, period: "month", types: ["max"] });
        for (const [entry, eid] of Object.entries(ids)) {
          const byMonth = {};
          for (const r of res[eid] || []) { const d = new Date(typeof r.start === "number" ? r.start : Date.parse(r.start)); if (isNum(r.max)) byMonth[d.getFullYear() * 12 + d.getMonth()] = r.max; }
          // Der Sensor zählt den Verbrauch seit Vertragsbeginn: der Verbrauch eines Monats ist der Zuwachs zum Vormonat (nach einem Wechsel zählt der Stand selbst)
          const cons = {};
          for (const k of Object.keys(byMonth).map(Number).sort((a, b) => a - b)) {
            const prev = byMonth[k - 1];
            if (prev !== undefined) cons[k] = byMonth[k] >= prev ? byMonth[k] - prev : byMonth[k];
          }
          out[entry] = cons;
        }
      }
    } catch (e) { /* ohne Statistik rechnet die Vorschau mit dem hochgerechneten Verbrauch */ }
    this._cons = out;
    this._consAt = Date.now();
    this._consBusy = false;
    if (this.isConnected) this._render();
  }

  // Preis je Verbrauchseinheit; beim Gas mit Einheit m³ aus den bisherigen Kosten abgeleitet, da Tariffy den Preis je kWh führt
  _unitPrice(c) {
    const unit = this._unit(c);
    if (c.sparte === "water") return isNum(c.arbeitspreis_gesamt_wasser) ? c.arbeitspreis_gesamt_wasser : isNum(c.arbeitspreis) ? c.arbeitspreis : null;
    if (unit === "kWh") return isNum(c.effektiver_arbeitspreis) ? c.effektiver_arbeitspreis : isNum(c.arbeitspreis) ? c.arbeitspreis : null;
    if (isNum(c.kosten_bisher) && isNum(c.verbrauch_bisher) && c.verbrauch_bisher > 0) {
      const begin = this._ymd(c.beginn);
      const months = begin ? Math.max(0, (Date.now() - begin) / (86400000 * 30.44)) : 0;
      const p = (c.kosten_bisher - (isNum(c.grundpreis) ? c.grundpreis * months : 0)) / c.verbrauch_bisher;
      return p > 0 ? p : null;
    }
    return null;
  }

  // Verbrauch eines Monats: derselbe Monat im Vorjahr, sonst der Durchschnitt der bekannten Monate, sonst die Hochrechnung der Laufzeit
  _monthCons(c, a) {
    const data = this._cons && this._cons[c.entry_id];
    const idx = a.getFullYear() * 12 + a.getMonth();
    if (data) {
      if (isNum(data[idx - 12])) return data[idx - 12];
      const vals = Object.values(data).filter(isNum);
      if (vals.length) return vals.reduce((s, v) => s + v, 0) / vals.length;
    }
    const begin = this._ymd(c.beginn), end = this._ymd(c.ende);
    if (begin && end && isNum(c.verbrauch_hochgerechnet)) {
      const months = Math.max(1, (end - begin) / (86400000 * 30.44));
      return c.verbrauch_hochgerechnet / months;
    }
    return null;
  }

  // Laufzeit, die im Monat gilt: der Vertrag selbst oder sein Folgevertrag (mit dessen Preis im Verhältnis zum jetzigen)
  _termAt(c, a, b) {
    const begin = this._ymd(c.beginn), end = this._ymd(c.ende);
    if ((!begin || begin < b) && (!end || end >= a)) return { factor: 1 };
    const nx = c.next, nb = nx && this._ymd(nx.beginn);
    if (c.ende && nb && nb < b && (!nx.ende || this._ymd(nx.ende) >= a)) {
      return { factor: isNum(nx.arbeitspreis) && isNum(c.arbeitspreis) && c.arbeitspreis > 0 ? nx.arbeitspreis / c.arbeitspreis : 1 };
    }
    return null;
  }

  _consCost(c, a, b) {
    const term = this._termAt(c, a, b);
    if (!term) return 0;
    const price = this._unitPrice(c), cons = this._monthCons(c, a);
    if (price === null || cons === null) return this._shareCost(c, a, b);
    return cons * price * term.factor + (isNum(c.grundpreis) ? c.grundpreis : 0);
  }

  _fcValue(c, a, b) {
    if (this._costMode === "due") return this._dueCost(c, a, b);
    if (this._costMode === "real" && METERED.has(c.sparte)) return this._consCost(c, a, b);
    return this._shareCost(c, a, b);
  }

  _passFilter(c) {
    const f = this._filter;
    if (f === "all") return true;
    if (f.startsWith("label:")) return this._labelsOf(c).some((l) => `label:${l.id}` === f);
    return groupOf(c).key === f;
  }

  // ---------- Leasing-Kilometer ----------
  // Tariffy rechnet die Hochrechnung nur, wenn es beim Aktualisieren einen Kilometerstand hat (alle 6 Stunden, nach dem Start oder nach einer Änderung).
  // Fehlt er dort, aber der Kilometer-Sensor hat jetzt einen Wert, rechnet die Karte dieselbe Formel selbst.
  _kmReading(c) {
    const id = c.km_sensor;
    if (!id) return { id: null, value: null, state: null };
    const st = this._hass && this._hass.states ? this._hass.states[id] : null;
    if (!st) return { id, value: null, state: null, missing: true };
    const n = Number(String(st.state).replace(",", "."));
    if (!Number.isFinite(n) || String(st.state).trim() === "") return { id, value: null, state: st.state };
    const unit = String((st.attributes && st.attributes.unit_of_measurement) || "").trim().toLowerCase();
    return { id, value: ["mi", "mile", "miles"].includes(unit) ? Math.round(n * 1.609344 * 10) / 10 : n, state: st.state };
  }

  _kmCalc(c, aktuell) {
    const out = {};
    const start = isNum(c.km_start) ? c.km_start : 0;
    const beginn = this._ymd(c.beginn), ende = this._ymd(c.ende);
    const gesamttage = beginn && ende && ende > beginn ? Math.round((ende - beginn) / 86400000) : 0;
    const erlaubt = isNum(c.leasing_km_erlaubt) ? c.leasing_km_erlaubt
      : isNum(c.km_gesamt) && c.km_gesamt > 0 ? c.km_gesamt : isNum(c.km_pro_jahr) && c.km_pro_jahr > 0 && gesamttage ? Math.round((c.km_pro_jahr * gesamttage) / 365.25) : null;
    if (aktuell === null || aktuell < start) return out;
    const gefahren = aktuell - start;
    Object.assign(out, { leasing_km_stand: Math.round(aktuell), leasing_km_gefahren: Math.round(gefahren) });
    if (erlaubt === null || !gesamttage || !beginn) return out;
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const vergangen = Math.min(Math.max(Math.round((today - beginn) / 86400000), 0), gesamttage);
    const restTage = Math.max(gesamttage - vergangen, 0);
    const soll = (erlaubt * vergangen) / gesamttage;
    Object.assign(out, {
      leasing_km_soll: Math.round(soll), leasing_km_abweichung: Math.round(gefahren - soll), leasing_km_rest: Math.round(erlaubt - gefahren),
      leasing_km_rest_je_tag: restTage ? Math.round(((erlaubt - gefahren) / restTage) * 10) / 10 : null,
      leasing_km_je_tag: vergangen ? Math.round((gefahren / vergangen) * 10) / 10 : null,
      leasing_km_prozent: erlaubt ? Math.round((gefahren / erlaubt) * 1000) / 10 : null,
    });
    if (vergangen < 14) return out; // zu früh für eine belastbare Hochrechnung
    const hoch = (gefahren / vergangen) * gesamttage;
    const abw = hoch - erlaubt;
    const oben = Math.max(isNum(c.km_toleranz_oben) ? c.km_toleranz_oben : 0, 0), unten = Math.max(isNum(c.km_toleranz_unten) ? c.km_toleranz_unten : 0, 0);
    const mehr = Math.max(0, abw - oben), minder = Math.max(0, -abw - unten);
    const nach = c.preis_mehrkm ? mehr * c.preis_mehrkm : null, gut = c.preis_minderkm ? minder * c.preis_minderkm : null;
    Object.assign(out, {
      leasing_km_hochgerechnet: Math.round(hoch), leasing_km_abweichung_ende: Math.round(abw), leasing_mehr_km: Math.round(mehr), leasing_minder_km: Math.round(minder),
      leasing_nachzahlung: nach === null ? null : Math.round(nach * 100) / 100, leasing_gutschrift: gut === null ? null : Math.round(gut * 100) / 100,
      leasing_km_kosten: nach === null && gut === null ? null : Math.round(((nach || 0) - (gut || 0)) * 100) / 100,
    });
    return out;
  }

  _withKm(raw) {
    return (raw || []).map((c) => {
      if (c.sparte !== "leasing" || isNum(c.leasing_km_gefahren)) return c;
      const r = this._kmReading(c);
      if (r.value === null) return c;
      const calc = this._kmCalc(c, r.value);
      return Object.keys(calc).length ? { ...c, ...calc, leasing_km_lokal: true } : c;
    });
  }

  // Ändert sich der Kilometer-Sensor eines Leasingvertrags ohne Kilometerstand von Tariffy, rechnet die Karte neu
  _kmSync() {
    if (!this._raw) return;
    let sig = "";
    for (const c of this._raw) if (c.sparte === "leasing" && !isNum(c.leasing_km_gefahren)) sig += `${c.entry_id}:${this._kmReading(c).value};`;
    if (sig === this._kmSig) return;
    this._kmSig = sig;
    this._contracts = this._withKm(this._raw);
    if (this.isConnected) this._render();
  }

  _stepMonths(c) {
    return c.zahlweise === "quarterly" ? 3 : c.zahlweise === "halfyearly" ? 6 : c.zahlweise === "yearly" ? 12 : 1;
  }

  _ymd(iso) {
    if (!iso) return null;
    const d = new Date(Number(iso.slice(0, 4)), Number(iso.slice(5, 7)) - 1, Number(iso.slice(8, 10)));
    return isNaN(d) ? null : d;
  }

  // Laufzeiten eines Vertrags mit Zahlungsplan: die laufende (sofern nicht archiviert) und die früheren aus der Historie
  _payTerms(c) {
    const out = [];
    const step = this._stepMonths(c);
    if (c.sparte === "loan") {
      const first = this._ymd(c.kredit_erste_zahlung) || this._ymd(c.beginn);
      if (first && isNum(c.kredit_rate)) {
        out.push({ from: this._ymd(c.beginn) || first, to: this._ymd(c.ende), step, amount: c.kredit_rate, share: c.kredit_rate / step, first,
          count: isNum(c.kredit_zahlungen_gesamt) ? c.kredit_zahlungen_gesamt : null, extra: isNum(c.kredit_schlussrate) ? c.kredit_schlussrate : 0 });
      }
      return out;
    }
    for (const x of c.historie || []) {
      const from = this._ymd(x.beginn);
      if (from && isNum(x.abschlag)) out.push({ from, to: this._ymd(x.ende), step: 1, amount: x.abschlag, share: x.abschlag, first: from, count: null, extra: 0 });
    }
    const begin = this._ymd(c.beginn);
    if (!c.archiviert) {
      const share = isNum(c.abschlag_jahr) ? c.abschlag_jahr / 12 : isNum(c.abschlag) ? c.abschlag : null;
      if (share !== null) {
        const amount = isNum(c.abschlag_je_zahlung) ? c.abschlag_je_zahlung : share * step;
        // ohne Beginn läuft der Vertrag von jeher; die Fälligkeit richtet sich nach erster oder nächster Zahlung
        const anchor = begin || this._ymd(c.erste_zahlung) || this._ymd(c.naechste_zahlung) || new Date(2000, 0, 1);
        const first = step > 1 && c.erste_zahlung ? this._ymd(c.erste_zahlung) || anchor : anchor;
        out.push({ from: begin, to: this._ymd(c.ende), step, amount, share, first, count: null, extra: 0 });
      }
    }
    // Hat der Vertrag ein Ende und einen Folgevertrag, geht es dort weiter. Ohne Ende läuft der Vertrag einfach weiter.
    const nx = c.next;
    if (!c.archiviert && c.ende && nx && nx.beginn && isNum(nx.abschlag)) {
      const nb = this._ymd(nx.beginn);
      if (nb) out.push({ from: nb, to: this._ymd(nx.ende), step, amount: nx.abschlag * step, share: nx.abschlag, first: nb, count: null, extra: 0 });
    }
    return out;
  }

  _addMonths(d, n) {
    const m = d.getMonth() + n;
    const y = d.getFullYear() + Math.floor(m / 12);
    const mm = ((m % 12) + 12) % 12;
    return new Date(y, mm, Math.min(d.getDate(), new Date(y, mm + 1, 0).getDate()));
  }

  // Zahlungen, die im Zeitraum [a, b) fällig werden (monatlich, vierteljährlich, halbjährlich, jährlich)
  _dueCost(c, a, b) {
    let sum = 0;
    for (const x of this._payTerms(c)) {
      // ohne Beginn kann eine Zahlung auch vor dem ersten Termin liegen: ab einem Schritt vor dem Zeitraum zählen
      const mi = (d) => d.getFullYear() * 12 + d.getMonth();
      const k0 = x.from ? 0 : Math.floor((mi(a) - mi(x.first)) / x.step) - 1;
      for (let k = k0; k < k0 + 2000; k += 1) {
        const d = this._addMonths(x.first, k * x.step);
        if (d >= b) break;
        if (x.count !== null && k >= x.count) break;
        if (x.to && d > x.to) break;
        if (d >= a && (!x.from || d >= x.from)) sum += x.amount + (x.count !== null && k === x.count - 1 ? x.extra : 0);
      }
    }
    return sum;
  }

  // Monatsanteil im Zeitraum [a, b): jede Zahlung verteilt auf die Monate, für die sie gilt (jährlich ÷ 12, vierteljährlich ÷ 3 …)
  _shareCost(c, a, b) {
    let sum = 0;
    for (const x of this._payTerms(c)) {
      const endEx = x.to ? new Date(x.to.getFullYear(), x.to.getMonth(), x.to.getDate() + 1) : null;
      for (let m = new Date(a.getFullYear(), a.getMonth(), 1); m < b; m = new Date(m.getFullYear(), m.getMonth() + 1, 1)) {
        const m1 = new Date(m.getFullYear(), m.getMonth() + 1, 1);
        const lo = Math.max(m, a, x.from), hi = Math.min(m1, b, endEx || m1);
        if (hi > lo) sum += x.share * ((hi - lo) / (m1 - m));
      }
    }
    return sum;
  }

  _days(iso) {
    if (!iso) return null;
    const d = new Date(iso + "T00:00:00");
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return Math.round((d - t) / 86400000);
  }

  _issues(c) {
    const out = [];
    const prog = c.prognose_real;
    if (METERED.has(c.sparte) && isNum(prog) && prog < 0) {
      out.push({
        rank: 0, tone: "red", chip: T("Nachzahlung droht"), title: c.title,
        sub: isNum(c.abschlag_anpassung_empfohlen) ? `${T("Abschlag auf")} ${this._eur(c.abschlag_anpassung_empfohlen, 0)} ${T("erhöhen")}` : T("Nachzahlung zu erwarten"),
        value: this._eur(prog, 0),
      });
    }
    if (c.erinnerung_aktiv) {
      const until = c.kuendigung_bis || c.ende;
      const days = this._days(until);
      out.push({
        rank: 1, tone: "orange", chip: T("Jetzt kündigen"), title: c.title,
        sub: until ? `${T("Frist bis")} ${this._date(until)}` : T("Kündigungsfrist läuft"),
        value: days !== null && days >= 0 ? `${days} ${T("Tage")}` : "",
      });
    }
    if (c.sparte === "leasing" && isNum(c.leasing_mehr_km) && c.leasing_mehr_km > 0) {
      out.push({
        rank: 1, tone: "orange", chip: T("Mehrkilometer"), title: c.title,
        sub: isNum(c.leasing_km_abweichung_ende) ? `${T("Bei Rückgabe etwa")} ${this._num(c.leasing_km_abweichung_ende, 0)} ${T("km über der Erlaubnis")}` : T("Mehr Kilometer als erlaubt"),
        value: isNum(c.leasing_nachzahlung) && c.leasing_nachzahlung > 0 ? `≈ ${this._eur(c.leasing_nachzahlung, 0)}` : "",
      });
    }
    if (c.sparte === "leasing" && !(isNum(c.leasing_mehr_km) && c.leasing_mehr_km > 0) && isNum(c.leasing_km_abweichung_ende) && c.leasing_km_abweichung_ende > 0) {
      out.push({
        rank: 2, tone: "blue", chip: T("Über der Erlaubnis"), title: c.title,
        sub: `${T("Bei Rückgabe etwa")} ${this._num(c.leasing_km_abweichung_ende, 0)} ${T("km über der Erlaubnis, innerhalb der Toleranz")}`,
        value: isNum(c.leasing_nachzahlung) ? `≈ ${this._eur(c.leasing_nachzahlung, 0)}` : "",
      });
    }
    if (c.wechsel) {
      out.push({ rank: 2, tone: "blue", chip: `${T("Wechsel am")} ${this._date(c.wechsel)}`, title: c.title, sub: T("Neuer Tarif hinterlegt"), value: "" });
    }
    return out;
  }

  _status(c) {
    const issue = this._issues(c)[0];
    if (issue) return issue;
    if (c.archivierbar) return { rank: 4, tone: "gray", chip: T("Abgelaufen"), value: "" };
    if (METERED.has(c.sparte) && isNum(c.prognose_real) && c.prognose_real > 0) {
      return { rank: 3, tone: "green", chip: T("Guthaben"), value: this._eur(c.prognose_real, 0, true) };
    }
    if (c.sparte === "leasing" && isNum(c.leasing_minder_km) && c.leasing_minder_km > 0 && isNum(c.leasing_gutschrift) && c.leasing_gutschrift > 0) {
      return { rank: 3, tone: "green", chip: T("Gutschrift erwartet"), value: this._eur(c.leasing_gutschrift, 0, true) };
    }
    if (c.sparte === "leasing" && isNum(c.leasing_km_gefahren)) {
      return { rank: 5, tone: "gray", chip: `${this._num(c.leasing_km_gefahren, 0)} ${T("km gefahren")}`, value: "" };
    }
    if (c.sparte === "loan" && isNum(c.kredit_tilgung_prozent)) {
      return { rank: 5, tone: "gray", chip: `${this._num(c.kredit_tilgung_prozent, 0)} ${T("% getilgt")}`, value: "" };
    }
    return { rank: 5, tone: "gray", chip: T("Läuft"), value: "" };
  }

  _progress(c) {
    if (c.sparte === "loan") return isNum(c.kredit_tilgung_prozent) ? c.kredit_tilgung_prozent : 0;
    if (!c.beginn || !c.ende) return null;
    const a = new Date(c.beginn).getTime(), b = new Date(c.ende).getTime(), n = Date.now();
    if (!(b > a)) return null;
    return Math.max(0, Math.min(100, ((n - a) / (b - a)) * 100));
  }

  _totalCost(c) {
    if (c.sparte === "loan" && isNum(c.kredit_gesamtkosten)) return c.kredit_gesamtkosten;
    for (const k of ["kosten_gesamt", "kosten_bisher", "kosten_jahr"]) if (isNum(c[k])) return c[k];
    return null;
  }

  _duration(c) {
    if (!c.beginn || !c.ende) return null;
    const d = (new Date(c.ende) - new Date(c.beginn)) / 86400000;
    return isNaN(d) ? null : Math.round(d);
  }

  _sortValue(c) {
    switch (this._sort) {
      case "abschlag": return this._monthly(c);
      case "kosten": return this._totalCost(c);
      case "laufzeit": return this._duration(c);
      case "rest": return isNum(c.restlaufzeit) ? c.restlaufzeit : null;
      case "art": return GROUPS.indexOf(groupOf(c)) * 100 + Object.keys(SPARTE_NAME).indexOf(c.sparte);
      default: return null;
    }
  }

  _sorted(list) {
    const urgency = (a, b) => this._status(a).rank - this._status(b).rank || this._monthly(b) - this._monthly(a);
    if (this._sort === "urgency") return list.sort((a, b) => this._dir * urgency(a, b));
    const dir = (SORTS[this._sort].dir || 1) * this._dir;
    return list.sort((a, b) => {
      const x = this._sortValue(a), y = this._sortValue(b);
      if (x === null && y === null) return urgency(a, b);
      if (x === null) return 1; // ohne Wert immer ans Ende
      if (y === null) return -1;
      return dir * (x - y) || urgency(a, b);
    });
  }

  _sortText(c) {
    const v = this._sortValue(c);
    switch (this._sort) {
      case "kosten": return v === null ? "" : `${T("Gesamt")} ${this._eur(v, 0)}`;
      case "laufzeit": return v === null ? "" : v >= 365 ? `${T("Laufzeit")} ${this._num(v / 365.25, 1)} ${T("J.")}` : `${T("Laufzeit")} ${Math.round(v / 30.4)} ${T("Mon.")}`;
      case "rest": return v === null ? "" : v >= 0 ? T("Noch {n} Tage", { n: v }) : T("abgelaufen");
      case "art": return SPARTE_NAME[c.sparte] || "";
      default: return "";
    }
  }

  // ---------- Format ----------
  get _lang() { return this._hass?.locale?.language || this._hass?.language || "de"; }
  _num(v, d = 2) { return isNum(v) ? v.toLocaleString(this._lang, { minimumFractionDigits: d, maximumFractionDigits: d }) : "–"; }
  _eur(v, d = 2, plus = false) {
    if (!isNum(v)) return "–";
    const s = this._num(Math.abs(v), d);
    return `${v < 0 ? "−" : plus && v > 0 ? "+" : ""}${s} €`;
  }
  _date(iso) {
    if (!iso) return "–";
    const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
    return isNaN(d) ? esc(iso) : d.toLocaleDateString(this._lang, { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  _shortDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(this._lang, { day: "2-digit", month: "2-digit" });
  }
  _icon(sparte, tone, own) {
    const color = this._sparteColor(sparte);
    // Vorrang: eigenes Symbol des Vertrags in Tariffy, dann die Wahl für die Sparte (Einstellungen oder icons: in der Kartenkonfiguration)
    const pick = own || this._colors.icon[sparte] || this._config?.icons?.sparte?.[sparte];
    if (typeof pick === "string" && /^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(pick) && customElements.get("ha-icon")) {
      return `<span class="ico" style="color:${color}"><ha-icon icon="${esc(pick)}" style="--mdc-icon-size:20px"></ha-icon></span>`;
    }
    return `<span class="ico" style="color:${color}"><svg viewBox="0 0 24 24"><path d="${ICONS[sparte] || ICONS.other}"/></svg></span>`;
  }
  _unit(c) {
    // die Einheit kommt vom Zähler-Sensor: nur kurze, harmlose Einheiten (kWh, m³, L, ft³ …) werden angezeigt
    if (typeof c.verbrauch_einheit === "string" && /^[\p{L}\p{N}³²µ/ .·%-]{1,12}$/u.test(c.verbrauch_einheit)) return c.verbrauch_einheit;
    return c.sparte === "gas" || c.sparte === "water" ? "m³" : "kWh";
  }

  // ---------- Rendern ----------
  _render() {
    const root = this.shadowRoot;
    if (!root) return;
    tokens = [];
    let body;
    const cur = this._tab === "settings" && !this._isAdmin ? "overview" : TABS.find(([k]) => k === this._tab) ? this._tab : "overview";
    if (this._err) body = `<div class="state">${T("Tariffy ist nicht erreichbar:")} ${esc(this._err)}</div>`;
    else if (this._contracts === null) body = `<div class="state">${T("Verträge werden geladen …")}</div>`;
    else if (cur === "settings") body = this._backupView();
    else if (cur === "history") body = this._historyView();
    else if (cur === "forecast" && this._live.length) body = this._forecastView();
    else if (!this._live.length) body = `<div class="state">${T("Noch keine Verträge in Tariffy angelegt.")}${this._isAdmin ? `<div style="margin-top:14px">${this._newButton()}</div>` : ""}</div>`;
    else body = cur === "contracts" ? this._contractsView() : cur === "costs" ? this._costsView() : this._overview();
    const tab = (k, l) => `<button type="button" data-tab="${k}" class="${cur === k ? "on" : ""}">${l}</button>`;
    this._mount(root, `<style>${CSS}</style><div class="root">
      <div class="top"><span class="brand">${esc(this._config?.title || "Tariffy")}</span>
        <div class="tabs">${TABS.filter(([k]) => k !== "settings" || this._isAdmin).map(([k, l]) => tab(k, T(l))).join("")}</div></div>
      ${body}</div>`);
    tokens = [];
    this._fit();
    this._bind();
    if (this._scrollTo) {
      const id = this._scrollTo;
      this._scrollTo = null;
      const row = [...root.querySelectorAll("[data-row]")].find((r) => r.dataset.row === id);
      if (row) row.scrollIntoView({ block: "start", behavior: "auto" });
    }
  }

  // ---------- Verträge anlegen, ändern, verlängern (nur Admins) ----------
  // Die Formulare kommen von Home Assistant selbst (Konfigurationsabläufe der Integration), die Prüfung und das Speichern bleiben in Tariffy.
  _byId(id) { return (this._contracts || []).find((c) => c.entry_id === id); }

  _errorText(err) { return String((err && ((err.body && err.body.message) || err.message || err.error)) || err); }

  _isoLocal(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }

  _fieldSpec(raw, dlg, step) {
    const kind = ["date", "text", "number", "select", "entity", "boolean", "icon"].find((k) => raw.selector && k in raw.selector) || null;
    const sel = kind === "select" ? raw.selector.select : {};
    const suggested = raw.description && raw.description.suggested_value;
    const initial = suggested !== undefined && suggested !== null ? suggested : raw.default;
    const label = dlg.localize(`component.tariffy.${dlg.category}.step.${step}.data.${raw.name}`) || raw.name.replace(/^next_/, "").replace(/_/g, " ");
    const optionLabel = (value, fallback) => (sel.translation_key ? dlg.localize(`component.tariffy.selector.${sel.translation_key}.options.${value}`) : "") || fallback;
    return {
      name: raw.name, kind, label, required: Boolean(raw.required),
      min: kind === "number" && isNum(raw.selector.number.min) ? raw.selector.number.min : null,
      domains: kind === "entity" ? [].concat(raw.selector.entity.domain || []) : [],
      custom: Boolean(sel.custom_value),
      labelled: Boolean(sel.translation_key),
      options: (sel.options || []).map((o) => {
        const value = typeof o === "string" ? o : o.value;
        return { value, label: optionLabel(value, typeof o === "string" ? o : o.label || o.value) };
      }),
      initial: kind === "boolean" ? Boolean(initial) : (initial === undefined || initial === null ? "" : String(initial)),
    };
  }

  async _flowLocalize(category) {
    try {
      if (typeof this._hass.loadBackendTranslation === "function") {
        await this._hass.loadBackendTranslation("selector", "tariffy");
        const localize = await this._hass.loadBackendTranslation(category, "tariffy");
        if (typeof localize === "function") return localize;
      }
    } catch (_err) { /* ohne Übersetzung gelten die Feldnamen */ }
    return typeof this._hass.localize === "function" ? this._hass.localize : () => "";
  }

  _applyForm(dlg, form) {
    if (form.type === "create_entry" || (form.type === "abort" && form.reason === "reconfigure_successful")) { dlg.stage = "saved"; return; }
    if (form.type === "abort") { dlg.stage = "error"; dlg.message = T("Home Assistant hat das Formular beendet: {m}", { m: form.reason || "" }); return; }
    dlg.flowId = form.flow_id;
    dlg.stage = "form";
    if (dlg.step !== form.step_id) { dlg.step = form.step_id; dlg.values = {}; dlg.refocus = true; }
    dlg.final = dlg.mode === "next" || (typeof form.last_step === "boolean" ? form.last_step : form.step_id !== (dlg.mode === "create" ? "user" : "reconfigure"));
    dlg.fields = (form.data_schema || []).map((f) => this._fieldSpec(f, dlg, form.step_id));
    dlg.unsupported = dlg.fields.some((f) => !f.kind);
    dlg.hint = dlg.localize(`component.tariffy.${dlg.category}.step.${form.step_id}.description`) || "";
    dlg.fieldErrors = {};
    dlg.message = null;
    for (const [name, code] of Object.entries(form.errors || {})) {
      const text = dlg.localize(`component.tariffy.${dlg.category}.error.${code}`) || String(code);
      if (name === "base") dlg.message = text; else dlg.fieldErrors[name] = text;
    }
    for (const f of dlg.fields) if (!(f.name in dlg.values)) dlg.values[f.name] = f.initial;
  }

  async _openFlow(c, mode) {
    this._closeFlow();
    const flow = FLOWS[mode];
    const dlg = {
      mode, api: flow.api, category: flow.category, id: c ? c.entry_id : null, name: c ? c.title : "", stage: "loading", flowId: null,
      step: null, final: true, fields: [], values: {}, fieldErrors: {}, message: null, hint: "", unsupported: false,
      asking: null, localize: () => "", refocus: false,
      hasNext: mode === "next" && Boolean(c.next && c.next.beginn),
      reminder: mode === "next" && Boolean(c.erinnerung_aktiv), markDone: true, note: null, info: null, doneText: "Gespeichert. Home Assistant lädt den Vertrag neu.",
    };
    this._dlg = dlg;
    this._renderDialog();
    try {
      const [form, localize] = await Promise.all([this._hass.callApi("POST", flow.api, flow.body(c)), this._flowLocalize(flow.category)]);
      if (this._dlg !== dlg) { if (form && form.flow_id) this._abortFlow(flow.api, form.flow_id); return; }
      dlg.localize = localize;
      this._applyForm(dlg, form);
    } catch (err) {
      dlg.stage = "error";
      dlg.message = T("Das Formular konnte nicht geladen werden: {m}", { m: this._errorText(err) });
    }
    if (this._dlg === dlg) this._renderDialog();
  }

  _abortFlow(api, flowId) {
    try { Promise.resolve(this._hass.callApi("DELETE", `${api}/${flowId}`)).catch(() => {}); } catch (_err) { /* der Ablauf läuft von selbst ab */ }
  }

  _closeFlow() {
    const dlg = this._dlg;
    this._dlg = null;
    if (dlg && dlg.flowId && dlg.stage !== "saved") this._abortFlow(dlg.api, dlg.flowId);
    if (this._dlgEl) { this._dlgEl.remove(); this._dlgEl = null; }
  }

  _optionKey(f, text) {
    const s = String(text).trim().toLowerCase();
    const hit = f.options.find((o) => o.value.toLowerCase() === s || String(o.label).toLowerCase() === s);
    return hit ? hit.value : String(text).trim();
  }

  _optionLabel(f, value) { const hit = f.options.find((o) => o.value === value); return hit ? hit.label : value; }

  _collectFlow(dlg) {
    const values = {}, errors = {};
    for (const f of dlg.fields) {
      if (f.kind === "boolean") { values[f.name] = Boolean(dlg.values[f.name]); continue; }
      const raw = String(dlg.values[f.name] ?? "").trim();
      if (raw === "") { if (f.required) errors[f.name] = T("Pflichtfeld"); continue; }
      if (f.kind === "number") {
        const n = Number(raw.replace(",", "."));
        if (!Number.isFinite(n) || (f.min !== null && n < f.min)) errors[f.name] = T("Keine gültige Zahl (null oder größer, Komma oder Punkt).");
        else values[f.name] = n;
      } else {
        values[f.name] = f.kind === "select" && f.custom && f.labelled ? this._optionKey(f, raw) : raw;
      }
    }
    return { values, errors };
  }

  async _sendFlow(dlg, values, removed) {
    dlg.stage = "saving";
    dlg.message = null;
    this._renderDialog();
    let result;
    try {
      result = await this._hass.callApi("POST", `${dlg.api}/${dlg.flowId}`, values);
    } catch (err) {
      if (this._dlg !== dlg) return;
      dlg.stage = "form"; dlg.asking = null;
      dlg.message = T("Speichern fehlgeschlagen: {m}", { m: this._errorText(err) });
      this._renderDialog();
      return;
    }
    if (this._dlg !== dlg) return;
    dlg.asking = null;
    this._applyForm(dlg, result);
    if (dlg.stage !== "saved") { this._renderDialog(); return; }
    dlg.doneText = removed ? "Der geplante Vertrag wurde entfernt." : dlg.mode === "create" ? "Der Vertrag wurde angelegt." : "Gespeichert. Home Assistant lädt den Vertrag neu.";
    dlg.note = null;
    this._renderDialog();
    if (!removed && dlg.reminder && dlg.markDone) {
      const done = await this._markCancellationDone(dlg.id);
      if (this._dlg !== dlg) return;
      if (!done) dlg.note = T("Gespeichert, aber die Kündigung konnte nicht als erledigt markiert werden. Bitte „Kündigung bestätigen“ benutzen.");
      this._renderDialog();
    }
  }

  // Nach dem Speichern lädt sich der Vertrag neu, die Aktion meldet kurz „not_found“.
  async _markCancellationDone(entryId) {
    for (let attempt = 0; attempt < 12; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, attempt === 0 ? 700 : 600));
      try {
        await this._hass.callWS({ type: "tariffy/action", entry_id: entryId, action: "confirm_cancellation" });
        return true;
      } catch (err) {
        if (err && err.code === "not_available") return true;
        if (!err || err.code !== "not_found") return false;
      }
    }
    return false;
  }

  async _deleteContract(dlg) {
    dlg.stage = "saving";
    dlg.message = null;
    this._renderDialog();
    if (dlg.flowId) this._abortFlow(dlg.api, dlg.flowId);
    dlg.flowId = null;
    try {
      await this._hass.callApi("DELETE", `config/config_entries/entry/${dlg.id}`);
    } catch (err) {
      if (this._dlg !== dlg) return;
      dlg.stage = "error";
      dlg.message = T("Löschen fehlgeschlagen: {m}", { m: this._errorText(err) });
      this._renderDialog();
      return;
    }
    if (this._dlg !== dlg) return;
    dlg.stage = "saved";
    dlg.doneText = "Der Vertrag wurde gelöscht.";
    dlg.info = T("Seine Sensoren und Buttons werden entfernt. Die Langzeit-Statistiken, die Home Assistant schon aufgezeichnet hat, bleiben in der Datenbank.");
    this._renderDialog();
  }

  _submitFlow(confirmed) {
    const dlg = this._dlg;
    if (!dlg || dlg.stage !== "form") return;
    const { values, errors } = this._collectFlow(dlg);
    dlg.fieldErrors = errors;
    if (Object.keys(errors).length) { dlg.message = null; dlg.asking = null; this._renderDialog(); return; }
    if (dlg.mode === "edit" && dlg.final && !confirmed) { dlg.asking = "save"; this._renderDialog(); return; }
    this._sendFlow(dlg, values, false);
  }

  // Verlängerung eines Pauschalvertrags (neuer Beginn, Ende, Betrag) und Anschlussfinanzierung bei Krediten
  _openRenew(c) {
    this._closeFlow();
    const spec = (name, kind, label, extra = {}) => ({ name, kind, label, required: false, min: null, domains: [], custom: false, options: [], initial: "", ...extra });
    const dayAfter = (iso, days, years) => { const d = this._ymd(iso); if (!d) return ""; d.setFullYear(d.getFullYear() + (years || 0)); d.setDate(d.getDate() + (days || 0)); return this._isoLocal(d); };
    const text = (v) => (isNum(v) ? String(v) : "");
    if (c.sparte === "loan") {
      const zahlweise = c.zahlweise && INTERVAL_MONTHS[c.zahlweise] ? c.zahlweise : "monthly";
      this._dlg = {
        mode: "renew", kredit: true, stage: "form", id: c.entry_id, name: c.title, contract: c, flowId: null, localize: () => "",
        fields: [
          spec("beginn", "date", T("Beginn"), { required: true }),
          spec("kredit_summe", "number", T("Neue Kreditsumme (€)"), { required: true, min: 0.01 }),
          spec("sollzins", "number", T("Sollzins (% pro Jahr)"), { min: 0 }),
          spec("effektivzins", "number", T("Effektiver Jahreszins (%)"), { min: 0 }),
          spec("laufzeit_monate", "number", T("Laufzeit (Monate)"), { required: true, min: 1 }),
          spec("zahlweise", "select", T("Zahlweise"), { options: Object.keys(INTERVAL_MONTHS).map((k) => ({ value: k, label: INTERVAL[k] })) }),
          spec("kredit_rate", "number", T("Rate je Zahlung (freiwillig)"), { min: 0 }),
          spec("schlussrate", "number", T("Schlussrate (freiwillig)"), { min: 0 }),
          spec("erste_zahlung", "date", T("Erste Abbuchung (optional)")),
        ],
        values: { beginn: c.ende || "", kredit_summe: text(c.kredit_restschuld), sollzins: text(c.kredit_sollzins), effektivzins: text(c.kredit_effektivzins), laufzeit_monate: text(c.laufzeit_monate), zahlweise, kredit_rate: "", schlussrate: "", erste_zahlung: "" },
        fieldErrors: {}, message: null,
      };
    } else {
      const zahlweise = c.zahlweise && INTERVAL_MONTHS[c.zahlweise] ? c.zahlweise : "monthly";
      this._dlg = {
        mode: "renew", stage: "form", id: c.entry_id, name: c.title, contract: c, flowId: null, localize: () => "",
        fields: [
          spec("beginn", "date", T("Beginn"), { required: true }),
          spec("ende", "date", T("Ende")),
          spec("zahlweise", "select", T("Zahlweise"), { options: Object.keys(INTERVAL_MONTHS).map((k) => ({ value: k, label: INTERVAL[k] })) }),
          spec("abschlag", "number", T("Betrag pro Zahlung (€)"), { required: true, min: 0.01 }),
          spec("erste_zahlung", "date", T("Erste Abbuchung (optional)")),
        ],
        values: {
          beginn: c.ende ? dayAfter(c.ende, 1, 0) : this._isoLocal(new Date()), ende: c.ende ? dayAfter(c.ende, 0, 1) : "", zahlweise,
          abschlag: String(isNum(c.abschlag_je_zahlung) ? c.abschlag_je_zahlung : (c.abschlag ?? "")),
        },
        fieldErrors: {}, message: null,
      };
    }
    this._renderDialog();
  }

  // „5 % teurer“: was der neue Betrag gegenüber dem bisherigen bedeutet
  _renewChange(dlg) {
    const amount = Number(String(dlg.values.abschlag ?? "").replace(",", "."));
    const months = INTERVAL_MONTHS[dlg.values.zahlweise] || 1;
    const old = dlg.contract.abschlag;
    if (!Number.isFinite(amount) || amount <= 0 || !isNum(old) || old <= 0) return "";
    const monthly = amount / months;
    const percent = ((monthly - old) / old) * 100;
    if (Math.abs(percent) < 0.05) return T("Betrag unverändert");
    return T(percent > 0 ? "{p} % teurer ({n} statt {o} pro Monat)" : "{p} % günstiger ({n} statt {o} pro Monat)", { p: this._num(Math.abs(percent), 1), n: this._eur(monthly), o: this._eur(old) });
  }

  _termError(err) {
    const code = String((err && (err.code || (err.body && err.body.code))) || "");
    const known = ["invalid_abschlag", "invalid_zahlweise", "not_available", "invalid_dates", "too_many", "not_found", "invalid_kredit_summe", "invalid_laufzeit_monate", "invalid_zins"];
    const texts = {
      invalid_abschlag: "Trage einen Betrag über null ein.", invalid_zahlweise: "Wähle eine Zahlweise.",
      not_available: "Dieser Vertrag lässt sich nicht verlängern (kein Ende eingetragen oder kein Pauschalvertrag).", invalid_dates: "Das Ende darf nicht vor dem Beginn liegen.",
      too_many: "Die Historie ist voll (50 Laufzeiten).", not_found: "Diese Laufzeit gibt es nicht mehr.", invalid_kredit_summe: "Trage eine Kreditsumme über null ein.",
      invalid_laufzeit_monate: "Trage eine Laufzeit von mindestens einem Monat ein.", invalid_zins: "Trage den Sollzins oder den effektiven Jahreszins ein.",
    };
    if (known.includes(code)) return T(texts[code]);
    if (code.startsWith("invalid_")) return T("Eine der Zahlen ist nicht gültig.");
    return T("Speichern fehlgeschlagen: {m}", { m: this._errorText(err) });
  }

  async _saveRenew() {
    const dlg = this._dlg;
    const { values, errors } = this._collectFlow(dlg);
    dlg.fieldErrors = errors;
    dlg.message = null;
    if (Object.keys(errors).length) { this._renderDialog(); return; }
    dlg.stage = "saving";
    this._renderDialog();
    try {
      await this._hass.callWS({ type: "tariffy/renew", entry_id: dlg.id, values });
    } catch (err) {
      if (this._dlg !== dlg) return;
      dlg.stage = "form";
      dlg.message = this._termError(err);
      this._renderDialog();
      return;
    }
    if (this._dlg === dlg) this._closeFlow();
    this._render();
  }

  // Aktionen an einem Vertrag: Warnung oder Kündigung bestätigen, archivieren, zurückholen
  async _runAction(c, action) {
    this._busy = c.entry_id;
    this._confirm = null;
    this._actionError = null;
    this._render();
    try {
      await this._hass.callWS({ type: "tariffy/action", entry_id: c.entry_id, action });
    } catch (err) {
      this._actionError = { id: c.entry_id, message: String((err && err.message) || err) };
    } finally {
      this._busy = null;
      this._render();
    }
  }

  // Schaltflächen unter einem Vertrag (nur Admins)
  // Symbole in der Zeile eines Vertrags (nur Admins): verlängern, Folgevertrag planen oder bearbeiten, Vertrag bearbeiten
  _rowIcons(c) {
    if (!this._isAdmin || c.archiviert) return "";
    const id = esc(c.entry_id);
    const busy = this._busy === c.entry_id ? " disabled" : "";
    const icon = (act, label, path) => `<button type="button" class="ib2" data-act="${act}" data-id="${id}" title="${esc(label)}" aria-label="${esc(label)}"${busy}><svg viewBox="0 0 24 24"><path d="${path}"/></svg></button>`;
    const renew = c.verlaengerbar ? icon("renew", T(c.sparte === "loan" ? "Anschlussfinanzierung" : "Vertrag verlängern"), "M20 11a8 8 0 0 0-14.5-4M4 5v3.5h3.5M4 13a8 8 0 0 0 14.500 4M20 19v-3.500h-3.500") : "";
    const next = c.sparte === "loan" ? "" : icon("flow-next", T(c.next && c.next.beginn ? "Folgevertrag bearbeiten" : "Folgevertrag planen"), "M4 6.500h16v13H4zM4 10.500h16M8 3.500v4M16 3.500v4M12 13v4.500M9.750 15.250h4.500");
    return `<span class="ract">${renew}${next}${icon("flow-edit", T("Vertrag bearbeiten"), "M4 20h4l10.500-10.500a2.100 2.100 0 0 0-3-3L5 17zM13.500 7.500l3 3")}</span>`;
  }

  _adminActions(c) {
    if (!this._isAdmin) return "";
    const id = esc(c.entry_id);
    const busy = this._busy === c.entry_id ? " disabled" : "";
    const btn = (act, label, cls = "", extra = "") => `<button type="button" class="btn ${cls}" data-act="${act}" data-id="${id}"${extra}${busy}>${label}</button>`;
    const list = c.archiviert ? ACTIONS.filter((a) => a.key === "restore_contract") : ACTIONS.filter((a) => a.cond(c) && a.key !== "restore_contract");
    const pending = this._confirm && this._confirm.id === c.entry_id ? ACTIONS.find((a) => a.key === this._confirm.key) : null;
    let html;
    if (pending) {
      html = `<div class="ask"><span>${esc(T(pending.ask))}</span>${btn("act-run", esc(T(pending.yes)), "go", ` data-key="${pending.key}"`)}${btn("act-cancel", esc(T("Abbrechen")))}</div>`;
    } else if (c.archiviert) {
      html = list.map((a) => btn("act-ask", esc(T(a.label)), "blue", ` data-key="${a.key}"`)).join("");
    } else {
      html = list.map((a) => btn("act-ask", esc(T(a.label)), "warn", ` data-key="${a.key}"`)).join("");
    }
    const err = this._actionError && this._actionError.id === c.entry_id ? `<div class="err" role="alert">${esc(this._actionError.message)}</div>` : "";
    return html || err ? `<div class="acts" style="margin-top:12px">${html}</div>${err}` : "";
  }

  _newButton() {
    return this._isAdmin ? `<button type="button" class="btn pri" data-act="flow-create">+ ${esc(T("Neuer Vertrag"))}</button>` : "";
  }

  // Der Dialog: Markup wie die übrige Karte, Eingaben und Knöpfe werden danach verbunden
  _renderDialog() {
    const dlg = this._dlg;
    if (!dlg) return;
    tokens = [];
    const busy = dlg.stage === "saving";
    const title = dlg.mode === "renew" ? T(dlg.kredit ? "Anschlussfinanzierung" : "Vertrag verlängern")
      : T({ edit: "Vertrag bearbeiten · {name}", create: "Neuer Vertrag", next: "Folgevertrag · {name}" }[dlg.mode], { name: dlg.name });
    const dis = busy ? " disabled" : "";
    const btn = (d, label, cls = "") => `<button type="button" class="btn ${cls}" data-d="${d}"${dis}>${esc(label)}</button>`;
    const ask = (text, yes, tone, d) => `<div class="ask"><span>${esc(text)}</span>${btn(d, yes, tone)}${btn("cancel-ask", T("Abbrechen"))}</div>`;
    let body = `<h2 id="dlg-title">${esc(title)}</h2>`;
    let buttons = "";
    const fieldMarkup = (f) => {
      const error = dlg.fieldErrors[f.name];
      const n = esc(f.name);
      let input;
      if (f.kind === "boolean") input = `<input type="checkbox" id="f-${n}" data-fname="${n}">`;
      else if (f.kind === "select" && !f.custom) input = `<select id="f-${n}" data-fname="${n}">${f.options.map((o) => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join("")}</select>`;
      else if (f.kind === "entity" || f.kind === "select" || f.kind === "icon") {
        const ids = f.kind === "icon" ? ICON_SUGGEST : f.kind === "select" ? f.options.map((o) => (f.labelled ? o.label : o.value))
          : Object.keys((this._hass && this._hass.states) || {}).filter((id) => !f.domains.length || f.domains.includes(id.split(".")[0])).sort();
        input = `<input type="text" id="f-${n}" data-fname="${n}" list="dl-${n}" autocomplete="off" spellcheck="false"><datalist id="dl-${n}">${ids.map((id) => `<option value="${esc(id)}"></option>`).join("")}</datalist>`;
      } else input = `<input type="${f.kind === "date" ? "date" : "text"}" id="f-${n}" data-fname="${n}"${f.kind === "number" ? ' inputmode="decimal"' : ""} autocomplete="off">`;
      const note = dlg.mode === "renew" && f.name === "abschlag" ? `<div class="fnote" data-note="change">${esc(this._renewChange(dlg))}</div>` : "";
      return `<label class="fld${f.kind === "boolean" ? " bool" : ""}${error ? " bad" : ""}" for="f-${n}">${f.kind === "boolean" ? `${input}<span class="lbl">${esc(f.label)}</span>` : `<span class="lbl">${esc(f.label)}</span>${input}`}${note}${error ? `<div class="ferr">${esc(error)}</div>` : ""}</label>`;
    };
    if (dlg.stage === "loading") {
      body += `<p class="hint">${esc(T("Formular wird geladen …"))}</p>`;
    } else if (dlg.stage === "error") {
      body += `<div class="err" role="alert">${esc(dlg.message)}</div>`;
      buttons = btn("close", T("Schließen"));
    } else if (dlg.stage === "saved") {
      body += `<p class="hint">${esc(T(dlg.doneText))}</p>${dlg.info ? `<p class="hint">${esc(dlg.info)}</p>` : ""}${dlg.note ? `<div class="err" role="alert">${esc(dlg.note)}</div>` : ""}`;
      buttons = btn("close", T("Schließen"), "go");
    } else {
      if (dlg.mode === "renew") body += `<p class="hint">${esc(dlg.name)}</p><p class="hint">${esc(T(dlg.kredit ? "Die bisherige Laufzeit kommt in die Historie, der Kredit läuft mit neuer Summe, neuem Zins und neuer Laufzeit weiter. Die Summe ist meist die Restschuld." : "Die bisherige Laufzeit kommt in die Historie. Der Vertrag läuft mit neuem Beginn, Ende und Betrag weiter; die Erinnerungen beginnen neu. Nutze es, wenn sich Beitrag oder Preis zum Ende der Laufzeit ändert, oder bei einer Preisanpassung eines Vertrags ohne Ende (Ende leer lassen)."))}</p>`;
      else if (dlg.hint) body += `<p class="hint">${esc(dlg.hint)}</p>`;
      if (dlg.unsupported) body += `<div class="err" role="alert">${esc(T("Dieses Formular enthält Felder, die die Karte noch nicht anzeigen kann. Bitte die Einrichtung von Home Assistant benutzen."))}</div>`;
      else body += `<div class="fields">${dlg.fields.map(fieldMarkup).join("")}</div>`;
      if (dlg.message) body += `<div class="err" role="alert">${esc(dlg.message)}</div>`;
      if (dlg.reminder && !dlg.unsupported) body += `<label class="check"><input type="checkbox" data-markdone><span>${esc(T("Kündigung als erledigt markieren"))}</span></label>`;
      if (dlg.asking === "remove") buttons = ask(T("Den geplanten Folgevertrag entfernen? Der aktuelle Vertrag bleibt unverändert."), T("Ja, entfernen"), "red", "yes-remove");
      else if (dlg.asking === "delete") {
        const q = T("Den Vertrag „{name}“ endgültig löschen? Das lässt sich nicht rückgängig machen. Zur Bestätigung den Namen eintippen.", { name: dlg.name });
        buttons = `<div class="ask"><span>${esc(q)}</span><input class="confirm-name" type="text" autocomplete="off" spellcheck="false" placeholder="${esc(dlg.name)}" aria-label="${esc(q)}"><button type="button" class="btn red" data-d="yes-delete" disabled>${esc(T("Endgültig löschen"))}</button>${btn("cancel-ask", T("Abbrechen"))}</div>`;
      } else if (dlg.asking === "save") buttons = ask(T("Änderungen speichern? Die Vertragsdaten werden durch das ersetzt, was das Formular zeigt."), T("Ja, speichern"), "go", "yes-save");
      else {
        const go = dlg.mode === "renew" ? T(busy ? "Wird gespeichert …" : "Verlängern") : T(busy ? "Wird gespeichert …" : dlg.final ? "Speichern" : "Weiter");
        if (!dlg.unsupported) buttons += btn("submit", go, "go");
        buttons += btn("close", T("Abbrechen"));
        if (dlg.mode === "edit") buttons += btn("ask-delete", T("Vertrag löschen"), "red");
        if (dlg.hasNext && !dlg.unsupported) buttons += btn("ask-remove", T("Geplanten Vertrag entfernen"), "red");
      }
    }
    body += `<div class="acts">${buttons}</div>`;
    const el = this._dlgEl || (this._dlgEl = document.createElement("div"));
    el.className = "overlay";
    this._mount(el, `<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlg-title">${body}</div>`);
    tokens = [];
    if (!el.isConnected) this.shadowRoot.appendChild(el);
    this._bindDialog(dlg, el, busy);
  }

  _bindDialog(dlg, el, busy) {
    el.onkeydown = (ev) => { if (ev.key === "Escape" && !busy) this._closeFlow(); };
    for (const f of dlg.fields || []) {
      const input = [...el.querySelectorAll("[data-fname]")].find((i) => i.dataset.fname === f.name);
      if (!input) continue;
      if (f.kind === "boolean") { input.checked = Boolean(dlg.values[f.name]); input.onchange = () => { dlg.values[f.name] = input.checked; }; continue; }
      input.value = f.kind === "select" && f.custom && f.labelled ? this._optionLabel(f, dlg.values[f.name] ?? "") : (dlg.values[f.name] ?? "");
      const update = () => {
        dlg.values[f.name] = input.value;
        const label = input.closest("label");
        if (label && dlg.fieldErrors[f.name]) { delete dlg.fieldErrors[f.name]; label.classList.remove("bad"); const e = label.querySelector(".ferr"); if (e) e.remove(); }
        const note = el.querySelector('[data-note="change"]');
        if (note && dlg.mode === "renew") note.textContent = this._renewChange(dlg);
      };
      input.oninput = update;
      input.onchange = update;
    }
    const mark = el.querySelector("[data-markdone]");
    if (mark) { mark.checked = Boolean(dlg.markDone); mark.onchange = () => { dlg.markDone = mark.checked; }; }
    const actions = {
      submit: () => (dlg.mode === "renew" ? this._saveRenew() : this._submitFlow(false)),
      close: () => this._closeFlow(),
      "ask-delete": () => { dlg.asking = "delete"; this._renderDialog(); },
      "ask-remove": () => { dlg.asking = "remove"; this._renderDialog(); },
      "cancel-ask": () => { dlg.asking = null; this._renderDialog(); },
      "yes-save": () => this._submitFlow(true),
      "yes-remove": () => this._sendFlow(dlg, {}, true),
      "yes-delete": () => this._deleteContract(dlg),
    };
    el.querySelectorAll("[data-d]").forEach((b) => b.addEventListener("click", () => { const fn = actions[b.dataset.d]; if (fn) fn(); }));
    const confirmName = el.querySelector(".confirm-name");
    if (confirmName) {
      const go = el.querySelector('[data-d="yes-delete"]');
      confirmName.oninput = () => { go.disabled = confirmName.value.trim() !== dlg.name; };
      confirmName.focus();
    }
    if (dlg.refocus && dlg.stage === "form") { dlg.refocus = false; const first = el.querySelector("input, select"); if (first) first.focus(); }
    if (dlg.mode === "renew" && !dlg.focused) { dlg.focused = true; const first = el.querySelector("input, select"); if (first) first.focus(); }
  }

  // Baut die Seite aus dem Markup der Karte: Parsen in einem inerten Dokument, dann die Marken von esc() durch Text und Attributwerte
  // ersetzen und die Knoten übernehmen. Eingaben werden dabei nie als HTML gelesen.
  _mount(root, markup) {
    const doc = new DOMParser().parseFromString(`<!doctype html><html><body>${markup}</body></html>`, "text/html");
    const walk = (node) => {
      if (node.nodeType === 3) {
        if (node.nodeValue.includes(TOK_OPEN)) node.nodeValue = tokenText(node.nodeValue);
        return;
      }
      if (node.nodeType !== 1) return;
      for (const attr of [...node.attributes]) {
        if (attr.name.toLowerCase().startsWith("on")) { node.removeAttribute(attr.name); continue; }
        if (attr.value.includes(TOK_OPEN)) attr.value = tokenText(attr.value);
      }
      for (const child of [...node.childNodes]) walk(child);
    };
    walk(doc.body);
    root.replaceChildren(...[...doc.body.childNodes].map((n) => document.importNode(n, true)));
    if (root === this.shadowRoot && this._dlgEl) root.appendChild(this._dlgEl);
  }

  _bind() {
    const $$ = (s) => this.shadowRoot.querySelectorAll(s);
    $$("[data-tab]").forEach((b) => b.addEventListener("click", () => this._setTab(b.dataset.tab)));
    $$("[data-k]").forEach((b) => b.addEventListener("click", () => { this._noLoan = b.dataset.k === "nok"; this._render(); }));
    $$("[data-f]").forEach((b) => b.addEventListener("click", () => { this._filter = b.dataset.f; this._render(); }));
    $$("[data-go]").forEach((b) => b.addEventListener("click", () => { this._open.add(b.dataset.go); this._scrollTo = b.dataset.go; this._setTab("contracts"); }));
    $$("[data-act]").forEach((b) => b.addEventListener("click", () => this._act(b.dataset.act, b.dataset.id, b.dataset)));
    $$("[data-color]").forEach((i) => i.addEventListener("change", () => this._setColor(i.dataset.color, i.value)));
    // Symbol-Wähler von Home Assistant (mit Suche und Vorschlägen), sofern er geladen ist
    $$("ha-icon-picker[data-pickkey]").forEach((pk) => {
      pk.hass = this._hass;
      pk.value = this._colors.icon[pk.dataset.pickkey.slice(7)] || "";
      pk.addEventListener("value-changed", (ev) => { const v = ev.detail && ev.detail.value; if (typeof v === "string" && v !== pk.value && v !== (this._colors.icon[pk.dataset.pickkey.slice(7)] || "")) this._setIcon(pk.dataset.pickkey, v); });
    });
    $$("[data-pick]").forEach((s) => s.addEventListener("change", () => this._pick(s.dataset.pick, s.value)));
    const file = this.shadowRoot.getElementById("tg-file");
    if (file) file.addEventListener("change", () => this._bkPick(file.files && file.files[0]));
    const sel = this.shadowRoot.getElementById("tg-sort");
    if (sel) sel.addEventListener("change", () => { this._sort = sel.value; this._dir = 1; this._saveSort(); this._render(); });
    $$("[data-dir]").forEach((b) => b.addEventListener("click", () => { this._dir = -this._dir; this._saveSort(); this._render(); }));
    $$("[data-ftoggle]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.ftoggle;
      this._fcOpen.has(id) ? this._fcOpen.delete(id) : this._fcOpen.add(id);
      b.closest(".row").classList.toggle("open", this._fcOpen.has(id));
      b.setAttribute("aria-expanded", String(this._fcOpen.has(id)));
    }));
    $$("[data-htoggle]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.htoggle;
      this._histOpen.has(id) ? this._histOpen.delete(id) : this._histOpen.add(id);
      b.closest(".row").classList.toggle("open", this._histOpen.has(id));
      b.setAttribute("aria-expanded", String(this._histOpen.has(id)));
    }));
    $$("[data-toggle]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.toggle;
      this._open.has(id) ? this._open.delete(id) : this._open.add(id);
      const row = b.closest(".row");
      row.classList.toggle("open", this._open.has(id));
      b.setAttribute("aria-expanded", String(this._open.has(id)));
    }));
  }

  _pick(what, value) {
    this._render();
  }

  _act(act, id, ds = {}) {
    const bk = this._bk;
    if (act === "flow-create") { this._openFlow(null, "create"); return; }
    if (act === "flow-edit" || act === "flow-next") { const c = this._byId(id); if (c) this._openFlow(c, act === "flow-edit" ? "edit" : "next"); return; }
    if (act === "renew") { const c = this._byId(id); if (c) this._openRenew(c); return; }
    if (act === "act-ask") { this._confirm = { id, key: ds.key }; this._render(); return; }
    if (act === "act-cancel") { this._confirm = null; this._render(); return; }
    if (act === "act-run") { const c = this._byId(id); if (c) this._runAction(c, ds.key); return; }
    if (act === "icon-open") { this._iconPick = this._iconPick === ds.key ? null : ds.key; this._render(); return; }
    if (act === "icon-set") { this._setIcon(ds.key, ds.v); return; }
    if (act === "icon-reset") { this._setIcon(ds.key, null); return; }
    if (act === "icon-apply") { const i = this.shadowRoot.getElementById("tg-icon-input"); if (i) this._setIcon(ds.key, i.value.trim()); return; }
    if (act === "fcn") { this._fcN = Number(id); this._render(); return; }
    if (act === "fclear") { this._filter = "all"; this._render(); return; }
    if (act === "col-set") { this._setColor(ds.key, ds.v); return; }
    if (act === "col-reset") { this._setColor(ds.key, null); return; }
    if (act === "col-reset-all") { this._colors = { sparte: {}, group: {}, icon: {} }; this._saveColors(); this._render(); return; }
    if (act === "col-copy") {
      const text = this._colorYaml();
      const ta = this.shadowRoot.getElementById("tg-yaml");
      const select = () => { if (ta) { ta.focus(); ta.select(); } };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).catch(select); else select();
      return;
    }
    if (act === "cper") { this._cp = { p: id, off: 0 }; this._render(); }
    else if (act === "cmode") { this._costMode = id; this._render(); }
    else if (act === "cnav") { this._cp.off = Math.min(0, this._cp.off + Number(id)); this._render(); }
    else if (act === "lsplit-full" || act === "lsplit-equal") { this._labelSplit = act.slice(7); this._render(); }
    else if (act === "group-sparte" || act === "group-contract" || act === "group-label") { this._costGroup = act.slice(6); this._render(); }
    else if (act === "bk-download") this._bkDownload();
    else if (act === "bk-cancel") { bk.asking = null; this._render(); }
    else if (act === "bk-ask-restore") { bk.asking = "restore"; this._render(); }
    else if (act === "bk-ask-one") { bk.asking = id; this._render(); }
    else if (act === "bk-ask-discard") { bk.asking = `discard:${id}`; this._render(); }
    else if (act === "bk-restore") this._bkRun(() => this._hass.callWS({ type: "tariffy/backup_restore", backup: bk.backup }), (r) => {
      bk.plan = null; bk.backup = null; bk.file = null;
      return `${T("Wiederhergestellt:")} ${r.created.length} ${T("angelegt,")} ${r.skipped.length} ${T("übersprungen.")}`;
    });
    else if (act === "bk-restore-one") { const it = (bk.deleted || []).find((d) => d.id === id); this._bkRun(() => this._hass.callWS({ type: "tariffy/deleted_restore", item_id: id }), (r) => T("„{t}“ ist wieder da.", { t: r.title || (it && it.title) || "" })); }
    else if (act === "bk-discard") { const it = (bk.deleted || []).find((d) => d.id === id); this._bkRun(() => this._hass.callWS({ type: "tariffy/deleted_discard", item_id: id }), () => T("„{t}“ wurde vergessen.", { t: (it && it.title) || "" })); }
  }

  _saveSort() {
    try { localStorage.setItem("tariffy-glow-sort", `${this._sort}:${this._dir}`); } catch (e) { /* ohne Speicher */ }
  }

  _setTab(tab) {
    if (tab !== "forecast") this._fcOpen.clear();
    if (tab !== "history") this._histOpen.clear(); // verlässt man die Historie, schließen sich ihre Verträge
    if (tab === "overview") this._open.clear(); // beim Zurück zur Übersicht schließen sich alle Verträge
    this._tab = tab;
    this._render();
  }

  _overview() {
    const live = this._live;
    const now = new Date();
    const m0 = new Date(now.getFullYear(), now.getMonth(), 1), m1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const due = this._costMode === "due";
    const monthName = m0.toLocaleDateString(this._lang, { month: "long" });
    const hv = (c) => (due ? this._dueCost(c, m0, m1) : this._shareCost(c, m0, m1));
    const groups = GROUPS.map((g) => ({ ...g, color: this._groupColor(g), sum: live.filter((c) => groupOf(c) === g).reduce((a, c) => a + hv(c), 0), n: live.filter((c) => groupOf(c) === g).length }))
      .filter((g) => g.n && !(this._noLoan && g.key === "loan"));
    const total = groups.reduce((a, g) => a + g.sum, 0);
    const hasLoan = live.some((c) => groupOf(c).key === "loan");
    const stack = groups.map((g) => `<i style="width:${total ? (g.sum / total) * 100 : 0}%;background:${g.color}"></i>`).join("");
    const legend = groups.map((g) => `<span><i class="dot" style="background:${g.color}"></i>${g.label} <b class="num">${this._eur(g.sum)}</b></span>`).join("");
    const modeSeg = `<div class="seg" role="group" aria-label="${T("Art der Kosten")}"><button type="button" data-act="cmode" data-id="share" class="${due ? "" : "on"}">${T("Anteilig")}</button><button type="button" data-act="cmode" data-id="due" class="${due ? "on" : ""}">${T("Fällig im")} ${esc(monthName)}</button></div>`;
    const yearly = live.filter((c) => !(this._noLoan && groupOf(c).key === "loan")).reduce((a, c) => a + this._shareCost(c, m0, m1), 0) * 12;
    const seg = `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">${modeSeg}${hasLoan ? `<div class="seg"><button type="button" data-k="all" class="${this._noLoan ? "" : "on"}">${T("Alles")}</button><button type="button" data-k="nok" class="${this._noLoan ? "on" : ""}">${T("Ohne Kredit &amp; Leasing")}</button></div>` : ""}</div>`;

    const alerts = live.flatMap((c) => this._issues(c).map((i) => ({ ...i, id: c.entry_id, sparte: c.sparte, icon: c.icon }))).sort((a, b) => a.rank - b.rank);
    const alertHtml = alerts.length
      ? `<div class="alerts">${alerts.slice(0, 5).map((a) => `<button type="button" class="alert ${a.tone}" data-go="${esc(a.id)}">${this._icon(a.sparte, null, a.icon)}
          <div class="t">${esc(a.title)}<span>${esc(a.sub)}</span></div><div class="v t-${a.tone} num">${esc(a.value)}</div></button>`).join("")}</div>`
      : `<div class="ok"><span class="dot" style="background:var(--green);box-shadow:0 0 8px var(--green);margin:0"></span>${T("Alles im grünen Bereich")}</div>`;

    const events = [];
    for (const c of live) {
      const kb = this._days(c.kuendigung_bis);
      if (kb !== null && kb >= 0) events.push({ date: c.kuendigung_bis, tone: "orange", t: c.title, s: T("Kündigungsfrist") });
      const ed = this._days(c.ende);
      if (ed !== null && ed >= 0 && ed <= 400) events.push({ date: c.ende, tone: "green", t: c.title, s: T("Vertragsende") });
      const wd = this._days(c.wechsel);
      if (wd !== null && wd >= 0) events.push({ date: c.wechsel, tone: "blue", t: c.title, s: T("Wechsel auf neuen Tarif") });
    }
    events.sort((a, b) => a.date.localeCompare(b.date));
    const tl = events.length
      ? `<div class="tl">${events.slice(0, 4).map((e) => `<div class="t-${e.tone}"><i class="d"></i><b>${this._shortDate(e.date)} ${esc(e.t)}</b><em>${e.s}</em></div>`).join("")}</div>`
      : `<div class="sub" style="margin-top:12px">${T("Keine Termine in den nächsten Monaten.")}</div>`;

    const filters = [{ k: "all", l: T("Alle"), n: live.length }, ...GROUPS.map((g) => ({ k: g.key, l: g.label, n: live.filter((c) => groupOf(c) === g).length })).filter((g) => g.n)];
    const labelMap = new Map();
    for (const c of live) for (const l of this._labelsOf(c)) { const o = labelMap.get(l.id) || { k: `label:${l.id}`, l: l.name, n: 0, color: this._labelColor(l) }; o.n += 1; labelMap.set(l.id, o); }
    const labelFilters = [...labelMap.values()].sort((a, b) => a.l.localeCompare(b.l));
    if (this._filter.startsWith("label:") && !labelMap.has(this._filter.slice(6))) this._filter = "all";
    const list = this._sorted(live.filter((c) => this._filter === "all" || (this._filter.startsWith("label:") ? this._labelsOf(c).some((l) => `label:${l.id}` === this._filter) : groupOf(c).key === this._filter)));
    const sortUi = `<div class="sortbox">${this._newButton()}<label class="lbl" for="tg-sort">${T("Sortieren")}</label>
      <select id="tg-sort">${Object.entries(SORTS).map(([k, s]) => `<option value="${k}"${this._sort === k ? " selected" : ""}>${s.label}</option>`).join("")}</select>
      <button type="button" class="dirbtn" data-dir aria-label="${T("Reihenfolge umkehren")}" title="${T("Reihenfolge umkehren")}">⇅</button></div>`;

    const tiles = list.map((c) => {
      const s = this._status(c);
      const pct = this._progress(c);
      const col = TONE_COLOR[s.tone === "gray" ? "blue" : s.tone];
      const glow = s.tone === "gray" ? "" : `g-${s.tone}`;
      return `<button type="button" class="tile ctile ${glow}" data-go="${esc(c.entry_id)}">
        <div class="h">${this._icon(c.sparte, null, c.icon)}<div style="min-width:0"><div class="n">${esc(c.title)}</div><div class="p">${esc([c.anbieter || SPARTE_NAME[c.sparte] || "", ...this._labelsOf(c).map((l) => l.name)].filter(Boolean).join(" · "))}</div></div></div>
        <div class="price num">${this._num(this._monthly(c))} € <small>${T("/ Mon")}</small></div>
        ${pct === null ? "" : `<div class="bar" style="color:${col}"><i style="width:${pct}%;background:${col}"></i></div>`}
        ${this._sortText(c) ? `<div class="sv num">${esc(this._sortText(c))}</div>` : ""}
        <div class="f"><span class="chip ${s.tone}">${esc(s.chip)}</span><span class="num t-${s.tone === "gray" ? "gray" : s.tone}">${esc(s.value || (pct === null ? "" : this._num(pct, 0) + " %"))}</span></div></button>`;
    }).join("");

    return `<div class="hero">
      <div class="tile g-blue"><div class="lbl">${due ? `${T("Fällig im")} ${esc(monthName)}` : T("Fixkosten pro Monat")}</div>
        <div class="big num">${this._num(total)} <small>€</small></div>
        <div class="sub">${due ? `${T("Zahlungen, die im")} ${esc(monthName)} ${T("fällig werden ·")} ` : ""}≈ ${this._eur(yearly, 0)} ${T("pro Jahr")}${due ? ` ${T("(Ø")} ${this._eur(yearly / 12, 0)} ${T("pro Monat)")}` : ""}</div>
        <div class="stack">${stack}</div><div class="legend">${legend}</div>${seg}</div>
      <div class="tile"><div class="bar-row"><span class="lbl">${T("Braucht dich")}</span>${alerts.length ? `<span class="chip ${alerts[0].tone}">${alerts.length}</span>` : ""}</div>${alertHtml}</div>
      <div class="tile"><div class="lbl">${T("Nächste Termine")}</div>${tl}</div>
    </div>
    <div class="bar-row"><div class="fchips">${filters.map((f) => `<button type="button" data-f="${f.k}" class="fchip ${this._filter === f.k ? "on" : ""}">${f.l}<b>${f.n}</b></button>`).join("")}
      ${labelFilters.length ? `<span class="vsep"></span>${labelFilters.map((f) => `<button type="button" data-f="${esc(f.k)}" class="fchip ${this._filter === f.k ? "on" : ""}"><i class="dot" style="background:${f.color};margin-right:6px"></i>${esc(f.l)}<b>${f.n}</b></button>`).join("")}` : ""}</div>${sortUi}</div>
    <div class="cgrid">${tiles}</div>`;
  }

  // ---------- Kosten ----------
  _costSoFar(c) {
    if (isNum(c.kosten_bisher)) return c.kosten_bisher;
    return !METERED.has(c.sparte) && isNum(c.abschlag_bisher_gezahlt) ? c.abschlag_bisher_gezahlt : null;
  }

  _yearTerms(c) {
    const today = new Date().toISOString().slice(0, 10);
    const terms = (c.historie || []).map((x) => ({ from: x.beginn, to: x.ende, cost: isNum(x.kosten) ? x.kosten : x.abschlag_gezahlt }));
    if (!c.archiviert && c.beginn) {
      const end = c.ende && c.ende < today ? c.ende : today;
      terms.push({ from: c.beginn, to: end, cost: this._costSoFar(c) });
    }
    return terms.filter((x) => x.from && x.to && isNum(x.cost) && x.to >= x.from);
  }

  _isoDay(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }

  // Zeitraum der Kosten wie im Auto-Dashboard: Monat / Jahr / Gesamt, mit Blättern (off 0 = aktuell)
  _cpRange() {
    const { p, off } = this._cp;
    const n = new Date();
    if (p === "month") {
      const a = new Date(n.getFullYear(), n.getMonth() + off, 1);
      return { p, a, b: new Date(a.getFullYear(), a.getMonth() + 1, 1), label: a.toLocaleDateString(this._lang, { month: "long", year: "numeric" }), short: a.toLocaleDateString(this._lang, { month: "short", year: "numeric" }) };
    }
    if (p === "year") {
      const a = new Date(n.getFullYear() + off, 0, 1);
      return { p, a, b: new Date(a.getFullYear() + 1, 0, 1), label: String(a.getFullYear()), short: String(a.getFullYear()) };
    }
    return { p, a: null, b: null, label: p === "plan" ? T("Pro Jahr (Plan)") : T("Seit Vertragsbeginn"), short: p === "plan" ? T("pro Jahr") : T("bisher") };
  }

  _earliest() {
    let m = null;
    for (const c of this._contracts || []) {
      if (c.sparte === "loan") continue;
      for (const x of this._yearTerms(c)) if (m === null || x.from < m) m = x.from;
    }
    return m;
  }

  // Kosten eines Vertrags im Zeitraum [a, b): jede Laufzeit zählt anteilig für ihre Tage darin
  _rangeCost(c, a, b) {
    const day = (iso) => Date.UTC(Number(iso.slice(0, 4)), Number(iso.slice(5, 7)) - 1, Number(iso.slice(8, 10))) / 86400000;
    const start = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) / 86400000;
    const end = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) / 86400000 - 1;
    let sum = 0;
    for (const x of this._yearTerms(c)) {
      const from = day(x.from), to = day(x.to);
      const overlap = Math.min(to, end) - Math.max(from, start) + 1;
      if (overlap > 0) sum += x.cost * (overlap / (to - from + 1));
    }
    return sum;
  }

  _periodBar(R) {
    const per = [["month", T("Monat")], ["year", T("Jahr")], ["all", T("Gesamt")], ["plan", T("Plan")]];
    const chev = (d) => `<svg viewBox="0 0 24 24"><path d="${d}"/></svg>`;
    let nav = `<div class="knav"><b>${esc(R.label)}</b></div>`;
    if (R.a) {
      const first = this._earliest();
      const prevOff = !first || this._isoDay(R.a) <= first;
      nav = `<div class="knav"><button type="button" class="sic" data-act="cnav" data-id="-1" aria-label="${T("Zurück")}"${prevOff ? " disabled" : ""}>${chev("m15 6-6 6 6 6")}</button><b>${esc(R.label)}</b>
        <button type="button" class="sic" data-act="cnav" data-id="1" aria-label="${T("Weiter")}"${this._cp.off >= 0 ? " disabled" : ""}>${chev("m9 6 6 6-6 6")}</button></div>`;
    }
    const modes = [["share", T("Anteilig")], ["due", T("Fällig")], ["real", T("Verbrauch")]];
    const mode = R.a ? `<div class="seg" role="group" aria-label="${T("Art der Kosten")}">${modes.map(([k, l]) => `<button type="button" data-act="cmode" data-id="${k}" class="${this._costMode === k ? "on" : ""}">${l}</button>`).join("")}</div>` : "";
    return `<div class="kper"><div class="seg" role="group" aria-label="${T("Zeitraum")}">${per.map(([k, l]) => `<button type="button" data-act="cper" data-id="${k}" class="${this._cp.p === k ? "on" : ""}">${l}</button>`).join("")}</div>${mode}${nav}</div>`;
  }

  _cpValue(c, R) {
    const loan = c.sparte === "loan";
    if (R.a) {
      if (this._costMode === "due") return this._dueCost(c, R.a, R.b);
      if (this._costMode === "share" || loan) return this._shareCost(c, R.a, R.b);
      return this._rangeCost(c, R.a, R.b);
    }
    if (R.p === "plan") return loan ? this._monthly(c) * 12 : isNum(c.abschlag_jahr) ? c.abschlag_jahr : isNum(c.abschlag) ? c.abschlag * 12 : 0;
    const v = loan ? c.kredit_gezahlt : this._costSoFar(c);
    return isNum(v) && v > 0 ? v : 0;
  }

  _tbl(heads, rows, cols) {
    const head = `<div class="ch" style="--cols:${cols}">${heads.map((h, i) => `<span class="${i ? "r" : ""}">${h}</span>`).join("")}</div>`;
    const body = rows.map((r) => `<div class="cr ${r.cls || ""}" style="--cols:${cols}">${r.cells.map((cell, i) => (i === 0 ? `<div class="c0">${cell}</div>` : `<div class="r num${cell === "" ? " e" : ""}" data-l="${esc(heads[i] || "")}"><span>${cell}</span></div>`)).join("")}</div>`).join("");
    return `<div class="ctable">${head}${body}</div>`;
  }

  _tone(v) { return isNum(v) ? (v < 0 ? "t-red" : v > 0 ? "t-green" : "") : "t-gray"; }
  _nameCell(c) { return `${esc(c.title)}<span class="t2">${esc(c.anbieter || SPARTE_NAME[c.sparte] || "")}</span>`; }

  _costChart(R) {
    const all = (this._contracts || []).filter((c) => !(this._config?.show_loans === false && groupOf(c).key === "loan"));
    const contracts = R.a ? all : all.filter((c) => !c.archiviert);
    const per = contracts.map((c) => ({ label: c.title, sparte: c.sparte, n: 1, v: this._cpValue(c, R) })).filter((x) => x.v > 0.005);
    const merged = new Map();
    for (const x of per) {
      const o = merged.get(x.sparte);
      if (o) { o.v += x.v; o.n += 1; } else merged.set(x.sparte, { ...x, label: SPARTE_NAME[x.sparte] || x.sparte });
    }
    // Je Label: ein Vertrag mit mehreren Labels teilt seine Kosten gleichmäßig (label_split: full zählt ihn bei jedem Label voll)
    const labelItems = (() => {
      const m = new Map();
      const full = this._labelSplit === "full";
      for (const c of contracts) {
        const v = this._cpValue(c, R);
        if (!(v > 0.005)) continue;
        const ls = this._labelsOf(c);
        const parts = ls.length ? ls.map((l) => [l.id, l.name, this._labelColor(l)]) : [["", T("Ohne Label"), "#5d6373"]];
        for (const [id, name, lcolor] of parts) {
          const o = m.get(id) || { label: name, sparte: null, n: 0, v: 0, lcolor };
          o.v += full ? v : v / parts.length;
          o.n += 1;
          m.set(id, o);
        }
      }
      return [...m.values()];
    })();
    const anyLabel = contracts.some((c) => this._labelsOf(c).length);
    const items = (this._costGroup === "label" ? labelItems : this._costGroup === "contract" ? per : [...merged.values()]).sort((a, b) => b.v - a.v)
      .map((x, i, all) => {
        if (this._costGroup === "label") return { ...x, color: x.lcolor || CHART_COLORS[i % CHART_COLORS.length] };
        const base = this._sparteColor(x.sparte);
        return { ...x, color: this._costGroup === "contract" ? this._shade(base, all.slice(0, i).filter((y) => y.sparte === x.sparte).length) : base };
      });
    const overlap = this._costGroup === "label" && this._labelSplit === "full" && contracts.some((c) => this._labelsOf(c).length > 1 && this._cpValue(c, R) > 0.005);
    const total = overlap
      ? contracts.reduce((s, c) => { const v = this._cpValue(c, R); return s + (v > 0.005 ? v : 0); }, 0)
      : items.reduce((s, x) => s + x.v, 0);
    const seg = (cur, list) => `<div class="seg" role="group">${list.map(([k, l, act]) => `<button type="button" data-act="${act}" class="${cur === k ? "on" : ""}">${l}</button>`).join("")}</div>`;
    const splitSeg = this._costGroup === "label" ? seg(this._labelSplit, [["full", T("Voll zählen"), "lsplit-full"], ["equal", T("Teilen"), "lsplit-equal"]]) : "";
    const ctl = `<div class="ctl">${splitSeg}${seg(this._costGroup, [["sparte", T("Je Sparte"), "group-sparte"], ["contract", T("Je Vertrag"), "group-contract"], ["label", T("Je Label"), "group-label"]])}</div>`;
    if (!total) return `<div class="tile"><div class="lbl" style="margin-bottom:12px">${T("Kostenaufteilung ·")} ${esc(R.label)}</div>${ctl}<div class="sub">${T("In diesem Zeitraum fallen keine Kosten an.")}</div></div>`;
    const labelHint = this._costGroup !== "label" ? "" : anyLabel
      ? `<div class="hint2" style="margin:-4px 0 12px">${this._labelSplit === "full"
        ? (overlap ? `${T("Ein Vertrag mit mehreren Labels zählt bei jedem Label voll. Die Prozente beziehen sich auf alle Kosten (")}${this._eur(total, 0)}${T(") und ergeben zusammen mehr als 100 %.")}` : T("Ein Vertrag mit mehreren Labels zählt bei jedem Label voll."))
        : T("Ein Vertrag mit mehreren Labels teilt seine Kosten gleichmäßig auf, die Prozente ergeben zusammen 100 %.")}</div>`
      : `<div class="hint2" style="margin:-4px 0 12px;color:var(--orange)">${T("Keine Labels gefunden. Vergib sie am Gerät des Vertrags in Home Assistant (Einstellungen, Geräte, Tariffy, Gerät, Labels) oder lege sie in der Kartenkonfiguration unter")} <code>labels</code> ${T("fest.")}</div>`;
    let off = 0;
    const slices = items.map((x) => {
      const part = (x.v / total) * 100;
      const len = Math.max(part - 0.4, 0.01);
      const s = `<circle cx="21" cy="21" r="15.9155" fill="none" style="stroke:${x.color}" stroke-width="6" stroke-dasharray="${len} ${100 - len}" stroke-dashoffset="${-off}" transform="rotate(-90 21 21)"/>`;
      off += part;
      return s;
    }).join("");
    const fin = (x) => x.sparte === "loan" || x.sparte === "leasing";
    const kinds = [[T("Verbrauchsverträge"), (x) => METERED.has(x.sparte), "#38bdf8"], [T("Pauschalverträge"), (x) => !METERED.has(x.sparte) && !fin(x) && x.sparte !== "hauskosten", "#a78bfa"], [T("Hauskosten"), (x) => x.sparte === "hauskosten", this._groupColor("house")], [T("Kredite & Leasing"), fin, this._groupColor("loan")]]
      .map(([l, f, col]) => ({ l, col, v: items.filter(f).reduce((s, x) => s + x.v, 0) })).filter((k) => k.v > 0);
    const pct = (v) => `${this._num((v / total) * 100, 1)} %`;
    return `<div class="tile g-blue"><div class="lbl" style="margin-bottom:12px">${T("Kostenaufteilung")}</div>${ctl}
      ${labelHint}
      ${R.a ? `<div class="hint2" style="margin:-4px 0 12px">${{
        share: T("Anteilig: Jede Zahlung zählt auf die Monate verteilt, für die sie gilt (jährlich ÷ 12, halbjährlich ÷ 6, vierteljährlich ÷ 3)."),
        due: T("Fällig: Es zählen die Zahlungen, die in diesem Zeitraum tatsächlich anfallen (monatlich, vierteljährlich, halbjährlich, jährlich)."),
        real: T("Verbrauch: Bei Strom, Gas und Wasser zählen die Verbrauchskosten, sonst die Abschläge anteilig auf die Tage. Kredite zählen anteilig."),
      }[this._costMode]}</div>` : ""}
      ${overlap ? `<div class="lbars">${items.map((x) => `<div class="lb"><div class="lh"><i class="dot" style="background:${x.color};margin:0"></i><span>${esc(x.n > 1 ? `${x.label} (${x.n})` : x.label)}</span><b class="num">${this._eur(x.v)}</b><span class="p num">${pct(x.v)}</span></div><div class="bar"><i style="width:${Math.min(100, (x.v / total) * 100)}%;background:${x.color}"></i></div></div>`).join("")}</div>
        <div class="kind"><div class="lbl">${T("Alle Kosten im Zeitraum")}</div><div class="num" style="font-size:22px;font-weight:600;margin-top:4px">${this._eur(total)}</div></div>`
      : `<div class="chart-body"><div class="donut"><svg viewBox="0 0 42 42" role="img" aria-label="${T("Kostenaufteilung")}"><circle cx="21" cy="21" r="15.9155" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="6"/>${slices}</svg>
        <div class="mid"><b class="num">${this._eur(total, 0)}</b><span>${esc(R.short)}</span></div></div>
        <div class="cleg">${items.map((x) => `<div><i class="dot" style="background:${x.color};margin:0"></i><span>${esc(x.n > 1 ? `${x.label} (${x.n})` : x.label)}</span><b class="num" style="font-weight:500">${this._eur(x.v)}</b><span class="p num">${pct(x.v)}</span></div>`).join("")}</div></div>`}
      ${kinds.length > 1 && this._costGroup !== "label" ? `<div class="kind"><div class="stack">${kinds.map((k) => `<i style="width:${(k.v / total) * 100}%;background:${k.col}"></i>`).join("")}</div>
        <div class="legend">${kinds.map((k) => `<span><i class="dot" style="background:${k.col}"></i>${k.l} <b>${pct(k.v)}</b></span>`).join("")}</div></div>` : ""}</div>`;
  }

  _costsView() {
    const hide = this._config?.show_loans === false;
    const cs = (this._contracts || []).filter((c) => !c.archiviert);
    const live = cs.filter((c) => c.sparte !== "loan" && c.sparte !== "leasing");
    const loans = hide ? [] : cs.filter((c) => c.sparte === "loan");
    const leasing = hide ? [] : cs.filter((c) => c.sparte === "leasing");
    const metered = live.filter((c) => METERED.has(c.sparte));
    const house = live.filter((c) => c.sparte === "hauskosten");
    const flat = live.filter((c) => !METERED.has(c.sparte) && c.sparte !== "hauskosten");
    const sum = (list, f) => list.reduce((s, c) => s + (f(c) || 0), 0);
    const unit = (c) => this._unit(c);
    const section = (title, n, html) => `<div class="tile"><div class="sec-title" style="margin:0 0 10px"><span class="lbl">${title}</span><span class="cnt" style="font-size:11px;background:rgba(255,255,255,.06);border-radius:10px;padding:0 7px;color:var(--muted)">${n}</span></div>${html}</div>`;
    const money = (v, sign) => (isNum(v) ? this._eur(v, 2, sign) : "–");
    const bal = (v) => `<span class="${this._tone(v)}">${money(v, true)}</span>`;
    const rec = (c) => (!isNum(c.abschlag_anpassung_empfohlen) ? "–" : c.abschlag_anpassung_empfohlen > 0 ? this._eur(c.abschlag_anpassung_empfohlen) : T("kein Abschlag nötig"));

    const R = this._cpRange();
    const per = Boolean(R.a); // Monat oder Jahr: zusätzliche Spalte „Im Zeitraum“
    const pc = (c) => (per ? this._cpValue(c, R) : 0);
    const addPeriod = (heads, rows, cols) => {
      if (!per) return this._tbl(heads, rows, cols);
      const h2 = heads.slice(); h2.splice(1, 0, `${T("Im Zeitraum")}`);
      const r2 = rows.map((r) => ({ ...r, cells: r.cells.slice() }));
      r2.forEach((r) => r.cells.splice(1, 0, r.pv === undefined ? "" : r.pv));
      return this._tbl(h2, r2, cols.replace("repeat(5", "repeat(6").replace("repeat(4", "repeat(5"));
    };
    let out = this._periodBar(R) + this._costChart(R);

    if (metered.length) {
      const rows = [];
      for (const c of metered) {
        rows.push({ pv: money(pc(c)), cells: [this._nameCell(c), money(this._costSoFar(c)), bal(c.guthaben_bisher), `<span class="${this._tone(c.prognose_real)}">${isNum(c.prognose_real) ? this._eur(c.prognose_real, 0, true) : "–"}</span>`, money(c.abschlag), rec(c)] });
        if (isNum(c.kosten_ht_bisher) || isNum(c.kosten_nt_bisher)) {
          for (const [l, k, v] of [[T("Hochtarif"), "kosten_ht_bisher", "verbrauch_bisher_ht"], [T("Niedertarif"), "kosten_nt_bisher", "verbrauch_bisher_nt"]]) {
            rows.push({ cls: "sub", cells: [`${l} · ${this._num(c[v], 0)} ${unit(c)}`, money(c[k]), "", "", "", ""] });
          }
        }
      }
      const fc = sum(metered, (c) => c.prognose_real), bl = sum(metered, (c) => c.guthaben_bisher);
      rows.push({ cls: "tot", pv: money(sum(metered, pc)), cells: [T("Gesamt"), money(sum(metered, (c) => this._costSoFar(c))), bal(bl), `<span class="${this._tone(fc)}">${this._eur(fc, 0, true)}</span>`, money(sum(metered, (c) => c.abschlag)), ""] });
      out += section(T("Verbrauchsverträge"), metered.length, addPeriod([T("Vertrag"), T("Kosten"), T("Saldo heute"), T("Zum Vertragsende"), T("Abschlag"), T("Empfohlen")], rows, "1.6fr repeat(5,1fr)")
        + `<div class="hint2">${T("Positiv ist Guthaben, negativ ist Nachzahlung. „Zum Vertragsende“ ist aus dem bisherigen Verbrauch hochgerechnet.")}</div>`);
    }

    const flatSection = (title, list, hint) => {
      const rows = list.map((c) => ({ pv: money(pc(c)), cells: [this._nameCell(c), money(this._costSoFar(c)), isNum(c.restlaufzeit) ? (c.restlaufzeit >= 0 ? `${c.restlaufzeit} ${T("Tage")}` : T("abgelaufen")) : "–", c.ende ? this._date(c.ende) : T("Kein Vertragsende"),
        `${money(c.abschlag)}${isNum(c.abschlag_jahr) ? `<span class="t2">${this._eur(c.abschlag_jahr, 0)} ${T("/ Jahr")}</span>` : ""}`] }));
      rows.push({ cls: "tot", pv: money(sum(list, pc)), cells: [T("Gesamt"), money(sum(list, (c) => this._costSoFar(c))), "", "", money(sum(list, (c) => c.abschlag))] });
      return section(title, list.length, addPeriod([T("Vertrag"), T("Kosten"), T("Restlaufzeit"), T("Ende"), title === T("Hauskosten") ? T("Betrag") : T("Abschlag")], rows, "1.6fr repeat(4,1fr)") + `<div class="hint2">${hint}</div>`);
    };
    if (flat.length) out += flatSection(T("Pauschalverträge"), flat, T("Bei Pauschalverträgen sind die Kosten bisher die bis heute fälligen Abschläge."));
    if (house.length) out += flatSection(T("Hauskosten"), house, T("Hauskosten wie Abfallgebühren oder Grundsteuer sind Pauschalverträge und zählen in den Summen mit. Die Kosten bisher sind die bis heute fälligen Beträge."));

    if (loans.length || leasing.length) {
      let html = "";
      if (loans.length) {
        const rows = loans.map((c) => ({ pv: money(pc(c)), cells: [this._nameCell(c), money(c.kredit_gezahlt), money(c.kredit_restschuld), money(c.kredit_restsumme), isNum(c.kredit_rate) ? money(c.kredit_rate) : "–", money(c.kredit_zinsen_gesamt)] }));
        html += addPeriod([T("Kredit"), T("Gezahlt"), T("Restschuld"), T("Restsumme"), T("Rate"), T("Zinsen gesamt")], rows, "1.6fr repeat(5,1fr)");
      }
      if (leasing.length) {
        const km = (c) => (isNum(c.leasing_km_gefahren) ? `${this._num(c.leasing_km_gefahren, 0)} km${isNum(c.leasing_km_erlaubt) ? ` / ${this._num(c.leasing_km_erlaubt, 0)}` : ""}${isNum(c.leasing_km_hochgerechnet) ? `<span class="t2">${T("Hochrechnung")} ${this._num(c.leasing_km_hochgerechnet, 0)} km</span>` : ""}` : "–");
        const rows = leasing.map((c) => ({ pv: money(pc(c)), cells: [this._nameCell(c), money(this._costSoFar(c)), isNum(c.restlaufzeit) ? (c.restlaufzeit >= 0 ? `${c.restlaufzeit} ${T("Tage")}` : T("abgelaufen")) : "–", c.ende ? this._date(c.ende) : "–",
          `${money(c.abschlag)}${isNum(c.abschlag_jahr) ? `<span class="t2">${this._eur(c.abschlag_jahr, 0)} ${T("/ Jahr")}</span>` : ""}`, km(c)] }));
        html += `<div style="height:${loans.length ? 12 : 0}px"></div>` + addPeriod([T("Leasing"), T("Kosten"), T("Restlaufzeit"), T("Ende"), T("Rate"), T("Kilometer")], rows, "1.6fr repeat(5,1fr)");
      }
      out += section(T("Kredite & Leasing"), loans.length + leasing.length, html + `<div class="hint2">${T("Die Summen der Tabellen darüber zählen ohne Kredite und Leasing. Die Kostenaufteilung und die Gesamtkachel enthalten sie.")}</div>`);
    }

    const everything = [...live, ...loans, ...leasing];
    const soFar = sum([...live, ...leasing], (c) => this._costSoFar(c)) + sum(loans, (c) => c.kredit_gezahlt);
    const big = (v, label) => `<span class="num" style="font-size:22px;font-weight:600">${this._eur(v)} <small style="font-size:12px;font-weight:400;color:var(--muted)">${label}</small></span>`;
    // im Zeitraum zählt dasselbe wie im Ring: bei Monat und Jahr auch archivierte Verträge, soweit ihre Laufzeit in den Zeitraum fällt
    const archivedIn = per ? (this._contracts || []).filter((c) => c.archiviert && !(hide && groupOf(c).key === "loan")) : [];
    const archivedSum = sum(archivedIn, pc);
    const now = new Date();
    const m0 = new Date(now.getFullYear(), now.getMonth(), 1), m1 = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    out += `<div class="tile g-green"><div class="bar-row"><span class="lbl">${T("Gesamt")}</span>
      ${per ? big(sum(everything, pc) + archivedSum, esc(R.short)) : ""}
      ${big(soFar, T("bisher"))}
      ${big(sum(everything, (c) => this._shareCost(c, m0, m1)), T("diesen Monat anteilig"))}</div>
      ${archivedSum > 0.005 ? `<div class="hint2" style="margin-top:8px">${T("Im Zeitraum sind")} ${this._eur(archivedSum)} ${T("von archivierten Verträgen enthalten.")}</div>` : ""}</div>`;
    return `<div class="rows" style="gap:14px">${out}</div>`;
  }

  // ---------- Vorschau ----------
  _forecastView() {
    if (!this._consAt) setTimeout(() => this._loadCons(), 0);
    const now = new Date();
    const N = this._fcN;
    const months = Array.from({ length: N }, (_, i) => {
      const a = new Date(now.getFullYear(), now.getMonth() + i, 1);
      return { a, b: new Date(a.getFullYear(), a.getMonth() + 1, 1), key: `${a.getFullYear()}-${a.getMonth()}`,
        long: a.toLocaleDateString(this._lang, { month: "long", year: "numeric" }), short: a.toLocaleDateString(this._lang, { month: "short" }), year2: String(a.getFullYear()).slice(2) };
    });
    const hide = this._config?.show_loans === false;
    const contracts = (this._contracts || []).filter((c) => !c.archiviert && !(hide && groupOf(c).key === "loan") && !(this._noLoan && groupOf(c).key === "loan") && this._passFilter(c));
    const rows = months.map((m) => {
      const items = contracts.map((c) => ({ c, v: this._fcValue(c, m.a, m.b) })).filter((x) => x.v > 0.005).sort((x, y) => y.v - x.v);
      const byGroup = new Map();
      for (const x of items) { const g = groupOf(x.c); byGroup.set(g.key, (byGroup.get(g.key) || 0) + x.v); }
      return { ...m, items, byGroup, total: items.reduce((s, x) => s + x.v, 0) };
    });
    const avg = rows.reduce((s, r) => s + r.total, 0) / (rows.length || 1);
    const max = Math.max(1, ...rows.map((r) => r.total));
    const seg = (cur, list) => `<div class="seg" role="group">${list.map(([k, l, act, id]) => `<button type="button" data-act="${act}" data-id="${id}" class="${cur === k ? "on" : ""}">${l}</button>`).join("")}</div>`;
    const modes = ["share", "due", "real"], mLabels = { share: T("Anteilig"), due: T("Fällig"), real: T("Verbrauch") };
    const bar = `<div class="kper">${seg(N, [[3, T("3 Monate"), "fcn", 3], [6, T("6 Monate"), "fcn", 6], [12, T("12 Monate"), "fcn", 12]])}
      ${(this._contracts || []).some((c) => !c.archiviert && groupOf(c).key === "loan") && !hide ? `<div class="seg"><button type="button" data-k="all" class="${this._noLoan ? "" : "on"}">${T("Alles")}</button><button type="button" data-k="nok" class="${this._noLoan ? "on" : ""}">${T("Ohne Kredit &amp; Leasing")}</button></div>` : ""}
      <div class="seg" role="group" aria-label="${T("Art der Kosten")}">${modes.map((k) => `<button type="button" data-act="cmode" data-id="${k}" class="${this._costMode === k ? "on" : ""}">${mLabels[k]}</button>`).join("")}</div></div>`;
    const hint = { share: T("Anteilig: Jede Zahlung zählt auf die Monate verteilt, für die sie gilt."), due: T("Fällig: Es zählen die Zahlungen, die im jeweiligen Monat anfallen."),
      real: T("Verbrauch: Bei Strom, Gas und Wasser zählt der Verbrauch desselben Monats im Vorjahr zum heutigen Preis, sonst der Abschlag anteilig.") }[this._costMode];
    const filterNote = this._filter !== "all"
      ? `<div class="alert blue" style="cursor:default"><span class="t">${T("Filter aus der Übersicht aktiv")}<span>${esc(this._filter.startsWith("label:") ? (this._labelsOf(contracts[0] || {}).find((l) => `label:${l.id}` === this._filter) || { name: this._filter.slice(6) }).name : (GROUPS.find((g) => g.key === this._filter) || {}).label || "")}</span></span><button type="button" class="btn" data-act="fclear">${T("Aufheben")}</button></div>` : "";
    if (!contracts.length) return `<div class="rows" style="gap:14px">${bar}${filterNote}<div class="tile state">${T("Keine Verträge für die Vorschau.")}</div></div>`;

    const chart = rows.map((r) => {
      const segs = GROUPS.filter((g) => r.byGroup.has(g.key)).map((g) => `<i style="height:${Math.max(2, (r.byGroup.get(g.key) / max) * 150)}px;background:${this._groupColor(g)}" title="${esc(g.label)} ${this._eur(r.byGroup.get(g.key), 0)}"></i>`).join("");
      const peak = rows.length > 2 && r.total > avg * 1.25;
      return `<div class="fcol ${peak ? "peak" : ""}"><span class="fv num">${this._eur(r.total, 0)}</span><div class="fbar">${segs}</div><span class="fl">${esc(r.short)}<br><small>${r.year2 === String(now.getFullYear()).slice(2) ? "" : "’" + r.year2}</small></span></div>`;
    }).join("");
    const legend = GROUPS.filter((g) => rows.some((r) => r.byGroup.has(g.key))).map((g) => `<span><i class="dot" style="background:${this._groupColor(g)}"></i>${esc(g.label)}</span>`).join("");

    const monthRow = (r, i) => {
      const open = this._fcOpen.has(r.key);
      const delta = r.total - avg;
      const chip = r.total > avg * 1.25 ? `<span class="chip orange">+${this._eur(delta, 0)} ${T("über Ø")}</span>` : i === 0 ? `<span class="chip gray">${T("Aktueller Monat")}</span>` : "";
      const lines = r.items.map(({ c, v }) => {
        const notes = [];
        const end = this._ymd(c.ende), nb = c.next && this._ymd(c.next.beginn);
        if (end && end >= r.a && end < r.b) notes.push(`${T("Vertrag endet am")} ${this._date(c.ende)}`);
        if (c.ende && nb && nb >= r.a && nb < r.b) notes.push(`${T("Folgevertrag ab")} ${this._date(c.next.beginn)}${c.next.anbieter || c.next.tarif ? `: ${[c.next.anbieter, c.next.tarif].filter(Boolean).join(" · ")}` : ""}`);
        if (this._costMode === "real" && METERED.has(c.sparte)) {
          const cons = this._monthCons(c, r.a);
          if (cons !== null && this._unitPrice(c) !== null) notes.push(`${T("Verbrauch ca.")} ${this._num(cons, 0)} ${this._unit(c)}`);
        }
        if (this._costMode === "due" && c.zahlweise && c.zahlweise !== "monthly") notes.push(INTERVAL[c.zahlweise] || "");
        return `<div class="fline"><span class="fn"><i class="dot" style="background:${this._sparteColor(c.sparte)}"></i>${esc(c.title)}${notes.length ? `<span class="t2">${esc(notes.filter(Boolean).join(" · "))}</span>` : ""}</span><b class="num">${this._eur(v)}</b></div>`;
      }).join("");
      return `<div class="row ${open ? "open" : ""}"><button type="button" class="rh" data-ftoggle="${esc(r.key)}" aria-expanded="${open}">
        <span class="n"><b>${esc(r.long)}</b><span>${r.items.length} ${T("Posten")}</span></span>${chip}<span class="v num">${this._eur(r.total)}</span>
        <svg class="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button><div class="rb">${lines || T('<div class="sub">Keine Zahlungen.</div>')}</div></div>`;
    };

    // Termine im Zeitraum: Ende, Kündigungsfrist, Folgevertrag, mit Hinweis auf Guthaben oder Nachzahlung bei Verbrauchsverträgen
    const from = months[0].a, to = months[months.length - 1].b;
    const within = (iso) => { const d = this._ymd(iso); return d && d >= new Date(now.getFullYear(), now.getMonth(), now.getDate()) && d < to ? d : null; };
    const events = [];
    for (const c of contracts) {
      const kb = within(c.kuendigung_bis); if (kb) events.push({ d: kb, tone: "orange", t: c.title, s: T("Kündigungsfrist endet") });
      const e = within(c.ende);
      if (e) {
        let s = c.next && c.next.beginn ? `${T("Vertrag endet, Folgevertrag ab")} ${this._date(c.next.beginn)}` : T("Vertrag endet");
        const metered = METERED.has(c.sparte) && isNum(c.prognose_real);
        if (metered) s += c.prognose_real < 0 ? `${T(", Nachzahlung etwa")} ${this._eur(-c.prognose_real, 0)}` : `${T(", Guthaben etwa")} ${this._eur(c.prognose_real, 0)}`;
        events.push({ d: e, tone: metered && c.prognose_real < 0 ? "red" : "green", t: c.title, s });
      }
      const w = within(c.wechsel); if (w) events.push({ d: w, tone: "blue", t: c.title, s: T("Wechsel auf den Folgevertrag") });
    }
    events.sort((x, y) => x.d - y.d);
    const tl = events.length ? `<div class="tl">${events.map((e) => `<div class="t-${e.tone}"><i class="d"></i><b>${e.d.toLocaleDateString(this._lang, { day: "2-digit", month: "2-digit", year: "numeric" })} ${esc(e.t)}</b><em>${esc(e.s)}</em></div>`).join("")}</div>` : `<div class="sub" style="margin-top:8px">${T("Keine Termine in diesem Zeitraum.")}</div>`;

    const consNote = this._costMode === "real" && contracts.some((c) => METERED.has(c.sparte)) && this._cons && !Object.keys(this._cons).length
      ? `<div class="hint2" style="color:var(--orange)">${T("Die Verbrauchsstatistik der Verträge war nicht abrufbar. Die Vorschau rechnet dann mit dem hochgerechneten Verbrauch der Laufzeit.")}</div>` : "";

    return `<div class="rows" style="gap:14px">${bar}${filterNote}
      <div class="tile g-blue"><div class="bar-row"><span class="lbl">${T("Nächste")} ${N} ${T("Monate")}</span><span class="num" style="font-size:22px;font-weight:600">${this._eur(rows.reduce((s, r) => s + r.total, 0), 0)} <small style="font-size:12px;font-weight:400;color:var(--muted)">${T("gesamt · Ø")} ${this._eur(avg, 0)} ${T("pro Monat")}</small></span></div>
        <div class="hint2" style="margin:6px 0 4px">${esc(hint)}</div>
        <div class="fc">${chart}</div><div class="legend" style="margin-top:12px">${legend}</div>${consNote}</div>
      <div class="rows">${rows.map(monthRow).join("")}</div>
      <div class="tile"><div class="lbl">${T("Termine im Zeitraum")}</div>${tl}
        <div class="hint2" style="margin-top:12px">${T("Die Vorschau nimmt die heutigen Preise. Verträge ohne Ende laufen weiter, Verträge mit Ende zählen danach nur mit Folgevertrag.")}</div></div></div>`;
  }

  // ---------- Historie ----------
  _historyView() {
    const all = this._contracts || [];
    const archived = all.filter((c) => c.archiviert).sort((a, b) => a.title.localeCompare(b.title));
    const earlier = all.filter((c) => !c.archiviert && (c.historie || []).length).sort((a, b) => a.title.localeCompare(b.title));
    if (!archived.length && !earlier.length) {
      return `<div class="tile state"><b style="color:var(--text);font-weight:500;font-size:17px">${T("Noch keine Historie")}</b><br>${T("Die früheren Laufzeiten eines Vertrags erscheinen hier, sobald der Folgevertrag übernimmt. Archivierte Verträge erscheinen hier ebenfalls.")}</div>`;
    }
    const block = (c) => {
      const terms = (c.historie || []).slice().reverse();
      const rows = terms.map((x) => ({ cells: [
        `${this._date(x.beginn)} – ${x.ende ? this._date(x.ende) : "–"}<span class="t2">${esc([x.anbieter, x.tarif].filter(Boolean).join(" · ") || "–")}</span>`,
        isNum(x.abschlag) ? this._eur(x.abschlag) : "–",
        this._eur(isNum(x.kosten) ? x.kosten : x.abschlag_gezahlt),
        isNum(x.verbrauch) ? `${this._num(x.verbrauch, 0)} ${this._unit(c)}` : "–",
        isNum(x.saldo) ? `<span class="${this._tone(x.saldo)}">${this._eur(x.saldo, 2, true)}</span>` : "–",
      ] }));
      let total = "";
      if (((c.historie || []).length || (c.einmalposten || []).length) && isNum(c.kosten_gesamt)) {
        const v = this._eur(c.kosten_gesamt);
        const n = c.laufzeiten_anzahl;
        const since = [c.seit ? `${T("seit")} ${this._date(c.seit)}` : null, isNum(n) ? (n === 1 ? T("1 Laufzeit") : `${n} ${T("Laufzeiten")}`) : null].filter(Boolean).join(" · ");
        total = `<div class="hint2">${T("Kosten gesamt:")} <b style="color:var(--text);font-weight:500">${c.kosten_gesamt_vollstaendig === false ? `${T("mindestens")} ${v}` : v}</b>${since ? ` · ${since}` : ""}</div>`;
      }
      const open = this._histOpen.has(c.entry_id);
      const n = (c.historie || []).length;
      const sub = [c.anbieter, c.tarif].filter(Boolean).join(" · ");
      const meta = [c.archiviert ? T("Archiviert") : "", n ? (n === 1 ? T("1 frühere Laufzeit") : `${n} ${T("frühere Laufzeiten")}`) : "", c.archiviert && c.ende ? `${T("bis")} ${this._date(c.ende)}` : ""].filter(Boolean).join(" · ");
      const sum = isNum(c.kosten_gesamt) ? `${c.kosten_gesamt_vollstaendig === false ? "mind. " : ""}${this._eur(c.kosten_gesamt, 0)}` : "";
      return `<div class="row ${open ? "open" : ""}" data-hrow="${esc(c.entry_id)}">
        <button type="button" class="rh" data-htoggle="${esc(c.entry_id)}" aria-expanded="${open}">
          ${this._icon(c.sparte, null, c.icon)}
          <span class="n"><b>${esc(c.title)}</b><span>${esc(sub)}</span><span class="st" style="color:var(--muted)">${esc(meta)}</span></span>
          <span class="chip gray">${esc(meta || T("Frühere Laufzeiten"))}</span>
          ${sum ? `<span class="v num">${sum} <small>${T("gesamt")}</small></span>` : ""}
          <svg class="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="rb">${this._adminActions(c)}<div class="hist">${rows.length ? this._tbl([T("Laufzeit"), T("Abschlag"), T("Kosten"), T("Verbrauch"), T("Saldo")], rows, "1.8fr repeat(4,1fr)") : `<div class="sub">${T("Keine früheren Laufzeiten gespeichert.")}</div>`}${total}</div></div></div>`;
    };
    const grp = (title, list) => (list.length ? `<div class="sec-title"><span class="lbl">${title}</span><span class="cnt" style="font-size:11px;background:rgba(255,255,255,.06);border-radius:10px;padding:0 7px;color:var(--muted)">${list.length}</span></div>${list.map(block).join("")}` : "");
    return `<div class="rows" style="gap:8px">${grp(T("Archivierte Verträge"), archived)}${grp(T("Frühere Laufzeiten"), earlier)}</div>`;
  }

  // ---------- Sicherung (nur Admins) ----------
  _bkError(err) {
    const code = String((err && (err.code || (err.body && err.body.code))) || "");
    return BK_ERR[code] || BK_ERR.invalid_backup;
  }

  async _bkLoad() {
    const bk = this._bk;
    bk.loading = true;
    try { bk.deleted = (await this._hass.callWS({ type: "tariffy/deleted_list" })).deleted || []; } catch (_e) { bk.deleted = []; }
    bk.loading = false;
    this._render();
  }

  async _bkDownload() {
    const bk = this._bk;
    bk.message = null; bk.error = null;
    try {
      const { backup } = await this._hass.callWS({ type: "tariffy/backup_export" });
      const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" }));
      const a = document.createElement("a");
      a.href = url; a.download = `tariffy-backup-${new Date().toISOString().slice(0, 10)}.json`;
      this.shadowRoot.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      bk.message = `${T("Sicherung heruntergeladen:")} ${backup.contracts.length} ${T("Verträge.")}`;
    } catch (err) { bk.error = this._bkError(err); }
    this._render();
  }

  async _bkPick(file) {
    const bk = this._bk;
    Object.assign(bk, { plan: null, backup: null, file: null, message: null, error: null, asking: null });
    if (file && file.size > 1048576) bk.error = T("Die Datei ist zu groß.");
    else if (file) {
      try {
        const backup = JSON.parse(await file.text());
        bk.plan = (await this._hass.callWS({ type: "tariffy/backup_preview", backup })).contracts;
        bk.backup = backup; bk.file = file.name;
      } catch (err) { bk.error = this._bkError(err); }
    }
    this._render();
  }

  async _bkRun(task, done) {
    const bk = this._bk;
    Object.assign(bk, { busy: true, asking: null, message: null, error: null });
    this._render();
    try { bk.message = done(await task()); } catch (err) { bk.error = this._bkError(err); }
    bk.busy = false;
    await this._bkLoad();
  }

  _backupView() {
    const bk = this._bk;
    if (bk.deleted === null && !bk.loading) setTimeout(() => this._bkLoad(), 0);
    const dis = bk.busy ? " disabled" : "";
    const ask = (text, yes, act, id) => `<div class="ask"><span>${esc(text)}</span><button type="button" class="btn go" data-act="${act}"${id ? ` data-id="${esc(id)}"` : ""}${dis}>${yes}</button><button type="button" class="btn" data-act="bk-cancel">${T("Abbrechen")}</button></div>`;
    const sec = (title, inner) => `<div class="tile"><div class="lbl" style="margin-bottom:12px">${title}</div><div class="bk">${inner}</div></div>`;

    const creating = (bk.plan || []).filter((s) => s.action === "create").length;
    let plan = "";
    if (bk.plan) {
      const rows = bk.plan.map((s) => ({ cells: [`${esc(s.title)}<span class="t2">${esc(SPARTE_NAME[s.sparte] || s.sparte)}</span>`, `<span class="${s.action === "create" ? "t-green" : "t-gray"}">${s.action === "create" ? T("wird angelegt") : T("übersprungen: gibt es schon")}</span>`] }));
      plan = `${bk.file ? `<p>${T("Datei:")} ${esc(bk.file)}</p>` : ""}${this._tbl([T("Vertrag"), T("Aktion")], rows, "1.6fr 1fr")}
        ${creating === 0 ? `<p>${T("Nichts wiederherzustellen: die Verträge dieser Datei gibt es schon.")}</p>`
          : bk.asking === "restore" ? ask(T("{n} fehlende(n) Vertrag/Verträge aus dieser Datei anlegen? Vorhandene Verträge werden nicht verändert.", { n: creating }), T("Ja, wiederherstellen"), "bk-restore")
          : `<div class="acts"><button type="button" class="btn go" data-act="bk-ask-restore"${dis}>${T("Wiederherstellen (")}${creating})</button></div>`}`;
    }

    const deleted = (bk.deleted || []).map((it) => `<div class="bkrow"><div class="n"><b>${esc(it.title)}</b><span>${esc(SPARTE_NAME[it.sparte] || it.sparte)} ${T("· gelöscht am")} ${this._date(it.deleted)}</span></div>
      ${bk.asking === it.id ? ask(T("„{t}“ zurückholen?", { t: it.title }), T("Ja, zurückholen"), "bk-restore-one", it.id)
        : bk.asking === `discard:${it.id}` ? ask(T("„{t}“ endgültig vergessen? Danach lässt er sich nicht mehr zurückholen.", { t: it.title }), T("Ja, vergessen"), "bk-discard", it.id)
        : `<div class="acts"><button type="button" class="btn blue" data-act="bk-ask-one" data-id="${esc(it.id)}"${dis}>${T("Zurückholen")}</button><button type="button" class="btn red" data-act="bk-ask-discard" data-id="${esc(it.id)}"${dis}>${T("Jetzt vergessen")}</button></div>`}</div>`).join("");

    return `<div class="rows" style="gap:14px">
      <div class="sec-title"><span class="lbl">${T("Darstellung")}</span></div>
      ${this._colorTile()}
      <div class="sec-title" style="margin-top:12px"><span class="lbl">${T("Sicherung")}</span></div>
      ${bk.message ? `<div class="msg" role="status">${esc(bk.message)}</div>` : ""}${bk.error ? `<div class="err" role="alert">${esc(bk.error)}</div>` : ""}
      ${sec(T("Sicherung erstellen"), `<p>${T("Speichert alle Verträge in einer Datei: ihre Daten, die Historie, den geplanten Folgevertrag und die Bestätigungen. Die Datei enthält persönliche Daten (Kundennummer, Zählernummer, Marktlokation, Benachrichtigungsziel). Bewahre sie sicher auf und gib sie nicht weiter.")}</p>
        <div class="acts"><button type="button" class="btn blue" data-act="bk-download"${dis}>${T("Sicherung herunterladen")}</button></div>`)}
      ${sec(T("Aus Datei wiederherstellen"), `<p>${T("Wähle eine Sicherungsdatei. Du siehst vorher, was passieren würde, bevor etwas angelegt wird. Verträge, die es schon gibt (gleicher Name und Sparte), werden übersprungen und nie verändert. Nur fehlende werden angelegt.")}</p>
        <input class="file" id="tg-file" type="file" accept=".json,application/json" aria-label="${T("Sicherungsdatei wählen")}">${plan}`)}
      ${sec(T("Gelöschte Verträge"), `<p>${T("Ein gelöschter Vertrag bleibt 30 Tage erhalten und lässt sich hier zurückholen, auch wenn er in Home Assistant gelöscht wurde.")}</p>
        ${deleted || (bk.deleted === null ? "" : `<p>${T("Keine gelöschten Verträge.")}</p>`)}`)}</div>`;
  }

  _kv(label, value) { return `<div class="kv"><span>${label}</span><b class="num">${value}</b></div>`; }

  _contractsView() {
    const live = this._live;
    const sections = GROUPS.map((g) => {
      const list = live.filter((c) => groupOf(c) === g).sort((a, b) => this._status(a).rank - this._status(b).rank);
      if (!list.length) return "";
      return `<div class="glabel"><span class="lbl">${g.label}</span><span class="cnt">${list.length}</span></div>${list.map((c) => this._row(c)).join("")}`;
    }).join("");
    return `<div class="rows">${this._isAdmin ? `<div class="bar-row"><span></span>${this._newButton()}</div>` : ""}${sections}</div>`;
  }

  _row(c) {
    const s = this._status(c);
    const open = this._open.has(c.entry_id);
    const loan = c.sparte === "loan";
    const value = loan ? `${this._num(c.kredit_rate)} € <small>${T("/ Mon")}</small>` : s.tone === "red" || s.tone === "green" ? `<span class="t-${s.tone}">${esc(s.value)}</span>` : `${this._num(this._monthly(c))} € <small>${T("/ Mon")}</small>`;
    return `<div class="row tone-${s.tone} ${open ? "open" : ""}" data-row="${esc(c.entry_id)}">
      <div class="row-top"><button type="button" class="rh" data-toggle="${esc(c.entry_id)}" aria-expanded="${open}">
        ${this._icon(c.sparte, null, c.icon)}
        <span class="n"><b>${esc(c.title)}</b><span>${esc([c.anbieter, c.tarif].filter(Boolean).join(" · "))}</span><span class="st" style="color:${TONE_COLOR[s.tone]}">${esc(s.chip)}</span></span>
        <span class="chip ${s.tone}">${esc(s.chip)}</span>
        <span class="v num">${value}</span>
      </button>${this._rowIcons(c)}<button type="button" class="ib2 rchev" data-toggle="${esc(c.entry_id)}" aria-label="${esc(T("Details"))}"><svg class="chev" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button></div>
      <div class="rb">${loan ? this._loanBody(c) : c.sparte === "leasing" ? this._leasingBody(c) : this._contractBody(c)}${this._adminActions(c)}</div></div>`;
  }

  // Zeilen zu Laufzeit und Kündigung (Vertragskachel)
  _termRows(c) {
    const months = (n) => T(n === 1 ? T("{n} Monat") : T("{n} Monate"), { n });
    const rows = [
      this._labelsOf(c).length ? this._kv(T("Labels"), this._labelsOf(c).map((l) => `<i class="dot" style="background:${this._labelColor(l)};margin:0 4px 0 6px"></i>${esc(l.name)}`).join("")) : "",
      c.versicherungsart ? this._kv(T("Art"), INSURANCE[c.versicherungsart] || esc(c.versicherungsart)) : "",
      c.hauskostenart ? this._kv(T("Art"), HOUSE[c.hauskostenart] || esc(c.hauskostenart)) : "",
      isNum(c.km_start) ? this._kv(T("Kilometerstand bei Beginn"), `${this._num(c.km_start, 0)} km`) : "",
      isNum(c.km_pro_jahr) ? this._kv(T("Erlaubt pro Jahr"), `${this._num(c.km_pro_jahr, 0)} km`) : "",
      c.beginn || c.ende ? this._kv(T("Laufzeit"), `${this._date(c.beginn)} – ${c.ende ? this._date(c.ende) : T("offen")}`) : "",
      isNum(c.restlaufzeit) ? this._kv(T("Rest"), c.restlaufzeit >= 0 ? `${c.restlaufzeit} ${T("Tage")}` : T("abgelaufen")) : "",
      isNum(c.mindestlaufzeit) ? this._kv(T("Mindestlaufzeit"), `${months(c.mindestlaufzeit)}${c.mindestlaufzeit_bis ? ` ${T("· bis")} ${this._date(c.mindestlaufzeit_bis)}` : ""}`) : "",
      isNum(c.kuendigungsfrist) ? this._kv(T("Kündigungsfrist"), months(c.kuendigungsfrist)) : "",
      c.kuendigung_bis ? this._kv(T("Kündigen bis"), this._date(c.kuendigung_bis)) : "",
      c.erinnerung_datum ? this._kv(T("Erinnerung ab"), `${this._date(c.erinnerung_datum)} · ${c.erinnerung_bestaetigt ? T("bestätigt") : c.erinnerung_aktiv ? T("aktiv") : isNum(c.erinnerung_monate) ? months(c.erinnerung_monate) : ""}`) : "",
    ].join("");
    const pct = this._progress(c);
    return rows + (pct === null ? "" : `<div class="bar" style="color:var(--blue);margin-top:8px"><i style="width:${pct}%;background:var(--blue)"></i></div>`);
  }

  // Zeilen zu Preis, Zahlweise und Kosten (Preiskachel)
  _priceRows(c, unit) {
    const pu = c.sparte === "water" ? unit : "kWh";
    const price = (v) => `${this._num(v, 4)} €/${pu}`;
    const flat = !METERED.has(c.sparte);
    const label = c.sparte === "streaming" ? T("Preis") : c.sparte === "hauskosten" ? T("Betrag") : T("Abschlag");
    const sameAsYear = flat && isNum(c.kosten_jahr) && isNum(c.abschlag_jahr) && Math.abs(c.kosten_jahr - c.abschlag_jahr) < 0.005;
    return [
      isNum(c.arbeitspreis) ? this._kv(T("Arbeitspreis"), price(c.arbeitspreis)) : "",
      isNum(c.arbeitspreis_nt) ? this._kv(T("Arbeitspreis Niedertarif"), price(c.arbeitspreis_nt)) : "",
      isNum(c.arbeitspreis_nacht) ? this._kv(T("Arbeitspreis Nacht"), price(c.arbeitspreis_nacht)) : "",
      isNum(c.effektiver_arbeitspreis) ? this._kv(T("Arbeitspreis effektiv"), price(c.effektiver_arbeitspreis)) : "",
      isNum(c.arbeitspreis_gesamt_wasser) ? this._kv(T("Wasserpreis inkl. Abwasser"), price(c.arbeitspreis_gesamt_wasser)) : "",
      isNum(c.grundpreis) ? this._kv(T("Grundpreis"), `${this._num(c.grundpreis)} ${T("€/Mon")}`) : "",
      isNum(c.abschlag) ? this._kv(`${label} ${T("/ Monat")}`, `${this._num(c.abschlag)} €`) : "",
      isNum(c.abschlag_jahr) && !sameAsYear ? this._kv(`${label} ${T("/ Jahr")}`, this._eur(c.abschlag_jahr)) : "",
      flat && isNum(c.kosten_jahr) ? this._kv(T("Kosten / Jahr"), this._eur(c.kosten_jahr)) : "",
      c.zahlweise && c.zahlweise !== "monthly" && isNum(c.abschlag_je_zahlung) ? this._kv(T("Zahlung"), `${this._eur(c.abschlag_je_zahlung)} ${INTERVAL[c.zahlweise] || ""}`) : "",
      c.zahlweise && c.zahlweise !== "monthly" && c.erste_zahlung ? this._kv(T("Erste Abbuchung"), this._date(c.erste_zahlung)) : "",
      c.naechste_zahlung ? this._kv(T("Nächste Zahlung"), this._date(c.naechste_zahlung)) : "",
      flat && isNum(this._costSoFar(c)) ? this._kv(T("Kosten bisher"), this._eur(this._costSoFar(c))) : "",
      isNum(c.kosten_gesamt) && ((c.historie || []).length || (c.einmalposten || []).length) ? this._kv(T("Kosten gesamt"), `${c.kosten_gesamt_vollstaendig === false ? "mind. " : ""}${this._eur(c.kosten_gesamt)}`) : "",
      isNum(c.empfohlener_abschlag) ? this._kv(T("Empfohlener Abschlag"), `${this._num(c.empfohlener_abschlag)} ${T("€/Mon")}`) : "",
    ].join("");
  }

  _contractBody(c) {
    const metered = METERED.has(c.sparte);
    const unit = this._unit(c);
    const amount = (v, d = 0) => (isNum(v) ? `${this._num(v, d)} ${unit}` : null);
    const kv = (l, v) => (v === null || v === undefined || v === "" ? "" : this._kv(l, v));
    const eur = (v, sign) => (isNum(v) ? this._eur(v, 2, sign) : null);
    const grid = c.autarkie_aktiv && isNum(c.verbrauch_gesamt_bisher) && isNum(c.verbrauch_gesamt_hochgerechnet);
    const verbrauch = metered || isNum(c.kosten_bisher) ? [
      grid ? [
        kv(T("Gesamtverbrauch"), `${this._num(c.verbrauch_gesamt_bisher, 0)} / ${this._num(c.verbrauch_gesamt_hochgerechnet, 0)} ${unit}`),
        kv(T("Durch PV gedeckt"), `${this._num(c.verbrauch_pv_gedeckt_bisher, 0)} / ${this._num(c.verbrauch_pv_gedeckt_hochgerechnet, 0)} ${unit}`),
        kv(T("Netzbezug (abgerechnet)"), `${this._num(c.verbrauch_bisher, 0)} / ${this._num(c.verbrauch_hochgerechnet, 0)} ${unit}`),
      ].join("") : [kv(T("Bisher"), amount(c.verbrauch_bisher)), kv(T("Hochgerechnet"), amount(c.verbrauch_hochgerechnet))].join(""),
      kv(T("Gartenwasser"), amount(c.garten_verbrauch, 1)),
      kv(T("Abwasserpflichtig"), amount(c.abwasserpflichtiger_verbrauch, 1)),
      kv(T("Bisher, Hochtarif"), amount(c.verbrauch_bisher_ht)),
      kv(T("Bisher, Niedertarif"), amount(c.verbrauch_bisher_nt)),
      kv(T("Letzte Laufzeit"), amount(c.verbrauch_letzte_laufzeit)),
      kv(T("Kosten bisher"), eur(c.kosten_bisher)),
      kv(T("Gartenwasser-Kosten"), eur(c.garten_kosten)),
      kv(T("Abwasserkosten"), eur(c.abwasser_kosten)),
      kv(T("Saldo heute"), eur(c.guthaben_bisher, true)),
      kv(T("Zum Vertragsende"), eur(c.prognose_real, true)),
      c.autarkie_aktiv ? kv(T("Ohne PV-Autarkie"), eur(c.prognose_ohne_autarkie, true)) : "",
      c.autarkie_aktiv && isNum(c.autarkie_bisher) ? kv(T("PV-Autarkie bisher"), `${this._num(c.autarkie_bisher, 0)} %${isNum(c.autarkie_bisher_nt) ? ` ${T("· Niedertarif")} ${this._num(c.autarkie_bisher_nt, 0)} %` : ""}`) : "",
    ].join("") : "";
    const posten = Array.isArray(c.einmalposten) && c.einmalposten.length
      ? c.einmalposten.map((x) => this._kv(esc(x.bezeichnung || T("Posten")), `<span class="${x.betrag < 0 ? "t-red" : "t-green"}">${this._eur(x.betrag, 2, true)}</span>`)).join("") + (isNum(c.einmal_summe) ? this._kv(T("Saldo"), this._eur(c.einmal_summe, 2, true)) : "")
      : "";
    const nx = c.next || {};
    const folge = c.next && nx.beginn ? [
      kv(T("Beginn"), this._date(nx.beginn)), kv(T("Ende"), nx.ende ? this._date(nx.ende) : ""), kv(T("Anbieter"), esc(nx.anbieter || "")), kv(T("Tarif"), esc(nx.tarif || "")),
      isNum(nx.arbeitspreis) ? kv(T("Arbeitspreis"), `${this._num(nx.arbeitspreis, 4)} €/${c.sparte === "water" ? unit : "kWh"}`) : "",
      isNum(nx.abschlag) ? kv(c.sparte === "streaming" ? T("Preis") : c.sparte === "hauskosten" ? T("Betrag") : T("Abschlag"), `${this._num(nx.abschlag)} ${T("€/Mon")}`) : "",
    ].join("") : "";
    const items = Array.isArray(c.aussenzaehler) ? c.aussenzaehler : [];
    const aussen = c.sparte === "water" && items.length
      ? items.map((x) => this._kv(`${esc(x.name || T("Zähler"))}`, isNum(x.verbrauch) ? `${this._num(x.verbrauch, 1)} ${unit}${isNum(x.kosten) ? ` · ${this._eur(x.kosten)}` : ""}` : "–")).join("") : "";
    const tile = (label, html) => (html ? `<div class="mini"><span class="lbl">${label}</span>${html}</div>` : "");
    const hint = [];
    if (metered && isNum(c.abschlag_anpassung_empfohlen)) {
      const rec = c.abschlag_anpassung_empfohlen;
      if (rec < 0) hint.push(T("Kein Abschlag nötig: Das Guthaben deckt die Kosten bis Vertragsende."));
      else if (isNum(c.abschlag) && Math.abs(rec - c.abschlag) >= 0.5) hint.push(rec > c.abschlag
        ? `${T("Beim aktuellen Verbrauch ist eine Nachzahlung von etwa")} ${this._eur(Math.abs(c.prognose_real || 0), 0)} ${T("zu erwarten. Abschlag auf")} ${this._eur(rec)} ${T("pro Monat erhöhen.")}`
        : `${T("Abschlag könnte auf")} ${this._eur(rec)} ${T("pro Monat sinken.")}`);
      else hint.push(T("Der Abschlag passt."));
    }
    const warn = metered && isNum(c.prognose_real) && c.prognose_real < 0 && !hint.length ? T("Es droht eine Nachzahlung.") : "";
    return `<div class="cols">${tile(T("Vertrag"), this._termRows(c))}${tile(T("Preise"), this._priceRows(c, unit))}${tile(metered ? T("Verbrauch") : T("Kosten"), verbrauch)}${tile(T("Einmalposten"), posten)}${tile(T("Folgevertrag"), folge)}${tile(T("Außenzähler"), aussen)}</div>
      ${hint.length || warn ? `<div class="hint" style="color:${isNum(c.prognose_real) && c.prognose_real < 0 ? "var(--orange)" : "var(--muted)"}">${esc(hint.join(" ") || warn)}</div>` : ""}`;
  }

  _leasingBody(c) {
    const km = (v) => (isNum(v) ? `${this._num(v, 0)} km` : null);
    const sgn = (v) => (isNum(v) ? `${v > 0 ? "+" : ""}${this._num(v, 0)} km` : null);
    const kv = (l, v) => (v === null || v === undefined || v === "" ? "" : this._kv(l, v));
    const tile = (label, html) => (html ? `<div class="mini"><span class="lbl">${label}</span>${html}</div>` : "");
    const pct = this._progress(c);
    const vertrag = this._termRows(c);
    const kosten = this._priceRows(c, "kWh");
    const kmTile = [
      kv(T("Kilometerstand"), km(c.leasing_km_stand)), kv(T("Bisher gefahren"), km(c.leasing_km_gefahren)),
      kv(T("Erlaubt insgesamt"), km(c.leasing_km_erlaubt)), kv(T("Soll bis heute"), km(c.leasing_km_soll)),
      kv(T("Gegenüber dem Soll"), sgn(c.leasing_km_abweichung)), kv(T("Noch übrig"), km(c.leasing_km_rest)),
      isNum(c.leasing_km_rest_je_tag) ? this._kv(T("Erlaubt pro Tag"), `${this._num(c.leasing_km_rest_je_tag, 1)} km`) : "",
      c.leasing_km_lokal ? this._kv(T("Quelle"), T("Sensor, von der Karte gerechnet")) : "",
      c.km_sensor ? this._kv(T("Kilometer-Sensor"), esc(c.km_sensor)) : "",
      isNum(c.km_aktuell) ? kv(T("Von Hand eingetragen"), km(c.km_aktuell)) : "",
      isNum(c.leasing_km_prozent) ? `<div class="bar" style="color:var(--cyan);margin-top:8px"><i style="width:${Math.min(100, c.leasing_km_prozent)}%;background:var(--cyan)"></i></div>` : "",
    ].join("");
    const prognose = [
      isNum(c.leasing_km_je_tag) ? this._kv(T("Dein Schnitt pro Tag"), `${this._num(c.leasing_km_je_tag, 1)} km`) : "",
      kv(T("Hochrechnung bei Rückgabe"), km(c.leasing_km_hochgerechnet)), kv(T("Gegenüber der Erlaubnis"), sgn(c.leasing_km_abweichung_ende)),
      c.leasing_mehr_km > 0 ? this._kv(T("Mehrkilometer"), km(c.leasing_mehr_km)) : "",
      c.leasing_minder_km > 0 ? this._kv(T("Minderkilometer"), km(c.leasing_minder_km)) : "",
      isNum(c.leasing_nachzahlung) && (c.leasing_nachzahlung > 0 || c.leasing_km_abweichung_ende > 0) ? this._kv(T("Erwartete Nachzahlung"), `<span class="${c.leasing_nachzahlung > 0 ? "t-red" : ""}">${this._eur(c.leasing_nachzahlung)}</span>`) : "",
      c.leasing_gutschrift > 0 ? this._kv(T("Erwartete Gutschrift"), `<span class="t-green">${this._eur(c.leasing_gutschrift)}</span>`) : "",
      isNum(c.preis_mehrkm) ? this._kv(T("Preis je Mehrkilometer"), this._eur(c.preis_mehrkm)) : "",
      isNum(c.preis_minderkm) ? this._kv(T("Gutschrift je Minderkilometer"), this._eur(c.preis_minderkm)) : "",
    ].join("");
    let hint = "";
    if (!isNum(c.leasing_km_gefahren)) {
      const r = this._kmReading(c);
      hint = !r.id ? T("Noch kein Kilometerstand: Wähle in Tariffy einen Sensor oder trage den Stand im Vertrag ein.")
        : r.missing ? `${T("Der Kilometer-Sensor")} ${r.id} ${T("gibt es nicht (mehr). Wähle in Tariffy einen anderen Sensor.")}`
        : r.value === null ? `${T("Der Kilometer-Sensor")} ${r.id} ${T("hat gerade keinen Zahlenwert (Zustand:")} ${r.state})`
        : `${T("Der Kilometerstand")} (${this._num(r.value, 0)} km) ${T("liegt unter dem Stand bei Beginn.")}`;
    }
    else if (!isNum(c.leasing_km_hochgerechnet)) hint = T("Die Hochrechnung braucht mindestens zwei Wochen Fahrt.");
    else if (c.leasing_mehr_km > 0) hint = `${T("In diesem Tempo liegst du bei Rückgabe etwa")} ${this._num(c.leasing_km_abweichung_ende, 0)} ${T("km über der Erlaubnis.")}`;
    else if (c.leasing_km_abweichung_ende > 0) hint = `${T("In diesem Tempo liegst du bei Rückgabe etwa")} ${this._num(c.leasing_km_abweichung_ende, 0)} ${T("km über der Erlaubnis, bleibst aber innerhalb der Toleranz. Es fällt keine Nachzahlung an.")}`;
    else if (c.leasing_minder_km > 0) hint = `${T("In diesem Tempo liegst du bei Rückgabe etwa")} ${this._num(-c.leasing_km_abweichung_ende, 0)} ${T("km unter der Erlaubnis.")}`;
    else hint = T("In diesem Tempo bleibst du bei Rückgabe innerhalb der Erlaubnis.");
    return `<div class="cols">${tile(T("Vertrag"), vertrag)}${tile(T("Kosten"), kosten)}${tile(T("Kilometer"), kmTile)}${tile(T("Hochrechnung"), prognose)}</div>
      <div class="hint" style="color:${c.leasing_mehr_km > 0 ? "var(--orange)" : "var(--muted)"}">${esc(hint)}</div>`;
  }

  _loanBody(c) {
    const tile = (label, html) => `<div class="mini"><span class="lbl">${label}</span>${html}</div>`;
    const pct = isNum(c.kredit_tilgung_prozent) ? c.kredit_tilgung_prozent : 0;
    return `<div class="cols">
      ${tile(T("Restschuld"), this._kv(T("Offen"), this._eur(c.kredit_restschuld)) + this._kv(T("Darlehen"), this._eur(c.kredit_summe)) + `<div class="bar" style="color:var(--green);margin-top:8px"><i style="width:${pct}%;background:var(--green)"></i></div>`)}
      ${tile(T("Zins"), this._kv(T("Sollzins"), `${this._num(c.kredit_sollzins)} %`) + this._kv(T("Effektiv"), `${this._num(c.kredit_effektivzins)} %`) + this._kv(T("Zinsen bisher"), this._eur(c.kredit_zinsen_bisher)))}
      ${tile(T("Nächste Rate"), this._kv(T("Datum"), this._date(c.kredit_naechste_zahlung)) + this._kv(T("Betrag"), this._eur(c.kredit_naechste_betrag)) + this._kv(T("Zinsen"), this._eur(c.kredit_zins_anteil)) + this._kv(T("Tilgung"), this._eur(c.kredit_tilgung_anteil)))}
      ${tile(T("Verlauf"), this._kv(T("Raten"), `${c.kredit_zahlungen_geleistet ?? "–"} / ${c.kredit_zahlungen_gesamt ?? "–"}`) + this._kv(T("Gezahlt"), this._eur(c.kredit_gezahlt)) + this._kv(T("Restsumme"), this._eur(c.kredit_restsumme)) + this._kv(T("Ende"), this._date(c.ende)))}
    </div>`;
  }
}

if (!customElements.get("tariffy-glow")) customElements.define("tariffy-glow", TariffyGlow);
window.customCards.push({ type: "tariffy-glow", name: "Tariffy Glow", description: "Glow-Ansicht für Tariffy-Verträge (Übersicht und Vertragsliste)", preview: false });
console.info(`%c TARIFFY-GLOW %c ${VERSION} `, "background:#34d399;color:#0b0d12;font-weight:600", "background:#14171e;color:#f3f5f9");
