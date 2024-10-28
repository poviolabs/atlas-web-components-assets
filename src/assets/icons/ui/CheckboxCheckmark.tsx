import type { SVGProps } from 'react';

export const CheckboxCheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 9"
    className="fill-current"
    {...props}
  >
    <path
      stroke="#F8F8FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 1 4.125 8 1 4.818"
    />
  </svg>
);
