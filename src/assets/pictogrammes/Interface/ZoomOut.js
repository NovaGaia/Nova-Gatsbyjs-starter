import * as React from "react";

function SvgZoomOut(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.7 9.45a.75.75 0 000 1.5h5a.75.75 0 000-1.5h-5z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.398 14.945a6.75 6.75 0 008.987.5l5.156 5.156a.75.75 0 001.06-1.06l-5.155-5.156a6.751 6.751 0 10-10.048.56zM6.46 6.459a5.25 5.25 0 007.42 7.43l.005-.005.004-.005A5.25 5.25 0 006.46 6.46z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgZoomOut;
