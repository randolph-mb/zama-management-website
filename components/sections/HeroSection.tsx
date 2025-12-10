export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0">
                <video
                    src="/assets/Zama/Zama-Management Seminare. Jetzt informieren..mp4"
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
            <div className="relative z-20 h-full flex flex-col items-center justify-end text-center px-4 sm:px-6 pb-20 sm:pb-24 md:pb-28">
                <h1 className="text-[var(--color-text-white)] mb-12 sm:mb-16 md:mb-20 italic font-light max-w-4xl" style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', lineHeight: '1.3' }}>
                    Denn Erfolg bedeutet für uns, andere<br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>erfolgreich zu machen.
                </h1>
            </div>
        </section>
    );
}
