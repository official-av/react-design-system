import { VariantProps, cva } from "class-variance-authority";
import Text from "./Text";

const buttonStyles = cva(["p-4"], {
  variants: {
    theme: {
      primary: "bg-brand-400 text-white hover:bg-brand-700",
      inverse:
        "border border-brand-500 bg-white text-brand-500 hover:bg-brand-500 hover:text-white",
    },
    rounded: {
      xl: "rounded-xl",
      lg: "rounded-lg",
      sm: "rounded",
      full: "rounded-full",
    },
  },
});
export type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export interface ButtonProps extends ButtonStylesProps {
  content?: string;
}
const Button = ({ theme, rounded, content, ...props }: ButtonProps) => (
  <button className={buttonStyles({ theme, rounded, ...props })}>
    <Text size="medium" weight="light">
      {content}
    </Text>
  </button>
);
export default Button;
