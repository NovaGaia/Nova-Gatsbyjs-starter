import * as React from "react";

function SvgFileUser(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 9a2 2 0 100 4 2 2 0 000-4zM8 17.5a3 3 0 013-3h2a3 3 0 013 3 1 1 0 01-1 1H9a1 1 0 01-1-1z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2.25A2.75 2.75 0 004.25 5v14A2.75 2.75 0 007 21.75h10A2.75 2.75 0 0019.75 19V8.198a1.75 1.75 0 00-.328-1.02L16.408 2.98a1.75 1.75 0 00-1.421-.73H7zM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgFileUser;
