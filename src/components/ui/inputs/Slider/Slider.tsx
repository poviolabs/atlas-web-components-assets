import clsx from "clsx";
import {
  Slider as AriaSlider,
  SliderProps as AriaSliderProps,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
} from "react-aria-components";

import { uiOutlineClass } from "@/components/ui/global/outline";
import { InputHeader } from "@/components/ui/inputs/shared/InputHeader";
import { Typography } from "@/components/ui/text/Typography/Typography";

interface SliderProps extends AriaSliderProps {
  label: string;
  unit?: string;
}

export const Slider = ({ label, unit, minValue = 0, maxValue = 100, ...props }: SliderProps) => {
  return (
    <AriaSlider {...props} minValue={minValue} maxValue={maxValue}>
      <InputHeader label={label} />
      <div className="flex items-center justify-between">
        <Typography className="px-2 py-height-s text-text-default-tertiary" size="label-2">
          {minValue}
          {unit}
        </Typography>

        <AriaSliderTrack className="relative mx-2 h-6 w-full before:absolute before:top-1/2 before:block before:h-1 before:w-full before:translate-y-[-50%] before:bg-elevation-outline-1 before:content-['']">
          {({ state }) => (
            <>
              <AriaSliderThumb
                className={clsx(
                  "absolute top-1/2 h-4 w-4 rounded-full bg-interactive-primary-idle",
                  "hover:bg-interactive-primary-hover focus-visible:outline-interactive-primary-focus dragging:bg-interactive-primary-pressed disabled:bg-interactive-primary-disabled",
                  uiOutlineClass,
                )}
              />

              {/* fill */}
              <div
                className="absolute top-[50%] h-1 translate-y-[-50%] rounded-full bg-interactive-primary-idle"
                style={{
                  width: state ? `${state.getThumbPercent(0) * 100}%` : 0,
                }}
              />
            </>
          )}
        </AriaSliderTrack>

        <Typography className="px-2 py-height-s text-text-default-tertiary" size="label-2">
          {maxValue}
          {unit}
        </Typography>
      </div>
    </AriaSlider>
  );
};
