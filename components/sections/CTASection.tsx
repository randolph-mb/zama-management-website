import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="py-20 bg-[var(--background)] text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-[var(--color-text)] text-3xl md:text-4xl mb-6 pb-16 font-bold">
                    Gemeinsam erfolgreich. <br />
                    Wann starten wir?
                </h2>
                <Link
                    href="/kontakt"
                    className="inline-block px-8 py-3 rounded bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] transition font-semibold"
                >
                    KONTAKT
                </Link>
            </div>
        </section>
    );
}
