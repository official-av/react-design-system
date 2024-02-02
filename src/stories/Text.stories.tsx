import { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./Text";

const meta = {
  title: "Text",
  component: Text,
  args: {
    size: "medium",
    weight: "light",
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    weight: {
      options: ["bold", "semibold", "light"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Text>;

export default meta;
type TextStory = StoryObj<typeof meta>;

export const Primary: TextStory = {
  render: ({ size, weight }: TextProps) => (
    <Text size={size} weight={weight}>
      {size + "/" + weight}
    </Text>
  ),
  args: {
    size: "small",
    weight: "bold",
  },
};

export const MediumSemibold: TextStory = {
  render: ({ size, weight }: TextProps) => (
    <Text size={size} weight={weight}>
      {size + "/" + weight}
    </Text>
  ),
  args: {
    size: "medium",
    weight: "semibold",
  },
};

export const LargeLight: TextStory = {
  render: ({ size, weight }: TextProps) => (
    <Text size={size} weight={weight}>
      {size + "/" + weight}
    </Text>
  ),
  args: {
    size: "large",
    weight: "light",
  },
};
