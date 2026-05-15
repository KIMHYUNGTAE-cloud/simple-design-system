import { forwardRef, type ReactNode } from 'react';
import './AvatarBlock.css';

export interface AvatarBlockProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  avatar?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
}

export const AvatarBlock = forwardRef<HTMLDivElement, AvatarBlockProps>(
  function AvatarBlock(
    { avatar, title, subtitle, className, children, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className={['sds-avatar-block', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {avatar != null && <span className="sds-avatar-block__avatar">{avatar}</span>}
        <span className="sds-avatar-block__text">
          {children ?? (
            <>
              {title != null && <span className="sds-avatar-block__title">{title}</span>}
              {subtitle != null && (
                <span className="sds-avatar-block__subtitle">{subtitle}</span>
              )}
            </>
          )}
        </span>
      </div>
    );
  },
);
