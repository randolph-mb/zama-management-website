export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-[var(--background)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-10">Impressum</h1>

          <div className="text-[var(--color-text)] space-y-8 max-w-3xl">
            {/* Angaben gemäß § 5 TMG */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                Zama Management GmbH & Co. KG<br />
                Kochgasse 7<br />
                06925 Annaburg
              </p>
              <p className="mt-2">
                Vertreten durch: Anja Gutzmer
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p>
                Telefon: 0174 - 772 9510<br />
                E-Mail: help@zama-management.de
              </p>
            </div>

            {/* Registereintrag */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister.<br />
                Registernummer: HRA 7460
              </p>
            </div>

            {/* Umsatzsteuer-ID */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE [folgt]
              </p>
            </div>

            {/* Inhaltlich verantwortlich */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
              <p>
                Anja Gutzmer<br />
                Kochgasse 7<br />
                06925 Annaburg
              </p>
            </div>

            {/* Webdesign und Umsetzung */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Webdesign und Umsetzung</h2>
              <p>
                Design und Umsetzung: Julia Werneth
              </p>
            </div>

            {/* Fotos */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Fotos</h2>
              <p>
                Fotocredit für Bilder von Anja & Team: Milena Duhme Fotografie
              </p>
            </div>

            {/* EU-Streitschlichtung */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-opacity-80">https://ec.europa.eu/consumers/odr/</a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            {/* Verbraucherstreitbeilegung / Universalschlichtungsstelle */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Haftung für Inhalte */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            {/* Haftung für Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
