import * as React from "react";

function SvgInstagram(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 7a1 1 0 112 0 1 1 0 01-2 0z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zM8.75 12a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.258 2.833a47.72 47.72 0 00-10.516 0c-2.012.225-3.636 1.81-3.873 3.832a45.921 45.921 0 000 10.67c.237 2.022 1.86 3.607 3.873 3.832 3.467.387 7.05.387 10.516 0 2.012-.225 3.637-1.81 3.873-3.832a45.925 45.925 0 000-10.67c-.236-2.022-1.86-3.607-3.873-3.832zm-10.35 1.49a46.22 46.22 0 0110.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 010 10.32c-.155 1.318-1.22 2.368-2.55 2.516a46.217 46.217 0 01-10.183 0c-1.33-.148-2.396-1.198-2.55-2.516a44.423 44.423 0 010-10.32c.154-1.318 1.22-2.368 2.55-2.516z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgInstagram;
