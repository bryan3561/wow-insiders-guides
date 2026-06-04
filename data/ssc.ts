import type { Boss } from './types';

export const sscBosses: Boss[] = [
  {
    id: 'hydross',
    name: 'Hydross el Inestable',
    description:
      'Elemental de agua que cambia entre forma Corrupta y forma Natural al cruzar un umbral en la sala. Cada forma requiere un set de resistencias distinto.',
    difficulty: 3,
    tankCount: 2,
    healerCount: 7,
    abilities: [
      {
        id: 'mark-corruption',
        name: 'Marca de Corrupción',
        icon: 'spell_shadow_plaguecloud',
        description: 'Aplica una acumulación de daño de naturaleza/sombra al tanque activo. A 4 acumulaciones se rota el tanque.',
        type: 'tank',
        tip: 'Rotar los tanques cada 4 acumulaciones. El tanque con Forma Natural necesita resistencia a Naturaleza; el de Forma Corrupta, resistencia a Sombras.',
        warning: 'Si el tanque llega a 4+ acumulaciones sin ser rotado, el daño se vuelve inmanejable.',
      },
      {
        id: 'water-tomb',
        name: 'Tumba de Agua',
        icon: 'spell_frost_summonwaterelemental',
        description: 'Encapsula a un jugador en una burbuja de agua que lo daña cada segundo hasta que sea destruida.',
        type: 'adds',
        tip: 'Todo el DPS disponible debe atacar la burbuja inmediatamente. Es lo más urgente cuando aparece.',
      },
      {
        id: 'vile-sludge',
        name: 'Lodo Venenoso',
        icon: 'spell_nature_corrosivebreath',
        description: 'Forma Corrupta: DoT de veneno de alto daño aplicado a un objetivo aleatorio.',
        type: 'debuff',
        tip: 'Eliminar el veneno inmediatamente. Los curanderos deben priorizar mantener los DoTs limpios.',
      },
      {
        id: 'transition',
        name: 'Cambio de Forma',
        icon: 'spell_nature_waterbreathing',
        description: 'Al cruzar el umbral central, Hydross cambia de forma invocando cuatro adds elementales.',
        type: 'mechanics',
        tip: 'Los adds de transición deben ser controlados con CC y eliminados rápidamente. Planificar con anticipación cuándo hacer la transición para tener CCs disponibles.',
        warning: 'Las transiciones frecuentes dificultan el control de adds. Planificar mínimas transiciones.',
      },
    ],
    strategy:
      'Dos tanques con sets de resistencias opuestos. Mantener a Hydross en su forma el mayor tiempo posible para minimizar transiciones. Rotar tanques a las 4 acumulaciones. Los adds de transición tienen prioridad inmediata.',
    phases: [
      {
        name: 'Fase 1 — Forma activa (Natural o Corrupta)',
        description: '',
        events: [
          'El tanque correspondiente entra con su set de resistencia (Naturaleza o Sombras) según la forma actual de Hydross.',
          'Toda la raid hace DPS estable evitando empujar transiciones antes de tiempo.',
          'Control estricto de acumulaciones de Marca de Corrupción: a 4 acumulaciones se prepara el cambio de tanque.',
          'Curanderos priorizan al tanque activo y mantienen cobertura en objetivos con daño mágico residual.',
        ],
      },
      {
        name: 'Fase 2 — Transición de forma',
        description: '',
        events: [
          'El tanque mueve a Hydross a través de la línea de transición para forzar cambio de forma solo cuando la raid esté lista.',
          'Al cambiar de forma aparecen adds elementales: prioridad máxima de control y limpieza rápida.',
          'El nuevo tanque toma Hydross inmediatamente con el set de resistencia correcto para esa forma.',
          'No encadenar transiciones seguidas: estabilizar la sala antes del siguiente cruce.',
        ],
      },
      {
        name: 'Fase 3 — Ejecución final',
        description: '',
        events: [
          'Con menos vida del boss, mantener el mismo patrón: transición limpia, adds controlados, tanque correcto por forma.',
          'Si el maná de healers cae, alargar ligeramente una forma para evitar transición desordenada.',
          'DPS usa cooldowns cuando el raid leader confirme que no habrá transición inmediata.',
          'La clave de cierre es disciplina: una transición mal tomada al final suele causar wipe.',
        ],
      },
    ],
  },
  {
    id: 'lurker',
    name: 'El Acechador de las Profundidades',
    description:
      'Enorme pez que emerge de una plataforma central de agua. La mecánica del Surtidor obliga a sumergirse periódicamente.',
    difficulty: 2,
    tankCount: 1,
    healerCount: 6,
    abilities: [
      {
        id: 'spout',
        name: 'Surtidor',
        icon: 'spell_frost_frostbolt02',
        description: 'Chorro giratorio de agua que inflige daño masivo a cualquier jugador en su trayectoria.',
        type: 'mechanics',
        tip: 'SUMERGIRSE en el agua cuando empiece a girar el Surtidor. Saltar al agua es la única forma de sobrevivir. Volver a la plataforma cuando termine.',
        warning: 'El Surtidor mata casi instantáneamente. Sumergirse es obligatorio.',
      },
      {
        id: 'whirl',
        name: 'Giro',
        icon: 'ability_rogue_sprint',
        description: 'Giro que inflige daño a todos los jugadores en cuerpo a cuerpo de la plataforma central.',
        type: 'damage',
        tip: 'Los DPS cuerpo a cuerpo deben alejarse durante el Giro. Los de distancia en las plataformas exteriores están seguros.',
      },
      {
        id: 'geyser',
        name: 'Géiser',
        icon: 'spell_frost_freeze',
        description: 'Lanza un géiser de agua hacia un objetivo aleatorio infligiendo daño y aturdiendo.',
        type: 'damage',
        tip: 'Difícil de evitar. Los curanderos deben sanar al objetivo aturdido rápidamente.',
      },
      {
        id: 'submerge',
        name: 'Sumergirse',
        icon: 'spell_nature_waterbreathing',
        description: 'El Acechador se sumerge periódicamente invocando adds de serpiente acuática que atacan a la raid.',
        type: 'adds',
        tip: 'Usar AoE para limpiar los adds rápidamente antes de que el jefe emerja. Los tanques rotan para manejar los adds en el agua.',
      },
    ],
    strategy:
      'Posicionar a la raid en la plataforma central y en las plataformas exteriores. Cuando el Surtidor empiece, todos saltan al agua inmediatamente. Durante la fase sumergida, matar adds con AoE.',
    phases: [
      {
        name: 'Fase 1 — Jefe emergido',
        description: '',
        events: [
          'Tanque principal fija al jefe mirando lejos del grupo de melee.',
          'Ranged y healers se reparten en plataformas exteriores para reducir daño simultáneo.',
          'Al inicio de Surtidor, toda la raid salta al agua para evitar el barrido letal.',
          'Tras terminar el barrido, volver rápido a posiciones para recuperar uptime de DPS/healing.',
        ],
      },
      {
        name: 'Fase 2 — Jefe sumergido',
        description: '',
        events: [
          'El Acechador desaparece e invoca adds acuáticos: tanques secundarios los agrupan.',
          'DPS de área limpia los packs antes de la siguiente emergencia del boss.',
          'Healers priorizan objetivos aislados en plataformas que reciban foco de adds.',
          'No perseguir adds fuera de posición: mejor reagrupar y limpiar por bloques.',
        ],
      },
      {
        name: 'Fase 3 — Repetición y cierre',
        description: '',
        events: [
          'El encuentro alterna constantemente entre emergido/sumergido: mantener ritmo y no perder disciplina.',
          'Cada error en Surtidor suele ser muerte inmediata, incluso con equipo avanzado.',
          'En el tramo final usar cooldowns ofensivos al reaparecer el jefe para acortar ciclos.',
          'Si la raid mantiene supervivencia en transiciones, el kill llega de forma estable.',
        ],
      },
    ],
  },
  {
    id: 'leotheras',
    name: 'Leotheras el Ciego',
    description:
      'Semidemoníaco que alterna entre Forma de Elfo de Sangre y Forma Demoníaca. En su forma demoníaca crea Demonios Interiores que cada jugador debe matar.',
    difficulty: 4,
    tankCount: 2,
    healerCount: 7,
    abilities: [
      {
        id: 'whirlwind',
        name: 'Torbellino',
        icon: 'ability_warrior_cleave',
        description: 'En Forma de Elfo de Sangre: Torbellino que daña a todos los jugadores en cuerpo a cuerpo.',
        type: 'mechanics',
        tip: 'Durante el Torbellino, Leotheras no puede ser tanqueado. Los cuerpo a cuerpo deben alejarse. Los de distancia continúan el DPS.',
      },
      {
        id: 'chaos-blast',
        name: 'Explosión de Caos',
        icon: 'spell_shadow_chaosblast',
        description: 'Forma Demoníaca: Ataque de daño de caos que ignora toda armadura.',
        type: 'tank',
        tip: 'El tanque de Forma Demoníaca necesita resistencias múltiples. Los Paladines son ideales por sus auras de resistencia.',
      },
      {
        id: 'inner-demon',
        name: 'Demonio Interior',
        icon: 'spell_shadow_demonictactics',
        description: 'Forma Demoníaca: Invoca una copia demoníaca de 5 jugadores aleatorios. Si no matas tu demonio interior, Leotheras te mata cuando cambia de forma.',
        type: 'mechanics',
        tip: 'Cada jugador con Demonio Interior DEBE matar su propia copia. Si mueres ante tu demonio, Leotheras te mata permanentemente al cambiar de forma.',
        warning: 'CRÍTICO: Matar tu propio Demonio Interior es responsabilidad individual. No hay forma de sobrevivir si no lo matas.',
      },
      {
        id: 'insidious-whisper',
        name: 'Susurro Insidioso',
        icon: 'spell_shadow_mindsteal',
        description: 'Encanta a algunos jugadores volviéndolos hostiles a la raid temporalmente.',
        type: 'mechanics',
        tip: 'Usar CC (polimorfia, red de telaraña, etc.) en los jugadores encantados pero NO matarlos. Esperan a que el encanto termine.',
      },
    ],
    strategy:
      'Dos tanques: uno para cada forma. Durante el Torbellino, retroceder. Cuando aparecen Demonios Interiores, cada jugador mata el suyo inmediatamente. Los encantados deben ser inmovilizados sin matarlos.',
    phases: [
      {
        name: 'Forma de Elfo de Sangre (~60s)',
        description:
          'Leotheras ataca directamente al tanque principal. DPS normal desde detrás. Aproximadamente cada 20 segundos ejecuta Torbellino: en ese momento NO tiene objetivo fijo y gira dañando en área a su alrededor. TODOS los cuerpo a cuerpo retroceden al menos 8 metros en cuanto vean el Torbellino comenzar. Los DPS de distancia pueden continuar atacando sin problemas. El Torbellino dura 5-6 segundos. Al terminar, los cuerpo a cuerpo vuelven. Esta forma dura ~60 segundos antes de cambiar a Demoníaca.',
      },
      {
        name: 'Forma Demoníaca (~45s)',
        description:
          'Al cambiar, Leotheras pierde su objetivo previo — el segundo tanque debe cogerlo INMEDIATAMENTE. Al mismo tiempo, 5 jugadores aleatorios ven aparecer su Demonio Interior personal. Esos 5 jugadores deben PARAR su DPS en Leotheras y matar a su propio Demonio (nadie más puede dañarlo). Tienen ~20 segundos. Si el Demonio Interior sobrevive cuando Leotheras regresa a Forma Élfica, mata instantáneamente a su jugador — no hay salvación posible. Los otros 20 jugadores siguen atacando a Leotheras con normalidad. Al terminar, Leotheras vuelve a Forma Élfica y el ciclo se repite.',
      },
    ],
  },
  {
    id: 'karathress',
    name: 'Señor de las Profundidades Karathress',
    description:
      'Naga flanqueado por tres lugartenientes. Cada lugarteniente muerto le otorga una habilidad adicional a Karathress.',
    difficulty: 3,
    tankCount: 4,
    healerCount: 7,
    abilities: [
      {
        id: 'cataclysmic-bolt',
        name: 'Rayo Cataclísmico',
        icon: 'spell_nature_lightning',
        description: 'Daño de naturaleza masivo dirigido al objetivo con mayor maná en ese momento.',
        type: 'damage',
        tip: 'El objetivo siempre es el jugador con más maná. Los curanderos deben gastar maná para no ser objetivo. En la práctica, un curandero designado actúa como "pararrayos".',
      },
      {
        id: 'power-absorption',
        name: 'Absorber Poder',
        icon: 'spell_shadow_shadowandflame',
        description: 'Cada lugarteniente muerto le otorga una habilidad: Veneno (Sharkkis), Llamada al Tótem (Tidalvess) o Curación (Caribdis).',
        type: 'mechanics',
        tip: 'Matar primero a Caribdis (curandera) para evitar que cure a Karathress. Después Tidalvess, luego Sharkkis. Orden crítico.',
        warning: 'Si Caribdis muere la última, Karathress hereda curación activa que puede hacer la pelea imposible.',
      },
      {
        id: 'enrage',
        name: 'Furia',
        icon: 'ability_warrior_battleshout',
        description: 'A bajo porcentaje de vida entra en Furia, aumentando dramáticamente el daño al tanque.',
        type: 'tank',
        tip: 'Tener cooldowns de curación preparados para la fase de Furia. El tanque necesita curación intensiva.',
      },
    ],
    strategy:
      'Cuatro tanques para los cuatro enemigos. Orden de muerte: Caribdis > Tidalvess > Sharkkis > Karathress. Curandero designado como objetivo del Rayo Cataclísmico para proteger al resto.',
    phases: [
      {
        name: 'Fase 1 — Pull y control inicial',
        description: '',
        events: [
          'Cuatro tanques asignados antes del pull: uno por cada objetivo (Karathress + 3 consejeros).',
          'Separa a los cuatro enemigos para reducir solapes de habilidades y facilitar interrupciones.',
          'Orden de kill recomendado: Caribdis -> Tidalvess -> Sharkkis -> Karathress.',
          'Interrupciones coordinadas sobre casts peligrosos de los consejeros, especialmente curaciones.',
        ],
      },
      {
        name: 'Fase 2 — Herencia de poderes',
        description: '',
        events: [
          'Cada consejero muerto transfiere una mecánica adicional a Karathress.',
          'Curanderos ajustan prioridad según el poder heredado activo en ese momento.',
          'El objetivo del Rayo Cataclísmico debe estar preasignado y con soporte dedicado.',
          'No acelerar de más el boss final si la raid está desordenada por cambios recientes.',
        ],
      },
      {
        name: 'Fase 3 — Karathress potenciado',
        description: '',
        events: [
          'Con los tres consejeros caídos, Karathress concentra toda la presión del encuentro.',
          'Tanques rotan defensivos en ventanas de daño alto y curanderos guardan CDs para ráfagas.',
          'DPS usa cooldowns cuando healers confirmen estabilidad del grupo.',
          'La ejecución final depende más del control que del daño bruto.',
        ],
      },
    ],
  },
  {
    id: 'morogrim',
    name: 'Morogrim Tidewalker',
    description:
      'Gigante del agua que invoca múrlocos continuamente. El verdadero peligro es gestionar los adds mientras se mantiene vivo al tanque.',
    difficulty: 3,
    tankCount: 2,
    healerCount: 7,
    abilities: [
      {
        id: 'tidal-wave',
        name: 'Ola de Marea',
        icon: 'spell_frost_frostshock',
        description: 'Daño masivo de escarcha a toda la raid periódicamente.',
        type: 'damage',
        tip: 'Curación de área masiva necesaria después de cada Ola de Marea. Los curanderos deben anticiparla.',
      },
      {
        id: 'earthquake',
        name: 'Terremoto',
        icon: 'spell_nature_earthquake',
        description: 'Aturde a todos los jugadores en cuerpo a cuerpo durante varios segundos.',
        type: 'mechanics',
        tip: 'Los cuerpo a cuerpo deben alejarse cuando Morogrim levanta los brazos para el Terremoto. Difícil de predecir la primera vez.',
      },
      {
        id: 'summon-murlocs',
        name: 'Invocar Múrlocos',
        icon: 'ability_warrior_charge',
        description: 'Invoca olas de múrlocos venenosos que se enganchan a los curanderos.',
        type: 'adds',
        tip: 'PRIORIDAD MÁXIMA: AoE en los múrlocos inmediatamente. Si alcanzan a los curanderos, los envenenan y mueren en segundos. Asignar DPS de AoE exclusivamente para múrlocos.',
        warning: 'Los múrlocos que alcanzan a los curanderos los matan rápidamente. Jamás ignorarlos.',
      },
      {
        id: 'watery-grave',
        name: 'Tumba Acuática',
        icon: 'spell_frost_summonwaterelemental',
        description: 'Lanza a 4 jugadores aleatorios al agua, inmovilizándolos y dañándolos.',
        type: 'mechanics',
        tip: 'Los jugadores en Tumba Acuática necesitan curación urgente. Priorizar sanarlos y liberarlos.',
      },
    ],
    strategy:
      'Tanquear a Morogrim lejos del agua. Todo el DPS de AoE debe saltar a los múrlocos instantáneamente cuando aparecen. Los curanderos en filas traseras protegidas. Curación masiva tras cada Ola de Marea.',
    phases: [
      {
        name: 'Fase 1 — Presión base del boss',
        description: '',
        events: [
          'Tanque principal fija a Morogrim en posición estable con la raid separada por grupos funcionales.',
          'Cada [[Ola de Marea]] exige curación de raid rápida para evitar caídas en cadena.',
          'Melee reacciona a [[Terremoto]] para no quedar vendidos durante picos de daño.',
          'Ranged mantienen daño estable sin comprometer visión de entrada de adds.',
        ],
      },
      {
        name: 'Fase 2 — Olas de múrlocos',
        description: '',
        events: [
          'Cuando salen múrlocos, todo el AoE asignado cambia objetivo inmediatamente.',
          'Tanque secundario ayuda a fijar adds que se escapen hacia línea de healers.',
          'Healers priorizan supervivencia propia y del tanque de adds antes de volver al boss.',
          'Si los múrlocos no se limpian rápido, la presión de veneno desborda la raid.',
        ],
      },
      {
        name: 'Fase 3 — Tumbas y cierre',
        description: '',
        events: [
          'La Tumba Acuática obliga a curación reactiva sobre objetivos inmovilizados.',
          'No cortar el control de múrlocos por intentar forzar DPS final al boss.',
          'Cooldowns defensivos de raid se reservan para combinaciones de Ola + adds + tumba.',
          'El final es limpio si cada ola de múrlocos se resuelve en segundos.',
        ],
      },
    ],
  },
  {
    id: 'vashj',
    name: 'Lady Vashj',
    description:
      'La reina naga, jefa final de la Caverna Serpentina. Tres fases complejas con mecánicas de pase de objetos únicas en TBC.',
    difficulty: 5,
    tankCount: 2,
    healerCount: 8,
    abilities: [
      {
        id: 'static-charge',
        name: 'Carga Estática',
        icon: 'spell_nature_lightning',
        description: 'Aplica un DoT de relámpago al objetivo que salta a jugadores cercanos.',
        type: 'debuff',
        tip: 'El jugador con Carga Estática debe alejarse del grupo inmediatamente hasta que el DoT expire. Si está cerca de otros, el daño se multiplica.',
        warning: 'Alejarse del grupo al momento. Pegarse a otros mata en segundos.',
      },
      {
        id: 'forked-lightning',
        name: 'Relámpago Bifurcado',
        icon: 'spell_nature_chainlightning',
        description: 'Relámpago que salta entre hasta 3 jugadores cercanos.',
        type: 'damage',
        tip: 'Separación mínima de 8 metros entre jugadores para evitar el salto. La dispersión de la raid es fundamental.',
      },
      {
        id: 'enchanted-elemental',
        name: 'Elementales Encantados',
        icon: 'spell_frost_summonwaterelemental',
        description: 'Fase 2: Elementales invulnerables que aceleran a Vashj cada vez que la tocan.',
        type: 'adds',
        tip: 'NO se pueden matar. Usar CC (trampa de hielo, redes) para inmovilizarlos. Asignar raideadores a kiting exclusivo de elementales.',
        warning: 'Si los elementales alcanzan a Vashj, aumentan su daño exponencialmente.',
      },
      {
        id: 'tainted-core',
        name: 'Núcleo Contaminado',
        icon: 'spell_shadow_shadowwordpain',
        description: 'Fase 2: Drops de los Colmillos Nagas. Deben ser pasados de jugador a jugador hasta los pilares para desactivar el Escudo de Vashj.',
        type: 'mechanics',
        tip: 'Sistema de pase: jugador A recoge el núcleo y lo pasa a jugador B (click derecho), que lo lleva al pilar. El jugador que lleva el núcleo queda ralentizado. Planificar la cadena de pase.',
        warning: 'MECÁNICA ÚNICA: Cuatro núcleos deben llegar a los cuatro pilares. Sin esto, Vashj es invulnerable.',
      },
      {
        id: 'toxic-spores',
        name: 'Esporas Tóxicas',
        icon: 'ability_creature_poison02',
        description: 'Fase 3: DoT de veneno en toda la raid que requiere curación masiva constante.',
        type: 'damage',
        tip: 'En Fase 3, máximo DPS. Los curanderos en modo emergencia constante. Usar todas las cooldowns de curación disponibles.',
      },
    ],
    strategy:
      'Fase 1: Tanquear a Vashj, dispersión de raid, eliminar Carga Estática alejándose. Fase 2: Desactivar los 4 pilares pasando Núcleos Contaminados en cadena mientras se controlan elementales con CC. Fase 3: Máximo DPS con curación de emergencia.',
    phases: [
      {
        name: 'Fase 1 (100–70%)',
        description:
          'Combate directo con Vashj. Un tanque principal la sostiene en el centro. La raid se dispersa en círculo a 8+ metros entre jugadores para evitar el salto del Relámpago Bifurcado. Cuando un jugador recibe Carga Estática, se mueve inmediatamente al borde exterior de la sala y espera que expire — un curandero lo sigue. Los curanderos mantienen curación moderada constante. Al llegar Vashj al 70%, activa automáticamente su Escudo Prismático y comienza la Fase 2 — los cinco subgrupos deben estar ya preparados y en posición antes de este momento.',
      },
      {
        name: 'Fase 2 — Escudo activo (70–0% transitorio)',
        description:
          'Vashj es completamente invulnerable. No atacarla. Cuatro tareas simultáneas: (A) Los Colmillos Nagas que aparecen en el norte/sur dropean Núcleos Contaminados — un tanque coge a los Colmillos para que no ataquen libremente. (B) Un jugador recoge el Núcleo caído y lo pasa en cadena (click derecho) a la persona más cercana al pilar correspondiente — el portador queda ralentizado así que la cadena debe ser eficiente. (C) Cuatro equipos cubren los cuatro pilares — al llegar el Núcleo, clicar en el pilar para desactivarlo. (D) Los Elementales Encantados DEBEN ser inmovilizados con CC (trampa de hielo, redes): si tocan a Vashj, la empoderan permanentemente. Cuando los cuatro pilares son desactivados, el escudo cae.',
      },
      {
        name: 'Fase 3 — Sin escudo (tras los pilares)',
        description:
          'El escudo cae y Vashj vuelve a ser vulnerable. Ahora añade Esporas Tóxicas (DoT de veneno en toda la raid) a todas las mecánicas de Fase 1. La Carga Estática, el Relámpago y los Elementales siguen activos. La raid sufre daño masivo constante de las Esporas. Los curanderos en modo emergencia total. Usar TODAS las cooldowns ofensivas para terminar cuanto antes. Esta fase es una carrera contra el reloj: cuanto más dure, más probable es que los curanderos se queden sin maná.',
      },
    ],
  },
];
