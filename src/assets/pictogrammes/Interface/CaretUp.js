import * as React from "react";

function SvgCaretup(props) {
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
        d="M16.53 14.03a.75.75 0 01-1.06 0L12 10.56l-3.47 3.47a.75.75 0 01-1.06-1.06l4-4a.75.75 0 011.06 0l4 4a.75.75 0 010 1.06z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCaretup;
