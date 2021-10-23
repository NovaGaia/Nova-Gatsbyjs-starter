import * as React from "react";

function SvgChrome(props) {
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
        d="M4.11 6.27A9.706 9.706 0 002.25 12c0 4.997 3.759 9.116 8.604 9.683A9.844 9.844 0 0012 21.75c5.385 0 9.75-4.365 9.75-9.75a9.72 9.72 0 00-.832-3.948A9.752 9.752 0 0012 2.25a9.735 9.735 0 00-7.8 3.9.746.746 0 00-.09.12zm.616 1.833a8.252 8.252 0 005.87 12.028l2.226-3.859a4.35 4.35 0 01-4.68-2.26L4.727 8.104zm.934-1.382l2.228 3.855A4.352 4.352 0 0112 7.65h7.011A8.245 8.245 0 0012 3.75a8.233 8.233 0 00-6.34 2.97zM19.744 9.15h-4.458A4.333 4.333 0 0116.35 12a4.33 4.33 0 01-.675 2.329l-3.413 5.917A8.25 8.25 0 0019.744 9.15zM12 9.15a2.85 2.85 0 100 5.7 2.85 2.85 0 000-5.7z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgChrome;
