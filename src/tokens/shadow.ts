/**
 * Figma Drop Shadow effect 의 CSS box-shadow 표현.
 * 값은 tokens.css 의 `--sds-shadow-*` 변수와 1:1 일치.
 */
export const shadow = {
  200:
    '0 1px 4px 0 #0c0c0d0d, 0 1px 4px 0 #0c0c0d1a',
  400:
    '0 4px 4px -4px #0c0c0d0d, 0 16px 32px -4px #0c0c0d1a',
} as const;
