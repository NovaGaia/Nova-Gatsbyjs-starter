import * as React from "react";

function SvgMouseAlt(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.25 10a.75.75 0 001.5 0V7a.75.75 0 00-1.5 0v3z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 9.074a6.75 6.75 0 00-13.5 0v5.852a6.75 6.75 0 0013.5 0V9.074zm-5.931-5.186a5.25 5.25 0 014.431 5.186v5.852a5.25 5.25 0 01-10.5 0V9.074a5.25 5.25 0 016.069-5.186z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMouseAlt;
