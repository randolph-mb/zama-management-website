# Entwicklungs-Leitfaden - Zama Management Website

## 🎯 Projektübersicht

Dieses Projekt ist eine exakte statische Nachbildung der Zama Management Website, erstellt mit Next.js 14 und dem App Router. Die Anwendung ist vollständig typensicher, responsiv und für SEO optimiert.

## 🏗️ Architektur

### App Router Struktur
```
app/
├── layout.tsx              # Root Layout (Header + Footer)
├── page.tsx                # Homepage
├── globals.css             # Globale Styles
└── [route]/
    └── page.tsx            # Unterseiten
```

### Komponenten-Architektur
- **Server Components**: Alle Seiten sind Server Components (Standard in Next.js 14)
- **Client Components**: Nur bei Bedarf für Interaktivität
- **Layouts**: Verschachtelte Layouts für gemeinsame UI-Elemente

## 📐 Design-System

### Farbpalette
```
Primär:     #2c5f7c (Dunkelblau)
Akzent:     #d4a574 (Gold)
Text:       #333333 (Dunkelgrau)
Hintergrund:#ffffff (Weiß)
Foreground: #1a1a1a (Fast Schwarz)
```

### Typografie
- Font: System Fonts mit Satoshi als Custom Font (über CSS-Variable)
- Basis-Größe: 16px
- Überschriften: Bold, größere Schriftgrößen
- Fließtext: Regular, optimale Zeilenhöhe

### Spacing
- Tailwind-Standard: 4px-Inkrement (1 = 4px)
- Container: max-w-7xl (1280px)
- Padding: px-4 (Standard), sm:px-6, lg:px-8
- Sections: py-16 oder py-20

## 🔧 Entwickler-Workflows

### Neue Seite hinzufügen

1. **Verzeichnis erstellen:**
```bash
mkdir app/neue-seite
```

2. **page.tsx erstellen:**
```typescript
export default function NeueSeitePage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-[var(--background)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-6">
            Titel
          </h1>
          {/* Inhalt */}
        </div>
      </section>
    </main>
  );
}
```

3. **Metadata hinzufügen (optional):**
```typescript
export const metadata = {
  title: 'Seitentitel - Zama Management',
  description: 'Beschreibung...',
};
```

4. **Navigation aktualisieren:**
In `components/Header.tsx`:
```typescript
const menuItems = [
  // ... bestehende Items
  { label: 'NEUE SEITE', url: '/neue-seite' },
];
```

### Neue Komponente erstellen

1. **Datei erstellen:**
```bash
touch components/NeueKomponente.tsx
```

2. **Komponente implementieren:**
```typescript
interface NeueKomponenteProps {
  title: string;
  // weitere Props
}

export default function NeueKomponente({ title }: NeueKomponenteProps) {
  return (
    <div>
      <h2>{title}</h2>
      {/* Inhalt */}
    </div>
  );
}
```

3. **In Seite importieren:**
```typescript
import NeueKomponente from '@/components/NeueKomponente';
```

### Icons verwenden

Lucide Icons sind bereits installiert:

```typescript
import { Icon, AnotherIcon } from 'lucide-react';

<Icon className="w-5 h-5 text-[var(--color-primary)]" />
```

Verfügbare Icons: https://lucide.dev/icons/

### Bilder hinzufügen

1. **Bild in public/ ablegen:**
```
public/assets/img/mein-bild.jpg
```

2. **Next.js Image verwenden:**
```typescript
import Image from 'next/image';

<Image
  src="/assets/img/mein-bild.jpg"
  alt="Beschreibung"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

Für Hero-Images mit fill:
```typescript
<div className="relative h-[500px] w-full">
  <Image
    src="/assets/img/hero.jpg"
    alt="Hero"
    fill
    className="object-cover"
  />
</div>
```

## 🎨 Styling-Guidelines

### Tailwind-Klassen verwenden
```typescript
// Gut
<div className="flex items-center justify-between px-4 py-2">

// Vermeiden (inline styles)
<div style={{ display: 'flex', padding: '8px' }}>
```

### CSS-Variablen nutzen
```typescript
// Farben
className="bg-[var(--background)] text-[var(--color-text)]"

// Custom Properties in globals.css definieren
:root {
  --custom-spacing: 2rem;
}
```

### Responsive Design
```typescript
// Mobile-First Approach
<div className="
  text-sm          // Mobile
  md:text-base     // Tablet
  lg:text-lg       // Desktop
">
```

### Hover & Transitions
```typescript
className="
  hover:text-[var(--color-accent)]
  transition
  duration-300
"
```

## 🔍 SEO & Metadata

### Seiten-Metadata
```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seitentitel - Zama Management',
  description: 'Detaillierte Beschreibung für SEO...',
  openGraph: {
    title: 'OG Titel',
    description: 'OG Beschreibung',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

### Strukturierte Daten
Für Local Business (optional in layout.tsx):
```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Zama Management GmbH & Co. KG",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kochgasse 7",
    "addressLocality": "Annaburg",
    "postalCode": "06925",
    "addressCountry": "DE"
  },
  "telephone": "+491741729510",
  "email": "help@zama-management.de"
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

## 🧪 Testing

### Manuelles Testen
1. **Entwicklungsserver:**
```bash
npm run dev
```

2. **Alle Seiten testen:**
- Homepage: http://localhost:3000
- Kontakt: http://localhost:3000/kontakt
- Weitere Seiten...

3. **Responsive Testing:**
- Chrome DevTools (F12)
- Verschiedene Geräte-Simulationen

### Build Testing
```bash
npm run build
npm run start
```

### Checkliste:
- [ ] Alle Links funktionieren
- [ ] Bilder laden korrekt
- [ ] Responsive auf allen Breakpoints
- [ ] Navigation funktioniert
- [ ] Footer-Links funktionieren
- [ ] Kein Console-Error

## 📦 Deployment

### Build erstellen
```bash
npm run build
```

### Verzeichnisstruktur nach Build
```
out/
├── index.html
├── kontakt.html
├── leistungen.html
├── _next/
│   └── static/
└── assets/
```

### Deployment-Optionen

#### 1. Vercel (Zero-Config)
```bash
npm i -g vercel
vercel login
vercel
```

#### 2. Netlify
```bash
npm run build
# Drag & Drop /out Ordner in Netlify Dashboard
```

#### 3. GitHub Pages
```bash
# In next.config.js:
basePath: '/repo-name'

npm run build
# /out Ordner in gh-pages Branch pushen
```

#### 4. Eigener Server
```bash
# /out Ordner auf Server kopieren
scp -r out/* user@server:/var/www/html/
```

## 🐛 Troubleshooting

### Häufige Probleme

**Problem: Bilder werden nicht angezeigt**
- Lösung: Prüfen ob Dateien in `/public/assets/img/` sind
- Pfade beginnen mit `/` nicht mit `./`

**Problem: CSS-Variablen funktionieren nicht**
- Lösung: Variablen in `app/globals.css` definiert?
- Verwendung: `bg-[var(--variable-name)]`

**Problem: TypeScript-Fehler**
- Lösung: `npm run build` ausführen
- Type-Definitionen prüfen

**Problem: Seite lädt nicht nach Build**
- Lösung: `next.config.js` auf `output: 'export'` prüfen
- Image-Optimierung muss `unoptimized: true` sein

### Logs & Debugging

**Entwicklung:**
```bash
npm run dev -- --turbo  # Schnellerer Dev-Server
```

**Verbose Build:**
```bash
npm run build -- --debug
```

**Type-Checking:**
```bash
npx tsc --noEmit
```

## 📚 Weitere Ressourcen

- [Next.js 14 Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Beitragen

### Code-Standards
- TypeScript strict mode
- ESLint-Regeln befolgen
- Komponenten dokumentieren
- Aussagekräftige Commit-Messages

### Git Workflow
```bash
git checkout -b feature/neue-funktion
# Änderungen vornehmen
git add .
git commit -m "feat: Neue Funktion hinzugefügt"
git push origin feature/neue-funktion
```

## 📞 Support

Bei Fragen oder Problemen:
- Email: help@zama-management.de
- Tel: 0174 - 172 9510
