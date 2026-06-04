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
          'Objetivo único (prioridad): 1) Faerie Fire si estás asignado, 2) Insect Swarm si estás asignado, 3) mantén Moonfire activo, 4) Force of Nature en cooldown, 5) Starfire como relleno.',
          'No renueves DoTs antes de tiempo; deja que expiren para no perder ticks y maná.',
          'En movimiento, refresca Moonfire y vuelve a Starfire en cuanto puedas quedarte quieto.',
          'AoE 2-3 objetivos: aplica Moonfire en varios objetivos y continúa con la prioridad de objetivo único.',
          'AoE 4+ objetivos: Moonfire a múltiples objetivos y Hurricane como canalización principal.',
        ],
      },
      {
        name: 'Feral',
        role: 'Tank/DPS',
        tips: [
          'Feral DPS (gato): abre con Mangle (Cat), mantén Slice and Dice y Rip con uptime alto.',
          'Rake entra cuando no compromete el ciclo de energía/combo points; Shred es el generador principal detrás del objetivo.',
          'Usa Ferocious Bite solo cuando Rip/Slice and Dice estén seguros y tengas energía sobrante.',
          'Feral tanque (oso): prioridad de amenaza con Mangle (Bear) > mantener 5x Lacerate > Maul como dump de ira.',
          'En packs, Swipe (Bear) + Maul cleave y reposicionamiento constante para mantener control de adds.',
        ],
      },
      {
        name: 'Restoration',
        role: 'Healer',
        tips: [
          'Prioridad de tanque: mantener 3 acumulaciones de Lifebloom y refrescarlas justo antes de expirar.',
          'Rejuvenation + Regrowth en objetivos con daño sostenido; Swiftmend para estabilizar picos inmediatos.',
          'Healing Touch (rangos adecuados) para daño alto predecible, evitando overheal innecesario.',
          'En daño de raid, distribuye HoTs por anticipación en objetivos que recibirán daño continuo.',
          'Innervate se usa temprano en combates largos para maximizar su valor total de maná.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Blinding Light', effect: '+Spell Damage for caster builds' },
      { type: 'elixir', name: "Adept's Elixir", effect: '+Spell Damage and Healing' },
      { type: 'food', name: 'Blackened Basilisk', effect: '+Spell Damage food' },
      { type: 'potion', name: 'Super Mana Potion', effect: 'Mana restore for long encounters' },
      { type: 'weapon', name: 'Brilliant Wizard Oil', effect: '+Spell Damage on weapon' },
    ],
    talentResources: [
      {
        spec: 'Balance',
        title: 'Balance Talent Guide',
        url: 'https://wowtbc.gg/class-guides/balance-druid/',
      },
      {
        spec: 'Feral',
        title: 'Feral Talent Guide',
        url: 'https://wowtbc.gg/class-guides/feral-druid/',
      },
      {
        spec: 'Restoration',
        title: 'Restoration Talent Guide',
        url: 'https://wowtbc.gg/class-guides/restoration-druid/',
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
          'Objetivo único (prioridad): Aspect of the Hawk activo; cambia a Aspect of the Viper cuando el maná lo exija.',
          'Mantén Hunter\'s Mark si estás asignado y controla uptime total de tu pet sobre el objetivo.',
          'Bestial Wrath + Rapid Fire + trinkets on-use en ventanas de burst o lust/heroism.',
          'Dispara Kill Command en proc y ejecuta el ciclo de Steady Shot sin clippear Auto Shot.',
          'Añade melee weaving (Raptor Strike/Auto Attack) cuando sea seguro para aumentar DPS total.',
        ],
      },
      {
        name: 'Marksmanship',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): Aspect of the Hawk activo; cambia a Aspect of the Viper en fases de maná bajo.',
          'Mantén Hunter\'s Mark y Scorpid Sting solo si te corresponde llevarlos en la raid.',
          'Usa Rapid Fire, Bestial Wrath (si aplica por build) y efectos on-use en ventanas de daño.',
          'Kill Command en proc; rota Multi-Shot/Steady Shot respetando siempre el ritmo de Auto Shot.',
          'Melee weaving con Raptor Strike tras disparos cuando la pelea lo permita sin perder uptime.',
        ],
      },
      {
        name: 'Survival',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): Aspect of the Hawk y máximo uptime de Hunter\'s Mark si estás asignado.',
          'Juega alrededor de crítico para mantener Expose Weakness con alta consistencia.',
          'Aimed Shot/Multi-Shot en cooldown, Steady Shot como relleno sin cortar Auto Shot.',
          'Kill Command en proc y cooldowns de daño alineados con trinkets y fases de burst.',
          'En AoE controlado, combina traps con Multi-Shot manteniendo daño al objetivo prioritario.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Relentless Assault', effect: '+Attack Power for DPS builds' },
      { type: 'elixir', name: 'Elixir of Major Agility', effect: '+Agility for ranged physical DPS' },
      { type: 'food', name: 'Grilled Mudfish', effect: '+Agility food' },
      { type: 'potion', name: 'Haste Potion', effect: 'Short burst of attack speed' },
      { type: 'weapon', name: 'Adamantite Sharpening Stone', effect: '+Weapon damage for melee variants' },
    ],
    talentResources: [
      {
        spec: 'Beast Mastery',
        title: 'Beast Mastery Talent Guide',
        url: 'https://wowtbc.gg/class-guides/beast-mastery-hunter/',
      },
      {
        spec: 'Marksmanship',
        title: 'Marksmanship Talent Guide',
        url: 'https://wowtbc.gg/class-guides/marksmanship-hunter/',
      },
      {
        spec: 'Survival',
        title: 'Survival Talent Guide',
        url: 'https://wowtbc.gg/class-guides/survival-hunter/',
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
          'Objetivo único (prioridad): aplica 5 stacks de Improved Scorch si eres el asignado y mantenlos activos.',
          'Fireball es el relleno principal; evita cortar casteos y prioriza uptime continuo.',
          'Combustion + trinkets/poción ofensiva en ventanas de burst o con buffs de raid.',
          'Si hay movimiento, usa instants disponibles y vuelve a Fireball lo antes posible.',
          'AoE: Arcane Explosion/Blizzard según riesgo y posicionamiento del pack.',
        ],
      },
      {
        name: 'Frost',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): Frostbolt constante como base de daño sostenido.',
          'Usa Water Elemental en fases de daño largo o cuando necesites reforzar burst controlado.',
          'Gestiona cooldowns para no perder uptime de casteo durante mecánicas de movimiento.',
          'AoE 3+: Blizzard como herramienta principal cuando el pack permanece agrupado.',
          'AoE cercano/riesgoso: Arcane Explosion solo si la posición del boss/pack lo permite.',
        ],
      },
      {
        name: 'Arcane',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): 1) Mage Armor activo, 2) Icy Veins + Arcane Power + on-use en ventana de burst.',
          'Tras abrir burst, usa Cold Snap para recuperar Icy Veins y volver a encadenar la ventana de daño.',
          'Presence of Mind se combina con Arcane Blast justo antes de terminar Arcane Power para exprimir el cierre del CD.',
          'Arcane Blast es el núcleo; cuando el maná cae demasiado, Evocation para resetear recursos.',
          'Fuera de cooldowns de burst, Frostbolt funciona como fase de conservación de maná; Fire Blast solo al moverte.',
          'AoE: Arcane Explosion como prioridad principal en packs.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Blinding Light', effect: '+Spell Damage for raiding' },
      { type: 'elixir', name: 'Elixir of Draenic Wisdom', effect: '+Intellect and Spirit' },
      { type: 'food', name: 'Blackened Basilisk', effect: '+Spell Damage food' },
      { type: 'potion', name: 'Super Mana Potion', effect: 'Mana restore for long fights' },
      { type: 'weapon', name: 'Brilliant Wizard Oil', effect: '+Spell Damage on weapon' },
    ],
    talentResources: [
      {
        spec: 'Fire',
        title: 'Fire Talent Guide',
        url: 'https://wowtbc.gg/class-guides/fire-mage/',
      },
      {
        spec: 'Frost',
        title: 'Frost Talent Guide',
        url: 'https://wowtbc.gg/class-guides/frost-mage/',
      },
      {
        spec: 'Arcane',
        title: 'Arcane Talent Guide',
        url: 'https://wowtbc.gg/class-guides/arcane-mage/',
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
          'Prioridad de curación: Flash of Light como relleno eficiente y Holy Light para picos al tanque.',
          'Mantén bendiciones/judgements de utilidad sin comprometer tus ventanas de curación críticas.',
          'Holy Shock + Divine Favor como combo de emergencia para salvar objetivos en riesgo.',
          'Ajusta rango de hechizos según daño entrante para mejorar eficiencia de maná.',
          'Super Mana Potion, runas y CDs defensivos se usan de forma planificada en peleas largas.',
        ],
      },
      {
        name: 'Protection',
        role: 'Tank',
        tips: [
          'Prioridad de tanqueo: Righteous Fury activo permanentemente y Holy Shield sin caídas.',
          'Consecration + Judgement/Seal of Righteousness para construir amenaza sostenida.',
          'Pull inicial con Avenger\'s Shield y colocación rápida para fijar packs grandes.',
          'Mantén uptime defensivo con cooldowns según picos de daño y tipo de pack.',
          'En AoE, refuerza control con ticks de Consecration y cambios rápidos de objetivo.',
        ],
      },
      {
        name: 'Retribution',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): sello activo (Command/Blood según facción) y Judgement en cooldown.',
          'Crusader Strike es la habilidad principal de presión constante.',
          'Consecration y Exorcism se usan cuando no comprometen la gestión de maná.',
          'Sincroniza trinkets y poción con tus ventanas de daño fuerte.',
          'Mantén uptime total cuerpo a cuerpo y evita perder GCDs por mala posición.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Fortification', effect: '+Health and defense for tanking' },
      { type: 'elixir', name: 'Elixir of Major Defense', effect: '+Armor and survivability' },
      { type: 'food', name: 'Roasted Clefthoof', effect: '+Strength and Stamina food' },
      { type: 'potion', name: 'Super Mana Potion', effect: 'Mana restore for Holy and Retribution' },
      { type: 'weapon', name: 'Adamantite Sharpening Stone', effect: '+Weapon damage for Retribution' },
    ],
    talentResources: [
      {
        spec: 'Holy',
        title: 'Holy Talent Guide',
        url: 'https://wowtbc.gg/class-guides/holy-paladin/',
      },
      {
        spec: 'Protection',
        title: 'Protection Talent Guide',
        url: 'https://wowtbc.gg/class-guides/protection-paladin/',
      },
      {
        spec: 'Retribution',
        title: 'Retribution Talent Guide',
        url: 'https://wowtbc.gg/class-guides/retribution-paladin/',
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
          'Prioridad: Shadowfiend temprano para regeneración de maná en encuentros largos.',
          'Inner Focus con Greater Heal o Circle of Healing para eficiencia y picos de curación.',
          'Mantén Renew en tanques y objetivos con daño sostenido.',
          'Circle of Healing en daño de raid alto; Greater Heal en picos fuertes de tanque.',
          'Binding Heal cuando tú también recibes daño; Flash Heal como relleno con downranking cuando haga falta.',
        ],
      },
      {
        name: 'Discipline',
        role: 'Healer',
        tips: [
          'Curación preventiva: Power Word: Shield + Prayer of Mending antes de daño predecible.',
          'Flash Heal como relleno y Greater Heal para estabilizar ráfagas fuertes.',
          'Inner Focus debe alinearse con hechizos de alto coste para ahorrar maná.',
          'Pain Suppression reservado para mecánicas de burst sobre tanque u objetivo asignado.',
          'Cuando te mueves, prioriza escudos y renovaciones para no perder valor de GCD.',
        ],
      },
      {
        name: 'Shadow',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): Vampiric Touch y Shadow Word: Pain con uptime máximo.',
          'Mind Blast en cooldown; Mind Flay como relleno principal entre ventanas.',
          'Shadow Word: Death como herramienta situacional sin comprometer supervivencia.',
          'Shadowfiend y recursos de maná se usan para sostener presión en combates largos.',
          'En multiobjetivo, extiende DoTs a objetivos que vivirán suficiente para tickear completos.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Blinding Light', effect: '+Spell Damage for Holy/Shadow' },
      { type: 'elixir', name: 'Elixir of Healing Power', effect: '+Healing power for healers' },
      { type: 'food', name: 'Golden Fish Sticks', effect: '+Healing food' },
      { type: 'potion', name: 'Super Mana Potion', effect: 'Mana restore for sustained healing' },
      { type: 'weapon', name: 'Brilliant Mana Oil', effect: '+Mana regen on weapon' },
    ],
    talentResources: [
      {
        spec: 'Holy',
        title: 'Holy Talent Guide',
        url: 'https://wowtbc.gg/class-guides/holy-priest/',
      },
      {
        spec: 'Discipline',
        title: 'Discipline Talent Guide',
        url: 'https://wowtbc.gg/class-guides/discipline-priest/',
      },
      {
        spec: 'Shadow',
        title: 'Shadow Talent Guide',
        url: 'https://wowtbc.gg/class-guides/shadow-priest/',
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
          'Objetivo único (prioridad): abre con Mutilate y asegura Slice and Dice permanente.',
          'Mantén Rupture/Envenom (según setup) y evita capear energía/combo points.',
          'Venenos correctos en ambas armas y uptime por espalda para daño estable.',
          'Cold Blood y trinkets se alinean con finishers de alto impacto.',
          'En cambios de objetivo, prioriza recuperar Slice and Dice antes de burst.',
        ],
      },
      {
        name: 'Combat',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): Sinister Strike para combo points y Slice and Dice al 100% de uptime.',
          'Rupture o Eviscerate según duración real del objetivo y estado de buffs.',
          'Blade Flurry + Adrenaline Rush en ventanas de burst o cleave de valor.',
          'Usa cooldowns sin desalinear tu economía de energía durante los proc windows.',
          'En cleave, Blade Flurry gana prioridad y cambia finishers según tiempo de vida del add.',
        ],
      },
      {
        name: 'Subtlety',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): Hemorrhage/Backstab para generar combo points con eficiencia.',
          'Slice and Dice activo todo el tiempo; Rupture/Eviscerate según ventana del objetivo.',
          'Premeditation y Shadowstep para preparar burst sin perder posicionamiento.',
          'Vanish se usa de forma agresiva para resetear apertura cuando el encuentro lo permita.',
          'Cuida energía y combo points para no desperdiciar recursos en transiciones de fase.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Relentless Assault', effect: '+Attack Power for Mutilate/Combat' },
      { type: 'elixir', name: 'Elixir of Major Agility', effect: '+Agility for physical DPS' },
      { type: 'food', name: 'Grilled Mudfish', effect: '+Agility food' },
      { type: 'potion', name: 'Haste Potion', effect: 'Short burst of attack speed' },
      { type: 'weapon', name: 'Adamantite Sharpening Stone', effect: '+Weapon damage for melee builds' },
    ],
    talentResources: [
      {
        spec: 'Assassination',
        title: 'Assassination Talent Guide',
        url: 'https://wowtbc.gg/class-guides/assassination-rogue/',
      },
      {
        spec: 'Combat',
        title: 'Combat Talent Guide',
        url: 'https://wowtbc.gg/class-guides/combat-rogue/',
      },
      {
        spec: 'Subtlety',
        title: 'Subtlety Talent Guide',
        url: 'https://wowtbc.gg/class-guides/subtlety-rogue/',
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
          'Objetivo único (prioridad): Lightning Bolt como base, Chain Lightning en cooldown.',
          'Flame Shock cuando encaja sin romper el flujo de casteo principal.',
          'Elemental Mastery + trinkets + poción en ventanas de burst.',
          'Totems correctos siempre activos según composición y distancia del grupo.',
          'En cleave/AoE, prioriza Chain Lightning y ajusta posición para no perder casteos.',
        ],
      },
      {
        name: 'Enhancement',
        role: 'DPS',
        tips: [
          'Prioridad: imbues correctos en armas (Windfury/Flametongue según setup) y totems de grupo activos.',
          'Stormstrike en cooldown, shocks entre autos sin clippear swings.',
          'Shamanistic Rage para sostener maná y mantener DPS continuo.',
          'Sincroniza trinkets y poción con Stormstrike en fases de burst.',
          'En movimiento o transiciones, prioriza recolocar totems para no perder valor de grupo.',
        ],
      },
      {
        name: 'Restoration',
        role: 'Healer',
        tips: [
          'Prioridad de sanación: Chain Heal cuando hay daño en cadena sobre varios objetivos.',
          'Earth Shield permanente en tanque y Water Shield activo en ti.',
          'Lesser Healing Wave para spot-heal rápido; Healing Wave para picos altos.',
          'Mana Tide y consumibles de maná se usan en ventanas largas de daño sostenido.',
          'Reposición de totems según fase para mantener utilidad y regeneración del grupo.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Blinding Light / Relentless Assault', effect: 'Swap based on Elemental, Resto or Enhancement spec' },
      { type: 'elixir', name: 'Elixir of Draenic Wisdom', effect: '+Intellect and Spirit for caster specs' },
      { type: 'food', name: 'Blackened Basilisk', effect: '+Spell Damage food for Elemental' },
      { type: 'potion', name: 'Super Mana Potion', effect: 'Mana restore for Elemental and Resto' },
      { type: 'weapon', name: 'Brilliant Wizard Oil / Adamantite Sharpening Stone', effect: 'Caster oil or melee stone depending on spec' },
    ],
    talentResources: [
      {
        spec: 'Elemental',
        title: 'Elemental Talent Guide',
        url: 'https://wowtbc.gg/class-guides/elemental-shaman/',
      },
      {
        spec: 'Enhancement',
        title: 'Enhancement Talent Guide',
        url: 'https://wowtbc.gg/class-guides/enhancement-shaman/',
      },
      {
        spec: 'Restoration',
        title: 'Restoration Talent Guide',
        url: 'https://wowtbc.gg/class-guides/restoration-shaman/',
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
          'Objetivo único (prioridad): Fel Armor activo y pet invocada (normalmente Imp) antes de empezar.',
          'Amplify Curse con Curse of Doom; deja expirar antes de reaplicar (usa Curse of Agony si el objetivo morirá pronto).',
          'Mantén Corruption, Siphon Life e Immolate con uptime alto, dejando expirar antes de refrescar.',
          'Shadow Bolt como relleno; Shadowburn/Death Coil en movimiento.',
          'AoE grande: Seed of Corruption en múltiples objetivos y Hellfire cuando sea seguro.',
        ],
      },
      {
        name: 'Demonology',
        role: 'DPS',
        tips: [
          'Prioridad: uptime total de demonio (Felguard o pet de la build) y control de posicionamiento de pet.',
          'Mantén DoTs principales según build y rellena con Shadow Bolt.',
          'Demonic Empowerment y on-use/trinkets alineados con ventanas de burst.',
          'Life Tap planificado para no cortar tramos importantes de casteo.',
          'En AoE, Seed of Corruption gana prioridad sobre filler de objetivo único.',
        ],
      },
      {
        name: 'Destruction',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): aplica la curse asignada de raid al inicio y cuando toque renovar.',
          'Mantén Immolate si la build lo requiere; Shadow Bolt o Incinerate como filler principal.',
          'Conflagrate en build de fuego durante ventanas de burst controladas.',
          'Trinkets, poción y CDs ofensivos deben alinearse con lust/heroism o fases clave.',
          'Durante movimiento, usa instantáneos disponibles y retoma el filler principal de inmediato.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Supreme Power', effect: '+Spell damage for warlock DPS' },
      { type: 'elixir', name: 'Elixir of Major Shadow Power', effect: '+Shadow damage for Affliction and Destruction' },
      { type: 'food', name: 'Blackened Basilisk', effect: '+Spell Damage food' },
      { type: 'potion', name: 'Super Mana Potion', effect: 'Mana restore for long encounters' },
      { type: 'misc', name: 'Dark Rune', effect: 'Mana restore on a separate cooldown' },
    ],
    talentResources: [
      {
        spec: 'Affliction',
        title: 'Affliction Talent Guide',
        url: 'https://wowtbc.gg/class-guides/affliction-warlock/',
      },
      {
        spec: 'Demonology',
        title: 'Demonology Talent Guide',
        url: 'https://wowtbc.gg/class-guides/demonology-warlock/',
      },
      {
        spec: 'Destruction',
        title: 'Destruction Talent Guide',
        url: 'https://wowtbc.gg/class-guides/destruction-warlock/',
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
          'Objetivo único (prioridad): Battle Shout activo y Demoralizing Shout si estás asignado.',
          'Mortal Strike en cooldown; Whirlwind como segunda prioridad.',
          'Slam como relleno cuando la ventana de swing lo permita sin clippear autos.',
          'Cooldowns ofensivos y on-use alineados con fases de burst de raid.',
          'Por debajo de 20%, Execute gana prioridad de gasto de ira.',
        ],
      },
      {
        name: 'Fury',
        role: 'DPS',
        tips: [
          'Objetivo único (prioridad): Battle Shout activo y Demoralizing Shout si te toca mantenerlo.',
          'Bloodrage al inicio/ventanas de recurso; Death Wish + Recklessness + on-use en burst.',
          'Por debajo de 20% de vida, Execute toma prioridad de gasto de ira.',
          'Bloodthirst y Whirlwind en cooldown; Heroic Strike solo con ira alta (aprox. >60).',
          'AoE: Sweeping Strikes y rotación base, cambiando Heroic Strike por Cleave y priorizando Whirlwind.',
        ],
      },
      {
        name: 'Protection',
        role: 'Tank',
        tips: [
          'Prioridad de amenaza ST: Shield Slam > Revenge > Devastate para mantener Sunder Armor.',
          'Shield Block activo en ventanas de daño físico y para facilitar procs defensivos.',
          'Thunder Clap y Demoralizing Shout con uptime constante sobre objetivos peligrosos.',
          'Taunt/Mocking Blow en rotación de emergencia para recuperar amenaza.',
          'En packs, prioriza control inicial, tab-target con Devastate/Revenge y posicionamiento limpio.',
        ],
      },
    ],
    consumables: [
      { type: 'flask', name: 'Flask of Fortification / Relentless Assault', effect: 'Swap between tank and DPS setups' },
      { type: 'elixir', name: 'Elixir of Major Defense / Major Strength', effect: 'Armor for tanks or strength for Arms' },
      { type: 'food', name: 'Roasted Clefthoof', effect: '+Strength and Stamina food' },
      { type: 'potion', name: 'Haste Potion / Ironshield Potion', effect: 'DPS burst or tank mitigation' },
      { type: 'weapon', name: 'Adamantite Sharpening Stone', effect: '+Weapon damage for melee DPS' },
    ],
    talentResources: [
      {
        spec: 'Arms',
        title: 'Arms Talent Guide',
        url: 'https://wowtbc.gg/class-guides/arms-warrior/',
      },
      {
        spec: 'Fury',
        title: 'Fury Talent Guide',
        url: 'https://wowtbc.gg/class-guides/fury-warrior/',
      },
      {
        spec: 'Protection',
        title: 'Protection Talent Guide',
        url: 'https://wowtbc.gg/class-guides/protection-warrior/',
      },
    ],
  },
};
