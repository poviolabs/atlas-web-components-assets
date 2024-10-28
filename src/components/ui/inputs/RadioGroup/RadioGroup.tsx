import {
  Label as AriaLabel,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
} from "react-aria-components";

import {
  RadioOrCheckboxLabel,
  RadioOrCheckboxVariantProps,
  radioOrCheckbox,
  radioOrCheckboxIndicatorClass,
} from "@/components/ui/inputs/shared/radioOrCheckboxStyles";
import { Typography } from "@/components/ui/text/Typography/Typography";

type IProps = RadioOrCheckboxVariantProps &
  AriaRadioGroupProps & {
    label: string;
    labelHidden?: boolean;
    options: {
      label: string;
      value: string;
    }[];
  };

export const RadioGroup = ({ variant, label, labelHidden, options, ...props }: IProps) => {
  return (
    <AriaRadioGroup {...props}>
      <AriaLabel hidden={labelHidden} className="mb-2-5">
        <Typography size="label-2" variant="prominent-1">
          {label}
        </Typography>
      </AriaLabel>
      <div className="flex flex-col">
        {options.map((option) => (
          <AriaRadio value={option.value} className={radioOrCheckboxIndicatorClass} key={option.value}>
            <div
              className={radioOrCheckbox({
                variant,
                className: "relative h-3-5 w-3-5 rounded-full p-1-5",
              })}
            >
              <div className="absolute hidden h-1 w-1 rounded-full bg-interactive-icon-on group-selected:block" />
            </div>

            <RadioOrCheckboxLabel>{option.label}</RadioOrCheckboxLabel>
          </AriaRadio>
        ))}
      </div>
    </AriaRadioGroup>
  );
};
