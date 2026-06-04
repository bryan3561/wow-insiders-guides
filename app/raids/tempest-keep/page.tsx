import { tempestKeepBosses } from '@/data/tempest-keep';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: 'Guía de Bastión del Crepúsculo — WoW TBC Classic en Español',
};

export default function TempestKeepPage() {
  const meta = raidsMeta.find((r) => r.id === 'tempest-keep')!;
  return <RaidPage meta={meta} bosses={tempestKeepBosses} />;
}
