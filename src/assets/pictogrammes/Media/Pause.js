import * as React from "react";

function SvgPause(props) {
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
        d="M18.535 4.766c.73.27 1.215.965 1.215 1.743V17.49c0 .778-.485 1.474-1.215 1.743a4.44 4.44 0 01-3.07 0 1.857 1.857 0 01-1.215-1.743V6.51c0-.778.485-1.474 1.215-1.743a4.44 4.44 0 013.07 0zM18.25 6.51a.357.357 0 00-.234-.335 2.94 2.94 0 00-2.032 0 .357.357 0 00-.234.335V17.49c0 .15.093.284.234.335a2.94 2.94 0 002.032 0 .357.357 0 00.234-.335V6.51zM8.535 4.766c.73.27 1.215.965 1.215 1.743V17.49c0 .778-.485 1.474-1.215 1.743a4.44 4.44 0 01-3.07 0A1.857 1.857 0 014.25 17.49V6.51c0-.778.485-1.474 1.215-1.743a4.44 4.44 0 013.07 0zM8.25 6.51a.357.357 0 00-.234-.335 2.94 2.94 0 00-2.032 0 .357.357 0 00-.234.335V17.49c0 .15.093.284.234.335a2.94 2.94 0 002.032 0 .357.357 0 00.234-.335V6.51z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPause;
