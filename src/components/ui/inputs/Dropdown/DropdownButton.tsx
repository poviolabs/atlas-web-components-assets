import { PropsWithChildren, forwardRef } from "react";
import { Button as AriaButton } from "react-aria-components";

import { ArrowDropDownIcon } from "@/assets/icons/general/ArrowDropDown";
import { Typography } from "@/components/ui//text/Typography/Typography";
import { textInput } from "@/components/ui/inputs/TextInput/TextInputWrapper";

export const DropdownButton = forwardRef<HTMLButtonElement, PropsWithChildren>(({ children }, ref) => {
  return (
    <AriaButton
      ref={ref}
      className={textInput({
        variant: "outlined",
        className: "flex items-center justify-between gap-2",
      })}
    >
      <Typography size="label-2" className="truncate text-text-default-tertiary">
        {children}
      </Typography>
      <ArrowDropDownIcon
        className="h-6 w-6 flex-shrink-0 text-interactive-icon-idle group-open:rotate-180"
        aria-hidden="true"
      />
    </AriaButton>
  );
});
