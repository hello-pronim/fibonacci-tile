import React from "react";
import { css } from "@styled-system/css";
import theme from "styles/theme";

interface ArrowProps {
  direction?: "left" | "right";
  color?: string;
  width?: number;
  type?: "short" | "long" | "breadcrumb";
}

const SliderArrow = ({
  width = 20,
  direction,
  color = theme.colors.charcoal,
  ...props
}: ArrowProps) => {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
    {...props}
    css={css({
      transform: direction === "left" && "rotate(-180deg)",
      width: width,
    })}
    >
        <path d="M8.29293 0.292893C8.68346 -0.0976311 9.31662 -0.0976311 9.70715 0.292893L15.7071 6.29289C15.8947 6.48043 16 6.73478 16 7C16 7.26522 15.8947 7.51957 15.7071 7.70711L9.70715 13.7071C9.31662 14.0976 8.68346 14.0976 8.29293 13.7071C7.90241 13.3166 7.90241 12.6834 8.29294 12.2929L12.5858 8L0.000373259 8C0.000373259 7.5 4.13358e-05 7.55229 4.13358e-05 7C4.13358e-05 6.44772 -0.000366211 6.5 -0.000366211 6L12.5858 6L8.29293 1.70711C7.90241 1.31658 7.90241 0.683417 8.29293 0.292893Z"  fill={color}/>
    </svg>
  );
};

export default SliderArrow;
