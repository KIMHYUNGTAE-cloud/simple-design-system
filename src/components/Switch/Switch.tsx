import { forwardRef, type ReactNode } from 'react';
import './Switch.css';

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, description, id, disabled, className, ...rest },
  ref,
) {
  return (
    <div
      data-disabled={disabled}
      className={['sds-switch-field', className].filter(Boolean).join(' ')}
    >
      <label className="sds-switch-field__row">
        <input
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          disabled={disabled}
          className="sds-switch-field__input"
          {...rest}
        />
        <span className="sds-switch-field__track" aria-hidden="true">
          <span className="sds-switch-field__thumb" />
        </span>
        {label != null && <span className="sds-switch-field__label">{label}</span>}
      </label>
      {description != null && (
        <p className="sds-switch-field__description">{description}</p>
      )}
    </div>
  );
});
