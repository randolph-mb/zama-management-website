'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // Lade Video erst nach dem First Paint (window.onload)
        const loadVideo = () => {
            setVideoLoaded(true);
        };

        if (document.readyState === 'complete') {
            loadVideo();
        } else {
            window.addEventListener('load', loadVideo);
            return () => window.removeEventListener('load', loadVideo);
        }
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video with Overlay */}
            <div className="absolute inset-0">
                {/* Poster-Image für sofortigen First Paint */}
                {!videoLoaded && (
                    <Image
                        src="/assets/Zama/dentist_hand_cneumann_b25e1216ac (1).jpg"
                        alt="Hero Background"
                        fill
                        priority
                        quality={90}
                        className="absolute inset-0 w-full h-full object-cover"
                        sizes="100vw"
                    />
                )}

                {/* Video lädt erst nach First Paint */}
                {videoLoaded && (
                    <video
                        src="/assets/Zama/Zama-Management Seminare. Jetzt informieren._2.mp4"
                        poster="/assets/Zama/dentist_hand_cneumann_b25e1216ac (1).jpg"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ pointerEvents: 'none' }}
                    />
                )}

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
