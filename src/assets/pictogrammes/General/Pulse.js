import * as React from "react";

function SvgPulse(props) {
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
        d="M8.24 4.876a.75.75 0 00-1.454-.106l-2.09 6.48H2a.75.75 0 000 1.5h3.242a.75.75 0 00.714-.52L7.27 8.16l1.84 10.965a.75.75 0 001.46.083l2.43-8.48 1.28 4.48a.75.75 0 001.368.172l1.54-2.629h1.166a2.751 2.751 0 100-1.5h-1.595a.75.75 0 00-.648.37l-.87 1.488-1.519-5.314a.75.75 0 00-1.442 0l-2.239 7.814-1.8-10.732zM19.75 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPulse;
