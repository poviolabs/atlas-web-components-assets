import { useTranslation } from "react-i18next";

import { Checkbox } from "@/components/ui/inputs/Checkbox/Checkbox";

import { DropdownProps } from "./Dropdown";

export const DropdownListBoxAllOption = ({
  onChange,
  selectedItemIds,
  items,
}: Pick<DropdownProps, "items" | "onChange" | "selectedItemIds">) => {
  const { t } = useTranslation();

  return (
    <div className="border-b border-elevation-outline-1 px-4 py-2">
      <Checkbox
        onChange={(isChecked) => {
          if (isChecked) {
            onChange(items.map((item) => item.id));
            return;
          }

          onChange([]);
        }}
        isSelected={selectedItemIds.length === items.length}
        isIndeterminate={selectedItemIds.length > 0 && selectedItemIds.length < items.length}
      >
        {t("ui.dropdown.allOption")}
      </Checkbox>
    </div>
  );
};
