import { VariantProps, cva } from 'class-variance-authority';
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import { ButtonContent } from '@/components/ui/buttons/shared/ButtonContent';
import { uiOutlineClass } from '@/components/ui/global/outline';
import { TooltipEllipsis } from '@/components/ui/overlays/Tooltip/TooltipEllipsis';

const textButton = cva(
  [
    uiOutlineClass,
    'rounded-button-rounding',
    'flex',
    'justify-center',
    'items-center',
    'gap-1',
    'p-height-xs',
    'group',
    'focus-visible:outline-interactive-primary-focus',
    'disabled:text-interactive-text-disabled',
    'hover:text-interactive-text-hover',
    'active:text-interactive-text-pressed',
  ],
  {
    variants: {
      color: {
        dual: ['text-interactive-text-on-bg'],
        secondary: ['text-interactive-text-on-bg'],
        primary: ['text-interactive-text-on-bg-2'],
      },
      iconPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      color: 'primary',
      iconPosition: 'left',
    },
  }
);

const textButtonIcon = cva(
  [
    'h-6 w-6 flex-shrink-0',
    'group-hover:text-interactive-text-hover',
    'group-active:text-interactive-text-pressed',
    'group-disabled:text-interactive-text-disabled',
  ],
  {
    variants: {
      color: {
        dual: ['text-interactive-text-on-bg-2'],
        secondary: ['text-interactive-text-on-bg'],
        primary: ['text-interactive-text-on-bg-2'],
      },
    },
  }
);

type TextButtonVariantProps = VariantProps<typeof textButton>;

type TextButtonProps = TextButtonVariantProps &
  AriaButtonProps & {
    children: string;
    isLoading?: boolean;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    link?: LinkProps & { target?: string };
    hideText?: boolean;
  };

export const TextButton = ({
  color,
  icon: Icon,
  iconPosition,
  children,
  isLoading,
  link,
  hideText,
  ...props
}: TextButtonProps) => {
  const Component: any = link ? 'a' : AriaButton;

  return (
    <TooltipEllipsis text={children}>
      {(onContentRef) => (
        <Component
          {...props}
          {...link}
          className={textButton({
            color,
            iconPosition,
            className: props.className,
          })}
        >
          <ButtonContent
            isLoading={isLoading}
            icon={Icon}
            text={children}
            ref={onContentRef}
            iconClassName={textButtonIcon({ color })}
            hideText={hideText}
          />
        </Component>
      )}
    </TooltipEllipsis>
  );
};
