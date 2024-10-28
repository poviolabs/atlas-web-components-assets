import clsx from 'clsx';
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import { uiOutlineClass } from '@/components/ui/global/outline';

type InlineIconButtonProps = AriaButtonProps & {
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link?: LinkProps & { target?: string };
};

export const InlineIconButton = ({
  label,
  icon: Icon,
  link,
  ...props
}: InlineIconButtonProps) => {
  const Component: any = link ? 'a' : AriaButton;

  return (
    <Component
      {...props}
      {...(link || {})}
      isDisabled={props.isDisabled}
      className={clsx(
        'inline-flex rounded-button-rounding text-interactive-icon-idle',
        'active:text-interactive-icon-pressed',
        'hover:text-interactive-icon-hover',
        'focus-visible:outline-interactive-icon-focus',
        'disabled:text-interactive-icon-disabled',
        uiOutlineClass,
        props.className
      )}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </Component>
  );
};
