// ─────────────────────────────────────────────────────────────
// Semantic tokens
// These are what your components should reference.
// They map to CSS variables defined in globals.css.
// ─────────────────────────────────────────────────────────────

export const semanticTokens = {
  light: {
    bg: {
      primary:   "#FFFFFF",
      secondary: "#F7F7F5",
      tertiary:  "#EFEDEB",
      info:      "#E6F1FB",
      success:   "#EAF3DE",
      warning:   "#FAEEDA",
      danger:    "#FCEBEB",
    },
    text: {
      primary:   "#1A1A18",
      secondary: "#888780",
      tertiary:  "#D3D1C7",
      disabled:  "#B4B2A9",
      info:      "#0C447C",
      success:   "#27500A",
      warning:   "#633806",
      danger:    "#791F1F",
    },
    border: {
      tertiary: "rgba(239,237,232,0.15)",
      secondary: "rgba(211,209,199,0.30)",
      primary:   "rgba(136,135,128,0.40)",
      info:      "#378ADD",
      success:   "#639922",
      warning:   "#BA7517",
      danger:    "#E24B4A",
    },
  },
  dark: {
    bg: {
      primary:   "#1A1A18",
      secondary: "#3D3D3A",
      tertiary:  "#444441",
      info:      "#042C53",
      success:   "#173404",
      warning:   "#412402",
      danger:    "#501313",
    },
    text: {
      primary:   "#FFFFFF",
      secondary: "#B4B2A9",
      tertiary:  "#888780",
      disabled:  "#444441",
      info:      "#B5D4F4",
      success:   "#C0DD97",
      warning:   "#FAC775",
      danger:    "#F7C1C1",
    },
    border: {
      tertiary:  "rgba(136,135,128,0.15)",
      secondary: "rgba(211,209,199,0.30)",
      primary:   "rgba(180,178,169,0.40)",
      info:      "#378ADD",
      success:   "#639922",
      warning:   "#BA7517",
      danger:    "#E24B4A",
    },
  },
} as const;

export type SemanticMode = keyof typeof semanticTokens;
export type SemanticBg     = keyof typeof semanticTokens.light.bg;
export type SemanticText   = keyof typeof semanticTokens.light.text;
export type SemanticBorder = keyof typeof semanticTokens.light.border;
