import { mountHyjalBosses } from '@/data/mount-hyjal';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: 'Guía de Monte Hyjal — WoW TBC Classic en Español',
};

export default function MountHyjalPage() {
  const meta = raidsMeta.find((r) => r.id === 'mount-hyjal')!;
  return <RaidPage meta={meta} bosses={mountHyjalBosses} />;
}
