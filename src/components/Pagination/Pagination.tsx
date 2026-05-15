import { forwardRef } from 'react';
import './Pagination.css';

export interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { className, children, ...rest },
  ref,
) {
  return (
    <nav
      ref={ref}
      aria-label="Pagination"
      className={['sds-pagination', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </nav>
  );
});

export const PaginationList = forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(function PaginationList({ className, children, ...rest }, ref) {
  return (
    <ol
      ref={ref}
      className={['sds-pagination__list', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </ol>
  );
});

export interface PaginationNextProps extends React.ComponentPropsWithoutRef<'button'> {}

export const PaginationNext = forwardRef<HTMLButtonElement, PaginationNextProps>(
  function PaginationNext({ type = 'button', className, children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        aria-label="Next page"
        className={['sds-pagination__next', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children ?? 'Next'}
        <svg viewBox="0 0 20 20" width={16} height={16} aria-hidden="true">
          <path
            d="M8 6 L12 10 L8 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
    );
  },
);

export const PaginationPrevious = forwardRef<HTMLButtonElement, PaginationNextProps>(
  function PaginationPrevious({ type = 'button', className, children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        aria-label="Previous page"
        className={['sds-pagination__prev', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <svg viewBox="0 0 20 20" width={16} height={16} aria-hidden="true">
          <path
            d="M12 6 L8 10 L12 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        {children ?? 'Previous'}
      </button>
    );
  },
);

export const PaginationGap = forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(function PaginationGap({ className, children, ...rest }, ref) {
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={['sds-pagination__gap', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children ?? '…'}
    </span>
  );
});
