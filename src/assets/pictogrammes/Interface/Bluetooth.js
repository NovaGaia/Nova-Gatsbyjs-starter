import * as React from "react";

function SvgBluetooth(props) {
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
        d="M6.02 6.48a.75.75 0 011.06-1.06l4.67 4.669V2.604c0-.891 1.077-1.338 1.707-.708l4.346 4.347a1 1 0 010 1.414L13.51 11.95l4.293 4.293a1 1 0 010 1.414l-4.346 4.346c-.63.63-1.707.184-1.707-.707v-7.485l-4.67 4.67a.75.75 0 11-1.06-1.062l5.47-5.47L6.02 6.48zm7.23-2.67v6.279l3.14-3.14-3.14-3.138zm3.14 13.14l-3.14-3.14v6.279l3.14-3.14z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgBluetooth;
