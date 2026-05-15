import { forwardRef } from 'react';
import { iconPaths, type IconName } from './data';

export type { IconName };

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: IconName;
  size?: 16 | 20 | 24 | 32 | 40 | 48 | number;
  strokeWidth?: number;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  {
    name,
    size = 24,
    strokeWidth = 2,
    className,
    'aria-label': ariaLabel,
    role,
    ...rest
  },
  ref,
) {
  const inner = iconPaths[name];
  if (inner == null) {
    return null;
  }
  const isDecorative = ariaLabel == null;
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={role ?? (isDecorative ? undefined : 'img')}
      aria-label={ariaLabel}
      aria-hidden={isDecorative ? true : undefined}
      data-icon={name}
      className={['sds-icon', className].filter(Boolean).join(' ')}
      dangerouslySetInnerHTML={{ __html: inner }}
      {...rest}
    />
  );
});
