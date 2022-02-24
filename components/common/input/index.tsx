import { StyledInput } from "./styles";

interface inputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  fullWidth?: boolean;
  halfWidth?: boolean;
  disabled?: boolean;
  onChange?: (event) => void;
  children?: React.ReactNode;
}

export default function Input({
  type = "text",
  name,
  placeholder,
  value,
  fullWidth = false,
  halfWidth = false,
  onChange,
  children,
  disabled,
  ...props
}: inputProps) {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      fullWidth={fullWidth}
      halfWidth={halfWidth}
      onChange={onChange}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledInput>
  );
}
