import { forwardRef, type ReactNode } from 'react';
import { FieldShell } from '../_shared/Field';
import './TextArea.css';

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
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
      <textarea
        ref={ref}
        id={id}
        disabled={disabled}
        className="sds-field__input sds-textarea"
        {...rest}
      />
    </FieldShell>
  );
});
