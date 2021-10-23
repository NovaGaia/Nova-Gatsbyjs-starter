import * as React from "react";

function SvgShuffle(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.47 5.47a.75.75 0 000 1.06l.72.72h-3.813a1.75 1.75 0 00-1.575.987l-.21.434a.4.4 0 000 .35l.568 1.174a.2.2 0 00.36 0l.632-1.304a.25.25 0 01.225-.141h3.812l-.72.72a.75.75 0 101.061 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM10.034 15.329a.4.4 0 000-.35l-.57-1.174a.2.2 0 00-.36 0l-.63 1.304a.25.25 0 01-.226.141H5a.75.75 0 000 1.5h3.248a1.75 1.75 0 001.575-.987l.21-.434z"
        fill="#000"
      />
      <path
        d="M16.47 18.53a.75.75 0 010-1.06l.72-.72h-3.813a1.75 1.75 0 01-1.575-.987L8.473 8.89a.25.25 0 00-.225-.141H5a.75.75 0 010-1.5h3.248c.671 0 1.283.383 1.575.987l3.329 6.872a.25.25 0 00.225.141h3.812l-.72-.72a.75.75 0 111.061-1.06l2 2a.75.75 0 010 1.06l-2 2a.75.75 0 01-1.06 0z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgShuffle;
