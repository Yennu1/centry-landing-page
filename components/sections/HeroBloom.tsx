export default function HeroBloom() {
  return (
    <div className="absolute inset-x-0 w-full pointer-events-none overflow-hidden" style={{ top: "200px", bottom: 0 }}>
      {/* ── Layered bloom glows anchored to the bottom, only top curve visible above the fold ── */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        {/* Widest, softest navy base glow */}
        <svg
          className="absolute bottom-[-8rem] left-1/2 -translate-x-1/2 w-[140%] max-w-none pointer-events-none"
          viewBox="0 0 1409 691"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g filter="url(#bloom_blur_navy)">
            <path
              d="M1501 104C1501 104 1017.12 434 704.5 434C391.882 434 -92 104 -92 104V802C-92 802 393.447 452 704.5 452C1015.55 452 1501 802 1501 802V104Z"
              fill="#1B2352"
            />
          </g>
          <defs>
            <filter
              id="bloom_blur_navy"
              x="-196"
              y="0"
              width="1801"
              height="906"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>

        {/* Mid accent-blue glow */}
        <svg
          className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 w-[130%] max-w-none pointer-events-none"
          viewBox="0 0 1409 546"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g filter="url(#bloom_blur_accent)">
            <path
              d="M1501 34C1501 34 1017.12 274 704.5 274C391.882 274 -92 44 -92 44V572C-92 572 393.447 312 704.5 312C1015.55 312 1501 582 1501 582V34Z"
              fill="#4F6BED"
              fillOpacity="0.55"
            />
          </g>
          <defs>
            <filter
              id="bloom_blur_accent"
              x="-126"
              y="0"
              width="1661"
              height="616"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="38" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>

        {/* Brightest, tightest highlight ridge */}
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] max-w-none pointer-events-none"
          viewBox="0 0 1409 395"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g filter="url(#bloom_blur_highlight)">
            <path
              d="M1501 24C1501 24 1017.12 180.935 704.5 180.935C391.882 180.935 -92 24 -92 24V371C-92 371 393.447 179.191 704.5 179.191C1015.55 179.191 1501 371 1501 371V24Z"
              fill="#A8B9FF"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="bloom_blur_highlight"
              x="-116"
              y="0"
              width="1641"
              height="395"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="22" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>

        {/* Central luminous core — breathes via bloom-pulse */}
        <div
          className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 w-[55%] h-[22rem] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(120,150,255,0.45) 0%, rgba(79,107,237,0.25) 35%, transparent 70%)",
            animation: "bloom-pulse 6s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
