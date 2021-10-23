import * as React from "react";

function SvgMusic(props) {
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
        d="M12 2.25a.75.75 0 00-.75.75v11.26a4.25 4.25 0 101.486 2.888.76.76 0 00.014-.148V7.75H18a2.75 2.75 0 100-5.5h-6zm.75 4H18a1.25 1.25 0 100-2.5h-5.25v2.5zm-4.25 8.5a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMusic;
