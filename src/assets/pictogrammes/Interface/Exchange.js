import * as React from "react";

function SvgExchange(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.53 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06l-.72-.72H17a.75.75 0 000-1.5H6.81l.72-.72zM16.47 13.47a.75.75 0 000 1.06l.72.72H7a.75.75 0 000 1.5h10.19l-.72.72a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgExchange;
