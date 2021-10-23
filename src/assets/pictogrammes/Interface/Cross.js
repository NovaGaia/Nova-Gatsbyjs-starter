import * as React from "react";

function SvgCross(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.465 15.535l7.07-7.07M8.465 8.465l7.07 7.07"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgCross;
