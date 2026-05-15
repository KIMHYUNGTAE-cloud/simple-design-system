import { forwardRef } from 'react';
import './TagToggleGroup.css';

export interface TagToggleGroupProps extends React.ComponentPropsWithoutRef<'div'> {}

export const TagToggleGroup = forwardRef<HTMLDivElement, TagToggleGroupProps>(
  function TagToggleGroup({ className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="group"
        className={['sds-tag-toggle-group', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
