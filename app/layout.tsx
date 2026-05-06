import type { Metadata } from 'next';
import { Cinzel } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WoW Insiders — Guía de Karazhan TBC Classic',
  description:
    'Guía completa en español de todos los jefes de Karazhan para World of Warcraft TBC Classic. Habilidades, estrategias y consejos.',
  keywords: 'Karazhan, WoW TBC Classic, guia jefes, español, World of Warcraft',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={cinzel.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
