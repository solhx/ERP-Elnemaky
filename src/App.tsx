import React from "react";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { useTheme } from "@/hooks/useTheme";
import "@/styles/globals.css";

// ── Temp dev placeholder — replace with your router / layout ──
function DevPlaceholder() {
  const { theme, toggleTheme, language, setLanguage } = useTheme();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-4)",
        background: "var(--bg-primary)",
        fontFamily: language === "ar" ? "var(--font-ar)" : "var(--font-en)",
      }}
    >
      <h1 style={{ font: "var(--text-h2)", color: "var(--text-primary)" }}>
        ElNamaky ERP
      </h1>
      <p style={{ font: "var(--text-body)", color: "var(--text-secondary)" }}>
        Design system ready. Start building. 🚀
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 20px",
            borderRadius: "var(--radius-pill)",
            border: "1px solid var(--border-primary)",
            color: "var(--text-primary)",
            font: "var(--text-body)",
          }}
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
        <button
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          style={{
            padding: "8px 20px",
            borderRadius: "var(--radius-pill)",
            border: "1px solid var(--border-primary)",
            color: "var(--text-primary)",
            font: "var(--text-body)",
          }}
        >
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <DevPlaceholder />
    </ThemeProvider>
  );
}
