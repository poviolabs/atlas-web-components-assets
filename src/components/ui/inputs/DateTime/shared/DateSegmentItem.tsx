import { DateFieldState, DateSegment } from '@react-stately/datepicker';
import clsx from 'clsx';
import { useRef } from 'react';
import { useDateSegment } from 'react-aria';

interface DateSegmentProps {
  state: DateFieldState;
  segment: DateSegment;
}

export const DateSegmentItem = ({ segment, state }: DateSegmentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={clsx(
        'box-content text-text-default-primary',
        'focus-within:outline focus-within:outline-1 focus-within:outline-interactive-primary-idle ',
        ['hour', 'dayPeriod'].includes(segment.type) && 'ml-1'
      )}
    >
      {segment.isPlaceholder && (
        <span aria-hidden="true" className="pointer-events-none">
          {segment.placeholder}
        </span>
      )}
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  );
};
