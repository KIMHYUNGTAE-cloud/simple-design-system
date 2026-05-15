import { forwardRef } from 'react';
import './NavigationPill.css';

export interface NavigationPillProps extends React.ComponentPropsWithoutRef<'button'> {
  active?: boolean;
}

export const NavigationPill = forwardRef<HTMLButtonElement, NavigationPillProps>(
  function NavigationPill(
    { active = false, type = 'button', className, children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        aria-current={active ? 'page' : undefined}
        data-active={active}
        className={['sds-nav-pill', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
