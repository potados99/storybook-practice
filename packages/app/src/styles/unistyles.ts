import { StyleSheet } from "react-native-unistyles";

const lightTheme = {
  colors: {
    background: "#ffffff",
    text: "#1a1a1a",
    primary: "#3b82f6",
    secondary: "#64748b",
    border: "#e2e8f0",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
};

type AppThemes = {
  light: typeof lightTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  settings: {
    initialTheme: "light",
  },
  themes: {
    light: lightTheme,
  },
});
