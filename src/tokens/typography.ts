const fontFamilyBase =
  '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
const fontFamilyMono =
  '"Roboto Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';

export const typography = {
  fontFamily: {
    body: fontFamilyBase,
    subheading: fontFamilyBase,
    heading: fontFamilyBase,
    subtitle: fontFamilyBase,
    titlePage: fontFamilyBase,
    titleHero: fontFamilyBase,
    code: fontFamilyMono,
  },
  fontSize: {
    body: { small: '14px', medium: '16px' },
    subheading: { medium: '20px' },
    subtitle: { small: '24px', base: '32px' },
    heading: { base: '24px' },
    titlePage: { base: '48px' },
    titleHero: { base: '72px' },
    code: { base: '16px' },
    scale: { '06': '32px' },
  },
  fontWeight: {
    body: { regular: '400', strong: '600' },
    subheading: '400',
    heading: '600',
    subtitle: '400',
    titlePage: '700',
    titleHero: '700',
    code: '400',
  },
  fontStyle: {
    body: { italic: 'italic' },
  },
} as const;
