import * as React from "react";

function SvgRefresh(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.546 8.163a.75.75 0 01-.488-1.044L7.72 3.584a.75.75 0 011.358.002l.733 1.569a.755.755 0 01.081-.027 8.15 8.15 0 11-5.8 5.903.75.75 0 111.455.364 6.65 6.65 0 104.907-4.862l.74 1.583a.75.75 0 01-.871 1.043l-3.776-.996z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgRefresh;
