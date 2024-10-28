import type { Meta, StoryObj } from "@storybook/react";

import { SendIcon } from "@/assets/icons/general/Send";

import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "First name",
    required: true,
    tooltipText: "Additional helper information",
    helperText: "This is a helper text",
  },
};

export const Truncation: Story = {
  args: {
    label: "Long long long long long Long long long long long Long long long long long Long long long long long name",
    required: true,
    tooltipText: "Additional helper information",
    helperText: "This is a helper text",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    label: "First name",
    required: true,
    tooltipText: "Additional helper information",
    helperText: "This is a helper text",
  },
};

export const Error: Story = {
  args: {
    label: "First name",
    required: true,
    tooltipText: "Additional helper information",
    helperText: "This is a helper text",
    error: "This is an error message",
  },
};

export const Unit: Story = {
  args: {
    label: "First name",
    required: true,
    tooltipText: "Additional helper information",
    helperText: "This is a helper text",
    error: "This is an error message",
    unit: "USD",
  },
};

export const Loading: Story = {
  args: {
    label: "First name",
    required: true,
    tooltipText: "Additional helper information",
    helperText: "This is a helper text",
    error: "This is an error message",
    isLoading: true,
  },
};

export const Action: Story = {
  args: {
    label: "First name",
    required: true,
    tooltipText: "Additional helper information",
    helperText: "This is a helper text",
    error: "This is an error message",
    action: {
      icon: SendIcon,
      onClick: () => {},
      altText: "Send",
    },
  },
};
