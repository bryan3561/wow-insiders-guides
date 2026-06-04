import { gruulBosses } from '@/data/gruul';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: 'Guía de Guarida de Gruul — WoW TBC Classic en Español',
};

export default function GruulPage() {
  const meta = raidsMeta.find((r) => r.id === 'gruul')!;
  return <RaidPage meta={meta} bosses={gruulBosses} />;
}
