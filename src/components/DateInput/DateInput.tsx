import { forwardRef, type ReactNode } from 'react';
import { FieldShell } from '../_shared/Field';

export interface DateInputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(function DateInput(
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
      <input
        ref={ref}
        id={id}
        type="date"
        disabled={disabled}
        className="sds-field__input"
        {...rest}
      />
    </FieldShell>
  );
});
