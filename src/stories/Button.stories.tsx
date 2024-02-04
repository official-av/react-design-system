import { expect } from "@storybook/jest";
import { StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    // test button content
    await expect(button.innerText).toBe("Semantic Button");
  },
};
export const PrimaryRounded: Story = {
  args: {
    theme: "primary",
    rounded: "lg",
    content: "Primary Rounded Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = await canvas.getByRole("button");

    // test button is rounded
    await expect(primaryButton.classList.toString()).toContain("rounded-lg");
    // test background is brand-400
    await expect(primaryButton.classList.toString()).toContain("bg-red-400");
  },
};

export const PrimaryOnHover: Story = {
  ...PrimaryRounded,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryButton = await canvas.getByRole("button");
    // test background is brand-700 on hover
    await expect(primaryButton.classList.toString()).toContain(
      "hover:bg-brand-700"
    );
  },
  parameters: { pseudo: { hover: true } },
};

export const Inverse: Story = {
  args: {
    theme: "inverse",
    content: "Inverse Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inverseButton = await canvas.getByRole("button");
    // test background is white by default
    await expect(inverseButton.classList.toString()).toContain("bg-white");
    // test background changes on hover
    await expect(inverseButton.classList.toString()).toContain(
      "hover:bg-brand-500"
    );
  },
};

export const InverseRounded: Story = {
  args: {
    theme: "inverse",
    rounded: "sm",
    content: "Inverse Rounded Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inverseRoundedButton = await canvas.getByRole("button");
    // test background is white by default
    await expect(inverseRoundedButton.classList.toString()).toContain(
      "bg-white"
    );
    // test background changes on hover
    await expect(inverseRoundedButton.classList.toString()).toContain(
      "hover:bg-brand-500"
    );
    // test button should be rounded
    await expect(inverseRoundedButton.classList.toString()).toContain(
      "rounded"
    );
  },
};
