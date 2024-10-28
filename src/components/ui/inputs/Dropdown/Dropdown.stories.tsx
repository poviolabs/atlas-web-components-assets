/* eslint-disable import/no-extraneous-dependencies */
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "components/ui/inputs/Dropdown",
  render: function Component(args) {
    const [, setArgs] = useArgs();

    const onValueChange = (value: (string | number)[]) => {
      // Call the provided callback
      // This is used for the Actions tab
      args.onChange?.(value);

      // Update the arg in Storybook
      setArgs({ selectedItemIds: value });
    };

    // Forward all args and overwrite onValueChange
    return <Dropdown {...args} onChange={onValueChange} />;
  },
  args: {
    label: "Select Event Type",
    placeholder: "Ex.: Roundtable",
    items: [
      {
        id: "1",
        label: "Roundtable",
      },
      {
        id: "2",
        label: "Conference",
      },
      {
        id: "3",
        label: "Meeting",
      },
      {
        id: "4",
        label: "Party",
      },
      {
        id: "5",
        label:
          "Very long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long event",
      },
    ],
    selectedItemIds: [],
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
};

export const Multiple: Story = {
  args: {
    selectionMode: "multiple",
    selectedItemIds: [],
    showSelectionBar: true,
    showAllOption: true,
  },
};
