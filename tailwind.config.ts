import type { Config } from "tailwindcss";

/**
 * Design tokens follow the ImpactField brand system (impactfield.com.ng,
 * Elementor global kit 8): ink #020D19, Inter/Onest, pill buttons, 1300px
 * container. The LRC 10.0 conference identity layered on top is a premium
 * blue + white system inspired by a previous LRC edition's flyer artwork —
 * see the `blue` scale below. ImpactField's own verified brand orange
 * (`ifOrange`) is kept for exactly one use: the "ImpactField" wordmark itself.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        // ImpactField ink — the dominant brand colour (headings, header, footer,
        // dark sections). Kept under the `green` key so existing `text-green` /
        // `bg-green` usages inherit the ImpactField identity automatically.
        green: {
          DEFAULT: "#020D19",
          50: "#F1F2F4",
          100: "#DDE0E4",
          600: "#0A1826",
          700: "#071320",
          800: "#050E19",
          900: "#030A13",
          deep: "#01060D",
        },
        ink: {
          DEFAULT: "#020D19",
          soft: "#0A1826",
          line: "#1C2733",
        },
        /**
         * LRC 10.0 conference blue — extracted from a previous edition's flyer
         * (deep navy → royal blue → bright cyan-blue gradient) and translated
         * into a clean, modern system. Roles:
         *   DEFAULT (primary) — buttons, links, accents on WHITE surfaces
         *   dark              — hover/pressed state for primary-blue fills
         *   bright            — accents/highlights/gradients on DARK (navy) surfaces
         *   royal             — deep royal-blue foundation for "stronger colour"
         *                       sections (Five Worlds)
         *   light / soft      — subtle tint surfaces and hover backgrounds on white
         */
        blue: {
          DEFAULT: "#1554F2",
          dark: "#0E3FC4",
          bright: "#3E7BFA",
          royal: "#0B1D63",
          light: "#EAF1FE",
          soft: "#D6E4FB",
        },
        /** ImpactField's own verified brand accent — reserved for the literal
         *  "ImpactField" wordmark (Logo.tsx, Preloader.tsx) only. Never used as
         *  an LRC UI accent. */
        ifOrange: "#FF6D00",
        // Neutral alt surface (was "cream")
        cream: {
          DEFAULT: "#F5F5F4",
          dark: "#ECECEA",
        },
        sand: "#F8F8F8",
        muted: "#828282",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-onest)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(2.25rem, 5.4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["clamp(1.9rem, 4vw, 2.9rem)", { lineHeight: "1.18", letterSpacing: "-0.015em", fontWeight: "700" }],
        "display-sm": ["clamp(1.55rem, 2.6vw, 2rem)", { lineHeight: "1.22", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        card: "16px",
        pill: "100px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(2, 13, 25, 0.04), 0 14px 34px -14px rgba(2, 13, 25, 0.12)",
        "card-hover": "0 2px 4px rgba(2, 13, 25, 0.06), 0 24px 48px -16px rgba(2, 13, 25, 0.2)",
        panel: "0 30px 80px -24px rgba(1, 6, 13, 0.55)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
