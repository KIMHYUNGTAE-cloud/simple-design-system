import { forwardRef } from 'react';
import './NavigationButtonList.css';

export interface NavigationButtonListProps
  extends React.ComponentPropsWithoutRef<'nav'> {
  direction?: 'row' | 'column';
}

export const NavigationButtonList = forwardRef<HTMLElement, NavigationButtonListProps>(
  function NavigationButtonList(
    { direction = 'row', className, children, ...rest },
    ref,
  ) {
    return (
      <nav
        ref={ref}
        data-direction={direction}
        className={['sds-nav-button-list', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </nav>
    );
  },
);

export const NavigationPillList = forwardRef<HTMLElement, NavigationButtonListProps>(
  function NavigationPillList(
    { direction = 'row', className, children, ...rest },
    ref,
  ) {
    return (
      <nav
        ref={ref}
        data-direction={direction}
        className={['sds-nav-pill-list', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </nav>
    );
  },
);
