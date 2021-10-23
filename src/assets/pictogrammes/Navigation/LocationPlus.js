import * as React from "react";

function SvgLocationPlus(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 6.25a.75.75 0 01.75.75v2h2a.75.75 0 010 1.5h-2v2a.75.75 0 11-1.5 0v-2h-2a.75.75 0 010-1.5h2V7a.75.75 0 01.75-.75z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.784 1.25a8.288 8.288 0 00-8.26 7.607 8.943 8.943 0 001.99 6.396l4.793 5.861a2.187 2.187 0 003.386 0l4.793-5.861a8.944 8.944 0 001.99-6.396 8.288 8.288 0 00-8.26-7.607h-.432zM5.02 8.98a6.788 6.788 0 016.765-6.23h.432a6.788 6.788 0 016.765 6.23 7.443 7.443 0 01-1.656 5.323l-4.793 5.862a.687.687 0 01-1.064 0l-4.793-5.862A7.443 7.443 0 015.02 8.98z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgLocationPlus;
