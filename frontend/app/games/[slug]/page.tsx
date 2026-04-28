import GameDetailClient from './GameDetailClient';

export function generateStaticParams() {
  return [{ slug: '_' }];
}

export const dynamicParams = false;

export default function GameDetailPage() {
  return <GameDetailClient />;
}
