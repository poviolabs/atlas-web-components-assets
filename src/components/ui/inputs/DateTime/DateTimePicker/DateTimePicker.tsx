import { CalendarDate, createCalendar, getLocalTimeZone, now, today } from "@internationalized/date";
import { useRef } from "react";
import { DateValue, useDatePicker, useLocale } from "react-aria";
import { DatePickerStateOptions, useCalendarState, useDatePickerState } from "react-stately";

import { Calendar } from "@/components/ui/inputs/DateTime/shared/Calendar";
import { DatePickerFooter } from "@/components/ui/inputs/DateTime/shared/DatePickerFooter";
import { DatePickerInput } from "@/components/ui/inputs/DateTime/shared/DatePickerInput";
import { DateTimeDialog } from "@/components/ui/inputs/DateTime/shared/DateTimeDialog";

interface DateTimePickerProps extends Omit<DatePickerStateOptions<DateValue>, "granularity" | "shouldCloseOnSelect"> {
  label: string;
}

export const DateTimePicker = ({ label, onChange, value, ...props }: DateTimePickerProps) => {
  const dialogState = useDatePickerState({
    ...props,
    defaultValue: value || props.defaultValue,
    shouldCloseOnSelect: false,
    granularity: "minute",
    hideTimeZone: true,
  });
  const state = useDatePickerState({
    ...props,
    value,
    onChange: (val) => {
      onChange?.(val);
      dialogState.setValue(val);
      calendarState.setFocusedDate((val as CalendarDate) || today(getLocalTimeZone()));
    },
    shouldCloseOnSelect: false,
    granularity: "minute",
    hideTimeZone: true,
  });

  const ref = useRef<HTMLDivElement>(null);

  const { groupProps, labelProps, fieldProps, buttonProps, dialogProps } = useDatePicker(
    { ...props, granularity: "minute", hideTimeZone: true },
    state,
    ref,
  );
  const { calendarProps } = useDatePicker(props, dialogState, ref);

  const { locale } = useLocale();
  const calendarState = useCalendarState({
    ...calendarProps,
    locale,
    createCalendar,
  });

  const onApply = () => {
    state.setValue(dialogState.value);
    state.toggle();
  };

  const onTodayPress = () => {
    dialogState.setValue(now(getLocalTimeZone()));
    calendarState.setFocusedDate(today(getLocalTimeZone()));
  };

  const onOpenChange = (isOpen: boolean) => {
    state.toggle();
    if (!isOpen) {
      dialogState.setValue(state.value);
      calendarState.setFocusedDate((state.value as CalendarDate) || today(getLocalTimeZone()));
    }
  };

  return (
    <div className="relative inline-flex w-full flex-col text-left">
      <DatePickerInput
        ref={ref}
        label={label}
        labelProps={labelProps}
        groupProps={groupProps}
        fieldProps={fieldProps}
        buttonProps={buttonProps}
      />
      <DateTimeDialog
        footer={
          <DatePickerFooter
            isValid={!dialogState.isInvalid && !!dialogState.value}
            onTodayPress={onTodayPress}
            onApply={onApply}
          />
        }
        label={label}
        triggerRef={ref}
        dialogProps={dialogProps}
        isOpen={state.isOpen}
        onOpenChange={onOpenChange}
      >
        <Calendar state={calendarState} calendarProps={calendarProps} includesTime datePickerState={dialogState} />
      </DateTimeDialog>
    </div>
  );
};
