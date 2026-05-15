# simple-design-system

React component package codifying the [Simple Design System (Figma Community)](https://www.figma.com/design/Vw3Dqtic7KKiCPhRMd8NaZ/Simple-Design-System--Community-?node-id=9762-187) by Figma. Distributed via direct GitHub install — no npm registry.

## Overview

- **Stack**: React 18+ (peer), TypeScript 5.x, CSS Variables. Zero runtime dependencies.
- **Distribution**: `npm install github:kimhyungtae/simple-design-system` (no `npm publish`).
- **Bundle**: tsup single-build, ESM-first + CJS dual, `.d.ts` shipped, CSS copied verbatim.
- **Current scope**: 41 components — 35 atomic + container (v0.1.0) + 6 Card templates (v0.2.0). Page-level Sections / Forms / AI Chat prebuilts are reserved for v0.3.0.

## Installation

```bash
npm install github:kimhyungtae/simple-design-system
# or pin to a tag/branch
npm install github:kimhyungtae/simple-design-system#v0.1.0
npm install github:kimhyungtae/simple-design-system#main
```

No build step or postinstall — the published `dist/` is committed to the repo.

## Tokens

Activate all CSS variables on `:root` with a single side-effect import:

```ts
// app/layout.tsx (Next.js) or src/main.tsx (Vite)
import 'simple-design-system/styles';
```

After that, anywhere in your app:

```css
.my-card {
  background-color: var(--sds-color-background-default-default);
  padding: var(--sds-size-space-400);
  border-radius: var(--sds-size-radius-200);
}
```

The same values are exposed as a TypeScript object:

```ts
import { tokens } from 'simple-design-system/tokens';

const style = {
  backgroundColor: tokens.color.background.brand.default,
  padding: tokens.spacing.space[400],
};
```

Token categories: **color** (47), **spacing** (13), **radius** (5), **size** (12), **typography** (28), **shadow** (2). Variable names preserve Figma's `--sds-*` prefix unchanged.

## Components

```tsx
import {
  Button, Tag, Avatar, Icon, Text, TextField, Card,
  ProductInfoCard, TestimonialCard, StatsCard, ReviewCard, PricingCard, CardSlot,
} from 'simple-design-system';

<Button variant="primary" size="md" onClick={() => alert('Hi')}>Click</Button>
<Tag scheme="brand" variant="primary">New</Tag>
<Avatar src="/me.jpg" alt="Hyungtae" size="md" />
<Icon name="check" size={20} aria-label="Done" />
<Text variant="heading">Title</Text>
<TextField label="Email" placeholder="you@example.com" />
<Card variant="stroke" heading="Card title" body="Card body" />

<ProductInfoCard
  image={<img src="/p.jpg" alt="" />}
  label="Air Jordan"
  price="$120"
  description="Free shipping"
/>
<TestimonialCard
  quote="“Best DS we shipped.”"
  avatar={<Avatar src="/me.jpg" alt="" size="md" />}
  name="Hyungtae"
  subtitle="Engineer"
/>
<StatsCard icon={<Icon name="clock" size={40} />} value="100" label="Active users" />
<ReviewCard rating={5} title="Review title" body="Body text" name="Reviewer" date="2026-05-15" />
<PricingCard
  variant="brand"
  device="desktop"
  title="Pro"
  price="50"
  priceLabel="/ mo"
  items={<><li>Feature A</li><li>Feature B</li></>}
  action={<Button variant="neutral">Subscribe</Button>}
/>
<CardSlot>Any content</CardSlot>
```

**All 41 named exports**:

`Accordion`, `AccordionItem`, `Avatar`, `AvatarBlock`, `AvatarGroup`, `Button`, `ButtonGroup`, `Calendar`, `CalendarButton`, `Card`, `CardSlot`, `Checkbox`, `DateInput`, `DatePicker`, `DialogBody`, `Icon`, `Menu` (+ `MenuHeader`, `MenuHeading`, `MenuSeparator`, `MenuShortcut`), `MenuItem`, `NavigationButton`, `NavigationButtonList`, `NavigationPill`, `NavigationPillList`, `Notification`, `Pagination` (+ `PaginationList`, `PaginationNext`, `PaginationPrevious`, `PaginationGap`), `PaginationPage`, `PricingCard`, `ProductInfoCard`, `Radio`, `ReviewCard`, `Search`, `Select`, `Slider`, `StatsCard`, `Switch`, `Tab`, `Tabs`, `Tag`, `TagToggleGroup`, `TestimonialCard`, `Text`, `TextArea`, `TextField`, `Tooltip`.

Every component:
- is implemented with `forwardRef`,
- accepts `className` (merged onto the root) and spreads native HTML props onto the root element (`...rest`),
- uses `data-*` attributes to expose Figma variants for CSS selectors,
- references **only** `var(--sds-*)` tokens — no hardcoded color/spacing/typography.

`Icon` ships 287 SVG paths inlined from [Feather Icons 4.29.2](https://feathericons.com/) (MIT) — the exact set Figma original is based on. Use `<Icon name="..." size={...} />` with any `IconName` from the type. No runtime dependency on `feather-icons` (bundled at build time).

## Dark Mode

The Figma source for this release does **not** define a dark-mode variant. v0.1.0 ships light tokens only on `:root`. When the original is updated with dark tokens, this package will add a `[data-theme="dark"]` block — toggling will then be:

```html
<html data-theme="dark"> ... </html>
```

If you need dark mode today, override individual `--sds-*` variables under your own `[data-theme="dark"]` selector after importing this package.

## Local overrides

Two supported patterns:

```css
/* (a) global override — your entry CSS, loaded after the package */
:root {
  --sds-color-background-brand-default: #ff5722;
}
```

```tsx
// (b) per-component scope via inline style
<Button style={{ '--sds-color-background-brand-default': '#ff5722' }} variant="primary">
  Click
</Button>
```

## Roadmap

- **v0.1.0**: 35 atomic + container components, 104 CSS variables, light theme.
- **v0.2.0** (current): + 6 Card templates (`ProductInfoCard`, `TestimonialCard`, `StatsCard`, `ReviewCard`, `PricingCard`, `CardSlot`).
- **v0.3.0** (planned): AI Chat prebuilts (Box / Sidebar / Conversation / messages / Code Block), Forms (Newsletter / Log In / Register / Contact / Shipping / Forgot Password / Slot), page Sections (Header / Footer / Hero × 6 / Panel × 4 / Page × 4 / Card Grid × 6 / AI Chatbot), dark-mode tokens (when Figma defines them).

## License

### Code

MIT — see [LICENSE](./LICENSE). Copyright © 2026 Hyungtae Kim.

### Bundled SVG paths (Icon component)

[Feather Icons 4.29.2](https://github.com/feathericons/feather) (MIT) by Cole Bemis. 287 SVG paths are inlined at build time. Attribution per Feather Icons' MIT license is reproduced here:

> Copyright (c) 2013-2023 Cole Bemis. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files...

### Design original

This package is a code reproduction of **Simple Design System**, a UI kit built by Figma and published on the Figma Community under **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**.

- Original Figma file: <https://www.figma.com/community/file/1380235722331273046/simple-design-system-community>
- Figma's official reference repository: <https://github.com/figma/sds>
- License: CC BY 4.0

The visual design — token values, component shapes, variant matrix — is the work of Figma. This package reimplements that design as React + CSS Variables; the code is a separate work under MIT (see above), and attribution for the design is given to Figma per CC BY 4.0.

Per the official description:

> The Simple Design System is a UI kit built by Figma to help you get started faster using pre-built examples and components. It covers Figma's best practices for building a basic design system, and includes a full range of resources to enable core design use cases — like designing for web, mobile, and more. Key features: full-screen example mockups, 400+ components (Code Connect on paid plans), styles and variables (light/dark), and commonly used icons. Figma's Simple Design System UI Kit is licensed by Figma under CC BY 4.0.
