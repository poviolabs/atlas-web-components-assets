import { forwardRef } from "react";
import { DatePickerAria } from "react-aria";

import { CalendarIcon } from "@/assets/icons/general/Calendar";
import { InlineIconButton } from "@/components/ui/buttons/InlineIconButton/InlineIconButton";
import { DateField } from "@/components/ui/inputs/DateTime/shared/DateField";
import { textInput } from "@/components/ui/inputs/TextInput/TextInputWrapper";
import { InputHeader } from "@/components/ui/inputs/shared/InputHeader";

interface DatePickerInputProps {
  label: string;
  labelProps: DatePickerAria["labelProps"];
  groupProps: DatePickerAria["groupProps"];
  fieldProps: DatePickerAria["fieldProps"];
  buttonProps: DatePickerAria["buttonProps"];
}

export const DatePickerInput = forwardRef<HTMLDivElement, DatePickerInputProps>(
  ({ label, labelProps, groupProps, fieldProps, buttonProps }, ref) => {
    return (
      <>
        <div {...labelProps}>
          <InputHeader label={label} />
        </div>
        <div
          ref={ref}
          className={textInput({
            variant: "outlined",
            className: "flex items-center justify-between gap-2",
          })}
          {...groupProps}
        >
          <DateField {...fieldProps} />
          <InlineIconButton label="" {...buttonProps} icon={CalendarIcon} />
        </div>
      </>
    );
  },
);
