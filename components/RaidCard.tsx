import Link from 'next/link';
import type { RaidMeta } from '@/data/types';

const difficultyConfig: Record<string, { label: string; color: string; stars: number }> = {
  inicial:    { label: 'Inicial',    color: 'text-green-400',  stars: 1 },
  intermedio: { label: 'Intermedio', color: 'text-yellow-400', stars: 2 },
  avanzado:   { label: 'Avanzado',   color: 'text-orange-400', stars: 3 },
  final:      { label: 'Final',      color: 'text-red-400',    stars: 4 },
};

interface Props {
  raid: RaidMeta;
}

export default function RaidCard({ raid }: Props) {
  const diff = difficultyConfig[raid.difficulty];

  return (
    <Link
      href={`/raids/${raid.slug}`}
      className={`group block bg-gray-900/70 border rounded-xl overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-900/20 ${raid.border}`}
    >
      {/* Color band */}
      <div className={`h-1.5 bg-gradient-to-r ${raid.color}`} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-800 text-gray-400">
                {raid.players}p
              </span>
              <span className="text-xs text-gray-600">Parche {raid.patch}</span>
            </div>
            <h2
              className="text-lg font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors leading-tight"
              style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
            >
              {raid.name}
            </h2>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className={`text-xs font-semibold ${diff.color}`}>
              {'◆'.repeat(diff.stars)}{'◇'.repeat(4 - diff.stars)}
            </div>
            <div className={`text-xs mt-0.5 ${diff.color}`}>{diff.label}</div>
          </div>
        </div>

        <p className="text-gray-500 text-xs leading-relaxed mb-4">{raid.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">
            ⚔️ {raid.bossCount} jefes
          </span>
          <span className="text-xs text-yellow-700 group-hover:text-yellow-500 transition-colors font-medium">
            Ver guía →
          </span>
        </div>
      </div>
    </Link>
  );
}
