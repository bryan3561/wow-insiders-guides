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
      { name: 'Fase 1 (100–30%)', description: 'Canalizadores activos. Clicar cubos cuando Magtheridon los active.' },
      { name: 'Fase 2 (30–0%)', description: 'Magtheridon rompe su prisión. Daño en área aumentado. Nova Explosiva más frecuente.' },
    ],
  },
];
