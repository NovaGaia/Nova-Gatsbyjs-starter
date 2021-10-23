import * as React from "react";

function SvgSettings(props) {
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
        d="M11.199 2.587a1.65 1.65 0 011.602 0l7.2 4c.524.291.849.843.849 1.443v7.94c0 .6-.325 1.152-.849 1.443l-7.2 4a1.65 1.65 0 01-1.602 0l-7.2-4a1.65 1.65 0 01-.85-1.443V8.03c0-.6.326-1.152.85-1.443l7.2-4zm.874 1.312a.15.15 0 00-.146 0l-7.2 4a.15.15 0 00-.077.13v7.941c0 .055.03.105.077.132l7.2 4a.15.15 0 00.146 0l7.2-4a.15.15 0 00.077-.132V8.03a.15.15 0 00-.077-.131l-7.2-4z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 12a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgSettings;
