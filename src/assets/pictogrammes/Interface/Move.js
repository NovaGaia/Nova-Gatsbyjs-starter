import * as React from "react";

function SvgMove(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.47 6.53a.75.75 0 001.06 0l.72-.72v5.44H5.81l.72-.72a.75.75 0 10-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 001.06-1.06l-.72-.72h5.44v5.44l-.72-.72a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l2-2a.75.75 0 10-1.06-1.06l-.72.72v-5.44h5.44l-.72.72a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72h-5.44V5.81l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 000 1.06z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgMove;
