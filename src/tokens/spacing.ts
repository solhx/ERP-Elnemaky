// ─────────────────────────────────────────────────────────────
// Spacing
// ─────────────────────────────────────────────────────────────
export const spacing = {
  1:  "4px",
  2:  "8px",
  3:  "12px",
  4:  "16px",
  6:  "24px",
  8:  "32px",
  12: "48px",
  16: "64px",
} as const;
export type SpacingKey = keyof typeof spacing;

// ─────────────────────────────────────────────────────────────
// Border Radius
// ─────────────────────────────────────────────────────────────
export const radius = {
  sm:   "4px",
  md:   "8px",
  lg:   "12px",
  xl:   "16px",
  pill: "99px",
} as const;
export type RadiusKey = keyof typeof radius;

// ─────────────────────────────────────────────────────────────
// Elevation — box-shadow values
// ─────────────────────────────────────────────────────────────
export const elevation = {
  0: "none",
  1: "0px 1px 2px rgba(0,0,0,0.06), 0px 1px 3px rgba(0,0,0,0.10)",
  2: "0px 2px 4px rgba(0,0,0,0.06), 0px 4px 6px rgba(0,0,0,0.10)",
  3: "0px 10px 15px rgba(0,0,0,0.10), 0px 4px 6px rgba(0,0,0,0.05)",
} as const;
export type ElevationLevel = keyof typeof elevation;

// ─────────────────────────────────────────────────────────────
// Typography
// ─────────────────────────────────────────────────────────────
export const fontFamily = {
  en: "'DM Sans', sans-serif",
  ar: "'Cairo', sans-serif",
} as const;

export const fontSize = {
  display: "48px",
  h1:      "36px",
  h2:      "28px",
  h3:      "22px",
  h4:      "18px",
  bodyLg:  "16px",
  body:    "14px",
  caption: "12px",
  label:   "11px",
} as const;

export const fontWeight = {
  regular:    400,
  medium:     500,
  semiBold:   600,
  bold:       700,
} as const;

export const lineHeight = {
  tight:   "1.1",
  snug:    "1.2",
  normal:  "1.5",
  relaxed: "1.6",
  loose:   "1.8",
} as const;

export type FontSizeKey  = keyof typeof fontSize;
export type FontWeightKey = keyof typeof fontWeight;
