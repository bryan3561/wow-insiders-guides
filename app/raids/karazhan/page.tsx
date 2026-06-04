import { karazhanBosses } from '@/data/karazhan';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: 'Guía de Karazhan — WoW TBC Classic en Español',
  description: 'Guía completa de todos los jefes de Karazhan para WoW TBC Classic en español.',
};

export default function KarazhanPage() {
  const meta = raidsMeta.find((r) => r.id === 'karazhan')!;
  return <RaidPage meta={meta} bosses={karazhanBosses} />;
}
