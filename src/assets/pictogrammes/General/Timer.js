import * as React from "react";

function SvgTimer(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 3.018a.75.75 0 110-1.5h3.536a.75.75 0 010 1.5H10zM6.53 3.47a.75.75 0 010 1.06l-2.5 2.5a.75.75 0 01-1.06-1.06l2.5-2.5a.75.75 0 011.06 0zM12 5.75A7.25 7.25 0 1019.25 13a.75.75 0 111.5 0A8.75 8.75 0 1112 4.25a.75.75 0 010 1.5z"
        fill="#000"
      />
      <path
        d="M17.188 8.364a.75.75 0 00-1.052-1.052l-3.17 2.465-2.072 1.48a1.684 1.684 0 102.35 2.349l1.479-2.072 2.465-3.17z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgTimer;
