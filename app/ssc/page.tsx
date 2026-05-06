import { sscBosses } from '@/data/ssc';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: "Guía de Caverna Serpentina — WoW TBC Classic en Español",
};

export default function SscPage() {
  const meta = raidsMeta.find((r) => r.id === 'ssc')!;
  return <RaidPage meta={meta} bosses={sscBosses} />;
}
