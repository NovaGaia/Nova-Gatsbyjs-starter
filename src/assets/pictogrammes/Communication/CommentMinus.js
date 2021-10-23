import * as React from "react";

function SvgCommentMinus(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.1 11.45a.75.75 0 010 1.5H9.6a.75.75 0 010-1.5h5.5z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.592 15.304C2.344 9.787 6.403 3.75 12.36 3.75h.321a8.068 8.068 0 018.068 8.068 8.982 8.982 0 01-8.982 8.982h-7.82a.75.75 0 01-.47-1.335l1.971-1.583a.25.25 0 00.075-.29l-.932-2.288zM12.36 5.25c-4.893 0-8.226 4.957-6.38 9.488l.932 2.289a1.75 1.75 0 01-.525 2.024l-.309.249h5.689a7.482 7.482 0 007.482-7.482 6.568 6.568 0 00-6.568-6.568h-.321z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCommentMinus;
