import * as React from "react";

function SvgStarHalf(props) {
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
        d="M10.419 4.23c.64-1.104 2.331-.65 2.331.628v11.68a2.75 2.75 0 01-1.469 2.434l-3.275 1.724c-1.297.683-2.81-.435-2.535-1.875l.7-3.676a1.25 1.25 0 00-.43-1.197l-2.5-2.07c-1.164-.965-.64-2.852.856-3.078l3.43-.518a1.25 1.25 0 00.894-.609l1.998-3.443zm.831 1.557l-1.532 2.64A2.75 2.75 0 017.75 9.764l-3.43.518a.25.25 0 00-.121.44l2.499 2.07a2.75 2.75 0 01.947 2.632l-.7 3.676a.25.25 0 00.362.268l3.275-1.724a1.25 1.25 0 00.668-1.107V5.787z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgStarHalf;
