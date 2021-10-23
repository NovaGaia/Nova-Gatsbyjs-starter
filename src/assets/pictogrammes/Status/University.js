import * as React from "react";

function SvgUniversity(props) {
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
        d="M11.612 3.302c.243-.07.5-.07.743 0 .518.147 1.04.283 1.564.42 2.461.641 4.96 1.293 7.184 3.104l1.024.834c.415.338.623.84.623 1.34v7a.75.75 0 01-1.5 0v-4.943l-.163.133a11.946 11.946 0 01-2.398 1.513c.04.091.061.191.061.297v4.294a2.75 2.75 0 01-1.751 2.562l-4 1.56a2.75 2.75 0 01-1.998 0l-4-1.56a2.75 2.75 0 01-1.751-2.562V13c0-.108.023-.211.064-.304-.83-.399-1.64-.89-2.417-1.522l-1.024-.834c-.83-.677-.83-2.003 0-2.68l1.04-.85C5.12 5.01 7.602 4.361 10.044 3.723a74.375 74.375 0 001.568-.421zm9.638 5.699c0-.09-.036-.15-.07-.178l-1.024-.834C18 6.5 16.078 5.843 13.64 5.202a90.449 90.449 0 01-1.656-.446c-.57.161-1.124.307-1.662.449-2.42.636-4.529 1.191-6.46 2.768l-1.042.849c-.034.028-.07.087-.07.177s.036.15.07.178l1.025.834c1.948 1.587 4.076 2.146 6.515 2.787.537.14 1.088.286 1.656.446.57-.161 1.124-.307 1.662-.449 2.42-.636 4.529-1.191 6.46-2.768l1.041-.849c.035-.028.071-.087.071-.177zm-7.294 5.276c1.1-.287 2.207-.577 3.294-.972v3.989c0 .515-.316.977-.796 1.165l-4 1.559a1.25 1.25 0 01-.908 0l-4-1.56a1.25 1.25 0 01-.796-1.164v-3.998c1.099.4 2.219.692 3.33.982.525.137 1.047.273 1.565.42.243.07.5.07.743 0 .519-.148 1.042-.284 1.568-.421z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgUniversity;
