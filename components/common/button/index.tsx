import Link from "next/link";

import { StyledButton } from "./styles";

export interface ButtonProps {
  href?: string;
  type?: "button" | "submit";
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary" | "dark" | "light";
  size?: "large" | "medium" | "small";
  rounded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  href,
  type = "button",
  variant = "outlined",
  color = "primary",
  size = "medium",
  rounded = false,
  onClick,
  children,
  ...props
}: ButtonProps) {
  return !href ? (
    <StyledButton
      type={type}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  ) : (
    <Link {...{ href }} prefetch={false}>
      <StyledButton
        type="button"
        variant={variant}
        color={color}
        size={size}
        {...props}
      >
        {children}
      </StyledButton>
    </Link>
  );
}
