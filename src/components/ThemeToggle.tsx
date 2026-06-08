"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import {
  getStoredTheme,
  setTheme,
  type Theme,
} from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    setThemeState(getStoredTheme());
  }, []);

  function selectTheme(next: Theme) {
    setThemeState(next);
    setTheme(next);
  }

  return (
    <div
      className="inline-flex items-center rounded-md border border-border bg-surface-elevated p-0.5"
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        onClick={() => selectTheme("dark")}
        aria-pressed={theme === "dark"}
        className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs transition-colors duration-200 ${
          theme === "dark"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        <Moon size={14} weight={theme === "dark" ? "fill" : "regular"} />
        Dark
      </button>
      <button
        type="button"
        onClick={() => selectTheme("light")}
        aria-pressed={theme === "light"}
        className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-xs transition-colors duration-200 ${
          theme === "light"
            ? "bg-foreground text-background"
            : "text-muted hover:text-foreground"
        }`}
      >
        <Sun size={14} weight={theme === "light" ? "fill" : "regular"} />
        Light
      </button>
    </div>
  );
}
