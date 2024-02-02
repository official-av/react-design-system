import { StoryObj } from "@storybook/react";
import Button from "./Button";

export default { component: Button };
type Story = StoryObj<typeof Button>;
export const Base: Story = {
  args: {
    content: "Semantic Button",
    theme: "primary",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: { options: ["primary", "inverse"], control: { type: "select" } },
    rounded: {
      options: ["full", "xl", "lg", "sm"],
      control: { type: "select" },
    },
  },
};
export const PrimaryRounded: Story = {
  args: {
    theme: "primary",
    rounded: "sm",
    content: "Primary Rounded Button",
  },
};
export const Inverse: Story = {
  args: {
    theme: "inverse",
    content: "Inverse Button",
  },
};
export const InverseRounded: Story = {
  args: {
    theme: "inverse",
    rounded: "sm",
    content: "Inverse Rounded Button",
  },
};
