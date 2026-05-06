import type { Boss } from './types';

export const gruulBosses: Boss[] = [
  {
    id: 'high-king-maulgar',
    name: 'Gran Rey Maulgar',
    description:
      'Ogro jefe rodeado de cuatro lugartenientes. Cada add tiene mecánicas únicas que requieren roles específicos. La coordinación inicial es crítica.',
    difficulty: 3,
    tankCount: 5,
    healerCount: 6,
    abilities: [
      {
        id: 'arcing-smash',
        name: 'Golpe en Arco',
        icon: 'ability_warrior_cleave',
        description: 'Golpe frontal en arco que inflige daño masivo a todo el arco frontal.',
        type: 'tank',
        tip: 'Solo el tanque principal debe estar frente a Maulgar. Toda la raid ataca por los flancos o por detrás.',
      },
      {
        id: 'shockwave',
        name: 'Onda de Choque',
        icon: 'spell_nature_thunderclap',
        description: 'Aturde y daña a todos los jugadores en un cono frontal amplio.',
        type: 'mechanics',
        tip: 'Posicionarse a los lados o detrás del jefe. Los tanques deben tener habilidades de anti-aturdimiento preparadas.',
      },
      {
        id: 'mighty-blow',
        name: 'Golpe Poderoso',
        icon: 'ability_warrior_punishingblow',
        description: 'Ataque de alto daño dirigido al tanque principal que puede lanzarlo por los aires.',
        type: 'tank',
        tip: 'El tanque principal debe tener un curandero dedicado. Posicionarse contra una pared para minimizar el retroceso.',
        warning: 'El Golpe Poderoso puede matar instantáneamente a tanques sin equipo adecuado.',
      },
      {
        id: 'adds-coordination',
        name: 'Lugartenientes (×4)',
        icon: 'ability_warrior_commandingshout',
        description: 'Kiggler (mago), Blindeye (sacerdote), Olm (brujo), Krosh (mago de fuego) deben ser controlados simultáneamente.',
        type: 'adds',
        tip: 'Asignar un tanque a cada add: Krosh requiere un mago para Robar Hechizo del Escudo. Olm necesita interrupción constante. Blindeye debe ser interrumpido. Matar en orden: Krosh > Blindeye > Olm > Kiggler > Maulgar.',
        warning: 'Si algún add no está controlado, puede limpiar la raid en segundos.',
      },
    ],
    strategy:
      'Cinco tanques simultáneos: uno por cada add más Maulgar. Usar un mago para robar el Escudo Arcano de Krosh (si no, es unkillable). Matar adds en orden antes de ejecutar a Maulgar. Curanderos distribuidos entre todos los tanques.',
    phases: [
      { name: 'Fase 1 (Adds vivos)', description: 'Control total de todos los adds. Matar en orden: Krosh, Blindeye, Olm, Kiggler.' },
      { name: 'Fase 2 (Maulgar solo)', description: 'Un solo tanque principal. Raid agrupada detrás. Máximo DPS.' },
    ],
  },
  {
    id: 'gruul',
    name: 'Gruul el Destroza Dragones',
    description:
      'Ogro colosal que aumenta de poder cada 30 segundos. El daño en área de Destrozar obliga a toda la raid a separarse constantemente.',
    difficulty: 3,
    tankCount: 2,
    healerCount: 7,
    abilities: [
      {
        id: 'growth',
        name: 'Crecimiento',
        icon: 'ability_warrior_strengthofarms',
        description: 'Cada 30 segundos Gruul crece, aumentando su daño y salud un 10% acumulativo.',
        type: 'mechanics',
        tip: 'Máximo DPS desde el inicio. Cuanto más tarde la pelea, más imposible se vuelve. El objetivo es matarlo antes de que tenga demasiadas acumulaciones.',
        warning: 'A partir de 12-15 acumulaciones el daño al tanque se vuelve imposible de curar.',
      },
      {
        id: 'hurtful-strike',
        name: 'Golpe Hiriente',
        icon: 'ability_warrior_cleave',
        description: 'Golpea al segundo en la lista de amenaza por daño masivo. El segundo tanque debe absorber estos golpes.',
        type: 'tank',
        tip: 'Necesitas dos tanques: el principal y un "tanque de Golpe Hiriente" que esté segundo en agro con buena armadura. Este segundo tanque debe tener curación constante.',
      },
      {
        id: 'ground-slam',
        name: 'Golpe al Suelo',
        icon: 'ability_warrior_shieldslam',
        description: 'Golpea el suelo lanzando a toda la raid por los aires y dejándolos aturdidos al caer.',
        type: 'mechanics',
        tip: 'Después de caer, todos los jugadores quedan piedra (Petrificar). Deben romper la piedra. Si dos jugadores petrificados chocan, ambos mueren instantáneamente.',
        warning: 'CRÍTICO: Después de caer, alejarse rápido de otros jugadores para no chocar con ellos en estado de piedra.',
      },
      {
        id: 'shatter',
        name: 'Destrozar',
        icon: 'spell_shadow_shadowandflame',
        description: 'Rompe la piedra de todos los jugadores petrificados causando daño en área basado en qué tan cerca están los unos de los otros.',
        type: 'mechanics',
        tip: 'La clave es SEPARARSE inmediatamente después de cada Golpe al Suelo. Si estás lejos de todos cuando ocurre Destrozar, el daño es mínimo. Si estás pegado a otros, es muerte.',
        warning: 'La separación pre-Destrozar es la mecánica más importante del encuentro.',
      },
      {
        id: 'cave-in',
        name: 'Derrumbe',
        icon: 'spell_nature_earthquake',
        description: 'Hace caer rocas del techo sobre un área aleatoria causando daño y ralentización.',
        type: 'damage',
        tip: 'Moverse fuera del área de impacto indicada en el suelo. Es de fácil evasión si se está atento.',
      },
    ],
    strategy:
      'Dos tanques: principal para Gruul, secundario segundo en agro para absorber Golpes Hirientes. Toda la raid SEPARADA para minimizar daño de Destrozar. Máximo DPS para matarlo antes de demasiados Crecimientos.',
  },
];
