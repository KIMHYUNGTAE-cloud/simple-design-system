import { forwardRef, type ReactNode } from 'react';
import './TestimonialCard.css';

export interface TestimonialCardProps extends React.ComponentPropsWithoutRef<'div'> {
  quote?: ReactNode;
  avatar?: ReactNode;
  name?: ReactNode;
  subtitle?: ReactNode;
}

export const TestimonialCard = forwardRef<HTMLDivElement, TestimonialCardProps>(
  function TestimonialCard(
    { quote, avatar, name, subtitle, className, children, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={['sds-testimonial-card', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children ?? (
          <>
            {quote != null && (
              <p className="sds-testimonial-card__quote">{quote}</p>
            )}
            {(avatar != null || name != null || subtitle != null) && (
              <div className="sds-testimonial-card__author">
                {avatar != null && (
                  <span className="sds-testimonial-card__avatar">{avatar}</span>
                )}
                {(name != null || subtitle != null) && (
                  <span className="sds-testimonial-card__info">
                    {name != null && (
                      <span className="sds-testimonial-card__name">{name}</span>
                    )}
                    {subtitle != null && (
                      <span className="sds-testimonial-card__subtitle">{subtitle}</span>
                    )}
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>
    );
  },
);
