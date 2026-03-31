import HeroSection from "@/app/components/section/Hero";
import SlidderSection from "@/app/components/section/Slidder";
import AboutSection from "@/app/components/section/About";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlidderSection />
      <AboutSection />
    </div>
  );
}
