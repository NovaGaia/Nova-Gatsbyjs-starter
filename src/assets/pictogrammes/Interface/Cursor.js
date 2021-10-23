import * as React from "react";

function SvgCursor(props) {
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
        d="M5.255 3.724c-.1-1.192 1.235-1.85 2.152-1.238l.296.198a90.866 90.866 0 0112.638 10.18c.97.936.115 2.412-1.094 2.282l-5.266-.564a1.208 1.208 0 00-1.234.68l-2.129 4.697c-.514 1.135-2.207 1.03-2.544-.195a86.015 86.015 0 01-2.79-15.693l-.03-.347zm1.517.142l.007.08a84.508 84.508 0 002.636 15.035l1.966-4.338c.48-1.06 1.604-1.676 2.76-1.552l4.806.515A89.39 89.39 0 006.87 3.93l-.098-.065z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCursor;
