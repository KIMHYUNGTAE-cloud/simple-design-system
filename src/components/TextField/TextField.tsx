import { forwardRef, type ReactNode } from 'react';
import { FieldShell } from '../_shared/Field';

export interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, description, error, type = 'text', className, id, disabled, ...rest },
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
        type={type}
        disabled={disabled}
        className="sds-field__input"
        {...rest}
      />
    </FieldShell>
  );
});
