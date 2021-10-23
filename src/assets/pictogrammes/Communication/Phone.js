import * as React from "react";

function SvgPhone(props) {
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
        d="M5.84 9.856a17.217 17.217 0 008.922 8.663l.012.005.764.34a2.25 2.25 0 002.74-.737l1.274-1.763a.25.25 0 00-.046-.341l-2.224-1.795a.25.25 0 00-.358.046l-.866 1.168a.75.75 0 01-.912.237 13.387 13.387 0 01-6.67-6.67.75.75 0 01.237-.912l1.168-.866a.25.25 0 00.046-.358L8.132 4.648a.25.25 0 00-.34-.046l-1.774 1.28a2.25 2.25 0 00-.731 2.756l.553 1.217v.001zm8.33 10.041a18.716 18.716 0 01-9.693-9.416l-.001-.002-.555-1.22A3.75 3.75 0 015.14 4.666l1.773-1.28a1.75 1.75 0 012.386.32l1.796 2.225a1.75 1.75 0 01-.32 2.505l-.67.496a11.892 11.892 0 005.118 5.118l.496-.67a1.75 1.75 0 012.505-.32l2.224 1.795a1.75 1.75 0 01.32 2.387l-1.274 1.764a3.75 3.75 0 01-4.566 1.229l-.758-.338z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgPhone;
