# Zama Management - Next.js 14 Static Website

Eine vollständig statische Next.js 14-Anwendung für Zama Management GmbH & Co. KG, die das Original-Design und die Struktur der Website nachbildet.

## 🚀 Technologie-Stack

- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build**: Static Site Generation (SSG)

## 📁 Projektstruktur

```
zama-management/
├── app/
│   ├── layout.tsx          # Root Layout mit Header & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Globale Styles mit CSS-Variablen
│   ├── kontakt/
│   │   └── page.tsx        # Kontaktseite (vollständig implementiert)
│   ├── leistungen/
│   │   └── page.tsx        # Leistungen (Platzhalter)
│   ├── seminare/
│   │   └── page.tsx        # Seminare (Platzhalter)
│   ├── team/
│   │   └── page.tsx        # Team (Platzhalter)
│   ├── impressum/
│   │   └── page.tsx        # Impressum
│   └── datenschutz/
│       └── page.tsx        # Datenschutz
├── components/
│   ├── Header.tsx          # Navigation Header
│   └── Footer.tsx          # Footer mit Kontaktinfos
├── public/
│   └── assets/
│       └── img/            # Bildplatzhalter
├── tailwind.config.js      # Tailwind mit Custom Properties
├── next.config.js          # Next.js Konfiguration (Static Export)
└── package.json
```

## 🎨 Design-Features

### CSS-Variablen
Die Anwendung nutzt CSS Custom Properties für konsistentes Theming:

```css
--foreground: #1a1a1a
--background: #ffffff
--color-text: #333333
--color-text-white: #ffffff
--color-primary: #2c5f7c
--color-accent: #d4a574
```

### Komponenten
- **Header**: Fixed Navigation mit Logo und Menüpunkten
- **Footer**: Dreispaltiges Layout mit Kontaktinformationen, Social Media und rechtlichen Links
- **Kontakt-Seite**: Zweispaltiges Layout mit Kontaktinformationen und Hero-Image

## 📦 Installation

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Setup

1. **Abhängigkeiten installieren:**
```bash
npm install
```

2. **Bilder hinzufügen:**
Platzieren Sie die folgenden Bilder im Verzeichnis `/public/assets/img/`:
- `logo_zama.png` - Header-Logo
- `logo_zama_footer.png` - Footer-Logo
- `zama_kontakt.png` - Kontaktseiten-Hero-Image

Die Original-URLs finden Sie in `/public/assets/img/README.md`

3. **Entwicklungsserver starten:**
```bash
npm run dev
```

Die Anwendung läuft unter: `http://localhost:3000`

## 🏗️ Build für Produktion

### Statischen Export erstellen:
```bash
npm run build
```

Dies erstellt einen vollständig statischen Export im `/out` Verzeichnis.

### Statischen Build lokal testen:
```bash
npm run start
```

## 📝 Seiten-Übersicht

### Vollständig implementiert:
- ✅ **Kontakt** (`/kontakt`) - Exakte Nachbildung der Original-Seite

### Platzhalter (bereit zur Erweiterung):
- 🔲 **Homepage** (`/`)
- 🔲 **Leistungen** (`/leistungen`)
- 🔲 **Seminare** (`/seminare`)
- 🔲 **Team** (`/team`)
- 🔲 **Impressum** (`/impressum`)
- 🔲 **Datenschutz** (`/datenschutz`)

## 🎯 Features

### Implementiert:
- ✅ Static Site Generation (SSG)
- ✅ Responsive Design mit Tailwind CSS
- ✅ TypeScript für Type Safety
- ✅ SEO-optimierte Metadaten
- ✅ Barrierefreie Navigation
- ✅ Lucide Icons anstelle von Font Awesome
- ✅ Next.js Image-Optimierung (für Entwicklung)
- ✅ Fixed Header mit Scroll-Effekt
- ✅ Footer mit Social Media Links
- ✅ Kontaktformular-Seite

### Nicht enthalten (vom Original):
- ❌ Backend-API-Aufrufe
- ❌ Dynamische Daten
- ❌ Externe CMS-Integration

## 🔧 Anpassungen

### Farben ändern:
Bearbeiten Sie `/app/globals.css`:
```css
:root {
  --color-primary: #IHRE_FARBE;
  --color-accent: #IHRE_FARBE;
}
```

### Navigation erweitern:
Bearbeiten Sie `/components/Header.tsx`:
```typescript
const menuItems = [
  { label: 'NEUER_PUNKT', url: '/neue-seite' },
  // ...
];
```

### Footer anpassen:
Bearbeiten Sie `/components/Footer.tsx`

## 📝 Inhalte bearbeiten (Seminare)

Die Inhalte der Seminar-Seite können ohne Programmierkenntnisse geändert werden. Alle Texte und Einstellungen befinden sich in einer zentralen Datei:

**Datei:** `/data/seminars.ts`

### 1. Banner-Event ändern (z.B. Netzwerktreffen)
Suche nach `export const currentEvent`. Hier kannst du anpassen:
- `badge`: Der kleine Text über der Überschrift (z.B. "Demnächst!")
- `title`: Die große Überschrift
- `dateLocation`: Datum und Ort
- `video`: Pfad zum Hintergrundvideo

### 2. Seminare bearbeiten
Suche nach `export const seminars`. Jedes Seminar ist ein Block `{ ... }`:
- `shortDescription`: Kurzer Text für die Übersichtskarte.
- `fullDescription`: Langer Text für die Detail-Seite.
- `details`:
  - `duration`: Dauer (z.B. "1 Tag")
  - `price`: Preisinfo
  - `format`: Format (z.B. "Präsenz-Seminar")

**Wichtig:** Nach dem Speichern der Datei werden die Änderungen automatisch übernommen.

Die Anwendung ist vollständig responsive:
- **Mobile**: Optimiert für Smartphones
- **Tablet**: Angepasstes Layout für mittlere Bildschirme
- **Desktop**: Volle Breite mit maximaler Containerbreite

## 🌐 Deployment

### Vercel (empfohlen):
```bash
vercel deploy
```

### Netlify:
```bash
netlify deploy --prod --dir=out
```

### Eigener Server:
Kopieren Sie den Inhalt des `/out` Verzeichnisses auf Ihren Webserver.

## 📧 Kontakt

**Zama Management GmbH & Co. KG**
- 📍 Kochgasse 7, 06925 Annaburg, Germany
- 📧 help@zama-management.de
- 📞 0174 - 172 9510

## 📄 Lizenz

© 2025 Zama-Management. Alle Rechte vorbehalten.

## 🛠️ Entwicklung

### Nützliche Befehle:
```bash
npm run dev      # Entwicklungsserver starten
npm run build    # Produktions-Build erstellen
npm run start    # Produktions-Build lokal testen
npm run lint     # Code-Linting
```

### Technische Hinweise:
- Die Anwendung nutzt Next.js 14 App Router
- Alle Seiten werden als statische HTML-Dateien generiert
- Images sind für den statischen Export als `unoptimized` konfiguriert
- TypeScript-Strict-Mode ist aktiviert

## 🔄 Nächste Schritte

1. Echte Bilder in `/public/assets/img/` einfügen
2. Inhalte für Platzhalter-Seiten ergänzen
3. Weitere Unterseiten nach Bedarf hinzufügen
4. SEO-Metadaten für alle Seiten optimieren
5. Optional: Kontaktformular-Funktionalität hinzufügen
