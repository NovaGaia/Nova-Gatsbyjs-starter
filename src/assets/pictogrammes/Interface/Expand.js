import * as React from "react";

function SvgExpand(props) {
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
        d="M13.664 6.343c0 .414.336.75.75.75h2.493v2.493a.75.75 0 001.5 0V6.343a.75.75 0 00-.75-.75h-3.243a.75.75 0 00-.75.75zM17.657 13.664a.75.75 0 00-.75.75v2.493h-2.493a.75.75 0 000 1.5h3.243a.75.75 0 00.75-.75v-3.243a.75.75 0 00-.75-.75zM6.343 13.664a.75.75 0 01.75.75v2.493h2.493a.75.75 0 010 1.5H6.343a.75.75 0 01-.75-.75v-3.243a.75.75 0 01.75-.75zM10.336 6.343a.75.75 0 01-.75.75H7.093v2.493a.75.75 0 11-1.5 0V6.343a.75.75 0 01.75-.75h3.243a.75.75 0 01.75.75z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgExpand;
