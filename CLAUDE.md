# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check + production build
pnpm lint         # ESLint
pnpm format       # Prettier (formats .ts/.tsx)
pnpm typecheck    # Type-check only (no emit)
pnpm preview      # Preview production build
```

Use `pnpm` — not npm or yarn.

## Architecture

**React 19 + TypeScript + Vite** landing page for Hoodlife, a FiveM heavy roleplay server set in Los Santos. Dark-only. No light mode.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin (not postcss). All design tokens in `src/index.css` using `oklch()`. The `@theme inline` block exposes CSS vars as Tailwind utilities. No `tailwind.config.js`.

**Components:** shadcn/ui via the `shadcn` package (`src/components/ui/`). Use `cn()` from `src/lib/utils.ts` for conditional classes.

**Path alias:** `@` → `src/`.

## shadcn/ui — Preferred Component Library

**Always prefer shadcn/ui primitives over custom implementations.** Before building any UI element from scratch, check if a shadcn component covers the need.

Common components already available or easily added: `Button`, `Badge`, `Card`, `Dialog`, `Sheet`, `Tooltip`, `Tabs`, `Accordion`, `Carousel`, `Separator`, `Avatar`, `ScrollArea`, `HoverCard`, `Popover`, `DropdownMenu`.

**Adding shadcn components:**
```bash
pnpx shadcn add <component>
```

- Install the component first, then compose/style it with Tailwind and the project's design tokens.
- Estilize livremente via `className` + `cn()` e editando o source do componente em `src/components/ui/` quando necessário.
- shadcn components automatically inherit the project's CSS variables (`--brand-500`, `--bg-surface`, etc.) because they use `var(--*)` internally.

## File Structure

```
src/
  assets/           # Images, video, SVG — import directly in TSX
  components/
    ui/             # shadcn primitives
    Navbar.tsx      # Fixed navbar — transparent → frosted glass on scroll
    Hero.tsx        # Full-viewport hero with video background
    About.tsx       # About section with character art + text
  hooks/
    useInView.ts    # IntersectionObserver hook — fires once, then disconnects
  lib/utils.ts      # cn() utility
  index.css         # Design system, tokens, animations, utilities
  main.tsx
  App.tsx
```

## Design Tokens (`src/index.css`)

All colors use `oklch()`. Key variables:

| Token | Use |
|---|---|
| `--brand-500` | Primary blue accent |
| `--bg-base` | Page background (`#0b0b0b` equivalent) |
| `--bg-surface` | Cards, panels |
| `--bg-elevated` | Dropdowns, modals |
| `--text-primary` | Headings, emphasis |
| `--text-secondary` | Body copy |
| `--text-muted` | Labels, metadata |
| `--border-brand` | Blue accent borders |

Tailwind utilities: `bg-brand-500`, `text-text-secondary`, `border-border-subtle`, etc.

## Typography Standards

Established in `About.tsx`, enforced globally via `@layer base` in `index.css`.

**h2** — Section headings: `font-black tracking-tight`, fluid `clamp(1.75rem → 3rem)`.
Use `md:text-5xl` to override size when needed. Uppercase titles via `uppercase` class.

**h3** — Subsection headings: `font-bold tracking-tight`, fluid `clamp(1.25rem → 1.75rem)`.

**Body copy** — Wrap `<p>` tags in a `.prose` div:
```tsx
<div className="prose">
  <p>Body text — <b>bold inline</b> and <span className="text-brand-500">brand accent</span>.</p>
</div>
```
`.prose` applies: `space-y-4 text-[15px] leading-[1.75] text-text-secondary`.
`b`/`strong` inside `.prose` → `font-semibold text-text-primary` automatically.

**Eyebrow labels** — Use `.eyebrow` class: `text-xs font-semibold uppercase tracking-widest text-brand-500`.

**Display headings** — Use `.text-display` class: `font-black uppercase` with tight line-height. Used in Hero for `h1`.

## Animation System

Keyframes defined in `index.css`: `fade-up`, `fade-in`, `slide-down`, `line-grow`.

**Section header pattern** — use consistently across all sections:
```tsx
<p className={cn("eyebrow mb-4", inView ? "animate-fade-up delay-100" : "opacity-0")}>
  Eyebrow label
</p>
<h2 className={cn("text-3xl leading-tight font-black tracking-tight text-text-primary md:text-5xl",
  inView ? "animate-fade-up delay-200" : "opacity-0")}>
  TÍTULO <span className="text-brand-500">DESTAQUE</span>
</h2>
<div className={cn("mt-4 h-0.5 w-12 bg-brand-500", inView ? "animate-fade-up delay-300" : "opacity-0")} aria-hidden="true" />
{/* subtitle (optional): prose + delay-400 */}
```
`mx-auto` on the blue line when the header is centered. Delays cascade: eyebrow 100 → h2 200 → line 300 → subtitle 400 → content 500.

**Scroll-triggered pattern** (used in every section):
```tsx
const [sectionRef, inView] = useInView<HTMLElement>(0.12)

<section ref={sectionRef}>
  <p className={cn("eyebrow", inView ? "animate-fade-up delay-100" : "opacity-0")}>
  <h2 className={cn(inView ? "animate-fade-up delay-200" : "opacity-0")}>
  <div className={cn("prose", inView ? "animate-fade-up delay-300" : "opacity-0")}>
```

Delay utilities: `delay-100` through `delay-800` (100ms increments).
`useInView` disconnects after first intersection — animations fire once only.

## Section Structure Pattern

Each full-screen section follows this pattern:
```tsx
<section id="slug" ref={sectionRef} className="relative h-dvh overflow-hidden bg-bg-base">
  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl ...">
</section>
```

## Utility Classes

Defined in `@layer utilities` in `index.css`:

| Class | Use |
|---|---|
| `.eyebrow` | Section label above headings |
| `.prose` | Body copy wrapper |
| `.text-display` | Hero display titles (font-black uppercase) |
| `.glow-brand-sm / .glow-brand / .glow-brand-lg` | Blue box-shadow glow |
| `.glow-brand-text` | Blue text-shadow |
| `.surface / .surface-elevated` | Dark panel with border |
| `.card-hover` | Lift + border accent on hover |
| `.img-overlay` | Gradient bottom overlay on images |
| `.tag / .tag-outline` | Category badges |
| `.rule-brand` | Horizontal gradient divider |
| `.decorated` | Heading with blue bar above |
| `.focus-brand` | Blue focus ring |
