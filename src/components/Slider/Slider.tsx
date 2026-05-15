import { forwardRef, type ReactNode } from 'react';
import { FieldShell } from '../_shared/Field';
import './Slider.css';

export interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
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
        type="range"
        disabled={disabled}
        className="sds-slider"
        {...rest}
      />
    </FieldShell>
  );
});
