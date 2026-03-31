import HeroSection from "@/app/components/section/Hero";
import SlidderSection from "@/app/components/section/Slidder";
import AboutSection from "@/app/components/section/About";
import ProdcutsSection from "@/app/components/section/Products";
import FeaturesSection from "@/app/components/section/Features";
import SocialSection from "@/app/components/section/Social";
import CTASection from "@/app/components/section/Cta";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlidderSection />
      <AboutSection />
      <ProdcutsSection />
      <FeaturesSection />
      <SocialSection />
      <CTASection />
    </div>
  );
}
