import * as React from "react";

function SvgOther2(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 5.25a.75.75 0 110 1.5.75.75 0 010-1.5zm0 6a.75.75 0 110 1.5.75.75 0 010-1.5zm0 6a.75.75 0 110 1.5.75.75 0 010-1.5z"
        fill="#000"
        stroke="#000"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default SvgOther2;
