import { VariantProps, cva } from 'class-variance-authority';
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import { uiOutlineClass } from '@/components/ui/global/outline';

const iconButton = cva(
  [
    'flex w-fit items-center justify-center rounded-button-rounding',
    uiOutlineClass,
  ],
  {
    variants: {
      size: {
        small: 'p-height-s',
        medium: 'p-height-m',
        large: 'p-height-l',
      },
      variant: {
        primary: [
          'bg-interactive-primary-idle',
          'text-interactive-primary-on',
          'hover:bg-interactive-primary-hover',
          'active:bg-interactive-primary-pressed',
          'focus-visible:outline-interactive-primary-focus',
          'disabled:bg-interactive-primary-disabled',
        ],
        secondary: [
          'bg-interactive-secondary-idle',
          'text-interactive-secondary-on',
          'hover:bg-interactive-secondary-hover',
          'active:bg-interactive-secondary-pressed',
          'focus-visible:outline-interactive-secondary-focus',
          'disabled:bg-interactive-secondary-disabled',
        ],
        outlined: [
          'border',
          'border-interactive-outlined-idle',
          'text-interactive-outlined-on',
          'hover:border-interactive-outlined-hover',
          'hover:text-interactive-outlined-hover',
          'active:border-interactive-outlined-pressed',
          'active:text-interactive-outlined-pressed',
          'focus-visible:outline-interactive-outlined-focus',
          'disabled:border-interactive-outlined-disabled',
          'disabled:text-interactive-outlined-disabled',
        ],
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'primary',
    },
  }
);

type IconButtonVariantProps = VariantProps<typeof iconButton>;

type IconButtonProps = IconButtonVariantProps &
  AriaButtonProps & {
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    link?: LinkProps & { target?: string };
  };

export const IconButton = ({
  label,
  icon: Icon,
  variant,
  size,
  link,
  ...props
}: IconButtonProps) => {
  const Component: any = link ? 'a' : AriaButton;

  return (
    <Component
      {...props}
      {...link}
      isDisabled={props.isDisabled}
      className={iconButton({ variant, size, className: props.className })}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </Component>
  );
};
