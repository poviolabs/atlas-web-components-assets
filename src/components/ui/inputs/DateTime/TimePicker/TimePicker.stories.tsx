import type { Meta, StoryObj } from "@storybook/react";

import { TimePicker } from "./TimePicker";

const meta: Meta<typeof TimePicker> = {
  component: TimePicker,
  args: {},
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    label: "Time",
  },
};
