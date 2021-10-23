import * as React from "react";

function SvgCloudDownload(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.086 12.531a.75.75 0 00-1.055-.117L12.75 13.44V10a.75.75 0 10-1.5 0v3.44l-1.282-1.026a.75.75 0 00-.937 1.172l2.498 1.998a.747.747 0 00.946-.003l2.494-1.995a.75.75 0 00.117-1.055z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.46 7.284a5.296 5.296 0 019.734 2.543 4.386 4.386 0 11.17 8.77H7A5.75 5.75 0 118.46 7.284zm4.45-.922a3.796 3.796 0 00-3.422 2.15.75.75 0 01-.947.372A4.25 4.25 0 107 17.096h11.362a2.887 2.887 0 10-.747-5.675.75.75 0 01-.938-.812 3.795 3.795 0 00-3.769-4.247z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCloudDownload;
