import { useCalendarCell, AriaCalendarCellProps } from '@react-aria/calendar';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { CalendarState } from '@react-stately/calendar';
import clsx from 'clsx';
import { useRef } from 'react';

import { Typography } from '@/components/ui/text/Typography/Typography';

interface CalendarCellProps extends AriaCalendarCellProps {
  state: CalendarState;
}
export const CalendarCell = ({ state, ...props }: CalendarCellProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    cellProps,
    buttonProps,
    formattedDate,
    isSelected,
    isDisabled,
    isOutsideVisibleRange,
  } = useCalendarCell(props, state, ref);

  const { focusProps } = useFocusRing();

  return (
    <td {...cellProps}>
      <div
        ref={ref}
        {...mergeProps(buttonProps, focusProps)}
        className={clsx(
          'flex h-10 w-10 items-center justify-center rounded-button-rounding p-2',
          'focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-interactive-primary-focus',
          'border border-solid border-transparent',
          !isSelected &&
            !isOutsideVisibleRange &&
            'text-interactive-text-on-bg',
          !isSelected &&
            isOutsideVisibleRange &&
            'text-interactive-text-disabled',
          isSelected &&
            !isOutsideVisibleRange &&
            'bg-interactive-primary-idle text-interactive-text-on-inverted',
          isDisabled && 'cursor-default',
          !isSelected && !isDisabled && 'hover:border-elevation-outline-1'
        )}
      >
        <Typography
          as="span"
          size="label-2"
          className="block w-6 overflow-hidden text-ellipsis text-center"
        >
          {!isOutsideVisibleRange && formattedDate}
        </Typography>
      </div>
    </td>
  );
};
