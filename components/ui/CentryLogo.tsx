import Image from "next/image";

interface CentryLogoProps {
  className?: string;
  markOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { mark: 24, text: "text-base" },
  md: { mark: 30, text: "text-lg" },
  lg: { mark: 38, text: "text-xl" },
};

export default function CentryLogo({
  className = "",
  markOnly = false,
  size = "md",
}: CentryLogoProps) {
  const { mark, text } = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo mark — transparent white mark on dark background */}
      <Image
        src="/images/centry-logo-mark.png"
        alt="Centry logo mark"
        width={mark}
        height={mark}
        className="object-contain"
        priority
      />
      {!markOnly && (
        <span
          className={`font-montserrat font-700 tracking-tight text-[#EEF0FF] ${text}`}
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          Centry
        </span>
      )}
    </div>
  );
}
