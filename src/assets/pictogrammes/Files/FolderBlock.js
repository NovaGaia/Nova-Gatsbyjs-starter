import * as React from "react";

function SvgFolderBlock(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.68 9.983c.04.248.075.496.105.745a.422.422 0 00.243.329c.355.165.69.364 1.003.592.143.104.35-.002.337-.178a22.231 22.231 0 00-.207-1.724l-.064-.402a2.658 2.658 0 00-2.625-2.239H9.158A2.298 2.298 0 006.903 5.25H4.612a2.68 2.68 0 00-2.66 2.36l-.273 2.27a24.23 24.23 0 00.221 7.243 2.629 2.629 0 002.399 2.15l1.514.108c1.723.123 3.45.185 5.178.185.155 0 .251-.17.18-.306a5.96 5.96 0 01-.378-.902.42.42 0 00-.392-.294 71.17 71.17 0 01-4.481-.18l-1.514-.108a1.128 1.128 0 01-1.03-.922 22.73 22.73 0 01-.208-6.796l.272-2.27A1.18 1.18 0 014.612 6.75h2.291c.44 0 .797.357.797.797 0 .585.474 1.06 1.06 1.06h8.712c.57 0 1.054.413 1.144.975l.064.401z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16.5c0 .972.308 1.872.832 2.607A4.48 4.48 0 0016.5 21a4.5 4.5 0 10-4.5-4.5zm4.5 3a2.986 2.986 0 01-1.524-.415l4.108-4.109A3 3 0 0116.5 19.5zm-2.585-1.476l4.109-4.109a3 3 0 00-4.109 4.109z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgFolderBlock;
