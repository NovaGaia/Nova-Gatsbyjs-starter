import * as React from "react";

function SvgSettingsAdjust(props) {
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
        d="M13.354 8.75H4a.75.75 0 010-1.5h9.354a2.751 2.751 0 015.293 0H20a.75.75 0 010 1.5h-1.354a2.751 2.751 0 01-5.293 0zM14.75 8a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM10.646 16.75H20a.75.75 0 000-1.5h-9.354a2.751 2.751 0 00-5.292 0H4a.75.75 0 000 1.5h1.354a2.751 2.751 0 005.292 0zM6.75 16a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgSettingsAdjust;
