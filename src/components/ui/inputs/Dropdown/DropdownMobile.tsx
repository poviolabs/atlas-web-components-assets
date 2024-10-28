import { useState } from "react";
import { useTranslation } from "react-i18next";

import { CloseIcon } from "@/assets/icons/general/Close";
import { InputHeader } from "@/components/ui/inputs/shared/InputHeader";
import { Drawer } from "@/components/ui/overlays/Drawer/Drawer";

import { DropdownProps } from "./Dropdown";
import { DropdownButton } from "./DropdownButton";
import { DropdownListBox } from "./DropdownListBox";

export const MobileDropdown = (props: DropdownProps) => {
  const { label, items, placeholder, selectedItemIds } = props;
  const { t } = useTranslation();

  const selectedItems = items.filter((item) => selectedItemIds.includes(item.id));

  const [isOpen, setIsOpen] = useState(false);

  const onChange: DropdownProps["onChange"] = (ids) => {
    props.onChange(ids);
    if (props.selectionMode === "single") {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <InputHeader label={label} />
      <Drawer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        trigger={
          <DropdownButton>
            <span className={selectedItems.length > 0 ? "" : "text-text-default-tertiary"}>
              {selectedItems.length > 0 ? selectedItems.map((item) => item.label).join(", ") : placeholder}
            </span>
          </DropdownButton>
        }
      >
        {(close) => (
          <div className="flex h-screen flex-col">
            <DropdownListBox
              header={
                <div className="px-4 pt-3">
                  <InputHeader
                    label={label}
                    rightContent={
                      <button
                        type="button"
                        onClick={close}
                        aria-label={t("ui.dropdown.closeAlt")}
                        className="flex-shrink-0"
                      >
                        <CloseIcon className="h-6 w-6 text-interactive-icon-idle" />
                      </button>
                    }
                  />
                </div>
              }
              {...props}
              onChange={onChange}
            />
          </div>
        )}
      </Drawer>
    </div>
  );
};
