import * as React from "react";

function SvgImage(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.267 4.658a54.647 54.647 0 019.465 0l1.51.132a3.138 3.138 0 012.832 2.66 30.604 30.604 0 010 9.1 3.138 3.138 0 01-2.832 2.66l-1.51.131a54.635 54.635 0 01-9.465 0l-1.51-.131a3.138 3.138 0 01-2.831-2.66 30.601 30.601 0 010-9.1 3.138 3.138 0 012.831-2.66l1.51-.132zm9.335 1.495a53.147 53.147 0 00-9.205 0l-1.51.131a1.638 1.638 0 00-1.478 1.388 29.101 29.101 0 00-.311 5.17L7.969 8.97a.75.75 0 011.091.032l3.672 4.13 2.53-.844a.75.75 0 01.795.21l3.52 3.91.014-.08a29.098 29.098 0 000-8.656 1.638 1.638 0 00-1.478-1.388l-1.51-.131zm2.018 11.435l-3.349-3.721-2.534.844a.75.75 0 01-.798-.213l-3.471-3.905-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 001.478 1.389l1.51.131c3.063.266 6.143.266 9.205 0l1.51-.131c.18-.016.35-.06.508-.128z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgImage;
