import { color } from './color';
import { radius } from './radius';
import { shadow } from './shadow';
import { size } from './size';
import { spacing } from './spacing';
import { typography } from './typography';

export const tokens = {
  color,
  spacing,
  radius,
  size,
  typography,
  shadow,
} as const;

export type Tokens = typeof tokens;

export { color, spacing, radius, size, typography, shadow };
