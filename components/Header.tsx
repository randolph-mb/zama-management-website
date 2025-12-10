'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { mainMenuItems } from '@/data';
import { ROUTES, ASSETS, Z_INDEX } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // "Always be like this" -> Seminars page should ALWAYS have the dark header style
  // regardless of scroll position.
  const isSeminarsPage = pathname === ROUTES.SEMINARS;
  const isContactPage = pathname === ROUTES.CONTACT;

  // Header background logic
  let headerBgClass = 'bg-transparent';

  if (isScrolled) {
    headerBgClass = 'bg-[#1a1a1a]';
  } else if (isSeminarsPage) {
    headerBgClass = 'bg-[#1a1a1a]';
  } else if (isContactPage) {
    headerBgClass = 'bg-[#333333]'; // Matches screenshot (Dark Gray)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-colors duration-300 py-4 ${headerBgClass}`}
      style={{ zIndex: Z_INDEX.HEADER }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={ROUTES.HOME}>
          <Image
            src={ASSETS.IMAGES.LOGO}
            alt="Zama Management Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="flex-1 flex justify-center pl-[55px] space-x-8">
          {mainMenuItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`text-[var(--color-text-white)] hover:text-[var(--color-accent)] transition font-medium ${item.active ? 'text-[var(--color-accent)]' : ''
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="flex items-center space-x-4">
          <Link href={ROUTES.CONTACT}>
            <Button size="md">KONTAKT</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
