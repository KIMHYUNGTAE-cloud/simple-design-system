import { forwardRef } from 'react';
import './Accordion.css';

export interface AccordionProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  { className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={['sds-accordion', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
});
