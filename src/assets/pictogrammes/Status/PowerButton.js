import * as React from "react";

function SvgPowerButton(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 8.082c0-.183-.19-.302-.348-.212a4.75 4.75 0 104.696 0c-.159-.09-.348.03-.348.212v1.234c0 .077.036.15.095.199a3.25 3.25 0 11-4.19 0A.261.261 0 0010 9.316V8.082z"
        fill="#000"
      />
      <path d="M12.75 7a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0V7z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPowerButton;
