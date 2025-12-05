export default function ImpressumPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="bg-[var(--background)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-6">Impressum</h1>
          <div className="text-[var(--color-text)] space-y-4">
            <p>
              <strong>Zama Management GmbH &amp; Co. KG</strong>
              <br />
              Kochgasse 7<br />
              06925 Annaburg
              <br />
              Germany
            </p>
            <p>
              <strong>Kontakt:</strong>
              <br />
              E-Mail: help@zama-management.de
              <br />
              Telefon: 0174 - 172 9510
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
