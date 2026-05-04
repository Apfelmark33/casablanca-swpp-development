# Kleinprojekt: Brot & Butter

---

## 1. Idee (Idea)
**Konzept:** Ein minimalistischer, webbasierter Einkaufszettel für WGs und Haushalte.

* **Problem:** In WGs wird oft doppelt gekauft, weil Absprachen in Messengern untergehen oder statische Zettel am Kühlschrank hängen bleiben.
* **Ziel:** Eine Web-App ohne Login-Hürden. Man erstellt eine Liste, teilt den Link und hakt gemeinsam ab.
* **Workshop-Vorteil:** Einfache Domäne, ideal für die Demonstration von State-Management und UI-Design via AI-Prompts.

---

## 2. PRD (Product Requirements Document)
**Ziel:** Klare Anforderungen definieren, um präzise Ergebnisse von der KI zu erhalten.

### Funktionale Anforderungen
* **Listen-Erstellung:** Nutzer können sofort eine Liste starten (ID in der URL).
* **Einträge:** Hinzufügen von Artikeln inklusive Mengenangabe (z. B. "3x Milch").
* **Interaktion:** Artikel per Klick als "im Wagen" markieren (durchgestrichen).
* **Listen-Hygiene:** Ein Button, um alle erledigten Aufgaben mit einem Klick zu entfernen.

### Technische Anforderungen
* **Mobile First:** Optimiert für die Einhand-Bedienung im Supermarkt.
* **Persistence:** Speicherung der Daten im `localStorage`, damit die Liste beim Neuladen erhalten bleibt.
* **Tech Stack:** React, Tailwind CSS, Vite.

---

## 3. User Stories
Aufgabenpakete für die Umsetzung mit GitHub Copilot:

1. **Story:** Als Nutzer möchte ich einen Artikel eingeben können, damit er auf meiner Liste erscheint.
2. **Story:** Als Nutzer möchte ich auf einen Eintrag klicken, um ihn als "gekauft" zu markieren, damit ich den Überblick behalte.
3. **Story:** Als Nutzer möchte ich die URL kopieren können, um die Liste schnell mit meinen Mitbewohnern zu teilen.
4. **Story:** Als Nutzer möchte ich alle erledigten Items löschen können, um die Liste für den nächsten Einkauf vorzubereiten.

---

