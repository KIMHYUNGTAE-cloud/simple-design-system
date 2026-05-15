import { forwardRef } from 'react';
import './Tabs.css';

export interface TabsProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="tablist"
      className={['sds-tabs', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
});
