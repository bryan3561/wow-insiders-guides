import { blackTempleBosses } from '@/data/black-temple';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: 'Guía del Templo Oscuro — WoW TBC Classic en Español',
};

export default function BlackTemplePage() {
  const meta = raidsMeta.find((r) => r.id === 'black-temple')!;
  return <RaidPage meta={meta} bosses={blackTempleBosses} />;
}
