import * as React from "react";

function SvgBook(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.25 8A.75.75 0 019 7.25h7a.75.75 0 010 1.5H9A.75.75 0 018.25 8zM9 10.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5H9z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 3.25A4.75 4.75 0 003.75 8v10a3.75 3.75 0 003.75 3.75h11A1.75 1.75 0 0020.25 20V5a1.75 1.75 0 00-1.75-1.75h-10zm10.25 11V5a.25.25 0 00-.25-.25h-10A3.25 3.25 0 005.25 8v7a3.734 3.734 0 012.25-.75h11.25zm0 1.5H7.5a2.25 2.25 0 000 4.5h11a.25.25 0 00.25-.25v-4.25z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgBook;
