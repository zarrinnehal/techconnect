import { HomePageHero, CategoriesSection, TrendingDiscussions, CommunitySpotlight } from '@/components/home-sections';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <HomePageHero />
      <CategoriesSection />
      <TrendingDiscussions />
      <CommunitySpotlight />
    </div>
  );
}
