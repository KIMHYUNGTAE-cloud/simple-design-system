import { forwardRef } from 'react';
import './AvatarGroup.css';

export interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  spacing?: 'overlap' | 'spaced';
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup({ spacing = 'overlap', className, children, ...rest }, ref) {
    return (
      <div
        ref={ref}
        data-spacing={spacing}
        className={['sds-avatar-group', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
