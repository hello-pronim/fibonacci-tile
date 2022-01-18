import styles from "./styles.module.scss";

export interface selectProps {
  className?: string;
  size?: "large" | "medium" | "small";
  onChange?: (event) => void;
  children?: React.ReactNode;
}

export default function Select({
  className,
  size = "medium",
  onChange,
  children,
  ...props
}: selectProps) {
  const sizeClass =
    size === "small" ? styles.small : size === "large" ? styles.large : "";

  return (
    <select
      className={`${styles.select} ${className ?? ""} ${sizeClass}`}
      onChange={onChange}
      {...props}
    >
      {children}
    </select>
  );
}
