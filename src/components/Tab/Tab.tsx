import { forwardRef } from 'react';
import './Tab.css';

export interface TabProps extends React.ComponentPropsWithoutRef<'button'> {
  active?: boolean;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  { active = false, type = 'button', className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      role="tab"
      aria-selected={active}
      data-active={active}
      className={['sds-tab', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
});
