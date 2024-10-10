"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./provider";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      case "system":
        setTheme(systemTheme === "light" ? "dark" : "light");
        break;
      default:
        break;
    }
  };

  const TOGGLE_THEME = () => {
    //@ts-ignore still not supported in many environments
    if (!document.startViewTransition) SWITCH();

    //@ts-ignore still not supported in many environments
    document.startViewTransition(SWITCH);
  };

  return (
    <Button
      onClick={TOGGLE_THEME}
      variant="ghost"
      size="sm"
      className="size-8 p-0 hover:bg-transparent"
    >
      <SunIcon
        size={18}
        strokeWidth={1.5}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <MoonIcon
        size={18}
        strokeWidth={1.5}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}