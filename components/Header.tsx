import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const menuItems = [
    { label: 'ZAMA', url: '/' },
    { label: 'LEISTUNGEN', url: '/leistungen' },
    { label: 'SEMINARE', url: '/seminare' },
    { label: 'TEAM', url: '/team' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#3a3a3a] py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/img/logo_zama.png"
            alt="Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <div className="flex-1 flex justify-center pl-[55px] space-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.url}
              href={item.url}
              className={`text-[var(--color-text-white)] hover:text-[var(--color-accent)] transition ${index === 0 ? 'text-[var(--color-accent)] font-extrabold' : 'font-normal'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/kontakt"
            className="px-5 py-2 rounded bg-[var(--color-text)] text-white hover:bg-[var(--color-accent)] transition"
          >
            KONTAKT
          </Link>
        </div>
      </div>
    </header>
  );
}
