import * as React from "react";

function SvgToggleOn(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 15.5a3.496 3.496 0 003.464-3.868A3.496 3.496 0 0016 8.5a3.496 3.496 0 00-3.464 3.868A3.496 3.496 0 0016 15.5z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.926 18.75H8.074a6.75 6.75 0 010-13.5h7.852a6.75 6.75 0 010 13.5zm0-1.5a5.25 5.25 0 000-10.5H8.074a5.25 5.25 0 000 10.5h7.852z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgToggleOn;
