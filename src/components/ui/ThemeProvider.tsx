import React from "react";
import { ThemeContext, useThemeState } from "@/hooks/useTheme";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const value = useThemeState();
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
