import * as React from "react";

function SvgChartPieAlt(props) {
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
        d="M11.25 5.788a7.251 7.251 0 107.962 7.962H12a.75.75 0 01-.75-.75V5.788zM3.25 13A8.75 8.75 0 0112 4.25a.75.75 0 01.75.75v7.25H20a.75.75 0 01.75.75 8.75 8.75 0 11-17.5 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 4.674V9.5h4.826A6.512 6.512 0 0015.5 4.674zm-.502-1.612c3.62.45 6.49 3.32 6.94 6.94.069.548-.386.998-.938.998h-6.5a.5.5 0 01-.5-.5V4c0-.552.45-1.006.998-.938z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgChartPieAlt;
