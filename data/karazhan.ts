export type { AbilityType, Ability, Phase, Boss } from './types';
import type { Boss } from './types';

export const karazhanBosses: Boss[] = [
  {
    id: 'attumen',
    name: 'Attumen el Cazador',
    description:
      'El primer jefe de Karazhan. Comienza como jinete a pie y luego se une a su corcel Medianoche. Requiere dos tanques hasta la fase final.',
    difficulty: 1,
    tankCount: 2,
    healerCount: 2,
    abilities: [
      {
        id: 'shadow-cleave',
        name: 'Golpe en Sombra',
        icon: 'ability_warrior_cleave',
        description: 'Golpe cuerpo a cuerpo que afecta a todos en el arco frontal del jefe.',
        type: 'tank',
        tip: 'Solo el tanque debe estar frente al jefe. Toda la raid debe posicionarse detrás para evitar este ataque.',
      },
      {
        id: 'intangible-presence',
        name: 'Presencia Intangible',
        icon: 'spell_shadow_curseofsargeras',
        description: 'Maldición que reduce la probabilidad de golpe del objetivo.',
        type: 'debuff',
        tip: 'Disipar de inmediato con un Mago o Druida. Si el tanque tiene esta maldición puede perder el agro.',
        warning: 'Alta prioridad: disipar del tanque inmediatamente.',
      },
      {
        id: 'berserker-charge',
        name: 'Carga Berserker',
        icon: 'ability_warrior_charge',
        description: 'Carga hacia un objetivo aleatorio causando daño en área a jugadores cercanos.',
        type: 'damage',
        tip: 'Mantener a la raid agrupada detrás del jefe minimiza el daño en área. No dispersarse en exceso.',
      },
      {
        id: 'disarm',
        name: 'Desarmar',
        icon: 'ability_warrior_disarm',
        description: 'Desarma al tanque temporalmente, reduciendo su daño y capacidad de mantener agro.',
        type: 'tank',
        tip: 'Los guerreros pueden usar Reflexión de Hechizo para contrarrestar el Desarmar. El tanque puede equipar escudo mientras está desarmado.',
      },
    ],
    strategy:
      'Usa dos tanques: uno para Attumen y otro para Medianoche. Al 25% de vida de Medianoche, Attumen la monta. Un solo tanque principal para el jefe combinado. Mantén a la raid detrás del jefe y disipa maldiciones regularmente.',
    phases: [
      {
        name: 'Fase 1 (100–25% de Medianoche)',
        description:
          'Dos tanques separados: Tanque A sostiene a Attumen en la esquina de la habitación, Tanque B tanquea a Medianoche en el centro. Todo el DPS se vuelca exclusivamente en Medianoche — ignorar a Attumen, su daño es menor en esta fase. Los curanderos se dividen: un curandero por tanque. Attumen lanzará sus habilidades normales pero es secundario. Al llegar Medianoche al 25%, Attumen la monta inmediatamente — preparar al Tanque B para asumir el jefe combinado en ese instante.',
      },
      {
        name: 'Fase 2 (Attumen montado)',
        description:
          'Al montar Medianoche, Attumen combina las estadísticas de ambos. El Tanque B pasa a ser el único tanque activo. Posicionar al jefe con la cola apuntando a una pared para evitar que Nova de Sombras expulse al tanque al vacío. Todos los DPS atacan desde detrás. Los dos curanderos se consolidan en el tanque activo. Disipar Presencia Intangible del tanque en cuanto aparezca — a veces el jefe la lanza varias veces seguidas. El Tanque A queda en reserva en caso de que el principal caiga.',
      },
    ],
  },
  {
    id: 'moroes',
    name: 'Moroes',
    description:
      'El mayordomo de Karazhan. Lucha junto a cuatro sirvientes aleatorios de su lista de invitados. La mecánica del Garrote hace este combate especialmente peligroso para los curanderos.',
    difficulty: 2,
    tankCount: 2,
    healerCount: 2,
    abilities: [
      {
        id: 'garrote',
        name: 'Garrote',
        icon: 'ability_rogue_garrote',
        description:
          'Veneno permanente e incurable que provoca un sangrado que incrementa el daño recibido.',
        type: 'debuff',
        tip: 'No se puede curar con magia normal. Solo puede eliminarse con Protección Divina (Paladín) o Evasión Total (Druida). Los objetivos con Garrote necesitan curación prioritaria.',
        warning: 'Peligro crítico: el Garrote se acumula y puede matar a los jugadores si no son curados constantemente.',
      },
      {
        id: 'gouge',
        name: 'Golpe Bajo',
        icon: 'ability_rogue_gouge',
        description: 'Aturde brevemente al tanque principal causando pérdida de agro temporal.',
        type: 'tank',
        tip: 'Tener un tanque de reserva listo para tomar el agro inmediatamente cuando el tanque principal es aturdido.',
      },
      {
        id: 'mana-burn',
        name: 'Quemar Maná',
        icon: 'spell_shadow_manaburn',
        description: 'Uno de los sirvientes puede lanzar este hechizo para drenar el maná de los curanderos.',
        type: 'interrupt',
        tip: 'Interrumpir con cualquier habilidad disponible. Prioridad alta ya que puede incapacitar a los curanderos en el peor momento.',
      },
      {
        id: 'greater-heal',
        name: 'Gran Curación',
        icon: 'spell_holy_greaterheal',
        description: 'Uno de los sirvientes sacerdotes puede curar a Moroes por grandes cantidades.',
        type: 'interrupt',
        tip: 'Interrumpir inmediatamente. Asignar un jugador dedicado a interrumpir las curaciones. Los sirvientes curanderos son la mayor prioridad de kill.',
        warning: 'Matar primero a todos los sirvientes curanderos antes de enfocarse en Moroes.',
      },
      {
        id: 'blind',
        name: 'Cegar',
        icon: 'ability_rogue_blind',
        description: 'Veneno que ciega a un jugador desorientándolo temporalmente.',
        type: 'debuff',
        tip: 'Eliminar con cualquier habilidad que elimine venenos. Chamanes y druidas pueden limpiar esto fácilmente.',
      },
    ],
    strategy:
      'Controlar a los sirvientes con CC (trampa de hielo, trampa de inmovilización, quiebra de sello). Matar primero a los sirvientes que curen o roben maná. Dos tanques: uno para Moroes y otro para los adds descontrolados. Curar con prioridad a los jugadores con Garrote.',
    phases: [
      {
        name: 'Fase inicial — Adds vivos',
        description:
          'Antes de iniciar el combate, asignar CC a cada add: Trampa de Hielo para uno, Quiebra de Sello para otro, Polimorfia para un tercero, y el cuarto queda al segundo tanque. El orden de kill es: primero cualquier add con Gran Curación o Quemar Maná (curanderos), luego los demás. Moroes puede ser ignorado completamente mientras los adds estén vivos — su daño individual es menor. Renovar los CC cada vez que expiren. Los jugadores marcados con Garrote reciben curación prioritaria en todo momento independientemente de lo que esté pasando.',
      },
      {
        name: 'Moroes solo',
        description:
          'Con todos los adds muertos, Moroes es el único objetivo. El Garrote sigue siendo activo en todos los jugadores marcados durante el resto del combate — la curación de esos jugadores no puede descuidarse. Moroes usará Golpe Bajo para aturdir al tanque principal de forma periódica: el segundo tanque asume el agro inmediatamente al ver el aturdimiento. Usar pociones de velocidad y cooldowns ofensivos para terminar cuanto antes — cuantas más acumulaciones de Garrote haya activas, más difícil es para los curanderos sostener a todos.',
      },
    ],
  },
  {
    id: 'maiden',
    name: 'Doncella de la Virtud',
    description:
      'Combate relativamente sencillo que requiere que los curanderos no queden cerca del tanque para evitar la mecánica de Penitencia.',
    difficulty: 2,
    tankCount: 1,
    healerCount: 2,
    abilities: [
      {
        id: 'holy-wrath',
        name: 'Ira Sagrada',
        icon: 'spell_holy_holysmite',
        description:
          'Descarga de energía sagrada que daña en cadena a todos los jugadores cercanos entre sí.',
        type: 'damage',
        tip: 'Mantener cierta separación entre jugadores para cortar la cadena. No apiñarse demasiado.',
      },
      {
        id: 'holy-fire',
        name: 'Fuego Sagrado',
        icon: 'spell_holy_searinglight',
        description: 'Aplica un poderoso DoT de fuego sagrado a un objetivo aleatorio.',
        type: 'debuff',
        tip: 'Disipar inmediatamente. El daño por segundo es muy alto y puede matar rápidamente si no se elimina.',
        warning: 'Disipar de inmediato: este DoT mata rápido si no se atiende.',
      },
      {
        id: 'holy-ground',
        name: 'Suelo Sagrado',
        icon: 'spell_holy_holynova',
        description: 'Zona sagrada alrededor de la Doncella que rompe el efecto de Penitencia.',
        type: 'mechanics',
        tip: 'Cuando seas objetivo de Penitencia, corre HACIA la Doncella para entrar en el Suelo Sagrado y romper el aturdimiento.',
      },
      {
        id: 'repentance',
        name: 'Penitencia',
        icon: 'spell_holy_prayerofhealing02',
        description:
          'Aturde a los jugadores cercanos. Puede incapacitar a toda la raid si no se maneja correctamente.',
        type: 'mechanics',
        tip: 'Moverse hacia el Suelo Sagrado (área alrededor de la Doncella) para romper el aturdimiento de inmediato.',
        warning: 'Los curanderos NO deben estar cerca del tanque o Penitencia los aturdirá a todos a la vez.',
      },
    ],
    strategy:
      'Tanquear a la Doncella en el centro. Los curanderos deben mantenerse a distancia pero NO cerca del tanque. Cuando Penitencia sea lanzada, correr hacia la Doncella para entrar al Suelo Sagrado. Disipar Fuego Sagrado de inmediato.',
  },
  {
    id: 'opera-wolf',
    name: 'Ópera: El Gran Lobo Malo',
    description:
      'Una de las tres posibles versiones del Evento de Ópera. El Gran Lobo Malo persigue a los jugadores transformándolos en Caperucita Roja.',
    difficulty: 2,
    tankCount: 1,
    healerCount: 2,
    group: 'Evento de la Ópera',
    abilities: [
      {
        id: 'little-red',
        name: 'Caperucita Roja',
        icon: 'ability_rogue_sprint',
        description:
          'Transforma a un jugador aleatorio en Caperucita Roja, haciéndolo objetivo primario del lobo.',
        type: 'mechanics',
        tip: 'El jugador transformado DEBE correr por los bordes del escenario en círculo. Nunca cruzar el centro ni detenerse.',
        warning: 'Si el lobo alcanza a Caperucita es muerte instantánea. Correr siempre por el perímetro.',
      },
      {
        id: 'terrifying-howl',
        name: 'Aullido Aterrador',
        icon: 'ability_druid_demoralizingroar',
        description: 'Atemoriza a todos los jugadores cercanos durante varios segundos.',
        type: 'mechanics',
        tip: 'Usar habilidades de anti-miedo si están disponibles. Los Totem de Temblor de Chamanes ayudan enormemente.',
      },
      {
        id: 'wide-swipe',
        name: 'Gran Zarpazo',
        icon: 'ability_warrior_cleave',
        description: 'Ataque de área frontal que golpea a múltiples jugadores frente al lobo.',
        type: 'tank',
        tip: 'Solo el tanque debe estar frente al lobo. El resto de la raid debe atacar desde los flancos o por detrás.',
      },
    ],
    strategy:
      'Un tanque mantiene al lobo en el centro. Cuando alguien sea transformado en Caperucita Roja, debe correr por el perímetro del escenario sin parar hasta que la transformación termine. Usar Totem de Temblor para mitigar el miedo.',
  },
  {
    id: 'opera-oz',
    name: 'Ópera: El Mago de Oz',
    description:
      'Versión Oz del evento. Cuatro personajes temáticos (Dorothee, Tito, Roar, Strawman, Tinhead) deben ser derrotados.',
    difficulty: 2,
    tankCount: 2,
    healerCount: 2,
    group: 'Evento de la Ópera',
    abilities: [
      {
        id: 'cyclone',
        name: 'Ciclón',
        icon: 'spell_nature_cyclone',
        description: 'Dorothee lanza un ciclón que puede mover y dañar a jugadores.',
        type: 'mechanics',
        tip: 'Evitar pararse en la trayectoria del ciclón. Matar a Dorothee rápidamente para eliminar esta mecánica.',
      },
      {
        id: 'chain-lightning',
        name: 'Relámpago en Cadena',
        icon: 'spell_nature_chainlightning',
        description: 'Tito lanza relámpagos en cadena que saltan entre jugadores cercanos.',
        type: 'damage',
        tip: 'Separarse para evitar que el relámpago salte a múltiples jugadores. Mantener al menos 8 metros de distancia.',
      },
      {
        id: 'rust',
        name: 'Óxido',
        icon: 'inv_misc_gear_04',
        description: 'Tinhead acumula Óxido reduciendo su velocidad de ataque progresivamente.',
        type: 'mechanics',
        tip: 'Matar a Tinhead lo más rápido posible antes de que demasiadas acumulaciones de Óxido compliquen el tanqueo.',
      },
    ],
    strategy:
      'Orden de eliminación recomendado: Dorothee > Tito > Strawman > Tinhead > Roar. Usar CC en los que no sean el objetivo primario. Mantener distancia para evitar el relámpago en cadena.',
  },
  {
    id: 'opera-romeo',
    name: 'Ópera: Romulo y Julieta',
    description:
      'Versión romántica del evento. Dos jefes que se resucitan mutuamente si no mueren casi simultáneamente.',
    difficulty: 3,
    tankCount: 2,
    healerCount: 2,
    group: 'Evento de la Ópera',
    abilities: [
      {
        id: 'eternal-affection',
        name: 'Afecto Eterno',
        icon: 'spell_holy_spiritualguardiance',
        description: 'Julieta lanza una poderosa curación sobre sí misma si no es interrumpida.',
        type: 'interrupt',
        tip: 'Interrumpir inmediatamente. Asignar un jugador específico solo para interrumpir a Julieta.',
        warning: 'Si no se interrumpe, Julieta puede curarse completamente.',
      },
      {
        id: 'devotion',
        name: 'Devoción',
        icon: 'spell_holy_divineprotection',
        description: 'Buff que aumenta la armadura de Romulo o Julieta significativamente.',
        type: 'debuff',
        tip: 'Disipar con magia cuando sea posible para reducir el tiempo necesario para matar al objetivo.',
      },
      {
        id: 'undying-love',
        name: 'Amor Inmortal',
        icon: 'spell_shadow_raisedead',
        description:
          'Si cualquiera de los dos muere, el otro los resucitará si no muere en 10 segundos.',
        type: 'mechanics',
        tip: 'CLAVE: Matar a ambos casi simultáneamente (dentro de 10 segundos). Reducir a ambos al 10–15% de vida antes de ejecutar.',
        warning:
          'Si hay demasiado tiempo entre las muertes, el superviviente resucitará al otro con vida completa.',
      },
    ],
    strategy:
      'Dos tanques, uno para cada personaje. Reducir la vida de ambos al mismo tiempo. Cuando lleguen al 10–15%, ejecutar a ambos en rápida sucesión. El grupo que mata a Romulo debe avisar para que el grupo de Julieta ejecute también.',
  },
  {
    id: 'curator',
    name: 'El Curador',
    description:
      'Guardián de los archivos de Karazhan. Combate de manejo de adds con una fase de Evocación que requiere máximo DPS.',
    difficulty: 3,
    tankCount: 1,
    healerCount: 2,
    abilities: [
      {
        id: 'hateful-bolt',
        name: 'Rayo Odioso',
        icon: 'spell_arcane_arcanebolt',
        description: 'Rayo arcano dirigido al segundo jugador en la tabla de amenaza. Daño masivo.',
        type: 'tank',
        tip: 'Necesitas un "tanque de Rayo Odioso": un guerrero con escudo o paladín segundo en agro. Este jugador recibe los rayos y requiere curación constante.',
        warning: 'El segundo en agro recibirá estos rayos. Debe ser alguien con alta armadura y vida.',
      },
      {
        id: 'flares',
        name: 'Destello Astral',
        icon: 'spell_arcane_starfire',
        description:
          'Invoca Destellos Astrales periódicamente. Cada Destello muerto carga la habilidad del Curador.',
        type: 'adds',
        tip: 'Matar todos los Destellos inmediatamente. Cada Destello no muerto reduce el maná del Curador retrasando la Evocación. Asignar DPS de área para limpiarlos rápido.',
        warning: 'No dejes acumular Destellos. Si se acumulan, la raid se sobrecarga de daño.',
      },
      {
        id: 'evocation',
        name: 'Evocación',
        icon: 'spell_nature_moonglow',
        description:
          'Al llegar al 0% de maná, inicia Evocación. Recibe el triple de daño pero no ataca.',
        type: 'mechanics',
        tip: 'FASE CRÍTICA: Todo el DPS en el Curador. Los Destellos siguen apareciendo, ignorarlos temporalmente. Usar todas las cooldowns ofensivas.',
        warning: 'Si el Curador completa la Evocación, recupera maná y el ciclo vuelve a empezar.',
      },
    ],
    strategy:
      'Tanquear al Curador en el centro. Asignar DPS de distancia para matar Destellos inmediatamente. Un jugador secundario absorbe los Rayos Odiosos. Cuando comience la Evocación, usar todas las cooldowns disponibles.',
  },
  {
    id: 'chess',
    name: 'Evento del Ajedrez',
    description:
      'Evento único donde controlas piezas de ajedrez. Medivh hace trampa usando Llama de Medivh en los escaques. Relativamente sencillo.',
    difficulty: 1,
    tankCount: 1,
    healerCount: 1,
    abilities: [
      {
        id: 'medivh-fire',
        name: 'Llama de Medivh',
        icon: 'spell_fire_flamestrike',
        description: 'Medivh hace trampa lanzando llamas a los escaques del tablero donde están tus piezas.',
        type: 'mechanics',
        tip: 'Mover tus piezas fuera del fuego inmediatamente. Cada pieza puede moverse una vez por turno. Priorizar mover al Rey si está en peligro.',
      },
    ],
    strategy:
      'Controla las piezas moviéndolas hacia las piezas enemigas. Cuida que el fuego de Medivh no destruya tu Rey. Usar curanderos para mantener vivas las piezas importantes.',
  },
  {
    id: 'illhoof',
    name: 'Terestian Illhoof',
    description:
      'Demonio que sacrifica a jugadores en rituales. Requiere DPS de área para limpiar demonios pequeños mientras se libera al jugador sacrificado.',
    difficulty: 3,
    tankCount: 1,
    healerCount: 2,
    abilities: [
      {
        id: 'sacrifice',
        name: 'Sacrificio',
        icon: 'spell_shadow_shadowwordpain',
        description:
          'Encadena a un jugador aleatorio con Cadenas Demoníacas. El jugador encadenado recibe daño masivo hasta que las cadenas sean destruidas.',
        type: 'mechanics',
        tip: 'TODO el DPS debe cambiar inmediatamente a las Cadenas Demoníacas para liberar al jugador. El jugador encadenado morirá en segundos si no es liberado y curado simultáneamente.',
        warning: 'Máxima prioridad: destruir las cadenas de inmediato. Si el sacrificado es un curandero, situación crítica.',
      },
      {
        id: 'kilrek',
        name: 'Pacto Roto (Kil\'rek)',
        icon: 'spell_shadow_curseofmannoroth',
        description:
          "Si el compañero demonio Kil'rek muere, Illhoof pierde el buff Pacto Demoníaco pero se vuelve temporalmente más peligroso.",
        type: 'mechanics',
        tip: "Ignorar a Kil'rek inicialmente y enfocarse en las cadenas y los imps. Matarlo solo cuando sea conveniente.",
      },
      {
        id: 'imps',
        name: 'Enjambre de Imps',
        icon: 'spell_shadow_summoninfernal',
        description: 'Portales demoníacos generan constantemente Imps que atacan a la raid.',
        type: 'adds',
        tip: 'Usar habilidades de AoE (Tormenta de Fuego, Nova de Escarcha, Remolino) para limpiar los imps. Priorizar cadenas primero, luego imps.',
      },
      {
        id: 'demon-portal',
        name: 'Portal Demoníaco',
        icon: 'spell_shadow_demonictactics',
        description: 'Portales que aparecen en el escenario y generan los imps continuamente.',
        type: 'adds',
        tip: 'Los portales no pueden ser destruidos. Posicionar a los DPS de AoE para cubrir el mayor número de imps posible.',
      },
    ],
    strategy:
      'Prioridad principal: cuando un jugador sea sacrificado, TODOS cambian a las Cadenas. Entre sacrificios, limpiar imps con AoE. Los curanderos deben curar al tanque Y al jugador sacrificado de manera simultánea.',
  },
  {
    id: 'aran',
    name: 'Sombra de Aran',
    description:
      'Uno de los jefes más complejos de Karazhan. No tiene tanque principal — ataca al objetivo más cercano. Múltiples hechizos peligrosos y la mecánica de Corona de Llamas.',
    difficulty: 4,
    tankCount: 0,
    healerCount: 3,
    abilities: [
      {
        id: 'counterspell',
        name: 'Contrahechizo',
        icon: 'spell_frost_iceshock',
        description:
          'Contrarresta la escuela de magia activa del lanzador cercano. Los magos deben estar a más de 10 metros.',
        type: 'mechanics',
        tip: 'NUNCA lanzar hechizos desde menos de 10 metros. El Contrahechizo silencia la escuela de magia del lanzador durante mucho tiempo.',
        warning: 'Los lanzadores de hechizos deben permanecer siempre a más de 10 yardas de distancia.',
      },
      {
        id: 'fireball',
        name: 'Bola de Fuego',
        icon: 'spell_fire_fireball02',
        description: 'Hechizo de fuego de alto daño con tiempo de lanzamiento. Interrumpible.',
        type: 'interrupt',
        tip: 'Interrumpir con Ráfaga de Viento, Golpe de Escudo, Patada, etc. Asignar rotación de interrupciones entre jugadores.',
      },
      {
        id: 'frostbolt',
        name: 'Rayo de Escarcha',
        icon: 'spell_frost_frostbolt02',
        description: 'Hechizo de escarcha que ralentiza al objetivo. Interrumpible.',
        type: 'interrupt',
        tip: 'Alternar interrupciones entre Bola de Fuego y Rayo de Escarcha. Si uno no puede ser interrumpido, asegurarse del otro.',
      },
      {
        id: 'arcane-missiles',
        name: 'Misiles Arcanos',
        icon: 'spell_arcane_magicdart',
        description: 'Canalizado. No puede ser interrumpido. Causa daño arcano moderado.',
        type: 'damage',
        tip: 'No se puede interrumpir. Curar a los objetivos durante el canal. Guardar las interrupciones para Bola de Fuego.',
      },
      {
        id: 'flame-wreath',
        name: 'Corona de Llamas',
        icon: 'spell_fire_flamestrike',
        description:
          'Rodea a 3 jugadores aleatorios con coronas de fuego. Si cualquier jugador se mueve, explota causando daño masivo a toda la raid.',
        type: 'mechanics',
        tip: '¡NADIE SE MUEVE cuando se lanza Corona de Llamas! Absolutamente todos deben detenerse hasta que las coronas desaparezcan.',
        warning: 'REGLA ABSOLUTA: ¡NO TE MUEVAS bajo ningún concepto! Una sola persona moviéndose puede matar a toda la raid.',
      },
      {
        id: 'blizzard',
        name: 'Ventisca Circular',
        icon: 'spell_frost_icestorm',
        description: 'Ventisca que gira por toda la habitación. Los jugadores en su trayectoria reciben daño y ralentización.',
        type: 'mechanics',
        tip: 'Moverse con la Ventisca o en dirección contraria para evitarla. Nunca quedarse estático en su trayectoria.',
      },
      {
        id: 'magnetic-pull',
        name: 'Atracción Magnética',
        icon: 'spell_nature_earthbindtotem',
        description:
          'Arrastra a toda la raid al centro de la habitación, seguido de una Explosión Arcana.',
        type: 'mechanics',
        tip: 'Después de ser atraído al centro, moverse INMEDIATAMENTE hacia el borde de la habitación antes de la Explosión Arcana.',
        warning: 'Tienes pocos segundos para alejarte del centro después de la atracción.',
      },
      {
        id: 'polymorph',
        name: 'Polimorfia',
        icon: 'spell_magic_polymorphchicken',
        description: 'Al 20% de vida de Aran, transforma a todos en ovejas durante unos segundos.',
        type: 'mechanics',
        tip: 'Esperado al 20%. Cuando todos son transformados, prepárate para reanudar el combate inmediatamente al terminar.',
      },
    ],
    strategy:
      'NO HAY TANQUE PRINCIPAL — Aran ataca al jugador más cercano. La raid debe mantenerse dispersa. REGLA PRINCIPAL: Nadie se mueve durante Corona de Llamas. Interrumpir Bola de Fuego y Rayo de Escarcha en rotación. Escapar rápido después de Atracción Magnética.',
  },
  {
    id: 'netherspite',
    name: 'Netherspite',
    description:
      'Dragón del vacío con mecánica de rayos de color. Las fases de Portal y Destierro se alternan. Requiere rotación coordinada para absorber los rayos.',
    difficulty: 3,
    tankCount: 2,
    healerCount: 3,
    abilities: [
      {
        id: 'nether-burn',
        name: 'Quemadura Etérea',
        icon: 'spell_shadow_shadowbolt',
        description: 'Daño de sombras a toda la raid durante la fase activa.',
        type: 'damage',
        tip: 'Los curanderos deben mantener reparación constante a toda la raid. Curación de área es esencial.',
      },
      {
        id: 'void-zone',
        name: 'Zona de Vacío',
        icon: 'spell_shadow_shadowwordpain',
        description: 'Crea zonas oscuras en el suelo que causan daño masivo a quien las pise.',
        type: 'mechanics',
        tip: 'Alejarse inmediatamente de cualquier zona oscura en el suelo.',
        warning: 'Las Zonas de Vacío causan daño fatal muy rápidamente. Nunca pararse sobre ellas.',
      },
      {
        id: 'netherbreath',
        name: 'Aliento Etéreo',
        icon: 'ability_dragonaspect',
        description: 'Aliento de dragón que apunta hacia jugadores aleatorios.',
        type: 'damage',
        tip: 'Los tanques deben mantener a Netherspite bien orientado. Posicionarse de manera que el aliento no alcance a múltiples jugadores.',
      },
      {
        id: 'beams',
        name: 'Rayos de Poder',
        icon: 'spell_arcane_prismaticcloak',
        description:
          'Tres rayos de colores (Rojo, Verde, Azul) emanan desde portales y empoderan a Netherspite si no son absorbidos.',
        type: 'mechanics',
        tip: 'Rayo ROJO: El tanque lo absorbe (aumenta agro). Rayo VERDE: Un curandero lo absorbe (aumenta curación). Rayo AZUL: Un DPS mágico lo absorbe (potencia hechizos). Rotar jugadores para evitar exceso de acumulaciones.',
        warning: 'Los rayos que no son absorbidos empoderan a Netherspite. Siempre mantener alguien en cada rayo.',
      },
    ],
    strategy:
      'Fase Portal: Rotar jugadores en los tres rayos (Rojo para tanques, Verde para curanderos, Azul para DPS mágico). Cuando un jugador tenga demasiadas acumulaciones, otro toma su lugar. Fase Destierro: DPS máximo mientras Netherspite está inmóvil.',
    phases: [
      {
        name: 'Fase Portal (~60 segundos)',
        description:
          'Tres rayos de colores emergen de portales en las paredes: ROJO (noreste) absorbido por el tanque principal — aumenta armadura y generación de agro, pero cada acumulación también daña al portador. Rotar a un segundo tanque o guerrero DPS cuando haya 5-6 acumulaciones. VERDE (norte) absorbido por un curandero — multiplica su poder de curación enormemente. AZUL (sur) absorbido por un DPS mágico — potencia sus hechizos. Si un rayo llega a Netherspite sin ser absorbido, le aumenta el daño permanentemente. Los portadores deben alejarse del rayo ANTES de tener demasiadas acumulaciones para que otro tome el relevo sin cortes.',
      },
      {
        name: 'Fase Destierro (~30 segundos)',
        description:
          'Los rayos desaparecen y Netherspite queda inmóvil en el centro. MÁXIMO DPS durante exactamente 30 segundos: todos los cooldowns ofensivos, pociones y trinkets. Netherspite no ataca en esta fase pero el daño del Aura Etérea sigue activo en toda la raid — los curanderos aprovechan para curar el daño acumulado. Al finalizar los 30 segundos, Netherspite regresa automáticamente a la Fase Portal. El ciclo se repite hasta la muerte.',
      },
    ],
  },
  {
    id: 'malchezaar',
    name: 'Príncipe Malchezaar',
    description:
      'Jefe penúltimo de Karazhan. Tres fases con mecánicas diferentes. Las Hachas Voladoras en la Fase 3 hacen el movimiento crítico.',
    difficulty: 4,
    tankCount: 1,
    healerCount: 3,
    abilities: [
      {
        id: 'shadow-nova',
        name: 'Nova de Sombras',
        icon: 'spell_shadow_shadowbolt',
        description: 'Explosión de sombras que repele a todos los jugadores cercanos alejándolos del jefe.',
        type: 'tank',
        tip: 'El tanque debe posicionarse contra una pared o el borde de la plataforma para no ser empujado fuera del alcance. La nova puede provocar pérdida de agro.',
      },
      {
        id: 'enfeeble',
        name: 'Debilitar',
        icon: 'spell_shadow_plaguecloud',
        description:
          'Reduce la vida máxima de 5 jugadores aleatorios a 1 punto. Si estos jugadores son golpeados, mueren instantáneamente.',
        type: 'mechanics',
        tip: 'Los jugadores con Debilitar deben ALEJARSE del jefe inmediatamente y no recibir ningún golpe hasta que el efecto expire.',
        warning: 'Los jugadores con Debilitar que reciban cualquier golpe mueren instantáneamente.',
      },
      {
        id: 'shadow-word-pain',
        name: 'Palabra de Sombra: Dolor',
        icon: 'spell_shadow_shadowwordpain',
        description: 'DoT de sombras aplicado a un jugador aleatorio.',
        type: 'debuff',
        tip: 'Disipar si es posible. Los curanderos deben mantener el DoT bajo control mientras priorizan al tanque.',
      },
      {
        id: 'thrash',
        name: 'Golpear',
        icon: 'ability_ghoulfrenzy',
        description: 'Fase 2: Malchezaar obtiene múltiples ataques adicionales por segundo.',
        type: 'tank',
        tip: 'En Fase 2, los curanderos deben curar al tanque casi constantemente. Es la fase más difícil para los curanderos.',
        warning: 'FASE 2 (60–30%): El daño al tanque aumenta dramáticamente. Preparar cooldowns de curación.',
      },
      {
        id: 'amplify-damage',
        name: 'Amplificar Daño',
        icon: 'spell_shadow_painspike',
        description:
          'Fase 3: Amplifica el daño recibido por el objetivo actual en un 75%.',
        type: 'tank',
        tip: 'En Fase 3, curar al tanque es la prioridad absoluta. Todos los curanderos centrados en el tanque.',
        warning: 'FASE 3 (30–0%): Con Hachas Voladoras y Amplificar Daño, el tanque puede morir en segundos.',
      },
      {
        id: 'flying-axes',
        name: 'Hachas Voladoras',
        icon: 'inv_axe_02',
        description: 'Fase 3: Invoca hachas que orbitan y persiguen a jugadores aleatorios.',
        type: 'damage',
        tip: 'Las hachas deben ser kiteadas corriendo constantemente. Los curanderos y DPS de distancia deben moverse continuamente para escapar de ellas.',
        warning: 'En Fase 3: Moverse constantemente para escapar de las Hachas Voladoras.',
      },
    ],
    strategy:
      'Fase 1: Combate estándar, cuidado con Debilitar. Fase 2 (60%): Curación masiva al tanque. Fase 3 (30%): Toda la raid en movimiento constante, curanderos en el tanque, kiting de hachas. Posicionar al jefe contra la pared.',
    phases: [
      {
        name: 'Fase 1 (100–60%)',
        description:
          'Un solo tanque contra la pared norte o sur para que Nova de Sombras no lo expulse al vacío. Debilitar aparece en 5 jugadores aleatorios — esos jugadores deben PARAR de atacar, alejarse del jefe y esperar los 8 segundos hasta que el debuff expire. Los curanderos no curan a los debilitados (hacerlo sería malgastar recursos — están a 1 punto de vida pero intocables). Disipar Palabra de Sombra: Dolor cuando sea posible. Sin cambios bruscos hasta el 60%.',
      },
      {
        name: 'Fase 2 (60–30%)',
        description:
          'Al 60% Malchezaar obtiene Golpear, triplicando su velocidad de ataque. El daño al tanque aumenta brutalmente. TODOS los curanderos pasan inmediatamente al tanque — ningún curandero puede descuidar al tanque ni un segundo en esta fase. Los DPS continúan atacando pero los curanderos son lo único que importa. Debilitar sigue apareciendo — los afectados siguen alejándose. Esta fase es el cuello de botella de curación del encuentro.',
      },
      {
        name: 'Fase 3 (30–0%)',
        description:
          'Al 30% aparecen las Hachas Voladoras: dos hachas que orbitan y persiguen a jugadores aleatorios indefinidamente. No pueden destruirse ni pararse. Al mismo tiempo, Amplificar Daño aumenta el daño recibido por el tanque en un 75%. TODA LA RAID en movimiento constante — curanderos curan mientras corren, DPS ataca mientras corren. El tanque soporta Golpear + Amplificar + Hachas simultáneamente. Usar cooldowns defensivos del tanque (Escudo de Hielo, Mano de Sacrificio, etc.). Terminar cuanto antes con DPS máximo.',
      },
    ],
  },
  {
    id: 'nightbane',
    name: 'Nightbane',
    description:
      'Jefe opcional invocado con la urna de Medivh. Dragón no-muerto con fases terrestres y aéreas. Considerado uno de los jefes más difíciles de Karazhan.',
    difficulty: 5,
    tankCount: 1,
    healerCount: 3,
    abilities: [
      {
        id: 'smoldering-breath',
        name: 'Aliento Ardiente',
        icon: 'spell_fire_fireball',
        description: 'Cono frontal de fuego que causa daño masivo e inflige un DoT de fuego.',
        type: 'tank',
        tip: 'Tanquear a Nightbane de espaldas a la raid. NUNCA pararse frente al dragón. Los curanderos y DPS deben atacar por los flancos.',
        warning: 'El Aliento frontal puede liquidar a cualquier jugador que no sea el tanque en segundos.',
      },
      {
        id: 'tail-sweep',
        name: 'Barrido de Cola',
        icon: 'ability_druid_claw',
        description: 'Barrido trasero que golpea y tira por los aires a jugadores detrás del dragón.',
        type: 'mechanics',
        tip: 'Los cuerpo a cuerpo deben posicionarse en los flancos del dragón (a los lados), nunca directamente detrás. Evita el Barrido sin perder DPS.',
      },
      {
        id: 'bellowing-roar',
        name: 'Rugido Resonante',
        icon: 'ability_dragonaspect',
        description: 'Ruge aterrorizando a toda la raid durante varios segundos.',
        type: 'mechanics',
        tip: 'Usar Totem de Temblor (Chamán) para romper el miedo. Los Paladines tienen Devoción Áurea. Sin estas herramientas, el miedo puede ser mortal durante una fase aérea.',
      },
      {
        id: 'charred-earth',
        name: 'Tierra Chamuscada',
        icon: 'spell_fire_flamestrike',
        description: 'Crea zonas de fuego en el suelo que causan daño continuado.',
        type: 'mechanics',
        tip: 'Alejarse inmediatamente de las zonas de fuego. Con el tiempo la habitación puede llenarse, restringiendo el movimiento.',
      },
      {
        id: 'distracting-ash',
        name: 'Ceniza Distractora',
        icon: 'spell_shadow_curseofachimonde',
        description: 'Aplica una maldición que reduce en un 50% la probabilidad de golpe.',
        type: 'debuff',
        tip: 'Disipar inmediatamente del tanque. Si el tanque tiene esta maldición Nightbane puede perder el agro y atacar a la raid.',
        warning: 'Si no se disipa del tanque puede causar pérdida de agro catastrófica.',
      },
      {
        id: 'rain-of-bones',
        name: 'Lluvia de Huesos',
        icon: 'spell_shadow_raisedead',
        description: 'Durante la fase aérea, invoca esqueletos que atacan a la raid.',
        type: 'adds',
        tip: 'DPS de área para limpiar esqueletos durante la fase aérea. Los curanderos deben curar al tanque de esqueletos y a la raid simultáneamente.',
      },
      {
        id: 'smoking-blast',
        name: 'Explosión Humeante',
        icon: 'spell_fire_selfdestruct',
        description:
          'Durante la fase aérea, ataca al objetivo con mayor amenaza infligiendo daño y un DoT.',
        type: 'tank',
        tip: 'El tanque principal recibe la mayoría de estos durante la fase aérea. Curación constante requerida. Los curanderos NO deben generar amenaza excesiva.',
      },
    ],
    strategy:
      'Fase Terrestre: Tanquear con la cola apuntando al vacío, cuerpo a cuerpo en los flancos. Disipar Ceniza Distractora. Fase Aérea: Tank de esqueletos, DPS de área, curar al tanque aéreo. La transición aéreo-terrestre requiere reposicionamiento rápido.',
    phases: [
      {
        name: 'Fase Terrestre',
        description:
          'Tanquear a Nightbane frente a una pared lateral, con la cola apuntando a una zona despejada. Los DPS cuerpo a cuerpo se posicionan en los flancos del dragón — nunca directamente detrás (Barrido de Cola) ni delante (Aliento Ardiente). Los curanderos y DPS de distancia en el extremo trasero de la sala. Disipar Ceniza Distractora del tanque en cuanto aparezca para evitar pérdida de agro. Los curanderos curan el DoT del Aliento constantemente. Al 75%, 50% y 25% de vida, Nightbane vuela automáticamente — preparar al tanque secundario para los esqueletos.',
      },
      {
        name: 'Fase Aérea (~45 segundos, al 75/50/25%)',
        description:
          'Nightbane vuela a un extremo de la sala. (1) Un tanque secundario gestiona los Esqueletos Guardia que emergen de portales — mantenerlos agrupados. (2) TODO el DPS de área limpia los esqueletos — son la prioridad. (3) Nightbane lanza Explosión Humeante al jugador con mayor amenaza en tierra — ese jugador necesita curación urgente. (4) Nightbane regresa a tierra al acabar la fase aérea — el tanque principal debe cogerlo INMEDIATAMENTE antes de que ataque a alguien sin armadura. Los DPS de distancia que generen demasiado agro son un riesgo durante la transición.',
      },
    ],
  },
];
