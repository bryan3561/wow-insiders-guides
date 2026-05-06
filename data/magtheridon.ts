import type { Boss } from './types';

export const magtheridonBosses: Boss[] = [
  {
    id: 'magtheridon',
    name: 'Magtheridon',
    description:
      'Señor del caos aprisionado bajo Terrallende. Requiere que cinco jugadores cliquen cubos en sincronía para interrumpir sus hechizos.',
    difficulty: 3,
    tankCount: 1,
    healerCount: 7,
    abilities: [
      {
        id: 'shadow-cage',
        name: 'Jaula de Sombras (Canalizadores)',
        icon: 'spell_shadow_shadowfury',
        description: 'Los cinco Canalizadores deben ser silenciados cada 120s para que Magtheridon no quede invulnerable.',
        type: 'mechanics',
        tip: 'Cinco jugadores designados clican simultáneamente los cubos de Cubo de Dominio en los pilares. La sincronización es crítica: dentro de 1 segundo entre sí. Un raid leader debe dar la señal.',
        warning: 'Si los cubos no se clican a tiempo, Magtheridon se vuelve invulnerable y lanza Explosión de Fuego Infernal que puede limpiar la raid.',
      },
      {
        id: 'blast-nova',
        name: 'Nova Explosiva',
        icon: 'spell_fire_fireball02',
        description: 'Canal de 10 segundos que mata a cualquier jugador sin cooldowns defensivos activos si completa el canal.',
        type: 'interrupt',
        tip: 'INTERRUMPIR SIEMPRE. Tan pronto empiece el canal, los 5 jugadores de cubo deben clicarlo. Es la señal más urgente del encuentro.',
        warning: 'Si Nova Explosiva completa el canal, limpia a toda la raid.',
      },
      {
        id: 'cleave',
        name: 'Golpe en Arco',
        icon: 'ability_warrior_cleave',
        description: 'Ataque frontal que afecta a múltiples jugadores en el arco frontal.',
        type: 'tank',
        tip: 'Solo el tanque principal frente al jefe. Toda la raid detrás o a los lados.',
      },
      {
        id: 'quake',
        name: 'Terremoto',
        icon: 'spell_nature_earthquake',
        description: 'Derrumba fragmentos del techo dañando a jugadores en esas posiciones.',
        type: 'damage',
        tip: 'Moverse fuera de los derrumbes marcados en el suelo. Con el tiempo la sala se llena de escombros que reducen el espacio.',
      },
      {
        id: 'berserk',
        name: 'Frenesí',
        icon: 'ability_warrior_battleshout',
        description: 'A los 20 minutos entra en Frenesí, aumentando daño y velocidad de ataque dramáticamente.',
        type: 'mechanics',
        tip: 'El DPS debe ser suficiente para matar a Magtheridon antes de los 20 minutos. Si el grupo tiene equipo de T4, no debería ser problema.',
      },
    ],
    strategy:
      'Tanquear a Magtheridon en el centro. Cinco jugadores asignados a los cubos actúan como equipo de interrupción. Cuando empiece Nova Explosiva, clicar cubos inmediatamente. El resto de la raid maximiza DPS manteniéndose fuera del área de Golpe en Arco.',
    spellRefs: {
      'Canalizadores de Fuego Infernal': {
        id: 17256,
        type: 'npc',
        name: 'Hellfire Channeler',
        icon: 'spell_shadow_summoninfernal',
        school: 'NPC Demonio',
        description:
          'Cinco demonios situados en los pilares de la sala. Canalizan la Jaula de Sombras que mantiene aprisionado a Magtheridon. Cada Canalizador muerto debilita a Magtheridon permanentemente. Lanzan Ráfaga de Saetas de Sombra e invocan Señores del Fuego Infernal.',
      },
      'Jaula de Sombras': {
        id: 30168,
        type: 'spell',
        name: 'Shadow Cage',
        icon: 'spell_shadow_shadesofdarkness',
        school: 'Sombra',
        description:
          'Efecto de canal colectivo que los cinco Canalizadores mantienen sobre Magtheridon. Mientras está activo, Magtheridon permanece inmovilizado. Si todos los Canalizadores mueren, la Jaula se rompe y Magtheridon queda libre para actuar.',
      },
      'Ráfaga de Saetas de Sombra': {
        id: 39175,
        type: 'spell',
        name: 'Shadow Bolt Volley',
        icon: 'spell_shadow_shadowbolt',
        school: 'Sombra',
        description:
          'Descarga masiva de proyectiles de sombra que golpea a todos los enemigos en un radio de 45 metros del lanzador. Inflige alto daño de sombra a todos los jugadores en rango. Interrumpir con Patada, Golpe de Escudo, Ráfaga de Viento u otras habilidades de interrupción.',
      },
      'Señores del Fuego Infernal': {
        id: 18829,
        type: 'npc',
        name: 'Hellfire Warder',
        icon: 'ability_warlock_inferno',
        school: 'NPC Demonio',
        description:
          'Adds demoníacos que los Canalizadores de Fuego Infernal invocan durante el combate. Deben ser eliminados rápidamente antes de que completen sus propios hechizos. Ignoran el agro y atacan objetivos aleatorios de la raid.',
      },
      'Cubo de Dominio': {
        id: 181713,
        type: 'object',
        name: 'Manticron Cube',
        icon: 'inv_misc_rune_06',
        school: 'Mecánica',
        description:
          'Objeto interactivo situado en cada uno de los cinco pilares de la sala. Cuando cinco jugadores designados los activan simultáneamente (dentro de 1 segundo entre sí), interrumpen la Nova Explosiva de Magtheridon. Los Cubos tienen tiempo de reutilización prolongado — se necesitan dos equipos de cinco en rotación.',
      },
      'Nova Explosiva': {
        id: 30616,
        type: 'spell',
        name: 'Blast Nova',
        icon: 'spell_fire_flamering',
        school: 'Fuego',
        description:
          'Canal de 10 segundos durante el cual Magtheridon libera pulsos de fuego que dañan masivamente a toda la raid. Debe ser interrumpido activando los cinco Cubos de Dominio simultáneamente. Si completa el canal sin ser interrumpido, limpia a toda la raid.',
      },
      'Golpe en Arco': {
        id: 30619,
        type: 'spell',
        name: 'Cleave',
        icon: 'ability_warrior_cleave',
        school: 'Físico',
        description:
          'Ataque de cuerpo a cuerpo que golpea al objetivo principal y a todos los jugadores en el arco frontal del jefe. Solo el tanque debe estar frente a Magtheridon para evitar que este golpe afecte a otros miembros de la raid.',
      },
      'Terremoto': {
        id: 30657,
        type: 'spell',
        name: 'Quake',
        icon: 'spell_nature_earthquake',
        school: 'Físico',
        description:
          'Agita el suelo causando el derrumbe de fragmentos del techo sobre áreas aleatorias de la sala. Las zonas de impacto se marcan brevemente antes de caer. Con el tiempo, los escombros acumulados reducen el espacio habitable.',
      },
      'Frenesí': {
        id: 32964,
        type: 'spell',
        name: 'Berserk',
        icon: 'ability_warrior_battleshout',
        school: 'Físico',
        description:
          'A los 20 minutos de combate, Magtheridon entra automáticamente en Frenesí. Su daño y velocidad de ataque aumentan drásticamente, haciendo imposible sostener al tanque. El grupo debe matar a Magtheridon antes de que se active este timer.',
      },
    },
    phases: [
      {
        name: 'Fase 1 — Canalizadores activos (primeros ~2 minutos)',
        description: '',
        events: [
          'Los 5 [[Canalizadores de Fuego Infernal]] en los pilares canalizan la [[Jaula de Sombras]] que mantiene a Magtheridon aprisionado.',
          'Todo el DPS se centra en matar [[Canalizadores de Fuego Infernal]] uno por uno — empezar por el que tenga menos vida.',
          'Cada Canalizador muerto debilita permanentemente a Magtheridon, reduciendo su daño total.',
          'Los Canalizadores lanzan [[Ráfaga de Saetas de Sombra]] — interrumpir con cualquier habilidad disponible.',
          'Los Canalizadores pueden invocar [[Señores del Fuego Infernal]] — matarlos antes de que completen la invocación.',
          'Magtheridon puede recibir daño desde el inicio pero no es la prioridad mientras queden Canalizadores.',
          '5 jugadores designados se posicionan junto a su [[Cubo de Dominio]] respectivo (uno por pilar), listos para clicar.',
          'Cuando Magtheridon empiece a canalizar la [[Nova Explosiva]], el Raid Leader da la señal y los 5 clican simultáneamente.',
          'El tanque principal mantiene a Magtheridon orientado lejos de la raid en todo momento.',
        ],
      },
      {
        name: 'Fase 2 — Combate activo',
        description: '',
        events: [
          'Magtheridon ataca activamente al tanque con [[Golpe en Arco]] — solo el tanque debe estar frente a él.',
          '[[Nova Explosiva]] ocurre aproximadamente cada 60 segundos — los 5 [[Cubo de Dominio|cubos]] deben clicarse en sincronía para interrumpirla.',
          'Si [[Nova Explosiva]] completa el canal sin ser interrumpida, causa daño letal a toda la raid.',
          'El [[Cubo de Dominio]] tiene tiempo de reutilización — rotar a un segundo grupo de 5 jugadores para la siguiente Nova.',
          'El techo empieza a colapsar ([[Terremoto]]) en secciones aleatorias — moverse fuera de los círculos marcados antes del impacto.',
          'Los curanderos mantienen curación constante al tanque y atienden a quien sea golpeado por el techo.',
          'El DPS continúa en Magtheridon entre [[Nova Explosiva|Novas Explosivas]].',
        ],
      },
      {
        name: 'Fase 3 — Prisión rota (30%)',
        description: '',
        events: [
          'Al llegar al 30% de vida, Magtheridon rompe físicamente las cadenas de su prisión.',
          'Partes del techo se derrumban con mayor frecuencia e intensidad ([[Terremoto]]), reduciendo el espacio habitable.',
          'El daño de los ataques de Magtheridon aumenta significativamente.',
          '[[Nova Explosiva]] ocurre con mayor frecuencia — el equipo de cubo debe reaccionar más rápido.',
          'Si [[Nova Explosiva]] no puede ser interrumpida por falta de cubos, los jugadores deben usar cooldowns defensivos.',
          'Reposicionar a la raid constantemente hacia las zonas del suelo sin escombros.',
          'Usar todos los cooldowns ofensivos disponibles — matar antes del [[Frenesí]] a los 20 minutos de combate.',
        ],
      },
    ],
  },
];
