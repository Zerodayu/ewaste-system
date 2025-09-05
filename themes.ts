// themes/colors.ts
const dark = {
  text: "#F4F4F5",      // Clean white text
  primary: "#06B6D4",   // Modern cyan
  secondary: "#3B82F6",  // Bright blue for tech feel
  background: "#18181B", // Deep gray background
  accent: "#22C55E",    // Fresh green
  destructive: "#EF4444", // Modern red
  black: "#09090B",
  white: "#FFFFFF",
};

const light = {
  text: "#27272A",      // Dark gray text
  primary: "#0EA5E9",   // Sky blue for primary
  secondary: "#2563EB", // Royal blue
  background: "#FAFAFA", // Ultra light gray
  accent: "#16A34A",    // Professional green
  destructive: "#DC2626", // Consistent red
  black: "#09090B",
  white: "#FFFFFF",
};

export const THEMES = {
  dark: dark,
  light: light,
};

// change this to switch themes
export const COLORS = THEMES.dark;