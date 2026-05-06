'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Ability } from '@/data/types';

const typeConfig: Record<string, { label: string; color: string; bg: string }> = {
  damage:    { label: 'Daño',       color: 'text-red-400',    bg: 'bg-red-900/30 border-red-700/60' },
  debuff:    { label: 'Debuff',     color: 'text-purple-400', bg: 'bg-purple-900/30 border-purple-700/60' },
  interrupt: { label: 'Interrumpir',color: 'text-yellow-400', bg: 'bg-yellow-900/30 border-yellow-700/60' },
  tank:      { label: 'Tanque',     color: 'text-blue-400',   bg: 'bg-blue-900/30 border-blue-700/60' },
  adds:      { label: 'Adds',       color: 'text-green-400',  bg: 'bg-green-900/30 border-green-700/60' },
  mechanics: { label: 'Mecánica',   color: 'text-orange-400', bg: 'bg-orange-900/30 border-orange-700/60' },
};

interface Props {
  ability: Ability;
}

export default function AbilityRow({ ability }: Props) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showTooltip = () => {
    if (!iconRef.current) return;
    const rect = iconRef.current.getBoundingClientRect();
    const tooltipWidth = 320;
    const tooltipHeight = ability.warning ? 260 : 210;

    let left = rect.right + 14;
    let top = rect.top;

    if (left + tooltipWidth > window.innerWidth - 12) {
      left = rect.left - tooltipWidth - 14;
    }
    if (left < 12) left = 12;
    if (top + tooltipHeight > window.innerHeight - 12) {
      top = window.innerHeight - tooltipHeight - 12;
    }
    if (top < 12) top = 12;

    setPosition({ top, left });
    setVisible(true);
  };

  const cfg = typeConfig[ability.type];

  const tooltip = (
    <div
      style={{ position: 'fixed', top: position.top, left: position.left, zIndex: 9999, width: 320 }}
      className="bg-[#0d0d18] border border-yellow-700 rounded-xl shadow-2xl pointer-events-none overflow-hidden"
    >
      <div className="px-3 py-2.5 border-b border-yellow-800/40 flex items-center gap-3 bg-gradient-to-r from-gray-900 to-[#0d0d18]">
        <img
          src={`https://wow.zamimg.com/images/wow/icons/large/${ability.icon}.jpg`}
          alt={ability.name}
          className="w-12 h-12 rounded-lg border-2 border-yellow-700/60 flex-shrink-0"
          width={48}
          height={48}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg';
          }}
        />
        <div>
          <p className="text-yellow-300 font-bold text-sm leading-tight">{ability.name}</p>
          <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full border ${cfg.color} ${cfg.bg}`}>
            {cfg.label}
          </span>
        </div>
      </div>
      <div className="p-3 space-y-2">
        <p className="text-gray-300 text-xs leading-relaxed">{ability.description}</p>
        <div className="bg-yellow-950/50 border border-yellow-800/40 rounded-lg p-2">
          <p className="text-yellow-200 text-xs leading-relaxed">
            <span className="font-bold text-yellow-400">💡 Consejo: </span>
            {ability.tip}
          </p>
        </div>
        {ability.warning && (
          <div className="bg-red-950/50 border border-red-800/50 rounded-lg p-2">
            <p className="text-red-300 text-xs leading-relaxed">
              <span className="font-bold text-red-400">⚠️ Aviso: </span>
              {ability.warning}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-150 cursor-default group">
      <div
        ref={iconRef}
        onMouseEnter={showTooltip}
        onMouseLeave={() => setVisible(false)}
        className="flex-shrink-0 cursor-help"
      >
        <img
          src={`https://wow.zamimg.com/images/wow/icons/medium/${ability.icon}.jpg`}
          alt={ability.name}
          className="w-10 h-10 rounded-lg border-2 border-yellow-700/50 group-hover:border-yellow-500 transition-colors"
          width={40}
          height={40}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://wow.zamimg.com/images/wow/icons/medium/inv_misc_questionmark.jpg';
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-yellow-300 font-semibold text-sm">{ability.name}</span>
          <span className={`inline-block px-1.5 py-0.5 text-xs rounded border ${cfg.color} ${cfg.bg}`}>
            {cfg.label}
          </span>
        </div>
        <p className="text-gray-400 text-xs mt-0.5 leading-relaxed line-clamp-2">{ability.description}</p>
      </div>
      {mounted && visible && createPortal(tooltip, document.body)}
    </div>
  );
}
