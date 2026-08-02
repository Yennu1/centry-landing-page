"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface FeatureRowProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  reverse?: boolean;
}

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

export default function FeatureRow({
  eyebrow,
  title,
  description,
  image,
  alt,
  width,
  height,
  reverse = false,
}: FeatureRowProps) {
  const textFromX = reverse ? 40 : -40;
  const imageFromX = reverse ? -40 : 40;

  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10 md:gap-16`}
    >
      <motion.div
        initial={{ opacity: 0, x: textFromX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="w-full md:w-[36%] shrink-0"
      >
        <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-[#7B93F5] uppercase mb-4">
          {eyebrow}
        </p>
        <h3
          className="text-[1.5rem] md:text-[1.75rem] leading-[1.15] text-[#EEF0FF] mb-5"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
        >
          {title}
        </h3>
        <p className="text-[0.92rem] leading-[1.75] text-[#8B92B0] max-w-[30rem]">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: imageFromX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
        className="w-full md:flex-1 group relative"
      >
        <div
          className="absolute -inset-6 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(79,107,237,0.35) 0%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.4, ease: easeOut }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto block"
            sizes="(min-width: 768px) 60vw, 100vw"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
