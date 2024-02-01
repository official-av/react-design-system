import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";

const textStyles = cva([], {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-md",
      large: "text-lg",
    },
    weight: {
      bold: "font-bold",
      semibold: "font-semibold",
      light: "font-light",
    },
  },
});

type TextStylesProps = VariantProps<typeof textStyles>;

export interface TextProps extends TextStylesProps {
    children?:ReactNode
}
const Text = ({ size, weight, children, ...props }: TextProps) => (
  <div className={textStyles({ size, weight, ...props })}>{children}</div>
);

export default Text;
