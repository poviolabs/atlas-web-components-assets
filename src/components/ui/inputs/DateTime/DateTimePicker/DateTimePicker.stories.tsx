import type { Meta, StoryObj } from "@storybook/react";

import { DateTimePicker } from "./DateTimePicker";

const meta: Meta<typeof DateTimePicker> = {
  component: DateTimePicker,
  args: {},
};

export default meta;

type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {
  args: {
    label: "Date",
  },
};
