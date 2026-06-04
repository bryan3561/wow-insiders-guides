import { ClassGuide } from './types';

export const classGuides: Record<string, ClassGuide> = {
  druida: {
    id: 'druida',
    name: 'Druida',
    description: 'Versatile shapeshifters with unmatched utility',
    roles: ['Tank', 'Healer', 'DPS'],
    specs: [
      {
        name: 'Balance',
        role: 'DPS',
        tips: [
          'Mantener Moonfire activo en todo momento para maximizar daño DoT',
          'Alternar entre Starfire y Wrath según el haste y la energía lunar',
          'Usar Nature\'s Grace como GCD reductor tras crits para optimizar cast time',
        ],
      },
      {
        name: 'Feral',
        role: 'Tank/DPS',
        tips: [
          'Mantener Rake y Rip activos mientras stackeas Mangle (Cat) para burst',
          'En forma de oso usar Mangle (Bear) y Lacerate para threat y defensa',
          'Cuidar la energía para no perder uptime en ataques principales',
        ],
      },
      {
        name: 'Restoration',
        role: 'Healer',
        tips: [
          'Mantener Rejuvenation activo en el tank para healing continuo',
          'Usar Regrowth para healing emergency y Healing Touch para big heals',
          'Lifebloom es eficiente en mana en raids para healing consistente',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Super Mana Potion', effect: '+1800 Mana' },
      { type: 'pocion', name: 'Haste Potion', effect: '+25% Haste por 15s' },
      { type: 'comida', name: 'Roasted Clefthoof', effect: '+20 Sta, +20 Int' },
      { type: 'buff', name: 'Arcane Intellect', effect: '+40 Int por grupo' },
      { type: 'buff', name: 'Mark of the Wild', effect: '+5% stats' },
    ],
    talentResources: [
      {
        spec: 'Balance',
        title: 'Balance Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/druid/balance-dps',
      },
      {
        spec: 'Feral',
        title: 'Feral Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/druid/feral-dps',
      },
      {
        spec: 'Restoration',
        title: 'Restoration Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/druid/restoration',
      },
    ],
  },

  cazador: {
    id: 'cazador',
    name: 'Cazador',
    description: 'Mobile ranged DPS with powerful pets and crowd control',
    roles: ['DPS'],
    specs: [
      {
        name: 'Beast Mastery',
        role: 'DPS',
        tips: [
          'Mantener Serpent Sting activo mientras el pet daña al enemigo',
          'Usar Killshot cuando el enemigo está por debajo de 20% health',
          'Coordinar pet special abilities con Bestial Wrath para burst damage',
        ],
      },
      {
        name: 'Marksmanship',
        role: 'DPS',
        tips: [
          'Mantener Serpent Sting activo para maximizar damage per second',
          'Usar Aimed Shot después de procs de Trigger para crits garantizados',
          'Aplicar Multi-Shot en pulls múltiples para aggro management',
        ],
      },
      {
        name: 'Survival',
        role: 'DPS',
        tips: [
          'Usar Explosive Trap en pulls para AOE damage inicial',
          'Mantener Serpent Sting en el target principal',
          'Usar Raptor Strike en melee para extra damage cuando es seguro',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Haste Potion', effect: '+25% Haste por 15s' },
      { type: 'pocion', name: 'Damage Potion', effect: '+40 Ataque' },
      { type: 'comida', name: 'Roasted Clefthoof', effect: '+20 Sta, +20 Agi' },
      { type: 'buff', name: 'Blessing of Kings', effect: '+10% stats' },
      { type: 'buff', name: 'Blessing of Might', effect: '+25 Ataque' },
    ],
    talentResources: [
      {
        spec: 'Beast Mastery',
        title: 'Beast Mastery Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/hunter/beast-mastery',
      },
      {
        spec: 'Marksmanship',
        title: 'Marksmanship Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/hunter/marksmanship',
      },
      {
        spec: 'Survival',
        title: 'Survival Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/hunter/survival',
      },
    ],
  },

  mago: {
    id: 'mago',
    name: 'Mago',
    description: 'Pure ranged casters dealing massive elemental damage',
    roles: ['DPS'],
    specs: [
      {
        name: 'Fire',
        role: 'DPS',
        tips: [
          'Mantener Pyroblast como ataques principales con casts rápidos',
          'Usar Hot Streak procs para Instant Pyroblasts sin cast',
          'Aplicar Ignite stack para DoT damage consistente',
        ],
      },
      {
        name: 'Frost',
        role: 'DPS',
        tips: [
          'Mantener Frostbolt como core spell con slow effects',
          'Usar Ice Lance para daño adicional en targets slowed',
          'Aplicar Water Elemental para extra dps pasivo',
        ],
      },
      {
        name: 'Arcane',
        role: 'DPS',
        tips: [
          'Usar Arcane Blast para stack Arcane Potency',
          'Aplicar Arcane Missiles cuando stacks altos para burst damage',
          'Monitorear mana para mantener uptime de casting',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Super Mana Potion', effect: '+1800 Mana' },
      { type: 'pocion', name: 'Spell Power Potion', effect: '+40 Daño Mágico' },
      { type: 'comida', name: 'Spicy Crawdad', effect: '+20 Inte, +20 Spi' },
      { type: 'buff', name: 'Arcane Intellect', effect: '+40 Int' },
      { type: 'buff', name: 'Dampen Magic', effect: '-50% magic damage' },
    ],
    talentResources: [
      {
        spec: 'Fire',
        title: 'Fire Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/mage/fire-dps',
      },
      {
        spec: 'Frost',
        title: 'Frost Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/mage/frost-dps',
      },
      {
        spec: 'Arcane',
        title: 'Arcane Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/mage/arcane-dps',
      },
    ],
  },

  paladin: {
    id: 'paladin',
    name: 'Paladín',
    description: 'Holy warriors combining melee damage with divine magic',
    roles: ['Tank', 'Healer', 'DPS'],
    specs: [
      {
        name: 'Holy',
        role: 'Healer',
        tips: [
          'Mantener Holy Light en el tank para healing consistente',
          'Usar Flash of Light para healing rápido y emergency situations',
          'Aplicar Sacred Shield para mitigar incoming damage',
        ],
      },
      {
        name: 'Protection',
        role: 'Tank',
        tips: [
          'Usar Consecration para AOE threat en packs',
          'Mantener Holy Shield para mitigación de daño con shield block',
          'Usar Hammer of Justice para stun utility',
        ],
      },
      {
        name: 'Retribution',
        role: 'DPS',
        tips: [
          'Usar Judgment como opener para extra damage',
          'Mantener Seal of Vengeance para DoT damage stack',
          'Usar Divine Storm para AOE damage en pulls múltiples',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Super Mana Potion', effect: '+1800 Mana' },
      { type: 'pocion', name: 'Defense Potion', effect: '+350 Armor' },
      { type: 'comida', name: 'Roasted Clefthoof', effect: '+20 Sta, +20 Str' },
      { type: 'buff', name: 'Blessing of Kings', effect: '+10% stats' },
      { type: 'buff', name: 'Blessing of Sanctuary', effect: '+Sta y Armor' },
    ],
    talentResources: [
      {
        spec: 'Holy',
        title: 'Holy Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/paladin/holy',
      },
      {
        spec: 'Protection',
        title: 'Protection Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/paladin/protection',
      },
      {
        spec: 'Retribution',
        title: 'Retribution Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/paladin/retribution',
      },
    ],
  },

  sacerdote: {
    id: 'sacerdote',
    name: 'Sacerdote',
    description: 'Master healers and dark casters with unique buffs',
    roles: ['Healer', 'DPS'],
    specs: [
      {
        name: 'Holy',
        role: 'Healer',
        tips: [
          'Mantener Renew activo en todo momento para healing over time',
          'Usar Healing Prayer para big heals en el tank',
          'Aplicar Power Word: Shield antes del daño para absorption',
        ],
      },
      {
        name: 'Discipline',
        role: 'Healer',
        tips: [
          'Usar Power Word: Shield proactivamente en el tank',
          'Mantener Power Word: Fortitude buff activo',
          'Usar Penance para healing consistente con GCD reducido',
        ],
      },
      {
        name: 'Shadow',
        role: 'DPS',
        tips: [
          'Mantener Shadow Word: Pain y Devouring Plague activos',
          'Usar Mind Blast cuando cooldown está disponible',
          'Usar Mind Flay para filler damage entre mind blasts',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Super Mana Potion', effect: '+1800 Mana' },
      { type: 'pocion', name: 'Spell Power Potion', effect: '+40 Daño Mágico' },
      { type: 'comida', name: 'Spicy Crawdad', effect: '+20 Inte, +20 Spi' },
      { type: 'buff', name: 'Power Word: Fortitude', effect: '+131 HP' },
      { type: 'buff', name: 'Divine Spirit', effect: '+50 Spirit' },
    ],
    talentResources: [
      {
        spec: 'Holy',
        title: 'Holy Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/priest/holy',
      },
      {
        spec: 'Discipline',
        title: 'Discipline Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/priest/discipline',
      },
      {
        spec: 'Shadow',
        title: 'Shadow Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/priest/shadow',
      },
    ],
  },

  picaro: {
    id: 'picaro',
    name: 'Pícaro',
    description: 'Deadly assassins dealing massive burst with stealth',
    roles: ['DPS'],
    specs: [
      {
        name: 'Assassination',
        role: 'DPS',
        tips: [
          'Usar Ambush desde stealth para opener damage masivo',
          'Mantener Deadly Poison en las armas para DoT',
          'Usar Eviscerate con máximo combo points para finishing move',
        ],
      },
      {
        name: 'Combat',
        role: 'DPS',
        tips: [
          'Usar Sinister Strike como generator principal de combo points',
          'Mantener Slice and Dice activo para haste buff',
          'Usar Rupture para DoT damage consistente',
        ],
      },
      {
        name: 'Subtlety',
        role: 'DPS',
        tips: [
          'Usar Backstab desde stealth para critical strikes guaranteed',
          'Mantener Hemorrhage activo para bleed damage stack',
          'Usar Shadow Dance para reapply stealth abilities',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Haste Potion', effect: '+25% Haste por 15s' },
      { type: 'pocion', name: 'Damage Potion', effect: '+40 Ataque' },
      { type: 'comida', name: 'Roasted Clefthoof', effect: '+20 Sta, +20 Agi' },
      { type: 'buff', name: 'Blessing of Kings', effect: '+10% stats' },
      { type: 'buff', name: 'Blessing of Might', effect: '+25 Ataque' },
    ],
    talentResources: [
      {
        spec: 'Assassination',
        title: 'Assassination Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/rogue/assassination',
      },
      {
        spec: 'Combat',
        title: 'Combat Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/rogue/combat',
      },
      {
        spec: 'Subtlety',
        title: 'Subtlety Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/rogue/subtlety',
      },
    ],
  },

  chaman: {
    id: 'chaman',
    name: 'Chamán',
    description: 'Versatile spellcasters with elemental power and totems',
    roles: ['Healer', 'DPS'],
    specs: [
      {
        name: 'Elemental',
        role: 'DPS',
        tips: [
          'Mantener Flame Shock activo para DoT damage',
          'Usar Lightning Bolt como spam principal con haste',
          'Usar Chain Lightning en pulls para AOE damage',
        ],
      },
      {
        name: 'Enhancement',
        role: 'DPS',
        tips: [
          'Usar Stormstrike para melee attacks con spell power scaling',
          'Mantener Riptide activo en target principal',
          'Usar Earth Shock para interrupt y extra damage',
        ],
      },
      {
        name: 'Restoration',
        role: 'Healer',
        tips: [
          'Usar Healing Wave para big heals en emergency',
          'Mantener Riptide activo para healing over time',
          'Usar Chaining Heal en grouped targets para AOE healing',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Super Mana Potion', effect: '+1800 Mana' },
      { type: 'pocion', name: 'Spell Power Potion', effect: '+40 Daño Mágico' },
      { type: 'comida', name: 'Roasted Clefthoof', effect: '+20 Sta, +20 Int' },
      { type: 'buff', name: 'Windfury Totem', effect: '+25% Ataque y swing' },
      { type: 'buff', name: 'Mana Spring Totem', effect: '+50 Mana/5sec' },
    ],
    talentResources: [
      {
        spec: 'Elemental',
        title: 'Elemental Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/shaman/elemental',
      },
      {
        spec: 'Enhancement',
        title: 'Enhancement Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/shaman/enhancement',
      },
      {
        spec: 'Restoration',
        title: 'Restoration Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/shaman/restoration',
      },
    ],
  },

  brujo: {
    id: 'brujo',
    name: 'Brujo',
    description: 'Dark casters commanding demons and curses',
    roles: ['DPS'],
    specs: [
      {
        name: 'Affliction',
        role: 'DPS',
        tips: [
          'Mantener Curse of Agony activo en el target para consistent DoT',
          'Usar Unstable Affliction para increased damage DoT',
          'Aplicar Drain Life para sustain y healing',
        ],
      },
      {
        name: 'Demonology',
        role: 'DPS',
        tips: [
          'Usar Demon pet como secondary damage source',
          'Mantener Immolate activo en el target',
          'Usar Demonic Empowerment para boost pet damage',
        ],
      },
      {
        name: 'Destruction',
        role: 'DPS',
        tips: [
          'Usar Chaos Bolt como main burst spell',
          'Mantener Immolate para DoT damage stack',
          'Usar Conflagrate para extra procs y damage',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Super Mana Potion', effect: '+1800 Mana' },
      { type: 'pocion', name: 'Spell Power Potion', effect: '+40 Daño Mágico' },
      { type: 'comida', name: 'Spicy Crawdad', effect: '+20 Inte, +20 Spi' },
      { type: 'buff', name: 'Arcane Intellect', effect: '+40 Int' },
      { type: 'buff', name: 'Fel Armor', effect: '+Resistencia mágica' },
    ],
    talentResources: [
      {
        spec: 'Affliction',
        title: 'Affliction Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/warlock/affliction',
      },
      {
        spec: 'Demonology',
        title: 'Demonology Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/warlock/demonology',
      },
      {
        spec: 'Destruction',
        title: 'Destruction Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/warlock/destruction',
      },
    ],
  },

  guerrero: {
    id: 'guerrero',
    name: 'Guerrero',
    description: 'Mighty melee combatants excelling in tanks or DPS roles',
    roles: ['Tank', 'DPS'],
    specs: [
      {
        name: 'Arms',
        role: 'DPS',
        tips: [
          'Usar Mortal Strike para big damage hits con debuff',
          'Mantener Rend activo para DoT damage consistente',
          'Usar Whirlwind en pulls para AOE threat management',
        ],
      },
      {
        name: 'Fury',
        role: 'DPS',
        tips: [
          'Usar Bloodthirst para healing y damage dual wield attack',
          'Mantener Enrage activo para increased damage buff',
          'Usar Whirlwind cuando available para AOE burst',
        ],
      },
      {
        name: 'Protection',
        role: 'Tank',
        tips: [
          'Usar Shield Bash para interrupts y threat generation',
          'Mantener Shield Block activo para increased armor',
          'Usar Revenge after blocks para threat generation',
        ],
      },
    ],
    consumables: [
      { type: 'pocion', name: 'Haste Potion', effect: '+25% Haste por 15s' },
      { type: 'pocion', name: 'Damage Potion', effect: '+40 Ataque' },
      { type: 'comida', name: 'Roasted Clefthoof', effect: '+20 Sta, +20 Str' },
      { type: 'buff', name: 'Blessing of Kings', effect: '+10% stats' },
      { type: 'buff', name: 'Blessing of Might', effect: '+25 Ataque' },
    ],
    talentResources: [
      {
        spec: 'Arms',
        title: 'Arms Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/warrior/arms',
      },
      {
        spec: 'Fury',
        title: 'Fury Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/warrior/fury',
      },
      {
        spec: 'Protection',
        title: 'Protection Talent Guide',
        url: 'https://www.wowhead.com/classic/talent-calc/warrior/protection',
      },
    ],
  },
};
