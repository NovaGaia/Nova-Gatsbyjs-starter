import * as React from "react";

function SvgUmbrella(props) {
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
        d="M12.75 2a.75.75 0 00-1.5 0v.278c-4.984.38-8.92 4.505-8.999 9.567a.917.917 0 00.766.918c2.727.455 5.479.7 8.233.739V19a.75.75 0 01-1.5 0v-.5a.75.75 0 00-1.5 0v.5a2.25 2.25 0 004.5 0v-5.498a54.635 54.635 0 008.233-.739.917.917 0 00.766-.918c-.08-5.062-4.016-9.187-9-9.567V2zm7.476 9.366a8.25 8.25 0 00-16.452 0c5.45.854 11.001.854 16.452 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgUmbrella;
