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
        description: 'Canal de 5 segundos que mata a cualquier jugador sin cooldowns defensivos activos si completa el canal.',
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
    phases: [
      {
        name: 'Fase 1 (100–30%) — Canalizadores activos',
        description:
          'Los cinco Canalizadores en sus pilares sostienen la prisión de Magtheridon. Asignar cinco jugadores a los cinco Cubos de Dominio (uno por pilar). El DPS elimina Canalizadores uno a uno cuando tiene ventana — cada Canalizador muerto debilita a Magtheridon permanentemente. Cuando Magtheridon empieza a canalizar Nova Explosiva (indicado por animación y texto de combate), el Raid Leader da la señal y LOS CINCO jugadores clican su Cubo simultáneamente dentro de 1 segundo entre sí. Si la sincronización falla y Nova completa el canal, puede limpiar a la raid. El tanque principal mantiene a Magtheridon orientado lejos de la raid en todo momento.',
      },
      {
        name: 'Fase 2 (30–0%) — Prisión rota',
        description:
          'Al llegar al 30%, Magtheridon rompe físicamente las cadenas de su prisión y partes del techo se derrumban sobre la sala. El espacio habitable se reduce con cada derrumbe. El daño de Magtheridon aumenta significativamente. Nova Explosiva ocurre más frecuentemente — el equipo de cubo debe reaccionar más rápido y con mejor coordinación. Los derrumbes del techo dañan a quien estén debajo cuando caen — reposicionar a la raid en zonas limpias. Esta fase es un sprint: matar antes del Frenesí a los 20 minutos totales de combate.',
      },
    ],
  },
];
