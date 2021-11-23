import React from "react";
import { css } from "@styled-system/css";
import theme from "styles/theme";

interface ArrowProps {
  direction?: "left" | "right";
  color?: string;
  width?: number;
  type?: "short" | "long";
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
