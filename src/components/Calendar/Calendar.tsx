import { forwardRef, type ReactNode } from 'react';
import './Calendar.css';

export interface CalendarProps extends React.ComponentPropsWithoutRef<'div'> {
  monthLabel?: ReactNode;
  yearLabel?: ReactNode;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(function Calendar(
  { monthLabel, yearLabel, onPrevMonth, onNextMonth, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="application"
      className={['sds-calendar', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="sds-calendar__header">
        <button
          type="button"
          aria-label="Previous month"
          className="sds-calendar__nav"
          onClick={onPrevMonth}
        >
          <svg viewBox="0 0 20 20" width={20} height={20} aria-hidden="true">
            <path
              d="M12 6 L8 10 L12 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
        <span className="sds-calendar__title">
          {monthLabel}
          {yearLabel != null && <> {yearLabel}</>}
        </span>
        <button
          type="button"
          aria-label="Next month"
          className="sds-calendar__nav"
          onClick={onNextMonth}
        >
          <svg viewBox="0 0 20 20" width={20} height={20} aria-hidden="true">
            <path
              d="M8 6 L12 10 L8 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
      <div className="sds-calendar__grid">{children}</div>
    </div>
  );
});

export interface CalendarButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  selected?: boolean;
  inRange?: boolean;
}

export const CalendarButton = forwardRef<HTMLButtonElement, CalendarButtonProps>(
  function CalendarButton(
    { selected = false, inRange = false, type = 'button', className, children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        aria-pressed={selected}
        data-selected={selected}
        data-in-range={inRange}
        className={['sds-calendar-button', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
