import * as React from "react";

function SvgFigma(props) {
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
        d="M12.75 15.373a3.999 3.999 0 006.195-4.654A3.999 3.999 0 0017.582 9a3.996 3.996 0 001.668-3.25 4 4 0 00-4-4h-6.5A4 4 0 006.418 9a4 4 0 000 6.5 4 4 0 106.332 3.25v-3.377zm-4-12.123a2.5 2.5 0 100 5h2.5v-5h-2.5zm2.5 13h-2.5a2.5 2.5 0 102.5 2.5v-2.5zm-2.5-6.5a2.5 2.5 0 000 5h2.5v-5h-2.5zm4 2.5a2.5 2.5 0 105.001 0 2.5 2.5 0 00-5.001 0zm2.5-4a2.5 2.5 0 100-5h-2.5v5h2.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgFigma;
