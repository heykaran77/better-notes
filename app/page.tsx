import Features from "@/components/features";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Features />
      <Testimonials />
      <FooterSection />
    </div>
  );
}
