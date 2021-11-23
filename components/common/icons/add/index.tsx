import React from "react";

const AddIcon = ({ active, ...props }) => {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4 7.64H.6V6.36h12.8v1.28zM7.64.6v4.48H6.36V.6h1.28zM7.64 8.92v4.48H6.36V8.92h1.28z"
        fill={active ? "#ffffff" : "#141414"}
      />
    </svg>
  );
};

export default AddIcon;
