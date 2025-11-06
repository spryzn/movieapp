"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeCom({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
