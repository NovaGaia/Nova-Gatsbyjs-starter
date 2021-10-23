import * as React from "react";

function SvgCaretdown(props) {
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
        d="M16.53 8.97a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 111.06-1.06L12 12.44l3.47-3.47a.75.75 0 011.06 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCaretdown;
