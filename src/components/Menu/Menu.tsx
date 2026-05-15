import { forwardRef, type ReactNode } from 'react';
import './Menu.css';

export interface MenuProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role="menu"
      className={['sds-menu', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
});

export interface MenuHeaderProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  title?: ReactNode;
  subtitle?: ReactNode;
}

export const MenuHeader = forwardRef<HTMLDivElement, MenuHeaderProps>(function MenuHeader(
  { title, subtitle, className, children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={['sds-menu__header', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children ?? (
        <>
          {title != null && <span className="sds-menu__header-title">{title}</span>}
          {subtitle != null && (
            <span className="sds-menu__header-subtitle">{subtitle}</span>
          )}
        </>
      )}
    </div>
  );
});

export const MenuHeading = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(function MenuHeading({ className, children, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={['sds-menu__heading', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
});

export const MenuSeparator = forwardRef<
  HTMLHRElement,
  React.ComponentPropsWithoutRef<'hr'>
>(function MenuSeparator({ className, ...rest }, ref) {
  return (
    <hr
      ref={ref}
      className={['sds-menu__separator', className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
});

export const MenuShortcut = forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(function MenuShortcut({ className, children, ...rest }, ref) {
  return (
    <span
      ref={ref}
      className={['sds-menu__shortcut', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
});
