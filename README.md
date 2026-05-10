# ElNamaky ERP

React + TypeScript project scaffold with the full design system wired in.

## Quick Start

```bash
npm install
npm run dev
```

---

## Project Structure

```
src/
├── tokens/
│   ├── colors.ts      # Primitive color scales (blue, red, green…)
│   ├── semantic.ts    # Semantic tokens (bg, text, border) for light + dark
│   ├── spacing.ts     # Spacing, radius, elevation, typography
│   └── index.ts       # Barrel export
│
├── styles/
│   └── globals.css    # All tokens as CSS custom properties + base reset
│
├── hooks/
│   └── useTheme.ts    # useTheme() hook — theme, language, direction
│
├── components/
│   └── ui/
│       └── ThemeProvider.tsx
│
├── lib/
│   └── cn.ts          # Class name utility
│
├── types/
│   └── index.ts       # Shared TypeScript types
│
├── App.tsx
└── main.tsx
```

---

## Using Tokens in Components

### CSS Variables (recommended)

```tsx
// In inline styles or CSS modules — always use the semantic vars
<div style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }} />
```

### TypeScript token objects (for logic / dynamic values)

```tsx
import { colorScales, semanticTokens } from "@/tokens";

// Primitive scale
const brandBlue = colorScales.blue[600]; // "#185FA5"

// Semantic (pick correct mode)
const { theme } = useTheme();
const bgColor = semanticTokens[theme].bg.primary;
```

---

## Semantic Token Reference

### Backgrounds — `--bg-*`
| Token              | Light       | Dark        | Use for                     |
|--------------------|-------------|-------------|-----------------------------|
| `--bg-primary`     | `#FFFFFF`   | `#1A1A18`   | Page / main surface         |
| `--bg-secondary`   | `#F7F7F5`   | `#3D3D3A`   | Sidebar, cards              |
| `--bg-tertiary`    | `#EFEDEB`   | `#444441`   | Inputs, nested surfaces     |
| `--bg-info`        | `#E6F1FB`   | `#042C53`   | Info banners                |
| `--bg-success`     | `#EAF3DE`   | `#173404`   | Success states              |
| `--bg-warning`     | `#FAEEDA`   | `#412402`   | Warning banners             |
| `--bg-danger`      | `#FCEBEB`   | `#501313`   | Error / danger states       |

### Text — `--text-*`
| Token               | Light       | Dark        | Use for                     |
|---------------------|-------------|-------------|-----------------------------|
| `--text-primary`    | `#1A1A18`   | `#FFFFFF`   | Headings, main body         |
| `--text-secondary`  | `#888780`   | `#B4B2A9`   | Subtitles, meta             |
| `--text-tertiary`   | `#D3D1C7`   | `#888780`   | Placeholders                |
| `--text-disabled`   | `#B4B2A9`   | `#444441`   | Disabled labels             |
| `--text-info`       | `#0C447C`   | `#B5D4F4`   | Info text                   |
| `--text-success`    | `#27500A`   | `#C0DD97`   | Success text                |
| `--text-warning`    | `#633806`   | `#FAC775`   | Warning text                |
| `--text-danger`     | `#791F1F`   | `#F7C1C1`   | Error text                  |

### Borders — `--border-*`
| Token                | Use for                       |
|----------------------|-------------------------------|
| `--border-tertiary`  | Subtle dividers (15% opacity) |
| `--border-secondary` | Card borders (30% opacity)    |
| `--border-primary`   | Input borders (40% opacity)   |
| `--border-info`      | Info component borders        |
| `--border-success`   | Success component borders     |
| `--border-warning`   | Warning component borders     |
| `--border-danger`    | Error / danger borders        |

### Spacing — `--space-*`
`1=4px` `2=8px` `3=12px` `4=16px` `6=24px` `8=32px` `12=48px` `16=64px`

### Border Radius — `--radius-*`
`sm=4px` `md=8px` `lg=12px` `xl=16px` `pill=99px`

### Shadows — `--shadow-*`
`0=none` `1=subtle` `2=card` `3=modal`

### Typography — `--text-*`
`display` `h1` `h2` `h3` `h4` `body-lg` `body` `caption` `label`

---

## Theme & Language

```tsx
import { useTheme } from "@/hooks/useTheme";

function MyComponent() {
  const { theme, toggleTheme, language, setLanguage, direction } = useTheme();
  // theme: "light" | "dark"
  // language: "en" | "ar"
  // direction: "ltr" | "rtl"  ← auto-derived from language
}
```

The `ThemeProvider` automatically sets `data-theme`, `dir`, and `lang` on `<html>`, so your CSS variables and font switch happen globally.

---

## Available Scripts

| Command             | Description             |
|---------------------|-------------------------|
| `npm run dev`       | Start dev server        |
| `npm run build`     | Production build        |
| `npm run preview`   | Preview production build|
| `npm run type-check`| TypeScript check only   |
