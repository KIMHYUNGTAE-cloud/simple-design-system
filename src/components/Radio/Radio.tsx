import { forwardRef, type ReactNode } from 'react';
import './Radio.css';

export interface RadioProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, description, id, disabled, className, ...rest },
  ref,
) {
  return (
    <div
      data-disabled={disabled}
      className={['sds-radio-field', className].filter(Boolean).join(' ')}
    >
      <label className="sds-radio-field__row">
        <input
          ref={ref}
          id={id}
          type="radio"
          disabled={disabled}
          className="sds-radio-field__input"
          {...rest}
        />
        <span className="sds-radio-field__circle" aria-hidden="true" />
        {label != null && <span className="sds-radio-field__label">{label}</span>}
      </label>
      {description != null && (
        <p className="sds-radio-field__description">{description}</p>
      )}
    </div>
  );
});
