import { StyledTextarea } from "./styles";

interface inputProps {
  name?: string;
  placeholder?: string;
  rows?: number;
  onChange?: (event) => void;
  children?: React.ReactNode;
}

export default function Input({
  name,
  placeholder,
  rows = 3,
  onChange,
  children,
  ...props
}: inputProps) {
  return (
    <StyledTextarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      {...props}
    >
      {children}
    </StyledTextarea>
  );
}
