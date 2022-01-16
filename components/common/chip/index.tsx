import styles from "./styles.module.scss";

export interface chipProps {
  className?: string;
  color?: "primary" | "secondary" | "dark" | "light";
  size?: "large" | "medium" | "small";
  rounded?: boolean;
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Chip({
  className,
  color = "primary",
  size = "medium",
  rounded = false,
  active = false,
  onClick,
  children,
  ...props
}: chipProps) {
  let themeName = styles.primary;
  if (color === "secondary") themeName = styles.secondary;
  else if (color === "dark") themeName = styles.dark;
  else if (color === "light") themeName = styles.light;
  let roundedClass = rounded ? styles.rounded : "";
  const sizeClass =
    size === "small" ? styles.small : size === "large" ? styles.large : "";
  const activeClass = active ? styles.active : "";

  return (
    <span
      className={`${styles.chip} ${
        className ? className : ""
      } ${themeName} ${roundedClass} ${sizeClass} ${activeClass}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
}
