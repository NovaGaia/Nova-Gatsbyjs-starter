import * as React from "react";

function SvgMapLocation(props) {
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
        d="M8.25 9a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.456 8.127a6.403 6.403 0 016.382-5.877h.324a6.403 6.403 0 016.382 5.877 6.895 6.895 0 01-1.534 4.931l-3.595 4.396a1.828 1.828 0 01-2.83 0L6.99 13.058a6.895 6.895 0 01-1.534-4.93zm6.382-4.377a4.903 4.903 0 00-4.887 4.5 5.395 5.395 0 001.2 3.859l3.595 4.396c.131.16.377.16.508 0l3.595-4.396a5.395 5.395 0 001.2-3.859 4.903 4.903 0 00-4.887-4.5h-.324z"
        fill="#000"
      />
      <path
        d="M7.67 16.335a.75.75 0 10-1.34-.67l-2 4A.75.75 0 005 20.75h14a.75.75 0 00.67-1.085l-2-4a.75.75 0 10-1.34.67l1.457 2.915H6.213l1.457-2.915z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMapLocation;
