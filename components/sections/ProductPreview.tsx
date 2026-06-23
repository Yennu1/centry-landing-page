"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCT_SCREENSHOTS } from "@/lib/constants";

export default function ProductPreview() {
  // Duplicate the set so the loop is seamless
  const items = [...PRODUCT_SCREENSHOTS, ...PRODUCT_SCREENSHOTS];

  return (
    <section className="relative w-full pt-28 pb-24 md:pt-36 md:pb-28 overflow-hidden">
      {/* Section label — letter-spaced */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex justify-center mb-16 md:mb-20"
      >
        <span className="text-[0.7rem] md:text-[0.8rem] font-semibold uppercase text-[#6B7499] [letter-spacing:0.4em] md:[letter-spacing:0.55em] pl-[0.4em] md:pl-[0.55em]">
          Product Preview
        </span>
      </motion.div>

      {/* Marquee row */}
      <div className="relative w-full">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#080B14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#080B14] to-transparent" />

        {/* Continuous scrolling track (left-to-right) */}
        <div className="marquee-ltr flex gap-5 md:gap-7 w-max">
          {items.map((shot, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[14rem] md:w-[18rem] aspect-[1918/876] rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 768px) 20rem, 34rem"
                className="object-cover object-left-top"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
