export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0">
                <video
                    src="/assets/Zama/Zama-Management Seminare. Jetzt informieren._2.mp4"
                    poster="/assets/Zama/dentist_hand_cneumann_b25e1216ac (1).jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ pointerEvents: 'none' }}
                />
                {/* Gradient overlay: dark at bottom (for text), transparent at top (for hands/light) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-end text-center px-6 pb-16 md:pb-24">
                <h1 className="text-[var(--color-text-white)] mb-20 italic font-light" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.3' }}>
                    Denn Erfolg bedeutet für uns, andere<br />
                    erfolgreich zu machen.
                </h1>
            </div>
        </section>
    );
}
