import { StyledChip } from "./styles";

export interface ChipProps {
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary" | "dark" | "light";
  size?: "large" | "medium" | "small";
  rounded?: boolean;
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Chip({
  variant = "outlined",
  color = "primary",
  size = "medium",
  rounded = false,
  active = false,
  onClick,
  children,
  ...props
}: ChipProps) {
  return (
    <StyledChip
      variant={variant}
      color={color}
      size={size}
      active={active}
      onClick={onClick}
      rounded={rounded}
      {...props}
    >
      {children}
    </StyledChip>
  );
}
