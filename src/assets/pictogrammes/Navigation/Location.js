import * as React from "react";

function SvgLocation(props) {
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
        d="M7.25 10a4.75 4.75 0 119.5 0 4.75 4.75 0 01-9.5 0zM12 6.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.524 8.857a8.288 8.288 0 018.26-7.607h.432a8.288 8.288 0 018.26 7.607 8.944 8.944 0 01-1.99 6.396l-4.793 5.861a2.187 2.187 0 01-3.386 0l-4.793-5.861a8.943 8.943 0 01-1.99-6.396zm8.26-6.107A6.788 6.788 0 005.02 8.98a7.443 7.443 0 001.656 5.323l4.793 5.862a.687.687 0 001.064 0l4.793-5.862A7.443 7.443 0 0018.98 8.98a6.788 6.788 0 00-6.765-6.23h-.432z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgLocation;
