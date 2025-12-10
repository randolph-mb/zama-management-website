'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { mainMenuItems } from '@/data';
import { ROUTES, ASSETS, Z_INDEX } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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

  // Mobile menu always has dark background
  const mobileMenuBgClass = 'bg-[#1a1a1a]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-colors duration-300 py-4 ${headerBgClass}`}
        style={{ zIndex: Z_INDEX.HEADER }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="z-50">
            <Image
              src={ASSETS.IMAGES.LOGO}
              alt="Zama Management Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Menu - Oswald Medium + UPPERCASE */}
          <nav className="hidden lg:flex flex-1 justify-center pl-[55px] space-x-8">
            {mainMenuItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={`text-[var(--color-text-white)] hover:text-[var(--color-accent)] transition font-oswald font-medium uppercase tracking-wide ${item.active ? 'text-[var(--color-accent)]' : ''
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href={ROUTES.CONTACT}>
              <Button size="md">KONTAKT</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 text-[var(--color-text-white)] p-2 hover:text-[var(--color-accent)] transition"
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 ${mobileMenuBgClass} transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ zIndex: Z_INDEX.HEADER - 1 }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {mainMenuItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`text-[var(--color-text-white)] hover:text-[var(--color-accent)] transition text-2xl font-oswald font-medium uppercase tracking-wide ${item.active ? 'text-[var(--color-accent)]' : ''
                }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={ROUTES.CONTACT} className="mt-4">
            <Button size="lg">KONTAKT</Button>
          </Link>
        </nav>
      </div>
    </>
  );
}
