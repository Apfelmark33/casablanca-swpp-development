# AI-Driven Development — Workshop Repo

Dieses Repository ist ein kompletter Starter für deinen **4h Workshop**  
**Titel:** AI-Driven Development  
**Zielgruppe:** Schüler einer IT-HAK

## Ziel des Workshops

Die Teilnehmer sehen den kompletten Flow:

1. **Idee**
2. **PRD**
3. **User Stories**
4. **Umsetzung in Code**
5. **kurzes Refactoring / Verbessern mit AI**

Dabei werden folgende Tools verwendet:

- **ChatGPT (Free)**
- **GitHub Copilot (Free)**
- **VS Code**
- **Slidev** für die Präsentation

---

## Repo-Struktur

```text
ai-driven-development
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ presentation
│  ├─ package.json
│  └─ slides.md
├─ prompts
│  ├─ 01-idea-to-prd.md
│  ├─ 02-prd-to-user-stories.md
│  ├─ 03-user-story-to-react-app.md
│  └─ 04-refactor-and-improve.md
├─ examples
│  ├─ idea.md
│  ├─ prd.md
│  ├─ user-stories
│  │  ├─ user-story-1.md
│  │  ├─ user-story-2.md
│  │  └─ user-story-3.md
│  └─ app
│     └─ react-app
│        ├─ index.html
│        ├─ package.json
│        ├─ vite.config.js
│        └─ src
│           ├─ App.jsx
│           ├─ index.css
│           └─ main.jsx
└─ .gitignore
```

---

## Workshop-Flow

### Teil 1 — Idee
Du zeigst `examples/idea.md`

### Teil 2 — PRD
Du verwendest ChatGPT, um aus der Idee ein PRD zu erzeugen oder zu verbessern.  
Vergleich mit `examples/prd.md`

### Teil 3 — User Stories
Du erklärst User Stories und leitest daraus kleine umsetzbare Aufgaben ab.  
Beispiel in `examples/user-stories/`

### Teil 4 — App bauen
Du verwendest Copilot in VS Code und baust die App in `examples/app/react-app`

---

## Workshop-Ablauf (Vorschlag für 4h)

- **00:00 – 00:20** Intro: Was ist AI-Driven Development?
- **00:20 – 00:45** Von der Idee zum PRD
- **00:45 – 01:15** PRDs verstehen
- **01:15 – 01:30** Pause
- **01:30 – 02:00** User Stories verstehen
- **02:00 – 03:00** App mit React + Copilot bauen
- **03:00 – 03:30** Verbessern, testen, UI polish
- **03:30 – 04:00** Fragen & Recap

---

## Präsentation starten

```bash
cd presentation
npm install
npm run dev
```

---

## Beispiel-App starten

```bash
cd examples/app/react-app
npm install
npm run dev
```

---

## Gute Kernbotschaften für den Workshop

- **AI ersetzt Entwickler nicht.**
- **AI beschleunigt Entwicklung.**
- **Gute Ergebnisse brauchen gute Anforderungen.**
- **PRD und User Stories machen AI deutlich nützlicher.**
- **Mit wenig Code kann man heute schnell funktionierende Produkte bauen.**

---

## Demo-Ideen im Workshop

### ChatGPT Demo
- Aus Idee ein PRD erzeugen
- PRD verbessern
- User Stories erzeugen
- Akzeptanzkriterien verbessern
- Nächste Schritte ableiten

### Copilot Demo
- React-Komponente generieren
- Formular + Liste erstellen
- Local Storage einbauen
- Done-Status hinzufügen
- UI verbessern

---

## Tipp für die Durchführung

Die Schüler sollten nicht das Gefühl bekommen, dass AI „magisch alles alleine macht“.  
Zeige stattdessen klar:

**Mensch gibt Richtung vor → AI hilft bei Struktur und Umsetzung**

