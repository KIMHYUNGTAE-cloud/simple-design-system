import { forwardRef } from 'react';
import './ButtonGroup.css';

export interface ButtonGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  align?: 'start' | 'end' | 'center' | 'justify' | 'stack';
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup({ align = 'start', className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="group"
        data-align={align}
        className={['sds-button-group', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
