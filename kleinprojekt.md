# Projekt-Idee: Brot & Butter

## Produkt-Idee
Ein extrem reduzierter, webbasierter Einkaufszettel für Haushalte oder WGs.

## Problem
In WGs oder Partnerschaften wird oft doppelt gekauft oder das Wichtigste vergessen, weil Absprachen via Messenger im Chat-Verlauf untergehen oder statische Zettel am Kühlschrank hängen bleiben.

## Ziel
Eine Web-App, die ohne Login-Hürden funktioniert. Man erstellt eine Liste, teilt den Link, und jeder kann in Echtzeit Dinge hinzufügen oder wegstreichen.

---

## Kern-Funktionen (Use Cases)
* **Item hinzufügen:** Schnelltext-Feld für Lebensmittel oder Haushaltswaren.
* **Mengenangabe:** Optionales Feld für "wie viel" (z. B. 3x Milch).
* **Abhaken:** Artikel per Klick als "im Wagen" markieren.
* **Liste leeren:** Alle erledigten Aufgaben mit einem Klick entfernen.
* **Teilen:** Ein einfacher Button zum Kopieren der eindeutigen URL.

---

## Warum diese Idee für den Workshop funktioniert
* **Zustands-Management:** Ideal, um zu zeigen, wie eine App reagiert, wenn sich Daten ändern (State-Handling).
* **Echtzeit-Aspekt:** Man kann wunderbar demonstrieren, wie KI beim Schreiben von WebSockets oder einfachen Polling-Mechanismen hilft.
* **UI/UX-Fokus:** Da die Logik simpel ist, bleibt im Workshop Zeit, um über Design-Prompts (CSS/Tailwind) zu sprechen.
* **Mobile First:** Das Projekt zwingt die Teilnehmer dazu, direkt für das Smartphone zu denken – da, wo man den Einkaufszettel tatsächlich benutzt.

---

## Technische Konzepte (für die Demo)
* **Frontend:** HTML/JS mit einem CSS-Framework (z. B. Tailwind CSS).
* **Daten:** Lokale Speicherung (`localStorage`) für den Anfang, später eine einfache NoSQL-Anbindung.
* **KI-Potenzial:** "Generiere mir eine Liste mit Zutaten für Lasagne und füge sie der App hinzu."
