import * as React from "react";

function SvgFile(props) {
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
        d="M4.25 5A2.75 2.75 0 017 2.25h7.987a1.75 1.75 0 011.421.73l3.014 4.197c.213.298.328.655.328 1.02V19A2.75 2.75 0 0117 21.75H7A2.75 2.75 0 014.25 19V5zM7 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V8.897H15a.75.75 0 01-.75-.75V3.75H7z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgFile;
