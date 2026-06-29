import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#080B14]">
        <div className="max-w-[1440px] mx-auto">
          <Hero />
        </div>
        <Features />
      </main>
    </>
  );
}
