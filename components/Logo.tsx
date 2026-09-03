type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  /** Show the ImpactField parent wordmark alongside the LRC identity. */
  lockup?: boolean;
};

/**
 * Brand lockup — "ImpactField" parent wordmark + the LRC 10.0 conference
 * identity, so the header/footer read as *ImpactField presents LRC 10.0*.
 */
export default function Logo({
  tone = "dark",
  className = "",
  lockup = true,
}: LogoProps) {
  const primary = tone === "light" ? "text-white" : "text-green";
  const sub = tone === "light" ? "text-white/55" : "text-muted";
  const rule = tone === "light" ? "bg-white/20" : "bg-green/15";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {lockup && (
        <>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-[15px] font-extrabold tracking-tight ${primary}`}>
              Impact<span className="text-orange">Field</span>
            </span>
            <span className={`mt-1 text-[8px] font-bold uppercase tracking-[0.24em] ${sub}`}>
              Presents
            </span>
          </span>
          <span className={`h-8 w-px ${rule}`} aria-hidden="true" />
        </>
      )}
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-tight ${primary}`}>
          LRC <span className="text-gold">10.0</span>
        </span>
        <span className={`mt-1 text-[8px] font-bold uppercase tracking-[0.22em] ${sub}`}>
          Leadership Rebirth Conference
        </span>
      </span>
    </span>
  );
}
