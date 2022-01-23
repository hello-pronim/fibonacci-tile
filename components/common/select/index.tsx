import { StyledSelect } from "./styles";

interface selectProps {
  value?: string;
  onChange?: (event) => void;
  children?: React.ReactNode;
}

export default function Select({
  value,
  onChange,
  children,
  ...props
}: selectProps) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {children}
    </StyledSelect>
  );
}
