// themes/colors.ts
const dark = {
  text: "#E2E8F0",
  primary: "#00b3c0",    // Bright cyan for primary actions
  secondary: "#6B46C1",  // Deep purple for secondary elements
  background: "#0F172A", // Dark blue-gray background
  accent: "#10B981",     // Emerald green for accents
  destructive: "#DC2626", // Bright red for destructive actions
  black: "#000000",
  white: "#ffffff",
};

const light = {
  text: "#1E293B",
  primary: "#0891B2",    // Cyan for primary actions
  secondary: "#7C3AED",  // Vibrant purple for secondary elements
  background: "#F8FAFC", // Clean light background
  accent: "#059669",     // Modern green for accents
  destructive: "#DC2626", // Consistent red for destructive actions
  black: "#000000",
  white: "#ffffff",
};

export const THEMES = {
  dark: dark,
  light: light,
};

// change this to switch themes
export const COLORS = THEMES.dark;