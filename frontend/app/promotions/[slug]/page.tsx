import PromotionDetailClient from './PromotionDetailClient';

export function generateStaticParams() {
  return [{ slug: '_' }];
}

export const dynamicParams = false;

export default function PromotionDetailPage() {
  return <PromotionDetailClient />;
}
