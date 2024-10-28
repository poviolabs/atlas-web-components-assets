import { useBreakpoint } from "@/hooks/useBreakpoint";

import { DropdownDesktop } from "./DropdownDesktop";
import { MobileDropdown } from "./DropdownMobile";

export type DropdownItem = {
  id: string | number;
  label: string;
};

export interface DropdownProps {
  selectedItemIds: DropdownItem["id"][];
  onChange: (ids: DropdownItem["id"][]) => void;
  selectionMode?: "single" | "multiple";
  label: string;
  placeholder: string;
  items: DropdownItem[];
  showSelectionBar?: boolean;
  showAllOption?: boolean;
}

export const Dropdown = ({ selectionMode = "single", ...dProps }: DropdownProps) => {
  const props = {
    selectionMode,
    ...dProps,
  };

  const isDesktop = useBreakpoint("t");

  if (isDesktop) {
    return <DropdownDesktop {...props} />;
  }

  return <MobileDropdown {...props} />;
};
