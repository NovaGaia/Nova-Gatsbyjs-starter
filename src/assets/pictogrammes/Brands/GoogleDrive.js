import * as React from "react";

function SvgGoogleDrive(props) {
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
        d="M7.994 3.124a.75.75 0 01.65-.374h6.713a.75.75 0 01.649.374l6.643 11.482a.75.75 0 01-.01.77l-3.41 5.518a.75.75 0 01-.638.356H5.41a.75.75 0 01-.638-.356l-3.41-5.518a.75.75 0 01-.01-.77L7.994 3.124zm.651 1.87L2.874 14.97l2.518 4.077 2.603-4.441.001-.003 3.119-5.361-2.47-4.246zm3.338 5.739l-2.036 3.499h4.07l-2.034-3.5zm3.77 3.499H20.7L14.924 4.25H9.947l5.806 9.982zm4.902 1.5H9.073L6.718 19.75h11.455l2.482-4.018z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgGoogleDrive;
