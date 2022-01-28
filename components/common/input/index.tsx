import { StyledInput } from "./styles";

interface inputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event) => void;
  children?: React.ReactNode;
}

export default function Input({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  children,
  ...props
}: inputProps) {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    >
      {children}
    </StyledInput>
  );
}
