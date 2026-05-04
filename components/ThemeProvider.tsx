"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Suppress the specific React 19+ warning about next-themes inline script tags
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const origError = console.error;
  window.console.error = (...args: any[]) => {
    if (typeof args[0] === "string" && args[0].includes("Encountered a script tag")) {
      return;
    }
    origError.apply(console, args);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>{children}</NextThemesProvider>;
}
