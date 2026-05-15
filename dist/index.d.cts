import * as react from 'react';
import { ReactNode } from 'react';

interface AccordionProps extends React.ComponentPropsWithoutRef<'div'> {
}
declare const Accordion: react.ForwardRefExoticComponent<AccordionProps & react.RefAttributes<HTMLDivElement>>;

interface AccordionItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title' | 'content'> {
    open?: boolean;
    title?: ReactNode;
    content?: ReactNode;
    onToggle?: () => void;
}
declare const AccordionItem: react.ForwardRefExoticComponent<AccordionItemProps & react.RefAttributes<HTMLDivElement>>;

interface AvatarProps extends React.ComponentPropsWithoutRef<'span'> {
    size?: 'sm' | 'md' | 'lg';
    shape?: 'circle' | 'square';
    src?: string;
    alt?: string;
    initials?: string;
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLSpanElement>>;

interface AvatarBlockProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    avatar?: ReactNode;
    title?: ReactNode;
    subtitle?: ReactNode;
}
declare const AvatarBlock: react.ForwardRefExoticComponent<AvatarBlockProps & react.RefAttributes<HTMLDivElement>>;

interface AvatarGroupProps extends React.ComponentPropsWithoutRef<'div'> {
    spacing?: 'overlap' | 'spaced';
}
declare const AvatarGroup: react.ForwardRefExoticComponent<AvatarGroupProps & react.RefAttributes<HTMLDivElement>>;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    variant?: 'primary' | 'neutral' | 'subtle';
    size?: 'md' | 'sm';
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface ButtonGroupProps extends React.ComponentPropsWithoutRef<'div'> {
    align?: 'start' | 'end' | 'center' | 'justify' | 'stack';
}
declare const ButtonGroup: react.ForwardRefExoticComponent<ButtonGroupProps & react.RefAttributes<HTMLDivElement>>;

interface CalendarProps extends React.ComponentPropsWithoutRef<'div'> {
    monthLabel?: ReactNode;
    yearLabel?: ReactNode;
    onPrevMonth?: () => void;
    onNextMonth?: () => void;
}
declare const Calendar: react.ForwardRefExoticComponent<CalendarProps & react.RefAttributes<HTMLDivElement>>;
interface CalendarButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    selected?: boolean;
    inRange?: boolean;
}
declare const CalendarButton: react.ForwardRefExoticComponent<CalendarButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
    variant?: 'stroke' | 'default';
    direction?: 'horizontal' | 'vertical';
    asset?: ReactNode;
    heading?: ReactNode;
    body?: ReactNode;
    action?: ReactNode;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;

interface CardSlotProps extends React.ComponentPropsWithoutRef<'div'> {
}
declare const CardSlot: react.ForwardRefExoticComponent<CardSlotProps & react.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
    label?: ReactNode;
    description?: ReactNode;
    indeterminate?: boolean;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface DateInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
}
declare const DateInput: react.ForwardRefExoticComponent<DateInputProps & react.RefAttributes<HTMLInputElement>>;

interface DatePickerProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
}
declare const DatePicker: react.ForwardRefExoticComponent<DatePickerProps & react.RefAttributes<HTMLInputElement>>;

interface DialogBodyProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    type?: 'card' | 'sheet';
    heading?: ReactNode;
    body?: ReactNode;
    action?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
}
declare const DialogBody: react.ForwardRefExoticComponent<DialogBodyProps & react.RefAttributes<HTMLDivElement>>;

declare const iconPaths: Record<string, string>;
type IconName = keyof typeof iconPaths;

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
    name: IconName;
    size?: 16 | 20 | 24 | 32 | 40 | 48 | number;
    strokeWidth?: number;
}
declare const Icon: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGSVGElement>>;

interface MenuProps extends React.ComponentPropsWithoutRef<'div'> {
}
declare const Menu: react.ForwardRefExoticComponent<MenuProps & react.RefAttributes<HTMLDivElement>>;
interface MenuHeaderProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    title?: ReactNode;
    subtitle?: ReactNode;
}
declare const MenuHeader: react.ForwardRefExoticComponent<MenuHeaderProps & react.RefAttributes<HTMLDivElement>>;
declare const MenuHeading: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const MenuSeparator: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> & react.RefAttributes<HTMLHRElement>>;
declare const MenuShortcut: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;

interface MenuItemProps extends React.ComponentPropsWithoutRef<'button'> {
    icon?: ReactNode;
    description?: ReactNode;
    shortcut?: ReactNode;
}
declare const MenuItem: react.ForwardRefExoticComponent<MenuItemProps & react.RefAttributes<HTMLButtonElement>>;

interface NavigationButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    active?: boolean;
    direction?: 'column' | 'row';
    size?: 'sm' | 'md';
    icon?: ReactNode;
}
declare const NavigationButton: react.ForwardRefExoticComponent<NavigationButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface NavigationButtonListProps extends React.ComponentPropsWithoutRef<'nav'> {
    direction?: 'row' | 'column';
}
declare const NavigationButtonList: react.ForwardRefExoticComponent<NavigationButtonListProps & react.RefAttributes<HTMLElement>>;
declare const NavigationPillList: react.ForwardRefExoticComponent<NavigationButtonListProps & react.RefAttributes<HTMLElement>>;

interface NavigationPillProps extends React.ComponentPropsWithoutRef<'button'> {
    active?: boolean;
}
declare const NavigationPill: react.ForwardRefExoticComponent<NavigationPillProps & react.RefAttributes<HTMLButtonElement>>;

interface NotificationProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    variant?: 'message' | 'alert';
    title?: ReactNode;
    body?: ReactNode;
    icon?: ReactNode;
    action?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
}
declare const Notification: react.ForwardRefExoticComponent<NotificationProps & react.RefAttributes<HTMLDivElement>>;

interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {
}
declare const Pagination: react.ForwardRefExoticComponent<PaginationProps & react.RefAttributes<HTMLElement>>;
declare const PaginationList: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & react.RefAttributes<HTMLOListElement>>;
interface PaginationNextProps extends React.ComponentPropsWithoutRef<'button'> {
}
declare const PaginationNext: react.ForwardRefExoticComponent<PaginationNextProps & react.RefAttributes<HTMLButtonElement>>;
declare const PaginationPrevious: react.ForwardRefExoticComponent<PaginationNextProps & react.RefAttributes<HTMLButtonElement>>;
declare const PaginationGap: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;

interface PaginationPageProps extends React.ComponentPropsWithoutRef<'button'> {
    current?: boolean;
}
declare const PaginationPage: react.ForwardRefExoticComponent<PaginationPageProps & react.RefAttributes<HTMLButtonElement>>;

interface PricingCardProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    variant?: 'stroke' | 'brand';
    device?: 'desktop' | 'mobile';
    title?: ReactNode;
    currency?: ReactNode;
    price?: ReactNode;
    priceLabel?: ReactNode;
    items?: ReactNode;
    action?: ReactNode;
}
declare const PricingCard: react.ForwardRefExoticComponent<PricingCardProps & react.RefAttributes<HTMLDivElement>>;

interface ProductInfoCardProps extends React.ComponentPropsWithoutRef<'div'> {
    image?: ReactNode;
    label?: ReactNode;
    price?: ReactNode;
    description?: ReactNode;
}
declare const ProductInfoCard: react.ForwardRefExoticComponent<ProductInfoCardProps & react.RefAttributes<HTMLDivElement>>;

interface RadioProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
    label?: ReactNode;
    description?: ReactNode;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLInputElement>>;

interface ReviewCardProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    rating?: ReactNode | number;
    title?: ReactNode;
    body?: ReactNode;
    avatar?: ReactNode;
    name?: ReactNode;
    date?: ReactNode;
}
declare const ReviewCard: react.ForwardRefExoticComponent<ReviewCardProps & react.RefAttributes<HTMLDivElement>>;

interface StatsCardProps extends React.ComponentPropsWithoutRef<'div'> {
    icon?: ReactNode;
    value?: ReactNode;
    label?: ReactNode;
}
declare const StatsCard: react.ForwardRefExoticComponent<StatsCardProps & react.RefAttributes<HTMLDivElement>>;

interface SearchProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
}
declare const Search: react.ForwardRefExoticComponent<SearchProps & react.RefAttributes<HTMLInputElement>>;

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

interface SliderProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
}
declare const Slider: react.ForwardRefExoticComponent<SliderProps & react.RefAttributes<HTMLInputElement>>;

interface SwitchProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
    label?: ReactNode;
    description?: ReactNode;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

interface TabProps extends React.ComponentPropsWithoutRef<'button'> {
    active?: boolean;
}
declare const Tab: react.ForwardRefExoticComponent<TabProps & react.RefAttributes<HTMLButtonElement>>;

interface TabsProps extends React.ComponentPropsWithoutRef<'div'> {
}
declare const Tabs: react.ForwardRefExoticComponent<TabsProps & react.RefAttributes<HTMLDivElement>>;

interface TagProps extends React.ComponentPropsWithoutRef<'span'> {
    scheme?: 'brand' | 'neutral' | 'positive' | 'danger' | 'warning';
    variant?: 'primary' | 'secondary';
    removable?: boolean;
    removeIcon?: ReactNode;
    onRemove?: () => void;
}
declare const Tag: react.ForwardRefExoticComponent<TagProps & react.RefAttributes<HTMLSpanElement>>;

interface TagToggleGroupProps extends React.ComponentPropsWithoutRef<'div'> {
}
declare const TagToggleGroup: react.ForwardRefExoticComponent<TagToggleGroupProps & react.RefAttributes<HTMLDivElement>>;

interface TestimonialCardProps extends React.ComponentPropsWithoutRef<'div'> {
    quote?: ReactNode;
    avatar?: ReactNode;
    name?: ReactNode;
    subtitle?: ReactNode;
}
declare const TestimonialCard: react.ForwardRefExoticComponent<TestimonialCardProps & react.RefAttributes<HTMLDivElement>>;

type TextVariant = 'titleHero' | 'titlePage' | 'subtitle' | 'heading' | 'subheading' | 'body' | 'bodyStrong' | 'bodyEmphasis' | 'bodyLink' | 'bodySmall' | 'bodyCode' | 'listItem' | 'linkListItem';
interface TextProps extends React.HTMLAttributes<HTMLElement> {
    variant?: TextVariant;
    as?: keyof React.JSX.IntrinsicElements;
}
declare const Text: react.ForwardRefExoticComponent<TextProps & react.RefAttributes<HTMLElement>>;

interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
}
declare const TextArea: react.ForwardRefExoticComponent<TextAreaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
    label?: ReactNode;
    description?: ReactNode;
    error?: ReactNode;
}
declare const TextField: react.ForwardRefExoticComponent<TextFieldProps & react.RefAttributes<HTMLInputElement>>;

interface TooltipProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    placement?: 'top' | 'bottom' | 'left' | 'right';
    title?: ReactNode;
    body?: ReactNode;
}
declare const Tooltip: react.ForwardRefExoticComponent<TooltipProps & react.RefAttributes<HTMLDivElement>>;

export { Accordion, AccordionItem, type AccordionItemProps, type AccordionProps, Avatar, AvatarBlock, type AvatarBlockProps, AvatarGroup, type AvatarGroupProps, type AvatarProps, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, Calendar, CalendarButton, type CalendarButtonProps, type CalendarProps, Card, type CardProps, CardSlot, type CardSlotProps, Checkbox, type CheckboxProps, DateInput, type DateInputProps, DatePicker, type DatePickerProps, DialogBody, type DialogBodyProps, Icon, type IconName, type IconProps, Menu, MenuHeader, type MenuHeaderProps, MenuHeading, MenuItem, type MenuItemProps, type MenuProps, MenuSeparator, MenuShortcut, NavigationButton, NavigationButtonList, type NavigationButtonListProps, type NavigationButtonProps, NavigationPill, NavigationPillList, type NavigationPillProps, Notification, type NotificationProps, Pagination, PaginationGap, PaginationList, PaginationNext, type PaginationNextProps, PaginationPage, type PaginationPageProps, PaginationPrevious, type PaginationProps, PricingCard, type PricingCardProps, ProductInfoCard, type ProductInfoCardProps, Radio, type RadioProps, ReviewCard, type ReviewCardProps, Search, type SearchProps, Select, type SelectProps, Slider, type SliderProps, StatsCard, type StatsCardProps, Switch, type SwitchProps, Tab, type TabProps, Tabs, type TabsProps, Tag, type TagProps, TagToggleGroup, type TagToggleGroupProps, TestimonialCard, type TestimonialCardProps, Text, TextArea, type TextAreaProps, TextField, type TextFieldProps, type TextProps, type TextVariant, Tooltip, type TooltipProps };
