import { GroupDOMAttributes } from "@react-types/shared";
import { forwardRef } from "react";
import { TimeFieldState } from "react-stately";

import { DateSegmentItem } from "@/components/ui/inputs/DateTime/shared/DateSegmentItem";

interface TimeFieldProps {
  fieldProps: GroupDOMAttributes;
  state: TimeFieldState;
}

export const TimeField = forwardRef<HTMLDivElement, TimeFieldProps>(({ fieldProps, state }, ref) => {
  return (
    <div>
      <div {...fieldProps} ref={ref} className="flex">
        {state.segments.map((segment, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <DateSegmentItem key={i} segment={segment} state={state} />
        ))}
      </div>
    </div>
  );
});
