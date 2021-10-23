import * as React from "react";

function SvgClock(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.75 7a.75.75 0 00-1.5 0v5a.75.75 0 00.352.636l3 1.875a.75.75 0 10.796-1.272l-2.648-1.655V7z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM4.75 12a7.25 7.25 0 1114.5 0 7.25 7.25 0 01-14.5 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgClock;
