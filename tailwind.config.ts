// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Gold System
        primary: {
          DEFAULT: "#D4AF37", // Metallic Gold
          dark: "#B8962E",
          light: "#FDE047",
        },
        // Secondary & Accent colors extracted from button
        secondary: {
          DEFAULT: "#262626", // Dark Charcoal
          dark: "#171717",
          light: "#404040",
        },
        // Gradient accents incorporating Sky Blue mix
        accent: {
          violet: "#D4AF37", // Mapped to Gold
          pink: "#0EA5E9",   // Sky Blue
          cyan: "#38BDF8",   // Light Sky Blue
          green: "#EAB308",  // Yellow highlight
        },
        // Dark background scale
        darkbg: {
          primary: "#0B0F19",
          secondary: "#111827",
          tertiary: "#1F2937",
        },
        // Text hierarchy for dark mode
        darktext: {
          primary: "#F9FAFB",
          secondary: "#D1D5DB",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #D4AF37, #0EA5E9)",
        "gradient-full": "linear-gradient(135deg, #D4AF37, #FDE047, #0EA5E9)",
        "glow-top": "radial-gradient(circle at top, rgba(212,175,55,0.2), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
