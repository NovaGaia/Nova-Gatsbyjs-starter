import * as React from "react";

function SvgSearch(props) {
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
        d="M14.385 15.446a6.75 6.75 0 111.06-1.06l5.156 5.155a.75.75 0 11-1.06 1.06l-5.156-5.155zm-7.926-1.562a5.25 5.25 0 117.43-.005l-.005.005-.005.004a5.25 5.25 0 01-7.42-.004z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgSearch;
