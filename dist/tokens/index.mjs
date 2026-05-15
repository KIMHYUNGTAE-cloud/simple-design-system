// src/tokens/color.ts
var color = {
  black: {
    100: "#0c0c0d0d",
    200: "#0c0c0d1a",
    400: "#0c0c0d66",
    500: "#0c0c0db2"
  },
  pink: { 500: "#ea3fb8" },
  red: { 500: "#ec221f" },
  yellow: { 600: "#bf6a02" },
  green: { 500: "#14ae5c" },
  slate: { 200: "#e3e3e3" },
  background: {
    default: {
      default: "#ffffff",
      defaultHover: "#f5f5f5",
      secondary: "#f5f5f5",
      secondaryHover: "#e6e6e6",
      tertiary: "#d9d9d9",
      tertiaryHover: "#b3b3b3"
    },
    brand: {
      default: "#2c2c2c",
      hover: "#1e1e1e",
      secondary: "#e6e6e6",
      tertiary: "#f5f5f5",
      tertiaryHover: "#e6e6e6"
    },
    neutral: { tertiary: "#e3e3e3", tertiaryHover: "#cdcdcd" },
    danger: {
      default: "#ec221f",
      hover: "#c00f0c",
      secondary: "#fdd3d0",
      secondaryHover: "#fcb3ad",
      tertiary: "#fee9e7"
    },
    positive: {
      default: "#14ae5c",
      hover: "#009951",
      secondary: "#cff7d3",
      secondaryHover: "#aff4c6"
    },
    warning: {
      default: "#e8b931",
      hover: "#e5a000",
      secondary: "#fff1c2",
      secondaryHover: "#ffe8a3"
    },
    disabled: { default: "#d9d9d9" },
    utilities: { scrim: "#ffffffcc" }
  },
  border: {
    default: { default: "#d9d9d9", secondary: "#757575" },
    brand: { default: "#2c2c2c", tertiary: "#757575" },
    danger: { default: "#900b09", secondary: "#c00f0c", tertiary: "#ec221f" },
    neutral: { default: "#303030", secondary: "#767676", tertiary: "#b2b2b2" },
    disabled: { default: "#b3b3b3" }
  },
  text: {
    default: { default: "#1e1e1e", secondary: "#757575", tertiary: "#b3b3b3" },
    neutral: { default: "#303030", tertiary: "#767676" },
    brand: {
      default: "#2c2c2c",
      tertiary: "#757575",
      onBrand: "#f5f5f5",
      onBrandSecondary: "#1e1e1e",
      onBrandTertiary: "#2c2c2c"
    },
    danger: {
      default: "#900b09",
      onDanger: "#fee9e7",
      onDangerSecondary: "#900b09",
      onDangerTertiary: "#900b09"
    },
    positive: { onPositive: "#ebffee", onPositiveSecondary: "#02542d" },
    warning: { onWarning: "#401b01", onWarningSecondary: "#682d03" },
    disabled: { default: "#b3b3b3", onDisabled: "#b3b3b3" },
    utilities: { textOnOverlay: "#0c0c0d" }
  },
  icon: {
    default: { default: "#1e1e1e", secondary: "#757575", tertiary: "#b3b3b3" },
    brand: {
      default: "#2c2c2c",
      onBrand: "#f5f5f5",
      onBrandSecondary: "#1e1e1e",
      onBrandTertiary: "#2c2c2c"
    },
    danger: { onDanger: "#fee9e7", onDangerSecondary: "#900b09" },
    positive: { onPositive: "#ebffee" },
    warning: { onWarning: "#401b01" },
    disabled: { onDisabled: "#b3b3b3" }
  }
};

// src/tokens/radius.ts
var radius = {
  100: "4px",
  200: "8px",
  400: "16px",
  full: "9999px",
  md: "8px"
};

// src/tokens/shadow.ts
var shadow = {
  200: "0 1px 4px 0 #0c0c0d0d, 0 1px 4px 0 #0c0c0d1a",
  400: "0 4px 4px -4px #0c0c0d0d, 0 16px 32px -4px #0c0c0d1a"
};

// src/tokens/size.ts
var size = {
  stroke: {
    border: "1px"
  },
  responsiveBorderWidth: "1px",
  responsiveDeviceWidth: "1200px",
  icon: {
    small: "24px",
    medium: "32px",
    large: "40px"
  },
  depth: {
    0: "0",
    "025": "1px",
    100: "4px",
    400: "16px",
    800: "32px",
    negative100: "-4px"
  }
};

// src/tokens/spacing.ts
var spacing = {
  space: {
    0: "0",
    "050": "2px",
    100: "4px",
    150: "6px",
    200: "8px",
    300: "12px",
    400: "16px",
    600: "24px",
    800: "32px",
    1200: "48px",
    1600: "64px",
    4e3: "160px"
  },
  padding: {
    md: "12px",
    lg: "16px"
  }
};

// src/tokens/typography.ts
var fontFamilyBase = '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
var fontFamilyMono = '"Roboto Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace';
var typography = {
  fontFamily: {
    body: fontFamilyBase,
    subheading: fontFamilyBase,
    heading: fontFamilyBase,
    subtitle: fontFamilyBase,
    titlePage: fontFamilyBase,
    titleHero: fontFamilyBase,
    code: fontFamilyMono
  },
  fontSize: {
    body: { small: "14px", medium: "16px" },
    subheading: { medium: "20px" },
    subtitle: { small: "24px", base: "32px" },
    heading: { base: "24px" },
    titlePage: { base: "48px" },
    titleHero: { base: "72px" },
    code: { base: "16px" },
    scale: { "06": "32px" }
  },
  fontWeight: {
    body: { regular: "400", strong: "600" },
    subheading: "400",
    heading: "600",
    subtitle: "400",
    titlePage: "700",
    titleHero: "700",
    code: "400"
  },
  fontStyle: {
    body: { italic: "italic" }
  }
};

// src/tokens/index.ts
var tokens = {
  color,
  spacing,
  radius,
  size,
  typography,
  shadow
};
export {
  color,
  radius,
  shadow,
  size,
  spacing,
  tokens,
  typography
};
