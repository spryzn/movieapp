"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return currentTheme === "dark" ? (
    <MdLightMode
      onClick={() => setTheme("light")}
      className="text-2xl cursor-pointer hover:text-amber-500 transition"
      title="Switch to Light Mode"
    />
  ) : (
    <MdDarkMode
      onClick={() => setTheme("dark")}
      className="text-2xl cursor-pointer hover:text-amber-500 transition"
      title="Switch to Dark Mode"
    />
  );
}
