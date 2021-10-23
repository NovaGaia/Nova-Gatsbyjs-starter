import * as React from "react";

function SvgAttach(props) {
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
        d="M2.25 12A6.75 6.75 0 019 5.25h8a4.75 4.75 0 110 9.5H8.857a2.75 2.75 0 110-5.5h7.857a.75.75 0 010 1.5H8.857a1.25 1.25 0 100 2.5H17a3.25 3.25 0 000-6.5H9a5.25 5.25 0 100 10.5h7.714a.75.75 0 010 1.5H9A6.75 6.75 0 012.25 12z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgAttach;
