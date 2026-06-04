import { raidsMeta } from '@/data/raids-meta';
import RaidCard from '@/components/RaidCard';

export const metadata = {
  title: 'WoW Resurgence Syndicate Guides — Raids TBC Classic en Español',
  description: 'Guías completas en español de todas las raids de World of Warcraft TBC Classic.',
};

const tierGroups = [
  { label: 'Tier 4 — Parche 2.0', raids: ['karazhan', 'gruul', 'magtheridon'] },
  { label: 'Tier 5 — Parche 2.1', raids: ['ssc', 'tempest-keep'] },
  { label: 'Tier 6 — Parche 2.1', raids: ['mount-hyjal', 'black-temple'] },
  { label: 'Contenido Extra', raids: ['zulaman', 'sunwell'] },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#080810' }}>
      {/* Hero */}
      <header className="relative border-b border-yellow-900/30 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #1a1428 0%, #0e0c18 60%, #080810 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #c9a22740 0%, transparent 70%)' }}
        />
        <div className="relative max-w-5xl mx-auto px-4 py-16 text-center">
          <p
            className="text-xs font-bold uppercase mb-3"
            style={{ color: '#c9a227', letterSpacing: '0.35em' }}
          >
            World of Warcraft
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ color: '#f0d060', fontFamily: 'var(--font-cinzel), Georgia, serif' }}
          >
            TBC Classic
          </h1>
          <p
            className="text-2xl md:text-3xl mt-2 font-semibold"
            style={{ color: '#c9a227', fontFamily: 'var(--font-cinzel), Georgia, serif' }}
          >
            Guías de Raids
          </p>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: '#6a6258' }}>
            Estrategias, habilidades y consejos para todas las raids de The Burning Crusade Classic, completamente en español.
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-5 text-sm"
            style={{ color: '#4a4540' }}
          >
            <span>🏰 {raidsMeta.length} raids</span>
            <span>⚔️ {raidsMeta.reduce((n, r) => n + r.bossCount, 0)} jefes totales</span>
            <span>🌍 Todo en español</span>
          </div>
        </div>
      </header>

      {/* Raids by tier */}
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        {tierGroups.map(({ label, raids: raidIds }) => {
          const raids = raidIds.map((id) => raidsMeta.find((r) => r.id === id)!).filter(Boolean);
          return (
            <section key={label}>
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: '#6a5820' }}
              >
                {label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {raids.map((raid) => (
                  <RaidCard key={raid.id} raid={raid} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="border-t mt-16 py-8" style={{ borderColor: '#1e1e2e' }}>
        <div className="max-w-5xl mx-auto px-4 text-center space-y-1">
          <p className="text-sm" style={{ color: '#3a3830' }}>
            WoW Resurgence Syndicate Guides — Guías de TBC Classic en español
          </p>
          <p className="text-xs" style={{ color: '#2a2820' }}>
            World of Warcraft es marca registrada de Blizzard Entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
}
