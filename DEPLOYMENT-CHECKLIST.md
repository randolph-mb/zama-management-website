# ✅ Deployment-Checkliste - Zama Management Website

## Vor dem ersten Deployment

### 1. Bilder ersetzen ⚠️ WICHTIG
- [ ] `public/assets/img/logo_zama.png` - Header-Logo hochgeladen
- [ ] `public/assets/img/logo_zama_footer.png` - Footer-Logo hochgeladen
- [ ] `public/assets/img/zama_kontakt.png` - Kontaktseiten-Hero-Bild hochgeladen
- [ ] Alle Bilder sind web-optimiert (komprimiert)
- [ ] Bildgrößen sind angemessen (nicht zu groß)

### 2. Inhalte ergänzen
- [ ] Homepage-Inhalte hinzugefügt
- [ ] Leistungen-Seite ausgefüllt
- [ ] Seminare-Seite ausgefüllt
- [ ] Team-Seite mit Mitarbeitern
- [ ] Impressum vollständig (rechtlich erforderlich!)
- [ ] Datenschutzerklärung vollständig (rechtlich erforderlich!)

### 3. SEO & Metadata
- [ ] Alle Seiten haben passende Titel
- [ ] Alle Seiten haben Meta-Beschreibungen
- [ ] Open Graph Tags konfiguriert
- [ ] Favicon vorhanden (`public/favicon.ico`)
- [ ] robots.txt erstellt (optional)
- [ ] sitemap.xml erstellt (optional)

### 4. Funktionalität testen
- [ ] Alle Links funktionieren
- [ ] Navigation funktioniert auf allen Seiten
- [ ] Footer-Links funktionieren
- [ ] Social-Media-Links sind korrekt
- [ ] E-Mail-Links öffnen E-Mail-Programm
- [ ] Telefon-Links funktionieren auf Mobilgeräten
- [ ] Responsive auf Mobile getestet
- [ ] Responsive auf Tablet getestet
- [ ] Responsive auf Desktop getestet

### 5. Performance
- [ ] Bilder sind optimiert/komprimiert
- [ ] Build läuft ohne Fehler: `npm run build`
- [ ] Keine Console-Errors im Browser
- [ ] Ladezeit ist akzeptabel (<3 Sekunden)

### 6. Rechtliches (Deutschland)
- [ ] Impressum ist vollständig und korrekt
- [ ] Datenschutzerklärung entspricht DSGVO
- [ ] Cookie-Banner (falls erforderlich)
- [ ] Kontaktdaten sind aktuell

## Build & Deployment

### Lokaler Test
```bash
# Build erstellen
npm run build

# Build lokal testen
npm run start

# Im Browser öffnen: http://localhost:3000
```

### Checkliste vor Deployment
- [ ] Build erfolgreich ohne Errors
- [ ] Alle Seiten im `/out` Ordner vorhanden
- [ ] Assets sind im `/out` Ordner
- [ ] Lokaler Test erfolgreich

### Deployment durchführen

#### Option 1: Vercel
```bash
npm i -g vercel
vercel login
vercel
```
- [ ] Vercel-Projekt erstellt
- [ ] Domain konfiguriert
- [ ] SSL-Zertifikat aktiv

#### Option 2: Netlify
1. [ ] Bei Netlify einloggen
2. [ ] Neues Projekt erstellen
3. [ ] `/out` Ordner hochladen
4. [ ] Domain konfigurieren
5. [ ] SSL-Zertifikat aktivieren

#### Option 3: Eigener Server
- [ ] `/out` Ordner auf Server kopiert
- [ ] Webserver konfiguriert (Apache/Nginx)
- [ ] Domain auf Server zeigt
- [ ] SSL-Zertifikat installiert (Let's Encrypt)

## Nach dem Deployment

### Finaler Check
- [ ] Website unter Domain erreichbar
- [ ] HTTPS funktioniert (kein SSL-Fehler)
- [ ] Alle Seiten laden korrekt
- [ ] Bilder werden angezeigt
- [ ] Navigation funktioniert
- [ ] Footer-Links funktionieren
- [ ] Mobile-Ansicht korrekt
- [ ] Tablet-Ansicht korrekt
- [ ] Desktop-Ansicht korrekt

### SEO & Monitoring
- [ ] Google Search Console eingerichtet
- [ ] Website bei Google indexiert
- [ ] Sitemap in Search Console eingereicht
- [ ] Google Analytics eingerichtet (optional)
- [ ] Uptime-Monitoring eingerichtet (optional)

### Marketing & Social Media
- [ ] Social-Media-Profile aktualisiert
- [ ] Website-Link in Instagram/LinkedIn/etc.
- [ ] Google My Business aktualisiert
- [ ] Newsletter mit neuer Website versendet (falls vorhanden)

## Wartung & Updates

### Regelmäßige Checks (monatlich)
- [ ] Alle Links funktionieren noch
- [ ] Kontaktdaten aktuell
- [ ] Bilder laden korrekt
- [ ] SSL-Zertifikat gültig
- [ ] Keine Console-Errors

### Updates (bei Bedarf)
- [ ] Inhalte aktualisieren
- [ ] Neue Seminare hinzufügen
- [ ] Team-Mitglieder aktualisieren
- [ ] Neuigkeiten posten

### Technische Wartung (alle 3-6 Monate)
```bash
# Dependencies aktualisieren
npm outdated
npm update

# Rebuild
npm run build
```

## Notfall-Plan

### Website nicht erreichbar
1. [ ] Domain-Status prüfen
2. [ ] SSL-Zertifikat prüfen
3. [ ] Hosting-Status prüfen
4. [ ] DNS-Einstellungen prüfen

### Fehler auf der Website
1. [ ] Browser-Console auf Errors prüfen
2. [ ] Build neu erstellen
3. [ ] Deployment wiederholen
4. [ ] Lokalen Test durchführen

### Support kontaktieren
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- Eigener Hoster: Support-Kontakt

## Ressourcen & Links

### Dokumentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

### Tools
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- SSL-Check: https://www.ssllabs.com/ssltest/

### Rechtliches (Deutschland)
- DSGVO-Generatoren: https://datenschutz-generator.de/
- Impressums-Generator: https://www.e-recht24.de/impressum-generator.html

---

## 📋 Schnell-Checkliste (Kopiervorlage)

**Pre-Deployment:**
- [ ] Bilder ersetzt
- [ ] Inhalte vollständig
- [ ] Build erfolgreich
- [ ] Lokal getestet

**Deployment:**
- [ ] Live geschaltet
- [ ] Domain aktiv
- [ ] SSL aktiv
- [ ] Funktionstest OK

**Post-Deployment:**
- [ ] SEO eingerichtet
- [ ] Social Media aktualisiert
- [ ] Team informiert
- [ ] Dokumentiert

---

🎉 **Fertig! Website ist live!**

Letzte Aktualisierung: 2025
Nächster Check: ___________
