import type { Boss } from './types';

export const zulamanBosses: Boss[] = [
  {
    id: 'nalorakk',
    name: 'Nalorakk',
    description:
      'Señor del Oso Trol. Alterna entre forma humana y forma de oso. En forma humana puede ser interrumpido; en forma de oso, el daño al tanque es brutal.',
    difficulty: 2,
    tankCount: 2,
    healerCount: 2,
    abilities: [
      {
        id: 'mangle',
        name: 'Mutilar',
        icon: 'ability_druid_mangle',
        description: 'Forma Oso: Reduce la armadura del tanque en un 50% acumulativamente.',
        type: 'tank',
        tip: 'Rotar tanques cuando las acumulaciones sean peligrosas. El segundo tanque recoge el agro mientras el primero espera que expiren.',
        warning: 'El tanque con muchas acumulaciones de Mutilar puede morir de un solo golpe.',
      },
      {
        id: 'surge',
        name: 'Embestida',
        icon: 'ability_warrior_charge',
        description: 'Forma Humana: Carga hacia un jugador aleatorio de distancia.',
        type: 'damage',
        tip: 'Los jugadores de distancia deben tener un curandero cerca. La Embestida puede matar a jugadores de papel si no están curados.',
      },
      {
        id: 'brutal-swipe',
        name: 'Zarpazo Brutal',
        icon: 'ability_druid_claw',
        description: 'Forma Oso: Ataque en arco que golpea a todos los jugadores frente al jefe.',
        type: 'tank',
        tip: 'Solo el tanque frente al jefe. La raid ataca por los flancos. Daño adicional si el zarpazo afecta a más de un jugador.',
      },
      {
        id: 'bear-form',
        name: 'Transición de Forma',
        icon: 'ability_druid_bearform',
        description: 'Nalorakk alterna entre forma humana (interrumpible) y forma de oso (más daño).',
        type: 'mechanics',
        tip: 'En forma humana: interrumpir sus hechizos. En forma de oso: el tanque necesita curación intensiva. Prepararse para el cambio.',
      },
    ],
    strategy:
      'Dos tanques en rotación por las acumulaciones de Mutilar. DPS interrumpe en forma humana. En forma de oso, curación máxima al tanque activo.',
    phases: [
      {
        name: 'Forma Humana (~30 segundos)',
        description:
          'Nalorakk ataca en forma trol. Sus hechizos son interrumpibles — asignar un jugador dedicado a interrupciones. Sus ataques físicos son moderados, los curanderos pueden respirar levemente. Periódicamente elige a un jugador de distancia para Embestida causando daño alto — ese jugador necesita un curandero cerca o algún escudo activo. Esta forma dura aproximadamente 30 segundos antes de transformarse en oso. Preparar al segundo tanque para el cambio.',
      },
      {
        name: 'Forma Oso (~30 segundos)',
        description:
          'Al transformarse, el daño físico se triplica. Mutilar acumula stacks de reducción de armadura en el tanque activo — ROTAR INMEDIATAMENTE cuando el tanque activo llegue a 3-4 acumulaciones. El segundo tanque toma el agro y el primero espera fuera del rango de cuerpo a cuerpo hasta que sus acumulaciones expiren. Zarpazo Brutal golpea en arco frontal — solo el tanque activo frente al oso. Los curanderos al máximo durante toda la Forma Oso. Esta forma dura ~30 segundos antes de regresar a Forma Humana. El ciclo se repite hasta la muerte.',
      },
    ],
  },
  {
    id: 'akilzon',
    name: "Akil'zon",
    description:
      'Señor del Águila Trol. Pelea con mecánica de Tormenta Eléctrica donde todos los jugadores deben apilarse bajo el jugador elevado.',
    difficulty: 2,
    tankCount: 1,
    healerCount: 2,
    abilities: [
      {
        id: 'electrical-storm',
        name: 'Tormenta Eléctrica',
        icon: 'spell_nature_chainlightning',
        description: 'Eleva a un jugador aleatorio y lo rodea de electricidad que daña a todos los que no estén bajo él.',
        type: 'mechanics',
        tip: 'TODOS los jugadores deben correr y apiñarse BAJO el jugador elevado inmediatamente. Los que estén fuera del área reciben daño masivo por segundo.',
        warning: 'La Tormenta Eléctrica es mortal para quienes no están apilados. Respuesta inmediata obligatoria.',
      },
      {
        id: 'static-disruption',
        name: 'Disrupción Estática',
        icon: 'spell_nature_lightning',
        description: 'Aplica un DoT de relámpago a un jugador que salta a jugadores cercanos.',
        type: 'debuff',
        tip: 'El afectado debe alejarse del grupo temporalmente hasta que el efecto expire.',
      },
      {
        id: 'gust-of-wind',
        name: 'Ráfaga de Viento',
        icon: 'spell_nature_cyclone',
        description: 'Lanza a un jugador aleatorio al aire, haciéndolo caer y recibir daño de impacto.',
        type: 'damage',
        tip: 'Difícil de evitar. Curación inmediata al jugador que caiga.',
      },
      {
        id: 'call-lightning',
        name: 'Invocar Relámpago',
        icon: 'spell_nature_lightning',
        description: 'Lanza relámpagos hacia un área aleatoria de la sala.',
        type: 'damage',
        tip: 'Moverse fuera del área afectada. Múltiples impactos rápidos en el mismo lugar.',
      },
    ],
    strategy:
      'La mecánica principal es Tormenta Eléctrica: todos corren bajo el jugador elevado inmediatamente. Entre tormentas, dispersión normal para evitar el salto del relámpago.',
  },
  {
    id: 'janalai',
    name: "Jan'alai",
    description:
      "Señor del Halcón de Fuego. La mecánica de los Huevos es la más importante: si no se gestionan bien, se eclosionan demasiados halcones que limpian a la raid.",
    difficulty: 3,
    tankCount: 1,
    healerCount: 2,
    abilities: [
      {
        id: 'fire-bomb',
        name: 'Bomba de Fuego',
        icon: 'spell_fire_fireball02',
        description: 'Lanza bombas de fuego que dejan zonas de llama persistentes en el suelo.',
        type: 'mechanics',
        tip: 'Con el tiempo la sala se llena de fuego. Gestionar el movimiento de la raid para conservar espacio limpio. Las bombas deben caer en áreas ya ocupadas por fuego.',
      },
      {
        id: 'flame-breath',
        name: 'Aliento de Llama',
        icon: 'spell_fire_fireball',
        description: 'Cono de fuego frontal que daña masivamente a jugadores frente al jefe.',
        type: 'tank',
        tip: 'Solo el tanque frente al jefe. El aliento es mortal para cualquier otro jugador.',
      },
      {
        id: 'hatch-eggs',
        name: 'Eclosionar Huevos',
        icon: 'ability_hunter_pet_hawk',
        description: 'Jan\'alai activa los huevos periódicamente. Al llegar al 35%, activa TODOS los huevos simultáneamente.',
        type: 'mechanics',
        tip: 'Estrategia común: destruir todos los huevos de un lado primero, dejar el otro lado intacto. Al 35%, solo eclosionan los huevos intactos (uno de los lados). Manejar cantidad controlada de halcones.',
        warning: 'Si no se gestiona el 35%, todos los huevos eclosionan simultáneamente y los halcones limpian la raid.',
      },
      {
        id: 'amani-hatcher',
        name: 'Incubador Amani',
        icon: 'ability_warrior_charge',
        description: 'Adds que intentan activar los huevos. Si llegan a los huevos, los eclosionan.',
        type: 'adds',
        tip: 'Matar a los Incubadores antes de que lleguen a los huevos. Prioridad alta cuando aparecen.',
      },
    ],
    strategy:
      'Destruir todos los huevos de un lado antes de comenzar el DPS en Jan\'alai. Al 35%, solo los huevos del lado intacto eclosionan. Matar Incubadores que intenten activar huevos. El fuego acumulado restringe el movimiento.',
  },
  {
    id: 'halazzi',
    name: 'Halazzi',
    description:
      'Señor del Lince Trol. Separa su espíritu de lince en una entidad separada a ciertos porcentajes. Ambas formas deben ser tanqueadas simultáneamente.',
    difficulty: 3,
    tankCount: 2,
    healerCount: 2,
    abilities: [
      {
        id: 'saber-lash',
        name: 'Latigazo de Sable',
        icon: 'ability_warrior_cleave',
        description: 'Golpe frontal masivo que se divide entre todos los jugadores frente a Halazzi.',
        type: 'tank',
        tip: 'Mantener dos o más jugadores frente a Halazzi para dividir el daño del Latigazo.',
      },
      {
        id: 'spirit-lynx',
        name: 'Espíritu del Lince',
        icon: 'ability_druid_claw',
        description: 'A ciertos porcentajes (75%, 50%, 25%), Halazzi separa su espíritu de lince que debe ser tanqueado aparte.',
        type: 'mechanics',
        tip: 'El segundo tanque recoge al Espíritu del Lince cuando aparece. Cuando ambos están bajos de vida, Halazzi los reabsorbe y recupera parte de la vida.',
        warning: 'Cuando Halazzi reabsorbe al Espíritu, gana vida. Planificar los porcentajes para minimizar la curación que recibe.',
      },
      {
        id: 'corruption',
        name: 'Corrupción de la Fuerza Vital',
        icon: 'ability_creature_poison02',
        description: 'Veneno que drena la vida del afectado periódicamente.',
        type: 'debuff',
        tip: 'Eliminar el veneno con limpiezas. Prioridad alta en curanderos y tanques.',
      },
      {
        id: 'enrage',
        name: 'Frenesí de Lince',
        icon: 'ability_warrior_battleshout',
        description: 'A bajo porcentaje de vida, aumenta dramáticamente su velocidad de ataque.',
        type: 'tank',
        tip: 'Curación intensiva al tanque durante el frenesí. Usar cooldowns defensivos del tanque si están disponibles.',
      },
    ],
    strategy:
      'Dos tanques: uno para Halazzi y otro para el Espíritu del Lince cuando aparece. Dividir el Latigazo de Sable con jugadores adicionales frente al jefe. Limpiar venenos. Curación masiva durante el Frenesí final.',
    phases: [
      {
        name: 'Forma Combinada (100/75/50/25%)',
        description:
          'Halazzi en forma completa. Mantener al menos 2-3 jugadores adicionales frente a Halazzi para dividir el Latigazo de Sable — si solo el tanque lo absorbe, muere. Los DPS de distancia atacan desde la retaguardia. Los cuerpo a cuerpo en los flancos. Los venenos aplican DoTs: limpiarlos con prioridad media. Al llegar al 75%, 50% y 25%, Halazzi separa automáticamente su Espíritu de Lince — preparar al segundo tanque para cogerlo al instante.',
      },
      {
        name: 'Espíritu Separado (al 75%, 50%, 25%)',
        description:
          'El Espíritu de Lince aparece como entidad separada con aproximadamente un tercio de la vida total de Halazzi. El segundo tanque lo recoge inmediatamente. CRÍTICO: ambas entidades deben ser dañadas al mismo ritmo — si el Espíritu muere mucho antes que Halazzi, Halazzi lo reabsorbe y se cura masivamente. Los curanderos se dividen entre los dos tanques. Cuando ambos estén bajos, coordinar para matarlos casi simultáneamente. Al matar al Espíritu, Halazzi lo reabsorbe brevemente y recupera algo de vida antes de pasar a la siguiente separación.',
      },
    ],
  },
  {
    id: 'hex-lord-malacrass',
    name: 'Señor del Exorcismo Malacrass',
    description:
      'Hechicero trol que roba los poderes de clase de los jugadores. Está acompañado de cuatro adds aleatorios de una lista de posibles.',
    difficulty: 4,
    tankCount: 2,
    healerCount: 2,
    abilities: [
      {
        id: 'drain-power',
        name: 'Drenar Poder',
        icon: 'spell_shadow_manaburn',
        description: 'Roba la habilidad de clase de un jugador y la usa contra la raid.',
        type: 'mechanics',
        tip: 'Las habilidades robadas varían enormemente. Puede robar Rayo de Cuervo (cazador), Tótem de Viento (chamán), etc. Adaptar la estrategia según qué roba.',
        warning: 'Robar ciertas habilidades puede causar wipes si no se reacciona a tiempo (ej. Cadena de Hielo).',
      },
      {
        id: 'siphon-soul',
        name: 'Sifonear Alma',
        icon: 'spell_shadow_soulleech_2',
        description: 'Aplica un debuff que reduce las estadísticas del objetivo drásticamente.',
        type: 'debuff',
        tip: 'Disipar el debuff del tanque y curanderos con prioridad. El debuff en el tanque puede hacerlo muy frágil.',
      },
      {
        id: 'spirit-bolts',
        name: 'Rayos Espectrales',
        icon: 'spell_shadow_shadowbolt',
        description: 'Lluvia de proyectiles de sombra que daña a toda la raid.',
        type: 'damage',
        tip: 'Curación de área durante los Rayos. No hay forma de evitarlos, solo curar el daño.',
      },
      {
        id: 'random-adds',
        name: 'Adds Aleatorios',
        icon: 'ability_warrior_commandingshout',
        description: 'Cuatro adds aleatorios de una lista que incluyen: Acolito Trol, Cazador Trol, Guerrero Sangre, Sacerdotisa Oscura, entre otros.',
        type: 'adds',
        tip: 'Controlar los adds con CC antes de empezar el combate con Malacrass. Matar primero los más peligrosos (curanderos, magos). El orden de kill de los adds determina la dificultad del encuentro.',
      },
    ],
    strategy:
      'Controlar los adds con CC al inicio. Matar los adds más peligrosos primero. Interrumpir Drenar Poder cuando sea posible. Disipar el debuff del tanque. Curación de área constante por los Rayos Espectrales.',
  },
  {
    id: 'zuljin',
    name: "Zul'jin",
    description:
      "El jefe final de Zul'Aman. Pelea en cinco fases temáticas donde adopta la forma de los animales de la zona: Trol, Oso, Águila, Lince y Dragonhawk.",
    difficulty: 4,
    tankCount: 1,
    healerCount: 3,
    abilities: [
      {
        id: 'whirlwind',
        name: 'Torbellino (Fase Trol)',
        icon: 'ability_warrior_cleave',
        description: 'Torbellino que daña a todos los jugadores en cuerpo a cuerpo.',
        type: 'mechanics',
        tip: 'Todos los cuerpo a cuerpo se alejan durante el Torbellino. Volver después.',
      },
      {
        id: 'grievous-throw',
        name: 'Lanzamiento con Saña (Fase Trol)',
        icon: 'inv_axe_02',
        description: 'Lanza un hacha a un jugador que inflige un DoT que solo cura con curación directa.',
        type: 'debuff',
        tip: 'Curar directamente al objetivo del hacha. El DoT no cura solo; requiere heals activos.',
      },
      {
        id: 'overpower',
        name: 'Regeneración (Fase Oso)',
        icon: 'ability_druid_bearform',
        description: 'Forma Oso: Zul\'jin se cura periódicamente. El DPS debe superar la curación.',
        type: 'mechanics',
        tip: 'DPS máximo en Fase Oso. Si el DPS es insuficiente, Zul\'jin puede regenerarse hasta el 100%.',
        warning: 'La regeneración en Fase Oso puede hacer la pelea imposible con poco DPS.',
      },
      {
        id: 'electrical-storm-zuljin',
        name: 'Electricidad (Fase Águila)',
        icon: 'spell_nature_chainlightning',
        description: 'Forma Águila: Relámpagos continuos a toda la raid.',
        type: 'damage',
        tip: 'En Fase Águila, Zul\'jin es difícil de atacar. Los DPS de distancia tienen ventaja. Curación constante.',
      },
      {
        id: 'flame-whirl',
        name: 'Torbellino de Llamas (Fase Dragonhawk)',
        icon: 'spell_fire_flamestrike',
        description: 'Forma Dragonhawk: Torbellino de fuego que aumenta el daño recibido de fuego acumulativamente.',
        type: 'mechanics',
        tip: 'Salir del área del torbellino de fuego. Las acumulaciones son peligrosas si se reciben varios.',
      },
      {
        id: 'paralyzing-poison',
        name: 'Veneno Paralizante (Fase Serpiente)',
        icon: 'ability_creature_poison02',
        description: 'Forma Serpiente (final): Paraliza a jugadores y les aplica un DoT masivo.',
        type: 'debuff',
        tip: 'Limpiar el veneno inmediatamente. La parálisis puede ser fatal si el jugador es un curandero.',
        warning: 'En Fase Serpiente, Zul\'jin tiene muy poca vida pero las mecánicas son muy letales. DPS máximo para terminar.',
      },
    ],
    strategy:
      'Cinco fases automáticas al 80%, 60%, 40%, 20%. Cada fase requiere adaptación: alejarse del Torbellino (Trol), DPS máximo (Oso), curación masiva (Águila), evasión de fuego (Dragonhawk), limpiar venenos y DPS final (Serpiente).',
    phases: [
      {
        name: 'Fase Trol (100–80%)',
        description:
          "Zul'jin en forma natural de trol. Un tanque principal. Torbellino periódico — todos los cuerpo a cuerpo retroceden al instante y regresan cuando termina (dura ~5 segundos). Lanzamiento con Saña aplica un DoT que solo cura con curación directa activa — un curandero se asigna a vigilar quién tiene el DoT. El combate aquí es relativamente directo. Al llegar al 80%, Zul'jin llama al espíritu del Oso y cambia de forma automáticamente.",
      },
      {
        name: 'Fase Oso (80–60%)',
        description:
          "MECÁNICA CRÍTICA: Regeneración — Zul'jin se cura a sí mismo cada pocos segundos. Si el DPS total del grupo no supera esa curación, la pelea no termina nunca. Es el mayor exigente de DPS de Zul'Aman. Toda la raid debe dar su máximo: usar cooldowns ofensivos, pociones de ataque/hechizo, trinkets. El tanque gestiona el alto daño físico de la forma oso. Al 60%, cambia a Forma de Águila.",
      },
      {
        name: 'Fase Águila (60–40%)',
        description:
          "Zul'jin adopta forma de águila. Los relámpagos son constantes e inevitables en toda la raid — los curanderos pasan a modo de emergencia activa: curación de área continua (Ola de Sanación Grande, Tranquilidad, Cadena de Curación). El daño físico al tanque disminuye pero el daño de área a la raid es intenso. Esta es la fase más exigente para los curanderos. Al 40%, cambia a Forma de Lince.",
      },
      {
        name: 'Fase Lince (40–20%)',
        description:
          "Zul'jin adopta forma de lince con velocidad de ataque extremadamente alta. Un solo ataque no duele mucho, pero la cadencia de golpes hace que el daño al tanque por segundo sea muy alto. Los curanderos deben curar al tanque casi continuamente. El tanque puede necesitar sus propias cooldowns defensivas (Escudo de Hielo, Reflejos de Combate). Los DPS continúan su trabajo sin cambios. Al 20%, cambia a las formas finales.",
      },
      {
        name: 'Fase Final — Dragonhawk y Serpiente (20–0%)',
        description:
          "Las dos últimas formas ocurren en rápida sucesión. Forma Dragonhawk: Torbellino de Llamas crea espirales de fuego en el suelo — salir del área del torbellino. El fuego aplica acumulaciones peligrosas si se reciben varios. Forma Serpiente: Veneno Paralizante paraliza a un jugador y aplica un DoT masivo — limpiar INMEDIATAMENTE. Zul'jin tiene muy poca vida restante pero las mecánicas son las más letales del encuentro. TODOS los cooldowns finales disponibles (Ansia de Sangre, trinkets, pociones). DPS máximo para terminar antes de que el daño por venenos sea insostenible.",
      },
    ],
  },
];
