import Link from 'next/link';
import Image from 'next/image';
import { mainMenuItems } from '@/data';
import { ROUTES, ASSETS, Z_INDEX } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full transition-all duration-300 bg-gray-medium py-4"
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
              className={`text-[var(--color-text-white)] hover:text-[var(--color-accent)] transition ${
                item.active ? 'text-[var(--color-accent)] font-extrabold' : 'font-normal'
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
