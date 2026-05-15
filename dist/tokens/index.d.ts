declare const color: {
    readonly black: {
        readonly 100: "#0c0c0d0d";
        readonly 200: "#0c0c0d1a";
        readonly 400: "#0c0c0d66";
        readonly 500: "#0c0c0db2";
    };
    readonly pink: {
        readonly 500: "#ea3fb8";
    };
    readonly red: {
        readonly 500: "#ec221f";
    };
    readonly yellow: {
        readonly 600: "#bf6a02";
    };
    readonly green: {
        readonly 500: "#14ae5c";
    };
    readonly slate: {
        readonly 200: "#e3e3e3";
    };
    readonly background: {
        readonly default: {
            readonly default: "#ffffff";
            readonly defaultHover: "#f5f5f5";
            readonly secondary: "#f5f5f5";
            readonly secondaryHover: "#e6e6e6";
            readonly tertiary: "#d9d9d9";
            readonly tertiaryHover: "#b3b3b3";
        };
        readonly brand: {
            readonly default: "#2c2c2c";
            readonly hover: "#1e1e1e";
            readonly secondary: "#e6e6e6";
            readonly tertiary: "#f5f5f5";
            readonly tertiaryHover: "#e6e6e6";
        };
        readonly neutral: {
            readonly tertiary: "#e3e3e3";
            readonly tertiaryHover: "#cdcdcd";
        };
        readonly danger: {
            readonly default: "#ec221f";
            readonly hover: "#c00f0c";
            readonly secondary: "#fdd3d0";
            readonly secondaryHover: "#fcb3ad";
            readonly tertiary: "#fee9e7";
        };
        readonly positive: {
            readonly default: "#14ae5c";
            readonly hover: "#009951";
            readonly secondary: "#cff7d3";
            readonly secondaryHover: "#aff4c6";
        };
        readonly warning: {
            readonly default: "#e8b931";
            readonly hover: "#e5a000";
            readonly secondary: "#fff1c2";
            readonly secondaryHover: "#ffe8a3";
        };
        readonly disabled: {
            readonly default: "#d9d9d9";
        };
        readonly utilities: {
            readonly scrim: "#ffffffcc";
        };
    };
    readonly border: {
        readonly default: {
            readonly default: "#d9d9d9";
            readonly secondary: "#757575";
        };
        readonly brand: {
            readonly default: "#2c2c2c";
            readonly tertiary: "#757575";
        };
        readonly danger: {
            readonly default: "#900b09";
            readonly secondary: "#c00f0c";
            readonly tertiary: "#ec221f";
        };
        readonly neutral: {
            readonly default: "#303030";
            readonly secondary: "#767676";
            readonly tertiary: "#b2b2b2";
        };
        readonly disabled: {
            readonly default: "#b3b3b3";
        };
    };
    readonly text: {
        readonly default: {
            readonly default: "#1e1e1e";
            readonly secondary: "#757575";
            readonly tertiary: "#b3b3b3";
        };
        readonly neutral: {
            readonly default: "#303030";
            readonly tertiary: "#767676";
        };
        readonly brand: {
            readonly default: "#2c2c2c";
            readonly tertiary: "#757575";
            readonly onBrand: "#f5f5f5";
            readonly onBrandSecondary: "#1e1e1e";
            readonly onBrandTertiary: "#2c2c2c";
        };
        readonly danger: {
            readonly default: "#900b09";
            readonly onDanger: "#fee9e7";
            readonly onDangerSecondary: "#900b09";
            readonly onDangerTertiary: "#900b09";
        };
        readonly positive: {
            readonly onPositive: "#ebffee";
            readonly onPositiveSecondary: "#02542d";
        };
        readonly warning: {
            readonly onWarning: "#401b01";
            readonly onWarningSecondary: "#682d03";
        };
        readonly disabled: {
            readonly default: "#b3b3b3";
            readonly onDisabled: "#b3b3b3";
        };
        readonly utilities: {
            readonly textOnOverlay: "#0c0c0d";
        };
    };
    readonly icon: {
        readonly default: {
            readonly default: "#1e1e1e";
            readonly secondary: "#757575";
            readonly tertiary: "#b3b3b3";
        };
        readonly brand: {
            readonly default: "#2c2c2c";
            readonly onBrand: "#f5f5f5";
            readonly onBrandSecondary: "#1e1e1e";
            readonly onBrandTertiary: "#2c2c2c";
        };
        readonly danger: {
            readonly onDanger: "#fee9e7";
            readonly onDangerSecondary: "#900b09";
        };
        readonly positive: {
            readonly onPositive: "#ebffee";
        };
        readonly warning: {
            readonly onWarning: "#401b01";
        };
        readonly disabled: {
            readonly onDisabled: "#b3b3b3";
        };
    };
};

declare const radius: {
    readonly 100: "4px";
    readonly 200: "8px";
    readonly 400: "16px";
    readonly full: "9999px";
    readonly md: "8px";
};

/**
 * Figma Drop Shadow effect 의 CSS box-shadow 표현.
 * 값은 tokens.css 의 `--sds-shadow-*` 변수와 1:1 일치.
 */
declare const shadow: {
    readonly 200: "0 1px 4px 0 #0c0c0d0d, 0 1px 4px 0 #0c0c0d1a";
    readonly 400: "0 4px 4px -4px #0c0c0d0d, 0 16px 32px -4px #0c0c0d1a";
};

declare const size: {
    readonly stroke: {
        readonly border: "1px";
    };
    readonly responsiveBorderWidth: "1px";
    readonly responsiveDeviceWidth: "1200px";
    readonly icon: {
        readonly small: "24px";
        readonly medium: "32px";
        readonly large: "40px";
    };
    readonly depth: {
        readonly 0: "0";
        readonly '025': "1px";
        readonly 100: "4px";
        readonly 400: "16px";
        readonly 800: "32px";
        readonly negative100: "-4px";
    };
};

declare const spacing: {
    readonly space: {
        readonly 0: "0";
        readonly '050': "2px";
        readonly 100: "4px";
        readonly 150: "6px";
        readonly 200: "8px";
        readonly 300: "12px";
        readonly 400: "16px";
        readonly 600: "24px";
        readonly 800: "32px";
        readonly 1200: "48px";
        readonly 1600: "64px";
        readonly 4000: "160px";
    };
    readonly padding: {
        readonly md: "12px";
        readonly lg: "16px";
    };
};

declare const typography: {
    readonly fontFamily: {
        readonly body: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
        readonly subheading: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
        readonly heading: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
        readonly subtitle: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
        readonly titlePage: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
        readonly titleHero: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
        readonly code: "\"Roboto Mono\", ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace";
    };
    readonly fontSize: {
        readonly body: {
            readonly small: "14px";
            readonly medium: "16px";
        };
        readonly subheading: {
            readonly medium: "20px";
        };
        readonly subtitle: {
            readonly small: "24px";
            readonly base: "32px";
        };
        readonly heading: {
            readonly base: "24px";
        };
        readonly titlePage: {
            readonly base: "48px";
        };
        readonly titleHero: {
            readonly base: "72px";
        };
        readonly code: {
            readonly base: "16px";
        };
        readonly scale: {
            readonly '06': "32px";
        };
    };
    readonly fontWeight: {
        readonly body: {
            readonly regular: "400";
            readonly strong: "600";
        };
        readonly subheading: "400";
        readonly heading: "600";
        readonly subtitle: "400";
        readonly titlePage: "700";
        readonly titleHero: "700";
        readonly code: "400";
    };
    readonly fontStyle: {
        readonly body: {
            readonly italic: "italic";
        };
    };
};

declare const tokens: {
    readonly color: {
        readonly black: {
            readonly 100: "#0c0c0d0d";
            readonly 200: "#0c0c0d1a";
            readonly 400: "#0c0c0d66";
            readonly 500: "#0c0c0db2";
        };
        readonly pink: {
            readonly 500: "#ea3fb8";
        };
        readonly red: {
            readonly 500: "#ec221f";
        };
        readonly yellow: {
            readonly 600: "#bf6a02";
        };
        readonly green: {
            readonly 500: "#14ae5c";
        };
        readonly slate: {
            readonly 200: "#e3e3e3";
        };
        readonly background: {
            readonly default: {
                readonly default: "#ffffff";
                readonly defaultHover: "#f5f5f5";
                readonly secondary: "#f5f5f5";
                readonly secondaryHover: "#e6e6e6";
                readonly tertiary: "#d9d9d9";
                readonly tertiaryHover: "#b3b3b3";
            };
            readonly brand: {
                readonly default: "#2c2c2c";
                readonly hover: "#1e1e1e";
                readonly secondary: "#e6e6e6";
                readonly tertiary: "#f5f5f5";
                readonly tertiaryHover: "#e6e6e6";
            };
            readonly neutral: {
                readonly tertiary: "#e3e3e3";
                readonly tertiaryHover: "#cdcdcd";
            };
            readonly danger: {
                readonly default: "#ec221f";
                readonly hover: "#c00f0c";
                readonly secondary: "#fdd3d0";
                readonly secondaryHover: "#fcb3ad";
                readonly tertiary: "#fee9e7";
            };
            readonly positive: {
                readonly default: "#14ae5c";
                readonly hover: "#009951";
                readonly secondary: "#cff7d3";
                readonly secondaryHover: "#aff4c6";
            };
            readonly warning: {
                readonly default: "#e8b931";
                readonly hover: "#e5a000";
                readonly secondary: "#fff1c2";
                readonly secondaryHover: "#ffe8a3";
            };
            readonly disabled: {
                readonly default: "#d9d9d9";
            };
            readonly utilities: {
                readonly scrim: "#ffffffcc";
            };
        };
        readonly border: {
            readonly default: {
                readonly default: "#d9d9d9";
                readonly secondary: "#757575";
            };
            readonly brand: {
                readonly default: "#2c2c2c";
                readonly tertiary: "#757575";
            };
            readonly danger: {
                readonly default: "#900b09";
                readonly secondary: "#c00f0c";
                readonly tertiary: "#ec221f";
            };
            readonly neutral: {
                readonly default: "#303030";
                readonly secondary: "#767676";
                readonly tertiary: "#b2b2b2";
            };
            readonly disabled: {
                readonly default: "#b3b3b3";
            };
        };
        readonly text: {
            readonly default: {
                readonly default: "#1e1e1e";
                readonly secondary: "#757575";
                readonly tertiary: "#b3b3b3";
            };
            readonly neutral: {
                readonly default: "#303030";
                readonly tertiary: "#767676";
            };
            readonly brand: {
                readonly default: "#2c2c2c";
                readonly tertiary: "#757575";
                readonly onBrand: "#f5f5f5";
                readonly onBrandSecondary: "#1e1e1e";
                readonly onBrandTertiary: "#2c2c2c";
            };
            readonly danger: {
                readonly default: "#900b09";
                readonly onDanger: "#fee9e7";
                readonly onDangerSecondary: "#900b09";
                readonly onDangerTertiary: "#900b09";
            };
            readonly positive: {
                readonly onPositive: "#ebffee";
                readonly onPositiveSecondary: "#02542d";
            };
            readonly warning: {
                readonly onWarning: "#401b01";
                readonly onWarningSecondary: "#682d03";
            };
            readonly disabled: {
                readonly default: "#b3b3b3";
                readonly onDisabled: "#b3b3b3";
            };
            readonly utilities: {
                readonly textOnOverlay: "#0c0c0d";
            };
        };
        readonly icon: {
            readonly default: {
                readonly default: "#1e1e1e";
                readonly secondary: "#757575";
                readonly tertiary: "#b3b3b3";
            };
            readonly brand: {
                readonly default: "#2c2c2c";
                readonly onBrand: "#f5f5f5";
                readonly onBrandSecondary: "#1e1e1e";
                readonly onBrandTertiary: "#2c2c2c";
            };
            readonly danger: {
                readonly onDanger: "#fee9e7";
                readonly onDangerSecondary: "#900b09";
            };
            readonly positive: {
                readonly onPositive: "#ebffee";
            };
            readonly warning: {
                readonly onWarning: "#401b01";
            };
            readonly disabled: {
                readonly onDisabled: "#b3b3b3";
            };
        };
    };
    readonly spacing: {
        readonly space: {
            readonly 0: "0";
            readonly '050': "2px";
            readonly 100: "4px";
            readonly 150: "6px";
            readonly 200: "8px";
            readonly 300: "12px";
            readonly 400: "16px";
            readonly 600: "24px";
            readonly 800: "32px";
            readonly 1200: "48px";
            readonly 1600: "64px";
            readonly 4000: "160px";
        };
        readonly padding: {
            readonly md: "12px";
            readonly lg: "16px";
        };
    };
    readonly radius: {
        readonly 100: "4px";
        readonly 200: "8px";
        readonly 400: "16px";
        readonly full: "9999px";
        readonly md: "8px";
    };
    readonly size: {
        readonly stroke: {
            readonly border: "1px";
        };
        readonly responsiveBorderWidth: "1px";
        readonly responsiveDeviceWidth: "1200px";
        readonly icon: {
            readonly small: "24px";
            readonly medium: "32px";
            readonly large: "40px";
        };
        readonly depth: {
            readonly 0: "0";
            readonly '025': "1px";
            readonly 100: "4px";
            readonly 400: "16px";
            readonly 800: "32px";
            readonly negative100: "-4px";
        };
    };
    readonly typography: {
        readonly fontFamily: {
            readonly body: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
            readonly subheading: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
            readonly heading: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
            readonly subtitle: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
            readonly titlePage: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
            readonly titleHero: "\"Inter\", system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
            readonly code: "\"Roboto Mono\", ui-monospace, \"SFMono-Regular\", Menlo, Consolas, monospace";
        };
        readonly fontSize: {
            readonly body: {
                readonly small: "14px";
                readonly medium: "16px";
            };
            readonly subheading: {
                readonly medium: "20px";
            };
            readonly subtitle: {
                readonly small: "24px";
                readonly base: "32px";
            };
            readonly heading: {
                readonly base: "24px";
            };
            readonly titlePage: {
                readonly base: "48px";
            };
            readonly titleHero: {
                readonly base: "72px";
            };
            readonly code: {
                readonly base: "16px";
            };
            readonly scale: {
                readonly '06': "32px";
            };
        };
        readonly fontWeight: {
            readonly body: {
                readonly regular: "400";
                readonly strong: "600";
            };
            readonly subheading: "400";
            readonly heading: "600";
            readonly subtitle: "400";
            readonly titlePage: "700";
            readonly titleHero: "700";
            readonly code: "400";
        };
        readonly fontStyle: {
            readonly body: {
                readonly italic: "italic";
            };
        };
    };
    readonly shadow: {
        readonly 200: "0 1px 4px 0 #0c0c0d0d, 0 1px 4px 0 #0c0c0d1a";
        readonly 400: "0 4px 4px -4px #0c0c0d0d, 0 16px 32px -4px #0c0c0d1a";
    };
};
type Tokens = typeof tokens;

export { type Tokens, color, radius, shadow, size, spacing, tokens, typography };
