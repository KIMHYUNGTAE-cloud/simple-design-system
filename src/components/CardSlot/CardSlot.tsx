import { forwardRef } from 'react';
import './CardSlot.css';

export interface CardSlotProps extends React.ComponentPropsWithoutRef<'div'> {}

export const CardSlot = forwardRef<HTMLDivElement, CardSlotProps>(function CardSlot(
  { className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={['sds-card-slot', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
});
