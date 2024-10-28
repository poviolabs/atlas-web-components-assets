import clsx from "clsx";
import { ListBoxItem as AriaListBoxItem } from "react-aria-components";

import { CheckboxCheckmark } from "@/components/ui/inputs/Checkbox/CheckboxCheckmark";
import { Typography } from "@/components/ui/text/Typography/Typography";

import { DropdownItem } from "./Dropdown";

export const DropdownListItem = (item: DropdownItem) => {
  return (
    <AriaListBoxItem
      id={item.id}
      className={clsx(
        "group flex cursor-pointer items-center gap-2 px-4 py-2",
        "border-b border-b-elevation-outline-1 outline-none",
        "bg-elevation-background text-interactive-text-on-bg",
        "hover:text-interactive-text-hover",
        "focus-visible:bg-interactive-primary-focus focus-visible:text-interactive-text-on-inverted",
        "selected:bg-interactive-primary-idle selected:text-interactive-text-on-inverted",
      )}
    >
      <CheckboxCheckmark variant="default" className="group-data-[selection-mode='single']:hidden" />
      <Typography size="label-2" as="span">
        {item.label}
      </Typography>
    </AriaListBoxItem>
  );
};
