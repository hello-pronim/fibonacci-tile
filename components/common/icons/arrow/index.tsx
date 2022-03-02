import React from "react";
import { css } from "@styled-system/css";
import theme from "styles/theme";

interface ArrowProps {
  direction?: "left" | "right";
  color?: string;
  width?: number;
  type?: "short" | "long" | "breadcrumb";
}

const Arrow = ({
  width = 20,
  direction,
  color = theme.colors.charcoal,
  type = "short",
  ...props
}: ArrowProps) => {
  if (type === "short") {
    return (
      <svg
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        css={css({
          transform: direction === "left" && "rotate(-180deg)",
          width: width,
        })}
      >
        <path
          d="M19.9 5.5c-3 0-5.5-2.5-5.5-5.5h-1c0 2.3 1.2 4.3 3.1 5.5H0v1h16.5c-1.8 1.2-3.1 3.2-3.1 5.5h1c0-3 2.5-5.5 5.5-5.5h.1l-.1-1z"
          fill={color}
        />
      </svg>
    );
  }
  if (type === "breadcrumb") {
    return (
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.80482 1.02864C6.06517 1.28899 6.06517 1.7111 5.80482 1.97145L2.94289 4.83337H11.3334C11.3334 5.16671 11.3334 5.13185 11.3334 5.50004C11.3334 5.86823 11.3334 6.16671 11.3334 6.16671H2.94289L5.80482 9.02864C6.06517 9.28899 6.06517 9.7111 5.80482 9.97144C5.54447 10.2318 5.12236 10.2318 4.86201 9.97144L0.86201 5.97144C0.736986 5.84642 0.666748 5.67685 0.666748 5.50004C0.666748 5.32323 0.736986 5.15366 0.86201 5.02864L4.86201 1.02864C5.12236 0.768287 5.54447 0.768287 5.80482 1.02864Z"
          fill={color}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      css={css({
        transform: direction === "left" && "rotate(-180deg)",
        width: width,
      })}
    >
      <path
        d="M40 10v-.5c-5.2 0-9.5-4.3-9.5-9.5h-1c0 4.2 2.5 7.8 6.1 9.5H0v1h35.6c-3.6 1.7-6.1 5.3-6.1 9.5h1c0-5.2 4.3-9.5 9.5-9.5V10z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
