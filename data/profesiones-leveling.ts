import type { ProfLevelingGuide } from './types';

export const profLevelingGuides: Record<string, ProfLevelingGuide> = {

  // ─────────────────────────────────────────
  // ALQUIMIA
  // ─────────────────────────────────────────
  alquimia: {
    id: 'alquimia',
    trainers: [
      { name: 'Lorokeem', location: 'Ciudad de Shattrath (Lower City)', faction: 'neutro' },
      { name: 'Fazu', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Alchemist Gribble', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Peacebloom', qty: 70 },
      { name: 'Silverleaf', qty: 70 },
      { name: 'Leaded Vial', qty: 150 },
      { name: 'Briarthorn', qty: 55 },
      { name: 'Bruiseweed', qty: 55 },
      { name: 'Liferoot', qty: 90 },
      { name: 'Kingsblood', qty: 90 },
      { name: 'Goldthorn', qty: 60 },
      { name: 'Stranglekelp', qty: 60 },
      { name: 'Crystal Vial', qty: 90 },
      { name: 'Sungrass', qty: 60 },
      { name: 'Firebloom', qty: 50 },
      { name: 'Golden Sansam', qty: 30 },
      { name: 'Sorrowmoss', qty: 30 },
      { name: 'Felweed', qty: 90 },
      { name: 'Dreaming Glory', qty: 60 },
      { name: 'Ragveil', qty: 55 },
      { name: 'Terocone', qty: 40 },
      { name: 'Imbued Vial', qty: 130 },
    ],
    tips: [
      'Empareja con Herboristería para no gastar oro — la combinación más rentable de todo TBC.',
      'A skill 275 elige especialización: Transmutation Master, Elixir Master o Potion Master. Es permanente (cambio = 150 oro).',
      'Transmutation Master: proc doble aleatorio en transmutaciones (Primal Earth → Life, etc.).',
      'Elixir Master: 1 de cada 3-4 elixires produce cantidad doble.',
      'Potion Master: 1 de cada 3-4 pociones produce cantidad doble — el más rentable en progreso de raid.',
      'Los Flasks (que duran 2h incluso al morir) se aprenden de vendedores de reputación en Terrallende.',
      'Crystal Vial se compra al vendedor de materiales de Alquimia en ciudad. Imbued Vial = en Shattrath.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          {
            from: 1, to: 60,
            action: 'Minor Healing Potion',
            materials: [{ name: 'Peacebloom', qty: 1 }, { name: 'Silverleaf', qty: 1 }, { name: 'Leaded Vial', qty: 1 }],
            note: 'Peacebloom y Silverleaf crecen en todas las zonas de inicio. Leaded Vial se compra al vendedor de materiales de Alquimia en cualquier ciudad.',
          },
          {
            from: 60, to: 110,
            action: 'Lesser Healing Potion',
            materials: [{ name: 'Briarthorn', qty: 1 }, { name: 'Leaded Vial', qty: 1 }],
            note: 'Briarthorn crece en Hillsbrad Foothills, Darkshore y Silverpine Forest. Muy abundante.',
          },
          {
            from: 110, to: 140,
            action: 'Healing Potion',
            materials: [{ name: 'Bruiseweed', qty: 1 }, { name: 'Briarthorn', qty: 1 }, { name: 'Leaded Vial', qty: 1 }],
            note: 'Bruiseweed crece en Wetlands, Redridge Mountains y Duskwood.',
          },
          {
            from: 140, to: 155,
            action: 'Lesser Mana Potion',
            materials: [{ name: 'Mageroyal', qty: 1 }, { name: 'Stranglekelp', qty: 1 }, { name: 'Leaded Vial', qty: 1 }],
          },
          {
            from: 155, to: 185,
            action: 'Greater Healing Potion',
            materials: [{ name: 'Liferoot', qty: 1 }, { name: 'Kingsblood', qty: 1 }, { name: 'Leaded Vial', qty: 1 }],
            note: 'Kingsblood en Arathi Highlands, Hillsbrad. Liferoot en orillas de ríos (Hillsbrad, Wetlands).',
          },
          {
            from: 185, to: 215,
            action: 'Elixir of Agility',
            materials: [{ name: 'Goldthorn', qty: 1 }, { name: 'Stranglekelp', qty: 1 }, { name: 'Leaded Vial', qty: 1 }],
            note: 'Goldthorn es raro — crece en Arathi Highlands (colinas), Feralas y Badlands. Cómpralo en AH si escasea.',
          },
          {
            from: 215, to: 230,
            action: 'Elixir of Greater Defense',
            materials: [{ name: 'Wild Steelbloom', qty: 1 }, { name: 'Goldthorn', qty: 1 }, { name: 'Leaded Vial', qty: 1 }],
          },
          {
            from: 230, to: 250,
            action: 'Superior Healing Potion',
            materials: [{ name: 'Sungrass', qty: 1 }, { name: 'Khadgar\'s Whisker', qty: 1 }, { name: 'Crystal Vial', qty: 1 }],
            note: 'Crystal Vial se compra al vendedor de materiales de Alquimia (no Leaded Vial). Sungrass en Thousand Needles.',
          },
          {
            from: 250, to: 265,
            action: 'Elixir of Detect Undead',
            materials: [{ name: 'Arthas\' Tears', qty: 1 }, { name: 'Crystal Vial', qty: 1 }],
            note: 'Arthas\' Tears en Eastern/Western Plaguelands. Receta muy barata en materiales.',
          },
          {
            from: 265, to: 285,
            action: 'Elixir of Greater Firepower',
            materials: [{ name: 'Firebloom', qty: 1 }, { name: 'Crystal Vial', qty: 1 }],
            note: 'Firebloom crece en zonas desérticas: Tanaris, Blasted Lands, Burning Steppes.',
          },
          {
            from: 285, to: 300,
            action: 'Major Healing Potion',
            materials: [{ name: 'Golden Sansam', qty: 1 }, { name: 'Sorrowmoss', qty: 1 }, { name: 'Crystal Vial', qty: 1 }],
            note: 'Golden Sansam y Sorrowmoss en Swamp of Sorrows — los dos juntos en la misma zona. Ruta muy eficiente.',
            alt: 'Elixir of Brute Force (Gromsblood + Goldthorn) si tienes stock de esas hierbas',
          },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 315,
            action: 'Volatile Healing Potion / Mad Alchemist\'s Potion',
            materials: [{ name: 'Felweed', qty: 1 }, { name: 'Imbued Vial', qty: 1 }],
            note: 'Imbued Vial se compra al vendedor de materiales en Shattrath (The World\'s End Tavern area). Mad Alchemist\'s Potion usa 1 Ragveil + 1 Imbued Vial — más cara pero muy vendible.',
            alt: 'Mad Alchemist\'s Potion (1 Ragveil + 1 Imbued Vial) — mayor valor en AH',
          },
          {
            from: 315, to: 325,
            action: 'Elixir of Draenic Wisdom',
            materials: [{ name: 'Terocone', qty: 1 }, { name: 'Felweed', qty: 1 }, { name: 'Imbued Vial', qty: 1 }],
            note: 'Terocone crece en Terokkar Forest y Nagrand. Elixir muy vendible para casters en raids.',
          },
          {
            from: 325, to: 340,
            action: 'Elixir of Major Mageblood',
            materials: [{ name: 'Dreaming Glory', qty: 1 }, { name: 'Imbued Vial', qty: 1 }],
            note: 'Dreaming Glory en Nagrand, Blade\'s Edge Mountains. Uno de los elixires de mana más usados en raids.',
          },
          {
            from: 340, to: 355,
            action: 'Super Healing Potion',
            materials: [{ name: 'Ragveil', qty: 2 }, { name: 'Felweed', qty: 1 }, { name: 'Imbued Vial', qty: 1 }],
            note: 'Ragveil solo crece en Zangarmarsh. La poción de curación más potente de TBC.',
          },
          {
            from: 355, to: 360,
            action: '⚙️ ELIGE ESPECIALIZACIÓN (skill 275+)',
            note: 'Si no lo has hecho ya, completa la quest de especialización antes de continuar: ve a Shattrath y habla con el entrenador de tu facción. ¡La especialización es PERMANENTE! Cambio cuesta ~150 oro.',
          },
          {
            from: 360, to: 375,
            action: 'Flask of Mighty Restoration / Super Mana Potion',
            materials: [{ name: 'Terocone', qty: 7 }, { name: 'Ancient Lichen', qty: 3 }, { name: 'Imbued Vial', qty: 1 }],
            note: 'Flask of Mighty Restoration se aprende con The Sha\'tar (Revered). Alternativa: Super Mana Potion (2 Dreaming Glory + 1 Felweed + Imbued Vial) — más fácil de conseguir.',
            alt: 'Elixir of Major Fortitude (2 Ragveil + 1 Ancient Lichen + Imbued Vial) — alternativa sin reputación',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // HERRERIA
  // ─────────────────────────────────────────
  herreria: {
    id: 'herreria',
    trainers: [
      { name: 'Dumphry', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Humphrey Digsong', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Rough Stone', qty: 70 },
      { name: 'Copper Bar', qty: 80 },
      { name: 'Bronze Bar', qty: 165 },
      { name: 'Coarse Stone', qty: 50 },
      { name: 'Heavy Stone', qty: 80 },
      { name: 'Iron Bar', qty: 200 },
      { name: 'Steel Bar', qty: 50 },
      { name: 'Mithril Bar', qty: 230 },
      { name: 'Thorium Bar', qty: 330 },
      { name: 'Dense Stone', qty: 100 },
      { name: 'Fel Iron Bar', qty: 700 },
      { name: 'Adamantite Bar', qty: 380 },
      { name: 'Khorium Bar', qty: 30 },
    ],
    tips: [
      'Herrería necesita mucho material — emparejarla con Minería ahorra una cantidad enorme de oro.',
      'A skill 200 elige especialización: Armorsmith o Weaponsmith. Luego puedes sub-especializarte en Swordsmith, Hammersmith o Axesmith (Weapon) o Dragonscale, Elemental o Shadow (Armor).',
      'La especialización no afecta la subida de skill — solo desbloquea recetas exclusivas.',
      'Fel Iron Bar es la llave de Terrallende — farmea Hellfire Peninsula o compra en AH con antelación.',
      'Los Dwarves tienen +5 de Minería racial — compensa parcialmente el coste si también minan.',
      'A skill 350+ los esquemas de equipo de raid (Khorium Destroyer, etc.) son muy rentables en la AH.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          {
            from: 1, to: 30,
            action: 'Rough Sharpening Stone',
            materials: [{ name: 'Rough Stone', qty: 1 }],
            note: 'La receta más barata del principio. Rough Stone cae de casi cualquier nodo de Copper.',
          },
          {
            from: 30, to: 65,
            action: 'Copper Chain Belt / Rough Bronze Leggings',
            materials: [{ name: 'Copper Bar', qty: 6 }],
            note: 'Copper Chain Belt (6 Copper Bar). Fabrica también 1 Blacksmith Hammer (1 Copper Bar) para tener la herramienta obligatoria.',
          },
          {
            from: 65, to: 100,
            action: 'Coarse Sharpening Stone / Bronze Shortsword',
            materials: [{ name: 'Coarse Stone', qty: 1 }],
            alt: 'Bronze Shortsword (3 Bronze Bar) — más puntos pero más material',
          },
          {
            from: 100, to: 135,
            action: 'Heavy Stone Statue / Coarse Grinding Stone',
            materials: [{ name: 'Heavy Stone', qty: 10 }],
            note: 'Heavy Stone Statue (20 Heavy Stone) da +5 puntos por craft — el más eficiente de este rango.',
            alt: 'Coarse Grinding Stone (2 Coarse Stone) — más accesible',
          },
          {
            from: 135, to: 165,
            action: 'Golden Rod',
            materials: [{ name: 'Iron Bar', qty: 4 }],
            note: '⭐ Golden Rod puede venderse a Encantadores — a veces sale muy bien en la AH. Requiere Iron Bar y 1 Gold Bar.',
            alt: 'Iron Shield Spike (4 Iron Bar) si no tienes Gold Bar',
          },
          {
            from: 165, to: 185,
            action: 'Steel Breastplate',
            materials: [{ name: 'Steel Bar', qty: 8 }],
            note: 'Steel Bar = 1 Iron Bar + 1 Coal (vendedor). Algunos lo compran en AH directamente.',
          },
          {
            from: 185, to: 200,
            action: '⚙️ ELIGE ESPECIALIZACIÓN (skill 200)',
            note: 'Ve con el NPC correspondiente: Armorsmith (Ironforge/Orgrimmar) o Weaponsmith (mismo). Quest obligatoria con materiales adicionales. ¡Elige antes de continuar para desbloquear las recetas exclusivas de tu rama!',
          },
          {
            from: 200, to: 250,
            action: 'Mithril Shield Spike / Mithril Coif',
            materials: [{ name: 'Mithril Bar', qty: 6 }],
            note: 'Mithril Shield Spike se vende bien a tanques. Mithril Coif (16 Mithril Bar) es más eficiente en puntos.',
          },
          {
            from: 250, to: 280,
            action: 'Dense Grinding Stone',
            materials: [{ name: 'Dense Stone', qty: 4 }],
            note: 'Dense Stone cae de nodos de Thorium. Baratísimo y fácil de conseguir.',
          },
          {
            from: 280, to: 300,
            action: 'Imperial Plate Bracers / Thorium Boots',
            materials: [{ name: 'Thorium Bar', qty: 16 }],
            note: 'Thorium Boots (20 Thorium Bar) — muy vendible a tanques leveleando. Imperial Plate Bracers (16 Thorium) alternativa.',
            alt: 'Thorium Shield Spike (6 Thorium) — vendible a tanques',
          },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 320,
            action: 'Fel Iron Breastplate / Fel Iron Chain Bracer',
            materials: [{ name: 'Fel Iron Bar', qty: 16 }],
            note: 'Fel Iron Breastplate (16 Fel Iron) o Chain Bracer (12 Fel Iron). Empieza a acumular Fel Iron desde el inicio de Hellfire — necesitarás cientos.',
          },
          {
            from: 320, to: 335,
            action: 'Fel Iron Plate Belt / Adamantite Cleaver',
            materials: [{ name: 'Fel Iron Bar', qty: 20 }],
            alt: 'Adamantite Cleaver (8 Adamantite Bar + 4 Fel Iron) — empieza a usar Adamantite',
          },
          {
            from: 335, to: 350,
            action: 'Adamantite Breastplate',
            materials: [{ name: 'Adamantite Bar', qty: 16 }],
            note: 'Adamantite se obtiene minando en Nagrand (la mejor ruta) y Netherstorm. Rich Adamantite Veins requieren skill 325 de Minería.',
          },
          {
            from: 350, to: 360,
            action: 'Enchanted Adamantite Belt / Breastplate',
            materials: [{ name: 'Adamantite Bar', qty: 10 }, { name: 'Primal Water', qty: 2 }],
            note: 'Los objetos Enchanted Adamantite son los mejores de la profesión antes de T4. Muy vendibles como pre-raid BiS.',
          },
          {
            from: 360, to: 375,
            action: 'Khorium Belt / Oathkeeper\'s Helm',
            materials: [{ name: 'Khorium Bar', qty: 8 }, { name: 'Adamantite Bar', qty: 6 }],
            note: 'Khorium Ore es raro y caro — se encuentra en Rich Thorium Veins de Outland y nodos especiales de Netherstorm. Algunos prefieren comprar los Bars directamente en AH.',
            alt: 'Felsteel Gloves (6 Felsteel Bar = 2 Fel Iron + 1 Primal Fire cada bar) — alternativa sin Khorium',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // ENCANTAMIENTO
  // ─────────────────────────────────────────
  encantamiento: {
    id: 'encantamiento',
    trainers: [
      { name: 'Enchantrix Barbo', location: 'Ciudad de Shattrath (Lower City)', faction: 'neutro' },
      { name: 'High Enchanter Bardolan', location: 'Ciudad de Shattrath (Scryers)', faction: 'neutro' },
      { name: 'Felannia', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Johan Barnes', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Strange Dust', qty: 245 },
      { name: 'Lesser Magic Essence', qty: 30 },
      { name: 'Greater Magic Essence', qty: 15 },
      { name: 'Soul Dust', qty: 110 },
      { name: 'Vision Dust', qty: 195 },
      { name: 'Dream Dust', qty: 130 },
      { name: 'Illusion Dust', qty: 190 },
      { name: 'Greater Eternal Essence', qty: 30 },
      { name: 'Large Brilliant Shard', qty: 15 },
      { name: 'Arcane Dust', qty: 380 },
      { name: 'Greater Planar Essence', qty: 55 },
      { name: 'Large Prismatic Shard', qty: 15 },
      { name: 'Void Crystal', qty: 14 },
    ],
    tips: [
      'Encantamiento es la ÚNICA profesión que no tiene materiales de gathering directos — todo viene de Desencantamiento de gear.',
      'Desencanta (DE) cualquier item verde que no vendas: da Strange Dust, Essences y Shards.',
      'Los Encantadores pueden encantar sus propios ANILLOS — el mayor beneficio exclusivo de la profesión.',
      'Enchant Ring — Healing Power y Enchant Ring — Spellpower son BiS exclusivos para casters.',
      'Arcane Dust (material principal de Terrallende) se obtiene desencantando gear verde/azul de Outland.',
      'Void Crystal (375 tramo final) tiene cooldown de 2 días — empieza con mucha antelación.',
      'Empareja con un segundo personaje con Tailoring para desencantarlo y ahorrar costes.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          {
            from: 1, to: 50,
            action: 'Enchant Bracer — Minor Health',
            materials: [{ name: 'Strange Dust', qty: 2 }],
            note: 'Strange Dust es el primer material de Encantamiento. Se obtiene desencantando cualquier item verde nivel 1-25.',
          },
          {
            from: 50, to: 90,
            action: 'Enchant Bracer — Minor Agility',
            materials: [{ name: 'Strange Dust', qty: 3 }],
          },
          {
            from: 90, to: 120,
            action: 'Enchant Bracer — Strength',
            materials: [{ name: 'Strange Dust', qty: 5 }],
          },
          {
            from: 120, to: 135,
            action: 'Enchant Bracer — Minor Stamina',
            materials: [{ name: 'Soul Dust', qty: 4 }],
            note: 'Soul Dust viene de desencantamiento de items verdes nivel 21-30.',
          },
          {
            from: 135, to: 155,
            action: 'Enchant Gloves — Agility',
            materials: [{ name: 'Soul Dust', qty: 6 }],
          },
          {
            from: 155, to: 185,
            action: 'Enchant Bracer — Stamina',
            materials: [{ name: 'Vision Dust', qty: 6 }],
            note: 'Vision Dust de items verdes nivel 36-45.',
          },
          {
            from: 185, to: 220,
            action: 'Enchant Cloak — Greater Defense',
            materials: [{ name: 'Vision Dust', qty: 8 }],
          },
          {
            from: 220, to: 245,
            action: 'Enchant Bracer — Greater Stamina',
            materials: [{ name: 'Dream Dust', qty: 6 }],
            note: 'Dream Dust de items nivel 46-55.',
          },
          {
            from: 245, to: 265,
            action: 'Enchant Shield — Vitality',
            materials: [{ name: 'Dream Dust', qty: 8 }],
          },
          {
            from: 265, to: 290,
            action: 'Enchant Bracer — Greater Strength',
            materials: [{ name: 'Illusion Dust', qty: 10 }],
            note: 'Illusion Dust de items nivel 56+. Runecloth gear desencantado da Illusion Dust.',
          },
          {
            from: 290, to: 300,
            action: 'Enchant Weapon — Strength',
            materials: [{ name: 'Illusion Dust', qty: 10 }, { name: 'Greater Eternal Essence', qty: 2 }],
            alt: 'Enchant Shield — Greater Stamina (10 Illusion Dust) — sin Essences',
          },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 315,
            action: 'Enchant Bracer — Major Defense',
            materials: [{ name: 'Arcane Dust', qty: 4 }],
            note: 'Arcane Dust es el material base de Terrallende. Se obtiene desencantando cualquier gear verde de Outland. Farmea mazmorras normales (Hellfire Citadel, Coilfang Reservoir) para stock rápido.',
          },
          {
            from: 315, to: 325,
            action: 'Enchant Bracer — Assault',
            materials: [{ name: 'Arcane Dust', qty: 6 }],
          },
          {
            from: 325, to: 340,
            action: 'Enchant Cloak — Dodge',
            materials: [{ name: 'Arcane Dust', qty: 8 }],
          },
          {
            from: 340, to: 350,
            action: 'Enchant Chest — Exceptional Mana',
            materials: [{ name: 'Arcane Dust', qty: 10 }],
          },
          {
            from: 350, to: 360,
            action: 'Enchant Bracer — Fortitude',
            materials: [{ name: 'Arcane Dust', qty: 10 }, { name: 'Greater Planar Essence', qty: 2 }],
            alt: 'Enchant Bracer — Spellpower — mismos materiales, diferente stat',
          },
          {
            from: 360, to: 365,
            action: 'Enchant Ring — Healing Power',
            materials: [{ name: 'Greater Planar Essence', qty: 3 }],
            note: 'EXCLUSIVO: Solo los encantadores pueden encantar sus propios anillos. Elige Healing Power o Spellpower según tu clase.',
          },
          {
            from: 365, to: 369,
            action: 'Enchant Weapon — Soulfrost / Sunfire',
            materials: [{ name: 'Arcane Dust', qty: 10 }, { name: 'Large Prismatic Shard', qty: 3 }, { name: 'Void Crystal', qty: 1 }],
            note: 'Varios encantamientos disponibles en este rango. Elige el más barato que tengas disponible.',
          },
          {
            from: 369, to: 375,
            action: 'Void Sphere',
            materials: [{ name: 'Void Crystal', qty: 2 }],
            note: '⚠️ COOLDOWN DE 2 DÍAS por craft. Solo puedes hacer 1 Void Sphere cada 2 días — necesitarás ~12 días para estos 6 puntos. Muy caro. Empieza este tramo con tiempo de sobra.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // INGENIERIA
  // ─────────────────────────────────────────
  ingenieria: {
    id: 'ingenieria',
    trainers: [
      { name: 'Engineer Sinbei', location: 'Ciudad de Shattrath (Barrio Scryers)', faction: 'neutro' },
      { name: 'Technician Mihila', location: 'Ciudad de Shattrath (Barrio Aldori)', faction: 'neutro' },
      { name: 'Zebig', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Chief Engineer Trep', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Rough Stone', qty: 70 },
      { name: 'Copper Bar', qty: 85 },
      { name: 'Coarse Stone', qty: 60 },
      { name: 'Bronze Bar', qty: 115 },
      { name: 'Medium Leather', qty: 20 },
      { name: 'Wool Cloth', qty: 20 },
      { name: 'Mithril Bar', qty: 100 },
      { name: 'Solid Stone', qty: 55 },
      { name: 'Dense Stone', qty: 55 },
      { name: 'Thorium Bar', qty: 115 },
      { name: 'Runecloth', qty: 35 },
      { name: 'Fel Iron Bar', qty: 310 },
      { name: 'Mote of Earth', qty: 80 },
      { name: 'Primal Earth', qty: 25 },
      { name: 'Adamantite Bar', qty: 230 },
      { name: 'Netherweave Cloth', qty: 85 },
      { name: 'Khorium Bar', qty: 15 },
      { name: 'Primal Fire', qty: 15 },
    ],
    tips: [
      'A skill 200 DEBES elegir especialización: Ingeniería Gnómica o Goblin. Es permanente (cambio muy caro).',
      'Gnómica: mejores gadgets defensivos, Goggles Ultraviolet. Goblin: bombas y cohetes más potentes para PvP/PvE.',
      'Los Gnome tienen +15 Ingeniería en Vainilla y +5 en Terrallende por racial.',
      'A skill 350 puedes fabricar las Goggles épicas según tu clase (Tankatronic, Furious Gizmatic, etc.) — equivalentes a T4/T5.',
      'El esquema de Field Repair Bot 110G cae de Gan\'arg Analyzer en Blade\'s Edge Mountains — necesario para 360-375.',
      'Turbo-Charged Flying Machine: la recompensa definitiva de la profesión. Requiere Master Engineer y skill 350.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          {
            from: 1, to: 30,
            action: 'Rough Blasting Powder',
            materials: [{ name: 'Rough Stone', qty: 1 }],
          },
          {
            from: 30, to: 50,
            action: 'Handful of Copper Bolts',
            materials: [{ name: 'Copper Bar', qty: 1 }],
            note: 'Fab ANTES de continuar: 1 Arclight Spanner (6 Copper Bar) — herramienta obligatoria para toda la profesión.',
          },
          {
            from: 50, to: 65,
            action: 'Copper Tube',
            materials: [{ name: 'Copper Bar', qty: 4 }],
          },
          {
            from: 65, to: 75,
            action: 'Rough Copper Bomb',
            materials: [{ name: 'Copper Bar', qty: 4 }, { name: 'Rough Blasting Powder', qty: 2 }],
          },
          {
            from: 75, to: 105,
            action: 'Coarse Blasting Powder',
            materials: [{ name: 'Coarse Stone', qty: 1 }],
          },
          {
            from: 105, to: 135,
            action: 'Bronze Tube',
            materials: [{ name: 'Bronze Bar', qty: 6 }],
          },
          {
            from: 135, to: 155,
            action: 'Bronze Framework',
            materials: [{ name: 'Bronze Bar', qty: 4 }, { name: 'Medium Leather', qty: 2 }, { name: 'Wool Cloth', qty: 1 }],
          },
          {
            from: 155, to: 200,
            action: 'Solid Blasting Powder',
            materials: [{ name: 'Solid Stone', qty: 2 }],
            alt: 'Hi-Explosive Bomb (2 Mithril Casing + 1 Solid Blasting Powder) — más puntos por craft',
          },
          {
            from: 200, to: 210,
            action: '⚙️ ELIGE ESPECIALIZACIÓN',
            note: 'Ve al entrenador Gnómico (Gadgetzan) o Goblin (Booty Bay) para elegir especialización. ¡Es PERMANENTE! Gnómica: más utilidad en raid. Goblin: más poder explosivo.',
          },
          {
            from: 210, to: 250,
            action: 'Mithril Casing',
            materials: [{ name: 'Mithril Bar', qty: 3 }],
          },
          {
            from: 250, to: 265,
            action: 'Dense Blasting Powder',
            materials: [{ name: 'Dense Stone', qty: 2 }],
          },
          {
            from: 265, to: 290,
            action: 'Thorium Widget',
            materials: [{ name: 'Thorium Bar', qty: 3 }, { name: 'Runecloth', qty: 1 }],
          },
          {
            from: 290, to: 300,
            action: 'Thorium Tube',
            materials: [{ name: 'Thorium Bar', qty: 6 }],
            alt: 'Dense Dynamite (2 Dense Stone + 2 Dense Blasting Powder) — más barato',
          },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 310,
            action: 'Handful of Fel Iron Bolts + Elemental Blasting Powder',
            materials: [{ name: 'Fel Iron Bar', qty: 2 }, { name: 'Mote of Earth', qty: 2 }],
            note: 'Ambas recetas son orange en este rango — alterna entre ellas para máxima eficiencia.',
          },
          {
            from: 310, to: 320,
            action: 'Fel Iron Bomb',
            materials: [{ name: 'Fel Iron Bar', qty: 6 }, { name: 'Handful of Fel Iron Bolts', qty: 1 }],
          },
          {
            from: 320, to: 335,
            action: 'Adamantite Frame',
            materials: [{ name: 'Adamantite Bar', qty: 4 }, { name: 'Primal Earth', qty: 2 }],
          },
          {
            from: 335, to: 340,
            action: 'White Smoke Flare',
            materials: [{ name: 'Netherweave Cloth', qty: 5 }, { name: 'Elemental Blasting Powder', qty: 2 }],
          },
          {
            from: 340, to: 350,
            action: 'Khorium Power Core',
            materials: [{ name: 'Khorium Bar', qty: 2 }, { name: 'Primal Fire', qty: 1 }],
          },
          {
            from: 350, to: 360,
            action: 'Adamantite Rifle',
            materials: [{ name: 'Adamantite Bar', qty: 6 }, { name: 'Khorium Power Core', qty: 1 }, { name: 'Netherweave Cloth', qty: 2 }],
          },
          {
            from: 360, to: 375,
            action: 'Field Repair Bot 110G',
            materials: [{ name: 'Adamantite Bar', qty: 20 }, { name: 'Khorium Bar', qty: 4 }, { name: 'Primal Fire', qty: 6 }],
            note: 'El esquema cae de Gan\'arg Analyzer en Blade\'s Edge Mountains. Sin él, usa Crashin\' Thrashin\' Robot (Horda) o Gnomish Poultryizer (Alianza).',
            alt: 'Goblin Rocket Launcher (Ingenieros Goblin) — alternativa válida sin el esquema del bot',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // JOYERIA
  // ─────────────────────────────────────────
  joyeria: {
    id: 'joyeria',
    trainers: [
      { name: 'Kalaen', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Tatiana', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Copper Bar', qty: 115 },
      { name: 'Tigerseye', qty: 15 },
      { name: 'Bronze Bar', qty: 115 },
      { name: 'Heavy Stone', qty: 80 },
      { name: 'Small Agate', qty: 60 },
      { name: 'Mithril Bar', qty: 105 },
      { name: 'Thorium Bar', qty: 85 },
      { name: 'Adamantite Bar', qty: 185 },
      { name: 'Primal Earth', qty: 40 },
      { name: 'Shadowsong Amethyst', qty: 30 },
      { name: 'Deep Peridot', qty: 30 },
      { name: 'Blood Garnet', qty: 20 },
      { name: 'Azure Moonstone', qty: 20 },
    ],
    tips: [
      'Joyería es NUEVA en TBC Classic — al inicio del servidor los materiales serán caros en la AH.',
      'A skill 20 aprende Prospecting: extrae gemas de 5 minerales a la vez — imprescindible si tienes Minería.',
      'Design: Pendant of the Agate Shield es de stock LIMITADO: Jandia (Horda, Thousand Needles) o Neal Allen (Alianza, Wetlands). Cómprala cada vez que veas stock.',
      'A skill 325 necesitas una Mercurial Stone fabricada por un Alquimista — pídela a tu guild antes de empezar ese tramo.',
      'Las Draenei tienen +5 de Joyería como racial en TBC Classic.',
      'Las gemas exclusivas de joyero (ej: Delicate Crimson Spinel) son superiores a las épicas normales y solo tú puedes usarlas.',
    ],
    sections: [
      {
        label: 'Mundo Antiguo (1–300)',
        steps: [
          {
            from: 1, to: 20,
            action: 'Delicate Copper Wire',
            materials: [{ name: 'Copper Bar', qty: 2 }],
            note: 'Aprende Prospecting a skill 20 desde el entrenador — imprescindible para la profesión a largo plazo.',
          },
          {
            from: 20, to: 35,
            action: 'Delicate Copper Wire (continúa)',
            materials: [{ name: 'Copper Bar', qty: 2 }],
          },
          {
            from: 35, to: 50,
            action: 'Tigerseye Band',
            materials: [{ name: 'Copper Bar', qty: 3 }, { name: 'Tigerseye', qty: 1 }],
            alt: 'Malachite Pendant (3 Copper Bar + 1 Malachite)',
          },
          {
            from: 50, to: 80,
            action: 'Bronze Setting',
            materials: [{ name: 'Bronze Bar', qty: 2 }],
          },
          {
            from: 80, to: 115,
            action: 'Pendant of the Agate Shield',
            materials: [{ name: 'Heavy Stone', qty: 4 }, { name: 'Small Agate', qty: 2 }],
            note: 'Receta de stock LIMITADO: Jandia (Horda, Thousand Needles) o Neal Allen (Alianza, Wetlands). Si no tienes la receta, usa Heavy Stone Statue.',
            alt: 'Heavy Stone Statue (12 Heavy Stone) — si no consigues la receta del colgante',
          },
          {
            from: 115, to: 150,
            action: 'Mithril Filigree',
            materials: [{ name: 'Mithril Bar', qty: 2 }],
          },
          {
            from: 150, to: 200,
            action: 'Mithril Pendant of the Apes',
            materials: [{ name: 'Mithril Bar', qty: 4 }],
            alt: 'Engraved Truesilver Ring (2 Truesilver Bar)',
          },
          {
            from: 200, to: 250,
            action: 'Thorium Setting',
            materials: [{ name: 'Thorium Bar', qty: 4 }],
          },
          {
            from: 250, to: 300,
            action: 'Simple Pearl Ring',
            materials: [{ name: 'Mithril Bar', qty: 2 }, { name: 'Small Lustrous Pearl', qty: 1 }],
            alt: 'Aquamarine Signet (2 Thorium Bar + 1 Aquamarine)',
          },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 320,
            action: 'Cortes de gemas básicas (Delicate, Bold, Brilliant…)',
            note: 'Aprende los primeros cortes del entrenador en Hellfire. Las gemas sin cortar (Blood Garnet, Deep Peridot…) vienen de Prospecting sobre Fel Iron y Adamantite.',
          },
          {
            from: 320, to: 325,
            action: 'Mercurial Adamantite',
            materials: [{ name: 'Adamantite Bar', qty: 4 }, { name: 'Primal Earth', qty: 2 }],
            note: 'Necesitas una Mercurial Stone fabricada por un Alquimista. Consíguela antes de empezar este paso.',
          },
          {
            from: 325, to: 350,
            action: 'Heavy Adamantite Ring',
            materials: [{ name: 'Adamantite Bar', qty: 4 }],
          },
          {
            from: 350, to: 360,
            action: 'Purified Shadow Pearl / Cortes de gemas verdes',
            materials: [{ name: 'Shadowsong Amethyst', qty: 2 }, { name: 'Deep Peridot', qty: 2 }],
            note: 'Compra diseños de vendor en Netherstorm y Nagrand si la Purified Shadow Pearl no está disponible.',
            alt: 'Golden Draenite Ring (2 Adamantite Bar + 2 Golden Draenite)',
          },
          {
            from: 360, to: 365,
            action: 'Cortes de gemas épicas (con reputación)',
            note: 'REQUIERE REPUTACIÓN con Sha\'tar (Friendly), Keepers of Time (Friendly), Lower City (Friendly), The Consortium (Honored). Compra los diseños a los vendedores de rep correspondientes.',
          },
          {
            from: 365, to: 375,
            action: 'Meta gemas: Earthstorm Diamond / Skyfire Diamond',
            materials: [{ name: 'Blood Garnet', qty: 2 }, { name: 'Deep Peridot', qty: 2 }, { name: 'Primal Earth', qty: 1 }],
            note: 'Earthstorm Diamond (para tanques/healers) y Skyfire Diamond (para DPS físico) son las más demandadas en raids.',
            alt: 'Starfire Spessarite cut si tienes la receta — demanda alta en el mercado',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // PELETERIA
  // ─────────────────────────────────────────
  peleteria: {
    id: 'peleteria',
    trainers: [
      { name: 'Darmari', location: 'Ciudad de Shattrath', faction: 'neutro' },
      { name: 'Brumman', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Barim Jurgensson', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Light Leather', qty: 265 },
      { name: 'Medium Leather', qty: 170 },
      { name: 'Heavy Leather', qty: 230 },
      { name: 'Thick Leather', qty: 420 },
      { name: 'Rugged Leather', qty: 420 },
      { name: 'Knothide Leather', qty: 900 },
      { name: 'Heavy Knothide Leather', qty: 125 },
      { name: 'Thick Clefthoof Leather', qty: 32 },
      { name: 'Fel Hide', qty: 32 },
    ],
    tips: [
      'Todo el cuero viene de Desollar bestias — considera emparejar Peletería con Desollar para ahorrar oro.',
      'Heavy Knothide Leather: 10 Knothide Leather → 1 Heavy. Funde un buen stock antes de empezar el tramo 315+.',
      'Drums of Battle y Drums of Panic son casi imprescindibles en raids de progreso T5–T6.',
      'Para Drums of Battle (Sha\'tar Honored): farmea Botanica normal (~5 runs de 20 min = Honored).',
      'Para Drums of Panic (Keepers of Time Honored): farmea Black Morass normal (~4 runs de 40 min = Honored).',
      'Los parches de brazo exclusivos de peletero (Nethercobra Leg Armor, Cobrahide Leg Armor) superan a los enchants normales.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          { from: 1, to: 20, action: 'Handstitched Leather Belt', materials: [{ name: 'Light Leather', qty: 2 }] },
          { from: 20, to: 55, action: 'Embossed Leather Gloves', materials: [{ name: 'Light Leather', qty: 3 }] },
          { from: 55, to: 100, action: 'Fine Leather Belt', materials: [{ name: 'Light Leather', qty: 9 }] },
          {
            from: 100, to: 125,
            action: 'Dark Leather Belt',
            materials: [{ name: 'Medium Leather', qty: 8 }, { name: 'Gray Dye', qty: 2 }],
            note: 'Gray Dye se compra a vendedores de tela y tintes en ciudades principales.',
          },
          { from: 125, to: 150, action: 'Dark Leather Boots', materials: [{ name: 'Medium Leather', qty: 12 }, { name: 'Gray Dye', qty: 1 }] },
          { from: 150, to: 180, action: 'Hillman\'s Cloak', materials: [{ name: 'Heavy Leather', qty: 16 }] },
          {
            from: 180, to: 200,
            action: 'Heavy Armor Kit',
            materials: [{ name: 'Heavy Leather', qty: 10 }],
            note: 'Muy vendible en la AH — los tanques los usan para subir defensa.',
          },
          { from: 200, to: 225, action: 'Barbaric Gloves', materials: [{ name: 'Thick Leather', qty: 16 }] },
          { from: 225, to: 250, action: 'Guardian Cloak', materials: [{ name: 'Thick Leather', qty: 24 }] },
          { from: 250, to: 270, action: 'Wicked Leather Headband', materials: [{ name: 'Rugged Leather', qty: 12 }, { name: 'Black Dye', qty: 2 }] },
          {
            from: 270, to: 300,
            action: 'Warbear Woolies',
            materials: [{ name: 'Rugged Leather', qty: 20 }],
            alt: 'Rugged Armor Kit (4 Rugged Leather) — más barato pero requiere más crafts',
          },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 315,
            action: 'Knothide Armor Kit',
            materials: [{ name: 'Knothide Leather', qty: 3 }],
            note: 'Muy vendible en la AH — popular entre jugadores sin Peletería.',
          },
          {
            from: 315, to: 325,
            action: 'Fabricar Heavy Knothide Leather',
            materials: [{ name: 'Knothide Leather', qty: 10 }],
            note: '10 Knothide → 1 Heavy Knothide. Este paso produce el material que usarás en todos los pasos siguientes.',
          },
          { from: 325, to: 340, action: 'Thick Draenic Vest', materials: [{ name: 'Knothide Leather', qty: 4 }, { name: 'Heavy Knothide Leather', qty: 4 }] },
          { from: 340, to: 350, action: 'Heavy Knothide Armor Kit', materials: [{ name: 'Heavy Knothide Leather', qty: 5 }] },
          {
            from: 350, to: 360,
            action: 'Drums of Battle',
            materials: [{ name: 'Heavy Knothide Leather', qty: 6 }, { name: 'Fel Hide', qty: 2 }],
            note: '⚠️ REQUIERE: The Sha\'tar Honored. Farmea Botanica normal (~5 runs × 20 min). Pregunta a tu guild si alguien ya tiene la receta desbloqueada.',
          },
          {
            from: 360, to: 375,
            action: 'Drums of Panic',
            materials: [{ name: 'Heavy Knothide Leather', qty: 8 }, { name: 'Thick Clefthoof Leather', qty: 4 }],
            note: '⚠️ REQUIERE: Keepers of Time Honored. Farmea CoT: Black Morass normal (~4 runs × 40 min). Thick Clefthoof Leather cae de Clefthoof en Nagrand.',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // COSTURA
  // ─────────────────────────────────────────
  costura: {
    id: 'costura',
    trainers: [
      { name: 'Dalinna', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Hama', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Linen Cloth', qty: 210 },
      { name: 'Wool Cloth', qty: 145 },
      { name: 'Silk Cloth', qty: 815 },
      { name: 'Mageweave Cloth', qty: 480 },
      { name: 'Runecloth', qty: 1210 },
      { name: 'Rugged Leather', qty: 115 },
      { name: 'Netherweave Cloth', qty: 820 },
      { name: 'Arcane Dust', qty: 45 },
    ],
    tips: [
      'Runecloth es el mayor gasto (1-300). Farmea en Eastern/Western Plaguelands o compra en AH.',
      'Pattern: Runecloth Bag y Pattern: Runecloth Gloves son de stock limitado — véndelos a Qia en Everlook, Winterspring.',
      'En TBC Classic, Costura tiene tres especializaciones: Shadoweave, Mooncloth y Spellfire. Sus sets son BiS para casters.',
      'La Spellfire Bag (20 slots) y Primal Mooncloth Bag (22 slots) son las bolsas más grandes del juego en TBC.',
      'Rune Thread se compra al vendedor — no se craftea.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          {
            from: 1, to: 35,
            action: 'Bolt of Linen Cloth → Linen Belt',
            materials: [{ name: 'Linen Cloth', qty: 4 }],
            note: 'Primero fabrica Bolt of Linen (2 Linen cada bolt), luego Linen Belt (2 Bolt + Coarse Thread vendedor).',
          },
          { from: 35, to: 75, action: 'Double-stitched Woolen Shoulders', materials: [{ name: 'Wool Cloth', qty: 9 }], alt: 'Simple Kilt (4 Bolt of Woolen Cloth + Fine Thread)' },
          {
            from: 75, to: 145,
            action: 'Bolt of Silk Cloth → Azure Silk Hood',
            materials: [{ name: 'Silk Cloth', qty: 6 }],
            note: 'Fabrica Bolt of Silk (4 Silk → 1 Bolt), luego Azure Silk Hood (2 Bolt + 1 Bleach). Bleach se compra al vendedor.',
          },
          {
            from: 145, to: 200,
            action: 'Bolt of Mageweave → Black Mageweave Gloves',
            materials: [{ name: 'Mageweave Cloth', qty: 8 }],
            note: 'Bolt of Mageweave: 5 Mageweave → 1 Bolt. Luego Black Mageweave Gloves/Headband (2–3 Bolt cada pieza).',
          },
          {
            from: 200, to: 250,
            action: 'Bolt of Runecloth → Runecloth Belt',
            materials: [{ name: 'Runecloth', qty: 8 }],
            note: 'Bolt of Runecloth: 5 Runecloth → 1 Bolt. Runecloth Belt: 3 Bolt + Rune Thread (vendedor).',
          },
          { from: 250, to: 260, action: 'Runecloth Gloves', materials: [{ name: 'Runecloth', qty: 20 }, { name: 'Rugged Leather', qty: 2 }] },
          {
            from: 260, to: 285,
            action: 'Runecloth Bag',
            materials: [{ name: 'Runecloth', qty: 25 }],
            note: '⚠️ Pattern: Runecloth Bag es de stock LIMITADO. Cómpralo a Qia en Everlook, Winterspring. ¡Es el item más vendible de este tramo!',
          },
          { from: 285, to: 300, action: 'Runecloth Gloves / Runecloth Mittens', materials: [{ name: 'Runecloth', qty: 20 }, { name: 'Rugged Leather', qty: 4 }] },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 325,
            action: 'Bolt of Netherweave',
            materials: [{ name: 'Netherweave Cloth', qty: 5 }],
            note: 'Produce un stock generoso de Bolts — los necesitarás para todos los pasos siguientes.',
          },
          {
            from: 325, to: 340,
            action: 'Netherweave Pants',
            materials: [{ name: 'Netherweave Cloth', qty: 15 }],
            note: '3 Bolt of Netherweave + 1 Rune Thread (vendedor) por pieza.',
            alt: 'Netherweave Tunic (2 Bolt + Rune Thread) — algo más barato',
          },
          {
            from: 340, to: 355,
            action: 'Bolt of Imbued Netherweave',
            materials: [{ name: 'Netherweave Cloth', qty: 10 }, { name: 'Arcane Dust', qty: 1 }],
            note: '2 Bolt of Netherweave + 1 Arcane Dust → 1 Bolt Imbued. Arcane Dust viene de Desencantamiento.',
          },
          { from: 355, to: 365, action: 'Imbued Netherweave Robe', materials: [{ name: 'Netherweave Cloth', qty: 30 }, { name: 'Arcane Dust', qty: 6 }], note: '3 Imbued Bolt + 1 Rune Thread por túnica.' },
          {
            from: 365, to: 375,
            action: 'Arcanoweave Robe / Tela de especialización',
            materials: [{ name: 'Netherweave Cloth', qty: 20 }],
            note: 'Spellfire Cloth, Primal Mooncloth o Shadowcloth según tu especialización — cada uno tiene CD diario. Elige la especialización que corresponda a tu clase antes de este tramo.',
            alt: 'Imbued Netherweave Pants o Boots si aún no tienes especialización',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // MINERIA (Gathering)
  // ─────────────────────────────────────────
  mineria: {
    id: 'mineria',
    trainers: [
      { name: 'Pikkle', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
      { name: 'Drixie', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
    ],
    totalMaterials: [],
    tips: [
      'Activa "Find Minerals" en el Minimap (botón de ojo) para ver todos los nodos en el mapa — hazlo siempre.',
      'Un\'Goro Crater: la mejor ruta para Thorium. Haz un circuit por el borde exterior de la zona.',
      'Smelting (fundir mineral) cuenta como craft y sube skill — útil cuando no puedes ir a minar.',
      'Fel Iron deja de dar puntos alrededor de skill 340 — cambia a Adamantite en cuanto puedas.',
      'Nagrand: la mejor ruta de Adamantite. Circuito completo por toda la zona, especialmente las colinas del sur.',
      'Rich Adamantite Vein requiere skill 325 y da más mineral por nodo — priorízalas sobre las normales.',
    ],
    sections: [
      {
        label: 'Mundo Antiguo (1–300)',
        steps: [
          { from: 1, to: 50, action: 'Mine Copper Ore', note: 'Zonas de inicio: Durotar, Mulgore, Elwynn Forest, Dun Morogh o Teldrassil. Muy abundante.' },
          { from: 50, to: 100, action: 'Mine Tin Ore + Silver Ore', note: 'Ashenvale, Redridge Mountains, Duskwood. Alterna Tin (skill 65) y Silver (skill 75).' },
          { from: 100, to: 150, action: 'Mine Iron Ore + Gold Ore', note: 'Western Plaguelands, Feralas, Tanaris. Iron (skill 100), Gold (skill 115).' },
          { from: 150, to: 200, action: 'Mine Mithril Ore + Truesilver', note: 'Burning Steppes, Felwood, Tanaris, Badlands. Mithril (skill 150), Truesilver (skill 165).' },
          { from: 200, to: 275, action: 'Mine Thorium Ore — Small y Rich Thorium Veins', note: 'Un\'Goro Crater (mejor para Small Thorium — circuit por el borde). Silithus, Winterspring (Rich Thorium, requiere skill 245).' },
          { from: 275, to: 290, action: 'Smelt Thorium Ore (fundición)', note: 'Funde el mineral en barras desde cualquier horno de ciudad — sube skill sin salir de la ciudad.' },
          { from: 290, to: 300, action: 'Smelt Dark Iron / Darkmoon Faire quest', note: 'Dark Iron solo se funde en The Black Forge dentro de BRD. Requiere un quest previo dentro de la mazmorra.', alt: 'Darkmoon Faire: quest "A Treatise on Mining" da +5 skill directo — mucho más fácil' },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          { from: 300, to: 340, action: 'Mine Fel Iron Ore', note: 'Hellfire Peninsula: circuit por toda la zona — la ruta más limpia del juego. Fel Iron requiere skill 275. Deja de dar puntos ~skill 340.' },
          { from: 340, to: 375, action: 'Mine Adamantite Ore', note: 'Nagrand: circuit completo por toda la zona (mejor opción). Netherstorm: más Rich Adamantite Veins. Adamantite requiere skill 310. Rich Adamantite (nodos naranja) requiere skill 325.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // HERBORISTERIA (Gathering)
  // ─────────────────────────────────────────
  herboristeria: {
    id: 'herboristeria',
    trainers: [
      { name: 'Ruak Stronghorn', location: 'Hellfire Peninsula (campamento Horda)', faction: 'horda' },
      { name: 'Rorelinde', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [],
    tips: [
      'Activa "Find Herbs" en el Minimap para ver todas las plantas disponibles — hazlo siempre.',
      'Las hierbas de Terrallende dan skill muy rápido — el tramo 300-375 es el más rápido de toda la guía.',
      'Sungrass en Thousand Needles: ruta muy limpia, sin competencia en servidores medianos.',
      'Nightmare Vine y Netherbloom requieren skill 365 para recoger — el punto más alto del tramo final.',
      'Empareja Herboristería con Alquimia — la combinación más rentable y práctica de todo TBC.',
      'Lleva pociones o vendas cuando recolectes en zonas de alto nivel para sobrevivir los respawns.',
    ],
    sections: [
      {
        label: 'Mundo Antiguo (1–300)',
        steps: [
          { from: 1, to: 70, action: 'Recolecta Peacebloom, Silverleaf, Earthroot', note: 'Cualquier zona de inicio (Elwynn, Durotar, Mulgore, Teldrassil). Recoge todas las plantas que veas.' },
          { from: 70, to: 115, action: 'Recolecta Mageroyal, Briarthorn, Bruiseweed, Stranglekelp', note: 'Hillsbrad Foothills, Darkshore, Wetlands, Ashenvale. Stranglekelp está bajo el agua en zonas costeras.' },
          { from: 115, to: 185, action: 'Recolecta Kingsblood, Liferoot, Fadeleaf, Goldthorn', note: 'Arathi Highlands, Feralas, Western Plaguelands. Goldthorn (requiere skill 170) — salta a ella en cuanto puedas.' },
          { from: 185, to: 255, action: 'Recolecta Sungrass, Blindweed', note: 'Thousand Needles (mejor ruta para Sungrass). Eastern Plaguelands, Feralas también válidos.' },
          { from: 255, to: 300, action: 'Recolecta Golden Sansam, Sorrowmoss, Dreamfoil', note: 'Swamp of Sorrows (Golden Sansam + Sorrowmoss — ruta muy limpia). Felwood (Dreamfoil, Gromsblood).' },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          { from: 300, to: 350, action: 'Recolecta Felweed, Dreaming Glory', note: 'Nagrand (mejor zona), Blade\'s Edge Mountains, Terokkar Forest. Felweed (skill 275), Dreaming Glory (skill 315).' },
          { from: 350, to: 365, action: 'Recolecta Ragveil, Terocone, Mana Thistle', note: 'Zangarmarsh (Ragveil), Nagrand/Terokkar (Terocone). Mana Thistle (skill 360) solo en zonas de alto nivel.' },
          { from: 365, to: 375, action: 'Recolecta Netherbloom o Nightmare Vine', note: 'Netherbloom: Netherstorm (skill 365). Nightmare Vine: Shadowmoon Valley (skill 365). Ambas son orange hasta 375 — subes muy rápido.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // DESOLLAR (Gathering)
  // ─────────────────────────────────────────
  desollar: {
    id: 'desollar',
    trainers: [
      { name: 'Moorutu', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
      { name: 'Jelena Nightsky', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
      { name: 'Seymour', location: 'Ciudad de Shattrath', faction: 'neutro' },
    ],
    totalMaterials: [],
    tips: [
      'Tu skill de Desollar debe ser al menos el nivel del mob × 5. Para mobs nivel 70 necesitas skill 350.',
      '⭐ MEJOR MÉTODO 300-375: Karazhan (Deadwind Pass) — limpia 2 salas pequeñas de murciélagos/can-demonio, sal, resetea. 3 rondas ≈ skill 375. Solo 30-45 minutos.',
      'Para entrar a Karazhan necesitas la llave o que un miembro de tu grupo abra la puerta.',
      'Desollar da Knothide Leather en Terrallende — muy valioso para Peletería y vendible en AH.',
      'Talbuk Thorngrazer en Nagrand: fáciles de matar, dan buen cuero, respawnean rápido.',
      'Empareja Desollar con Peletería para autoabastecerte de materiales, o vende el cuero en AH.',
    ],
    sections: [
      {
        label: 'Mundo Antiguo (1–300)',
        steps: [
          { from: 1, to: 75, action: 'Desuella bestias de bajo nivel', note: 'Lobos, jabalíes, ciervos en Elwynn Forest / Durotar / Mulgore. Cualquier bestia nivel 1-15.' },
          { from: 75, to: 150, action: 'Desuella bestias de nivel medio', note: 'Caimanes en Westfall, osos en Hillsbrad, panteras en costa de Stranglethorn.' },
          { from: 150, to: 225, action: 'Desuella bestias nivel 30-45', note: 'Cocodrilos en Wetlands, owlbears en Ashenvale, crocolisks en Stranglethorn.' },
          { from: 225, to: 300, action: 'Desuella en Feralas / Un\'Goro / Western Plaguelands', note: 'ÓPTIMO para personajes nivel 50+: Armored Battleboars en Mulgore — completa 1-300 en ~15-20 minutos.', alt: 'Yetis en Alterac / Feralas, dinosaurios en Un\'Goro Crater' },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          {
            from: 300, to: 375,
            action: '⭐ MÉTODO RÁPIDO: Karazhan (Deadwind Pass)',
            note: 'Entra a Karazhan. Limpia las 2 salas pequeñas de Shadowbat/Vampire Bat y Felhound. Sal de la instancia, usa "Reset All Instances", vuelve a entrar. 3 rondas completas = skill 375. Tiempo total: ~30-45 minutos.',
            alt: 'Alternativa: Hellfire Peninsula (Ravager beasts), Nagrand (Talbuk Thorngrazer), Netherstorm (Ripfang Lynx)',
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // COCINA
  // ─────────────────────────────────────────
  cocina: {
    id: 'cocina',
    trainers: [
      { name: 'Jack Trapper', location: 'Ciudad de Shattrath', faction: 'neutro' },
      { name: 'Allison', location: 'Campamento Horda, Hellfire Peninsula', faction: 'horda' },
      { name: 'Gaston', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
    ],
    totalMaterials: [
      { name: 'Lynx Meat / Boar Meat (carne de inicio)', qty: 55 },
      { name: 'Bear Meat / Coyote Steak', qty: 55 },
      { name: 'Raptor Egg', qty: 50 },
      { name: 'Raptor Flesh', qty: 50 },
      { name: 'Giant Egg (quest Artesano)', qty: 12 },
      { name: 'Zesty Clam Meat (quest Artesano)', qty: 10 },
      { name: 'Alterac Swiss (quest Artesano, vendedor)', qty: 20 },
      { name: 'Tender Wolf Steak / Spotted Yellowtail', qty: 55 },
      { name: 'Raw Nightfin Snapper / Sunscale Salmon', qty: 30 },
      { name: 'Ravager Flesh', qty: 35 },
      { name: 'Talbuk Venison o Clefthoof Meat', qty: 40 },
      { name: 'Serpent Flesh o Raptor Ribs', qty: 60 },
    ],
    tips: [
      'Sube Cocina junto con Pesca para aprovechar el pescado capturado — ahorra mucho oro.',
      'Quest Artesano (Clamlette Surprise): 12 Giant Egg + 10 Zesty Clam Meat + 20 Alterac Swiss.',
      'Giant Egg cae de Rocs en Tanaris / Un\'Goro o se compra en AH. Zesty Clam Meat se abre de Giant Clam.',
      'Alterac Swiss se compra al vendedor en Alterac Mountains — barato y accesible.',
      'La comida de Terrallende da +20 a una stat principal — imprescindible en raids de progreso.',
      'Guarda el pescado crudo que atrapes al subir Pesca para cocinarlo y subir Cocina gratis.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          { from: 1, to: 50, action: 'Charred Wolf Meat / Roasted Boar Meat', materials: [{ name: 'Lynx Meat o Boar Meat', qty: 1 }], note: 'Caza lobos y jabalíes en tu zona de inicio. Receta básica del entrenador.' },
          { from: 50, to: 130, action: 'Smoked Bear Meat / Coyote Steak', materials: [{ name: 'Bear Meat o Coyote Steak', qty: 1 }], note: 'Osos en Hillsbrad Foothills / Loch Modan. Coyotes en Barrens / Westfall.' },
          { from: 130, to: 175, action: 'Curiously Tasty Omelet', materials: [{ name: 'Raptor Egg', qty: 1 }], note: 'Raptor Egg cae de los raptores de Arathi Highlands y Wetlands.' },
          { from: 175, to: 225, action: 'Roast Raptor', materials: [{ name: 'Raptor Flesh', qty: 1 }], note: 'Raptor Flesh de los raptores de Stranglethorn Vale / Un\'Goro Crater.', alt: 'Continúa con Curiously Tasty Omelet si te sobran huevos' },
          { from: 225, to: 225, action: '⭐ Quest Artesano: Clamlette Surprise (Gadgetzan)', note: 'Ve con Dirge Quikcleave en Gadgetzan, Tanaris. Necesitas: 12 Giant Egg + 10 Zesty Clam Meat + 20 Alterac Swiss. Recompensa: rango Artisan Cooking.' },
          { from: 225, to: 275, action: 'Tender Wolf Steak', materials: [{ name: 'Lean Wolf Steak', qty: 1 }], note: 'Lobos en Eastern / Western Plaguelands.', alt: 'Spotted Yellowtail (1 pez Yellowtail) si pescas con Pesca' },
          { from: 275, to: 300, action: 'Nightfin Soup', materials: [{ name: 'Raw Nightfin Snapper', qty: 1 }], note: 'Nightfin Snapper se pesca de noche en Felwood / Moonglade / Feralas (Fishing ~250). Cómpralo en AH si no pescas.', alt: 'Poached Sunscale Salmon (1 Raw Sunscale Salmon)' },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          { from: 300, to: 325, action: 'Ravager Dog', materials: [{ name: 'Ravager Flesh', qty: 1 }], note: 'Ravager Flesh cae de las bestias Ravager en Hellfire Peninsula — muy abundante.', alt: 'Buzzard Bites (1 Buzzard Meat de los buitres de Hellfire)' },
          { from: 325, to: 360, action: 'Talbuk Steak / Roasted Clefthoof', materials: [{ name: 'Talbuk Venison o Clefthoof Meat', qty: 1 }], note: 'Talbuk (Venison) en Nagrand. Clefthoof (Meat) también en Nagrand.', alt: 'Warp Burger (1 Warped Flesh de Warp Stalkers en Terokkar)' },
          { from: 360, to: 375, action: 'Crunchy Serpent / Mok\'Nathal Shortribs', materials: [{ name: 'Serpent Flesh o Raptor Ribs', qty: 2 }], note: 'Serpent Flesh de serpientes en Nagrand / Netherstorm. Raptor Ribs en Blade\'s Edge Mountains.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // PRIMEROS AUXILIOS
  // ─────────────────────────────────────────
  'primeros-auxilios': {
    id: 'primeros-auxilios',
    trainers: [
      { name: 'Aresella', location: 'Honor Hold, Hellfire Peninsula', faction: 'alianza' },
      { name: 'Burko', location: 'Thrallmar, Hellfire Peninsula', faction: 'horda' },
    ],
    totalMaterials: [
      { name: 'Linen Cloth', qty: 175 },
      { name: 'Wool Cloth', qty: 185 },
      { name: 'Silk Cloth', qty: 155 },
      { name: 'Mageweave Cloth', qty: 130 },
      { name: 'Runecloth', qty: 85 },
      { name: 'Netherweave Cloth', qty: 265 },
    ],
    tips: [
      'A skill 150: compra el libro "Expert First Aid — Under Wraps" de Deneb Walker (Alianza, Nethergarde Keep) o Balai Lok\'Wein (Horda, Brackenwall Village). Sin él no puedes continuar.',
      'A skill 225: completa el quest Triage. Sana a 15 heridos en 6 minutos. Los "Critically Injured" tienen prioridad; los "Healthy" NO se curan (penalización). Practica el patrón antes.',
      'Quest Triage en: Nissa Firestone (Alianza, Theramore Isle) / Legacki (Horda, Gadgetzan).',
      'Primeros Auxilios es profesión secundaria — puedes tenerla además de tus 2 profesiones primarias.',
      'Heavy Netherweave Bandage cura ~3400 HP en 8 segundos — invaluable para clases sin autocuración en raids.',
    ],
    sections: [
      {
        label: 'Vainilla (1–300)',
        steps: [
          { from: 1, to: 40, action: 'Linen Bandage', materials: [{ name: 'Linen Cloth', qty: 1 }] },
          { from: 40, to: 80, action: 'Heavy Linen Bandage', materials: [{ name: 'Linen Cloth', qty: 2 }] },
          { from: 80, to: 115, action: 'Wool Bandage', materials: [{ name: 'Wool Cloth', qty: 1 }] },
          { from: 115, to: 150, action: 'Heavy Wool Bandage', materials: [{ name: 'Wool Cloth', qty: 2 }], note: 'Al llegar a 150, compra el libro "Expert First Aid" antes de continuar. Ver tips.' },
          { from: 150, to: 180, action: 'Silk Bandage', materials: [{ name: 'Silk Cloth', qty: 1 }] },
          { from: 180, to: 210, action: 'Heavy Silk Bandage', materials: [{ name: 'Silk Cloth', qty: 2 }] },
          { from: 210, to: 225, action: 'Mageweave Bandage', materials: [{ name: 'Mageweave Cloth', qty: 1 }], note: 'Al llegar a 225 completa el quest Triage para desbloquear Artisan First Aid.' },
          { from: 225, to: 250, action: 'Mageweave Bandage (continúa)', materials: [{ name: 'Mageweave Cloth', qty: 1 }] },
          { from: 250, to: 260, action: 'Heavy Mageweave Bandage', materials: [{ name: 'Mageweave Cloth', qty: 2 }] },
          { from: 260, to: 290, action: 'Runecloth Bandage', materials: [{ name: 'Runecloth', qty: 1 }] },
          { from: 290, to: 300, action: 'Heavy Runecloth Bandage', materials: [{ name: 'Runecloth', qty: 2 }] },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          { from: 300, to: 330, action: 'Netherweave Bandage', materials: [{ name: 'Netherweave Cloth', qty: 1 }], note: 'Aprende del entrenador en Hellfire Peninsula al llegar a skill 300.' },
          { from: 330, to: 375, action: 'Heavy Netherweave Bandage', materials: [{ name: 'Netherweave Cloth', qty: 2 }], note: 'Cura ~3400 HP en 8 segundos — imprescindible para cualquier clase sin autocuración.' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // PESCA
  // ─────────────────────────────────────────
  pesca: {
    id: 'pesca',
    trainers: [
      { name: 'Zurjaya', location: 'Zangarmarsh (Cenarion Refuge, Horda)', faction: 'horda' },
      { name: 'Jeb Goodshift', location: 'Blasted Lands / paso a Terrallende', faction: 'alianza' },
      { name: 'Old Man Heming', location: 'Booty Bay (libro Expert Fishing)', faction: 'neutro' },
    ],
    totalMaterials: [
      { name: 'Caña de pescar (Fishing Pole, vendedor)', qty: 1 },
      { name: 'Shiny Bauble (cebo, vendedor)', qty: 30 },
      { name: 'Bright Bauble (cebo, vendedor)', qty: 30 },
      { name: 'Expert Fishing — The Bass and You (libro, 10 oro, Booty Bay)', qty: 1 },
    ],
    tips: [
      'Añade siempre un cebo (lure) a la caña antes de pescar — reduce los peces que "escapan" enormemente.',
      'A skill 150: compra "Expert Fishing — The Bass and You" a Old Man Heming en Booty Bay (10 oro).',
      'Quest Maestro Nat Pagle requiere nivel 35 y skill 225. Debes pescar 4 peces especiales en zonas distintas.',
      'Pesca en agua INTERIOR (ríos, lagos) para los quests — el océano da peces distintos.',
      'Combina Pesca con Cocina — los peces se cocinan en buffs de +20 stats imprescindibles en raids.',
      'En Terrallende, busca "Fishing Schools" (manchas de peces en el agua) para peces raros y recetas.',
    ],
    sections: [
      {
        label: 'Mundo Antiguo (1–300)',
        steps: [
          { from: 1, to: 75, action: 'Pesca en cualquier zona de inicio', note: 'Elwynn Forest (Lago Cristal), Durotar (ríos), Mulgore (Stonebull Lake). Usa Shiny Bauble como cebo desde el primer momento.' },
          { from: 75, to: 150, action: 'Pesca en ciudades capitales o zonas medias', note: 'Canales de Stormwind / Orgrimmar (peces nunca escapan aquí). Hillsbrad Foothills, Darkshore también válidos.', alt: 'Wailing Caverns en The Barrens — peces sin competencia' },
          { from: 150, to: 225, action: 'Pesca en Dustwallow Marsh (aguas interiores)', note: '⚠️ SOLO aguas interiores del pantano — NO el océano. A skill 150 compra el libro Expert Fishing a Old Man Heming en Booty Bay (10 oro).' },
          { from: 225, to: 225, action: '⭐ Quest Maestro: Nat Pagle, Angler Extreme', note: 'Encuentra a Nat Pagle en Dustwallow Marsh (~63,51). Requiere nivel 35 + skill 225. Pesca 4 peces: 1) Feralas Ahi (Feralas), 2) Misty Reed Mahi Mahi (Swamp of Sorrows), 3) Sar\'theris Striker (Desolace), 4) Savage Coast Blue Sailfin (Stranglethorn). Recompensa: Artisan Fishing.' },
          { from: 225, to: 300, action: 'Pesca en Feralas / Felwood / Hinterlands', note: 'Feralas: cualquier lago interior (evita Jademir Lake). Usa Aquadynamic Fish Attractor para mejores resultados.' },
        ],
      },
      {
        label: 'Terrallende (300–375)',
        steps: [
          { from: 300, to: 375, action: 'Pesca en cualquier zona de Terrallende', note: 'Hellfire Peninsula, Zangarmarsh, Nagrand (Lagos Sunspring/Forge), Terokkar Forest. Los peces se cocinan en platos de +20 stats. Busca \'Fishing Schools\' en el Minimap para obtener peces raros y recetas de vendor.', alt: 'Zangarmarsh: los pools de Figluster\'s Mudfish y Spotted Feltail son excelentes para Cocina' },
        ],
      },
    ],
  },
};
