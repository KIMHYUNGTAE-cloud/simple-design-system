import { forwardRef, type ReactNode } from 'react';
import { FieldShell } from '../_shared/Field';
import './Search.css';

export interface SearchProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
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
      <div className="sds-search">
        <svg
          viewBox="0 0 20 20"
          width={20}
          height={20}
          aria-hidden="true"
          className="sds-search__icon"
        >
          <circle
            cx="9"
            cy="9"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M14 14 L17 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <input
          ref={ref}
          id={id}
          type="search"
          disabled={disabled}
          className="sds-field__input sds-search__input"
          {...rest}
        />
      </div>
    </FieldShell>
  );
});
