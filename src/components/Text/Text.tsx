import { forwardRef, type ReactElement } from 'react';
import './Text.css';

export type TextVariant =
  | 'titleHero'
  | 'titlePage'
  | 'subtitle'
  | 'heading'
  | 'subheading'
  | 'body'
  | 'bodyStrong'
  | 'bodyEmphasis'
  | 'bodyLink'
  | 'bodySmall'
  | 'bodyCode'
  | 'listItem'
  | 'linkListItem';

const variantTag: Record<TextVariant, keyof React.JSX.IntrinsicElements> = {
  titleHero: 'h1',
  titlePage: 'h1',
  subtitle: 'p',
  heading: 'h2',
  subheading: 'h3',
  body: 'p',
  bodyStrong: 'strong',
  bodyEmphasis: 'em',
  bodyLink: 'a',
  bodySmall: 'p',
  bodyCode: 'code',
  listItem: 'li',
  linkListItem: 'li',
};

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: keyof React.JSX.IntrinsicElements;
}

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { variant = 'body', as, className, children, ...rest },
  ref,
): ReactElement {
  const Component = (as ?? variantTag[variant]) as 'p';
  return (
    <Component
      ref={ref as React.Ref<HTMLParagraphElement>}
      data-variant={variant}
      className={['sds-text', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Component>
  );
});
