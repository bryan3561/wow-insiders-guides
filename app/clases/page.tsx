import Link from 'next/link';
import { clasesMeta, type Rol } from '@/data/clases-meta';

export const metadata = {
  title: 'Clases TBC Classic — WoW Resurgence Syndicate Guides',
  description: 'Guía de todas las clases de World of Warcraft TBC Classic en español.',
};

const rolConfig: Record<Rol, { label: string; color: string }> = {
  tank:    { label: 'Tank',    color: 'text-blue-400 bg-blue-900/25 border-blue-800/50' },
  healer:  { label: 'Healer', color: 'text-green-400 bg-green-900/25 border-green-800/50' },
  dps:     { label: 'DPS',    color: 'text-red-400 bg-red-900/25 border-red-800/50' },
  hibrido: { label: 'Híbrido', color: 'text-purple-400 bg-purple-900/25 border-purple-800/50' },
};

export default function ClasesPage() {
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
        <div className="relative max-w-5xl mx-auto px-4 pt-4 pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-yellow-400 transition-colors mb-6"
          >
            ← Inicio
          </Link>
          <div className="text-center">
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
              Clases
            </h1>
            <p
              className="text-2xl md:text-3xl mt-2 font-semibold"
              style={{ color: '#c9a227', fontFamily: 'var(--font-cinzel), Georgia, serif' }}
            >
              TBC Classic
            </p>
            <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: '#6a6258' }}>
              9 clases, cada una con su rol en la aventura.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clasesMeta.map((clase) => (
            <Link key={clase.id} href={`/clases/${clase.id}`} className="group">
              <article className={`bg-gray-900/70 border rounded-xl overflow-hidden transition-all group-hover:border-yellow-500/50 group-hover:shadow-lg group-hover:shadow-yellow-900/20 ${clase.border}`}>
                <div className={`h-1.5 bg-gradient-to-r ${clase.color}`} />
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className="text-lg font-bold text-yellow-400 leading-tight group-hover:text-yellow-300 transition-colors"
                      style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
                    >
                      {clase.name}
                    </h3>
                    {clase.isNew && (
                      <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full bg-yellow-900/40 border border-yellow-700/60 text-yellow-400 uppercase tracking-wide">
                        NUEVO EN TBC
                      </span>
                    )}
                  </div>

                  {/* Rol badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {clase.roles.map((rol) => (
                      <span
                        key={rol}
                        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${rolConfig[rol].color}`}
                      >
                        {rolConfig[rol].label}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{clase.description}</p>

                  {/* Specs */}
                  <div className="space-y-2">
                    {clase.specs.map((spec) => (
                      <div key={spec.name} className="flex items-start gap-2">
                        <span
                          className={`flex-shrink-0 text-xs font-bold px-1.5 py-0.5 rounded border ${rolConfig[spec.rol].color}`}
                        >
                          {spec.name}
                        </span>
                        <p className="text-xs text-gray-600 leading-snug">{spec.descripcion}</p>
                      </div>
                    ))}
                  </div>

                  {/* Gear info */}
                  <div className="mt-4 pt-3 border-t border-gray-800 space-y-1">
                    <p className="text-xs text-gray-700">
                      <span className="text-gray-600">Armadura:</span> {clase.armadura}
                    </p>
                    <p className="text-xs text-gray-700">
                      <span className="text-gray-600">Armas:</span> {clase.armas}
                    </p>
                  </div>

                  {/* View guide link */}
                  <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-600">Ver guía</span>
                    <span className="text-yellow-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </article>
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
