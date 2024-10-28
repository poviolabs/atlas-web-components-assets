import clsx from "clsx";
import { Checkbox as AriaCheckbox, CheckboxProps as AriaCheckboxProps } from "react-aria-components";

import {
  RadioOrCheckboxLabel,
  RadioOrCheckboxVariantProps,
  radioOrCheckboxIndicatorClass,
} from "@/components/ui/inputs/shared/radioOrCheckboxStyles";

import { CheckboxCheckmark } from "./CheckboxCheckmark";

type CheckboxProps = RadioOrCheckboxVariantProps &
  AriaCheckboxProps & {
    children: string;
  };

export const Checkbox = ({ children, variant, ...props }: CheckboxProps) => {
  return (
    <AriaCheckbox {...props} className={clsx(radioOrCheckboxIndicatorClass, props.className)}>
      <CheckboxCheckmark variant={variant} />
      <RadioOrCheckboxLabel>{children}</RadioOrCheckboxLabel>
    </AriaCheckbox>
  );
};
