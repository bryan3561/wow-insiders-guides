'use client';

import { useState, useEffect } from 'react';
import type { Boss } from '@/data/types';

interface Props {
  bosses: Boss[];
}

export default function SideNav({ bosses }: Props) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -55% 0px', threshold: 0 }
    );

    bosses.forEach((boss) => {
      const el = document.getElementById(boss.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [bosses]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  let lastGroup = '';

  return (
    <nav className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto wow-scrollbar">
      <div className="bg-gray-900/80 border border-gray-700/60 rounded-xl p-3 backdrop-blur">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
          Jefes
        </p>
        <ul className="space-y-0.5">
          {bosses.map((boss) => {
            const showGroupHeader = boss.group && boss.group !== lastGroup;
            if (boss.group) lastGroup = boss.group;

            return (
              <li key={boss.id}>
                {showGroupHeader && (
                  <p className="text-xs text-purple-500/80 font-semibold px-2 pt-2 pb-1 uppercase tracking-wide">
                    {boss.group}
                  </p>
                )}
                <button
                  onClick={() => scrollTo(boss.id)}
                  className={`w-full text-left px-2 py-1.5 rounded-lg text-sm transition-all duration-150 ${
                    activeId === boss.id
                      ? 'bg-yellow-900/40 text-yellow-400 font-semibold border border-yellow-800/60'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/80 border border-transparent'
                  }`}
                >
                  {boss.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
