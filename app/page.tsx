import Link from 'next/link';

export const metadata = {
  title: 'WoW Resurgence Syndicate — Guías TBC Classic en Español',
  description: 'Guías completas en español para World of Warcraft TBC Classic: raids, profesiones y clases.',
};

const modules = [
  {
    href: '/raids',
    icon: '⚔️',
    title: 'Raids',
    description: 'Guías completas de todas las raids de TBC Classic',
    color: 'from-yellow-900/60 to-amber-950/60',
    border: 'border-yellow-700/50',
    accent: '#f0d060',
  },
  {
    href: '/profesiones',
    icon: '🔨',
    title: 'Profesiones',
    description: 'Domina las profesiones de The Burning Crusade',
    color: 'from-purple-900/60 to-violet-950/60',
    border: 'border-purple-700/50',
    accent: '#c084fc',
  },
  {
    href: '/clases',
    icon: '🧙',
    title: 'Clases',
    description: 'Conoce cada clase de WoW TBC Classic',
    color: 'from-blue-900/60 to-indigo-950/60',
    border: 'border-blue-700/50',
    accent: '#93c5fd',
  },
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
            WoW Resurgence Syndicate
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
            Guías en Español
          </p>
          <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: '#6a6258' }}>
            Todo lo que necesitas para dominar The Burning Crusade Classic: raids, profesiones y clases.
          </p>
        </div>
      </header>

      {/* Module cards */}
      <main className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className={`group block bg-gray-900/70 border rounded-xl overflow-hidden transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:shadow-yellow-900/20 ${mod.border}`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${mod.color}`} />
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">{mod.icon}</div>
                <h2
                  className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors"
                  style={{ color: mod.accent, fontFamily: 'var(--font-cinzel), Georgia, serif' }}
                >
                  {mod.title}
                </h2>
                <p className="text-xs leading-relaxed" style={{ color: '#6a6258' }}>
                  {mod.description}
                </p>
                <span className="inline-block mt-4 text-xs font-medium transition-colors text-yellow-700 group-hover:text-yellow-500">
                  Explorar →
                </span>
              </div>
            </Link>
          ))}
        </div>
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
