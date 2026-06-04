import { ClassGuide } from '@/data/types';
import Link from 'next/link';

export default function ClassGuidePage({ guide }: { guide: ClassGuide }) {
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
        className="px-6 py-16 border-b border-amber-600/20"
      >
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl font-bold text-amber-400 mb-2"
            style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', letterSpacing: '0.35em' }}
          >
            {guide.name.toUpperCase()}
          </h1>
          {guide.nameEn && (
            <p className="text-sm italic mb-4" style={{ color: '#5a5248' }}>{guide.nameEn}</p>
          )}
          <p className="text-lg text-gray-300 mb-6">{guide.description}</p>

          {/* Role Badges */}
          <div className="flex gap-3 flex-wrap">
            {guide.roles.map((role) => (
              <span
                key={role}
                className={`${roleColors[role] || 'bg-purple-600'} px-4 py-2 rounded-lg text-white font-semibold`}
              >
                {role}
              </span>
            ))}
          </div>
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

          <div className="space-y-8">
            {guide.specs.map((spec) => (
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

                <div className="space-y-3">
                  {spec.tips.map((tip, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="text-amber-400 font-bold text-lg flex-shrink-0">•</div>
                      <p className="text-gray-200">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consumables Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold text-amber-400 mb-8"
            style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', letterSpacing: '0.35em' }}
          >
            CONSUMIBLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guide.consumables.map((consumable, idx) => (
              <div
                key={idx}
                style={{ background: '#1a1a2e' }}
                className="p-4 rounded-lg border border-amber-600/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-amber-300">{consumable.name}</h4>
                  <span className="text-xs bg-amber-600/30 text-amber-300 px-2 py-1 rounded">
                    {consumableLabels[consumable.type] || consumable.type}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{consumable.effect}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Talent Resources Section */}
        <section>
          <h2
            className="text-3xl font-bold text-amber-400 mb-8"
            style={{ fontFamily: 'var(--font-cinzel), Georgia, serif', letterSpacing: '0.35em' }}
          >
            GUÍAS DE TALENTOS
          </h2>

          <div className="space-y-4">
            {guide.talentResources?.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: '#1a1a2e' }}
                className="block p-6 rounded-lg border border-amber-600/20 hover:border-amber-400 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-600 text-sm font-semibold mb-1">{resource.spec}</p>
                    <h3 className="text-xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                      {resource.title}
                    </h3>
                  </div>
                  <div className="text-amber-400 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-2">{resource.url}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
