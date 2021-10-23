import * as React from "react";

function SvgCloudCheck(props) {
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
        d="M15.03 10.47a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L11 13.44l2.97-2.97a.75.75 0 011.06 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.932 6.208a3.91 3.91 0 00-3.524 2.214.75.75 0 01-.948.373 4.375 4.375 0 10-1.586 8.455h11.65a2.978 2.978 0 10-.772-5.855.75.75 0 01-.938-.812 3.91 3.91 0 00-3.882-4.374zm-4.552.986a5.41 5.41 0 019.952 2.605 4.478 4.478 0 11.191 8.951H6.874A5.875 5.875 0 118.38 7.194z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgCloudCheck;
