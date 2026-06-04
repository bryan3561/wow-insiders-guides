export interface ProfesionMeta {
  id: string;
  name: string;
  category: 'primaria' | 'secundaria';
  type: 'crafting' | 'gathering' | 'support';
  description: string;
  icon: string;
  color: string;
  border: string;
  highlight: string; // beneficio principal en TBC
}

export const profesionesMeta: ProfesionMeta[] = [
  // Primarias - Crafting
  { id: 'alquimia', name: 'Alquimia', category: 'primaria', type: 'crafting', description: 'Crea pociones, elixires y transmutaciones. Indispensable en raids por los beneficios de Master Alchemist.', icon: 'trade_alchemy', color: 'from-purple-900/60 to-violet-950/60', border: 'border-purple-700/50', highlight: 'Pociones de batalla y transmutaciones de gemas' },
  { id: 'herreria', name: 'Herrería', category: 'primaria', type: 'crafting', description: 'Forja armaduras y armas de metal. Permite crear socketed gear exclusivo y las legendarias llaves de Karazhan.', icon: 'trade_blacksmithing', color: 'from-gray-800/60 to-slate-950/60', border: 'border-gray-500/50', highlight: 'Llave de forjado y gear con sockets extra' },
  { id: 'encantamiento', name: 'Encantamiento', category: 'primaria', type: 'crafting', description: 'Encanta equipamiento con estadísticas adicionales. Única profesión que puede encantarse los propios anillos.', icon: 'trade_engraving', color: 'from-pink-900/60 to-rose-950/60', border: 'border-pink-700/50', highlight: 'Encantamientos de anillos exclusivos' },
  { id: 'ingenieria', name: 'Ingeniería', category: 'primaria', type: 'crafting', description: 'Construye gadgets, bombas y el icónico Turbo-Charged Flying Machine. La profesión más divertida y versátil de TBC.', icon: 'trade_engineering', color: 'from-yellow-900/60 to-amber-950/60', border: 'border-yellow-600/50', highlight: 'Googles épicos y cohetes de combate' },
  { id: 'joyeria', name: 'Joyería', category: 'primaria', type: 'crafting', description: 'Nueva profesión de TBC. Talla gemas para sockets y puede usar Trinkets exclusivos de joyero con estadísticas superiores.', icon: 'inv_misc_gem_01', color: 'from-cyan-900/60 to-teal-950/60', border: 'border-cyan-600/50', highlight: 'Gemas de joyero y trinkets únicos' },
  { id: 'peleteria', name: 'Peletería', category: 'primaria', type: 'crafting', description: 'Fabrica armaduras de cuero y tela especial. Los peleteros pueden añadir parches de estatísticas a sus piezas de cuero/mail.', icon: 'trade_leatherworking', color: 'from-orange-900/60 to-amber-950/60', border: 'border-orange-700/50', highlight: 'Parches de brazo exclusivos para portadores' },
  { id: 'costura', name: 'Costura', category: 'primaria', type: 'crafting', description: 'Crea prendas de tela de alto nivel. Los tres sets de tela de TBC (Primal Mooncloth, Shadowcloth, Spellcloth) son BiS para casters.', icon: 'trade_tailoring', color: 'from-blue-900/60 to-indigo-950/60', border: 'border-blue-700/50', highlight: 'Sets de tela BiS y alfombras voladoras' },
  // Primarias - Gathering
  { id: 'mineria', name: 'Minería', category: 'primaria', type: 'gathering', description: 'Extrae minerales y piedras preciosas del mundo. Alimenta a Herrería, Joyería e Ingeniería con sus materiales base.', icon: 'trade_mining', color: 'from-stone-900/60 to-gray-950/60', border: 'border-stone-600/50', highlight: 'Primal Fire/Earth y gemas sin cortar' },
  { id: 'herboristeria', name: 'Herboristería', category: 'primaria', type: 'gathering', description: 'Recoge hierbas medicinales por todo Terrallende. Principal fuente de materiales para Alquimia y algo de Inscripción.', icon: 'trade_herbalism', color: 'from-green-900/60 to-emerald-950/60', border: 'border-green-700/50', highlight: 'Hierbas para pociones de raid' },
  { id: 'desollar', name: 'Desollar', category: 'primaria', type: 'gathering', description: 'Obtiene pieles y cueros de bestias cazadas. Proporciona materiales para Peletería y genera Knothide Leather para venta.', icon: 'inv_misc_pelt_wolf_01', color: 'from-lime-900/60 to-green-950/60', border: 'border-lime-700/50', highlight: 'Primal Nether indirecto y cuero épico' },
  // Secundarias
  { id: 'cocina', name: 'Cocina', category: 'secundaria', type: 'support', description: 'Prepara comida que otorga buffs de combate. Las comidas de TBC dan estadísticas significativas y son esenciales en progreso.', icon: 'inv_misc_food_15', color: 'from-red-900/60 to-rose-950/60', border: 'border-red-700/50', highlight: 'Comida de +20 stats para raids' },
  { id: 'primeros-auxilios', name: 'Primeros Auxilios', category: 'secundaria', type: 'support', description: 'Fabrica vendajes de tela para curarse fuera de combate. Útil para clases sin autocuración en contenido difícil.', icon: 'spell_holy_sealofsacrifice', color: 'from-teal-900/60 to-cyan-950/60', border: 'border-teal-700/50', highlight: 'Vendajes de Netherweave y Frostweave' },
  { id: 'pesca', name: 'Pesca', category: 'secundaria', type: 'support', description: 'Pesca en ríos, lagos y costas de Terrallende. Proporciona ingredientes para Cocina y ciertos reagentes de Alquimia.', icon: 'trade_fishing', color: 'from-sky-900/60 to-blue-950/60', border: 'border-sky-700/50', highlight: 'Ingredientes para comidas de raid' },
];
