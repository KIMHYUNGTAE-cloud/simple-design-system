import { forwardRef, type ReactNode } from 'react';
import './Card.css';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'stroke' | 'default';
  direction?: 'horizontal' | 'vertical';
  asset?: ReactNode;
  heading?: ReactNode;
  body?: ReactNode;
  action?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    variant = 'stroke',
    direction = 'vertical',
    asset,
    heading,
    body,
    action,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <div
      ref={ref}
      data-variant={variant}
      data-direction={direction}
      className={['sds-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {asset != null && <div className="sds-card__asset">{asset}</div>}
      <div className="sds-card__body">
        {children ?? (
          <>
            {(heading != null || body != null) && (
              <div className="sds-card__text">
                {heading != null && <p className="sds-card__heading">{heading}</p>}
                {body != null && <p className="sds-card__body-text">{body}</p>}
              </div>
            )}
            {action != null && <div className="sds-card__action">{action}</div>}
          </>
        )}
      </div>
    </div>
  );
});
