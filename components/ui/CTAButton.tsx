import { type ComponentType } from "react";
import { Diamond, SquarePen, HeartHandshake, ArrowRight } from "lucide-react";

export type CTAVariant = "primary" | "secondary" | "tertiary";
export type CTASurface = "dark" | "light";
export type CTAIcon = "register" | "ticket" | "partner" | "arrow" | "none";

const iconMap: Record<Exclude<CTAIcon, "none">, ComponentType<{ className?: string }>> = {
  register: SquarePen,
  ticket: Diamond,
  partner: HeartHandshake,
  arrow: ArrowRight,
};

const base =
  "group inline-flex items-center gap-3 rounded-pill px-6 py-3.5 min-h-[54px] font-semibold " +
  "transition-all duration-200 ease-out-soft focus-visible:outline-offset-4 " +
  "hover:-translate-y-0.5 active:translate-y-0";

const styles: Record<CTASurface, Record<CTAVariant, string>> = {
  dark: {
    primary: "bg-orange text-white shadow-[0_12px_30px_-12px_rgba(255,109,0,0.6)] hover:bg-orange-dark",
    secondary: "bg-white text-green shadow-[0_12px_30px_-14px_rgba(255,255,255,0.35)] hover:bg-cream",
    tertiary: "bg-white/5 text-white border border-white/30 hover:border-white/60 hover:bg-white/10",
  },
  light: {
    primary: "bg-orange text-white shadow-[0_12px_30px_-12px_rgba(255,109,0,0.5)] hover:bg-orange-dark",
    secondary: "bg-green text-white shadow-[0_12px_30px_-16px_rgba(2,13,25,0.6)] hover:bg-green-600",
    tertiary: "bg-white text-green border border-green/20 hover:border-green/40 hover:bg-cream",
  },
};

const iconTint: Record<CTASurface, Record<CTAVariant, string>> = {
  dark: {
    primary: "border-white/40 text-white",
    secondary: "border-green/20 text-orange",
    tertiary: "border-white/35 text-white",
  },
  light: {
    primary: "border-white/40 text-white",
    secondary: "border-white/30 text-orange",
    tertiary: "border-green/25 text-orange",
  },
};

type CTAButtonProps = {
  href: string;
  label: string;
  sublabel?: string;
  variant?: CTAVariant;
  surface?: CTASurface;
  icon?: CTAIcon;
  className?: string;
  fullWidth?: boolean;
};

export default function CTAButton({
  href,
  label,
  sublabel,
  variant = "primary",
  surface = "dark",
  icon = "none",
  className = "",
  fullWidth = false,
}: CTAButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  const Icon = icon !== "none" ? iconMap[icon] : null;

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles[surface][variant]} ${fullWidth ? "w-full justify-center sm:w-auto sm:justify-start" : ""} ${className}`}
    >
      {Icon && (
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${iconTint[surface][variant]}`}
          aria-hidden="true"
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
      )}
      <span className="flex flex-col text-left leading-tight">
        <span className="whitespace-nowrap text-sm uppercase tracking-[0.06em] sm:text-[15px]">
          {label}
        </span>
        {sublabel && (
          <span className="text-[12px] font-medium opacity-70">{sublabel}</span>
        )}
      </span>
    </a>
  );
}
