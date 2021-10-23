import * as React from "react";

function SvgShare(props) {
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
        d="M14.25 5.5a3.25 3.25 0 11.833 2.173l-2.717 1.482-3.04 1.737a3.254 3.254 0 01.31 2.464l5.447 2.971a3.25 3.25 0 11-.719 1.316l-5.447-2.97a3.25 3.25 0 11-.652-4.902l3.37-1.926 2.729-1.489a3.254 3.254 0 01-.114-.856zm3.25-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm-11 7a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm9.25 7.75a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgShare;
