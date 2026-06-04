import { notFound } from 'next/navigation';
import ClassGuidePage from '@/components/ClassGuidePage';
import { classGuides } from '@/data/clases-guias';
import { clasesMeta } from '@/data/clases-meta';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return clasesMeta.map((clase) => ({ id: clase.id }));
}

export function generateMetadata({ params }: Props) {
  const id = (params as any).id;
  const guide = classGuides[id];
  return {
    title: guide
      ? `${guide.name} Guide - WoW Resurgence Syndicate`
      : 'Class Not Found - WoW Resurgence Syndicate',
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const guide = classGuides[id];

  if (!guide) {
    notFound();
  }

  return <ClassGuidePage guide={guide} />;
}
