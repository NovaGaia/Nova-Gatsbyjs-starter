import * as React from "react";

function SvgSort(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.47 7.53a.75.75 0 001.06 0l.72-.72V17a.75.75 0 001.5 0V6.81l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 000 1.06zM8.75 17.19l.72-.72a.75.75 0 111.06 1.06l-2 2a.75.75 0 01-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72V7a.75.75 0 011.5 0v10.19z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgSort;
