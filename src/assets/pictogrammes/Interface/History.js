import * as React from "react";

function SvgHistory(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.865 6.882A7.25 7.25 0 114.75 12a.75.75 0 00-1.5 0 8.75 8.75 0 102.552-6.176.756.756 0 00-.07.08L4.475 4.646a.5.5 0 00-.852.309L3.27 8.844a.5.5 0 00.543.543l3.89-.354a.5.5 0 00.307-.851L6.782 6.954a.757.757 0 00.083-.072z"
        fill="#000"
      />
      <path
        d="M12.75 7a.75.75 0 00-1.5 0v5a.75.75 0 00.352.636l3 1.875a.75.75 0 10.796-1.272l-2.648-1.655V7z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgHistory;
