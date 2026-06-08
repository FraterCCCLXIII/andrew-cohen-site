export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  applyTheme(theme);
}
