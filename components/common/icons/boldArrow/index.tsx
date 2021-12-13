import React from "react";
import { css } from "@styled-system/css";
import theme from "styles/theme";

interface ArrowProps {
  direction?: "left" | "right";
  color?: string;
  width?: number;
  onClick?: any;
}

const BoldArrow = ({
  width = 24,
  direction,
  color = theme.colors.charcoal,
  ...props
}: ArrowProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      css={css({
        transform: direction === "right" && "rotate(-180deg)",
        width: width,
      })}
      onClick={props.onClick}
    >
      <path
        d="M11.707 5.293a1 1 0 0 1 0 1.414L7.414 11H20v2H7.414l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
        fill={color}
      />
    </svg>
  );
};

export default BoldArrow;
