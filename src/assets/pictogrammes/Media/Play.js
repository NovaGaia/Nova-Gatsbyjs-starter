import * as React from "react";

function SvgPlay(props) {
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
        d="M19.266 10.484a1.917 1.917 0 010 3.032 35.764 35.764 0 01-9.916 5.416l-.653.232c-1.248.443-2.566-.401-2.735-1.69a42.49 42.49 0 010-10.948c.169-1.289 1.487-2.133 2.735-1.69l.653.232a35.765 35.765 0 019.916 5.416zm-.918 1.846a.417.417 0 000-.66 34.262 34.262 0 00-9.5-5.189l-.653-.232a.572.572 0 00-.746.472 40.99 40.99 0 000 10.558.572.572 0 00.746.471l.653-.231a34.263 34.263 0 009.5-5.19z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPlay;
