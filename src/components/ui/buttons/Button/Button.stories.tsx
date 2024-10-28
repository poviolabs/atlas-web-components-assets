import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon } from "@/assets/icons/general/Calendar";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: "Click me!",
    width: "l",
    size: "large",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BasicButtonStory: Story = {};

export const IconButtonStory: Story = {
  args: {
    icon: CalendarIcon,
  },
};

export const LinkButtonStory: Story = {
  args: {
    link: {
      href: "https://example.com",
    },
  },
};
