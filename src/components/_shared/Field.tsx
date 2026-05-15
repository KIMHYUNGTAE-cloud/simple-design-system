import { type ReactNode } from 'react';
import './Field.css';

export interface FieldShellProps {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  htmlFor?: string;
}

export function FieldShell({
  label,
  description,
  error,
  disabled = false,
  className,
  children,
  htmlFor,
}: FieldShellProps) {
  return (
    <div
      data-disabled={disabled}
      data-error={error != null}
      className={['sds-field', className].filter(Boolean).join(' ')}
    >
      {label != null && (
        <label className="sds-field__label" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {description != null && <p className="sds-field__description">{description}</p>}
      {children}
      {error != null && <p className="sds-field__error">{error}</p>}
    </div>
  );
}
