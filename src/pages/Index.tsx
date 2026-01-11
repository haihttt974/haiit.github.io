import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoryGrid />
      <FeaturedPosts />
      <FeaturedProjects />
    </Layout>
  );
};

export default Index;
