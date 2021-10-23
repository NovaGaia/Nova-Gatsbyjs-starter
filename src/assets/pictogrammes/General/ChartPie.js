import * as React from "react";

function SvgChartPie(props) {
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
        d="M11.25 3.784a8.25 8.25 0 106.669 13.964l-6.39-5.165A.75.75 0 0111.25 12V3.784zm1.5 0v7.466h7.466a8.252 8.252 0 00-7.466-7.466zm7.466 8.966h-6.095l4.741 3.831a8.198 8.198 0 001.354-3.831zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a9.712 9.712 0 01-2.167 6.13A9.733 9.733 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgChartPie;
