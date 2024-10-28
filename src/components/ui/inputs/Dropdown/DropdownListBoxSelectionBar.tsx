import { useTranslation } from "react-i18next";

import { TextButton } from "@/components/ui/buttons/TextButton/TextButton";

import { DropdownProps } from "./Dropdown";

type DropdownListBoxSelectionBarProps = Pick<DropdownProps, "onChange" | "items"> & {
  className?: string;
};

export const DropdownListBoxSelectionBar = ({ className, onChange, items }: DropdownListBoxSelectionBarProps) => {
  const { t } = useTranslation();

  return (
    <div className={`${className} flex items-center justify-between border-b border-elevation-outline-1 px-4 py-1-5`}>
      <TextButton
        type="button"
        color="primary"
        onPress={() => {
          onChange(items.map((item) => item.id));
        }}
      >
        {t("ui.dropdown.selectAll")}
      </TextButton>
      <TextButton
        type="button"
        color="secondary"
        onPress={() => {
          onChange([]);
        }}
      >
        {t("ui.dropdown.clearSelection")}
      </TextButton>
    </div>
  );
};
