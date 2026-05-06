import type { Boss, RaidMeta } from '@/data/types';
import BossCard from './BossCard';
import SideNav from './SideNav';
import Link from 'next/link';

interface Props {
  meta: RaidMeta;
  bosses: Boss[];
}

const difficultyLabel: Record<string, { label: string; color: string }> = {
  inicial:    { label: 'Nivel Inicial',   color: 'text-green-400' },
  intermedio: { label: 'Intermedio',      color: 'text-yellow-400' },
  avanzado:   { label: 'Avanzado',        color: 'text-orange-400' },
  final:      { label: 'Contenido Final', color: 'text-red-400' },
};

export default function RaidPage({ meta, bosses }: Props) {
  const diff = difficultyLabel[meta.difficulty];

  return (
    <div className="min-h-screen" style={{ background: '#080810' }}>
      {/* Header */}
      <header className="relative border-b border-yellow-900/30 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #1a1428 0%, #0e0c18 60%, #080810 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #c9a22740 0%, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 pt-4 pb-10">
          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-yellow-400 transition-colors mb-6"
          >
            ← Todas las raids
          </Link>

          <div className="text-center">
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: '#c9a227', letterSpacing: '0.35em' }}
            >
              World of Warcraft — TBC Classic · Parche {meta.patch}
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ color: '#f0d060', fontFamily: 'var(--font-cinzel), Georgia, serif' }}
            >
              {meta.name}
            </h1>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: '#7a7060' }}>
              {meta.description}
            </p>

            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-5 text-sm"
              style={{ color: '#5a5248' }}
            >
              <span>👥 {meta.players} jugadores</span>
              <span>⚔️ {meta.bossCount} jefes</span>
              <span className={diff.color}>◆ {diff.label}</span>
            </div>

            {/* Type legend */}
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {[
                { label: 'Daño',        color: 'text-red-400',    bg: 'bg-red-900/25 border-red-800/50' },
                { label: 'Debuff',      color: 'text-purple-400', bg: 'bg-purple-900/25 border-purple-800/50' },
                { label: 'Interrumpir', color: 'text-yellow-400', bg: 'bg-yellow-900/25 border-yellow-800/50' },
                { label: 'Tanque',      color: 'text-blue-400',   bg: 'bg-blue-900/25 border-blue-800/50' },
                { label: 'Adds',        color: 'text-green-400',  bg: 'bg-green-900/25 border-green-800/50' },
                { label: 'Mecánica',    color: 'text-orange-400', bg: 'bg-orange-900/25 border-orange-800/50' },
              ].map(({ label, color, bg }) => (
                <span
                  key={label}
                  className={`inline-block px-2.5 py-0.5 text-xs rounded-full border font-medium ${color} ${bg}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-6 items-start">
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <SideNav bosses={bosses} />
          </aside>
          <div className="flex-1 min-w-0 space-y-6">
            {bosses.map((boss) => (
              <BossCard key={boss.id} boss={boss} />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8" style={{ borderColor: '#1e1e2e' }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm" style={{ color: '#3a3830' }}>
            WoW Insiders Guides — {meta.name} · TBC Classic en español
          </p>
        </div>
      </footer>
    </div>
  );
}
