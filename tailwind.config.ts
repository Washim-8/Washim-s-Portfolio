// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#F3F4F1",
          surface: "#F7F8F6",
          elevated: "#FFFFFF",
        },
        coral: {
          DEFAULT: "#00BFE8",
          hover: "#00A8CF",
          soft: "#CCEFF9",
          muted: "#7DD3FC",
        },
        cyan: {
          DEFAULT: "#1CE0FD",
          light: "#6AECFC",
          soft: "#A5EBFB",
          pale: "#CCEFF9",
        },
        robot: {
          white: "#FDFDFD",
          silver: "#C6CBD6",
          dark: "#050C1A",
          navy: "#07131F",
          display: "#141A23",
        },
        text: {
          main: "#202225",
          sub: "#5F6368",
          dim: "#85898E",
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
