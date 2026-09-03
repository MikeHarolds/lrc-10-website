import { type ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  as = "h2",
  className = "",
}: SectionHeadingProps) {
  const Title = as;
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "light" ? "text-white" : "text-green";
  const introColor = tone === "light" ? "text-cream/80" : "text-muted";

  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Title
        className={`text-display-sm sm:text-display-md ${titleColor}`}
      >
        {title}
      </Title>
      <span
        className="h-1 w-12 rounded-full bg-orange"
        aria-hidden="true"
      />
      {intro && (
        <p className={`text-base leading-relaxed sm:text-lg ${introColor}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
