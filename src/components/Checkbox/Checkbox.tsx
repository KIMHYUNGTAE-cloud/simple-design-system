import { forwardRef, type ReactNode } from 'react';
import './Checkbox.css';

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, indeterminate = false, id, disabled, className, ...rest },
  ref,
) {
  return (
    <div
      data-disabled={disabled}
      className={['sds-checkbox-field', className].filter(Boolean).join(' ')}
    >
      <label className="sds-checkbox-field__row">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          disabled={disabled}
          data-indeterminate={indeterminate}
          className="sds-checkbox-field__input"
          {...rest}
        />
        <span className="sds-checkbox-field__box" aria-hidden="true">
          <svg
            viewBox="0 0 16 16"
            width={16}
            height={16}
            className="sds-checkbox-field__check"
          >
            {indeterminate ? (
              <path
                d="M4 8 L12 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )}
          </svg>
        </span>
        {label != null && <span className="sds-checkbox-field__label">{label}</span>}
      </label>
      {description != null && (
        <p className="sds-checkbox-field__description">{description}</p>
      )}
    </div>
  );
});
