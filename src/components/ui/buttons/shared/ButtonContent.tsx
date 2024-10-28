import { clsx } from "clsx";
import { forwardRef } from "react";

import { Loader } from "@/components/ui/status/Loader/Loader";
import { Typography } from "@/components/ui/text/Typography/Typography";

interface ButtonContentProps {
  text: string;
  isLoading?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  hideText?: boolean;
}

export const ButtonContent = forwardRef<HTMLHeadingElement, ButtonContentProps>(
  ({ text, isLoading, icon: Icon, iconClassName, hideText }, ref) => {
    let iconOrLoader = null;
    if (isLoading) {
      iconOrLoader = <Loader className="flex-shrink-0" color="light" />;
    } else if (Icon) {
      iconOrLoader = <Icon className={clsx("h-6 w-6 flex-shrink-0", iconClassName)} />;
    }

    return (
      <>
        {iconOrLoader}
        <Typography
          size="label-2"
          variant="prominent-1"
          className={`hyphens-auto t:truncate ${hideText ? "sr-only" : ""}`}
          ref={ref}
        >
          {text}
        </Typography>
      </>
    );
  },
);
