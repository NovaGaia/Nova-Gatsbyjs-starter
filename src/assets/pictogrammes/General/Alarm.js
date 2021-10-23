import * as React from "react";

function SvgAlarm(props) {
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
        d="M12 5.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 13a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.25a.75.75 0 01.75.75v4.584l2.648 1.655a.75.75 0 11-.796 1.272l-3-1.875A.75.75 0 0111.25 13V8a.75.75 0 01.75-.75zM6.53 3.47a.75.75 0 010 1.06l-2.5 2.5a.75.75 0 01-1.06-1.06l2.5-2.5a.75.75 0 011.06 0zM17.47 3.47a.75.75 0 000 1.06l2.5 2.5a.75.75 0 101.06-1.06l-2.5-2.5a.75.75 0 00-1.06 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgAlarm;
