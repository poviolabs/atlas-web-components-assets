import { forwardRef } from "react";
import { DateFieldAria } from "react-aria";
import { TimeFieldState } from "react-stately";

import { ClockIcon } from "@/assets/icons/general/Clock";
import { InlineIconButton } from "@/components/ui/buttons/InlineIconButton/InlineIconButton";
import { TimeField } from "@/components/ui/inputs/DateTime/shared/TimeField";
import { textInput } from "@/components/ui/inputs/TextInput/TextInputWrapper";
import { InputHeader } from "@/components/ui/inputs/shared/InputHeader";

interface DatePickerInputProps {
  label: string;
  labelProps: DateFieldAria["labelProps"];
  fieldProps: DateFieldAria["fieldProps"];
  state: TimeFieldState;
  onPress: () => void;
}

export const TimePickerInput = forwardRef<HTMLDivElement, DatePickerInputProps>(
  ({ label, labelProps, fieldProps, state, onPress }, ref) => {
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
        >
          <TimeField fieldProps={fieldProps} state={state} />
          <InlineIconButton label="" onPress={onPress} icon={ClockIcon} />
        </div>
      </>
    );
  },
);
