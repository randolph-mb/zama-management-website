# Zama Management Website - Asset Platzhalter

## Benötigte Assets

Die folgenden Bild- und Videodateien müssen in die entsprechenden Verzeichnisse eingefügt werden:

### Bilder (`public/assets/img/`)

1. **logo_zama.png** - Hauptlogo (Header)
   - Verwendung: Header-Navigation
   - Empfohlene Größe: 120x40px oder höher

2. **logo_zama_footer.png** - Footer-Logo
   - Verwendung: Footer
   - Empfohlene Größe: 120x40px oder höher

3. **hero_hands.jpg** - Hero-Hintergrundbild
   - Verwendung: Hero-Section (vollflächig)
   - Motiv: Hände die sich stapeln (Teamwork-Symbolik)
   - Empfohlene Größe: Mindestens 1920x1080px

4. **brueckenbauer.jpg** - Brückenbauer-Bild
   - Verwendung: Story-Section (links)
   - Motiv: Person mit Schattenwurf, schwarz-weiß Ästhetik
   - Empfohlene Größe: Hochformat, mindestens 800x1200px

5. **icon_yellow.png** - Service-Icon (Gelb)
   - Verwendung: Externe Abrechnung
   - Motiv: Zahn-Icon in Gelb
   - Empfohlene Größe: 100x140px (transparent)

6. **icon_lavender.png** - Service-Icon (Lila/Flieder)
   - Verwendung: Hygiene- und Praxismanagement
   - Motiv: Zahn-Icon in Lila/Flieder
   - Empfohlene Größe: 100x140px (transparent)

7. **icon_green.png** - Service-Icon (Grün)
   - Verwendung: Team- und Führungskräftetraining
   - Motiv: Zahn-Icon in Grün
   - Empfohlene Größe: 100x140px (transparent)

8. **dental_vials.jpg** - Praxisbegleiter-Hintergrundbild
   - Verwendung: Video-Section
   - Motiv: Medizinische Glasampullen/Röhrchen mit Flüssigkeit
   - Empfohlene Größe: Mindestens 1920x1080px

9. **testimonial_avatar.jpg** - Testimonial-Avatar
   - Verwendung: Testimonials-Section
   - Empfohlene Größe: 100x100px (quadratisch)

### Videos (`public/assets/videos/`)

Die Website ist derzeit für Bilder konfiguriert. Falls Videos gewünscht sind:

1. **hero_video.mp4** - Hero-Hintergrundvideo (optional)
2. **seminare_video.mp4** - Praxisbegleiter-Video (optional)

## Hinweise

- Alle Pfade sind bereits im Code konfiguriert
- Die Website funktioniert auch ohne die Assets (zeigt dann Platzhalter an)
- Für optimale Performance sollten Bilder vor dem Upload komprimiert werden
- Videos sollten in WebM-Format für bessere Browser-Kompatibilität konvertiert werden

## Nächste Schritte

1. Assets in die entsprechenden Verzeichnisse kopieren
2. `npm install` ausführen (falls noch nicht geschehen)
3. `npm run dev` zum Testen
4. `npm run build` für Production-Build
