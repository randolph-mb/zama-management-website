# 🏢 Zama Management - Moderne Next.js Website

Eine professionelle, vollständig responsive Next.js 14 Website für **Zama Management GmbH & Co. KG** - Ihr Partner für zahnmedizinische Praxisberatung, externe Abrechnung und Führungskräftetraining.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

---

## 📋 Inhaltsverzeichnis

- [Features](#-features)
- [Technologie-Stack](#-technologie-stack)
- [Projektstruktur](#-projektstruktur)
- [Installation](#-installation)
- [Entwicklung](#-entwicklung)
- [Build & Deployment](#-build--deployment)
- [Design-System](#-design-system)
- [Komponenten-Dokumentation](#-komponenten-dokumentation)
- [Performance-Optimierungen](#-performance-optimierungen)
- [Seiten-Übersicht](#-seiten-übersicht)
- [Kontakt](#-kontakt)

---

## ✨ Features

### 🎯 Kernfunktionen
- ✅ **Vollständig responsive** - Optimiert für Mobile, Tablet und Desktop
- ✅ **Static Site Generation (SSG)** - Blitzschnelle Ladezeiten
- ✅ **SEO-optimiert** - Meta-Tags, OpenGraph, strukturierte Daten
- ✅ **Professionelle Typografie** - Oswald & Open Sans Google Fonts
- ✅ **Mobile-First Design** - Touch-optimierte Bedienung
- ✅ **Barrierefreie Navigation** - WCAG 2.1 konform
- ✅ **Performance-optimiert** - < 100KB First Load JS

### 🎨 Design-Features
- **Mobile Hamburger-Menü** - Smooth Overlay-Navigation
- **Fixed Header** - Transparenter Header mit Scroll-Effekt
- **Responsive Images** - Next.js Image-Optimierung
- **Smooth Animations** - Tailwind CSS Transitions
- **Professional Typography** - Hierarchische Schriftgestaltung
- **Touch-optimiert** - Minimum 44px Touch-Targets

### 📄 Implementierte Seiten
- ✅ **Homepage** - Hero-Video, Story, Services, Testimonials
- ✅ **Team** - Strukturierte Team-Profile mit Absatz-Formatierung
- ✅ **Leistungen** - Service-Übersicht
- ✅ **Seminare** - Seminar-Angebote
- ✅ **Kontakt** - Kontaktformular-Layout
- ✅ **Impressum** - Rechtliche Informationen
- ✅ **Datenschutz** - DSGVO-konform

---

## 🚀 Technologie-Stack

### Core
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Sprache**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Typografie
- **Überschriften**: [Oswald](https://fonts.google.com/specimen/Oswald) (400, 500, 700)
- **Body Text**: [Open Sans](https://fonts.google.com/specimen/Open+Sans) (400, 600, 700)

### Build & Deployment
- **Package Manager**: npm
- **Build**: Static Site Generation
- **Image Optimization**: Next.js Image Component
- **CSS Processing**: PostCSS + Autoprefixer

---

## 📁 Projektstruktur

```
zama-management-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root Layout (Header, Footer, Fonts)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Globale Styles + CSS Variablen
│   ├── kontakt/
│   │   └── page.tsx              # Kontaktseite
│   ├── leistungen/
│   │   └── page.tsx              # Leistungen-Übersicht
│   ├── seminare/
│   │   └── page.tsx              # Seminar-Angebote
│   ├── team/
│   │   └── page.tsx              # Team-Profile (strukturiert)
│   ├── impressum/
│   │   └── page.tsx              # Impressum
│   └── datenschutz/
│       └── page.tsx              # Datenschutzerklärung
│
├── components/
│   ├── Header.tsx                # Navigation mit Mobile-Menü
│   ├── Footer.tsx                # Footer mit CTA + Kontakt
│   ├── sections/                 # Homepage-Sections
│   │   ├── HeroSection.tsx       # Hero mit Video-Background
│   │   ├── StorySection.tsx      # Brückenbauer-Story
│   │   ├── IntroSection.tsx      # Intro-Text
│   │   ├── ServicesSection.tsx   # Service-Icons
│   │   ├── VideoSection.tsx      # Video mit Overlay
│   │   └── TestimonialsSection.tsx # Kunden-Zitate
│   └── ui/                       # Wiederverwendbare UI-Komponenten
│       ├── Button.tsx            # Button (Oswald, UPPERCASE)
│       ├── Heading.tsx           # Überschriften (Oswald)
│       ├── Text.tsx              # Body Text (Open Sans)
│       ├── Card.tsx              # Card-Layout
│       └── Container.tsx         # Content-Container
│
├── lib/
│   ├── constants.ts              # App-Konstanten (Routes, Assets, Z-Index)
│   └── design-tokens.ts          # Design-System Tokens
│
├── data/
│   └── index.ts                  # Content-Daten (Services, Team, etc.)
│
├── public/
│   └── assets/                   # Statische Assets
│       ├── Zama/                 # Bilder & Videos
│       └── Team/                 # Team-Fotos
│
├── tailwind.config.js            # Tailwind-Konfiguration
├── next.config.js                # Next.js-Config (Static Export)
├── tsconfig.json                 # TypeScript-Config
└── package.json                  # Dependencies & Scripts
```

---

## 📦 Installation

### Voraussetzungen
- **Node.js**: 18.17+ oder höher
- **npm**: 9+ oder höher

### Setup-Schritte

1. **Repository klonen:**
```bash
git clone https://github.com/randolph-mb/zama-management-website.git
cd zama-management-website
```

2. **Abhängigkeiten installieren:**
```bash
npm install
```

3. **Assets vorbereiten:**
Stelle sicher, dass alle Bilder und Videos im `/public/assets/` Verzeichnis vorhanden sind:
- Logo-Dateien (`logo_zama.png`, `logo_zama_footer.png`)
- Team-Fotos (in `/public/assets/Team/`)
- Hero-Videos (in `/public/assets/Zama/`)

4. **Entwicklungsserver starten:**
```bash
npm run dev
```

Die Anwendung läuft unter: **http://localhost:3000**

---

## 💻 Entwicklung

### Verfügbare Scripts

```bash
npm run dev          # Entwicklungsserver starten (Port 3000)
npm run build        # Produktions-Build erstellen
npm run start        # Produktions-Build lokal testen
npm run lint         # ESLint ausführen
npm run lint:fix     # ESLint mit Auto-Fix
npm run type-check   # TypeScript Type-Checking
```

### Umgebungsvariablen

Erstelle eine `.env.local` Datei für lokale Konfiguration:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Contact Form API
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
```

---

## 🏗️ Build & Deployment

### Statischen Export erstellen

```bash
npm run build
```

Dies erstellt einen vollständig statischen Export im `/out` Verzeichnis.

### Deployment-Optionen

#### 1. **Vercel** (Empfohlen)
```bash
npm install -g vercel
vercel deploy
```

Oder verbinde dein GitHub-Repository direkt mit Vercel für automatische Deployments.

#### 2. **Netlify**
```bash
npm run build
netlify deploy --prod --dir=out
```

#### 3. **Eigener Server**
Kopiere den Inhalt des `/out` Verzeichnisses auf deinen Webserver:
```bash
scp -r out/* user@server:/var/www/html/
```

#### 4. **GitHub Pages**
```bash
npm run build
# Push das /out Verzeichnis zu gh-pages Branch
```

---

## 🎨 Design-System

### Farben

```css
:root {
  /* Core Colors */
  --foreground: #1a1a1a;          /* Dark Gray (Haupthintergrund) */
  --background: #ffffff;           /* White (Seitenhintergrund) */

  /* Text Colors */
  --color-text: #000000;           /* Black (Haupttext) */
  --color-text-white: #ffffff;     /* White (Text auf dunklem BG) */

  /* Brand Colors */
  --color-primary: #c8b3d9;        /* Light Purple (Primärfarbe) */
  --color-accent: #FF9900;         /* Orange (Akzentfarbe) */
}
```

### Typografie-Hierarchie

#### Oswald (Strukturell, Bold)
- **H1-H6**: Bold (700), Line-Height 1.2
- **Navigation**: Medium (500), UPPERCASE
- **Buttons**: Medium (500), UPPERCASE, tracking-wide

#### Open Sans (Lesbar, Body)
- **Body Text**: Regular (400), Line-Height 1.6
- **Beschreibungen**: Regular (400)
- **Zitate**: Regular (400), größere Font-Size

### Breakpoints

```js
// Tailwind Default Breakpoints
sm: '640px'    // Tablet
md: '768px'    // Desktop
lg: '1024px'   // Large Desktop
xl: '1280px'   // Extra Large Desktop
```

### Spacing

Alle Abstände folgen Tailwind's spacing scale (4px Basis):
- `space-y-4` = 16px
- `space-y-6` = 24px
- `space-y-8` = 32px

---

## 🧩 Komponenten-Dokumentation

### Button Component

```tsx
import Button from '@/components/ui/Button';

<Button
  variant="primary"    // primary, secondary, outline, ghost
  size="md"           // sm, md, lg
  onClick={handleClick}
>
  KONTAKT
</Button>
```

**Features:**
- Oswald Font, UPPERCASE
- Touch-optimiert (min 44px)
- Hover & Active States
- Loading State

### Heading Component

```tsx
import Heading from '@/components/ui/Heading';

<Heading
  level="h2"           // h1, h2, h3, h4, h5, h6
  as="h1"             // Optional: Semantic Override
  className="mb-4"
>
  Überschrift
</Heading>
```

**Features:**
- Oswald Font, Bold
- Responsive Font-Sizes
- Tight Line-Height (1.2)

### Container Component

```tsx
import Container from '@/components/ui/Container';

<Container
  size="lg"           // sm, md, lg
  className="py-12"
>
  {children}
</Container>
```

---

## ⚡ Performance-Optimierungen

### Implementiert
- ✅ **Static Site Generation** - Alle Seiten pre-rendered
- ✅ **Image Optimization** - Next.js Image Component
- ✅ **Font Optimization** - Google Fonts via CDN mit preconnect
- ✅ **CSS Optimization** - Tailwind CSS PurgeCSS
- ✅ **Code Splitting** - Automatisch durch Next.js
- ✅ **Lazy Loading** - Videos & Images
- ✅ **Touch Optimization** - `-webkit-tap-highlight-color: transparent`

### Performance-Metriken
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **First Load JS**: ~87KB (gzipped)

### Best Practices
- Minimale JavaScript-Bundle-Size
- CSS-in-JS vermieden (Tailwind stattdessen)
- Keine externen heavy Libraries
- Videos mit `preload="auto"` und `playsInline`

---

## 📄 Seiten-Übersicht

| Seite | Route | Status | Beschreibung |
|-------|-------|--------|--------------|
| **Homepage** | `/` | ✅ Vollständig | Hero-Video, Story, Services, Testimonials |
| **Team** | `/team` | ✅ Vollständig | Strukturierte Team-Profile mit Absätzen |
| **Leistungen** | `/leistungen` | ✅ Vollständig | Service-Übersicht |
| **Seminare** | `/seminare` | ✅ Vollständig | Seminar-Angebote |
| **Kontakt** | `/kontakt` | ✅ Vollständig | Kontaktformular-Layout |
| **Impressum** | `/impressum` | ✅ Vollständig | Rechtliche Informationen |
| **Datenschutz** | `/datenschutz` | ✅ Vollständig | DSGVO-Datenschutzerklärung |

---

## 🔧 Anpassungen

### Farben ändern

Bearbeite `/app/globals.css`:

```css
:root {
  --color-primary: #IHRE_FARBE;
  --color-accent: #IHRE_FARBE;
}
```

### Navigation erweitern

Bearbeite `/data/index.ts`:

```typescript
export const mainMenuItems = [
  { label: 'NEUER_PUNKT', url: '/neue-seite', active: false },
  // ...
];
```

### Neue Seite hinzufügen

1. Erstelle `/app/neue-seite/page.tsx`
2. Füge Route zu Navigation hinzu
3. Erstelle Komponenten nach Bedarf
4. Rebuild für statischen Export

---

## 📱 Mobile Optimierungen

### Implementierte Features
- **Hamburger-Menü** - Fullscreen Overlay-Navigation
- **Touch-Targets** - Minimum 44x44px (Apple/Google Guidelines)
- **Viewport Meta Tag** - Optimale Darstellung
- **Responsive Typography** - Fluid Font-Sizes mit `clamp()`
- **Mobile-First CSS** - Progressive Enhancement
- **Smooth Scrolling** - Native iOS/Android Support
- **Tap Highlight** - Entfernt für App-Gefühl

### Getestete Geräte
- iPhone 12/13/14 (iOS 15+)
- Samsung Galaxy S21+ (Android 12+)
- iPad Pro (iPadOS 15+)
- Google Pixel 6 (Android 13+)

---

## 🔒 Sicherheit & Datenschutz

- **DSGVO-konform** - Datenschutzerklärung vorhanden
- **Keine Cookies** - Ohne Einwilligung
- **Keine Tracker** - Privacy-First
- **Sichere Headers** - Content Security Policy
- **HTTPS-only** - Automatisch durch CDN

---

## 🤝 Mitwirken

Möchtest du zum Projekt beitragen?

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

---

## 📧 Kontakt

**Zama Management GmbH & Co. KG**

- 📍 **Adresse**: Kochgasse 7, 06925 Annaburg, Deutschland
- 📧 **E-Mail**: help@zama-management.de
- 📞 **Telefon**: 0174 - 172 9510
- 🌐 **Website**: [zama-management.de](https://zama-management.de)
- 💼 **LinkedIn**: [Zama Management](https://linkedin.com/company/zama-management)
- 📸 **Instagram**: [@zama_management](https://instagram.com/zama_management)

---

## 📄 Lizenz

© 2025 Zama Management GmbH & Co. KG. Alle Rechte vorbehalten.

Dieses Projekt ist proprietär und darf nicht ohne ausdrückliche Genehmigung von Zama Management GmbH & Co. KG reproduziert, verteilt oder verwendet werden.

---

## 🙏 Credits

- **Design & Entwicklung**: Zama Management Team
- **Fotografie**: Christoph Neumann
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Framework**: [Next.js by Vercel](https://nextjs.org/)

---

## 📚 Weitere Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [TypeScript Dokumentation](https://www.typescriptlang.org/docs)
- [React Dokumentation](https://react.dev/)

---

**Made with ❤️ by Zama Management Team**
