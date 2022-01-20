import Link from "next/link";

import styles from "./styles.module.scss";

export interface buttonProps {
  className?: string;
  type?: "button" | "submit";
  text: string;
  href?: string;
  variant?: string;
  color?: "primary" | "secondary" | "dark" | "light";
  size?: "large" | "medium" | "small";
  rounded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button({
  href,
  className,
  type = "button",
  text,
  variant = "contained",
  color = "primary",
  size = "medium",
  rounded = false,
  onClick,
  children,
  ...props
}: buttonProps) {
  let themeName = styles.primary;
  if (color === "secondary") themeName = styles.secondary;
  else if (color === "dark") themeName = styles.dark;
  else if (color === "light") themeName = styles.light;
  let roundedClass = rounded ? styles.rounded : "";
  const sizeClass =
    size === "small" ? styles.small : size === "large" ? styles.large : "";

  return !href ? (
    <button
      type={type}
      className={`${styles.button} ${
        className ? className : ""
      } ${themeName} ${roundedClass} ${sizeClass}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  ) : (
    <Link {...{ href }} prefetch={false}>
      <button
        className={`${styles.button}${
          className ? ` ${className}` : ""
        } ${themeName} ${roundedClass} ${sizeClass}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
}
