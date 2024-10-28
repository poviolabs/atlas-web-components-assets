import { VariantProps, cva } from 'class-variance-authority';
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import { ButtonContent } from '@/components/ui/buttons/shared/ButtonContent';
import { uiOutlineClass } from '@/components/ui/global/outline';
import { TooltipEllipsis } from '@/components/ui/overlays/Tooltip/TooltipEllipsis';

export const button = cva(
  [
    'flex items-center justify-center gap-icon-to-label-spacing rounded-button-rounding',
    uiOutlineClass,
  ],
  {
    variants: {
      width: {
        s: 'w-full max-w-4-5xs',
        m: 'w-full max-w-3-5xs',
        l: 'w-full max-w-3xs',
        fit: 'w-full',
        auto: 'w-auto',
      },
      size: {
        small: 'p-height-s',
        default: 'p-height-m',
        large: 'p-height-l',
      },
      iconPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
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

          // styles for ToggleButton - we include them here to avoid code duplication
          'selected:bg-interactive-outlined-toggled',
          'selected:text-interactive-outlined-on-toggled',
          'selected:hover:bg-interactive-outlined-hover',
          'selected:hover:text-interactive-outlined-on-toggled',
          'selected:disabled:bg-interactive-outlined-disabled',
        ],
      },
    },
    defaultVariants: {
      width: 'fit',
      size: 'default',
      variant: 'primary',
      iconPosition: 'left',
    },
  }
);

type ButtonVariantProps = VariantProps<typeof button>;

type ButtonProps = ButtonVariantProps &
  AriaButtonProps & {
    children: string;
    isLoading?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    link?: LinkProps & { target?: string };
    hideText?: boolean;
    noDisableWhenLoading?: boolean;
  };

export const Button = ({
  width,
  size,
  variant,
  icon: Icon,
  iconPosition,
  children,
  isLoading,
  className,
  link,
  hideText,
  noDisableWhenLoading,
  ...props
}: ButtonProps) => {
  //TODO: check if the ui library can see if the next is installed so it uses NextLink instead of a
  const Component: any = link ? 'a' : AriaButton;

  return (
    <TooltipEllipsis text={children}>
      {(onContentRef) => (
        <Component
          {...props}
          {...link}
          isDisabled={props.isDisabled || (isLoading && !noDisableWhenLoading)}
          className={button({ width, size, variant, iconPosition, className })}
        >
          <ButtonContent
            isLoading={isLoading}
            icon={Icon}
            text={children}
            ref={onContentRef}
            hideText={hideText}
          />
        </Component>
      )}
    </TooltipEllipsis>
  );
};
