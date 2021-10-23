import * as React from "react";

function SvgArrowright(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.47 8.53a.75.75 0 011.06-1.06l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H6.5a.75.75 0 010-1.5h9.69l-2.72-2.72z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgArrowright;
