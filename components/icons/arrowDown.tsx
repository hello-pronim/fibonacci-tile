import { css } from "@styled-system/css";

function ArrowDownIcon({ color = "#141414", width = 12 }) {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css({width:width})}
    >
      <path
        d="M0.410734 0.744078C0.736171 0.418641 1.26381 0.418641 1.58925 0.744078L5.99999 5.15482L10.4107 0.744078C10.7362 0.418641 11.2638 0.418641 11.5892 0.744078C11.9147 1.06951 11.9147 1.59715 11.5892 1.92259L6.58925 6.92259C6.26381 7.24803 5.73617 7.24803 5.41073 6.92259L0.410734 1.92259C0.0852972 1.59715 0.0852972 1.06951 0.410734 0.744078Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowDownIcon;
