import * as React from "react";

function SvgArrowup(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.53 10.53a.75.75 0 11-1.06-1.06l4-4a.75.75 0 011.06 0l4 4a.75.75 0 11-1.06 1.06l-2.72-2.72v9.69a.75.75 0 01-1.5 0V7.81l-2.72 2.72z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgArrowup;
