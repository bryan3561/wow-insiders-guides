import { zulamanBosses } from '@/data/zulaman';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: "Guía de Zul'Aman — WoW TBC Classic en Español",
};

export default function ZulamanPage() {
  const meta = raidsMeta.find((r) => r.id === 'zulaman')!;
  return <RaidPage meta={meta} bosses={zulamanBosses} />;
}
