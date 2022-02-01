import { StyledSelect } from "./styles";

interface selectProps {
  name?: string;
  variant?: "outlined" | "default";
  value?: string;
  fullWidth?: boolean;
  halfWidth?: boolean;
  onChange?: (event) => void;
  children?: React.ReactNode;
}

export default function Select({
  name,
  variant = "outlined",
  value,
  fullWidth = false,
  halfWidth = false,
  onChange,
  children,
  ...props
}: selectProps) {
  return (
    <StyledSelect
      name={name}
      variant={variant}
      value={value}
      onChange={onChange}
      {...props}
      fullWidth={fullWidth}
      halfWidth={halfWidth}
    >
      {children}
    </StyledSelect>
  );
}
