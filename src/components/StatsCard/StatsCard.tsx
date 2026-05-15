import { forwardRef, type ReactNode } from 'react';
import './StatsCard.css';

export interface StatsCardProps extends React.ComponentPropsWithoutRef<'div'> {
  icon?: ReactNode;
  value?: ReactNode;
  label?: ReactNode;
}

export const StatsCard = forwardRef<HTMLDivElement, StatsCardProps>(function StatsCard(
  { icon, value, label, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={['sds-stats-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {icon != null && <div className="sds-stats-card__icon">{icon}</div>}
      <div className="sds-stats-card__body">
        {children ?? (
          <>
            {value != null && (
              <p className="sds-stats-card__value">{value}</p>
            )}
            {label != null && (
              <p className="sds-stats-card__label">{label}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
});
