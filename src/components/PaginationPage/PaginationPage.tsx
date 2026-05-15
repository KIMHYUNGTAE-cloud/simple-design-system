import { forwardRef } from 'react';
import './PaginationPage.css';

export interface PaginationPageProps
  extends React.ComponentPropsWithoutRef<'button'> {
  current?: boolean;
}

export const PaginationPage = forwardRef<HTMLButtonElement, PaginationPageProps>(
  function PaginationPage(
    { current = false, type = 'button', className, children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        aria-current={current ? 'page' : undefined}
        data-current={current}
        className={['sds-pagination-page', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
