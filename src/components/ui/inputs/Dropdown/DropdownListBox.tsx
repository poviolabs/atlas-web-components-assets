import { ListBox as AriaListBox } from "react-aria-components";

import { DropdownProps } from "./Dropdown";
import { DropdownListBoxAllOption } from "./DropdownListBoxAllOption";
import { DropdownListBoxSelectionBar } from "./DropdownListBoxSelectionBar";
import { DropdownListItem } from "./DropdownListItem";

type DropdownListBoxProps = DropdownProps & {
  header?: React.ReactNode;
};

export const DropdownListBox = ({
  selectionMode,
  selectedItemIds,
  onChange,
  items,
  showSelectionBar,
  showAllOption,
  header,
}: DropdownListBoxProps) => {
  return (
    <>
      <div className="flex-1 overflow-y-auto outline-none">
        {header}

        {selectionMode === "multiple" && (
          <>
            {showSelectionBar && (
              <DropdownListBoxSelectionBar onChange={onChange} items={items} className="hidden t:flex" />
            )}

            {showAllOption && (
              <DropdownListBoxAllOption selectedItemIds={selectedItemIds} onChange={onChange} items={items} />
            )}
          </>
        )}

        <AriaListBox
          selectionMode={selectionMode}
          items={items}
          selectedKeys={selectedItemIds}
          onSelectionChange={(id) => {
            if (id === "all") {
              onChange(items.map((item) => item.id));
              return;
            }

            const selectedIds = Array.from(id);
            if (selectionMode === "single" && selectedIds.length === 0) {
              onChange(selectedItemIds);
              return;
            }

            onChange(selectedIds);
          }}
        >
          {items.map((item) => (
            <DropdownListItem {...item} />
          ))}
        </AriaListBox>
      </div>

      {selectionMode === "multiple" && (
        <DropdownListBoxSelectionBar onChange={onChange} items={items} className="bg-elevation-surface-1 t:hidden" />
      )}
    </>
  );
};
