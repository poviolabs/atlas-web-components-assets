import { useState } from 'react';
import {
  Popover as AriaPopover,
  Dialog,
  DialogTrigger,
} from 'react-aria-components';
import useMeasure from 'react-use-measure';

import { InputHeader } from '@/components/ui/inputs/shared/InputHeader';

import { DropdownProps } from './Dropdown';
import { DropdownButton } from './DropdownButton';
import { DropdownListBox } from './DropdownListBox';

export const DropdownDesktop = (props: DropdownProps) => {
  const { label, items, placeholder, selectedItemIds } = props;

  const selectedItems = items.filter((item) =>
    selectedItemIds.includes(item.id)
  );

  const [triggerRef, { width }] = useMeasure();

  const [isOpen, setIsOpen] = useState(false);

  const onChange: DropdownProps['onChange'] = (ids) => {
    props.onChange(ids);
    if (props.selectionMode === 'single') {
      setIsOpen(false);
    }
  };

  return (
    <div className="group">
      <InputHeader label={label} />
      <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <DropdownButton ref={triggerRef}>
          <span
            className={
              selectedItems.length > 0 ? '' : 'text-text-default-tertiary'
            }
          >
            {selectedItems.length > 0
              ? selectedItems.map((item) => item.label).join(', ')
              : placeholder}
          </span>
        </DropdownButton>

        <AriaPopover className="my-4 outline-none" style={{ width }}>
          <Dialog className="outline-none">
            <div className="overflow-hidden rounded-input-rounding border border-elevation-outline-1 shadow-5 outline-none">
              <DropdownListBox {...props} onChange={onChange} />
            </div>
          </Dialog>
        </AriaPopover>
      </DialogTrigger>
    </div>
  );
};
