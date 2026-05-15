import { forwardRef, type ReactNode } from 'react';
import { Icon } from '../Icon';
import './ReviewCard.css';

export interface ReviewCardProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  rating?: ReactNode | number;
  title?: ReactNode;
  body?: ReactNode;
  avatar?: ReactNode;
  name?: ReactNode;
  date?: ReactNode;
}

function defaultRating(count: number) {
  const stars = Math.max(0, Math.min(5, Math.round(count)));
  return (
    <>
      {Array.from({ length: stars }, (_, i) => (
        <Icon key={i} name="star" size={20} aria-hidden />
      ))}
    </>
  );
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(function ReviewCard(
  { rating, title, body, avatar, name, date, className, children, ...rest },
  ref,
) {
  const ratingNode =
    typeof rating === 'number' ? defaultRating(rating) : rating;
  return (
    <div
      ref={ref}
      className={['sds-review-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children ?? (
        <>
          {ratingNode != null && (
            <div className="sds-review-card__rating" role="img" aria-label="rating">
              {ratingNode}
            </div>
          )}
          {(title != null || body != null) && (
            <div className="sds-review-card__body">
              {title != null && (
                <p className="sds-review-card__title">{title}</p>
              )}
              {body != null && (
                <p className="sds-review-card__text">{body}</p>
              )}
            </div>
          )}
          {(avatar != null || name != null || date != null) && (
            <div className="sds-review-card__author">
              {avatar != null && (
                <span className="sds-review-card__avatar">{avatar}</span>
              )}
              {(name != null || date != null) && (
                <span className="sds-review-card__info">
                  {name != null && (
                    <span className="sds-review-card__name">{name}</span>
                  )}
                  {date != null && (
                    <span className="sds-review-card__date">{date}</span>
                  )}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
});
