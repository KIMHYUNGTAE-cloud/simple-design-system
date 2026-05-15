import { forwardRef, type ReactNode } from 'react';
import './AccordionItem.css';

export interface AccordionItemProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'content'> {
  open?: boolean;
  title?: ReactNode;
  content?: ReactNode;
  onToggle?: () => void;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem(
    { open = false, title, content, onToggle, className, children, ...rest },
    ref,
  ) {
    return (
      <div
        ref={ref}
        data-open={open}
        className={['sds-accordion-item', className].filter(Boolean).join(' ')}
        {...rest}
      >
        <button
          type="button"
          aria-expanded={open}
          className="sds-accordion-item__header"
          onClick={onToggle}
        >
          <span className="sds-accordion-item__title">{title}</span>
          <svg
            viewBox="0 0 20 20"
            width={20}
            height={20}
            aria-hidden="true"
            className="sds-accordion-item__chevron"
          >
            <path
              d="M6 8 L10 12 L14 8"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
        {open && (
          <div className="sds-accordion-item__content">
            {children ?? <p>{content}</p>}
          </div>
        )}
      </div>
    );
  },
);
