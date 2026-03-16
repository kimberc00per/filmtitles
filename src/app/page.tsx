import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustLogos from "@/components/sections/TrustLogos";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ShowreelSection from "@/components/sections/ShowreelSection";
import ValueProps from "@/components/sections/ValueProps";
import StatsSection from "@/components/sections/StatsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustLogos />
        <ServicesGrid />
        <ShowreelSection />
        <ValueProps />
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
