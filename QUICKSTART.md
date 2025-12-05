# 🚀 Quick Start - Zama Management Website

## Sofort loslegen in 3 Schritten

### 1. Installation
```bash
cd zama-management
npm install
```

### 2. Bilder hinzufügen (wichtig!)
Platziere diese 3 Bilder im Ordner `public/assets/img/`:
- `logo_zama.png` - Header-Logo
- `logo_zama_footer.png` - Footer-Logo  
- `zama_kontakt.png` - Kontaktseiten-Bild

**Original-URLs zum Download:**
- https://backend.yez-no.com/uploads/ZAM_Logo_agate_d60d129616.png
- https://backend.yez-no.com/uploads/ZAMA_Logo_ash_5d1188318c.png
- https://backend.yez-no.com/uploads/1_Zama_Kontakt_by_Christoph_Neumann_e4825bb5fc.png

### 3. Starten
```bash
# Entwicklungsserver
npm run dev

# Öffne: http://localhost:3000
```

## 📦 Für Produktion

```bash
# Statischen Export erstellen
npm run build

# Export testen
npm run start
```

Der fertige statische Export liegt dann im `/out` Ordner.

## ✅ Was ist implementiert?

### Vollständig:
- ✅ Header mit Navigation
- ✅ Footer mit Kontaktinfos
- ✅ Kontakt-Seite (exakte Nachbildung)
- ✅ Responsive Design
- ✅ SEO-Optimierung
- ✅ TypeScript
- ✅ Tailwind CSS

### Platzhalter (bereit zur Erweiterung):
- 🔲 Homepage
- 🔲 Leistungen
- 🔲 Seminare  
- 🔲 Team
- 🔲 Impressum
- 🔲 Datenschutz

## 📁 Wichtige Dateien

```
zama-management/
├── app/
│   ├── layout.tsx          ← Header & Footer hier
│   ├── page.tsx            ← Homepage
│   ├── kontakt/page.tsx    ← Kontaktseite (fertig!)
│   └── globals.css         ← Farben & Styles
├── components/
│   ├── Header.tsx          ← Navigation
│   └── Footer.tsx          ← Footer
└── public/assets/img/      ← Bilder hier!
```

## 🎨 Farben anpassen

In `app/globals.css`:
```css
:root {
  --color-primary: #2c5f7c;  /* Blau */
  --color-accent: #d4a574;   /* Gold */
}
```

## 📝 Seite hinzufügen

1. Ordner erstellen: `mkdir app/neue-seite`
2. `page.tsx` erstellen (siehe Beispiele in anderen Ordnern)
3. In `components/Header.tsx` zur Navigation hinzufügen

## 🆘 Probleme?

**Bilder werden nicht angezeigt:**
- Prüfe ob Dateien in `public/assets/img/` sind
- Dateinamen müssen exakt übereinstimmen

**TypeScript-Fehler:**
```bash
npm run build  # Zeigt alle Fehler
```

**Port bereits belegt:**
```bash
npm run dev -- -p 3001  # Anderen Port nutzen
```

## 📚 Mehr Infos

- `README.md` - Ausführliche Dokumentation
- `DEVELOPMENT.md` - Entwickler-Leitfaden
- `public/assets/img/README.md` - Bild-Anforderungen

## 🌐 Deployment

**Vercel (empfohlen):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
Drag & Drop des `/out` Ordners nach `npm run build`

**Eigener Server:**
Kopiere `/out` Ordner auf deinen Webserver

---

🎉 **Viel Erfolg mit deiner Website!**

Bei Fragen: help@zama-management.de
