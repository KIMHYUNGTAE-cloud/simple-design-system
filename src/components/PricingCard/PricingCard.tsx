import { forwardRef, type ReactNode } from 'react';
import './PricingCard.css';

export interface PricingCardProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  variant?: 'stroke' | 'brand';
  device?: 'desktop' | 'mobile';
  title?: ReactNode;
  currency?: ReactNode;
  price?: ReactNode;
  priceLabel?: ReactNode;
  items?: ReactNode;
  action?: ReactNode;
}

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(function PricingCard(
  {
    variant = 'stroke',
    device = 'desktop',
    title,
    currency = '$',
    price,
    priceLabel,
    items,
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
      data-device={device}
      className={['sds-pricing-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children ?? (
        <>
          <div className="sds-pricing-card__top">
            {device === 'mobile' ? (
              <div className="sds-pricing-card__title-row">
                {title != null && (
                  <p className="sds-pricing-card__title">{title}</p>
                )}
                {price != null && (
                  <div className="sds-pricing-card__price sds-pricing-card__price--small">
                    {currency != null && (
                      <span className="sds-pricing-card__currency">{currency}</span>
                    )}
                    <span className="sds-pricing-card__price-value">{price}</span>
                    {priceLabel != null && (
                      <span className="sds-pricing-card__price-label">
                        {priceLabel}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <>
                {title != null && (
                  <p className="sds-pricing-card__title">{title}</p>
                )}
                {price != null && (
                  <div className="sds-pricing-card__price sds-pricing-card__price--large">
                    {currency != null && (
                      <span className="sds-pricing-card__currency">{currency}</span>
                    )}
                    <span className="sds-pricing-card__price-value">{price}</span>
                    {priceLabel != null && (
                      <span className="sds-pricing-card__price-label">
                        {priceLabel}
                      </span>
                    )}
                  </div>
                )}
              </>
            )}
            {items != null && (
              <ul className="sds-pricing-card__items">{items}</ul>
            )}
          </div>
          {action != null && (
            <div className="sds-pricing-card__action">{action}</div>
          )}
        </>
      )}
    </div>
  );
});
