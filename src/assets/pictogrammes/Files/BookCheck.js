import * as React from "react";

function SvgBookCheck(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.541 7.48a.75.75 0 01-.022 1.061l-3.125 3a.75.75 0 01-1.038 0l-1.875-1.8a.75.75 0 111.038-1.082l1.356 1.301 2.606-2.501a.75.75 0 011.06.022z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 8A4.75 4.75 0 018.5 3.25h10c.966 0 1.75.784 1.75 1.75v15a1.75 1.75 0 01-1.75 1.75h-11A3.75 3.75 0 013.75 18V8zm1.5 7a3.734 3.734 0 012.25-.75h11.25V5a.25.25 0 00-.25-.25h-10A3.25 3.25 0 005.25 8v7zm0 3a2.25 2.25 0 002.25 2.25h11a.25.25 0 00.25-.25v-4.25H7.5A2.25 2.25 0 005.25 18z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgBookCheck;
