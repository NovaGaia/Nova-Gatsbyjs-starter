import * as React from "react";

function SvgCurrentLocation(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25a.75.75 0 01.75.75v1.282a8.752 8.752 0 017.968 7.968H22a.75.75 0 010 1.5h-1.282a8.752 8.752 0 01-7.968 7.968V22a.75.75 0 01-1.5 0v-1.282a8.752 8.752 0 01-7.968-7.968H2a.75.75 0 010-1.5h1.282a8.752 8.752 0 017.968-7.968V2a.75.75 0 01.75-.75zM4.75 12a7.25 7.25 0 1014.5 0 7.25 7.25 0 00-14.5 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCurrentLocation;
