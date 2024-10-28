import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: "Percentage",
    unit: "%",
  },
};

export const Disabled: Story = {
  args: {
    label: "No unit",
    isDisabled: true,
  },
};
