'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Custom Hook für Background-Prefetching kritischer Assets
 * Lädt wichtige Bilder/Videos im Hintergrund, NACHDEM die Seite fertig geladen ist
 * -> "Native App Feeling" durch sofortiges Laden von Unterseiten
 */

interface PrefetchAsset {
  url: string;
  type: 'image' | 'video';
  priority: 'high' | 'low';
}

// Kritische Assets pro Route (die wichtigsten Unterseiten)
const CRITICAL_ASSETS: Record<string, PrefetchAsset[]> = {
  '/': [
    // Leistungen-Seite (meistbesuchte Unterseite)
    {
      url: '/assets/Leistungen/Zama_Leistungen_by_Christoph_Neumann_1_cb26fc39d0.webp',
      type: 'image',
      priority: 'high',
    },
    {
      url: '/assets/Leistungen/zama_business_d7f2e538d7.jpg',
      type: 'image',
      priority: 'high',
    },
    // Seminare-Seite Video
    {
      url: '/assets/seminare/Zama-Management Seminare. Jetzt informieren._2.mp4',
      type: 'video',
      priority: 'low',
    },
    // Team-Seite Hero
    {
      url: '/assets/Team/Zama_Team_by_Christoph_Neumann_ff76fb917d.webp',
      type: 'image',
      priority: 'low',
    },
  ],
  '/leistungen': [
    // Zurück zur Startseite
    {
      url: '/assets/Zama/dentist_hand_cneumann_b25e1216ac (1).jpg',
      type: 'image',
      priority: 'high',
    },
  ],
};

export function useBackgroundPrefetch() {
  const pathname = usePathname();

  useEffect(() => {
    // Warte bis die Seite KOMPLETT geladen ist (window.onload)
    const prefetchAssets = () => {
      const assetsToFetch = CRITICAL_ASSETS[pathname] || [];

      // Sortiere nach Priorität
      const sortedAssets = [...assetsToFetch].sort((a, b) =>
        a.priority === 'high' && b.priority === 'low' ? -1 : 1
      );

      // Prefetch mit staggered delay (nicht alles auf einmal)
      sortedAssets.forEach((asset, index) => {
        setTimeout(() => {
          if (asset.type === 'image') {
            // Prefetch Images via Link-Preload
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.as = 'image';
            link.href = asset.url;
            document.head.appendChild(link);
          } else if (asset.type === 'video') {
            // Prefetch Videos via Fetch API (nur Metadata)
            fetch(asset.url, {
              method: 'HEAD',
              mode: 'no-cors',
            }).catch(() => {
              // Ignore errors silently
            });
          }
        }, index * 100); // 100ms delay zwischen jedem Asset
      });
    };

    // Starte Prefetching erst nach komplettem Page Load
    if (document.readyState === 'complete') {
      // Warte noch 500ms extra, um sicher zu sein
      setTimeout(prefetchAssets, 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(prefetchAssets, 500);
      });
    }
  }, [pathname]);
}
