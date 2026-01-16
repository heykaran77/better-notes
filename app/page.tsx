import Features from "@/components/landing/features";
import FooterSection from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import Testimonials from "@/components/landing/testimonials";

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
