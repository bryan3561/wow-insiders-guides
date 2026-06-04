'use client';

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { SpellRef, SpellRefType } from '@/data/types';

const schoolColors: Record<string, string> = {
  'Sombra':      'text-purple-300 bg-purple-900/40 border-purple-600/60',
  'Fuego':       'text-red-300    bg-red-900/40    border-red-600/60',
  'Hielo':       'text-cyan-300   bg-cyan-900/40   border-cyan-600/60',
  'Arcano':      'text-blue-300   bg-blue-900/40   border-blue-600/60',
  'Naturaleza':  'text-green-300  bg-green-900/40  border-green-600/60',
  'Sagrado':     'text-yellow-300 bg-yellow-900/40 border-yellow-600/60',
  'Físico':      'text-orange-300 bg-orange-900/40 border-orange-600/60',
  'NPC Demonio': 'text-rose-300   bg-rose-900/40   border-rose-600/60',
  'Mecánica':    'text-gray-300   bg-gray-800/60   border-gray-600/60',
};

function wowheadUrl(id: number, type: SpellRefType): string {
  if (type === 'npc')    return `https://www.wowhead.com/tbc/npc=${id}`;
  if (type === 'object') return `https://www.wowhead.com/tbc/object=${id}`;
  return `https://www.wowhead.com/tbc/spell=${id}`;
}

// Parses [[key]] and [[key|label]] markers out of a string.
function parseSegments(text: string, refs: Record<string, SpellRef>) {
  const segments: { text: string; ref?: SpellRef }[] = [];
  const re = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) segments.push({ text: text.slice(last, m.index) });
    const key   = m[1];        // lookup key in spellRefs
    const label = m[2] ?? key; // visible text (defaults to key)
    segments.push({ text: label, ref: refs[key] });
    last = m.index + m[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last) });
  return segments;
}

// ── Tooltip span for a single spell/npc ref ─────────────────────────────────

function RefSpan({ label, spellRef }: { label: string; spellRef: SpellRef }) {
  const [visible, setVisible]   = useState(false);
  const [pos, setPos]           = useState({ top: 0, left: 0 });
  const [mounted, setMounted]   = useState(false);
  const spanRef                 = useRef<HTMLSpanElement>(null);
  const hideTimeoutRef          = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const show = () => {
    clearHideTimeout();
    if (!spanRef.current) return;
    const r = spanRef.current.getBoundingClientRect();
    const w = 300;
    let left = r.left;
    let top  = r.bottom + 8;

    if (left + w > window.innerWidth - 12)  left = window.innerWidth - w - 12;
    if (left < 12)                           left = 12;
    if (top + 200 > window.innerHeight - 12) top = r.top - 210;
    if (top < 12)                            top = 12;

    setPos({ top, left });
    setVisible(true);
  };

  const scheduleHide = () => {
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => setVisible(false), 180);
  };

  const schoolCls = schoolColors[spellRef.school] ?? schoolColors['Mecánica'];
  const href      = wowheadUrl(spellRef.id, spellRef.type);

  const tooltip = (
    <div
      style={{ position: 'fixed', top: pos.top, left: pos.left, zIndex: 9999, width: 300 }}
      className="bg-[#0d0d18] border border-yellow-700/80 rounded-xl shadow-2xl pointer-events-auto overflow-hidden"
      onMouseEnter={show}
      onMouseLeave={scheduleHide}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-3 py-2.5 border-b border-yellow-800/30 bg-gradient-to-r from-gray-900 to-[#0d0d18]">
        <img
          src={`https://wow.zamimg.com/images/wow/icons/medium/${spellRef.icon}.jpg`}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-lg border-2 border-yellow-700/50 flex-shrink-0"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://wow.zamimg.com/images/wow/icons/medium/inv_misc_questionmark.jpg';
          }}
        />
        <div>
          <p className="text-yellow-300 font-bold text-sm leading-tight">{spellRef.name}</p>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <span className={`text-xs px-1.5 py-0.5 rounded-full border font-medium ${schoolCls}`}>
              {spellRef.school}
            </span>
            <span className="text-xs text-gray-600">
              {spellRef.type === 'npc' ? `NPC #${spellRef.id}` : spellRef.type === 'object' ? `Obj #${spellRef.id}` : `Spell #${spellRef.id}`}
            </span>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="px-3 py-3">
        <p className="text-gray-300 text-xs leading-relaxed">{spellRef.description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-1 mt-2.5 text-xs text-yellow-700 hover:text-yellow-400 transition-colors"
        >
          Ver en Wowhead →
        </a>
      </div>
    </div>
  );

  return (
    <>
      <span
        ref={spanRef}
        onMouseEnter={show}
        onMouseLeave={scheduleHide}
        className="text-yellow-300 border-b border-dashed border-yellow-600/50 cursor-help hover:text-yellow-200 hover:border-yellow-400 transition-colors"
      >
        {label}
      </span>
      {mounted && visible && createPortal(tooltip, document.body)}
    </>
  );
}

// ── Public component ─────────────────────────────────────────────────────────

interface Props {
  text: string;
  refs?: Record<string, SpellRef>;
}

export default function InlineRef({ text, refs }: Props) {
  if (!refs) return <>{text}</>;
  const segments = parseSegments(text, refs);
  return (
    <>
      {segments.map((seg, i) =>
        seg.ref ? (
          <RefSpan key={i} label={seg.text} spellRef={seg.ref} />
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}
