import { notFound } from 'next/navigation';
import ProfesionLevelingPage from '@/components/ProfesionLevelingPage';
import { profesionesMeta } from '@/data/profesiones-meta';
import { profLevelingGuides } from '@/data/profesiones-leveling';

export function generateStaticParams() {
  return profesionesMeta.map((p) => ({ id: p.id }));
}

export async function generateMetadata(props: PageProps<'/profesiones/[id]'>) {
  const { id } = await props.params;
  const meta = profesionesMeta.find((p) => p.id === id);

  if (!meta) {
    return {};
  }

  return {
    title: `Guía de ${meta.name} 1-375 — WoW TBC Classic en Español`,
    description: `Guía completa de subida de ${meta.name} del 1 al 375 para WoW TBC Classic. Materiales, pasos y consejos en español.`,
  };
}

export default async function ProfesionDetailPage(props: PageProps<'/profesiones/[id]'>) {
  const { id } = await props.params;
  const meta = profesionesMeta.find((p) => p.id === id);
  const guide = profLevelingGuides[id];

  if (!meta || !guide) {
    notFound();
  }

  return <ProfesionLevelingPage guide={guide} meta={meta} />;
}
