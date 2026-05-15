import { forwardRef, type ReactNode } from 'react';
import './DialogBody.css';

export interface DialogBodyProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  type?: 'card' | 'sheet';
  heading?: ReactNode;
  body?: ReactNode;
  action?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  function DialogBody(
    {
      type = 'card',
      heading,
      body,
      action,
      dismissible = false,
      onDismiss,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <div
        ref={ref}
        data-type={type}
        className={['sds-dialog-body', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children ?? (
          <>
            {(heading != null || body != null) && (
              <div className="sds-dialog-body__text">
                {heading != null && (
                  <p className="sds-dialog-body__heading">{heading}</p>
                )}
                {body != null && <p className="sds-dialog-body__copy">{body}</p>}
              </div>
            )}
            {action != null && (
              <div className="sds-dialog-body__action">{action}</div>
            )}
          </>
        )}
        {dismissible && (
          <button
            type="button"
            aria-label="Dismiss"
            className="sds-dialog-body__dismiss"
            onClick={onDismiss}
          >
            <svg viewBox="0 0 20 20" width={20} height={20} aria-hidden="true">
              <path
                d="M5 5 L15 15 M15 5 L5 15"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    );
  },
);
