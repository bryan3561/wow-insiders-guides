import { ClassGuide } from './types';

export const classGuides: Record<string, ClassGuide> = {
  druida: {
    id: 'druida',
    name: 'Druida',
    nameEn: 'Druid',
    description: 'Versatile shapeshifters with unmatched utility',
    roles: ['Tank', 'Healer', 'DPS'],
    specs: [
      {
        name: 'Balance',
        role: 'DPS',
        tips: [
          'Mantén Faerie Fire e Insect Swarm activos si te toca llevar esos debuffs.',
          'Usa Force of Nature en cooldown y sincronízalo con momentos de burst.',
          'Moonfire en movimiento y Starfire como casteo principal en objetivo único.',
        ],
      },
      {
        name: 'Feral',
        role: 'Tank/DPS',
        tips: [
          'En gato, abre con Mangle (Cat) y mantén Rip/Rake activos con buena gestión de energía.',
          'En oso, prioriza Mangle (Bear), mantiene Lacerate acumulado y usa Maul para amenaza.',
          'Usa powershifting con cabeza para sostener DPS/amenaza sin quedarte seco de maná.',
        ],
      },
      {
        name: 'Restoration',
        role: 'Healer',
        tips: [
          'Mantén Lifebloom acumulado en el tanque y refresca antes de que expire.',
          'Rejuvenation + Regrowth para daño constante, Healing Touch para picos fuertes.',
          'Swiftmend e Innervate son tus herramientas clave de emergencia y gestión de maná.',
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
    nameEn: 'Hunter',
    description: 'Mobile ranged DPS with powerful pets and crowd control',
    roles: ['DPS'],
    specs: [
      {
        name: 'Beast Mastery',
        role: 'DPS',
        tips: [
          'Mantén Hunter\'s Mark y deja a la mascota con uptime total en el objetivo.',
          'Steady Shot como relleno, encajando Auto Shot sin cortar el ciclo.',
          'Usa Bestial Wrath, Kill Command y Rapid Fire juntos para ventanas de burst.',
        ],
      },
      {
        name: 'Marksmanship',
        role: 'DPS',
        tips: [
          'Mantén Hunter\'s Mark y prioriza Aimed Shot/Multi-Shot en cooldown.',
          'Steady Shot rellena la rotación respetando el ritmo de Auto Shot.',
          'Readiness (si lo llevas) se usa para resetear cooldowns en fases de daño.',
        ],
      },
      {
        name: 'Survival',
        role: 'DPS',
        tips: [
          'Mantén Hunter\'s Mark y juega a maximizar crítico para mejorar Expose Weakness.',
          'Prioriza Aimed Shot/Multi-Shot y usa Steady Shot como relleno.',
          'En AoE usa traps con seguridad y evita perder uptime de daño al objetivo principal.',
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
    nameEn: 'Mage',
    description: 'Pure ranged casters dealing massive elemental damage',
    roles: ['DPS'],
    specs: [
      {
        name: 'Fire',
        role: 'DPS',
        tips: [
          'Si está asignado, aplica 5 stacks de Improved Scorch y luego mantén el debuff.',
          'Fireball es tu casteo principal de objetivo único en la mayoría de encuentros.',
          'Usa Combustion y consumibles ofensivos en ventanas de burst.',
        ],
      },
      {
        name: 'Frost',
        role: 'DPS',
        tips: [
          'Frostbolt es el núcleo de la rotación en objetivo único.',
          'Invoca Water Elemental en fases de daño sostenido o burst largo.',
          'Para varios objetivos, prioriza Blizzard/Arcane Explosion según el riesgo.',
        ],
      },
      {
        name: 'Arcane',
        role: 'DPS',
        tips: [
          'Juega ciclos de Arcane Blast (2-3 casts) y resetea con Arcane Missiles cuando convenga.',
          'Arcane Power y Presence of Mind se guardan para ventanas de burst real.',
          'Controla el maná con gems y Evocation para no caer fuera de la rotación.',
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
    nameEn: 'Paladin',
    description: 'Holy warriors combining melee damage with divine magic',
    roles: ['Tank', 'Healer', 'DPS'],
    specs: [
      {
        name: 'Holy',
        role: 'Healer',
        tips: [
          'Flash of Light es el heal eficiente; Holy Light para picos de daño al tanque.',
          'Mantén bendiciones/judgement de utilidad cuando la pelea lo permita.',
          'Holy Shock y Divine Favor se reservan para salvar objetivos en peligro.',
        ],
      },
      {
        name: 'Protection',
        role: 'Tank',
        tips: [
          'Mantén Righteous Fury y Holy Shield activos en todo momento.',
          'Consecration + Judgement/Seal of Righteousness forman tu base de amenaza.',
          'Abre pulls con Avenger\'s Shield y controla packs con buena colocación.',
        ],
      },
      {
        name: 'Retribution',
        role: 'DPS',
        tips: [
          'Mantén tu sello activo (Command/Blood según facción) y juzga en cooldown.',
          'Crusader Strike es prioridad constante en objetivo único.',
          'Consecration y Exorcism se usan con cabeza para no romper tu maná.',
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
    nameEn: 'Priest',
    description: 'Master healers and dark casters with unique buffs',
    roles: ['Healer', 'DPS'],
    specs: [
      {
        name: 'Holy',
        role: 'Healer',
        tips: [
          'Prayer of Mending y Circle of Healing son claves cuando hay daño de raid.',
          'Renew se mantiene en objetivos con daño sostenido; Greater Heal para picos.',
          'Gestiona rangos de heal para mantener maná en combates largos.',
        ],
      },
      {
        name: 'Discipline',
        role: 'Healer',
        tips: [
          'Power Word: Shield y Prayer of Mending se aplican de forma preventiva.',
          'Flash Heal como relleno, Greater Heal para estabilizar daño alto.',
          'Inner Focus y Pain Suppression se usan en mecánicas de alto riesgo.',
        ],
      },
      {
        name: 'Shadow',
        role: 'DPS',
        tips: [
          'Mantén Vampiric Touch y Shadow Word: Pain activos en el objetivo.',
          'Prioriza Mind Blast en cooldown y rellena con Mind Flay.',
          'Shadowfiend y consumibles de maná se guardan para sostener DPS largo.',
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
    nameEn: 'Rogue',
    description: 'Deadly assassins dealing massive burst with stealth',
    roles: ['DPS'],
    specs: [
      {
        name: 'Assassination',
        role: 'DPS',
        tips: [
          'Abre con Mutilate y mantén Slice and Dice activo todo el combate.',
          'Usa Rupture/Envenom o Eviscerate según tu setup de venenos y duración.',
          'Asegura venenos correctos en ambas armas y maximiza uptime en espalda.',
        ],
      },
      {
        name: 'Combat',
        role: 'DPS',
        tips: [
          'Sinister Strike genera combo points; Slice and Dice nunca debe caerse.',
          'Usa Rupture/Eviscerate como finishers según duración del objetivo.',
          'Combina Blade Flurry y Adrenaline Rush en fases de daño importante.',
        ],
      },
      {
        name: 'Subtlety',
        role: 'DPS',
        tips: [
          'Hemorrhage y Backstab son tu base para construir combo points.',
          'Mantén Slice and Dice y remata con Rupture o Eviscerate según encuentro.',
          'Shadowstep, Premeditation y Vanish se usan para burst y reposicionamiento.',
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
    nameEn: 'Shaman',
    description: 'Versatile spellcasters with elemental power and totems',
    roles: ['Healer', 'DPS'],
    specs: [
      {
        name: 'Elemental',
        role: 'DPS',
        tips: [
          'Chain Lightning en cooldown y Lightning Bolt como relleno principal.',
          'Flame Shock se usa cuando encaja sin romper el ritmo de casteo.',
          'Sincroniza Elemental Mastery con trinkets y mantén totems de utilidad activos.',
        ],
      },
      {
        name: 'Enhancement',
        role: 'DPS',
        tips: [
          'Mantén imbues correctos en armas y totems de grupo siempre activos.',
          'Stormstrike en cooldown y shocks entre swings sin clippear autos.',
          'Shamanistic Rage se usa para sostener maná y no perder uptime.',
        ],
      },
      {
        name: 'Restoration',
        role: 'Healer',
        tips: [
          'Chain Heal es la base cuando el grupo recibe daño en cadena.',
          'Mantén Earth Shield en el tanque y Water Shield en ti.',
          'Lesser Healing Wave/Healing Wave se usan para spot heal y picos de daño.',
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
    nameEn: 'Warlock',
    description: 'Dark casters commanding demons and curses',
    roles: ['DPS'],
    specs: [
      {
        name: 'Affliction',
        role: 'DPS',
        tips: [
          'Mantén Curse of Agony, Corruption y Unstable Affliction activos siempre.',
          'Rellena con Shadow Bolt o Drain Life según build y situación.',
          'En AoE, Seed of Corruption es la prioridad en packs de trash.',
        ],
      },
      {
        name: 'Demonology',
        role: 'DPS',
        tips: [
          'Asegura uptime total de tu demonio (normalmente Felguard).',
          'Mantén DoTs base y rellena con Shadow Bolt para daño constante.',
          'Usa Demonic Empowerment y cooldowns de burst junto a trinkets.',
        ],
      },
      {
        name: 'Destruction',
        role: 'DPS',
        tips: [
          'Aplica la curse asignada del raid y mantén Immolate si tu build lo requiere.',
          'Shadow Bolt (o Incinerate en build de fuego) como casteo principal.',
          'Conflagrate se usa en build de fuego para burst y presión en ventanas cortas.',
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
    nameEn: 'Warrior',
    description: 'Mighty melee combatants excelling in tanks or DPS roles',
    roles: ['Tank', 'DPS'],
    specs: [
      {
        name: 'Arms',
        role: 'DPS',
        tips: [
          'Mortal Strike en cooldown y Whirlwind como segunda prioridad.',
          'Slam se usa como relleno cuando la ventana del swing lo permite.',
          'Mantén Battle Shout activo y ejecuta con Execute en fase final.',
        ],
      },
      {
        name: 'Fury',
        role: 'DPS',
        tips: [
          'Bloodthirst y Whirlwind se lanzan en cooldown como núcleo de rotación.',
          'Heroic Strike actúa como dump de ira cuando tienes exceso de rage.',
          'Mantén Rampage/Battle Shout y prioriza Execute por debajo del 20%.',
        ],
      },
      {
        name: 'Protection',
        role: 'Tank',
        tips: [
          'Shield Slam y Revenge son tus habilidades de mayor amenaza en objetivo único.',
          'Devastate rellena para mantener Sunder Armor y controlar la rotación.',
          'Shield Block, Thunder Clap y Demoralizing Shout deben mantenerse activos.',
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
