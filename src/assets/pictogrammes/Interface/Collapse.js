import * as React from "react";

function SvgCollapse(props) {
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
        d="M18.028 9.964a.75.75 0 00-.75-.75h-2.493V6.722a.75.75 0 00-1.5 0v3.242c0 .415.336.75.75.75h3.243a.75.75 0 00.75-.75zM14.035 18.028a.75.75 0 00.75-.75v-2.493h2.493a.75.75 0 000-1.5h-3.243a.75.75 0 00-.75.75v3.243c0 .414.336.75.75.75zM9.964 18.028a.75.75 0 01-.75-.75v-2.493H6.722a.75.75 0 010-1.5h3.242a.75.75 0 01.75.75v3.243a.75.75 0 01-.75.75zM5.972 9.964a.75.75 0 01.75-.75h2.492V6.722a.75.75 0 111.5 0v3.242a.75.75 0 01-.75.75H6.722a.75.75 0 01-.75-.75z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCollapse;
