export type AbilityType = 'damage' | 'debuff' | 'interrupt' | 'tank' | 'adds' | 'mechanics';

export interface Ability {
  id: string;
  name: string;
  icon: string;
  description: string;
  type: AbilityType;
  tip: string;
  warning?: string;
}

export interface Phase {
  name: string;
  description: string;
  events?: string[];
}

export interface Boss {
  id: string;
  name: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  tankCount: number;
  healerCount: number;
  abilities: Ability[];
  strategy: string;
  phases?: Phase[];
  group?: string;
}

export interface RaidMeta {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  players: 10 | 25;
  patch: string;
  bossCount: number;
  difficulty: 'inicial' | 'intermedio' | 'avanzado' | 'final';
  icon: string;
  color: string;
  border: string;
}
