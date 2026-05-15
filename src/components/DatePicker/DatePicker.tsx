import { forwardRef, type ReactNode } from 'react';
import { FieldShell } from '../_shared/Field';
import './DatePicker.css';

export interface DatePickerProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  function DatePicker(
    { label, description, error, className, id, disabled, ...rest },
    ref,
  ) {
    return (
      <FieldShell
        label={label}
        description={description}
        error={error}
        disabled={disabled}
        htmlFor={id}
        className={className}
      >
        <div className="sds-datepicker">
          <input
            ref={ref}
            id={id}
            type="date"
            disabled={disabled}
            className="sds-field__input sds-datepicker__control"
            {...rest}
          />
          <svg
            viewBox="0 0 20 20"
            width={20}
            height={20}
            aria-hidden="true"
            className="sds-datepicker__icon"
          >
            <rect
              x="3"
              y="5"
              width="14"
              height="12"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M3 9 L17 9 M7 3 L7 6 M13 3 L13 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </FieldShell>
    );
  },
);
