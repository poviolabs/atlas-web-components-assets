import { useRef, useState } from "react";
import { AriaTimeFieldProps, DateValue, TimeValue, useLocale, useTimeField } from "react-aria";
import { useTimeFieldState } from "react-stately";

import { DateTimeDialog } from "@/components/ui/inputs/DateTime/shared/DateTimeDialog";
import { TimePickerFooter } from "@/components/ui/inputs/DateTime/shared/TimePickerFooter";
import { TimePickerForm } from "@/components/ui/inputs/DateTime/shared/TimePickerForm";
import { TimePickerInput } from "@/components/ui/inputs/DateTime/shared/TimePickerInput";
import { useStateAndRef } from "@/hooks/useStateAndRef";

interface TimePickerProps extends AriaTimeFieldProps<TimeValue> {
  label: string;
}

export const TimePicker = ({ onChange, value, ...props }: TimePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newDateValue, newDateValueRef, setNewDateValue] = useStateAndRef<DateValue | null>(null);

  const { locale } = useLocale();

  const dialogState = useTimeFieldState({
    ...props,
    defaultValue: value || props.defaultValue,
    locale,
  });
  const state = useTimeFieldState({
    ...props,
    value,
    onChange: (val) => {
      // First change value is 00:00 due to the below mentioned bug so we should ignore it
      if (!newDateValueRef.current) {
        onChange?.(val);
      }
    },
    locale,
  });

  const ref = useRef<HTMLDivElement | null>(null);
  const { labelProps, fieldProps } = useTimeField(props, state, ref);

  if (newDateValue) {
    setNewDateValue(null);
    state.setValue(newDateValue);
  }

  const onApply = () => {
    // Due to a bug in react stately, if the timeValue is not set, setting value on state doesn't properly update it (https://github.com/adobe/react-spectrum/issues/4791)
    // To work around this we first manually set each segment, then on next render we update the value
    if (!state.timeValue) {
      setNewDateValue(dialogState.value);
      state.segments.forEach((segment) => {
        if (segment.isEditable && segment.value != null) {
          state.setSegment(segment.type, segment.value);
        }
      });
    } else {
      state.setValue(dialogState.value);
    }

    setIsOpen(false);
  };

  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!isOpen) {
      dialogState.setValue(state.value);
    }
  };

  const onOpen = () => {
    dialogState.setValue(state.value);
    setIsOpen(true);
  };

  return (
    <div className="relative inline-flex w-full flex-col text-left">
      <TimePickerInput
        ref={ref}
        label={props.label}
        labelProps={labelProps}
        fieldProps={fieldProps}
        state={state}
        onPress={onOpen}
      />
      <DateTimeDialog
        footer={<TimePickerFooter onApply={onApply} />}
        label={props.label}
        triggerRef={ref}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <TimePickerForm state={dialogState} />
      </DateTimeDialog>
    </div>
  );
};
