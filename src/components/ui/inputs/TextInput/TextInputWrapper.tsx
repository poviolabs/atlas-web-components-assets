import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";

import { uiOutlineClass } from "@/components/ui/global/outline";
import { InputHeader, InputHeaderProps } from "@/components/ui/inputs/shared/InputHeader";
import { Typography } from "@/components/ui/text/Typography/Typography";

export const textInput = cva(
  [
    "w-full",
    "rounded-input-rounding",
    "bg-elevation-background",
    "p-height-s",
    "font-inter",
    "text-label-1",
    "font-labels-default",
    "text-text-default-tertiary",
    "focus:text-text-default-primary",
    uiOutlineClass,
    "invalid:border invalid:border-info-error-outline",
    "focus:border focus:border-interactive-primary-idle",
    "focus-within:border focus-within:border-interactive-primary-idle",
    "focus-visible:outline-interactive-primary-focus",
    "hover:border hover:border-interactive-primary-hover",
  ],
  {
    variants: {
      variant: {
        outlined: ["border", "border-elevation-outline-2"],
        filled: ["border", "border-elevation-surface-2", "bg-elevation-surface-2", "focus:bg-elevation-background"],
      },
    },
    defaultVariants: {
      variant: "outlined",
    },
  },
);

export type TextInputVariantProps = VariantProps<typeof textInput>;

export type TextInputWrapperProps = InputHeaderProps & {
  error?: string;
  children: React.ReactNode;
  className?: string;
};

export const TextInputWrapper = ({
  label,
  tooltipText,
  helperText,
  required,
  error,
  className,
  children,
}: TextInputWrapperProps) => {
  return (
    <div className={clsx("w-full", className)} data-invalid={error != null}>
      <InputHeader label={label} tooltipText={tooltipText} helperText={helperText} required={required} />
      {children}
      {error && (
        <Typography className="mt-1-5 text-info-error" size="label-3">
          {error}
        </Typography>
      )}
    </div>
  );
};
