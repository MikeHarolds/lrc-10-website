type SealProps = { className?: string };

/** Compact "10 Years" anniversary seal used in the hero and legacy section. */
export default function AnniversarySeal({ className = "" }: SealProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label="Ten years"
    >
      <circle cx="48" cy="48" r="46" fill="none" stroke="#C89B3C" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="40" fill="none" stroke="#C89B3C" strokeWidth="3" strokeDasharray="2 4" />
      <text
        x="48"
        y="45"
        textAnchor="middle"
        fontFamily="Montserrat, sans-serif"
        fontWeight="800"
        fontSize="34"
        fill="#C89B3C"
      >
        10
      </text>
      <text
        x="48"
        y="64"
        textAnchor="middle"
        fontFamily="Manrope, sans-serif"
        fontWeight="700"
        fontSize="10"
        letterSpacing="3"
        fill="#C89B3C"
      >
        YEARS
      </text>
    </svg>
  );
}
