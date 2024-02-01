import { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./Text";

const meta = {
  title: "Text",
  component: Text,
  args: {
    size: "medium",
    weight: "light",
  },
  tags:['autodocs']
} as Meta<typeof Text>;

export default meta;
type TextStory = StoryObj<typeof meta>;

export const SmallBold: TextStory = {
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
