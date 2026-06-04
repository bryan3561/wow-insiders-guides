import { ClassGuide } from '@/data/types';
import Link from 'next/link';

export default function ClassGuidePage({ guide, selectedSpec }: { guide: ClassGuide; selectedSpec?: string }) {
  const roleColors: Record<string, string> = {
    Tank: 'bg-blue-600',
    Healer: 'bg-green-600',
    DPS: 'bg-red-600',
  };
  const consumableLabels: Record<string, string> = {
    flask: 'Flask',
    elixir: 'Elixir',
    food: 'Food',
    potion: 'Potion',
    weapon: 'Weapon Buff',
    misc: 'Misc',
  };
  const getSpecTalentResources = (specName: string) =>
    guide.talentResources?.filter((resource) => resource.spec === specName) ?? [];
  const getSpecSlug = (specName: string) => specName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const activeSpec =
    guide.specs.find((spec) => getSpecSlug(spec.name) === selectedSpec) ?? guide.specs[0];
  const getSpecConsumables = (specRole: string) => {
    const role = specRole.toLowerCase();
    const keywords: string[] = [];

    if (role.includes('tank')) {
      keywords.push('tank', 'defense', 'mitigation', 'armor', 'health', 'fortification', 'ironshield');
    }
    if (role.includes('healer')) {
      keywords.push('healer', 'healing', 'mana', 'spirit');
    }
    if (role.includes('dps')) {
      keywords.push('dps', 'damage', 'attack', 'agility', 'strength', 'haste', 'spell');
    }

    if (!keywords.length) return guide.consumables;

    const filtered = guide.consumables.filter((consumable) => {
      const text = `${consumable.name} ${consumable.effect}`.toLowerCase();
      return keywords.some((keyword) => text.includes(keyword));
    });

    return filtered.length >= 3 ? filtered : guide.consumables;
  };

  return (
    <div style={{ background: '#080810' }} className="min-h-screen pb-16">
      <div className="border-b border-amber-600/15 bg-[#080810]/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3 text-xs">
          <Link href="/clases" className="text-gray-400 hover:text-amber-400 transition-colors">
            ← Clases
          </Link>
          <Link href="/" className="text-gray-500 hover:text-amber-400 transition-colors">
            Menú principal
          </Link>
        </div>
      </div>

      {/* Header */}
      <div
        style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}
        className="px-6 py-8 border-b border-amber-600/20"
      >
        <div className="max-w-4xl mx-auto px-1 py-1">
          <h1
            className="text-3xl md:text-4xl font-bold text-amber-400 mb-1"
            style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', letterSpacing: '0.35em' }}
          >
            {guide.name.toUpperCase()}
          </h1>
          {guide.nameEn && (
            <p className="text-xs italic mb-3" style={{ color: '#7a7060' }}>{guide.nameEn}</p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Specializations Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-amber-400 mb-8"
            style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', letterSpacing: '0.35em' }}
          >
            ESPECIALIDADES
          </h2>

          <div className="mb-8 overflow-x-auto pb-2">
            <div className="flex min-w-max gap-2">
              {guide.specs.map((spec) => (
                <Link
                  key={`menu-${spec.name}`}
                  href={`/clases/${guide.id}?spec=${getSpecSlug(spec.name)}`}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                    spec.name === activeSpec.name
                      ? 'border-amber-300 bg-amber-600/20 text-amber-200'
                      : 'border-amber-500/30 bg-amber-600/10 text-amber-300 hover:border-amber-400 hover:text-amber-200'
                  }`}
                >
                  {spec.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {(() => {
              const spec = activeSpec;
              const specConsumables = getSpecConsumables(spec.role);
              const specTalentResources = getSpecTalentResources(spec.name);
              const specGuideUrl = specTalentResources[0]?.url;

              return (
                <div
                  key={spec.name}
                  style={{ background: '#1a1a2e' }}
                  className="p-6 rounded-lg border border-amber-600/20"
                >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-amber-300">{spec.name}</h3>
                  <span className={`${roleColors[spec.role] || 'bg-purple-600'} px-3 py-1 rounded text-white text-sm font-semibold`}>
                    {spec.role}
                  </span>
                </div>

                <div className="mt-5 pt-5 border-t border-amber-600/20">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold tracking-wide text-amber-500">ROTACIÓN ({spec.name})</h4>
                    {specGuideUrl && (
                      <a
                        href={specGuideUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-amber-400 hover:text-amber-300 underline underline-offset-2"
                      >
                        Basada en wowtbc
                      </a>
                    )}
                  </div>
                  <div className="space-y-3">
                  {spec.tips.map((tip, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="text-amber-400 font-bold text-lg flex-shrink-0">•</div>
                      <p className="text-gray-200">{tip}</p>
                    </div>
                  ))}
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-amber-600/20">
                  <h4 className="text-sm font-bold tracking-wide text-amber-500 mb-3">CONSUMIBLES ({spec.name})</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {specConsumables.map((consumable, idx) => (
                      <div key={`${spec.name}-consumable-${idx}`} className="p-3 rounded-lg border border-amber-600/15 bg-[#151525]">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <p className="text-sm font-semibold text-amber-300">{consumable.name}</p>
                          <span className="text-[10px] bg-amber-600/30 text-amber-300 px-1.5 py-0.5 rounded">
                            {consumableLabels[consumable.type] || consumable.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400">{consumable.effect}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-amber-600/20">
                  <h4 className="text-sm font-bold tracking-wide text-amber-500 mb-3">TALENTOS ({spec.name})</h4>
                  <div className="space-y-2">
                    {specTalentResources.map((resource, idx) => (
                      <a
                        key={`${spec.name}-talent-${idx}`}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg border border-amber-600/15 bg-[#151525] px-3 py-2 hover:border-amber-400 transition-colors"
                      >
                        <p className="text-sm font-semibold text-amber-300">{resource.title}</p>
                        <p className="text-xs text-gray-500 truncate">{resource.url}</p>
                      </a>
                    ))}
                  </div>
                </div>
                </div>
              );
            })()}
          </div>
        </section>
      </div>
    </div>
  );
}
