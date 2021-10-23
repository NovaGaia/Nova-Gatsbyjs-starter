import * as React from "react";

function SvgMouse(props) {
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
        d="M13.053 2.407a6.75 6.75 0 015.697 6.667v5.852a6.75 6.75 0 01-13.5 0V9.074a6.75 6.75 0 017.803-6.667zm4.197 6.667a5.25 5.25 0 00-4.5-5.196V9.25h4.5v-.176zm-6 .176h-4.5v-.176a5.25 5.25 0 014.5-5.196V9.25zm-4.5 5.676V10.75h10.5v4.176a5.25 5.25 0 01-10.5 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMouse;
