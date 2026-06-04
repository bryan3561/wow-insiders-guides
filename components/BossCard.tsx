import type { Boss } from '@/data/types';
import AbilityRow from './AbilityRow';
import InlineRef from './InlineRef';

const difficultyConfig = [
  { label: 'Muy Fácil', color: 'text-green-400',  border: 'border-green-800/50' },
  { label: 'Fácil',     color: 'text-lime-400',   border: 'border-lime-800/50' },
  { label: 'Moderado',  color: 'text-yellow-400', border: 'border-yellow-800/50' },
  { label: 'Difícil',   color: 'text-orange-400', border: 'border-orange-800/50' },
  { label: 'Muy Difícil', color: 'text-red-400',  border: 'border-red-800/50' },
];

interface Props {
  boss: Boss;
}

export default function BossCard({ boss }: Props) {
  const diff = difficultyConfig[boss.difficulty - 1];
  const filledStars = '★'.repeat(boss.difficulty);
  const emptyStars = '☆'.repeat(5 - boss.difficulty);
  const hasDetailedPhases = Boolean(boss.phases && boss.phases.length > 0);
  const detailedPhases = boss.phases ?? [];
  const strategySteps = boss.strategy
    .split(/(?<=[.!?])\s+/)
    .map((step) => step.trim())
    .filter((step) => step.length > 0);
  const fallbackPhases =
    strategySteps.length >= 3
      ? [
          {
            name: 'Inicio del combate',
            events: strategySteps.slice(0, Math.min(2, strategySteps.length)),
          },
          {
            name: 'Desarrollo y control',
            events: strategySteps.slice(2, Math.max(2, strategySteps.length - 1)),
          },
          {
            name: 'Cierre y ejecución',
            events: strategySteps.slice(Math.max(2, strategySteps.length - 1)),
          },
        ].filter((phase) => phase.events.length > 0)
      : [];

  return (
    <section
      id={boss.id}
      className={`bg-gray-900/70 border rounded-xl overflow-hidden scroll-mt-6 ${diff.border}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-gray-700/60 px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {boss.group && (
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                {boss.group}
              </p>
            )}
            <h2 className="text-xl font-bold text-yellow-400" style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}>
              {boss.name}
            </h2>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">{boss.description}</p>
          </div>

          <div className="flex-shrink-0 text-right space-y-1">
            <div className={`text-lg tracking-widest ${diff.color}`}>
              {filledStars}{emptyStars}
            </div>
            <div className={`text-xs font-semibold ${diff.color}`}>{diff.label}</div>
            <div className="flex items-center gap-3 justify-end pt-1">
              {boss.tankCount > 0 && (
                <span className="text-xs text-blue-300 flex items-center gap-1">
                  🛡 <span>{boss.tankCount} tanque{boss.tankCount > 1 ? 's' : ''}</span>
                </span>
              )}
              {boss.healerCount > 0 && (
                <span className="text-xs text-green-300 flex items-center gap-1">
                  💚 <span>{boss.healerCount} curandero{boss.healerCount > 1 ? 's' : ''}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 space-y-4">
        {/* Phases */}
        {hasDetailedPhases && (
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Fases</h3>
            <div className="flex flex-col gap-2">
              {detailedPhases.map((phase, i) => (
                <div key={i} className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-3">
                  <div className="text-yellow-500 text-xs font-bold mb-2">{phase.name}</div>
                  {phase.events && phase.events.length > 0 ? (
                    <ul className="space-y-1.5">
                      {phase.events.map((event, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-600" />
                          <InlineRef text={event} refs={boss.spellRefs} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-400 text-sm leading-relaxed">{phase.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasDetailedPhases && fallbackPhases.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Guía por fases</h3>
            <div className="flex flex-col gap-2">
              {fallbackPhases.map((phase, i) => (
                <div key={i} className="bg-gray-800/60 border border-gray-700/60 rounded-lg p-3">
                  <div className="text-yellow-500 text-xs font-bold mb-2">{phase.name}</div>
                  <ul className="space-y-1.5">
                    {phase.events.map((event, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-yellow-600" />
                        <InlineRef text={event} refs={boss.spellRefs} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strategy */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Estrategia</h3>
          <div className="bg-blue-950/30 border border-blue-800/30 rounded-lg px-4 py-3">
            <p className="text-blue-200 text-sm leading-relaxed">{boss.strategy}</p>
          </div>
        </div>

        {/* Abilities */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
            Habilidades{' '}
            <span className="text-gray-600 normal-case font-normal">
              — pasa el cursor sobre el icono para ver detalles
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
            {boss.abilities.map((ability) => (
              <AbilityRow key={ability.id} ability={ability} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
