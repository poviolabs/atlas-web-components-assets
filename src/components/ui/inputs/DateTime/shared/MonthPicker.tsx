import { useDateFormatter } from '@react-aria/i18n';
import { CalendarState } from '@react-stately/calendar';
import clsx from 'clsx';
import { ListBox, ListBoxItem } from 'react-aria-components';

import { Typography } from '@/components/ui/text/Typography/Typography';

export interface MonthPickerProps {
  state: CalendarState;
}

export const MonthPicker = ({ state }: MonthPickerProps) => {
  const months: string[] = [];
  const formatter = useDateFormatter({
    month: 'long',
    timeZone: state.timeZone,
  });

  const numMonths = state.focusedDate.calendar.getMonthsInYear(
    state.focusedDate
  );

  for (let i = 1; i <= numMonths; i++) {
    const date = state.focusedDate.set({ month: i });
    months.push(formatter.format(date.toDate(state.timeZone)));
  }

  return (
    <ListBox
      aria-label="Month"
      selectionMode="single"
      selectionBehavior="replace"
      selectedKeys={[state.focusedDate.month]}
      onSelectionChange={(key) => {
        if (key === 'all') {
          return;
        }

        const index = [...key][0] as number;
        if (index == null) {
          return;
        }

        const date = state.focusedDate.set({ month: [...key][0] as number });
        state.setFocusedDate(date);
      }}
      className="grid h-72 w-80 grid-cols-3 grid-rows-4 gap-2 p-3"
    >
      {months.map((month, index) => (
        <ListBoxItem
          key={month}
          id={index + 1}
          textValue={month}
          className={clsx(
            'flex cursor-pointer items-center justify-center text-interactive-text-on-bg',
            'rounded-button-rounding border border-solid border-elevation-outline-1 bg-elevation-background',
            'hover:text-interactive-text-hover',
            'selected:border-interactive-primary-idle selected:bg-interactive-primary-idle selected:text-interactive-text-on-inverted'
          )}
        >
          <Typography as="span" size="label-2">
            {month}
          </Typography>
        </ListBoxItem>
      ))}
    </ListBox>
  );
};
