import * as React from "react";

function SvgKey(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7 10a2 2 0 100 4 2 2 0 000-4z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6.25a5.75 5.75 0 105.05 8.5h3.2V17c0 .414.336.75.75.75h3.5a.75.75 0 00.75-.75v-2.25H22a.75.75 0 00.75-.75v-3A1.75 1.75 0 0021 9.25h-8.95a5.749 5.749 0 00-5.05-3zM2.75 12a4.25 4.25 0 018.147-1.7c.119.273.389.45.687.45H21a.25.25 0 01.25.25v2.25H19.5a.75.75 0 00-.75.75v2.25h-2V14a.75.75 0 00-.75-.75h-4.416a.75.75 0 00-.687.45A4.251 4.251 0 012.75 12z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgKey;
