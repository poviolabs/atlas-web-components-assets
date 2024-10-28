import type { SVGProps } from 'react';

export const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="fill-current"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7 20.166q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V9.333q0-.687.49-1.177T7 7.666h2.5v1.667H7V18.5h10V9.333h-2.5V7.666H17q.687 0 1.177.49t.49 1.177V18.5q0 .687-.49 1.177t-1.177.49zm4.167-5.833V5.021L9.833 6.354 8.667 5.166 12 1.833l3.333 3.333-1.166 1.188-1.334-1.333v9.312z"
    />
  </svg>
);
