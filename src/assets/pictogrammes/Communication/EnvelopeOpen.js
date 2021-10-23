import * as React from "react";

function SvgEnvelopeOpen(props) {
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
        d="M19.806 5.37a3.136 3.136 0 011.268 2.08c.045.3.086.602.122.903.28 2.603.268 5.605-.122 8.197a3.138 3.138 0 01-2.831 2.66l-1.51.131a54.654 54.654 0 01-9.466 0l-1.51-.13a3.138 3.138 0 01-2.831-2.66c-.39-2.593-.403-5.595-.122-8.198.036-.301.076-.603.122-.904A3.136 3.136 0 014.19 5.373l-.001-.007.047-.026c.173-.12.358-.223.553-.307l4.416-2.454a5.75 5.75 0 015.585 0l4.405 2.448c.205.087.399.195.578.321l.033.018v.005zm-.84 1.244l-4.904-2.723a4.25 4.25 0 00-4.128 0L5.043 6.608a1.637 1.637 0 00-.634 1.065 29.28 29.28 0 00-.034.233l5.56 3.09a4.25 4.25 0 004.129 0l5.56-3.09a30.71 30.71 0 00-.033-.233 1.637 1.637 0 00-.626-1.059zm.74 8.866c.238-1.979.272-3.976.102-5.96l-5.016 2.787a5.75 5.75 0 01-5.585 0L4.191 9.52a29.1 29.1 0 00.218 6.807 1.637 1.637 0 001.478 1.389l1.51.131c3.063.266 6.143.266 9.205 0l1.51-.131a1.637 1.637 0 001.479-1.389c.042-.281.08-.564.114-.847z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgEnvelopeOpen;
