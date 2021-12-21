import { css } from "@styled-system/css";

function AddIcon({ color = "white", width = 13 }) {
  return (
    <svg
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css({width: width})}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8996 7.63961H0.0996094V6.35961H12.8996V7.63961Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.13961 0.599609L7.13961 5.07961L5.85961 5.07961L5.85961 0.599609L7.13961 0.599609Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.13961 8.91961L7.13961 13.3996H5.85961L5.85961 8.91961L7.13961 8.91961Z"
        fill={color}
      />
    </svg>
  );
}

export default AddIcon;
