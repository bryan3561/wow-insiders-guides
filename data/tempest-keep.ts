import type { Boss } from './types';

export const tempestKeepBosses: Boss[] = [
  {
    id: 'alar',
    name: "Al'ar",
    description:
      'El Fénix de Kael\'thas. Pelea en dos fases: una aérea donde Al\'ar es inalcanzable para cuerpo a cuerpo y una de combate directo que termina con su resurrección.',
    difficulty: 3,
    tankCount: 2,
    healerCount: 7,
    abilities: [
      {
        id: 'flame-buffet',
        name: 'Embate de Llama',
        icon: 'spell_fire_fireballgreen',
        description: 'Acumula un DoT de fuego en el tanque principal. A altas acumulaciones el daño es mortal.',
        type: 'tank',
        tip: 'Rotar tanques cada 5-6 acumulaciones. Tener siempre un segundo tanque listo para recoger el agro.',
      },
      {
        id: 'dive-bomb',
        name: 'Bomba en Picado',
        icon: 'spell_fire_selfdestruct',
        description: 'Fase 1: Al\'ar se lanza en picado contra un jugador aleatorio causando daño masivo en área al impactar.',
        type: 'mechanics',
        tip: 'Dispersar a la raid para minimizar el daño en área. El objetivo debe intentar alejarse del grupo, aunque con el tiempo de reacción es difícil.',
      },
      {
        id: 'rebirth',
        name: 'Renacimiento del Fénix',
        icon: 'spell_fire_phoenix',
        description: 'Al morir en Fase 1, Al\'ar reaparece como huevo y eclosiona. Si el huevo no es destruido rápidamente, Al\'ar resucita con vida completa.',
        type: 'mechanics',
        tip: 'Cuando Al\'ar muere, atacar el huevo INMEDIATAMENTE con todo el DPS disponible. Si el huevo eclosiona, Al\'ar vuelve con vida completa.',
        warning: 'No destruir el huevo a tiempo es un wipe garantizado.',
      },
      {
        id: 'ember-blast',
        name: 'Explosión de Brasas',
        icon: 'spell_fire_fireball02',
        description: 'Fase 2: Explosión de fuego en área centrada en Al\'ar. Daño masivo a todos los jugadores cercanos.',
        type: 'damage',
        tip: 'En Fase 2, posicionarse en el rango mínimo para DPS pero máxima distancia posible. Los curanderos deben estar en los bordes.',
      },
    ],
    strategy:
      'Fase 1: Tanques rotativos en las plataformas, DPS de distancia en el suelo. Destruir el huevo al instante cuando caiga. Fase 2: Combate directo. Rotar tanques por Embate de Llama. Máximo DPS antes del Frenesí.',
    phases: [
      {
        name: 'Fase 1 — Al\'ar en vuelo (100–0% → revive al 60%)',
        description:
          "Al'ar vuela entre las cuatro plataformas elevadas en las esquinas de la sala. Dos tanques lo persiguen: uno cubre las plataformas norte, otro las sur. Cuando Al'ar se posa en una plataforma, el tanque correspondiente sube y lo tanquea. Los DPS de distancia atacan desde el suelo central. Los cuerpo a cuerpo tienen acceso muy limitado. Periódicamente Al'ar se lanza en picado contra un jugador aleatorio — la raid se dispersa. Al llegar Al'ar al 0% en Fase 1, deja un huevo en el suelo: PARAR TODO DPS e inmediatamente atacar el huevo antes de que eclosione. Si el huevo eclosiona, Al'ar revive con vida completa.",
      },
      {
        name: 'Fase 2 — Al\'ar en tierra (desde el aterrizaje)',
        description:
          "Al'ar aterriza permanentemente en el centro de la sala. Un solo tanque principal lo sostiene. Todos los DPS cuerpo a cuerpo se suman al combate. Embate de Llama se acumula en el tanque activo — rotar tanques cada 5-6 acumulaciones para que el primero se limpie. Explosión de Brasas causa daño en área frecuente — los curanderos en los bordes de la sala y los DPS algo dispersos. Esta fase es más directa que la Fase 1 pero el daño al tanque es elevado. Máximo DPS.",
      },
    ],
  },
  {
    id: 'void-reaver',
    name: 'Devastador del Vacío',
    description:
      'Enorme robot de los Naaru. Pelea relativamente sencilla con una mecánica clave: los Orbes Arcanos que caen del cielo.',
    difficulty: 2,
    tankCount: 2,
    healerCount: 6,
    abilities: [
      {
        id: 'pounding',
        name: 'Martilleo',
        icon: 'ability_warrior_shieldslam',
        description: 'Ataque de área masivo que golpea a todos los jugadores en cuerpo a cuerpo.',
        type: 'tank',
        tip: 'Los cuerpo a cuerpo deben alejarse cuando el Devastador levanta los brazos. Volver tras el Martilleo.',
      },
      {
        id: 'arcane-orb',
        name: 'Orbe Arcano',
        icon: 'spell_arcane_arcanebolt',
        description: 'Lanza orbes arcanos que caen sobre zonas de la sala. El área de impacto se marca con un círculo.',
        type: 'mechanics',
        tip: 'Salir del círculo marcado en el suelo antes del impacto. Es de fácil evasión si se está atento. El daño es fatal si te golpea.',
        warning: 'No quedarse en los círculos. El impacto mata instantáneamente.',
      },
      {
        id: 'knock-away',
        name: 'Repulsión',
        icon: 'ability_warrior_charge',
        description: 'Aleja al tanque principal, causando pérdida de agro temporal.',
        type: 'tank',
        tip: 'El segundo tanque debe estar listo para tomar el agro inmediatamente. El primer tanque debe volver rápido.',
      },
      {
        id: 'static-charge',
        name: 'Carga Estática',
        icon: 'spell_nature_lightning',
        description: 'Aplica una maldición de relámpago que salta a jugadores cercanos.',
        type: 'debuff',
        tip: 'El objetivo debe alejarse del grupo inmediatamente. Un decursador/disipador puede eliminar la maldición.',
      },
    ],
    strategy:
      'Combate sencillo. Toda la raid separada para evitar el salto de la Carga Estática. Salir de los círculos de Orbe Arcano. Los cuerpo a cuerpo retroceden para el Martilleo.',
    phases: [
      {
        name: 'Fase 1 — Posicionamiento y control de daño',
        description: '',
        events: [
          'Tanque principal fija al boss en el centro y el segundo tanque se mantiene segundo en amenaza.',
          'Ranged y healers juegan separados para minimizar solapes de Carga Estática.',
          'Los cuerpo a cuerpo entran y salen en función de Martilleo para evitar daño innecesario.',
          'La supervivencia depende de reacción inmediata, no de curación bruta.',
        ],
      },
      {
        name: 'Fase 2 — Presión de habilidades periódicas',
        description: '',
        events: [
          'Cada Orbe Arcano marca una zona: cualquier jugador dentro al impacto suele morir.',
          'Repulsión puede desordenar amenaza; el tanque secundario debe absorber la transición sin pánico.',
          'Curanderos priorizan daño de objetivos alcanzados por errores de posición antes de volver al tanque.',
          'No forzar DPS si la raid está desordenada: primero estabilizar, luego apretar.',
        ],
      },
      {
        name: 'Fase 3 — Cierre estable',
        description: '',
        events: [
          'Con el boss bajo de vida, mantener el mismo patrón: separación, esquiva y tanques coordinados.',
          'Cooldowns ofensivos se usan cuando no haya orbes cayendo sobre zonas clave de la raid.',
          'Un wipe tardío suele venir por relajarse en los círculos de Orbe Arcano.',
          'Si la ejecución mecánica se mantiene limpia, el kill es consistente.',
        ],
      },
    ],
  },
  {
    id: 'solarian',
    name: 'Alta Astrómante Solarian',
    description:
      'Sacerdotisa sangre que lucha como humana hasta el 20%, momento en que se transforma en Naaru voidwalker y cambia totalmente de estilo.',
    difficulty: 3,
    tankCount: 1,
    healerCount: 6,
    abilities: [
      {
        id: 'wrath-astromancer',
        name: 'Cólera de la Astrómante',
        icon: 'spell_arcane_arcanebolt',
        description: 'Proyectil arcano de alto daño dirigido a un objetivo aleatorio de distancia.',
        type: 'damage',
        tip: 'Sin mucha forma de evitarlo. Los curanderos deben estar atentos a los objetivos de distancia.',
      },
      {
        id: 'void-zones',
        name: 'Zonas de Vacío',
        icon: 'spell_shadow_shadowwordpain',
        description: 'Crea zonas oscuras en el suelo que causan daño masivo por segundo.',
        type: 'mechanics',
        tip: 'Alejarse de inmediato de cualquier zona oscura. La sala se llena con el tiempo; planificar el movimiento de la raid.',
      },
      {
        id: 'solarians-wrath',
        name: 'Ira de Solarian',
        icon: 'spell_holy_holysmite',
        description: 'Marca a un jugador que explota después de 3 segundos causando daño masivo en área.',
        type: 'mechanics',
        tip: 'Si eres marcado, correr INMEDIATAMENTE lejos de la raid. Tienes 3 segundos. No vacilar.',
        warning: 'El marcado DEBE alejarse. Si explota cerca del grupo puede limpiar a varios jugadores.',
      },
      {
        id: 'transformation',
        name: 'Transformación (20%)',
        icon: 'spell_shadow_shadowandflame',
        description: 'Al 20% se transforma, invocando adds y cambiando completamente sus hechizos.',
        type: 'mechanics',
        tip: 'Preparar AoE para los adds de la transformación. El combate se acelera dramáticamente. Máximo DPS para terminar rápido.',
      },
    ],
    strategy:
      'Combate relativamente directo hasta el 20%. Salir de Zonas de Vacío, alejarse si estás marcado. Al 20%, la transformación cambia todo: AoE en adds y máximo DPS en Solarian.',
    phases: [
      {
        name: 'Fase 1 (100–20%) — Forma de Astrómante',
        description:
          'Solarian lanza Cólera de la Astrómante a objetivos de distancia aleatorios — daño alto pero inevitable. Las Zonas de Vacío aparecen en el suelo con indicador visual: alejarse inmediatamente. La mecánica más peligrosa es Ira de Solarian: marca a un jugador con un círculo, que tiene 3 segundos para alejarse de la raid antes de explotar. Si el marcado se aleja a tiempo y explota lejos, el daño es solo para él. Si explota cerca del grupo puede matar a varios. Esta fase dura mientras Solarian esté entre el 100% y el 20% de vida.',
      },
      {
        name: 'Fase 2 (20–0%) — Transformación en Naaru oscuro',
        description:
          'Al llegar al 20%, Solarian se transforma en una entidad de vacío e invoca varios adds de sombra. Los adds deben ser tanqueados por un tanque secundario o controlados con CC mientras el DPS los limpia. La forma transformada tiene nuevos hechizos de sombra más peligrosos. Las Zonas de Vacío siguen apareciendo. Usar TODOS los cooldowns ofensivos disponibles para terminar cuanto antes — esta fase es breve si el DPS es suficiente pero puede alargarse peligrosamente si hay bajas entre los DPS.',
      },
    ],
  },
  {
    id: 'kaelthas',
    name: "Kael'thas Sunstrider",
    description:
      "El príncipe de los Elfos de Sangre. Pelea en cinco fases con mecánicas únicas en cada una. Considerado uno de los encuentros más épicos de TBC.",
    difficulty: 5,
    tankCount: 3,
    healerCount: 8,
    abilities: [
      {
        id: 'phoenix',
        name: 'Fénix',
        icon: 'spell_fire_phoenix',
        description: 'Invoca un Fénix que persigue y mata jugadores. Al morir deja un huevo que eclosiona si no es destruido.',
        type: 'adds',
        tip: 'Matar el Fénix rápidamente. Al morir, atacar el huevo de inmediato. Si el huevo eclosiona, el Fénix vuelve con vida completa.',
        warning: 'Si el huevo eclosiona, el Fénix renace con vida completa.',
      },
      {
        id: 'pyroblast',
        name: 'Piroblast',
        icon: 'spell_fire_fireball02',
        description: 'Canal de 3 segundos que termina en un Piroblast que mata casi instantáneamente. Siempre interrumpible.',
        type: 'interrupt',
        tip: 'INTERRUMPIR SIEMPRE. Asignar 2-3 jugadores en rotación de interrupción. Pyroblast sin interrupción = muerte del objetivo.',
        warning: 'Un Pyroblast sin interrumpir mata instantáneamente a cualquier jugador.',
      },
      {
        id: 'mind-control',
        name: 'Control Mental',
        icon: 'spell_shadow_mindsteal',
        description: 'Fase 5: Controla mentalmente a varios jugadores obligándolos a atacar a sus compañeros.',
        type: 'mechanics',
        tip: 'Los jugadores controlados deben ser inmovilizados con CC pero NO matados. Tienen que sobrevivir al encuentro. Paladines pueden usar Mano Protectora en miembros controlados.',
        warning: 'Matar a un jugador controlado puede causar un wipe moral y de recursos.',
      },
      {
        id: 'flame-strike',
        name: 'Golpe de Llama',
        icon: 'spell_fire_flamestrike',
        description: 'Marca un área del suelo que explota en llamas después de 2 segundos.',
        type: 'mechanics',
        tip: 'Salir del área marcada antes de la explosión. Con el tiempo la sala se llena de zonas peligrosas.',
      },
      {
        id: 'gravity-lapse',
        name: 'Lapso de Gravedad',
        icon: 'spell_arcane_prismaticcloak',
        description: 'Fase 5: Lanza a toda la raid al aire. Los jugadores flotan y deben evitar orbes de vacío mientras están en el aire.',
        type: 'mechanics',
        tip: 'Durante el Lapso de Gravedad, usar el movimiento aéreo para esquivar los orbes de vacío. Morir en el aire es fácil si no se presta atención.',
        warning: 'Los orbes de vacío que te golpean mientras flotas hacen daño masivo.',
      },
    ],
    strategy:
      'Cinco fases: Armas legendarias (Fase 1), Consejeros (Fase 2), Kael\'thas (Fase 3), Segunda ronda (Fase 4), Fase Final con todos activos (Fase 5). Preparar interrupciones para Pyroblast, destruir huevos de Fénix, no matar controlados mentalmente.',
    phases: [
      {
        name: 'Fase 1 — Las Armas Legendarias',
        description:
          "Cinco armas de la cámara cobran vida y atacan a la raid de forma independiente. Cada arma tiene sus propias mecánicas y debe ser tanqueada o esquivada. IMPORTANTE: ningún jugador debe recoger las armas del suelo durante esta fase — serán recogidas por cuatro jugadores designados en Fase 2. Sin mecánicas de jefe principal. Matar todas las armas en el orden más seguro para el grupo. Los tanques y curanderos establecen aquí sus rotaciones para lo que viene.",
      },
      {
        name: 'Fase 2 — Los Cuatro Consejeros',
        description:
          "Los cuatro Consejeros de Kael'thas entran simultáneamente. Al mismo tiempo, cuatro jugadores designados RECOGEN las armas legendarias del suelo y las equipan — tienen bonificaciones enormes y son esenciales para el resto del encuentro. Orden de kill obligatorio: (1) Sacerdotisa Delrissa (curandera — interrumpir cada cast), (2) Tael'ara (mago de fuego — purgar sus buffs ofensivos), (3) Sanguinar (guerrero — es un tanque secundario), (4) Capernian (daño eléctrico — separar del grupo). Kael'thas aún no ha entrado al combate.",
      },
      {
        name: "Fase 3 — Kael'thas en combate",
        description:
          "Kael'thas entra al combate. Un tanque principal lo sostiene. La mecánica de interrupción más crítica del encuentro: Pyroblast es un canal de 3 segundos que, si completa, mata al objetivo. Asignar DOS jugadores en rotación permanente de interrupción — nunca dejar pasar un Pyroblast. Fénix invocado periódicamente: matar el Fénix, luego atacar el huevo que deja. Golpe de Llama marca zonas en el suelo — salir del círculo. Esta fase es directa si las interrupciones funcionan.",
      },
      {
        name: "Fase 4 — Resurrección de Consejeros",
        description:
          "Kael'thas resucita a los cuatro Consejeros con 50% de vida. Tanto el jefe como los Consejeros están activos simultáneamente. Los cuatro jugadores con las armas legendarias tienen ventaja aquí. Misma prioridad de kill que en Fase 2: eliminar Consejeros primero, luego volver a Kael'thas. Esta fase es breve si el DPS es eficiente. Los curanderos gestionan el daño de múltiples enemigos al mismo tiempo.",
      },
      {
        name: 'Fase 5 — Poderes completos',
        description:
          "Con los Consejeros muertos de nuevo, Kael'thas activa sus habilidades completas. NUEVAS MECÁNICAS simultáneas: (A) Lapso de Gravedad — toda la raid flota y debe esquivar activamente los orbes de vacío que orbitan en el aire; (B) Control Mental en 3 jugadores — CC inmediato (no matar) y esperar que expire; (C) Fénix mejorado; (D) Pyroblast sigue activo — interrumpir siempre. Esta es la fase de mayor caos: mantener interrupciones, CC a los controlados, esquivar orbes voladores y curar al tanque todo al mismo tiempo.",
      },
    ],
  },
];
