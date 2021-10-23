import * as React from "react";

function SvgGlobe(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.955 2.045a.75.75 0 010 1.06l-.55.551c3.288 3.831 3.118 9.61-.51 13.238a9.712 9.712 0 01-6.145 2.827v1.53h1.75a.75.75 0 110 1.5h-5a.75.75 0 010-1.5h1.75v-1.53a9.71 9.71 0 01-5.594-2.316l-.55.55a.75.75 0 01-1.061-1.06l.707-.708A1.272 1.272 0 015.5 16.15a8.222 8.222 0 005.497 2.101h.006A8.25 8.25 0 0017.15 4.5a1.272 1.272 0 01.038-1.748l.707-.707a.75.75 0 011.06 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 10a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0zM11 4.75a5.25 5.25 0 00-5.159 6.23 2.25 2.25 0 112.56 3.583 5.252 5.252 0 007.746-3.522 3.75 3.75 0 11-2.89-5.782A5.23 5.23 0 0011 4.75zM10.75 9a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM7.5 11.75a.75.75 0 100 1.5.75.75 0 000-1.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgGlobe;
