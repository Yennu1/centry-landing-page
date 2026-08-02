import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Personas from "@/components/sections/Personas";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#080B14]">
        <Hero />
        <Features />
        <Personas />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
