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

export type SpellRefType = 'spell' | 'npc' | 'object';

export interface SpellRef {
  id: number;
  type: SpellRefType;
  name: string;
  icon: string;
  school: string;
  description: string;
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
  spellRefs?: Record<string, SpellRef>;
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

export interface LevelingMaterial {
  name: string;
  qty: number;
}

export interface LevelingStep {
  from: number;
  to: number;
  action: string;
  materials?: LevelingMaterial[];
  note?: string;
  alt?: string;
}

export interface ProfTrainer {
  name: string;
  location: string;
  faction?: 'alianza' | 'horda' | 'neutro';
}

export interface ProfLevelingGuide {
  id: string;
  trainers: ProfTrainer[];
  totalMaterials: LevelingMaterial[];
  tips: string[];
  sections: {
    label: string;
    steps: LevelingStep[];
  }[];
}

export interface ClassRotationTip {
  title?: string;
  description?: string;
  tips?: string[];
}

export interface Consumable {
  name: string;
  type: 'pocion' | 'comida' | 'buff' | 'otro' | 'Potion' | 'Food' | 'Buff';
  effect: string;
  priority?: 'alta' | 'media' | 'baja';
}

export interface ResourceLink {
  spec?: string;
  title?: string;
  label?: string;
  url: string;
  description?: string;
}

export interface ClassSpec {
  name: string;
  role: string;
  tips: string[];
}

export interface ClassGuide {
  id: string;
  name: string;
  description: string;
  roles: string[];
  specs: ClassSpec[];
  rotation?: ClassRotationTip[];
  consumables: Consumable[];
  talentLinks?: ResourceLink[];
  talentResources?: ResourceLink[];
  tips?: string[];
}
