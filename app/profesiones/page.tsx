import Link from 'next/link';
import { profesionesMeta } from '@/data/profesiones-meta';

export const metadata = {
  title: 'Profesiones TBC Classic — WoW Resurgence Syndicate Guides',
  description: 'Guía de todas las profesiones de World of Warcraft TBC Classic en español.',
};

const typeLabel: Record<string, string> = {
  crafting: 'Artesanía',
  gathering: 'Recolección',
  support: 'Soporte',
};

const typeColor: Record<string, string> = {
  crafting: 'text-yellow-400 bg-yellow-900/25 border-yellow-800/50',
  gathering: 'text-green-400 bg-green-900/25 border-green-800/50',
  support: 'text-blue-400 bg-blue-900/25 border-blue-800/50',
};

export default function ProfesionesPage() {
  const primarias = profesionesMeta.filter((p) => p.category === 'primaria');
  const secundarias = profesionesMeta.filter((p) => p.category === 'secundaria');

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
              Profesiones
            </h1>
            <p
              className="text-2xl md:text-3xl mt-2 font-semibold"
              style={{ color: '#c9a227', fontFamily: 'var(--font-cinzel), Georgia, serif' }}
            >
              TBC Classic
            </p>
            <p className="mt-4 text-base max-w-lg mx-auto" style={{ color: '#6a6258' }}>
              Domina las profesiones de The Burning Crusade y maximiza el potencial de tu personaje.
            </p>
            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-5 text-sm"
              style={{ color: '#4a4540' }}
            >
              <span>🔨 {primarias.length} profesiones primarias</span>
              <span>📖 {secundarias.length} profesiones secundarias</span>
              <span>🌍 Todo en español</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Primarias */}
        <section>
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: '#6a5820' }}
          >
            Profesiones Primarias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {primarias.map((prof) => (
              <article
                key={prof.id}
                className={`bg-gray-900/70 border rounded-xl overflow-hidden ${prof.border}`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${prof.color}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="text-lg font-bold text-yellow-400 leading-tight"
                      style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
                    >
                      {prof.name}
                    </h3>
                    <span
                      className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${typeColor[prof.type]}`}
                    >
                      {typeLabel[prof.type]}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{prof.description}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-yellow-600 text-xs">⭐</span>
                    <span className="text-xs text-yellow-700">{prof.highlight}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Secundarias */}
        <section>
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: '#6a5820' }}
          >
            Profesiones Secundarias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secundarias.map((prof) => (
              <article
                key={prof.id}
                className={`bg-gray-900/70 border rounded-xl overflow-hidden ${prof.border}`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${prof.color}`} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="text-lg font-bold text-yellow-400 leading-tight"
                      style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
                    >
                      {prof.name}
                    </h3>
                    <span
                      className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full border ${typeColor[prof.type]}`}
                    >
                      {typeLabel[prof.type]}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{prof.description}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-yellow-600 text-xs">⭐</span>
                    <span className="text-xs text-yellow-700">{prof.highlight}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
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
