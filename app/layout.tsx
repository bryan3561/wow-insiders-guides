import type { Metadata } from 'next';
import Link from 'next/link';
import { Cinzel } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WoW Resurgence Syndicate — Guía de Karazhan TBC Classic',
  description:
    'Guía completa en español de todos los jefes de Karazhan para World of Warcraft TBC Classic. Habilidades, estrategias y consejos.',
  keywords: 'Karazhan, WoW TBC Classic, guia jefes, español, World of Warcraft',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={cinzel.variable}>
      <body className="min-h-screen antialiased" style={{ background: '#080810' }}>
        <div className="sticky top-0 z-50 border-b border-yellow-900/30 bg-[#080810]/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.25em] text-yellow-400 hover:text-yellow-300 transition-colors"
              style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
            >
              RESURGENCE SYNDICATE
            </Link>
            <nav className="flex items-center gap-4 text-xs text-gray-400">
              <Link href="/raids" className="hover:text-yellow-400 transition-colors">
                Raids
              </Link>
              <Link href="/profesiones" className="hover:text-yellow-400 transition-colors">
                Profesiones
              </Link>
              <Link href="/clases" className="hover:text-yellow-400 transition-colors">
                Clases
              </Link>
            </nav>
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
