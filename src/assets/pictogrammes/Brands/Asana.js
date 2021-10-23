import * as React from "react";

function SvgAsana(props) {
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
        d="M10.47 3.554a4 4 0 113.06 7.391 4 4 0 01-3.06-7.39zM12 4.75a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM5.47 12.555a4 4 0 113.061 7.391 4 4 0 01-3.062-7.392zM7 13.75a2.5 2.5 0 100 5.001 2.5 2.5 0 000-5.001zM17 12.25a4 4 0 100 8 4 4 0 000-8zm-.957 1.69a2.5 2.5 0 111.914 4.62 2.5 2.5 0 01-1.914-4.62z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgAsana;
