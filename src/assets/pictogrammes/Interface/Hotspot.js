import * as React from "react";

function SvgHotspot(props) {
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
        d="M12 11.65a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM9.25 12.9a2.75 2.75 0 115.5 0 2.75 2.75 0 01-5.5 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.65a5.25 5.25 0 00-3.712 8.962.75.75 0 11-1.061 1.06 6.75 6.75 0 119.546 0 .75.75 0 01-1.06-1.06A5.25 5.25 0 0012 7.649z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.75a9.15 9.15 0 00-6.47 15.62.75.75 0 11-1.06 1.06 10.65 10.65 0 1115.06 0 .75.75 0 01-1.06-1.06A9.15 9.15 0 0012 3.75z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgHotspot;
