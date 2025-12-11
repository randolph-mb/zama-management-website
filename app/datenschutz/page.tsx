export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-[var(--background)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-10">Datenschutzerklärung</h1>

          <div className="text-[var(--color-text)] space-y-8 max-w-4xl text-lg leading-relaxed">

            {/* Datenschutz auf einen Blick */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold mb-2">Datenerfassung auf dieser Website</h3>
              <p className="mb-2"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p className="mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="mb-2"><strong>Wie erfassen wir Ihre Daten?</strong></p>
              <p className="mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <p className="mb-2"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
              <p className="mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h3 className="text-xl font-semibold mb-2">Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. Hosting</h2>
              <h3 className="text-xl font-semibold mb-2">Externes Hosting</h3>
              <p className="mb-4">
                Diese Website wird bei folgendem Dienstleister gehostet:<br />
                STRATO AG<br />
                Pascalstraße 10<br />
                10587 Berlin
              </p>
              <p>
                Ein Auftragsverarbeitungsvertrag wurde geschlossen (Art. 28 DSGVO).
              </p>
            </div>

            {/* Allgemeine Hinweise und Pflichtinformationen */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <div className="mb-4">
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="mt-2">
                  Anja Gutzmer<br />
                  Kochgasse 7<br />
                  06925 Annaburg
                </p>
                <p className="mt-2">
                  Telefon: 0174 7729510<br />
                  E-Mail: help@zama-management.de
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-2">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>

              <h3 className="text-xl font-semibold mb-2">Datenweitergabe in Drittländer</h3>
              <p className="mb-4">
                Sofern wir Tools von Unternehmen mit Sitz in Drittstaaten (z.B. USA) einsetzen, weisen wir in den Details darauf hin.
              </p>

              <h3 className="text-xl font-semibold mb-2">Ihre Rechte</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Widerruf Ihrer Einwilligung zur Datenverarbeitung</li>
                <li>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</li>
                <li>Beschwerderecht bei der zuständigen Aufsichtsbehörde</li>
                <li>Recht auf Datenübertragbarkeit</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
              </p>
            </div>

            {/* Datenerfassung auf dieser Website */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-semibold mb-2">Cookies</h3>
              <p className="mb-4">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                <br />
                Diese Website nutzt einen Cookie-Einwilligungs-Manager von Usercentrics, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät einzuholen und diese datenschutzkonform zu dokumentieren.
              </p>

              <h3 className="text-xl font-semibold mb-2">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="mb-4">
                Wenn Sie uns kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung bei uns gespeichert.
              </p>

              <h3 className="text-xl font-semibold mb-2">Terminvereinbarung mit Calendly</h3>
              <p className="mb-4">
                Wir nutzen Calendly für die Terminbuchung. Anbieter ist die Calendly LLC, Atlanta, Georgia, USA. Wenn Sie einen Termin buchen, werden die eingegebenen Daten an Calendly übertragen.
                <br />
                Weitere Informationen entnehmen Sie der Datenschutzerklärung von Calendly: <a href="https://calendly.com/pages/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-opacity-80">https://calendly.com/pages/privacy</a>.
              </p>
            </div>

            {/* Plugins und Tools */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Plugins und Tools</h2>
              <h3 className="text-xl font-semibold mb-2">Google Web Fonts (lokal)</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
              </p>
            </div>

            {/* Soziale Medien */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Unsere Social-Media-Auftritte</h2>

              <h3 className="text-xl font-semibold mb-2">Datenverarbeitung durch soziale Netzwerke</h3>
              <p className="mb-4">
                Wir unterhalten öffentlich zugängliche Profile in sozialen Netzwerken. Die im Einzelnen von uns genutzten sozialen Netzwerke finden Sie weiter unten.
              </p>

              <h3 className="text-xl font-semibold mb-2">Plattformen im Detail</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Facebook:</strong> Datenschutzerklärung: <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="underline">https://www.facebook.com/about/privacy/</a></li>
                <li><strong>Instagram:</strong> Datenschutzerklärung: <a href="https://instagram.com/about/legal/privacy/" target="_blank" rel="noopener noreferrer" className="underline">https://instagram.com/about/legal/privacy/</a></li>
                <li><strong>LinkedIn:</strong> Datenschutzerklärung: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">https://www.linkedin.com/legal/privacy-policy</a></li>
                <li><strong>WhatsApp:</strong> Wir nutzen WhatsApp für die Kommunikation. Anbieter ist die WhatsApp Ireland Limited.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
