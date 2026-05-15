import { forwardRef, type ReactNode } from 'react';
import './ProductInfoCard.css';

export interface ProductInfoCardProps extends React.ComponentPropsWithoutRef<'div'> {
  image?: ReactNode;
  label?: ReactNode;
  price?: ReactNode;
  description?: ReactNode;
}

export const ProductInfoCard = forwardRef<HTMLDivElement, ProductInfoCardProps>(
  function ProductInfoCard(
    { image, label, price, description, className, children, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={['sds-product-info-card', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {image != null && <div className="sds-product-info-card__image">{image}</div>}
        <div className="sds-product-info-card__body">
          {children ?? (
            <>
              {label != null && (
                <p className="sds-product-info-card__label">{label}</p>
              )}
              {price != null && (
                <p className="sds-product-info-card__price">{price}</p>
              )}
              {description != null && (
                <p className="sds-product-info-card__description">{description}</p>
              )}
            </>
          )}
        </div>
      </div>
    );
  },
);
