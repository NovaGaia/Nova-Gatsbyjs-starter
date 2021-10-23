import * as React from "react";

function SvgExplore(props) {
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
        d="M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.85 9.309a5 5 0 00-1.756 3.04l-.438 2.633c-.227 1.368 1.363 2.285 2.433 1.405l2.061-1.696a5 5 0 001.756-3.04l.438-2.633c.227-1.368-1.363-2.285-2.433-1.405L10.85 9.31zM12 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgExplore;
