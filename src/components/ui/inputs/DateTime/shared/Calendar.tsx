import { useCalendar } from "@react-aria/calendar";
import { CalendarState, CalendarStateOptions } from "@react-stately/calendar";
import clsx from "clsx";
import { useState } from "react";
import { DatePickerState } from "react-stately";

import { CalendarGrid } from "@/components/ui/inputs/DateTime/shared/CalendarGrid";
import { CalendarHeader } from "@/components/ui/inputs/DateTime/shared/CalendarHeader";
import { MonthPicker } from "@/components/ui/inputs/DateTime/shared/MonthPicker";
import { TimePickerForm } from "@/components/ui/inputs/DateTime/shared/TimePickerForm";
import { YearPicker } from "@/components/ui/inputs/DateTime/shared/YearPicker";

type DateTimeCalendarProps =
  | { includesTime?: false; datePickerState?: never; hourCycle?: never }
  | { includesTime: true; datePickerState: DatePickerState; hourCycle?: 12 | 24 };

type CalendarProps = DateTimeCalendarProps & {
  className?: string;
  state: CalendarState;
  calendarProps: Omit<CalendarStateOptions, "locale" | "createCalendar">;
};

export type ToggleState = "month" | "year" | "time";

export const Calendar = ({ className, includesTime, datePickerState, hourCycle, ...props }: CalendarProps) => {
  const [toggleState, setToggleState] = useState<ToggleState | null>(null);

  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(props.calendarProps, props.state);

  const getContent = () => {
    if (!toggleState) {
      return <CalendarGrid state={props.state} />;
    }

    if (toggleState === "month") {
      return <MonthPicker state={props.state} />;
    }

    if (toggleState === "year") {
      return <YearPicker state={props.state} />;
    }

    if (toggleState === "time" && includesTime) {
      return (
        <div className="flex h-72 w-80 items-center justify-center">
          <TimePickerForm datePickerState={datePickerState} />
        </div>
      );
    }

    return null;
  };

  return (
    <div {...calendarProps} className={clsx("flex w-full flex-col items-center bg-elevation-background", className)}>
      <CalendarHeader
        calendarState={props.state}
        datePickerState={datePickerState}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
        includesTime={includesTime}
        hourCycle={hourCycle}
        toggleState={toggleState}
        setToggleState={setToggleState}
      />

      <div className="flex flex-col items-center">{getContent()}</div>
    </div>
  );
};
