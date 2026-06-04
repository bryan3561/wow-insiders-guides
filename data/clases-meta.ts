export type Rol = 'tank' | 'healer' | 'dps' | 'hibrido';

export interface ClaseMeta {
  id: string;
  name: string;
  nameEn: string;
  color: string;
  border: string;
  description: string;
  roles: Rol[];
  armadura: string;
  armas: string;
  specs: { name: string; rol: Rol; descripcion: string }[];
  isNew?: boolean; // nueva facción disponible en TBC
}

export const clasesMeta: ClaseMeta[] = [
  {
    id: 'druida',
    name: 'Druida',
    nameEn: 'Druid',
    color: 'from-orange-900/60 to-amber-950/60',
    border: 'border-orange-600/50',
    description: 'El maestro de la versatilidad. Puede cambiar de forma para tankear, curar o hacer daño. Tiene el árbol de talentos más flexible de TBC.',
    roles: ['tank', 'healer', 'dps'],
    armadura: 'Tela / Cuero (todas las formas)',
    armas: 'Bastones, mazas de una mano, dagas, fistweapons',
    specs: [
      { name: 'Balance', rol: 'dps', descripcion: 'DPS a distancia con magia de naturaleza y arcana. El icónico Moonkin (Boomkin).' },
      { name: 'Feral Combat', rol: 'dps', descripcion: 'DPS cuerpo a cuerpo en forma de gato, o tanque en forma de oso.' },
      { name: 'Restoration', rol: 'healer', descripcion: 'Sanador con HoTs potentes. Sobresale en curación sostenida durante peleas largas.' },
    ],
  },
  {
    id: 'cazador',
    name: 'Cazador',
    nameEn: 'Hunter',
    color: 'from-green-900/60 to-emerald-950/60',
    border: 'border-green-600/50',
    description: 'Maestro del combate a distancia y las mascotas. Aporta traps de control y el buff Aspect of the Hawk. Uno de los mejores DPS de TBC.',
    roles: ['dps'],
    armadura: 'Cuero / Mail (nivel 40+)',
    armas: 'Arcos, pistolas, rifles, lanzas, hachas, espadas',
    specs: [
      { name: 'Beast Mastery', rol: 'dps', descripcion: 'Potencia a la mascota para un DPS brutal. El árbol más simple y efectivo para farmeo.' },
      { name: 'Marksmanship', rol: 'dps', descripcion: 'Maximiza el daño personal del cazador. Ideal para raids de progreso.' },
      { name: 'Survival', rol: 'dps', descripcion: 'Híbrido con traps mejoradas y buffs de grupo. Muy valorado en raids por Expose Weakness.' },
    ],
  },
  {
    id: 'mago',
    name: 'Mago',
    nameEn: 'Mage',
    color: 'from-blue-900/60 to-sky-950/60',
    border: 'border-blue-600/50',
    description: 'El rey del DPS mágico puro. Domina el fuego, el frío y lo arcano. Aporta Arcane Intellect, conjura comida/agua y abre portales.',
    roles: ['dps'],
    armadura: 'Tela',
    armas: 'Bastones, varas, espadas de una mano, dagas',
    specs: [
      { name: 'Arcane', rol: 'dps', descripcion: 'Ráfagas de daño arcano brutales pero de alto consumo de maná.' },
      { name: 'Fire', rol: 'dps', descripcion: 'El spec más popular en TBC por el potencial de crit con Fireball.' },
      { name: 'Frost', rol: 'dps', descripcion: 'Control y daño sostenido. Excelente para PvP y dungeon.' },
    ],
  },
  {
    id: 'paladin',
    name: 'Paladín',
    nameEn: 'Paladin',
    color: 'from-pink-900/60 to-rose-950/60',
    border: 'border-pink-600/50',
    description: 'El guerrero sagrado. Disponible para la Horda en TBC gracias a los Draenei Paladín de la Alianza y los Paladin de Sangre de la Horda. Aporta auras y blessings únicos.',
    roles: ['tank', 'healer', 'dps'],
    armadura: 'Tela / Cuero / Mail / Plate',
    armas: 'Mazas de una y dos manos, escudos, espadas',
    specs: [
      { name: 'Holy', rol: 'healer', descripcion: 'Sanador de ráfaga y tank healing. Los mejores heals de emergencia del juego.' },
      { name: 'Protection', rol: 'tank', descripcion: 'Tanque con AoE threat. Indispensable para limpiar trash en heroics.' },
      { name: 'Retribution', rol: 'dps', descripcion: 'DPS cuerpo a cuerpo que aporta Judgements y el buff Sanctity Aura.' },
    ],
    isNew: true,
  },
  {
    id: 'sacerdote',
    name: 'Sacerdote',
    nameEn: 'Priest',
    color: 'from-slate-700/60 to-gray-950/60',
    border: 'border-slate-500/50',
    description: 'El sanador por excelencia. Tiene las herramientas de curación más completas del juego: shields, HoTs, AoE heals y resurrecciones de combate.',
    roles: ['healer', 'dps'],
    armadura: 'Tela',
    armas: 'Bastones, varas, mazas de una mano, dagas',
    specs: [
      { name: 'Discipline', rol: 'healer', descripcion: 'Curación preventiva con Power Word: Shield mejorado.' },
      { name: 'Holy', rol: 'healer', descripcion: 'El spec de raid healing más potente. Circle of Healing es brutal en T5+.' },
      { name: 'Shadow', rol: 'dps', descripcion: 'DPS de sombras con pasivo de regen de maná para el grupo (Vampiric Embrace).' },
    ],
  },
  {
    id: 'picaro',
    name: 'Pícaro',
    nameEn: 'Rogue',
    color: 'from-yellow-900/60 to-amber-950/60',
    border: 'border-yellow-700/50',
    description: 'El asesino furtivo. Especialista en daño cuerpo a cuerpo y control con Stun/Blind/Gouge. Excelente DPS en raids y dominante en PvP.',
    roles: ['dps'],
    armadura: 'Cuero',
    armas: 'Dagas, espadas, mazas, hachas, fistweapons (todos de una mano)',
    specs: [
      { name: 'Assassination', rol: 'dps', descripcion: 'Máximo daño con Mutilate y venenos. Requiere dos dagas.' },
      { name: 'Combat', rol: 'dps', descripcion: 'El spec de raid preferido en TBC por su DPS estable con Sword Spec.' },
      { name: 'Subtlety', rol: 'dps', descripcion: 'Centrado en sigilo y PvP. Menos popular en PvE pero viable.' },
    ],
  },
  {
    id: 'chaman',
    name: 'Chamán',
    nameEn: 'Shaman',
    color: 'from-blue-800/60 to-indigo-950/60',
    border: 'border-blue-500/50',
    description: 'Ahora disponible para la Alianza como Draenei. La clase más impactante por las Totems que aportan buffs únicos a todo el grupo: Windfury, Mana Spring, Wrath of Air.',
    roles: ['healer', 'dps'],
    armadura: 'Tela / Cuero / Mail (nivel 40+)',
    armas: 'Mazas de una y dos manos, hachas, escudos, bastones',
    specs: [
      { name: 'Elemental', rol: 'dps', descripcion: 'DPS de magia con Lightning Bolt y Chain Lightning. Excelente utilidad con totems.' },
      { name: 'Enhancement', rol: 'dps', descripcion: 'DPS cuerpo a cuerpo con Windfury Totem. El spec de melee más querido de TBC.' },
      { name: 'Restoration', rol: 'healer', descripcion: 'Sanador de grupo con Chain Heal. El mejor AoE healer de TBC junto al Druida.' },
    ],
    isNew: true,
  },
  {
    id: 'brujo',
    name: 'Brujo',
    nameEn: 'Warlock',
    color: 'from-purple-900/60 to-violet-950/60',
    border: 'border-purple-600/50',
    description: 'Maestro de la magia oscura y las invocaciones. Aporta Healthstones, piedras de alma y uno de los DPS más altos de la expansión con Destruction.',
    roles: ['dps'],
    armadura: 'Tela',
    armas: 'Bastones, varas, espadas de una mano, dagas',
    specs: [
      { name: 'Affliction', rol: 'dps', descripcion: 'DPS de DoTs con Seed of Corruption. Excelente en peleas largas y AoE de trash.' },
      { name: 'Demonology', rol: 'dps', descripcion: 'Potencia a la mascota demonio. Felguard build es muy sólido en TBC.' },
      { name: 'Destruction', rol: 'dps', descripcion: 'Shadowbolt spam para DPS explosivo. El top DPS mágico en T5-T6.' },
    ],
  },
  {
    id: 'guerrero',
    name: 'Guerrero',
    nameEn: 'Warrior',
    color: 'from-red-900/60 to-rose-950/60',
    border: 'border-red-600/50',
    description: 'El tanque principal de TBC y un DPS cuerpo a cuerpo feroz. Los Warriors dominan el tanqueo de main bosses gracias a su mitigation y Shouts.',
    roles: ['tank', 'dps'],
    armadura: 'Tela / Cuero / Mail / Plate',
    armas: 'Espadas, hachas, mazas, lanzas de una y dos manos, escudos',
    specs: [
      { name: 'Arms', rol: 'dps', descripcion: 'DPS con Two-Handed weapons y Mortal Strike. Popular en PvP y sólido en PvE.' },
      { name: 'Fury', rol: 'dps', descripcion: 'El DPS cuerpo a cuerpo más alto del juego con Dual Wield y Whirlwind.' },
      { name: 'Protection', rol: 'tank', descripcion: 'El main tank definitivo de TBC. Shield Slam y Devastate para threat.' },
    ],
  },
];
