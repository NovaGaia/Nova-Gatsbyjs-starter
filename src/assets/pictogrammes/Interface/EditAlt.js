import * as React from "react";

function SvgEditAlt(props) {
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
        d="M15.137 3.47a.75.75 0 00-1.06 0l-9.193 9.192a.75.75 0 00-.195.34l-1 3.83a.75.75 0 00.915.915l3.828-1a.75.75 0 00.341-.196l9.192-9.192a.75.75 0 000-1.06l-2.828-2.83zM6.088 13.579l8.519-8.518 1.767 1.767-8.518 8.519-2.393.625.625-2.393z"
        fill="#000"
      />
      <path d="M4 19.25a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4z" fill="#000" />
    </svg>
  );
}

export default SvgEditAlt;
