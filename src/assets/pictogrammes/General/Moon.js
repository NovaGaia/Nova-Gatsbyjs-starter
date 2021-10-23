import * as React from "react";

function SvgMoon(props) {
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
        d="M11.486 4.768a7.25 7.25 0 107.399 9.51 6.25 6.25 0 01-7.398-9.51zM3.25 12a8.75 8.75 0 0110.074-8.65.75.75 0 01.336 1.342 4.75 4.75 0 105.83 7.499.75.75 0 011.22.654A8.751 8.751 0 013.25 12z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMoon;
