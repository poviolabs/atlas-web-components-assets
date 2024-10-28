import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon } from "@/assets/icons/general/Calendar";

import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  args: {
    icon: CalendarIcon,
    size: "medium",
    variant: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const IconButtonStory: Story = {
  args: {
    icon: CalendarIcon,
  },
};

export const IconLinkButtonStory: Story = {
  args: {
    icon: CalendarIcon,
    link: {
      href: "https://example.com",
    },
  },
};
