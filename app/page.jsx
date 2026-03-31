import HeroSection from "@/app/components/section/Hero";
import SlidderSection from "@/app/components/section/Slidder";
import AboutSection from "@/app/components/section/About";
import ProdcutsSection from "@/app/components/section/Products";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlidderSection />
      <AboutSection />
      <ProdcutsSection />
    </div>
  );
}
