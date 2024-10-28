import { Button as AriaButton, Label as AriaLabel } from "react-aria-components";

import { InfoIcon } from "@/assets/icons/general/Info";
import { Tooltip } from "@/components/ui/overlays/Tooltip/Tooltip";
import { Typography } from "@/components/ui/text/Typography/Typography";

export type InputHeaderProps = {
  label: string;
  tooltipText?: string;
  helperText?: string;
  required?: boolean;
  rightContent?: React.ReactNode;
};

export const InputHeader = ({ label, tooltipText, helperText, required, rightContent }: InputHeaderProps) => {
  return (
    <div className="mb-1-5">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-start gap-1">
            <AriaLabel className="flex items-start gap-1">
              <Typography as="span" size="label-2" variant="prominent-1" className="text-text-default-primary">
                {label}
              </Typography>

              {required && (
                <Typography as="span" size="label-2" variant="prominent-1" className="text-info-error">
                  *
                </Typography>
              )}
            </AriaLabel>

            {tooltipText && (
              <Tooltip text={tooltipText}>
                {/* needs to be a button; tooltips are not allowed on unfocusable elements */}
                <AriaButton>
                  <InfoIcon className="h-6 w-6 text-interactive-icon-idle" tabIndex={0} />
                </AriaButton>
              </Tooltip>
            )}
          </div>
        </div>
        {rightContent}
      </div>

      {helperText && (
        <Typography slot="description" size="label-2" className="text-text-default-secondary">
          {helperText}
        </Typography>
      )}
    </div>
  );
};
