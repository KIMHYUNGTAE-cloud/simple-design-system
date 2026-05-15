import { forwardRef, type ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'neutral' | 'subtle';
  size?: 'md' | 'sm';
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    iconStart,
    iconEnd,
    type = 'button',
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      data-variant={variant}
      data-size={size}
      className={['sds-button', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {iconStart != null && <span className="sds-button__icon">{iconStart}</span>}
      {children != null && <span className="sds-button__label">{children}</span>}
      {iconEnd != null && <span className="sds-button__icon">{iconEnd}</span>}
    </button>
  );
});
