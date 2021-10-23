import * as React from "react";

function SvgArrowdown(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.75 16.19l2.72-2.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06l2.72 2.72V6.5a.75.75 0 011.5 0v9.69z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgArrowdown;
