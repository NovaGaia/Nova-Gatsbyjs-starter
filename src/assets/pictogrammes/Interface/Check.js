import * as React from "react";

function SvgCheck(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.03 7.97a.75.75 0 010 1.06l-7 7a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l3.47 3.47 6.47-6.47a.75.75 0 011.06 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCheck;
