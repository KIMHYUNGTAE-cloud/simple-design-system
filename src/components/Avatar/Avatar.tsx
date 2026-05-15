import { forwardRef } from 'react';
import './Avatar.css';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'span'> {
  size?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'square';
  src?: string;
  alt?: string;
  initials?: string;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { size = 'lg', shape = 'circle', src, alt = '', initials, className, ...rest },
  ref,
) {
  const isImage = src != null;
  return (
    <span
      ref={ref}
      data-size={size}
      data-shape={shape}
      data-type={isImage ? 'image' : 'initial'}
      className={['sds-avatar', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {isImage ? (
        <img src={src} alt={alt} className="sds-avatar__image" />
      ) : (
        <span className="sds-avatar__initials">{initials}</span>
      )}
    </span>
  );
});
