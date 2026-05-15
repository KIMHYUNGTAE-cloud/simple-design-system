import { forwardRef, type ReactNode } from 'react';
import './Tooltip.css';

export interface TooltipProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  title?: ReactNode;
  body?: ReactNode;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
  { placement = 'top', title, body, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="tooltip"
      data-placement={placement}
      className={['sds-tooltip', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="sds-tooltip__beak" aria-hidden="true" />
      {children ?? (
        <>
          {title != null && <p className="sds-tooltip__title">{title}</p>}
          {body != null && <p className="sds-tooltip__body">{body}</p>}
        </>
      )}
    </div>
  );
});
