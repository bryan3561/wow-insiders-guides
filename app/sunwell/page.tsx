import { sunwellBosses } from '@/data/sunwell';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: 'Guía de Meseta de Pozo del Sol — WoW TBC Classic en Español',
};

export default function SunwellPage() {
  const meta = raidsMeta.find((r) => r.id === 'sunwell')!;
  return <RaidPage meta={meta} bosses={sunwellBosses} />;
}
