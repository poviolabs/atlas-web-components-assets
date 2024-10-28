import clsx from 'clsx';
type LinkType = React.AnchorHTMLAttributes<HTMLAnchorElement>;

import { PropsWithChildren } from 'react';

import { uiOutlineClass } from '@/components/ui/global/outline';

type LinkProps = PropsWithChildren<LinkType> & {
  className?: string;
};

export const Link = (props: LinkProps) => {
  return (
    <a
      {...props}
      className={clsx(
        uiOutlineClass,
        'text-interactive-primary-idle underline focus-visible:outline-interactive-primary-focus',
        'active:text-interactive-primary-pressed hover:text-interactive-primary-hover focus-visible:text-interactive-primary-focus',
        props.className
      )}
    />
  );
};
