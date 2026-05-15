import { forwardRef, type ReactNode } from 'react';
import './NavigationButton.css';

export interface NavigationButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  active?: boolean;
  direction?: 'column' | 'row';
  size?: 'sm' | 'md';
  icon?: ReactNode;
}

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  function NavigationButton(
    {
      active = false,
      direction = 'column',
      size = 'sm',
      icon,
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
        aria-current={active ? 'page' : undefined}
        data-active={active}
        data-direction={direction}
        data-size={size}
        className={['sds-nav-button', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {icon != null && <span className="sds-nav-button__icon">{icon}</span>}
        {children != null && (
          <span className="sds-nav-button__label">{children}</span>
        )}
      </button>
    );
  },
);
