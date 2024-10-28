import type { SVGProps } from 'react';

export const MouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="fill-current"
    {...props}
  >
    <rect
      width={14}
      height={22}
      x={5}
      y={1}
      stroke="currentColor"
      strokeWidth={2}
      rx={7}
    />
    <rect
      width={2.667}
      height={5.333}
      x={10.668}
      y={4}
      fill="currentColor"
      rx={1.333}
    />
  </svg>
);
