import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProductPreview from "@/components/sections/ProductPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden bg-[#080B14]">
        <div className="max-w-[1440px] mx-auto">
          <Hero />
        </div>

        <ProductPreview />

        {/* Sections below are built in upcoming increments */}
        <div className="h-[30vh]" />
      </main>
    </>
  );
}
