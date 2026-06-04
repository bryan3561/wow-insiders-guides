import Link from 'next/link';
import type { ProfLevelingGuide, LevelingStep } from '@/data/types';
import type { ProfesionMeta } from '@/data/profesiones-meta';

interface Props {
  guide: ProfLevelingGuide;
  meta: ProfesionMeta;
}

const factionColors: Record<string, string> = {
  alianza: 'text-blue-400',
  horda: 'text-red-400',
  neutro: 'text-yellow-400',
};
const factionLabel: Record<string, string> = {
  alianza: 'Alianza',
  horda: 'Horda',
  neutro: 'Neutro',
};

function SkillBar({ from, to, isOutland }: { from: number; to: number; isOutland: boolean }) {
  const startPct = (from / 375) * 100;
  const widthPct = Math.max(((to - from) / 375) * 100, 1);
  const color = isOutland
    ? 'bg-gradient-to-r from-purple-600 to-violet-500'
    : 'bg-gradient-to-r from-yellow-600 to-amber-500';

  return (
    <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
      <div
        className={`absolute h-full rounded-full ${color}`}
        style={{ left: `${startPct}%`, width: `${widthPct}%` }}
      />
    </div>
  );
}

function StepCard({ step, isOutland }: { step: LevelingStep; isOutland: boolean }) {
  const hasMaterials = step.materials && step.materials.length > 0 && step.materials.some((m) => m.qty > 0);
  const isSpecial =
    step.action.startsWith('⭐') ||
    step.action.startsWith('⚠️') ||
    step.action.startsWith('⚙️') ||
    step.action.startsWith('⚔️');

  return (
    <div
      className={`border rounded-lg overflow-hidden ${isSpecial ? 'border-yellow-700/60' : 'border-gray-700/40'} bg-gray-900/50`}
    >
      <div
        className={`px-4 py-2 flex items-center justify-between gap-3 ${isSpecial ? 'bg-yellow-900/20' : 'bg-gray-800/50'}`}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span
            className={`flex-shrink-0 text-xs font-bold tabular-nums ${isOutland ? 'text-purple-400' : 'text-yellow-500'}`}
          >
            {step.from} → {step.to}
          </span>
          <div className="flex-1 min-w-0">
            <SkillBar from={step.from} to={step.to} isOutland={isOutland} />
          </div>
        </div>
        <span className="flex-shrink-0 text-xs text-gray-600 tabular-nums">+{step.to - step.from}</span>
      </div>
      <div className="px-4 py-3 space-y-2.5">
        <p className={`text-sm font-semibold leading-snug ${isSpecial ? 'text-yellow-300' : 'text-gray-200'}`}>
          {step.action}
        </p>
        {hasMaterials && (
          <div className="flex flex-wrap gap-1.5">
            {step.materials!.map((mat, i) =>
              mat.qty > 0 ? (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-800 border border-gray-700/60 rounded text-xs text-gray-300"
                >
                  <span className="text-yellow-600 font-bold">{mat.qty}×</span>
                  {mat.name}
                </span>
              ) : null
            )}
          </div>
        )}
        {step.note && (
          <div className="bg-blue-950/40 border border-blue-800/30 rounded px-3 py-2">
            <p className="text-xs text-blue-200 leading-relaxed">
              <span className="font-bold text-blue-400">💡 </span>
              {step.note}
            </p>
          </div>
        )}
        {step.alt && (
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="text-gray-400 font-semibold">Alternativa: </span>
            {step.alt}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProfesionLevelingPage({ guide, meta }: Props) {
  const isOutlandSection = (label: string) =>
    label.toLowerCase().includes('terrallende') || label.toLowerCase().includes('outland');

  const totalSteps = guide.sections.reduce((n, s) => n + s.steps.length, 0);

  return (
    <div className="min-h-screen" style={{ background: '#080810' }}>
      <header className="relative border-b border-yellow-900/30 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #1a1428 0%, #0e0c18 60%, #080810 100%)' }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #c9a22740 0%, transparent 70%)' }}
        />
        <div className="relative max-w-5xl mx-auto px-4 pt-4 pb-14">
          <Link
            href="/profesiones"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-yellow-400 transition-colors mb-6"
          >
            ← Profesiones
          </Link>
          <div className="text-center">
            <p className="text-xs font-bold uppercase mb-2" style={{ color: '#c9a227', letterSpacing: '0.35em' }}>
              Guía de subida 1–375
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ color: '#f0d060', fontFamily: 'var(--font-cinzel), Georgia, serif' }}
            >
              {meta.name}
            </h1>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#6a6258' }}>
              {meta.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-4 text-xs" style={{ color: '#4a4540' }}>
              <span>📊 {totalSteps} pasos</span>
              <span>🎯 Habilidad 1 → 375</span>
              <span>🌍 TBC Classic</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-5">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6a5820' }}>
              📍 Entrenadores (Terrallende)
            </h2>
            <ul className="space-y-3">
              {guide.trainers.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`text-xs font-semibold mt-0.5 flex-shrink-0 ${factionColors[t.faction ?? 'neutro']}`}
                  >
                    [{factionLabel[t.faction ?? 'neutro']}]
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-200">{t.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{t.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-5">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6a5820' }}>
              💡 Consejos Clave
            </h2>
            <ul className="space-y-2">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-yellow-700" />
                  <p className="text-xs text-gray-400 leading-relaxed">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {guide.totalMaterials.length > 0 && (
          <div className="bg-gray-900/60 border border-gray-700/50 rounded-xl p-5">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#6a5820' }}>
              🎒 Materiales Totales Estimados (1–375)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {guide.totalMaterials.map((mat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-gray-800/60 border border-gray-700/40 rounded-lg px-3 py-2"
                >
                  <span className="text-yellow-500 font-bold text-sm tabular-nums flex-shrink-0">{mat.qty}×</span>
                  <span className="text-xs text-gray-300 leading-tight">{mat.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-600">
              * Cantidades aproximadas. Añade un 10–15% extra por crafts en rangos verdes.
            </p>
          </div>
        )}

        {guide.sections.map((section) => {
          const outland = isOutlandSection(section.label);
          return (
            <section key={section.label}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${outland ? 'text-purple-400' : 'text-yellow-600'}`}
                >
                  {outland ? '🌀' : '⚔️'} {section.label}
                </span>
                <div className="flex-1 h-px bg-gray-800" />
                <span className="text-xs text-gray-600">{section.steps.length} pasos</span>
              </div>
              <div className="space-y-3">
                {section.steps.map((step) => (
                  <StepCard
                    key={`${step.from}-${step.to}-${step.action.slice(0, 10)}`}
                    step={step}
                    isOutland={outland}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="border-t mt-16 py-8" style={{ borderColor: '#1e1e2e' }}>
        <div className="max-w-5xl mx-auto px-4 text-center space-y-1">
          <p className="text-sm" style={{ color: '#3a3830' }}>
            WoW Resurgence Syndicate Guides — {meta.name} · TBC Classic en español
          </p>
          <p className="text-xs" style={{ color: '#2a2820' }}>
            World of Warcraft es marca registrada de Blizzard Entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
}
