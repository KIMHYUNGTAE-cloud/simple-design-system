import { forwardRef, type ReactNode } from 'react';
import './Notification.css';

export interface NotificationProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  variant?: 'message' | 'alert';
  title?: ReactNode;
  body?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  function Notification(
    {
      variant = 'message',
      title,
      body,
      icon,
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
        role={variant === 'alert' ? 'alert' : 'status'}
        data-variant={variant}
        className={['sds-notification', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {icon != null && <span className="sds-notification__icon">{icon}</span>}
        <div className="sds-notification__stack">
          {children ?? (
            <div className="sds-notification__content">
              {title != null && <p className="sds-notification__title">{title}</p>}
              {body != null && <p className="sds-notification__body">{body}</p>}
            </div>
          )}
          {action != null && <div className="sds-notification__action">{action}</div>}
        </div>
        {dismissible && (
          <button
            type="button"
            aria-label="Dismiss"
            className="sds-notification__dismiss"
            onClick={onDismiss}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
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
