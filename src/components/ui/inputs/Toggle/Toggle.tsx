import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { Switch as AriaSwitch, SwitchProps as AriaSwitchProps } from "react-aria-components";

import { RadioOrCheckboxLabel } from "@/components/ui/inputs/shared/radioOrCheckboxStyles";

export const toggle = cva(
  "h-6 w-10 rounded-full before:m-0-5 before:block before:aspect-square before:h-5 before:rounded-full before:transition-transform before:content-[''] group-selected:before:translate-x-4",
  {
    variants: {
      variant: {
        default: [
          "bg-interactive-icon-idle",
          "group-disabled:bg-interactive-icon-disabled",
          "group-hover:bg-interactive-icon-hover",
          "group-pressed:bg-interactive-icon-pressed",
          "group-selected:bg-interactive-icon-toggled",
          "group-selected:group-hover:bg-interactive-icon-hover",
          "group-selected:group-pressed:bg-interactive-icon-pressed",
          "before:bg-interactive-icon-on",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ToggleVariantProps = VariantProps<typeof toggle>;

type ToggleProps = ToggleVariantProps &
  AriaSwitchProps & {
    children: string;
  };

export const Toggle = ({ children, variant, ...props }: ToggleProps) => {
  return (
    <AriaSwitch {...props} className={clsx("group flex cursor-pointer items-center gap-2", props.className)}>
      <div className={toggle({ variant })} />
      <RadioOrCheckboxLabel>{children}</RadioOrCheckboxLabel>
    </AriaSwitch>
  );
};
