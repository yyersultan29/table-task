import { createContext } from "react";

export interface ThemeContextValues {
  theme: {
    background: string;
    text: string
  },
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValues>({
  theme: {
    background: "#fff",
    text: "#333"
  },
  toggleTheme: () => { }
});


