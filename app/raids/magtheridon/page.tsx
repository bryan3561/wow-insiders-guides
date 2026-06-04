import { magtheridonBosses } from '@/data/magtheridon';
import { raidsMeta } from '@/data/raids-meta';
import RaidPage from '@/components/RaidPage';

export const metadata = {
  title: 'Guía de Guarida de Magtheridon — WoW TBC Classic en Español',
};

export default function MagtheridonPage() {
  const meta = raidsMeta.find((r) => r.id === 'magtheridon')!;
  return <RaidPage meta={meta} bosses={magtheridonBosses} />;
}
