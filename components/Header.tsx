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
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-colors duration-300 py-4 ${headerBgClass}`}
        style={{ zIndex: Z_INDEX.HEADER }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="z-50 relative">
            <Image
              src={ASSETS.IMAGES.LOGO}
              alt="Zama Management Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
              sizes="120px"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex flex-1 justify-center pl-[55px] space-x-8">
            {mainMenuItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={`text-[var(--color-text-white)] hover:text-[var(--color-accent)] transition font-medium ${
                  item.active ? 'text-[var(--color-accent)]' : ''
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

          {/* Mobile Hamburger Button (min 44x44px touch target) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 relative w-12 h-12 flex items-center justify-center -mr-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#1a1a1a] z-40 lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
          {mainMenuItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`text-2xl text-white hover:text-[var(--color-accent)] transition font-medium min-h-[44px] flex items-center ${
                pathname === item.url ? 'text-[var(--color-accent)]' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Contact Button */}
          <Link href={ROUTES.CONTACT} onClick={() => setIsMobileMenuOpen(false)}>
            <Button size="lg">KONTAKT</Button>
          </Link>
        </nav>
      </div>
    </>
  );
}
