import * as React from "react";

function SvgPicture(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 11.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.136 13.102a.75.75 0 00-1.272 0l-2.5 4A.75.75 0 008 18.25h8a.75.75 0 00.6-1.2l-1.5-2a.75.75 0 00-1.2 0l-.844 1.125-1.92-3.073z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2.25A2.75 2.75 0 004.25 5v14A2.75 2.75 0 007 21.75h10A2.75 2.75 0 0019.75 19V7.968c0-.381-.124-.751-.354-1.055l-2.998-3.968a1.75 1.75 0 00-1.396-.695H7zM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPicture;
