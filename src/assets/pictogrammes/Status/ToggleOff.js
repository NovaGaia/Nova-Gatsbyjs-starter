import * as React from "react";

function SvgToggleOff(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 15.5a3.496 3.496 0 01-3.464-3.868A3.496 3.496 0 018 8.5a3.496 3.496 0 013.464 3.868A3.496 3.496 0 018 15.5z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.074 18.75h7.852a6.75 6.75 0 000-13.5H8.074a6.75 6.75 0 000 13.5zm0-1.5a5.25 5.25 0 110-10.5h7.852a5.25 5.25 0 010 10.5H8.074z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgToggleOff;
