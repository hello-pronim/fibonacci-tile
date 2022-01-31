import { CategoryStyled } from "./CategoryStyled";

export interface CategoryProps {
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary" | "dark" | "light";
  size?: "large" | "medium" | "small";
  rounded?: boolean;
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Category({
  variant = "outlined",
  color = "primary",
  size = "medium",
  rounded = false,
  active = false,
  onClick,
  children,
  ...props
}: CategoryProps) {
  return (
    <CategoryStyled
      variant={variant}
      color={color}
      size={size}
      active={active}
      onClick={onClick}
      rounded={rounded}
      {...props}
    >
      {children}
    </CategoryStyled>
  );
}
