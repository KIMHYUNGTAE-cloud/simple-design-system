import { forwardRef, type ReactNode } from 'react';
import { FieldShell } from '../_shared/Field';
import './Select.css';

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, description, error, className, id, disabled, children, ...rest },
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
      <div className="sds-select">
        <select
          ref={ref}
          id={id}
          disabled={disabled}
          className="sds-field__input sds-select__control"
          {...rest}
        >
          {children}
        </select>
        <svg
          viewBox="0 0 20 20"
          width={20}
          height={20}
          aria-hidden="true"
          className="sds-select__chevron"
        >
          <path
            d="M6 8 L10 12 L14 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </FieldShell>
  );
});
