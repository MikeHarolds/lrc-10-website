import Image from "next/image";
import type { CSSProperties } from "react";
import { ImageIcon } from "lucide-react";
import type { ImageAsset } from "@/data/conference";

type SectionImageProps = {
  asset: ImageAsset;
  /** Responsive `sizes` hint for next/image. */
  sizes?: string;
  /** Extra classes for the <img> / placeholder root. */
  className?: string;
  /** Rounded corners on the placeholder (match the surrounding card). */
  rounded?: boolean;
};

/** Object-position is applied via CSS vars so it can differ per breakpoint
 *  (see `.section-img` in globals.css). */
function positionStyle(asset: ImageAsset): CSSProperties {
  const style: Record<string, string> = {};
  if (asset.position) style["--op"] = asset.position;
  if (asset.positionMobile) style["--op-mobile"] = asset.positionMobile;
  return style as CSSProperties;
}

/**
 * Renders a supplied image via next/image, or an intentional branded placeholder
 * that preserves the layout box while the real asset is awaited. Never crops or
 * distorts: images use `object-cover` + a configurable `object-position`.
 */
export default function SectionImage({
  asset,
  sizes,
  className = "",
  rounded = false,
}: SectionImageProps) {
  if (asset.src) {
    const common = {
      src: asset.src,
      alt: asset.alt,
      priority: asset.priority,
      sizes: sizes ?? "100vw",
      style: positionStyle(asset),
    };

    if (asset.render === "fill") {
      return (
        <Image
          {...common}
          fill
          className={`section-img object-cover ${className}`}
        />
      );
    }
    return (
      <Image
        {...common}
        width={asset.width}
        height={asset.height}
        className={`section-img h-auto w-full object-cover ${className}`}
      />
    );
  }

  // ---- Placeholder ---------------------------------------------------------
  const ratioStyle: CSSProperties = {
    aspectRatio: asset.ratio.replace("/", " / "),
  };

  if (asset.render === "fill") {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-green-800 ${className}`}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <span className="absolute right-3 top-3 rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">
          {asset.placeholderLabel} · {asset.width}×{asset.height}
        </span>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${asset.placeholderLabel} — image to be supplied`}
      className={`flex w-full flex-col items-center justify-center gap-3 border border-dashed border-green/20 bg-cream p-6 text-center ${
        rounded ? "rounded-card" : ""
      } ${className}`}
      style={ratioStyle}
    >
      <span className="grid h-12 w-12 place-items-center rounded-full bg-green text-white">
        <ImageIcon className="h-6 w-6" />
      </span>
      <span className="font-display text-sm font-bold uppercase tracking-[0.14em] text-green">
        {asset.placeholderLabel}
      </span>
      <span className="text-xs text-muted">
        Awaiting asset · {asset.ratio.replace("/", ":")} · {asset.width}×
        {asset.height}
      </span>
    </div>
  );
}
