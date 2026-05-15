import { forwardRef, type ReactNode } from 'react';
import './Tag.css';

export interface TagProps extends React.ComponentPropsWithoutRef<'span'> {
  scheme?: 'brand' | 'neutral' | 'positive' | 'danger' | 'warning';
  variant?: 'primary' | 'secondary';
  removable?: boolean;
  removeIcon?: ReactNode;
  onRemove?: () => void;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  {
    scheme = 'brand',
    variant = 'primary',
    removable = false,
    removeIcon,
    onRemove,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <span
      ref={ref}
      data-scheme={scheme}
      data-variant={variant}
      className={['sds-tag', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children != null && <span className="sds-tag__label">{children}</span>}
      {removable && (
        <button
          type="button"
          aria-label="Remove"
          className="sds-tag__remove"
          onClick={onRemove}
        >
          {removeIcon ?? (
            <svg
              viewBox="0 0 16 16"
              width={16}
              height={16}
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 4 L12 12 M12 4 L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      )}
    </span>
  );
});
