import * as React from "react";

function SvgArrowleft(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.03 8.53a.75.75 0 10-1.06-1.06l-4 4a.748.748 0 000 1.06l4 4a.75.75 0 101.06-1.06l-2.72-2.72H18a.75.75 0 000-1.5H8.31l2.72-2.72z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgArrowleft;
