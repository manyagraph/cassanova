import dynamic from 'next/dynamic';

export function generateStaticParams() {
  return [{ slug: '_' }];
}

export const dynamicParams = false;

const PromotionDetailClient = dynamic(() => import('./PromotionDetailClient'), { ssr: false });

export default function PromotionDetailPage() {
  return <PromotionDetailClient />;
}
