// constants/colors.js
const dark = {
  primary: "#006effff",
  background: "#242424",
  foreground: "#ffffffff",
  accent: "#6eadffff",
  muted: "#cfe8fffd",
  border: "#003c8aff",
  destructive: "#C62828",
};

const light = {
  primary: "#006effff",
  background: "#ffffffff",
  foreground: "#242424",
  accent: "#6eadffff",
  muted: "#cfe8fffd",
  border: "#003c8aff",
  destructive: "#C62828",
};

export const THEMES = {
  dark: dark,
  light: light,
};

// 👇 change this to switch theme
export const COLORS = THEMES.dark;