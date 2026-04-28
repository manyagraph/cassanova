import dynamic from 'next/dynamic';

export function generateStaticParams() {
  return [{ slug: '_' }];
}

export const dynamicParams = false;

const GameDetailClient = dynamic(() => import('./GameDetailClient'), { ssr: false });

export default function GameDetailPage() {
  return <GameDetailClient />;
}
