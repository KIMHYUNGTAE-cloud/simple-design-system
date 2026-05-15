import { forwardRef, type ReactNode } from 'react';
import './MenuItem.css';

export interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
  icon?: ReactNode;
  description?: ReactNode;
  shortcut?: ReactNode;
}

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(function MenuItem(
  { icon, description, shortcut, type = 'button', className, children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      role="menuitem"
      className={['sds-menu-item', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {icon != null && <span className="sds-menu-item__icon">{icon}</span>}
      <span className="sds-menu-item__body">
        <span className="sds-menu-item__row">
          <span className="sds-menu-item__label">{children}</span>
          {shortcut != null && (
            <span className="sds-menu-item__shortcut">{shortcut}</span>
          )}
        </span>
        {description != null && (
          <span className="sds-menu-item__description">{description}</span>
        )}
      </span>
    </button>
  );
});
